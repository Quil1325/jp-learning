// Dialogues for reading, listening & shadowing.
// line: [speaker, japanese, reading (kana), english]
window.NH_DIALOGUES = [
  {
    id: 'd-intro', lv: 1, u: 'l1-intro', title: 'First day of school', blurb: 'Self-introductions.',
    lines: [
      ['ゆき', 'はじめまして。わたしはゆきです。', 'はじめまして。わたしはゆきです。', 'Nice to meet you. I am Yuki.'],
      ['はる', 'はじめまして。はるです。がくせいですか。', 'はじめまして。はるです。がくせいですか。', 'Nice to meet you. I am Haru. Are you a student?'],
      ['ゆき', 'はい、がくせいです。アニメがすきです。', 'はい、がくせいです。アニメがすきです。', 'Yes, I am a student. I like anime.'],
      ['はる', 'わたしもアニメがすきです！', 'わたしもアニメがすきです！', 'I like anime too!'],
      ['ゆき', 'よろしくおねがいします。', 'よろしくおねがいします。', 'Please take care of me.'],
    ],
  },
  {
    id: 'd-ramen', lv: 1, u: 'l1-things', title: 'At the ramen shop', blurb: 'Ordering food.',
    lines: [
      ['てんいん', 'いらっしゃいませ！', 'いらっしゃいませ！', 'Welcome!'],
      ['ゆき', 'ラーメンをください。', 'ラーメンをください。', 'Ramen, please.'],
      ['てんいん', 'はい。おのみものは？', 'はい。おのみものは？', 'Yes. And to drink?'],
      ['ゆき', 'みずをおねがいします。', 'みずをおねがいします。', 'Water, please.'],
      ['ゆき', 'これはいくらですか。', 'これはいくらですか。', 'How much is this?'],
      ['てんいん', '八百円です。', 'はっぴゃくえんです。', "It's 800 yen."],
    ],
  },
  {
    id: 'd-schedule', lv: 1, u: 'l1-verbs', title: 'Weekend plans', blurb: 'Using ます form and に/で.',
    lines: [
      ['はる', 'あしたはなにをしますか。', 'あしたはなにをしますか。', 'What will you do tomorrow?'],
      ['ゆき', 'えきでともだちにあいます。', 'えきでともだちにあいます。', 'I will meet a friend at the station.'],
      ['はる', 'それからなにをしますか。', 'それからなにをしますか。', 'And after that?'],
      ['ゆき', 'いっしょにアニメをみます。', 'いっしょにアニメをみます。', 'We will watch anime together.'],
      ['はる', 'いいですね！', 'いいですね！', 'Sounds nice!'],
    ],
  },
  {
    id: 'd-hero', lv: 2, u: 'l2-battle', title: "The hero's declaration", blurb: 'Casual speech, ぞ, volitional.',
    lines: [
      ['ゆうしゃ', 'おれは、あきらめない！', 'おれは、あきらめない！', "I won't give up!"],
      ['まおう', 'ふっ…おまえにはむりだ。', 'ふっ…おまえにはむりだ。', "Heh… you can't do it."],
      ['ゆうしゃ', 'なかまがいるから、まけない！', 'なかまがいるから、まけない！', "Because I have comrades, I won't lose!"],
      ['まおう', 'ならば、かかってこい！', 'ならば、かかってこい！', 'Then come at me!'],
      ['ゆうしゃ', 'いくぞ！ みんな、たのむ！', 'いくぞ！ みんな、たのむ！', "Here I go! Everyone, I'm counting on you!"],
    ],
  },
  {
    id: 'd-roof', lv: 2, u: 'l2-school', title: 'On the rooftop', blurb: 'School-anime confession scene.',
    lines: [
      ['ゆき', 'せんぱい、すこしいいですか。', 'せんぱい、すこしいいですか。', 'Senpai, do you have a moment?'],
      ['せんぱい', 'うん、どうしたの？', 'うん、どうしたの？', "Sure, what's up?"],
      ['ゆき', 'ずっとまえからすきでした。', 'ずっとまえからすきでした。', 'I have liked you for a long time.'],
      ['せんぱい', 'えっ…ほんとう？', 'えっ…ほんとう？', 'Huh… really?'],
      ['ゆき', 'はい。ほんとうです。', 'はい。ほんとうです。', "Yes. It's true."],
      ['せんぱい', 'ありがとう。おれもだ。', 'ありがとう。おれもだ。', 'Thank you. Me too.'],
    ],
  },
  {
    id: 'd-comfort', lv: 2, u: 'l2-feel', title: 'Comforting a friend', blurb: 'て-form, たら, ちゃう.',
    lines: [
      ['はる', 'どうしたの？ なんでないてるの？', 'どうしたの？ なんでないてるの？', "What's wrong? Why are you crying?"],
      ['ゆき', 'しけんにおちちゃった…', 'しけんにおちちゃった…', 'I failed the exam…'],
      ['はる', 'だいじょうぶ。また、がんばればいい。', 'だいじょうぶ。また、がんばればいい。', "It's okay. You can just try again."],
      ['ゆき', 'ほんとうに？', 'ほんとうに？', 'Really?'],
      ['はる', 'うん。わたしがついてるから。', 'うん。わたしがついてるから。', "Yeah. I'm with you."],
    ],
  },
  {
    id: 'd-mission', lv: 3, u: 'l3-story', title: 'Mission briefing', blurb: 'Passive, causative, ために.',
    lines: [
      ['しれいかん', 'われわれは、てきにかこまれている。', 'われわれは、てきにかこまれている。', 'We are surrounded by the enemy.'],
      ['ゆうしゃ', 'ここでにげるわけにはいかない。', 'ここでにげるわけにはいかない。', 'I cannot afford to flee here.'],
      ['しれいかん', 'せかいをまもるために、いのちをかけろ。', 'せかいをまもるために、いのちをかけろ。', 'Risk your life to protect the world.'],
      ['ゆうしゃ', 'りょうかい。おれにまかせてくれ。', 'りょうかい。おれにまかせてくれ。', 'Understood. Leave it to me.'],
    ],
  },
  {
    id: 'd-villain', lv: 4, u: 'l4-villain', title: "The villain's monologue", blurb: 'Archaic ぬ・まい・ものか.',
    lines: [
      ['ぞくちょう', 'おろかなり、にんげんよ。', 'おろかなり、にんげんよ。', 'Foolish, human.'],
      ['ゆうしゃ', 'まけるものか！', 'まけるものか！', 'I will not lose!'],
      ['ぞくちょう', 'なんどたちあがろうと、ほろびるさだめだ。', 'なんどたちあがろうと、ほろびるさだめだ。', 'No matter how many times you rise, you are fated to perish.'],
      ['ゆうしゃ', 'おれはにどとにげまい。', 'おれはにどとにげまい。', 'Never again will I run.'],
      ['ぞくちょう', 'ならば、ゆるさぬ。', 'ならば、ゆるさぬ。', 'Then I will not forgive you.'],
    ],
  },
];
