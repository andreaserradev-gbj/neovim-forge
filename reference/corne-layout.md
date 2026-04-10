---
title: "Corne Keyboard Layout Reference"
description: "46-key Corne MX Pro layout optimized for Neovim — a Neovim-optimized layout"
---

## Overview

The Corne MX Pro is a 46-key split mechanical keyboard with:

- **Standard QWERTY base layer** with no timing ambiguity
- **4 inner keys** per hand (where OLEDs would go): dedicated iCtrl (top) and iAlt (home row) with zero modifier timing issues
- **J+K simultaneous press = Escape** — Vim muscle memory from the home row, no corner reaches
- **No home-row mods active** — removed due to 175-250ms input delay per keystroke, but inner keys provide all necessary modifiers
- **Three modifier access paths** — choose what works for your hands: inner keys (timing-free), home-row holds (fastest once learned), or outer columns/thumbs (traditional)

This reference focuses on this layout, optimized for Neovim and terminal work on macOS.

---

## Layer 0 — Base (Standard QWERTY)

```
┌──────┬──────┬──────┬──────┬──────┬──────┐                    ┌──────┬──────┬──────┬──────┬──────┬──────┐
│ Tab  │  Q   │  W   │  E   │  R   │  T   │┌─────┐      ┌─────┐│  Y   │  U   │  I   │  O   │  P   │ Bksp │
├──────┼──────┼──────┼──────┼──────┼──────┤│iCtrl│      │iCtrl│├──────┼──────┼──────┼──────┼──────┼──────┤
│ Ctrl │  A   │  S   │  D   │  F   │  G   │├─────┤      ├─────┤│  H   │  J   │  K   │  L   │ ;  : │ '  " │
├──────┼──────┼──────┼──────┼──────┼──────┤│iAlt │      │iAlt │├──────┼──────┼──────┼──────┼──────┼──────┤
│Shift │  Z   │  X   │  C   │  V   │  B   │└─────┘      └─────┘│  N   │  M   │ ,  < │ .  > │ /  ? │ Esc  │
└──────┴──────┴──────┼──────┼──────┼──────┤                    ├──────┼──────┼──────┼──────┴──────┴──────┘
                     │ Cmd  │Lower │Space │                    │Enter │Raise │ Cmd  │
                     └──────┴──────┴──────┘                    └──────┴──────┴──────┘
```

Every key is a single, instant action — no ambiguity, no delays. Modifiers (Ctrl, Shift, Cmd) live on dedicated outer columns and thumb keys.

### Inner Keys

The 2 inner keys per half (where OLEDs would sit) eliminate modifier timing entirely:

| Position | Key | Use |
|---|---|---|
| Left inner top | **iCtrl** | Zellij `Ctrl+G`, FZF `Ctrl+T/R`, any Ctrl combo |
| Left inner home | **iAlt** | yabai `Alt+hjkl`, Zellij `Alt+hjkl`, any Alt combo |
| Right inner top | **iCtrl** | Right-hand Ctrl when left is busy |
| Right inner home | **iAlt** | Right-hand Alt when left is busy |

---

## Layer 1 — Lower (Numbers + Mouse Movement + Navigation)

Hold **Lower** (left thumb) to activate.

```
┌──────┬──────┬──────┬──────┬──────┬──────┐                    ┌──────┬──────┬──────┬──────┬──────┬──────┐
│ Tab  │ 1  ! │ 2  @ │ 3  # │ 4  $ │ 5  % │┌─────┐      ┌─────┐│ 6  ^ │ 7  & │ 8  * │ 9  ( │ 0  ) │ Del  │
├──────┼──────┼──────┼──────┼──────┼──────┤│iCtrl│      │iCtrl│├──────┼──────┼──────┼──────┼──────┼──────┤
│ Ctrl │M Left│M Down│ M Up │M Rght│CapsLk│├─────┤      ├─────┤│  ←   │  ↓   │  ↑   │  →   │ C+←  │ C+→  │
├──────┼──────┼──────┼──────┼──────┼──────┤│iAlt │      │iAlt │├──────┼──────┼──────┼──────┼──────┼──────┤
│Shift │ C+1  │ C+2  │ C+3  │ C+4  │ C+5  │└─────┘      └─────┘│ C+6  │ C+7  │ C+8  │ PgDn │ PgUp │ C+↑  │
└──────┴──────┴──────┼──────┼──────┼──────┤                    ├──────┼──────┼──────┼──────┴──────┴──────┘
                     │ Cmd  │ ▓▓▓  │Space │                    │Enter │      │ Cmd  │
                     └──────┴──────┴──────┘                    └──────┴──────┴──────┘
```

Mouse movement is on the left home row (ASDF): A=left, S=down, D=up, F=right. Mouse buttons and scroll are on the Raise layer.

Navigation cluster on hjkl: arrows on right hand, PgDn/PgUp below. For Home/End, use Cmd+Left/Right (thumb Cmd + Lower+H or Lower+L).

macOS desktop switching as single keys: hold Lower + Ctrl+N (1–8) to jump to Desktop N, Ctrl+Left/Right for desktop nav, Ctrl+Up for Mission Control.

---

## Layer 2 — Raise (Symbols + Mouse Buttons/Scroll)

Hold **Raise** (right thumb) to activate.

```
┌──────┬──────┬──────┬──────┬──────┬──────┐                    ┌──────┬──────┬──────┬──────┬──────┬──────┐
│ Tab  │  !   │  @   │  #   │  $   │  %   │┌─────┐      ┌─────┐│  ^   │  &   │  *   │  (   │  )   │ Bksp │
├──────┼──────┼──────┼──────┼──────┼──────┤│iCtrl│      │iCtrl│├──────┼──────┼──────┼──────┼──────┼──────┤
│ Ctrl │Click │RClick│Wh Up │Wh Dn │  :   │├─────┤      ├─────┤│  -   │  =   │  [   │  ]   │  \   │  `   │
├──────┼──────┼──────┼──────┼──────┼──────┤│iAlt │      │iAlt │├──────┼──────┼──────┼──────┼──────┼──────┤
│Shift │MClick│ Wh L │ Wh R │      │      │└─────┘      └─────┘│  _   │  +   │  {   │  }   │  |   │  ~   │
└──────┴──────┴──────┼──────┼──────┼──────┤                    ├──────┼──────┼──────┼──────┴──────┴──────┘
                     │ Cmd  │      │Space │                    │Enter │ ▓▓▓  │ Cmd  │
                     └──────┴──────┴──────┘                    └──────┴──────┴──────┘
```

Left side provides full mouse control: Click/RClick on home row (A/S), Wh Up/Wh Dn (D/F), MClick/Wh L/Wh R on bottom row. Release Lower, hold Raise, then click/scroll — coordinates with mouse movement from Lower layer.

Right side is symbol pairing: unshifted on home row (-, =, [, ], \, ``), shifted on bottom row (_, +, {, }, |, ~). The `:` key at G position (left home row) gives quick Vim command mode access.

---

## Layer 3 — Adjust (F-keys + Media + RGB)

Hold **both Lower + Raise** simultaneously.

```
┌──────┬──────┬──────┬──────┬──────┬──────┐              ┌──────┬──────┬──────┬──────┬──────┬──────┐
│RESET │  F1  │  F2  │  F3  │  F4  │  F5  │              │  F6  │  F7  │  F8  │  F9  │ F10  │ F11  │
├──────┼──────┼──────┼──────┼──────┼──────┤              ├──────┼──────┼──────┼──────┼──────┼──────┤
│RGBTog│ Hue+ │ Sat+ │ Val+ │Bri + │Bri - │              │  ⏮   │ Vol- │ Vol+ │  ⏭   │ F12  │      │
├──────┼──────┼──────┼──────┼──────┼──────┤              ├──────┼──────┼──────┼──────┼──────┼──────┤
│RGBMod│ Hue- │ Sat- │ Val- │      │      │              │      │ Mute │ Play │      │      │      │
└──────┴──────┴──────┼──────┼──────┼──────┤              ├──────┼──────┼──────┼──────┴──────┴──────┘
                     │ Cmd  │ ▓▓▓  │Space │              │Enter │ ▓▓▓  │ Cmd  │
                     └──────┴──────┴──────┘              └──────┴──────┴──────┘
```

F1–F5 on left (mirror of number positions), F6–F11 on right. F12 on right home row. Media on hjkl positions: Prev/VolDn/VolUp/Next. Inner keys are inactive (ghost) on this layer.

---

## Vim-Specific Mappings

How common Vim operations map to physical Corne keys:

| Operation | Corne Keys | Notes |
|---|---|---|
| **Leader key** | Left thumb (Space) | Perfect thumb position, always accessible |
| **Escape** | J + K simultaneous | Home row combo, no pinky corner reach |
| **Colon (:)** | Raise + G position | Vim command mode, one layer + home row tap |
| **Arrow keys** | Lower + hjkl | Right hand, Vim navigation muscle memory |
| **Ctrl + hjkl** | iCtrl + hjkl | Window nav (LazyVim), dedicated inner key |
| **Alt + hjkl** | iAlt + hjkl | Word/buffer nav, dedicated inner key |
| **Ctrl + C** | iCtrl + C | Copy selection, dedicated Ctrl |
| **Tab navigation** | Tab (base), Shift+Tab (LShift + Tab) | Left-top and shift variants |

The J+K combo is critical: it replaces the corner Esc with a home-row combo, giving you instant Vim mode escapes without hand movement.

---

## Neovim Shortcuts on Corne

Mapping LazyVim / common Neovim keybindings to Corne execution:

| Action | Standard Binding | Corne Execution | Hand Movement |
|---|---|---|---|
| **Find files** | `leader-ff` | Space → f f | Left thumb + two taps, stays left |
| **Open explorer** | `leader-e` | Space → e | Left thumb + tap, minimal reach |
| **Grep/search** | `leader-s` | Space → s | Left thumb + tap |
| **Window left** | `Ctrl+H` | iCtrl + H | Left index inner key + right hand |
| **Window down** | `Ctrl+J` | iCtrl + J | Left index inner key + right hand |
| **Window up** | `Ctrl+K` | iCtrl + K | Left index inner key + right hand |
| **Window right** | `Ctrl+L` | iCtrl + L | Left index inner key + right hand |
| **Go to definition** | `gd` | g d | Base layer, no modifiers |
| **Show hover info** | `K` | K | Base layer (same as Vim) |
| **Code action** | `leader-ca` | Space → c a | Left thumb leader + two taps |
| **Rename symbol** | `leader-rn` | Space → r n | Left thumb leader + two taps |
| **Format document** | `leader-lf` | Space → l f | Left thumb leader + two taps |
| **Diagnostics** | `leader-d` | Space → d | Left thumb leader + one tap |
| **Toggle comment** | `gcc` | g c c | Base layer (no modifiers) |
| **Select line** | `V` | V | Shift + V, base layer |
| **Indent** | `>` / `<` | Lower + . / Lower + , | One layer down, right hand |

All core Neovim workflows stay on base or simple single-layer transitions. No complex modifier stacking needed.

---

## Tool Shortcuts

How your key terminal tools map to the Corne:

### Zellij

| Action | Standard | Corne | Notes |
|---|---|---|---|
| Toggle normal mode | `Ctrl+G` | iCtrl + G | Dedicated inner key, no timing |
| Focus pane left/down/up/right | `Alt+H/J/K/L` | iAlt + hjkl | Dedicated inner Alt, Vim-like navigation |
| New pane | `Alt+N` | iAlt + N | Single inner key combo |
| Resize increase/decrease | `Alt+=` / `Alt+-` | iAlt + Raise + = / - | Three parts but all physical keys |

Zellij is notably smooth on the Corne thanks to dedicated iCtrl (prefix) and iAlt (focus/resize). The iAlt + hjkl pattern mirrors your yabai usage.

### yabai

| Action | Standard | Corne | Notes |
|---|---|---|---|
| Focus window west/south/north/east | `Alt+H/J/K/L` | iAlt + hjkl | Dedicated inner Alt, pure physical keys |
| Grow window | `Ctrl+Alt+H/J/K/L` | iCtrl + iAlt + hjkl | Two inner keys + right hand navigation |
| Shrink window | `Ctrl+Alt+Cmd+H/J/K/L` | iCtrl + iAlt + Cmd + hjkl | Two inner + thumb Cmd + tap |

Window management is the Corne's strong suit — the iCtrl + iAlt + hjkl pattern for grow is natural and timing-free.

### FZF

| Action | Standard | Corne | Notes |
|---|---|---|---|
| File search | `Ctrl+T` | iCtrl + T | Single inner key combo |
| History search | `Ctrl+R` | iCtrl + R | Single inner key combo |
| Directory cd | `Alt+C` | iAlt + C | Single inner key combo |

FZF shortcuts are cleaner on the Corne — no corner reaches, no HRM timing concerns.

---

## The Three Modifier Paths

The Corne MX Pro gives you three ways to access each modifier. Use whichever feels natural for the moment:

### 1. Inner Keys (iCtrl / iAlt) — Zero Timing

**How it works:** Dedicated keys on the inner columns where OLEDs would go.

| Modifier | Left Key | Right Key |
|---|---|---|
| Ctrl | iCtrl (top inner) | iCtrl (top inner) |
| Alt | iAlt (home inner) | iAlt (home inner) |

**When to use:**
- Learning your first week
- Tricky situations where HRM timing matters
- Combos that need stability (Ctrl+Alt+cmd stacks)

**Pros:** No timing ambiguity, zero misfire risk, immediately reliable.

**Cons:** Requires stretching the index finger to two keys for Ctrl+Alt combos (iCtrl + iAlt + hjkl).

### 2. Home-Row Mods — Fastest Once Learned

**How it works:** Hold home-row letters as modifiers, tap them as letters.

| Modifier | Left Position | Right Position | Hold Term |
|---|---|---|---|
| Ctrl | D (middle finger) | K (middle finger) | ~200ms |
| Alt | S (ring finger) | L (ring finger) | ~200ms |
| Shift | F (index) | J (index) | ~175ms |
| Cmd | A (pinky) | ; (pinky) | ~250ms |

**When to use:**
- Once you're past week 2-3 and muscle memory is solid
- Frequently repeated combos (Alt+hjkl for yabai)
- All-on-one-hand sequences (A(Cmd) + C for copy)

**Pros:** Fastest once your fingers trust the timings. Adjacent fingers on one hand = no stretching.

**Cons:** Requires tuning per-finger timing, takes 2-4 weeks to feel natural. Risk of accidental triggers if timing is off.

**Note:** Currently disabled on this layout due to input lag concerns, but the timing windows are provided above if you want to re-enable and tune them.

### 3. Outer Columns & Thumbs — Traditional

**How it works:** Modifiers on the keyboard edges and thumb cluster.

| Modifier | Outer Left | Outer Right | Thumbs |
|---|---|---|---|
| Ctrl | Left column | — | — |
| Alt | — | — | Right thumb |
| Shift | Left/right column | Left/right column | — |
| Cmd | — | — | Both thumbs |

**When to use:**
- Pinky is tired from HRM (Cmd is hard to hold, use thumb instead)
- One-handed situations (other hand on mouse)
- Maximum stability (no timing at all)

**Pros:** Zero timing, maximum reach, traditional feel.

**Cons:** Requires hand movement to keyboard edge, less ergonomic, slower on average.

### Usage Pattern Over Time

**Week 1:** Stick to inner keys. No timing to learn, everything works immediately.

**Week 2:** Try HRMs on one or two fast combos (Alt+hjkl for yabai, Ctrl+G for Zellij). Fall back to inner keys when they misfire.

**Week 3-4:** HRM timing becomes automatic. You now have three tools: use HRMs for speed on familiar patterns, inner keys as fallback, outer columns when your fingers need a break.

---

## Combos

| Keys | Output | Use case |
|---|---|---|
| **J + K** (simultaneous) | Esc | Vim escape from home row — no reaching to the corner, no input delay |

The combo triggers when both keys are pressed within the combo window (default 50ms). Normal sequential J-then-K typing won't trigger it because the keys are pressed one-after-the-other, not simultaneously.

---

## Common Shortcut Examples

All modifier combos use the dedicated keys — inner keys, outer columns, or thumbs. No home-row mods required (though available if you want to graduate to them).

| Action | Keys to press | Notes |
|---|---|---|
| **Cmd+Shift+4** (screenshot) | Right thumb Cmd + LShift + Lower+4 | Right hand for Cmd, left Shift, left thumb Lower |
| **Cmd+Left** (line start) | Left thumb Cmd + Lower+H (arrow left) | Intuitive, one hand at a time |
| **Alt+Left** (word back) | iAlt (left inner) + Lower+H | Two keys + layer, both accessible same hand |
| **Ctrl+Right** (word forward) | iCtrl (left inner) + Lower+L | Similar to Alt, use Ctrl inner instead |
| **Cmd+Tab** (app switch) | Left thumb Cmd + Tab | Thumb + top-left key, smooth |
| **Ctrl+Alt+Cmd+H** (yabai shrink) | iCtrl + iAlt + Cmd + H | Two inners (left index stretch) + thumb Cmd + tap |

---

## Physical Layout Dimensions

- **46 keys total** — 30 alphanumeric keys (QWERTY), 8 inner column keys, 8 navigation/system keys
- **Split ergonomic** — left and right halves separate by ~5cm for shoulder comfort
- **Column stagger** — each column offset by row for natural finger positioning
- **Inner keys** — 2 per half, positioned where OLEDs would sit on full Corne builds

Load your layout in Vial via File > Load saved layout to flash to your board.
