// More grammar (Levels 3–4).
(() => {
  const G = (u, lv, id, o) => NH_GRAMMAR.push({ u, lv, id, ...o });

  // ===== LEVEL 3 =====
  G('l3-flow', 3, 'nagara-tari', {
    title: '〜ながら / 〜たり〜たり', pat: 'stem ながら · verb た + り', gist: 'while doing / doing things like…',
    body: ['〜ながら (ます-stem + ながら): two actions at once by the same person. The main action is the second one: あるきながらはなす = talk while walking.', '〜たり〜たりする: list example actions (non-exhaustive): みたりよんだりする = do things like watching and reading.'],
    ex: [['うたいながらあるく。', 'I walk while singing.'], ['ゲームをしたり、マンガをよんだりする。', 'I do things like play games and read manga.'], ['なきながらわらった。', 'He laughed while crying.']],
    drills: [['うたい＿＿あるく。', 'ながら', ['たり', 'ために', 'ように'], 'I walk while singing.'], ['みたり、よん＿＿する。', 'だり', ['ながら', 'たり', 'ても'], 'I do things like watching and reading.'], ['なき＿＿わらった。', 'ながら', ['たり', 'ために', 'ように'], 'He laughed while crying.']],
    tip: 'Dramatic-scene staple: 泣きながら笑う — laughing through tears.',
  });
  G('l3-flow', 3, 'node-noni', {
    title: '〜ので / 〜から / 〜のに', pat: 'plain + ので · plain + から · plain + のに', gist: 'because · so · even though',
    body: ['〜から: "because" (speaker\'s own reason, can be strong or personal): いたいから、いかない。', '〜ので: "because" (more objective/polite): あめなので、いきません。 With な-adj and nouns: ～なので.', '〜のに: "even though / despite" (surprise, complaint): がんばったのに、まけた = I tried hard but lost.'],
    ex: [['あめなので、いかない。', "Because it's raining, I won't go."], ['がんばったのに、まけた。', 'I did my best, yet I lost.'], ['こわいから、にげた。', 'I ran because I was scared.']],
    drills: [['あめ＿＿、いかない。', 'なので', ['なのに', 'なく', 'でも'], "Because it's raining, I won't go."], ['がんばった＿＿、まけた。', 'のに', ['ので', 'から', 'ために'], 'I tried hard, yet I lost.'], ['こわい＿＿、にげた。', 'から', ['のに', 'ても', 'ながら'], 'I ran because I was scared.']],
    tip: 'のに often carries regret or anger: 約束したのに… ("But you promised…").',
  });
  G('l3-flow', 3, 'sugiru-yasui', {
    title: '〜すぎる / 〜やすい / 〜にくい', pat: 'stem + すぎる/やすい/にくい', gist: 'too much / easy to / hard to',
    body: ['〜すぎる: too much. たべすぎる = eat too much; たかすぎる (い-adj: drop い).', '〜やすい: easy to do. わかりやすい = easy to understand.', '〜にくい: hard to do. よみにくい = hard to read.', 'All conjugate like い/る-verbs: たべすぎた, わかりやすかった.'],
    ex: [['たべすぎた…', 'I ate too much…'], ['このマンガはよみやすい。', 'This manga is easy to read.'], ['このことばはいいにくい。', 'This is hard to say.']],
    drills: [['たべ＿＿た…', 'すぎ', ['やす', 'にく', 'たい'], 'I ate too much…'], ['よみ＿＿い。（easy to read）', 'やす', ['すぎ', 'にく', 'たい'], 'easy to read'], ['いい＿＿い。（hard to say）', 'にく', ['すぎ', 'やす', 'たい'], 'hard to say']],
    tip: '"言いにくい…" is the hesitation before every awkward confession.',
  });
  G('l3-intent', 3, 'hazu-tsumori', {
    title: '〜はず / 〜つもり', pat: 'plain + はず · dictionary + つもり', gist: 'should be / I intend to',
    body: ['〜はず: expectation based on grounds, "ought to / should be". Negative: ～ないはず. Past: ～はずだった (it was supposed to).', '〜つもり: intention or plan. いくつもり = I intend to go. Past: ～つもりだった (I meant to).', 'Not used for sudden decisions — use 〜よう / 〜ことにする for those.'],
    ex: [['もうつくはずだ。', 'He should be arriving already.'], ['あした、いくつもりです。', 'I intend to go tomorrow.'], ['そんなはずはない！', 'That cannot be!']],
    drills: [['もうつく＿＿だ。', 'はず', ['つもり', 'ため', 'こと'], 'He should arrive already.'], ['あした、いく＿＿です。', 'つもり', ['はず', 'ため', 'こと'], 'I intend to go tomorrow.'], ['そんな＿＿はない！', 'はず', ['つもり', 'ため', 'こと'], 'That cannot be!']],
    tip: '"そんなはずはない！" — the shocked denial when plans fall apart.',
  });
  G('l3-intent', 3, 'you-to-suru', {
    title: '〜ようとする / 〜ところだ', pat: 'volitional + とする · verb + ところ', gist: 'try to / about to / just now',
    body: ['〜ようとする: be about to / try to (an attempt in progress): にげようとした = tried to flee.', '〜ところだ: the stage of an action. dictionary form ところ = about to; ている ところ = in the middle; た ところ = just did.', 'Great for dramatic timing: ちょうどいくところだった = I was just about to go.'],
    ex: [['にげようとしたが、できなかった。', 'I tried to flee, but could not.'], ['いまいくところだ。', "I'm just about to go."], ['ちょうどついたところだ。', 'I just arrived.']],
    drills: [['にげ＿＿としたが、できなかった。', 'よう', ['たい', 'ない', 'ます'], 'I tried to flee.'], ['いま、いく＿＿だ。', 'ところ', ['はず', 'つもり', 'こと'], "I'm just about to go."], ['ちょうどついた＿＿だ。', 'ところ', ['はず', 'つもり', 'こと'], 'I just arrived.']],
    tip: 'ちょうど〜ところだった: the hero shows up at the last second.',
  });

  // ===== LEVEL 4 =====
  G('l4-keigo', 4, 'sasete', {
    title: '〜させていただく / お〜いたします', pat: 'causative て + いただく · お + stem + いたす', gist: 'humble "allow me to / I will do"',
    body: ['お〜いたします: humble action you do for the listener (おもちいたします = I will carry it for you).', '〜させていただく: "I humbly receive permission to …" — polite way to announce what you will do (しつれいさせていただきます = excuse me).', '〜ていただく / 〜てくださる: receive / give a favor, politely.'],
    ex: [['ごあんないいたします。', 'I will show you the way.'], ['しつれいさせていただきます。', 'Please excuse me. (I take my leave)'], ['おまちいただけますか。', 'Could you wait a moment?']],
    drills: [['ごあんない＿＿ます。', 'いたし', ['なさい', 'ください', 'くれ'], 'I will guide you.'], ['しつれいさせて＿＿ます。', 'いただき', ['ください', 'くれ', 'あげ'], 'Please excuse me.'], ['おまち＿＿けますか。', 'いただ', ['くださ', 'いたし', 'もうし'], 'Could you wait?']],
    tip: 'Butlers & shopkeepers: かしこまりました。ただいまお持ちいたします。',
  });
  G('l4-nuance', 4, 'beki', {
    title: '〜べき / 〜に違いない / 〜に過ぎない', pat: 'dictionary + べき · plain + に違いない', gist: 'ought to · must be · merely',
    body: ['〜べき (べきだ/べきではない): moral "ought to / should". する → すべき. ことを知るべきだ.', '〜に違いない: "must be / no doubt": かれがはんにんにちがいない.', '〜に過ぎない: "is nothing more than / merely": ただのうわさにすぎない.'],
    ex: [['ほんとうのことをいうべきだ。', 'You should tell the truth.'], ['あいつがはんにんに違いない。', 'He must be the culprit.'], ['それはただのうわさに過ぎない。', 'That is merely a rumor.']],
    drills: [['ほんとうのことをいう＿＿だ。', 'べき', ['はず', 'つもり', 'まい'], 'You should tell the truth.'], ['あいつがはんにんに＿＿ない。', 'ちがい', ['かも', 'べき', 'まい'], 'He must be the culprit.'], ['ただのうわさに＿＿ない。', 'すぎ', ['かも', 'べき', 'まい'], 'Just a rumor.']],
    tip: '"お前が背負うべきだ" — the moral weight of a decisive speech.',
  });
  G('l4-nuance', 4, 'kaneru', {
    title: '〜かねない / 〜かねる', pat: 'stem + かねない / かねる', gist: 'might well / cannot bring oneself to',
    body: ['〜かねない: it could easily happen (negative outcomes): しにかねない = might well die.', '〜かねる: unable to / hesitant to (polite refusal): ごいけんにはさんせいしかねます = I\'m afraid I can\'t agree.'],
    ex: [['このままだとしにかねない。', 'At this rate, I might actually die.'], ['それはおうけしかねます。', "I'm afraid I can't accept that."], ['あいつならやりかねない。', 'He might just do it.']],
    drills: [['しに＿＿ない。', 'かね', ['やす', 'すぎ', 'にく'], 'I might die.'], ['おうけし＿＿ます。', 'かね', ['やす', 'すぎ', 'ない'], "I can't accept (polite)."], ['やり＿＿ない。', 'かね', ['やす', 'すぎ', 'そう'], 'He might do it.']],
    tip: 'Warning sign in villain monologues: "世界が滅びかねない".',
  });
  G('l4-nuance', 4, 'zu-ni-wa', {
    title: '〜ずにはいられない / 〜ないではいられない', pat: 'ない-stem ず + にはいられない', gist: 'cannot help but',
    body: ['An uncontrollable urge: わらわずにはいられない = I can\'t help laughing.', 'する → せずにはいられない. Variation: 〜ないではいられない.', 'Stronger and more personal than ざるを得ない (which is "no choice").'],
    ex: [['なかずにはいられない。', "I can't help crying."], ['たすけずにはいられなかった。', "I couldn't help helping."], ['わらわずにはいられない。', "I can't help laughing."]],
    drills: [['なか＿＿にはいられない。', 'ず', ['ぬ', 'ない', 'まい'], "I can't help crying."], ['たすけ＿＿にはいられなかった。', 'ず', ['ぬ', 'ない', 'まい'], "I couldn't help helping."], ['わらわ＿＿ではいられない。', 'ない', ['ず', 'ぬ', 'まい'], "I can't help laughing."]],
    tip: 'Heroes: "見捨てずにはいられない" — the instinct to save everyone.',
  });
  G('l4-nuance', 4, 'kimatteiru', {
    title: '〜に決まっている', pat: 'plain + に決まっている', gist: 'is obviously / of course',
    body: ['Strong certainty: "it\'s obvious that…". Often irritated or scornful.', 'まけるにきまっている = obviously I will lose.', 'Casual: 〜に決まってる / 〜に決まってるだろ.'],
    ex: [['そんなのうそにきまっている。', "That's obviously a lie."], ['おれがかつにきまってる！', "Obviously I'm going to win!"], ['むりにきまってるだろ。', "It's obviously impossible!"]],
    drills: [['そんなのうそに＿＿っている。', 'きま', ['ちがい', 'すぎ', 'かね'], "That's obviously a lie."], ['おれがかつに＿＿ってる！', 'きま', ['ちがい', 'すぎ', 'かね'], "Obviously I'll win!"], ['むり＿＿きまってるだろ。', 'に', ['と', 'で', 'は'], "It's obviously impossible!"]],
    tip: 'Bickering rivals: "お前が負けるに決まってる！"',
  });
  G('l4-epic', 4, 'yagaru', {
    title: '〜やがる / 〜てやがる — contempt', pat: 'stem + やがる', gist: 'rude "he has the nerve to…"',
    body: ['Attaches to the ます-stem or て-form to express contempt or anger: いやがる (verb), ふざけやがって.', 'Typical in rough/gangster/villain speech. Not for polite conversation!', '〜やがって (て-form) is the usual "damn you for doing that".'],
    ex: [['なにをいってやがる！', 'What the hell are you saying?!'], ['ふざけやがって！', 'Damn you for messing with me!'], ['まだいきてやがったか。', "You're still alive, huh."]],
    drills: [['なにをいって＿＿る！', 'やが', ['ちゃ', 'てる', 'ない'], 'What are you saying?!'], ['ふざけ＿＿って！', 'やが', ['ちゃ', 'てる', 'ない'], 'Damn you for messing with me!'], ['まだいきて＿＿たか。', 'やがっ', ['ちゃっ', 'いっ', 'みっ'], "You're still alive."]],
    tip: 'Avoid in real life — but you will hear it in every action anime.',
  });
  G('l4-epic', 4, 'tsutsu', {
    title: 'Literary connectors — 〜つつ / 〜ことなく / 〜んばかり', pat: 'stem + つつ · dict + ことなく · ない-stem + んばかり', gist: 'while (even though) / without / as if about to',
    body: ['〜つつ: "while / even though" (formal, written): しりつつ、いえなかった = though I knew, I could not say.', '〜ことなく: "without (ever) doing": あきらめることなくたたかった.', '〜んばかり: "as if about to": なかんばかりのかお = a face about to cry.'],
    ex: [['しりつつ、だまっていた。', 'He stayed silent, though he knew.'], ['あきらめることなく、たたかいつづけた。', 'He kept fighting without giving up.'], ['なかんばかりのかおだった。', 'Her face looked ready to burst into tears.']],
    drills: [['しり＿＿、だまっていた。', 'つつ', ['ながら', 'ことなく', 'んばかり'], 'Though he knew, he stayed silent.'], ['あきらめる＿＿なく、たたかった。', 'こと', ['もの', 'ため', 'よう'], 'He fought without giving up.'], ['なか＿＿ばかりのかお。', 'ん', ['ず', 'ぬ', 'まい'], 'A face about to cry.']],
    tip: 'Narration over a tragic montage: "悔やみつつ、前へ進んだ。"',
  });
})();
