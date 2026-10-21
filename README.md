# Anime Nihongo

A phone-first Japanese course for anime fans, built from proven learning methods. Installable PWA, works offline, no build step, nothing paywalled.

## How it teaches
- **Levels → units → items.** Five levels (Foundations, Starter ≈N5, Anime-ready ≈N4, Intermediate ≈N3, Advanced ≈N2–N1). Each unit mixes kana, words, kanji and grammar, and later levels reuse earlier items. Everything is unlocked; a "next up" suggestion keeps you on track.
- **Spaced repetition (SRS).** Every item enters a review schedule (4h → 8h → 1d → 3d → 1w → 2w → 1mo → 4mo). Wrong answers drop you back. Items move through learning → familiar → strong → mastered.
- **Graded recall.** Question types escalate with mastery: recognise → recall → listen → type (romaji or kana).
- **Lessons with mnemonics**, then an immediate quiz.
- **Grammar** with explanations, anime examples, tap-to-hear, and fill-in-the-blank drills that feed the SRS.
- **Read & listen** dialogues, with reading/English toggles, shadowing (record yourself & compare) and **sentence mining** (save lines or your own words into your deck).
- **Level check-ups** with fast-track so existing learners can skip ahead.
- **Streak, XP, daily goal, stats, backup/restore.**

## What's inside
889 items across 5 levels / 29 units: 208 kana, 430 words, 198 kanji, 53 grammar points, 12 dialogues. Animated stroke order for every kana and kanji, a pitch-accent primer, listening drills, a voice picker for the best on-device Japanese voice.

## Run locally
    python3 -m http.server 8000   # open http://localhost:8000

## Install on iPhone
1. Host the folder over HTTPS (GitHub Pages workflow included — Settings → Pages → Source: *GitHub Actions*).
2. Open the site in **Safari** on the iPhone → Share → **Add to Home Screen**.
3. Open it from the Home Screen icon (progress is stored per install — don't mix Safari and Home Screen use).
4. Settings → Accessibility → Spoken Content → Voices → Japanese: download an *Enhanced* voice, then pick it in the app under Me → Voice.

## Credits
Stroke-order data: [KanjiVG](https://kanjivg.tagaini.net) © Ulrich Apel et al., CC BY-SA 3.0 (`strokes.js` stays under that licence).

## Adding content
Content lives in plain data files: `content-vocab.js`, `content-kanji.js`, `content-grammar.js`, `content-read.js`, and the level/unit structure in `content-path.js`. Add rows and they appear in the path, SRS and library automatically.
