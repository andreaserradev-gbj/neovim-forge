/**
 * Checkpoint validation script
 *
 * Validates that a day's checkpoint requirements are met.
 * Used by CI and can be run locally.
 *
 * Usage: npx tsx scripts/validate-checkpoint.ts [day-number]
 * Example: npx tsx scripts/validate-checkpoint.ts 1
 */

import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dayNumber = process.argv[2];

if (!dayNumber) {
  console.log("Usage: npx tsx scripts/validate-checkpoint.ts [day-number]");
  console.log("Example: npx tsx scripts/validate-checkpoint.ts 1");
  process.exit(1);
}

const dayPadded = dayNumber.padStart(2, "0");
const dayDir = `day-${dayPadded}`;

console.log(`\nValidating checkpoint for ${dayDir}...\n`);

// Check that the course content exists
const courseDir = join("course", dayDir);
if (!existsSync(join(courseDir, "index.md"))) {
  console.error(`ERROR: ${courseDir}/index.md not found`);
  process.exit(1);
}

// Read the checkpoint file if it exists
const checkpointPath = join(courseDir, "checkpoint.md");
if (existsSync(checkpointPath)) {
  const checkpoint = readFileSync(checkpointPath, "utf-8");
  console.log(`Checkpoint requirements found for ${dayDir}`);

  // Extract expected files from checkpoint (lines starting with - `file`)
  const filePattern = /`([^`]+\.(astro|ts|tsx|css|mjs|json))`/g;
  const expectedFiles: string[] = [];
  let match;
  while ((match = filePattern.exec(checkpoint)) !== null) {
    if (match[1].startsWith("app/")) {
      expectedFiles.push(match[1]);
    }
  }

  if (expectedFiles.length > 0) {
    console.log("\nExpected files:");
    let allFound = true;
    for (const file of expectedFiles) {
      const exists = existsSync(file);
      console.log(`  ${exists ? "OK" : "MISSING"}: ${file}`);
      if (!exists) allFound = false;
    }

    if (!allFound) {
      console.error("\nSome expected files are missing.");
      process.exit(1);
    }
  }
}

// Check that the commit message follows the convention
try {
  const lastCommit = execSync("git log -1 --pretty=%s", {
    encoding: "utf-8",
  }).trim();
  const expectedPrefix = `day-${dayPadded}:`;

  if (lastCommit.startsWith(expectedPrefix)) {
    console.log(`\nCommit message OK: "${lastCommit}"`);
  } else {
    console.log(`\nWARNING: Last commit doesn't match expected prefix.`);
    console.log(`  Expected: "${expectedPrefix}..."`);
    console.log(`  Got: "${lastCommit}"`);
  }
} catch {
  console.log("\nNo git history found (this is fine for initial validation).");
}

// Try to build the app
console.log("\nChecking app build...");
try {
  execSync("cd app && npm run build 2>&1", { encoding: "utf-8" });
  console.log("App build: OK");
} catch (error) {
  console.error("App build: FAILED");
  if (error instanceof Error) {
    console.error(error.message);
  }
  process.exit(1);
}

console.log(`\n${dayDir} checkpoint: PASSED\n`);
