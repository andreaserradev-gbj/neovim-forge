/**
 * Challenge seed script
 *
 * Reads challenge JSON definitions and validates their structure.
 * This script is built during Day 20 (Macros) as a practical exercise.
 *
 * Usage: npx tsx scripts/seed-challenge.ts
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

interface Challenge {
  id: string;
  week: number;
  day: number;
  title: string;
  type: "editing" | "navigation" | "refactoring" | "speed";
  description: string;
  skills: string[];
  startingCode: string;
  expectedCode: string;
  optimalKeystrokes: number;
  hints: string[];
  tasks?: string[];
}

const challengesDir = "challenges";
const files = readdirSync(challengesDir).filter((f) => f.endsWith(".json"));

let totalChallenges = 0;
let totalErrors = 0;

console.log("=== Challenge Validation ===\n");

for (const file of files) {
  const path = join(challengesDir, file);
  const content = readFileSync(path, "utf-8");

  let challenges: Challenge[];
  try {
    challenges = JSON.parse(content);
  } catch {
    console.error(`ERROR: Failed to parse ${file}`);
    totalErrors++;
    continue;
  }

  console.log(`${file}: ${challenges.length} challenges`);

  for (const challenge of challenges) {
    totalChallenges++;

    // Validate required fields
    const required: (keyof Challenge)[] = [
      "id",
      "week",
      "day",
      "title",
      "type",
      "description",
      "skills",
    ];

    for (const field of required) {
      if (!challenge[field]) {
        console.error(`  ERROR: ${challenge.id || "unknown"} missing ${field}`);
        totalErrors++;
      }
    }

    // Validate type
    const validTypes = ["editing", "navigation", "refactoring", "speed"];
    if (!validTypes.includes(challenge.type)) {
      console.error(`  ERROR: ${challenge.id} has invalid type: ${challenge.type}`);
      totalErrors++;
    }

    // Editing challenges should have startingCode and expectedCode
    if (challenge.type === "editing") {
      if (!challenge.startingCode) {
        console.error(`  WARNING: ${challenge.id} (editing) has no startingCode`);
      }
      if (!challenge.expectedCode) {
        console.error(`  WARNING: ${challenge.id} (editing) has no expectedCode`);
      }
    }

    // Navigation/speed challenges should have tasks
    if (
      (challenge.type === "navigation" || challenge.type === "speed") &&
      !challenge.tasks?.length
    ) {
      console.error(`  WARNING: ${challenge.id} (${challenge.type}) has no tasks`);
    }

    console.log(`  OK: ${challenge.id} (${challenge.type})`);
  }

  console.log("");
}

console.log("=== Summary ===");
console.log(`Total challenges: ${totalChallenges}`);
console.log(`Errors: ${totalErrors}`);

if (totalErrors > 0) {
  process.exit(1);
}

console.log("\nAll challenges valid.");
