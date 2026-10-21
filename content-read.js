// Dialogues for reading, listening & shadowing.
// line: [speaker, japanese, reading (kana), romaji (word-spaced, as pronounced), english]
window.NH_DIALOGUES = [
  {
    id: 'd-intro', lv: 1, u: 'l1-intro', title: 'First day of school', blurb: 'Self-introductions.',
    lines: [
      ['ゆき', 'はじめまして。わたしはゆきです。', 'はじめまして。わたしはゆきです。', 'Hajimemashite. Watashi wa Yuki desu.', 'Nice to meet you. I am Yuki.'],
      ['はる', 'はじめまして。はるです。がくせいですか。', 'はじめまして。はるです。がくせいですか。', 'Hajimemashite. Haru desu. Gakusei desu ka?', 'Nice to meet you. I am Haru. Are you a student?'],
      ['ゆき', 'はい、がくせいです。アニメがすきです。', 'はい、がくせいです。アニメがすきです。', 'Hai, gakusei desu. Anime ga suki desu.', 'Yes, I am a student. I like anime.'],
      ['はる', 'わたしもアニメがすきです！', 'わたしもアニメがすきです！', 'Watashi mo anime ga suki desu!', 'I like anime too!'],
      ['ゆき', 'よろしくおねがいします。', 'よろしくおねがいします。', 'Yoroshiku onegai shimasu.', 'Please take care of me.'],
    ],
  },
  {
    id: 'd-ramen', lv: 1, u: 'l1-things', title: 'At the ramen shop', blurb: 'Ordering food.',
    lines: [
      ['てんいん', 'いらっしゃいませ！', 'いらっしゃいませ！', 'Irasshaimase!', 'Welcome!'],
      ['ゆき', 'ラーメンをください。', 'ラーメンをください。', 'Raamen o kudasai.', 'Ramen, please.'],
      ['てんいん', 'はい。おのみものは？', 'はい。おのみものは？', 'Hai. O-nomimono wa?', 'Yes. And to drink?'],
      ['ゆき', 'みずをおねがいします。', 'みずをおねがいします。', 'Mizu o onegai shimasu.', 'Water, please.'],
      ['ゆき', 'これはいくらですか。', 'これはいくらですか。', 'Kore wa ikura desu ka?', 'How much is this?'],
      ['てんいん', '八百円です。', 'はっぴゃくえんです。', 'Happyaku en desu.', "It's 800 yen."],
    ],
  },
  {
    id: 'd-schedule', lv: 1, u: 'l1-verbs', title: 'Weekend plans', blurb: 'Using ます form and に/で.',
    lines: [
      ['はる', 'あしたはなにをしますか。', 'あしたはなにをしますか。', 'Ashita wa nani o shimasu ka?', 'What will you do tomorrow?'],
      ['ゆき', 'えきでともだちにあいます。', 'えきでともだちにあいます。', 'Eki de tomodachi ni aimasu.', 'I will meet a friend at the station.'],
      ['はる', 'それからなにをしますか。', 'それからなにをしますか。', 'Sorekara nani o shimasu ka?', 'And after that?'],
      ['ゆき', 'いっしょにアニメをみます。', 'いっしょにアニメをみます。', 'Issho ni anime o mimasu.', 'We will watch anime together.'],
      ['はる', 'いいですね！', 'いいですね！', 'Ii desu ne!', 'Sounds nice!'],
    ],
  },
  {
    id: 'd-hero', lv: 2, u: 'l2-battle', title: "The hero's declaration", blurb: 'Casual speech, ぞ, volitional.',
    lines: [
      ['ゆうしゃ', 'おれは、あきらめない！', 'おれは、あきらめない！', 'Ore wa, akiramenai!', "I won't give up!"],
      ['まおう', 'ふっ…おまえにはむりだ。', 'ふっ…おまえにはむりだ。', 'Fu... omae ni wa muri da.', "Heh… you can't do it."],
      ['ゆうしゃ', 'なかまがいるから、まけない！', 'なかまがいるから、まけない！', 'Nakama ga iru kara, makenai!', "Because I have comrades, I won't lose!"],
      ['まおう', 'ならば、かかってこい！', 'ならば、かかってこい！', 'Naraba, kakatte koi!', 'Then come at me!'],
      ['ゆうしゃ', 'いくぞ！ みんな、たのむ！', 'いくぞ！ みんな、たのむ！', 'Ikuzo! Minna, tanomu!', "Here I go! Everyone, I'm counting on you!"],
    ],
  },
  {
    id: 'd-roof', lv: 2, u: 'l2-school', title: 'On the rooftop', blurb: 'School-anime confession scene.',
    lines: [
      ['ゆき', 'せんぱい、すこしいいですか。', 'せんぱい、すこしいいですか。', 'Senpai, sukoshi ii desu ka?', 'Senpai, do you have a moment?'],
      ['せんぱい', 'うん、どうしたの？', 'うん、どうしたの？', 'Un, doushita no?', "Sure, what's up?"],
      ['ゆき', 'ずっとまえからすきでした。', 'ずっとまえからすきでした。', 'Zutto mae kara suki deshita.', 'I have liked you for a long time.'],
      ['せんぱい', 'えっ…ほんとう？', 'えっ…ほんとう？', 'E... hontou?', 'Huh… really?'],
      ['ゆき', 'はい。ほんとうです。', 'はい。ほんとうです。', 'Hai. Hontou desu.', "Yes. It's true."],
      ['せんぱい', 'ありがとう。おれもだ。', 'ありがとう。おれもだ。', 'Arigatou. Ore mo da.', 'Thank you. Me too.'],
    ],
  },
  {
    id: 'd-comfort', lv: 2, u: 'l2-feel', title: 'Comforting a friend', blurb: 'て-form, たら, ちゃう.',
    lines: [
      ['はる', 'どうしたの？ なんでないてるの？', 'どうしたの？ なんでないてるの？', 'Doushita no? Nande naiteru no?', "What's wrong? Why are you crying?"],
      ['ゆき', 'しけんにおちちゃった…', 'しけんにおちちゃった…', 'Shiken ni ochichatta...', 'I failed the exam…'],
      ['はる', 'だいじょうぶ。また、がんばればいい。', 'だいじょうぶ。また、がんばればいい。', 'Daijoubu. Mata, ganbareba ii.', "It's okay. You can just try again."],
      ['ゆき', 'ほんとうに？', 'ほんとうに？', 'Hontou ni?', 'Really?'],
      ['はる', 'うん。わたしがついてるから。', 'うん。わたしがついてるから。', 'Un. Watashi ga tsuiteru kara.', "Yeah. I'm with you."],
    ],
  },
  {
    id: 'd-mission', lv: 3, u: 'l3-story', title: 'Mission briefing', blurb: 'Passive, causative, ために.',
    lines: [
      ['しれいかん', 'われわれは、敵に囲まれている。', 'われわれは、てきにかこまれている。', 'Wareware wa, teki ni kakomarete iru.', 'We are surrounded by the enemy.'],
      ['ゆうしゃ', 'ここで逃げるわけにはいかない。', 'ここでにげるわけにはいかない。', 'Koko de nigeru wake ni wa ikanai.', 'I cannot afford to flee here.'],
      ['しれいかん', '世界を守るために、命をかけろ。', 'せかいをまもるために、いのちをかけろ。', 'Sekai o mamoru tame ni, inochi o kakero.', 'Risk your life to protect the world.'],
      ['ゆうしゃ', '了解。俺に任せてくれ。', 'りょうかい。おれにまかせてくれ。', 'Ryoukai. Ore ni makasete kure.', 'Understood. Leave it to me.'],
    ],
  },
  {
    id: 'd-detective', lv: 3, u: 'l3-mystery', title: 'The culprit is…', blurb: 'Detective reveal: ことに気づく, はず, ので.',
    lines: [
      ['たんてい', '犯人は、この中にいる。', 'はんにんは、このなかにいる。', 'Hannin wa, kono naka ni iru.', 'The culprit is among us.'],
      ['けいじ', '証拠はあるのか？', 'しょうこはあるのか？', 'Shouko wa aru no ka?', 'Do you have evidence?'],
      ['たんてい', 'あの人が嘘をついていたことに、気づいたんだ。', 'あのひとがうそをついていたことに、きづいたんだ。', 'Ano hito ga uso o tsuite ita koto ni, kizuita n da.', 'I noticed that person was lying.'],
      ['はんにん', 'ばかな…どうして分かった！', 'ばかな…どうしてわかった！', 'Baka na... doushite wakatta!', 'Impossible… how did you know?!'],
      ['たんてい', '真実は、いつもひとつだ。', 'しんじつは、いつもひとつだ。', 'Shinjitsu wa, itsumo hitotsu da.', 'The truth is always one.'],
    ],
  },
  {
    id: 'd-reunion', lv: 3, u: 'l3-bonds', title: 'Reunion', blurb: 'Feelings, てくれる, ために.',
    lines: [
      ['ゆうしゃ', '久しぶり。ずいぶん大きくなったな。', 'ひさしぶり。ずいぶんおおきくなったな。', 'Hisashiburi. Zuibun ookiku natta na.', 'Long time no see. You have grown quite big.'],
      ['ゆき', '会いたかった。ずっと、探していたんだ。', 'あいたかった。ずっと、さがしていたんだ。', 'Aitakatta. Zutto, sagashite ita n da.', 'I wanted to see you. I have been searching all along.'],
      ['ゆうしゃ', 'ごめん。約束を守れなくて。', 'ごめん。やくそくをまもれなくて。', 'Gomen. Yakusoku o mamorenakute.', 'Sorry. For not being able to keep my promise.'],
      ['ゆき', 'いいんだ。こうしてまた会えたから。', 'いいんだ。こうしてまたあえたから。', 'Ii n da. Koushite mata aeta kara.', "It's fine. Because we could meet again like this."],
      ['ゆうしゃ', 'これからは、ずっといっしょだ。', 'これからは、ずっといっしょだ。', 'Korekara wa, zutto issho da.', 'From now on, we will always be together.'],
    ],
  },
  {
    id: 'd-butler', lv: 4, u: 'l4-keigo', title: "The butler's service", blurb: 'Keigo: いたします, かしこまりました, ございます.',
    lines: [
      ['しつじ', 'お嬢様、お茶をお持ちいたしました。', 'おじょうさま、おちゃをおもちいたしました。', 'Ojousama, ocha o omochi itashimashita.', 'Milady, I have brought your tea.'],
      ['おじょうさま', 'ありがとう。そこに置いてちょうだい。', 'ありがとう。そこにおいてちょうだい。', 'Arigatou. Soko ni oite choudai.', 'Thank you. Put it over there.'],
      ['しつじ', 'かしこまりました。ほかにご用はございますか。', 'かしこまりました。ほかにごようはございますか。', 'Kashikomarimashita. Hoka ni go-you wa gozaimasu ka?', 'Understood. Is there anything else you require?'],
      ['おじょうさま', '今日は、お客様がいらっしゃるのかしら。', 'きょうは、おきゃくさまがいらっしゃるのかしら。', 'Kyou wa, okyakusama ga irassharu no kashira.', 'I wonder if a guest is coming today.'],
      ['しつじ', 'はい。お昼ごろ、いらっしゃる予定でございます。', 'はい。おひるごろ、いらっしゃるよていでございます。', 'Hai. Ohiru goro, irassharu yotei de gozaimasu.', 'Yes. They are scheduled to arrive around noon.'],
    ],
  },
  {
    id: 'd-villain', lv: 4, u: 'l4-villain', title: "The villain's monologue", blurb: 'Archaic ぬ・まい・ものか.',
    lines: [
      ['ぞくちょう', '愚かなり、人間よ。', 'おろかなり、にんげんよ。', 'Oroka nari, ningen yo.', 'Foolish, human.'],
      ['ゆうしゃ', '負けるものか！', 'まけるものか！', 'Makeru mono ka!', 'I will not lose!'],
      ['ぞくちょう', '何度立ち上がろうと、滅びる運命だ。', 'なんどたちあがろうと、ほろびるうんめいだ。', 'Nando tachiagarou to, horobiru unmei da.', 'No matter how many times you rise, you are fated to perish.'],
      ['ゆうしゃ', '俺は二度と逃げまい。', 'おれはにどとにげまい。', 'Ore wa nido to nigemai.', 'Never again will I run.'],
      ['ぞくちょう', 'ならば、許さぬ。', 'ならば、ゆるさぬ。', 'Naraba, yurusanu.', 'Then I will not forgive you.'],
    ],
  },
  {
    id: 'd-finalbattle', lv: 4, u: 'l4-epic', title: 'The final battle', blurb: 'ずにはいられない, にすぎぬ, ならば.',
    lines: [
      ['まおう', 'ここまでだ、勇者よ。', 'ここまでだ、ゆうしゃよ。', 'Koko made da, yuusha yo.', 'This is as far as you go, hero.'],
      ['ゆうしゃ', 'たとえこの身が滅びようとも、仲間を守らずにはいられない。', 'たとえこのみがほろびようとも、なかまをまもらずにはいられない。', 'Tatoe kono mi ga horobiyou to mo, nakama o mamorazu ni wa irarenai.', 'Even if this body perishes, I cannot help but protect my comrades.'],
      ['まおう', '愚かな。絆など、ただの足かせに過ぎぬ。', 'おろかな。きずななど、ただのあしかせにすぎぬ。', 'Oroka na. Kizuna nado, tada no ashikase ni suginu.', 'Fool. Bonds are nothing but shackles.'],
      ['ゆうしゃ', 'それは違う。この絆こそが、俺の力だ！', 'それはちがう。このきずなこそが、おれのちからだ！', 'Sore wa chigau. Kono kizuna koso ga, ore no chikara da!', 'That is wrong. These bonds are my strength!'],
      ['まおう', 'ならば見せてみろ。お前の覚悟を！', 'ならばみせてみろ。おまえのかくごを！', 'Naraba misete miro. Omae no kakugo o!', 'Then show me. Your resolve!'],
    ],
  },
];
