// EVERYDAY JAPAN grammar: patterns for requests, questions, choices and polite language.
(() => {
  const G = (u, lv, id, o) => NH_GRAMMAR.push({ u, lv, id, ...o });

  G('e1-manners', 11, 'e-sumimasen', {
    title: 'すみません — the three-in-one word', pat: 'すみません / ありがとう / ごめんなさい', gist: 'excuse me · sorry · thanks',
    body: ['すみません is the most useful word you will use: (1) "Excuse me" to get attention (staff, strangers), (2) "Sorry" for a small mistake, (3) "Thank you for the trouble" when someone does something for you.', 'ごめんなさい is a more personal "I\'m sorry" (to friends, or a real apology). ありがとうございます is plain "thank you"; add どうも for extra warmth.', 'To call a waiter, say すみません! — raising your hand slightly helps. Nobody minds.'],
    ex: [['すみません、トイレはどこですか。', 'Excuse me, where is the toilet?'], ['ドアをおさえてくれて、すみません。', 'Sorry (thanks) for holding the door.'], ['ごめんなさい、わかりません。', "I'm sorry, I don't understand."]],
    drills: [['＿＿、トイレはどこですか。', 'すみません', ['ごちそうさま', 'おやすみなさい', 'いただきます'], 'Excuse me, where is the toilet?'], ['レストランで店員をよぶ：＿＿！', 'すみません', ['いただきます', 'おやすみ', 'ただいま'], 'Excuse me! (calling staff)'], ['食事のあとで：＿＿でした。', 'ごちそうさま', ['すみません', 'おかえり', 'こんにちは'], 'Thank you for the meal.']],
    tip: 'When in doubt in any awkward moment, a quick すみません solves it.',
  });
  G('e1-manners', 11, 'e-polite-no', {
    title: 'Saying "no" politely', pat: '結構です / 大丈夫です / ちょっと…', gist: 'refusing without sounding rude',
    body: ['Japanese avoids a hard "no" (いいえ is rare in service). Use: 結構です (no thank you), 大丈夫です (I\'m fine — also means "it\'s okay"), or trail off with ちょっと… (a little…) which means "that\'s difficult".', 'Warning: 大丈夫です and 結構です can mean "yes, that\'s fine" OR "no thanks" — context and tone decide. When unsure, add ありがとう and a small head shake for no, or どうぞ/お願いします for yes.', 'To accept: はい、お願いします. To decline: いえ、結構です。'],
    ex: [['袋はご利用ですか。 — いえ、結構です。', 'Do you need a bag? — No thanks.'], ['温めますか。 — お願いします。', 'Shall I heat it? — Yes please.'], ['ちょっと…。', "Hmm, that's a bit… (= no)"]],
    drills: [['袋はいりますか？ — いえ、＿＿です。', '結構', ['お願い', 'ありがとう', 'いただき'], 'No, thank you.'], ['温めますか？ — はい、＿＿します。', 'お願い', ['結構', '大丈夫', 'すみません'], 'Yes please (heat it).'], ['ごめんなさい、＿＿…（trailing, = that\'s difficult）', 'ちょっと', ['もっと', 'ずっと', 'きっと'], "I'm sorry, that's a bit…"]],
    tip: 'Hearing "ちょっと難しいです" from a shopkeeper nearly always means "no".',
  });

  G('e1-eat', 11, 'e-onegai', {
    title: 'Ordering: 〜をください / 〜をお願いします', pat: 'thing を ください / お願いします', gist: 'I\'d like … / … please',
    body: ['Point at the thing and say これをください ("this, please"). With a name: ビールをください. The を marks what you want.', 'お願いします is slightly more polite and works without を: ビール、お願いします. For more than one: thing + count: ビールを二つください.', 'Use これ・それ・あれ to point. 同じものをください = "the same, please".'],
    ex: [['これをください。', 'This one, please.'], ['ビールを二つお願いします。', 'Two beers, please.'], ['水をください。', 'Water, please.']],
    drills: [['ラーメン＿＿ください。', 'を', ['は', 'に', 'で'], 'Ramen, please.'], ['ビールを＿＿ください。（two）', 'ふたつ', ['ふたり', 'にまい', 'にほん'], 'Two beers, please.'], ['これ＿＿お願いします。', 'を', ['の', 'も', 'は'], 'This, please.']],
    tip: 'Pointing at the menu photo and saying これ、お願いします works everywhere.',
  });
  G('e1-numbers', 11, 'e-counters', {
    title: 'Counters: 〜つ, 〜人, 〜枚, 〜個, 〜本, 〜杯', pat: 'number + counter', gist: 'how to count things',
    body: ['For general things 1-9 use the native count: ひとつ, ふたつ, みっつ, よっつ, いつつ, むっつ, ななつ, やっつ, ここのつ, とお. Safe for almost anything you order.', 'People: ひとり, ふたり, then さんにん, よにん… Flat things (tickets, sheets): 〜まい. Small pieces: 〜こ. Long things (bottles): 〜ほん. Cups/glasses: 〜はい. Floors: 〜かい.', 'Ask "how many?": 何人 (people), 何枚 (flat), 何個 (pieces), 何階 (floor). Sounds change: いっぽん・にほん・さんぼん, いっぱい・にはい・さんばい.'],
    ex: [['ビールを二つください。', 'Two beers, please.'], ['二人です。', 'Two people.'], ['切符を三枚ください。', 'Three tickets, please.']],
    drills: [['すみません、切符を二＿＿ください。', '枚', ['人', '杯', '階'], 'Two tickets, please.'], ['三＿＿です。（3 people）', '人', ['枚', '個', '杯'], 'Three people.'], ['コーヒーを一＿＿ください。（one cup）', '杯', ['人', '枚', '階'], 'One coffee, please.']],
    tip: 'If you forget the counter, the native ひとつ・ふたつ・みっつ works for most things.',
  });
  G('e1-numbers', 11, 'e-jikan', {
    title: 'Telling the time: 〜時〜分, 〜から〜まで', pat: 'number + 時 + number + 分 / 半', gist: "what time / from … until …",
    body: ['Hours: いちじ にじ さんじ よじ ごじ ろくじ しちじ はちじ くじ じゅうじ. (Watch: 4:00 = よじ, 7:00 = しちじ, 9:00 = くじ.) 半 (はん) = half past.', 'Minutes: いっぷん にふん さんぷん よんぷん ごふん ろっぷん ななふん はっぷん きゅうふん じゅっぷん.', 'から = from, まで = until: 九時から五時まで (9 to 5). 午前 = a.m., 午後 = p.m. Ask: 何時ですか。'],
    ex: [['いま、三時半です。', "It's 3:30 now."], ['九時から五時までです。', "It's from 9 to 5."], ['何時までですか。', 'Until what time?']],
    drills: [['四時 is read「＿＿」。', 'よじ', ['しじ', 'よんじ', 'よじゅう'], "4 o'clock"], ['九時＿＿五時まで', 'から', ['まで', 'に', 'を'], 'from 9 until 5'], ['三時＿＿です。（half past）', 'はん', ['ふん', 'じ', 'ご'], 'It is 3:30.']],
    tip: 'Shops list hours like 10:00〜20:00; 営業時間 means opening hours.',
  });

  G('e1-shop', 11, 'e-arimasu', {
    title: '〜はありますか — "Do you have …?"', pat: 'thing は ありますか', gist: 'do you have / is there',
    body: ['Ask for availability with [thing]はありますか. In the answer, あります = yes, we have it; ありません = we don\'t.', 'Make it specific: 大きいのはありますか (a bigger one), 色違いはありますか (other colors), 英語のメニューはありますか.', 'Add もっと (more) or ほかの (other): もっと安いのはありますか = a cheaper one?'],
    ex: [['英語のメニューはありますか。', 'Do you have an English menu?'], ['もっと大きいのはありますか。', 'Do you have a bigger one?'], ['すみません、ありません。', "Sorry, we don't have it."]],
    drills: [['英語のメニュー＿＿ありますか。', 'は', ['を', 'に', 'の'], 'Do you have an English menu?'], ['もっと大きいのは＿＿か。', 'あります', ['います', 'です', 'ません'], 'Do you have a bigger one?'], ['すみません、＿＿。', 'ありません', ['ありますか', 'いません', 'ませんか'], "Sorry, we don't have it."]],
    tip: 'Start with すみません, then the item and はありますか — and point at what you mean.',
  });
  G('e1-shop', 11, 'e-temoii', {
    title: '〜てもいいですか — "May I …?"', pat: 'て-form + もいいですか', gist: 'may I / is it okay to',
    body: ['Ask permission: て-form + もいいですか. 写真を撮ってもいいですか = May I take a photo? 座ってもいいですか = May I sit?', 'Answer: はい、どうぞ (go ahead) / すみません、ちょっと… (sorry, it\'s a bit…) / だめです (not allowed).', 'Signs say 〜しないでください (please don\'t) or 〜禁止 (prohibited).'],
    ex: [['写真を撮ってもいいですか。', 'May I take a photo?'], ['ここに座ってもいいですか。', 'May I sit here?'], ['試着してもいいですか。', 'May I try it on?']],
    drills: [['写真を撮って＿＿いいですか。', 'も', ['は', 'を', 'に'], 'May I take a photo?'], ['ここに座っ＿＿もいいですか。', 'て', ['た', 'ない', 'ます'], 'May I sit here?'], ['はい、＿＿。（go ahead）', 'どうぞ', ['ごめん', 'いただきます', 'さようなら'], 'Yes, go ahead.']],
    tip: 'Always ask before photographing people, in some temples, and in many shops.',
  });

  G('e2-transport', 12, 'e-tai-n-desu-ga', {
    title: '〜たいんですが — "I\'d like to … (but)"', pat: 'stem + たいんですが', gist: "I'd like to … (soft request)",
    body: ['Say what you want politely with a soft ending: 〜たいんですが… The trailing が invites the staff member to help.', '切符を買いたいんですが。 (I\'d like to buy a ticket.) 両替したいんですが。 (I\'d like to exchange money.)', 'Then show the map, ticket or phone screen — the sentence is just the opener.'],
    ex: [['切符を買いたいんですが。', "I'd like to buy a ticket."], ['新宿に行きたいんですが。', "I'd like to go to Shinjuku."], ['両替したいんですが。', "I'd like to exchange money."]],
    drills: [['切符を買い＿＿んですが。', 'たい', ['ます', 'ない', 'たく'], "I'd like to buy a ticket."], ['新宿に行き＿＿んですが。', 'たい', ['ます', 'ない', 'たく'], "I'd like to go to Shinjuku."], ['両替し＿＿んですが…', 'たい', ['ます', 'ない', 'たく'], "I'd like to exchange money…"]],
    tip: 'The softer 〜んですが… is more natural than blunt 〜たいです when asking staff.',
  });
  G('e2-directions', 12, 'e-doko', {
    title: 'Where is …? and directions', pat: '〜はどこですか / 右・左に曲がる / まっすぐ', gist: 'asking and understanding directions',
    body: ['Ask: [place]はどこですか。 Place words: ここ (here) そこ (there) あそこ (over there).', 'Directions: まっすぐ行く (go straight), 右/左に曲がる (turn right/left), 〜の前/隣/後ろ/向かい (in front of / next to / behind / opposite).', 'Distance: 近い (close), 遠い (far), 歩いて〜分 (〜 minutes on foot). Landmarks: 信号 (light), 交差点 (intersection), 角 (corner).'],
    ex: [['駅はどこですか。', 'Where is the station?'], ['あの信号を右に曲がってください。', 'Please turn right at that light.'], ['歩いて五分です。', "It's five minutes on foot."]],
    drills: [['駅＿＿どこですか。', 'は', ['を', 'に', 'の'], 'Where is the station?'], ['あの信号を＿＿に曲がってください。（right）', '右', ['左', '上', '前'], 'Turn right at that light.'], ['＿＿行ってください。（straight）', 'まっすぐ', ['まがって', 'とまって', 'おりて'], 'Please go straight.']],
    tip: 'Hold up a map and say ここ… ("here…") — people will happily point you the way.',
  });

  G('e2-hotel', 12, 'e-te-moraemasu', {
    title: 'Polite requests: 〜てください → 〜てもらえますか', pat: 'て-form + ください / もらえますか / いただけますか', gist: 'making requests politely',
    body: ['Ladder of politeness: 〜てください (please) → 〜てもらえますか (could you?) → 〜ていただけますか (would you kindly?).', 'Use もらえますか for hotels, shops, and strangers: 荷物を預かってもらえますか。 Use いただけますか for formal situations: 書いていただけますか。', 'Add すみません at the start and ありがとうございます after — Japanese politeness is about the whole package.'],
    ex: [['荷物を預かってもらえますか。', 'Could you hold my luggage?'], ['もう一度言っていただけますか。', 'Would you kindly say that once more?'], ['写真を撮ってください。', 'Please take a photo.']],
    drills: [['荷物を預かって＿＿ますか。', 'もらえ', ['ください', 'あげ', 'くれ'], 'Could you hold my luggage?'], ['もう一度言って＿＿けますか。', 'いただ', ['もらえ', 'ください', 'くれ'], 'Would you kindly repeat it?'], ['写真を撮って＿＿。', 'ください', ['もらえ', 'いただ', 'くれ'], 'Please take a photo.']],
    tip: 'Shop staff use ていただけますか to you — recognize it as "could you please".',
  });
  G('e2-health', 12, 'e-symptoms', {
    title: 'Describing symptoms: 〜が痛いです / 〜があります', pat: 'body part が 痛いです · 熱があります', gist: "it hurts / I have",
    body: ['Pain: [body part]が痛いです — 頭が痛いです (headache), お腹が痛いです (stomachache), ここが痛いです (it hurts here).', 'Having: 熱があります (I have a fever), 咳が出ます (I have a cough), アレルギーがあります.', 'Point and say ここ. Add いつからですか? (since when) — the doctor may ask: 昨日から (since yesterday).'],
    ex: [['頭が痛いです。', 'I have a headache.'], ['熱があります。', 'I have a fever.'], ['昨日から咳が出ます。', "I've had a cough since yesterday."]],
    drills: [['頭＿＿痛いです。', 'が', ['を', 'に', 'の'], 'I have a headache.'], ['熱＿＿あります。', 'が', ['を', 'に', 'へ'], 'I have a fever.'], ['昨日＿＿咳が出ます。', 'から', ['まで', 'で', 'へ'], 'I have had a cough since yesterday.']],
    tip: '119 for ambulance and fire, 110 for police — say 救急車をお願いします.',
  });

  G('e3-people', 13, 'e-masenka', {
    title: 'Invitations: 〜ませんか / 〜ましょう', pat: 'stem + ませんか / ましょう', gist: "won't you …? / let's …",
    body: ['〜ませんか is a polite, soft invitation (literally "won\'t you…?"): 一緒に食べませんか。', '〜ましょう means "let\'s": 行きましょう。 Use ませんか first to invite, ましょう to agree/decide.', 'Add 今度 (sometime) to keep it light: 今度、一緒に行きませんか。'],
    ex: [['一緒に食べませんか。', 'Would you like to eat together?'], ['行きましょう！', "Let's go!"], ['今度、一緒に行きませんか。', "Shall we go together sometime?"]],
    drills: [['一緒に食べ＿＿か。', 'ません', ['ます', 'ましょう', 'たい'], 'Would you like to eat together?'], ['じゃあ、行き＿＿！', 'ましょう', ['ません', 'ます', 'たい'], "Then let's go!"], ['今度、一緒に飲み＿＿か。', 'ません', ['ましょう', 'ます', 'たい'], 'Shall we drink together sometime?']],
    tip: 'Answering いいですね！ is the friendly yes; ちょっと… is the soft no.',
  });
  G('e3-people', 13, 'e-from-live', {
    title: 'Where you are from & live: 〜から来ました · 〜に住んでいます', pat: 'place から来ました / place に住んでいます / 〜人です', gist: "I'm from … / I live in …",
    body: ['Origin: アメリカから来ました (I came from America) or アメリカ人です (I\'m American). Country + 人 = nationality.', 'Residence: 東京に住んでいます (I live in Tokyo). Job: 学生です / エンジニアです.', 'These are your self-introduction building blocks: はじめまして。[name]です。[country]から来ました。よろしくお願いします。'],
    ex: [['アメリカから来ました。', "I'm from America."], ['東京に住んでいます。', 'I live in Tokyo.'], ['私はイギリス人です。', "I'm British."]],
    drills: [['アメリカ＿＿来ました。', 'から', ['まで', 'に', 'を'], "I came from America."], ['東京＿＿住んでいます。', 'に', ['から', 'を', 'は'], 'I live in Tokyo.'], ['私はアメリカ＿＿です。（nationality）', '人', ['語', '国', '円'], "I'm American."]],
    tip: 'Never apologise for your Japanese — say 日本語を勉強しています instead.',
  });

  G('e3-work', 13, 'e-desuga', {
    title: 'Softening: 〜ですが… / 〜と思うんですが…', pat: 'sentence + が… / んですが…', gist: 'indirect, polite phrasing',
    body: ['Japanese often ends a sentence with が… (but…) to leave room for the other person: すみません、ちょっとお聞きしたいんですが…. The "but" is not a contrast; it is politeness.', '〜と思うんですが (I think that… ) and 〜かもしれませんが (it might be…, but) soften opinions.', 'Opening requests with すみません、〜なんですが… is the standard way to start any favour.'],
    ex: [['すみません、ちょっとお聞きしたいんですが…。', 'Excuse me, I wanted to ask something…'], ['駅に行きたいんですが…。', "I'd like to go to the station…"], ['違うと思うんですが…。', "I think that's wrong, but…"]],
    drills: [['すみません、お聞きしたいんです＿＿…', 'が', ['を', 'に', 'は'], 'Excuse me, I wanted to ask…'], ['駅に行きたいんです＿＿…', 'が', ['を', 'に', 'は'], "I'd like to go to the station…"], ['違うと思うんです＿＿…', 'が', ['を', 'に', 'は'], "I think that's wrong, but…"]],
    tip: 'A sentence that just stops with が… is complete — it means "please help me with this".',
  });
})();
