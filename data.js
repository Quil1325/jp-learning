// Content for the app. Katakana is derived from hiragana (code point + 0x60).

const toKata = s => [...s].map(c => String.fromCharCode(c.charCodeAt(0) + 0x60)).join('');

// [hiragana, romaji] — null = empty cell in the chart
const KANA_ROWS = [
  { label: 'Vowels', cells: [['あ','a'],['い','i'],['う','u'],['え','e'],['お','o']] },
  { label: 'K',  cells: [['か','ka'],['き','ki'],['く','ku'],['け','ke'],['こ','ko']] },
  { label: 'S',  cells: [['さ','sa'],['し','shi'],['す','su'],['せ','se'],['そ','so']] },
  { label: 'T',  cells: [['た','ta'],['ち','chi'],['つ','tsu'],['て','te'],['と','to']] },
  { label: 'N',  cells: [['な','na'],['に','ni'],['ぬ','nu'],['ね','ne'],['の','no']] },
  { label: 'H',  cells: [['は','ha'],['ひ','hi'],['ふ','fu'],['へ','he'],['ほ','ho']] },
  { label: 'M',  cells: [['ま','ma'],['み','mi'],['む','mu'],['め','me'],['も','mo']] },
  { label: 'Y',  cells: [['や','ya'],null,['ゆ','yu'],null,['よ','yo']] },
  { label: 'R',  cells: [['ら','ra'],['り','ri'],['る','ru'],['れ','re'],['ろ','ro']] },
  { label: 'W',  cells: [['わ','wa'],null,null,null,['を','o']] },
  { label: 'N',  cells: [['ん','n']] },
];

const KANA_VOICED = [
  { label: 'G', cells: [['が','ga'],['ぎ','gi'],['ぐ','gu'],['げ','ge'],['ご','go']] },
  { label: 'Z', cells: [['ざ','za'],['じ','ji'],['ず','zu'],['ぜ','ze'],['ぞ','zo']] },
  { label: 'D', cells: [['だ','da'],['ぢ','ji'],['づ','zu'],['で','de'],['ど','do']] },
  { label: 'B', cells: [['ば','ba'],['び','bi'],['ぶ','bu'],['べ','be'],['ぼ','bo']] },
  { label: 'P', cells: [['ぱ','pa'],['ぴ','pi'],['ぷ','pu'],['ぺ','pe'],['ぽ','po']] },
];

const KANA_COMBO = [
  { label: 'KY', cells: [['きゃ','kya'],['きゅ','kyu'],['きょ','kyo']] },
  { label: 'SH', cells: [['しゃ','sha'],['しゅ','shu'],['しょ','sho']] },
  { label: 'CH', cells: [['ちゃ','cha'],['ちゅ','chu'],['ちょ','cho']] },
  { label: 'NY', cells: [['にゃ','nya'],['にゅ','nyu'],['にょ','nyo']] },
  { label: 'HY', cells: [['ひゃ','hya'],['ひゅ','hyu'],['ひょ','hyo']] },
  { label: 'MY', cells: [['みゃ','mya'],['みゅ','myu'],['みょ','myo']] },
  { label: 'RY', cells: [['りゃ','rya'],['りゅ','ryu'],['りょ','ryo']] },
  { label: 'GY', cells: [['ぎゃ','gya'],['ぎゅ','gyu'],['ぎょ','gyo']] },
  { label: 'J',  cells: [['じゃ','ja'],['じゅ','ju'],['じょ','jo']] },
  { label: 'BY', cells: [['びゃ','bya'],['びゅ','byu'],['びょ','byo']] },
  { label: 'PY', cells: [['ぴゃ','pya'],['ぴゅ','pyu'],['ぴょ','pyo']] },
];

const KANA_SECTIONS = [
  { name: 'Basic', rows: KANA_ROWS },
  { name: 'Voiced (゛ ゜)', rows: KANA_VOICED },
  { name: 'Combos (small ゃゅょ)', rows: KANA_COMBO },
];

// Pronunciation guide. `say` is the Japanese text spoken when tapped.
const SOUND_GUIDE = [
  {
    title: 'The 5 vowels',
    body: 'Japanese has only five vowel sounds and they never change. Say them short and crisp — no gliding like English "o" → "oh-w".',
    items: [
      { jp: 'あ', rom: 'a', tip: 'like "ah" in father' },
      { jp: 'い', rom: 'i', tip: 'like "ee" in see (short)' },
      { jp: 'う', rom: 'u', tip: '"oo" but lips relaxed, not rounded' },
      { jp: 'え', rom: 'e', tip: 'like "eh" in bet' },
      { jp: 'お', rom: 'o', tip: 'like "oh", but short and pure' },
    ],
  },
  {
    title: 'Long vowels matter',
    body: 'Holding a vowel twice as long changes the word. Anime romaji writes this as ō, ū, aa, ii… Count two beats.',
    items: [
      { jp: 'おばさん', rom: 'obasan', tip: 'aunt' },
      { jp: 'おばあさん', rom: 'obaasan', tip: 'grandmother — hold the "aa"' },
      { jp: 'ゆうき', rom: 'yūki', tip: 'courage (ゆう = long "yuu")' },
      { jp: 'おおきい', rom: 'ōkii', tip: 'big — both o and i are long' },
      { jp: 'ラーメン', rom: 'rāmen', tip: 'ー in katakana = hold the vowel' },
    ],
  },
  {
    title: 'The Japanese R',
    body: 'Not English R and not Spanish rolled R. Tap the tip of your tongue once on the ridge behind your top teeth — like the "tt" in butter. It can sound between R, L and D.',
    items: [
      { jp: 'らーめん', rom: 'rāmen', tip: 'ra' },
      { jp: 'さくら', rom: 'sakura', tip: 'cherry blossom' },
      { jp: 'ありがとう', rom: 'arigatō', tip: 'thank you' },
      { jp: 'れんしゅう', rom: 'renshū', tip: 'practice' },
    ],
  },
  {
    title: 'Small っ — the pause',
    body: 'A small っ doubles the next consonant: stop for a beat, then release. It is a silent hold, like the gap in "hot-tea" (not "ho-tea").',
    items: [
      { jp: 'やった', rom: 'yatta', tip: 'I did it!' },
      { jp: 'ちょっと', rom: 'chotto', tip: 'a little / wait a sec' },
      { jp: 'ざっけんな', rom: 'zakkenna', tip: 'don\'t mess with me' },
      { jp: 'まって', rom: 'matte', tip: 'wait!' },
    ],
  },
  {
    title: 'ん — the nasal',
    body: 'ん is its own full beat. It blends to match what follows: "n" before t/d/n, "m" before b/p/m, and a soft nasal at the end of a word.',
    items: [
      { jp: 'ほん', rom: 'hon', tip: 'book (ends with soft nasal)' },
      { jp: 'さんぽ', rom: 'sampo', tip: 'a walk (n sounds like m)' },
      { jp: 'おんな', rom: 'onna', tip: 'woman' },
      { jp: 'こんにちは', rom: 'konnichiwa', tip: 'hello (ん is its own beat)' },
    ],
  },
  {
    title: 'Whispered vowels',
    body: 'い and う between voiceless consonants (or at the end of a word like です／ます) are often barely voiced. That is why です sounds like "dess".',
    items: [
      { jp: 'です', rom: 'desu → des', tip: 'is / am / are' },
      { jp: 'ます', rom: 'masu → mas', tip: 'polite verb ending' },
      { jp: 'すき', rom: 'suki → ski', tip: 'like / love' },
      { jp: 'きます', rom: 'kimasu', tip: 'to come' },
    ],
  },
  {
    title: 'Tricky consonants',
    body: 'A few kana do not match English letters.',
    items: [
      { jp: 'ふ', rom: 'fu', tip: 'soft puff between "h" and "f", lips barely touching' },
      { jp: 'つ', rom: 'tsu', tip: '"ts" as in cats — start with t, then s' },
      { jp: 'ち', rom: 'chi', tip: '"chee"' },
      { jp: 'し', rom: 'shi', tip: '"she"' },
      { jp: 'じ', rom: 'ji', tip: '"jee"' },
      { jp: 'が', rom: 'ga', tip: 'mid-word often a soft nasal "nga"' },
    ],
  },
  {
    title: 'Particles that change sound',
    body: 'Three particles are spelled one way and spoken another.',
    items: [
      { jp: 'は', rom: 'wa', tip: 'topic marker — read "wa"' },
      { jp: 'を', rom: 'o', tip: 'object marker — read "o"' },
      { jp: 'へ', rom: 'e', tip: 'direction — read "e"' },
      { jp: 'わたしはアニメがすき', rom: 'watashi wa anime ga suki', tip: 'I like anime' },
    ],
  },
  {
    title: 'Flat rhythm',
    body: 'Every kana gets about the same length (a "mora"). Avoid heavy English stress: sa-ku-ra, not SAH-kuh-ruh. Pitch moves a little instead of volume.',
    items: [
      { jp: 'さくら', rom: 'sa-ku-ra', tip: '3 even beats' },
      { jp: 'ありがとう', rom: 'a-ri-ga-tō', tip: '5 beats (tō = long)' },
      { jp: 'ニンジャ', rom: 'nin-ja', tip: '3 beats: ni-n-ja' },
    ],
  },
];

// Anime phrases. cat is used for filter chips.
const PHRASES = [
  // Reactions
  { cat: 'Reactions', jp: 'すごい！', rom: 'Sugoi!', en: 'Amazing! / Wow!', note: 'The all-purpose awe. Stretch it: すっげー!' },
  { cat: 'Reactions', jp: 'やった！', rom: 'Yatta!', en: 'I did it! / Yes!', note: 'Hold the small っ for a beat.' },
  { cat: 'Reactions', jp: 'まさか！', rom: 'Masaka!', en: 'No way! / Impossible!', note: 'Villain classic.' },
  { cat: 'Reactions', jp: 'うそ！', rom: 'Uso!', en: 'No way! (lit. lie)', note: 'Short and sharp.' },
  { cat: 'Reactions', jp: 'なるほど', rom: 'Naruhodo', en: 'I see / That makes sense', note: 'Detective-anime staple.' },
  { cat: 'Reactions', jp: 'やばい', rom: 'Yabai', en: 'Uh oh / Crazy / Awesome', note: 'Bad or good depending on context.' },
  { cat: 'Reactions', jp: 'えっ？', rom: 'E?', en: 'Huh?', note: 'Quick surprised intake.' },
  { cat: 'Reactions', jp: 'かわいい！', rom: 'Kawaii!', en: 'Cute!', note: 'Say ka-wa-i-i, last i is long.' },
  { cat: 'Reactions', jp: 'かっこいい', rom: 'Kakkoii', en: 'Cool / Handsome', note: 'Hold the っ, hold the い.' },
  { cat: 'Reactions', jp: 'さすが', rom: 'Sasuga', en: 'As expected (of you)', note: 'Praise a rival or friend.' },

  // Fighting spirit
  { cat: 'Battle', jp: 'がんばって！', rom: 'Ganbatte!', en: 'Do your best!', note: 'Cheering someone on. ん then っ.' },
  { cat: 'Battle', jp: '負けない！', rom: 'Makenai!', en: 'I won\'t lose!', note: 'Hero determination.' },
  { cat: 'Battle', jp: '行くぞ！', rom: 'Ikuzo!', en: 'Here I go!', note: 'ぞ makes it a rough, masculine shout.' },
  { cat: 'Battle', jp: '待て！', rom: 'Mate!', en: 'Wait! / Stop!', note: 'Command form; 待って is softer.' },
  { cat: 'Battle', jp: 'やめろ！', rom: 'Yamero!', en: 'Stop it!', note: 'Rough command.' },
  { cat: 'Battle', jp: '諦めない', rom: 'Akiramenai', en: 'I won\'t give up', note: 'Shounen motto.' },
  { cat: 'Battle', jp: '信じてる', rom: 'Shinjiteru', en: 'I believe in you', note: 'Friendship power.' },
  { cat: 'Battle', jp: '大丈夫だ', rom: 'Daijōbu da', en: 'It\'s okay / I\'m fine', note: 'dai-jō-bu — long ō in the middle.' },
  { cat: 'Battle', jp: 'ふざけるな！', rom: 'Fuzakeru na!', en: 'Don\'t mess with me!', note: 'Angry. Rising rough tone.' },

  // Daily life
  { cat: 'Daily', jp: 'おはよう', rom: 'Ohayō', en: 'Good morning', note: 'Casual. Polite: おはようございます.' },
  { cat: 'Daily', jp: 'ありがとう', rom: 'Arigatō', en: 'Thank you', note: 'a-ri-ga-tō, even beats.' },
  { cat: 'Daily', jp: 'ごめん', rom: 'Gomen', en: 'Sorry', note: 'Casual. ごめんなさい = more polite.' },
  { cat: 'Daily', jp: 'いただきます', rom: 'Itadakimasu', en: 'Thanks for the meal', note: 'Said before eating.' },
  { cat: 'Daily', jp: 'ごちそうさま', rom: 'Gochisōsama', en: 'Thanks, that was delicious', note: 'Said after eating.' },
  { cat: 'Daily', jp: 'ただいま', rom: 'Tadaima', en: 'I\'m home', note: 'Reply: おかえり.' },
  { cat: 'Daily', jp: 'おかえり', rom: 'Okaeri', en: 'Welcome back', note: 'Said to someone arriving home.' },
  { cat: 'Daily', jp: 'いってきます', rom: 'Ittekimasu', en: 'I\'m off (and I\'ll be back)', note: 'Reply: いってらっしゃい.' },
  { cat: 'Daily', jp: 'おつかれさま', rom: 'Otsukaresama', en: 'Good work / Thanks for your effort', note: 'Hold the tsu: o-tsu-ka-re-sa-ma.' },
  { cat: 'Daily', jp: 'よろしくね', rom: 'Yoroshiku ne', en: 'Nice to meet you / Take care of me', note: 'Formal: よろしくおねがいします.' },
  { cat: 'Daily', jp: 'おやすみ', rom: 'Oyasumi', en: 'Good night', note: 'Casual.' },
  { cat: 'Daily', jp: 'いただきまーす！', rom: 'Itadakimāsu!', en: 'Let\'s eat!', note: 'Cheerful stretched version.' },

  // Address & roles
  { cat: 'People', jp: 'せんぱい', rom: 'Senpai', en: 'Senior (school/work)', note: 'Used as a name-like title.' },
  { cat: 'People', jp: 'こうはい', rom: 'Kōhai', en: 'Junior', note: 'Opposite of senpai.' },
  { cat: 'People', jp: 'せんせい', rom: 'Sensei', en: 'Teacher / Master', note: 'Long e: sen-sē.' },
  { cat: 'People', jp: 'おにいちゃん', rom: 'Onii-chan', en: 'Big brother', note: 'Long ii. Warm, familiar.' },
  { cat: 'People', jp: 'おねえさん', rom: 'Onee-san', en: 'Big sister / Young lady', note: 'Long ee.' },
  { cat: 'People', jp: 'ともだち', rom: 'Tomodachi', en: 'Friend', note: 'to-mo-da-chi.' },
  { cat: 'People', jp: 'なかま', rom: 'Nakama', en: 'Comrade / Crew', note: 'Shounen essential.' },
  { cat: 'People', jp: 'ばか', rom: 'Baka', en: 'Idiot / Fool', note: 'Mild insult, often teasing.' },

  // Feelings
  { cat: 'Feelings', jp: 'すき', rom: 'Suki', en: 'Like / Love', note: 'Sounds like "ski". Confession: 好きです.' },
  { cat: 'Feelings', jp: 'だいすき', rom: 'Daisuki', en: 'Love (a lot)', note: 'dai- adds intensity.' },
  { cat: 'Feelings', jp: 'きらい', rom: 'Kirai', en: 'Dislike', note: '' },
  { cat: 'Feelings', jp: 'こわい', rom: 'Kowai', en: 'Scary / I\'m scared', note: '' },
  { cat: 'Feelings', jp: 'うれしい', rom: 'Ureshii', en: 'Happy / Glad', note: 'Long shii.' },
  { cat: 'Feelings', jp: 'さみしい', rom: 'Samishii', en: 'Lonely', note: '' },
  { cat: 'Feelings', jp: 'ほんとう？', rom: 'Hontō?', en: 'Really?', note: 'Ho-n-tō, rising tone.' },
  { cat: 'Feelings', jp: 'わからない', rom: 'Wakaranai', en: 'I don\'t understand', note: 'Casual: わかんない.' },
];

// Katakana words anime fans already know — good for reading practice
const READING = [
  { jp: 'アニメ', rom: 'anime', en: 'anime' },
  { jp: 'マンガ', rom: 'manga', en: 'manga' },
  { jp: 'ラーメン', rom: 'rāmen', en: 'ramen' },
  { jp: 'ニンジャ', rom: 'ninja', en: 'ninja' },
  { jp: 'ヒーロー', rom: 'hīrō', en: 'hero' },
  { jp: 'ロボット', rom: 'robotto', en: 'robot' },
  { jp: 'ドラゴン', rom: 'doragon', en: 'dragon' },
  { jp: 'コスプレ', rom: 'kosupure', en: 'cosplay' },
  { jp: 'オタク', rom: 'otaku', en: 'otaku / fan' },
  { jp: 'ゲーム', rom: 'gēmu', en: 'game' },
  { jp: 'ケーキ', rom: 'kēki', en: 'cake' },
  { jp: 'パン', rom: 'pan', en: 'bread' },
  { jp: 'ジュース', rom: 'jūsu', en: 'juice' },
  { jp: 'ヒロイン', rom: 'hiroin', en: 'heroine' },
  { jp: 'ポケモン', rom: 'pokemon', en: 'Pokémon' },
  { jp: 'ナルト', rom: 'naruto', en: 'Naruto' },
];
