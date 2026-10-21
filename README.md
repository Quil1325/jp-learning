# Anime Nihongo

A phone-first Japanese reference for anime fans: pronunciation, kana, and anime phrases, with tap-to-hear audio.
Installable PWA, works offline, no build step.

- **Sounds** – pronunciation guide (vowels, long vowels, っ, ん, the R sound, devoiced vowels…)
- **Kana** – hiragana/katakana charts, voiced and combo kana, katakana reading practice
- **Phrases** – searchable anime phrases with romaji, meaning, notes, and saved favorites
- **Quiz** – kana reading, listening, and phrase-meaning quizzes

## Run locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Use on iPhone
Host the folder anywhere with HTTPS (e.g. GitHub Pages), open it in Safari, then Share → Add to Home Screen.
Audio uses the iPhone's built-in Japanese voice (Settings → Accessibility → Spoken Content → Voices → Japanese for better quality).
Edit `data.js` to add phrases.
