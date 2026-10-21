// EVERYDAY JAPAN dialogues. line: [speaker, japanese, reading, romaji, english]
NH_DIALOGUES.push(
  {
    id: 'd-restaurant', lv: 11, u: 'e1-eat', title: 'Finding a table', blurb: 'Seating and ordering at a restaurant.',
    lines: [
      ['てんいん', 'いらっしゃいませ。何名様ですか。', 'いらっしゃいませ。なんめいさまですか。', 'Irasshaimase. Nanmei-sama desu ka?', 'Welcome. How many people?'],
      ['あなた', '二人です。禁煙席をお願いします。', 'ふたりです。きんえんせきをおねがいします。', "Futari desu. Kin'en-seki o onegai shimasu.", 'Two people. Non-smoking, please.'],
      ['てんいん', 'こちらへどうぞ。', 'こちらへどうぞ。', 'Kochira e douzo.', 'This way, please.'],
      ['あなた', 'すみません、注文お願いします。', 'すみません、ちゅうもんおねがいします。', 'Sumimasen, chuumon onegai shimasu.', "Excuse me, I'd like to order."],
      ['あなた', 'これとこれをください。', 'これとこれをください。', 'Kore to kore o kudasai.', 'This and this, please.'],
      ['てんいん', 'かしこまりました。', 'かしこまりました。', 'Kashikomarimashita.', 'Certainly.'],
    ],
  },
  {
    id: 'd-pay', lv: 11, u: 'e1-eat', title: 'Paying the bill', blurb: 'Asking for the check; cash vs card.',
    lines: [
      ['あなた', 'すみません、お会計をお願いします。', 'すみません、おかいけいをおねがいします。', 'Sumimasen, okaikei o onegai shimasu.', 'Excuse me, the bill please.'],
      ['てんいん', 'はい。二千三百円です。', 'はい。にせんさんびゃくえんです。', 'Hai. Nisen sanbyaku en desu.', "Yes. It's 2,300 yen."],
      ['あなた', 'カードは使えますか。', 'カードはつかえますか。', 'Kaado wa tsukaemasu ka?', 'Can I use a card?'],
      ['てんいん', 'すみません、現金だけです。', 'すみません、げんきんだけです。', 'Sumimasen, genkin dake desu.', 'Sorry, cash only.'],
      ['あなた', 'わかりました。これでお願いします。', 'わかりました。これでおねがいします。', 'Wakarimashita. Kore de onegai shimasu.', "Understood. Here you go."],
      ['てんいん', 'ありがとうございました。', 'ありがとうございました。', 'Arigatou gozaimashita.', 'Thank you very much.'],
      ['あなた', 'ごちそうさまでした。おいしかったです。', 'ごちそうさまでした。おいしかったです。', 'Gochisousama deshita. Oishikatta desu.', 'Thank you for the meal. It was delicious.'],
    ],
  },
  {
    id: 'd-konbini', lv: 11, u: 'e1-shop', title: 'At the convenience store', blurb: 'The checkout script you will hear every day.',
    lines: [
      ['てんいん', 'いらっしゃいませ。袋はご利用ですか。', 'いらっしゃいませ。ふくろはごりようですか。', 'Irasshaimase. Fukuro wa go-riyou desu ka?', 'Welcome. Would you like a bag?'],
      ['あなた', 'いえ、大丈夫です。', 'いえ、だいじょうぶです。', 'Ie, daijoubu desu.', "No, I'm fine."],
      ['てんいん', 'お弁当は温めますか。', 'おべんとうはあたためますか。', 'Obentou wa atatamemasu ka?', 'Shall I heat up the bento?'],
      ['あなた', 'はい、お願いします。', 'はい、おねがいします。', 'Hai, onegai shimasu.', 'Yes, please.'],
      ['てんいん', 'お箸はお付けしますか。', 'おはしはおつけしますか。', 'Ohashi wa otsuke shimasu ka?', 'Would you like chopsticks?'],
      ['あなた', 'はい、お願いします。', 'はい、おねがいします。', 'Hai, onegai shimasu.', 'Yes, please.'],
      ['てんいん', '六百八十円です。', 'ろっぴゃくはちじゅうえんです。', 'Roppyaku hachijuu en desu.', "That's 680 yen."],
    ],
  },
  {
    id: 'd-clothes', lv: 11, u: 'e1-shop', title: 'Trying on clothes', blurb: 'Sizes, trying on, and tax-free.',
    lines: [
      ['あなた', 'すみません、これを試着してもいいですか。', 'すみません、これをしちゃくしてもいいですか。', 'Sumimasen, kore o shichaku shite mo ii desu ka?', 'Excuse me, may I try this on?'],
      ['てんいん', 'はい、どうぞ。こちらです。', 'はい、どうぞ。こちらです。', 'Hai, douzo. Kochira desu.', 'Yes, please. Right this way.'],
      ['あなた', 'ちょっと小さいです。もっと大きいのはありますか。', 'ちょっとちいさいです。もっとおおきいのはありますか。', 'Chotto chiisai desu. Motto ookii no wa arimasu ka?', "It's a little small. Do you have a bigger one?"],
      ['てんいん', 'はい、ございます。少々お待ちください。', 'はい、ございます。しょうしょうおまちください。', 'Hai, gozaimasu. Shoushou omachi kudasai.', 'Yes, we do. One moment, please.'],
      ['あなた', 'これにします。免税はできますか。', 'これにします。めんぜいはできますか。', 'Kore ni shimasu. Menzei wa dekimasu ka?', "I'll take this. Can I get tax-free?"],
      ['てんいん', 'はい、パスポートをお願いします。', 'はい、パスポートをおねがいします。', 'Hai, pasupooto o onegai shimasu.', 'Yes, your passport please.'],
    ],
  },
  {
    id: 'd-train', lv: 12, u: 'e2-transport', title: 'Buying a ticket', blurb: 'Station counter, platform number.',
    lines: [
      ['あなた', 'すみません、京都までの切符を買いたいんですが。', 'すみません、きょうとまでのきっぷをかいたいんですが。', 'Sumimasen, Kyouto made no kippu o kaitai n desu ga.', "Excuse me, I'd like to buy a ticket to Kyoto."],
      ['えきいん', '新幹線ですか。', 'しんかんせんですか。', 'Shinkansen desu ka?', 'The bullet train?'],
      ['あなた', 'はい。指定席をお願いします。', 'はい。していせきをおねがいします。', 'Hai. Shiteiseki o onegai shimasu.', 'Yes. A reserved seat, please.'],
      ['えきいん', 'はい。一万四千円です。', 'はい。いちまんよんせんえんです。', 'Hai. Ichiman yonsen en desu.', "Yes. That's 14,000 yen."],
      ['あなた', '何番線ですか。', 'なんばんせんですか。', 'Nanbansen desu ka?', 'Which platform is it?'],
      ['えきいん', '十四番線です。', 'じゅうよんばんせんです。', 'Juuyon-bansen desu.', 'Platform 14.'],
    ],
  },
  {
    id: 'd-directions', lv: 12, u: 'e2-directions', title: 'Asking the way', blurb: 'Left, right, minutes on foot.',
    lines: [
      ['あなた', 'すみません、駅はどこですか。', 'すみません、えきはどこですか。', 'Sumimasen, eki wa doko desu ka?', 'Excuse me, where is the station?'],
      ['ひと', 'あの信号を右に曲がってください。', 'あのしんごうをみぎにまがってください。', 'Ano shingou o migi ni magatte kudasai.', 'Please turn right at that traffic light.'],
      ['あなた', '遠いですか。', 'とおいですか。', 'Tooi desu ka?', 'Is it far?'],
      ['ひと', 'いえ、歩いて五分ぐらいです。', 'いえ、あるいてごふんぐらいです。', 'Ie, aruite gofun gurai desu.', 'No, about five minutes on foot.'],
      ['あなた', 'ありがとうございます。助かりました。', 'ありがとうございます。たすかりました。', 'Arigatou gozaimasu. Tasukarimashita.', 'Thank you. That was a big help.'],
    ],
  },
  {
    id: 'd-hotel', lv: 12, u: 'e2-hotel', title: 'Hotel check-in', blurb: 'Reservation, breakfast, Wi-Fi.',
    lines: [
      ['あなた', 'こんにちは。スミスで予約しています。', 'こんにちは。スミスでよやくしています。', 'Konnichiwa. Sumisu de yoyaku shite imasu.', 'Hello. I have a reservation under Smith.'],
      ['フロント', 'スミス様、お待ちしておりました。パスポートをお願いします。', 'スミスさま、おまちしておりました。パスポートをおねがいします。', 'Sumisu-sama, omachi shite orimashita. Pasupooto o onegai shimasu.', 'Mr. Smith, we have been expecting you. Your passport, please.'],
      ['あなた', 'はい。朝食は何時からですか。', 'はい。ちょうしょくはなんじからですか。', 'Hai. Choushoku wa nanji kara desu ka?', 'Here. From what time is breakfast?'],
      ['フロント', '七時から十時までです。', 'しちじからじゅうじまでです。', 'Shichiji kara juuji made desu.', 'From 7 to 10.'],
      ['あなた', 'Wi-Fiのパスワードを教えてください。', 'ワイファイのパスワードをおしえてください。', 'Waifai no pasuwaado o oshiete kudasai.', 'Please tell me the Wi-Fi password.'],
    ],
  },
  {
    id: 'd-clinic', lv: 12, u: 'e2-health', title: 'At the clinic', blurb: 'Describing symptoms to a doctor.',
    lines: [
      ['いしゃ', 'どうしましたか。', 'どうしましたか。', 'Dou shimashita ka?', "What's the matter?"],
      ['あなた', '昨日から頭が痛いです。熱もあります。', 'きのうからあたまがいたいです。ねつもあります。', 'Kinou kara atama ga itai desu. Netsu mo arimasu.', "I've had a headache since yesterday. I also have a fever."],
      ['いしゃ', '咳は出ますか。', 'せきはでますか。', 'Seki wa demasu ka?', 'Do you have a cough?'],
      ['あなた', 'はい、少し出ます。', 'はい、すこしでます。', 'Hai, sukoshi demasu.', 'Yes, a little.'],
      ['いしゃ', '薬を出しますね。アレルギーはありますか。', 'くすりをだしますね。アレルギーはありますか。', 'Kusuri o dashimasu ne. Arerugii wa arimasu ka?', "I'll prescribe medicine. Do you have any allergies?"],
      ['あなた', 'いいえ、ありません。', 'いいえ、ありません。', 'Iie, arimasen.', 'No, I do not.'],
    ],
  },
  {
    id: 'd-smalltalk', lv: 13, u: 'e3-people', title: 'Making a new friend', blurb: 'Self-intro, small talk, an invitation.',
    lines: [
      ['ゆき', 'はじめまして。ゆきです。', 'はじめまして。ゆきです。', 'Hajimemashite. Yuki desu.', 'Nice to meet you. I am Yuki.'],
      ['あなた', 'はじめまして。アメリカから来ました。日本は初めてです。', 'はじめまして。アメリカからきました。にほんははじめてです。', 'Hajimemashite. Amerika kara kimashita. Nihon wa hajimete desu.', "Nice to meet you. I'm from America. It's my first time in Japan."],
      ['ゆき', 'そうですか！日本はどうですか。', 'そうですか！にほんはどうですか。', 'Sou desu ka! Nihon wa dou desu ka?', 'Oh really! How do you like Japan?'],
      ['あなた', 'とても楽しいです。ご飯がおいしいです。', 'とてもたのしいです。ごはんがおいしいです。', 'Totemo tanoshii desu. Gohan ga oishii desu.', "It's great fun. The food is delicious."],
      ['ゆき', '日本語が上手ですね！', 'にほんごがじょうずですね！', 'Nihongo ga jouzu desu ne!', 'Your Japanese is good!'],
      ['あなた', 'いえいえ、まだまだです。', 'いえいえ、まだまだです。', 'Ie ie, mada mada desu.', 'Oh no, I still have far to go.'],
      ['ゆき', '今度、一緒に食べませんか。', 'こんど、いっしょにたべませんか。', 'Kondo, issho ni tabemasen ka?', 'Would you like to eat together sometime?'],
    ],
  },
  {
    id: 'd-post', lv: 13, u: 'e3-services', title: 'At the post office', blurb: 'Sending a parcel abroad.',
    lines: [
      ['あなた', 'すみません、この荷物を送りたいんですが。', 'すみません、このにもつをおくりたいんですが。', 'Sumimasen, kono nimotsu o okuritai n desu ga.', "Excuse me, I'd like to send this parcel."],
      ['きょくいん', 'どちらへ送りますか。', 'どちらへおくりますか。', 'Dochira e okurimasu ka?', 'Where would you like to send it?'],
      ['あなた', 'アメリカです。', 'アメリカです。', 'Amerika desu.', 'To America.'],
      ['きょくいん', 'こちらに住所を書いてください。', 'こちらにじゅうしょをかいてください。', 'Kochira ni juusho o kaite kudasai.', 'Please write the address here.'],
      ['あなた', '書きました。いくらですか。', 'かきました。いくらですか。', 'Kakimashita. Ikura desu ka?', "I've written it. How much is it?"],
      ['きょくいん', '三千二百円です。', 'さんぜんにひゃくえんです。', 'Sanzen nihyaku en desu.', "That's 3,200 yen."],
    ],
  },
  {
    id: 'd-office', lv: 13, u: 'e3-work', title: 'First business meeting', blurb: 'Business cards and polite work phrases.',
    lines: [
      ['たなか', 'はじめまして。田中と申します。こちらが名刺です。', 'はじめまして。たなかともうします。こちらがめいしです。', 'Hajimemashite. Tanaka to moushimasu. Kochira ga meishi desu.', "Nice to meet you. I am Tanaka. Here is my card."],
      ['あなた', 'ありがとうございます。スミスと申します。よろしくお願いします。', 'ありがとうございます。スミスともうします。よろしくおねがいします。', 'Arigatou gozaimasu. Sumisu to moushimasu. Yoroshiku onegai shimasu.', "Thank you. I am Smith. Pleased to meet you."],
      ['たなか', '会議は三時からです。', 'かいぎはさんじからです。', 'Kaigi wa sanji kara desu.', 'The meeting starts at three.'],
      ['あなた', '承知しました。', 'しょうちしました。', 'Shouchi shimashita.', 'Understood.'],
      ['たなか', 'では、お先に失礼します。お疲れ様でした。', 'では、おさきにしつれいします。おつかれさまでした。', 'Dewa, osaki ni shitsurei shimasu. Otsukaresama deshita.', "Well then, I'll take my leave first. Good work today."],
    ],
  },
);
