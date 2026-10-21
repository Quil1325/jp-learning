// Grammar points. Each: title, pattern, gist, body (array of lines), ex [[jp, en]], drills [[sentence with ＿＿, answer, [wrong…], english]], tip (anime note)
window.NH_GRAMMAR = [];
(() => {
  const G = (u, lv, id, o) => NH_GRAMMAR.push({ u, lv, id, ...o });

  // ===== LEVEL 1 =====
  G('l1-intro', 1, 'desu', {
    title: 'です — "is / am / are"', pat: 'A は B です', gist: 'A is B',
    body: ['です is the polite "to be". It goes at the end of the sentence.', 'Negative: じゃ ありません (polite) / じゃ ない (casual). Past: でした.', 'Casual speech uses だ instead of です (anime characters use だ constantly).'],
    ex: [['わたしはがくせいです。', 'I am a student.'], ['これはほんです。', 'This is a book.'], ['おれはゆうしゃだ。', "I'm the hero. (casual だ)"]],
    drills: [['わたしはがくせい＿＿。', 'です', ['ます', 'を', 'か'], 'I am a student.'], ['あのひとはせんせい＿＿。', 'です', ['ます', 'に', 'の'], 'That person is a teacher.'], ['おれはゆうしゃ＿＿！', 'だ', ['ます', 'を', 'は'], "I'm the hero! (casual)"]],
    tip: 'Rough characters end lines with だ; polite ones with です. Spot which one a character uses!',
  });
  G('l1-intro', 1, 'wa', {
    title: 'は — topic marker', pat: 'A は …', gist: 'As for A, …',
    body: ['は is written "ha" but pronounced "wa" when it marks the topic.', 'It sets what the sentence is about: わたし は … = "As for me, …".'],
    ex: [['わたしはゆきです。', 'I am Yuki.'], ['あなたはだれですか。', 'Who are you?'], ['きょうはあついです。', "Today is hot."]],
    drills: [['わたし＿＿ゆきです。', 'は', ['を', 'に', 'で'], 'I am Yuki.'], ['これ＿＿ほんです。', 'は', ['を', 'に', 'と'], 'This is a book.'], ['きょう＿＿あついです。', 'は', ['を', 'へ', 'で'], 'Today is hot.']],
    tip: 'は = "wa", を = "o", へ = "e" are the three spelling-vs-sound exceptions.',
  });
  G('l1-intro', 1, 'ka', {
    title: 'か — question marker', pat: '… ですか。', gist: 'Is it …?',
    body: ['Add か to the end of a sentence to make it a question. No need for a question mark (but people often write ？).', 'Question words: なに (what), だれ (who), どこ (where), いつ (when), いくら (how much).'],
    ex: [['がくせいですか。', 'Are you a student?'], ['なまえはなんですか。', 'What is your name?'], ['トイレはどこですか。', 'Where is the toilet?']],
    drills: [['げんきです＿＿。', 'か', ['よ', 'を', 'は'], 'Are you well?'], ['これはいくらです＿＿。', 'か', ['よ', 'の', 'を'], 'How much is this?'], ['あなたはだれです＿＿。', 'か', ['ね', 'に', 'で'], 'Who are you?']],
    tip: 'Anime drops か in casual talk and just raises the voice: すごい？ / ほんとう？',
  });

  G('l1-people', 1, 'no', {
    title: 'の — possession / "of"', pat: 'A の B', gist: "A's B",
    body: ['の links two nouns, like English \'s: わたし の ともだち = my friend.', 'The first noun describes/owns the second.'],
    ex: [['わたしのともだちです。', 'This is my friend.'], ['せんせいのほんです。', "It is the teacher's book."], ['にほんごのせんせいです。', 'A Japanese teacher.']],
    drills: [['わたし＿＿ともだち', 'の', ['は', 'を', 'に'], 'my friend'], ['せんせい＿＿ほん', 'の', ['を', 'も', 'で'], "the teacher's book"], ['にほんご＿＿せんせい', 'の', ['と', 'へ', 'が'], 'a Japanese teacher']],
    tip: 'ぼくのヒーロー・アカデミア, 君の名は — titles love の.',
  });
  G('l1-people', 1, 'mo-to', {
    title: 'も and と — "also" and "and / with"', pat: 'A も … / A と B', gist: 'also / and',
    body: ['も replaces は/が/を to mean "also / too": わたしも = me too.', 'と joins nouns like "and": ともだちとあそぶ = play with a friend. Also means "with".'],
    ex: [['わたしもがくせいです。', 'I am a student too.'], ['ゆきとはるです。', 'Yuki and Haru.'], ['ともだちとアニメをみます。', 'I watch anime with a friend.']],
    drills: [['わたし＿＿がくせいです。', 'も', ['の', 'を', 'で'], 'I am a student too.'], ['ゆき＿＿はるです。', 'と', ['の', 'も', 'に'], 'Yuki and Haru.'], ['ともだち＿＿あそぶ。', 'と', ['を', 'は', 'で'], 'Play with a friend.']],
    tip: 'ぼくも！ わたしも！ is how characters join in.',
  });

  G('l1-things', 1, 'kosoado', {
    title: 'こ・そ・あ・ど words', pat: 'これ それ あれ どれ', gist: 'this / that / that over there / which',
    body: ['こ- = near me, そ- = near you, あ- = far from both, ど- = question.', 'Things: これ それ あれ どれ. Places: ここ そこ あそこ どこ. Before nouns: この その あの どの.'],
    ex: [['これはなんですか。', 'What is this?'], ['あれはえきです。', 'That over there is the station.'], ['そのほんはおもしろいです。', 'That book is interesting.']],
    drills: [['＿＿はなんですか。（near me）', 'これ', ['それ', 'あれ', 'どれ'], 'What is this?'], ['＿＿ほんはおもしろい。（that, near you）', 'その', ['この', 'あの', 'どの'], 'That book is fun.'], ['トイレは＿＿ですか。', 'どこ', ['ここ', 'そこ', 'あそこ'], 'Where is the toilet?']],
    tip: 'あれ！ (Look at that!) is a classic anime reaction.',
  });
  G('l1-things', 1, 'wo', {
    title: 'を — object marker', pat: 'A を verb', gist: 'verb A',
    body: ['を marks the thing being acted on (the direct object). Pronounced "o".', 'ラーメンをたべる = eat ramen.'],
    ex: [['ラーメンをたべます。', 'I eat ramen.'], ['アニメをみます。', 'I watch anime.'], ['おちゃをのみます。', 'I drink tea.']],
    drills: [['ラーメン＿＿たべます。', 'を', ['は', 'に', 'で'], 'I eat ramen.'], ['アニメ＿＿みます。', 'を', ['の', 'も', 'と'], 'I watch anime.'], ['マンガ＿＿よみます。', 'を', ['へ', 'に', 'か'], 'I read manga.']],
    tip: 'Say it as "o" — you hear "ラーメンお たべる" in speech.',
  });
  G('l1-things', 1, 'ni-de', {
    title: 'に vs で — location & time', pat: 'に (target/existence) · で (action place / means)', gist: 'at / to / by',
    body: ['に: destination (がっこうにいく), exact time (7じに), and where something exists (いえにいる).', 'で: where an action happens (がっこうでべんきょうする) and the means (でんしゃでいく).', 'Quick test: is something just there (に), or is an action taking place (で)?'],
    ex: [['がっこうにいきます。', 'I go to school.'], ['がっこうでべんきょうします。', 'I study at school.'], ['でんしゃでいきます。', 'I go by train.']],
    drills: [['がっこう＿＿いきます。', 'に', ['で', 'を', 'の'], 'I go to school.'], ['えき＿＿ともだちにあう。', 'で', ['に', 'を', 'と'], 'I meet a friend at the station.'], ['でんしゃ＿＿いきます。', 'で', ['に', 'を', 'は'], 'I go by train.']],
    tip: 'ここにいる (I am here) vs ここでたたかう (fight here) — different verbs of being vs doing.',
  });

  G('l1-verbs', 1, 'masu', {
    title: 'ます form — polite verbs', pat: 'verb stem + ます', gist: 'polite present/future',
    body: ['Dictionary form → polite: たべる → たべ ます; のむ → のみ ます; する → し ます; くる → き ます.', 'Negative: ません. Past: ました. Past negative: ませんでした.', 'Group 1 (u-verbs): change the final u to i + ます (いく → いきます). Group 2 (ru-verbs): drop る + ます (みる → みます).'],
    ex: [['まいにちアニメをみます。', 'I watch anime every day.'], ['きのうはいきませんでした。', 'I did not go yesterday.'], ['あしたともだちにあいます。', "I'll meet a friend tomorrow."]],
    drills: [['アニメをみ＿＿。', 'ます', ['ません', 'ました', 'たい'], 'I watch anime.'], ['きのうがっこうにいき＿＿。', 'ました', ['ます', 'ません', 'たい'], 'I went to school yesterday.'], ['ラーメンをたべ＿＿。', 'ません', ['ます', 'ました', 'です'], "I don't eat ramen."]],
    tip: 'This is the "polite" register. Anime heroes mostly skip it — see Level 2 for plain forms.',
  });
  G('l1-verbs', 1, 'iru-aru', {
    title: 'あります / います — existence', pat: 'place に thing が あります / person が います', gist: 'there is …',
    body: ['ある = things that do not move; いる = people and animals.', 'Pattern: [place]に[thing]が あります. Negative: ありません / いません.'],
    ex: [['つくえのうえにほんがあります。', 'There is a book on the desk.'], ['へやにねこがいます。', 'There is a cat in the room.'], ['おかねがありません。', 'I have no money.']],
    drills: [['ここにねこが＿＿。', 'います', ['あります', 'いきます', 'です'], 'There is a cat here.'], ['つくえのうえにほんが＿＿。', 'あります', ['います', 'みます', 'です'], 'There is a book on the desk.'], ['おかねが＿＿。', 'ありません', ['います', 'いません', 'ありました'], "I don't have money."]],
    tip: '"ここにいる" / "ここにある" — also used for the abstract: ゆめがある (I have a dream).',
  });
  G('l1-verbs', 1, 'te-kudasai', {
    title: 'て-form + ください — "please do"', pat: 'verb て + ください', gist: 'please …',
    body: ['The て-form is the "linking" form of verbs. To make polite requests add ください.', 'Quick て-forms: たべる → たべて, みる → みて, いく → いって, のむ → のんで, はなす → はなして, まつ → まって.'],
    ex: [['みてください。', 'Please look.'], ['まってください。', 'Please wait.'], ['おしえてください。', 'Please tell me.']],
    drills: [['ちょっとまって＿＿。', 'ください', ['ます', 'です', 'ません'], 'Please wait a moment.'], ['ゆっくりはなして＿＿。', 'ください', ['ました', 'です', 'ます'], 'Please speak slowly.'], ['もういちどいって＿＿。', 'ください', ['ます', 'ません', 'たい'], 'Please say it once more.']],
    tip: 'Friends drop ください: まって！ みて！ きいて！ — the bare て-form is a casual request.',
  });

  G('l1-adj', 1, 'i-adj', {
    title: 'い-adjectives', pat: '〜い → 〜くない / 〜かった', gist: 'adjectives that end in い',
    body: ['They can modify a noun directly: おおきいいぬ = big dog.', 'Negative: い → くない (たかい → たかくない). Past: い → かった (たかかった). Past negative: くなかった.', 'Exception: いい (good) → よくない / よかった.'],
    ex: [['このラーメンはおいしいです。', 'This ramen is delicious.'], ['すこしたかくないですか。', "Isn't it a bit expensive?"], ['きのうはさむかった。', 'It was cold yesterday.']],
    drills: [['おいし＿＿ない。（not delicious）', 'くない', ['じゃない', 'かった', 'ない'], 'It is not delicious.'], ['きのうはさむ＿＿。（it was cold）', 'かった', ['くない', 'だった', 'い'], 'It was cold yesterday.'], ['いい → ＿＿', 'よくない', ['いくない', 'いかった', 'いじゃない'], 'not good']],
    tip: 'Anime classic: すごい → すごかった (that was awesome).',
  });
  G('l1-adj', 1, 'na-adj', {
    title: 'な-adjectives', pat: '〜な + noun / 〜じゃない', gist: 'adjectives that need な',
    body: ['Words like きれい, しずか, すき, ゆうめい behave like nouns.', 'Before a noun add な: きれいな はな. Negative: じゃない. Past: だった.', 'A few end in い but are な-adjectives: きれい, きらい.'],
    ex: [['きれいなはなですね。', 'What a pretty flower.'], ['ここはしずかです。', "It's quiet here."], ['わたしはねこがすきです。', 'I like cats.']],
    drills: [['きれい＿＿はな', 'な', ['の', 'い', 'を'], 'a pretty flower'], ['しずか＿＿ない。', 'じゃ', ['く', 'に', 'は'], 'not quiet'], ['ゆうめい＿＿ひと', 'な', ['い', 'が', 'の'], 'a famous person']],
    tip: 'すき/きらい take が: アニメがすき (I like anime), not を.',
  });
  G('l1-adj', 1, 'tai', {
    title: '〜たい — "want to do"', pat: 'verb stem + たい', gist: 'I want to …',
    body: ['Attach たい to the ます-stem: たべる → たべたい; いく → いきたい.', 'たい behaves like an い-adjective: たべたくない (don\'t want to eat), たべたかった (wanted to).', 'It talks about the speaker\'s own wishes.'],
    ex: [['ラーメンをたべたいです。', 'I want to eat ramen.'], ['にほんにいきたい。', 'I want to go to Japan.'], ['ゆうしゃになりたい！', 'I want to become a hero!']],
    drills: [['ラーメンをたべ＿＿です。', 'たい', ['ます', 'ない', 'ました'], 'I want to eat ramen.'], ['にほんにいき＿＿。', 'たい', ['ます', 'です', 'ない'], 'I want to go to Japan.'], ['ゆうしゃになり＿＿！', 'たい', ['ます', 'です', 'ました'], 'I want to become a hero!']],
    tip: 'Shounen dreams: 海賊王におれはなる！ vs. ヒーローになりたい.',
  });

  // ===== LEVEL 2 =====
  G('l2-speech', 2, 'plain', {
    title: 'Plain (casual) form', pat: 'dictionary / ない / た / なかった', gist: 'how anime characters actually talk',
    body: ['Plain present: dictionary form (たべる). Negative: ない (たべない). Past: た (たべた). Past negative: なかった.', 'Group 1 (u-verbs) negative: u → a + ない (いく → いかない). Group 2 (ru-verbs): drop る + ない (みる → みない). する → しない, くる → こない.', 'Past た: same pattern as て-form (て → た, で → だ): いって → いった, のんで → のんだ.'],
    ex: [['もうたべた。', 'I already ate.'], ['それはわからない。', "I don't understand that."], ['おれはぜったいにまけない！', 'I will never lose!']],
    drills: [['ラーメンをたべ＿＿。（ate）', 'た', ['ない', 'ます', 'て'], 'I ate ramen.'], ['わから＿＿。（don\'t understand）', 'ない', ['た', 'ます', 'て'], "I don't understand."], ['きのうがっこうにいか＿＿った。', 'なか', ['ない', 'ま', 'て'], 'I did not go to school yesterday.']],
    tip: 'Drop です/ます and you are in anime-land. わからない / わかんない / しらねえ — all plain speech.',
  });
  G('l2-speech', 2, 'pronouns', {
    title: 'Who is talking? — pronouns & titles', pat: '俺 / 僕 / 私 · お前 / 君 · さん くん ちゃん 様', gist: 'character voice',
    body: ['I: わたし (neutral/polite), ぼく (boyish, soft), おれ (rough male), あたし (casual female), わし (old man), 拙者 (samurai).', 'You: あなた (neutral), きみ (familiar), おまえ (rough/hostile), あんた (casual, blunt), 貴様 (very hostile).', 'Titles: さん (polite), くん (boys/juniors), ちゃん (cute/close), さま (very respectful), せんぱい, せんせい.'],
    ex: [['おれがやる。', "I'll do it. (rough)"], ['きみのなまえは？', "What's your name? (familiar)"], ['ゆきちゃん、まって！', 'Yuki-chan, wait!']],
    drills: [['＿＿はぜったいにまけない！（rough "I"）', 'おれ', ['わたし', 'あたし', 'きみ'], 'I will never lose!'], ['＿＿はだれだ？（hostile "you"）', 'おまえ', ['あなた', 'ぼく', 'わたし'], 'Who are you?!'], ['ゆき＿＿、ありがとう！（cute suffix）', 'ちゃん', ['さま', 'せんぱい', 'です'], 'Thanks, Yuki-chan!']],
    tip: 'Switching pronouns mid-show (私→俺) is a character-development signal!',
  });
  G('l2-speech', 2, 'endings', {
    title: 'Sentence-ending particles', pat: 'よ ね ぞ ぜ さ わ かな の', gist: 'emotion & character voice',
    body: ['よ: telling/insisting ("I tell you"). ね: seeking agreement ("right?"). よね: confirming.', 'ぞ / ぜ: rough, masculine emphasis (いくぞ！ いくぜ！). さ: casual "you know". わ: soft, traditionally feminine. かな: "I wonder".', 'の: explanation / soft question (どうしたの？ = what\'s wrong?).'],
    ex: [['いいてんきですね。', "Nice weather, isn't it?"], ['いくぞ！', "Here I go! (rough)"], ['だいじょうぶだよ。', "It's okay, I promise."]],
    drills: [['いいてんきです＿＿。（right?）', 'ね', ['よ', 'ぞ', 'を'], "Nice weather, isn't it?"], ['いく＿＿！（rough shout）', 'ぞ', ['ね', 'を', 'か'], 'Here I go!'], ['どうした＿＿？（gentle "what\'s wrong"）', 'の', ['ぞ', 'を', 'ぜ'], "What's wrong?"]],
    tip: 'ぞ/ぜ/ぜえ = hero or bad guy; わ/かしら = ojou-sama (classic noble girl).',
  });

  G('l2-battle', 2, 'te-iru', {
    title: 'て-form & 〜ている / 〜てる', pat: 'verb て + いる → てる', gist: 'is doing / has done (state)',
    body: ['て-form rules: る-verbs drop る + て (みる → みて). Group 1: う/つ/る → って, ぶ/む/ぬ → んで, く → いて, ぐ → いで, す → して. する → して, くる → きて. Exception: いく → いって.', '〜ている = ongoing action ("is eating") or resulting state ("is married"). Casual: 〜てる.', 'Also use for 〜てから, 〜てください, linking actions.'],
    ex: [['いまたべてる。', "I'm eating now."], ['なにをみてるの？', 'What are you looking at?'], ['しってる！', 'I know (that)!']],
    drills: [['いまたべ＿＿。（casual）', 'てる', ['ます', 'ない', 'たい'], "I'm eating now."], ['のん＿＿ください。', 'で', ['て', 'った', 'い'], 'Please drink.'], ['いっ＿＿ください。', 'て', ['で', 'いて', 'たい'], 'Please go.']],
    tip: '"しってる？" is one of the most common anime questions.',
  });
  G('l2-battle', 2, 'imperative', {
    title: 'Commands — 〜ろ / 〜な / 〜なさい', pat: 'verb command / prohibition', gist: 'orders & "don\'t!"',
    body: ['Rough command (-る verbs): drop る + ろ (にげる → にげろ). Group 1: change u → e (まつ → まて, やめる → やめろ, いく → いけ).', 'Prohibition: dictionary form + な (にげるな！ = don\'t run!).', 'Polite-firm: 〜なさい (たべなさい = eat!). Soft: 〜て (まって).'],
    ex: [['にげろ！', 'Run!'], ['やめろ！', 'Stop it!'], ['あきらめるな！', "Don't give up!"]],
    drills: [['にげ＿＿！（Run!）', 'ろ', ['な', 'ます', 'て'], 'Run!'], ['にげる＿＿！（Don\'t run!）', 'な', ['ろ', 'ます', 'て'], "Don't run!"], ['まて！ → dictionary form is ＿＿', 'まつ', ['まる', 'まぬ', 'まく'], 'wait']],
    tip: 'These are rude in real life! Use ください / て-form with strangers.',
  });
  G('l2-battle', 2, 'volitional', {
    title: 'Let\'s / I\'ll — 〜よう / 〜おう', pat: 'volitional form', gist: "let's … / I will …",
    body: ['Group 2 (ru-verbs): drop る + よう (たべる → たべよう). Group 1: u → o + う (いく → いこう, かく → かこう, たたかう → たたかおう). する → しよう, くる → こよう.', 'Used for "let\'s do it" invitations and "I\'ll do it" resolutions. Polite: ましょう.'],
    ex: [['いこう！', "Let's go!"], ['たべよう。', "Let's eat."], ['たたかおう！', "Let's fight!"]],
    drills: [['いこ＿＿！（Let\'s go!）', 'う', ['よう', 'ろ', 'な'], "Let's go!"], ['たべ＿＿。（Let\'s eat）', 'よう', ['う', 'ろ', 'な'], "Let's eat."], ['みんなで＿＿ましょう。（polite let\'s）', 'いき', ['いく', 'いこう', 'いけ'], "Let's go together."]],
    tip: '"Let\'s do it!" energy: やってやろう！ いくぞ！',
  });
  G('l2-battle', 2, 'potential', {
    title: 'Can do — potential form', pat: 'verb → 〜れる / 〜られる', gist: 'can / able to',
    body: ['Group 1: u → e + る (かく → かける, はなす → はなせる). Group 2: drop る + られる (たべる → たべられる; casual たべれる). する → できる, くる → こられる.', 'The object particle often switches を → が: にほんごが はなせる.'],
    ex: [['にほんごがはなせる。', 'I can speak Japanese.'], ['もうにげられない。', "I can't run anymore."], ['おれならできる！', 'I can do it!']],
    drills: [['にほんごがはなせ＿＿。', 'る', ['ます', 'た', 'ない'], 'I can speak Japanese.'], ['たべ＿＿ない。（can\'t eat）', 'られ', ['れ', 'せ', 'よ'], "I can't eat."], ['する → ＿＿（can do）', 'できる', ['しれる', 'される', 'しられる'], 'can do']],
    tip: 'できない！ and もう戦えない — the "I can\'t" of a downed hero.',
  });

  G('l2-feel', 2, 'tara', {
    title: '〜たら — "if / when"', pat: 'plain past + ら', gist: 'if … happens / once …',
    body: ['Take the plain past (た-form) and add ら.', 'Use for "if" and for "once that happens": ついたら、でんわして = when you arrive, call me.', 'Often followed by a request, wish or decision.'],
    ex: [['ついたらでんわして。', 'Call me when you arrive.'], ['もしかったら、なんでもする。', "If I win, I'll do anything."], ['あめがふったらいかない。', "If it rains, I won't go."]],
    drills: [['ついた＿＿、でんわして。', 'ら', ['と', 'ば', 'て'], 'When you arrive, call me.'], ['かっ＿＿、なんでもする。', 'たら', ['たり', 'たい', 'ても'], "If I win, I'll do anything."], ['あめがふっ＿＿いかない。', 'たら', ['たり', 'ても', 'たい'], "If it rains, I won't go."]],
    tip: 'もし〜たら is the "what if" of anime plots.',
  });
  G('l2-feel', 2, 'nakya', {
    title: '〜なきゃ — "must / have to"', pat: 'ない-stem + なきゃ(いけない)', gist: 'have to …',
    body: ['Drop い from the negative and add けれ(ば)ならない — nobody says that. Casual: 〜なきゃ(いけない), 〜なくちゃ.', 'いかなきゃ = I have to go. Formal: 〜なければならない.'],
    ex: [['もういかなきゃ。', 'I have to go now.'], ['まもらなくちゃ！', 'I have to protect (them)!'], ['べんきょうしなきゃ。', 'I need to study.']],
    drills: [['もういか＿＿。', 'なきゃ', ['ない', 'たい', 'よう'], 'I have to go now.'], ['まもら＿＿！', 'なくちゃ', ['たい', 'ます', 'よう'], 'I have to protect!'], ['やら＿＿いけない。', 'なきゃ', ['ない', 'たい', 'よう'], 'I have to do it.']],
    tip: 'ヒーローはたすけなきゃ！ — duty speech.',
  });
  G('l2-feel', 2, 'chau', {
    title: '〜ちゃう — "ended up / accidentally"', pat: 'て-form + しまう → ちゃう', gist: 'did it (regrettably / completely)',
    body: ['てしまう = finish completely or do by accident. Casual contractions: てしまう → ちゃう, でしまう → じゃう.', 'しんじゃう (I\'m gonna die), わすれちゃった (I forgot!), たべちゃった (I ate it all).'],
    ex: [['わすれちゃった！', 'Oops, I forgot!'], ['しんじゃう…', "I'm gonna die…"], ['ぜんぶたべちゃった。', 'I ate it all.']],
    drills: [['わすれ＿＿った！', 'ちゃ', ['て', 'な', 'よう'], 'I forgot!'], ['しん＿＿う…', 'じゃ', ['ちゃ', 'て', 'な'], "I'm gonna die…"], ['ぜんぶたべ＿＿った。', 'ちゃ', ['じゃ', 'な', 'よ'], 'I ate it all.']],
    tip: 'Said when something went wrong — also the "I\'ll die of embarrassment" line.',
  });
  G('l2-feel', 2, 'to-omou', {
    title: '〜と思う / 〜と言う — quoting', pat: 'plain form + と思う', gist: 'I think that … / says that …',
    body: ['Put a plain-form clause before と, then 思う (think) or 言う (say).', 'おもう softens opinions: いいとおもう (I think it\'s good).', 'Quote-end: 〜って is the casual version (いいって = he says it\'s fine).'],
    ex: [['それはいいとおもう。', 'I think that is good.'], ['かれはいくといった。', 'He said he would go.'], ['だいじょうぶだとおもう。', 'I think it will be fine.']],
    drills: [['いいと＿＿。', 'おもう', ['いう', 'みる', 'しる'], 'I think it is good.'], ['かれはいくと＿＿。', 'いった', ['おもう', 'きた', 'みた'], 'He said he would go.'], ['だいじょうぶ＿＿おもう。', 'だと', ['です', 'と', 'って'], 'I think it will be fine.']],
    tip: '〜って is everywhere in dialogue: そう思うって言ってた。',
  });
  G('l2-feel', 2, 'kamo', {
    title: '〜かもしれない — "maybe"', pat: 'plain form + かもしれない', gist: 'might / perhaps',
    body: ['Add かもしれない to a plain-form clause. Casual: かも.', 'For nouns and な-adj, drop だ: あめかも (maybe rain), ほんとうかも.'],
    ex: [['あめがふるかもしれない。', 'It might rain.'], ['それはうそかも。', 'That might be a lie.'], ['ちこくするかも！', 'I might be late!']],
    drills: [['あめがふる＿＿しれない。', 'かも', ['だけ', 'ほど', 'より'], 'It might rain.'], ['ちこくする＿＿！', 'かも', ['よう', 'ぞ', 'ね'], 'I might be late!'], ['それはうそ＿＿。', 'かも', ['だ', 'です', 'が'], 'That might be a lie.']],
    tip: 'Detectives love かもしれない — それは…まさか。',
  });
  G('l2-school', 2, 'temo', {
    title: '〜ても — "even if" · 〜てもいい "may"', pat: 'て-form + も', gist: 'even if / it\'s okay to',
    body: ['て-form + も = "even if": あきらめても = even if I gave up.', 'て-form + もいい = permission: たべてもいい？ = may I eat?', 'Add いけない/だめ to forbid: たべてはいけない.'],
    ex: [['たべてもいい？', 'May I eat?'], ['なんどまけても、あきらめない。', "No matter how many times I lose, I won't give up."], ['ここにいてもいいですか。', 'Is it okay if I stay here?']],
    drills: [['たべて＿＿いい？', 'も', ['は', 'を', 'に'], 'May I eat?'], ['まけて＿＿、あきらめない。', 'も', ['は', 'を', 'に'], "Even if I lose, I won't give up."], ['ここにいて＿＿いいですか。', 'も', ['は', 'を', 'で'], 'Is it okay to stay here?']],
    tip: 'Shounen 101: ＜verb＞ても＜verb＞ない!',
  });

  // ===== LEVEL 3 =====
  G('l3-story', 3, 'ageru', {
    title: 'あげる / くれる / もらう — giving & receiving', pat: 'verb て + あげる / くれる / もらう', gist: 'do a favor',
    body: ['あげる: I give (to someone). くれる: someone gives to me. もらう: I receive.', 'て-form + these = doing/receiving a favor: てあげる, てくれる, てもらう.', 'The direction of the favor matters — it\'s a fundamental Japanese idea.'],
    ex: [['ともだちがてつだってくれた。', 'A friend helped me.'], ['わたしがおしえてあげる。', "I'll teach you."], ['せんせいにおしえてもらった。', 'I had the teacher teach me.']],
    drills: [['ともだちがてつだって＿＿た。', 'くれ', ['あげ', 'もらっ', 'いっ'], 'A friend helped me.'], ['わたしがおしえて＿＿る。', 'あげ', ['くれ', 'もらう', 'いく'], "I'll teach you."], ['せんせいにおしえて＿＿た。', 'もらっ', ['あげ', 'くれ', 'いっ']  , 'I had the teacher teach me.']],
    tip: 'ありがとう → 助けてくれてありがとう is the grateful way to say thanks.',
  });
  G('l3-story', 3, 'passive', {
    title: 'Passive 〜れる / 〜られる', pat: 'verb → 〜れる / 〜られる', gist: 'is done to (me)',
    body: ['Group 1: u → a + れる (ころす → ころされる). Group 2: drop る + られる (たべる → たべられる).', 'Often adversative: someone did something and it affected me (ないた → なかれた = was cried at by someone).'],
    ex: [['てきにやられた！', 'I got beaten by the enemy!'], ['なまえをよばれた。', 'My name was called.'], ['ともだちにわらわれた。', 'I was laughed at by friends.']],
    drills: [['てきにやら＿＿た！', 'れ', ['せ', 'よう', 'ろ'], 'I got beaten.'], ['なまえをよば＿＿た。', 'れ', ['せ', 'ろ', 'よう'], 'My name was called.'], ['たべ＿＿る（passive of たべる）', 'られ', ['れ', 'させ', 'せ'], 'to be eaten']],
    tip: 'やられた！ is the classic "I\'ve been had!"',
  });
  G('l3-story', 3, 'causative', {
    title: 'Causative 〜せる / 〜させる', pat: 'verb → 〜せる / 〜させる', gist: 'make / let someone do',
    body: ['Group 1: u → a + せる (いく → いかせる). Group 2: drop る + させる (たべる → たべさせる).', 'Make someone do: ～を〜せる. Let someone do: ～に〜せる.', 'Causative-passive: させられる = "was forced to do".'],
    ex: [['こどもにたべさせる。', 'I make the child eat.'], ['おれにやらせてくれ！', 'Let me do it!'], ['むりやりいかされた。', 'I was forced to go.']],
    drills: [['こどもにたべ＿＿る。', 'させ', ['られ', 'れ', 'よう'], 'I make the child eat.'], ['おれにやら＿＿てくれ！', 'せ', ['れ', 'ろ', 'ない'], 'Let me do it!'], ['いか＿＿られた。', 'さ', ['せ', 'れ', 'よ'], 'I was forced to go.']],
    tip: 'やらせてください — the pleading "let me do it".',
  });
  G('l3-story', 3, 'ba', {
    title: '〜ば — conditional "if"', pat: 'verb eba / い-adj kereba', gist: 'if (general condition)',
    body: ['Group 1: u → e + ば (いく → いけば). Group 2: drop る + れば (たべる → たべれば). い-adj: い → ければ.', 'Stresses "this condition is enough": よければ (if you like), できれば (if possible).', 'Compare たら (when/if) and ば (if only … then).'],
    ex: [['いそげばまにあう。', "If you hurry, you'll make it."], ['よければ、いっしょにいこう。', "If it's okay with you, let's go together."], ['やればできる！', "If you do it, you can!"]],
    drills: [['いそ＿＿まにあう。', 'げば', ['いで', 'ぐと', 'いた'], "If you hurry, you'll make it."], ['よけ＿＿いっしょにいこう。', 'れば', ['ば', 'たら', 'て'], 'If it is good, let us go together.'], ['やれ＿＿できる！', 'ば', ['て', 'た', 'ない'], 'If you do it, you can!']],
    tip: 'やればできる = "I can do it if I try" — the permanent slacker motto.',
  });
  G('l3-story', 3, 'sou-rashii', {
    title: '〜そう / 〜らしい / 〜みたい — "seems"', pat: 'stem そう · plain らしい · plain みたい', gist: 'looks like / I heard / seems',
    body: ['〜そう (appearance): おいしそう (looks delicious), なきそう (looks like she\'ll cry). Not for い-adj いい → よさそう.', '〜らしい (hearsay/indirect evidence): ゆうしゃらしい (apparently/befitting a hero).', '〜みたい (casual "like / seems"): ゆめみたい (like a dream).'],
    ex: [['おいしそう！', 'Looks delicious!'], ['あのひとはゆうめいらしい。', 'Apparently that person is famous.'], ['ゆめみたい。', "It's like a dream."]],
    drills: [['おいし＿＿！', 'そう', ['らしい', 'みたい', 'よう'], 'Looks delicious!'], ['ゆめ＿＿。', 'みたい', ['そう', 'たい', 'ない'], "It's like a dream."], ['あめがふる＿＿。（I hear it\'ll rain）', 'らしい', ['そう', 'たい', 'ない'], 'Apparently it will rain.']],
    tip: '"…みたいだな" — dry reaction after an absurd reveal.',
  });
  G('l3-story', 3, 'tame-you', {
    title: '〜ために / 〜ように — purpose', pat: 'verb + ために / ように', gist: 'in order to',
    body: ['〜ために: purpose controlled by you (volitional). せかいをすくうためにたたかう.', '〜ように: aim at a state or change you can\'t directly control. わすれないようにメモする.', 'ために can also mean "because of" with nouns: みんなのために (for everyone).'],
    ex: [['みんなをまもるためにたたかう。', 'I fight to protect everyone.'], ['わすれないようにメモする。', "I take notes so I won't forget."], ['あなたのためなら、なんでもする。', "For you, I'd do anything."]],
    drills: [['まもる＿＿たたかう。', 'ために', ['ように', 'ながら', 'のに'], 'I fight in order to protect.'], ['わすれない＿＿メモする。', 'ように', ['ために', 'ながら', 'のに'], "I take notes so I don't forget."], ['あなた＿＿なら、なんでもする。', 'のため', ['のよう', 'らしい', 'みたい'], 'For you, anything.']],
    tip: 'みんなのために — the core of all "power of friendship" speeches.',
  });
  G('l3-story', 3, 'koto', {
    title: '〜こと — nominalizer patterns', pat: 'verb + ことができる / ことがある / ことにする', gist: 'ability / experience / decision',
    body: ['〜ことができる: can do. 〜ことがある: have the experience of / sometimes. 〜ことにする: decide to. 〜ことになる: it turns out that / it is decided.', 'Also turns a verb into a noun: みることが すき (I like looking).'],
    ex: [['にほんごをはなすことができる。', 'I can speak Japanese.'], ['ふじさんにのぼったことがある。', 'I have climbed Mt. Fuji.'], ['たたかうことにした。', 'I decided to fight.']],
    drills: [['はなす＿＿ができる。', 'こと', ['もの', 'ため', 'よう'], 'I can speak.'], ['のぼった＿＿がある。', 'こと', ['もの', 'ため', 'よう'], 'I have climbed it before.'], ['たたかう＿＿にした。', 'こと', ['もの', 'ため', 'よう'], 'I decided to fight.']],
    tip: '"〜ことにした" — protagonist\'s resolution line.',
  });
  G('l3-story', 3, 'teoku-miru', {
    title: '〜ておく / 〜てみる / 〜ていく / 〜てくる', pat: 'て-form + auxiliary', gist: 'prepare / try / go on / come to',
    body: ['〜ておく: do in advance. 〜てみる: try doing. 〜ていく: continue/going away. 〜てくる: come to be / do and come back.', 'These auxiliary verbs add a nuance of preparation, trial, or direction in time.'],
    ex: [['さきにやっておく。', "I'll do it in advance."], ['たべてみる？', 'Want to try eating it?'], ['これからもがんばっていく。', "I'll keep on doing my best."]],
    drills: [['やって＿＿。（in advance）', 'おく', ['みる', 'いく', 'くる'], "I'll do it in advance."], ['たべて＿＿？（try）', 'みる', ['おく', 'いく', 'くる'], 'Try eating it?'], ['がんばって＿＿。（continue forward）', 'いく', ['おく', 'みる', 'いる'], "I'll keep going."]],
    tip: 'やってみる — "I\'ll give it a shot!"',
  });

  // ===== LEVEL 4 =====
  G('l4-keigo', 4, 'keigo', {
    title: 'Keigo — honorific & humble speech', pat: 'お〜になる / お〜する / special verbs', gist: 'respectful language',
    body: ['Honorific (尊敬語) raises the other person: お〜になる (おかえりになる), 〜れる/られる, special verbs (いらっしゃる, おっしゃる, めしあがる, くださる).', 'Humble (謙譲語) lowers yourself: お〜する (おまちする), special verbs (もうす, まいる, いただく, うかがう, はいけんする).', 'Polite (丁寧語): です／ます／ございます. Don\'t mix honorifics on your own actions!'],
    ex: [['なにをめしあがりますか。', 'What will you have?'], ['わたくしはやまだともうします。', 'My name is Yamada.'], ['すこしおまちください。', 'Please wait a moment.']],
    drills: [['しゃちょうがいらっ＿＿。', 'しゃる', ['しゃい', 'しゃって', 'しゃれ'], 'The president is coming.'], ['わたくしはやまだと＿＿。', 'もうします', ['おっしゃる', 'いらっしゃる', 'めしあがる'], 'My name is Yamada. (humble)'], ['すこしお＿＿ください。', 'まち', ['まつ', 'まった', 'まて'], 'Please wait a moment.']],
    tip: 'Butlers, maids and corporate-villains speak this way — "お嬢様、お紅茶をどうぞ."',
  });
  G('l4-villain', 4, 'zaru', {
    title: '〜ざるを得ない — "cannot help but"', pat: 'ない-stem + ざるを得ない', gist: "have no choice but to",
    body: ['A literary pattern: ない → ざる (しない → せざる; special) + をえない.', 'Means "have no choice but to / can\'t help but".', 'Common in drama and serious speeches.'],
    ex: [['いかざるをえない。', 'I have no choice but to go.'], ['みとめざるをえなかった。', 'I had to admit it.'], ['わらわざるをえない。', "I can't help but laugh."]],
    drills: [['いか＿＿をえない。', 'ざる', ['ない', 'ぬ', 'よう'], 'I have no choice but to go.'], ['みとめ＿＿をえなかった。', 'ざる', ['ない', 'ぬ', 'よう'], 'I had to admit it.'], ['わらわ＿＿をえない。', 'ざる', ['ない', 'ぬ', 'よう'], "I can't help laughing."]],
    tip: 'Delivered by grave generals: "…認めざるを得まい。"',
  });
  G('l4-villain', 4, 'mono', {
    title: '〜ものか / 〜もんか — strong denial', pat: 'plain + ものか', gist: "as if I would! / no way!",
    body: ['Strong emotional denial: だれがするものか = "like I\'d ever do it!"', 'Casual: もんか. Close to rhetorical questions with か.', 'Not to be confused with ものの (even though).'],
    ex: [['まけるものか！', "I won't lose, no way!"], ['だれがあやまるものか。', "Who'd apologize?!"], ['ゆるすもんか。', "I'll never forgive you."]],
    drills: [['まける＿＿か！', 'もの', ['こと', 'ため', 'ところ'], "I won't lose!"], ['ゆるす＿＿か。（casual）', 'もん', ['こと', 'ため', 'もの'], "I'll never forgive."], ['だれがあやまる＿＿か。', 'もの', ['こと', 'ため', 'よう'], "Who'd apologize?"]],
    tip: 'Fighting-spirit line: 負けるもんか！',
  });
  G('l4-villain', 4, 'mai', {
    title: '〜まい — "won\'t / probably not"', pat: 'dictionary + まい', gist: 'negative volition',
    body: ['まい attaches to the dictionary form (group 1) or the stem (group 2): いくまい, みまい/みるまい.', 'Two meanings: "I won\'t …" (resolve) and "probably won\'t …" (guess).', 'Archaic; used by samurai, villains, and old men.'],
    ex: [['にどとあやまるまい。', 'Never again will I err.'], ['あいつはもうこまい。', "He probably won't come anymore."], ['ふたたびにげまい。', 'I will not run away again.']],
    drills: [['にどとあやまる＿＿。', 'まい', ['ない', 'ぬ', 'ず'], 'I will never err again.'], ['ふたたびにげ＿＿。', 'まい', ['ない', 'ぬ', 'ず'], 'I will not run again.'], ['あいつはもうこ＿＿。', 'まい', ['ない', 'ぬ', 'ず'], 'He probably will not come anymore.']],
    tip: 'Final-boss declaration: "二度と負けまい。"',
  });
  G('l4-villain', 4, 'nu-zu', {
    title: '〜ぬ / 〜ず — classical negatives', pat: 'ない → ぬ / ず', gist: 'archaic "not"',
    body: ['ぬ replaces ない at sentence end (しらぬ = しらない). ず is a connective/adverbial form (しらず = without knowing).', 'する → せぬ / せず. Frequent in swordsman, wizard and villain dialogue.'],
    ex: [['そんなことはしらぬ。', "I know nothing of that."], ['なにもいわず、さった。', 'He left without saying anything.'], ['ゆるさぬ。', 'I will not forgive.']],
    drills: [['しら＿＿。', 'ぬ', ['ない', 'ます', 'まい'], 'I do not know.'], ['なにもいわ＿＿さった。', 'ず', ['ない', 'ぬ', 'て'], 'He left without a word.'], ['ゆるさ＿＿。', 'ぬ', ['ない', 'ず', 'ます'], 'I will not forgive.']],
    tip: '"貴様、許さぬ！" — you will hear this a lot in historical anime.',
  });
  G('l4-villain', 4, 'wake', {
    title: '〜わけ / 〜わけにはいかない', pat: 'plain + わけ', gist: 'reason / cannot (for moral reasons)',
    body: ['〜わけだ: that is why / it means. 〜わけがない: there is no way. 〜わけにはいかない: cannot (because of duty).', 'Expresses a "can\'t because it wouldn\'t be right" attitude.'],
    ex: [['ここでまけるわけにはいかない。', 'I cannot afford to lose here.'], ['そんなわけがない。', 'There is no way.'], ['だからこそ、にげるわけにはいかない。', "That's why I can't run."]],
    drills: [['まける＿＿にはいかない。', 'わけ', ['こと', 'ため', 'もの'], 'I cannot lose.'], ['そんな＿＿がない。', 'わけ', ['こと', 'ため', 'もの'], 'There is no way.'], ['にげる＿＿にはいかない。', 'わけ', ['こと', 'ため', 'もの'], 'I cannot flee.']],
    tip: 'Protagonist classic: "ここで諦めるわけにはいかない！"',
  });
})();
