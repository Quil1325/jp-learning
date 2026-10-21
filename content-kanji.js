// Kanji. Row: [char, meaning(s), on-yomi (space separated), kun-yomi (space separated), mnemonic]
// In kun readings, "(…)" marks okurigana.
window.NH_KANJI = [];
(() => {
  const K = (u, lv, rows) => rows.forEach(r => NH_KANJI.push({ u, lv, ch: r[0], en: r[1], on: r[2], kun: r[3], mn: r[4] }));

  K('l1-num', 1, [
    ['一', 'one', 'いち', 'ひと(つ)', 'One single line. Easy start.'],
    ['二', 'two', 'に', 'ふた(つ)', 'Two lines stacked.'],
    ['三', 'three', 'さん', 'みっ(つ)', 'Three lines — the middle one is shortest.'],
    ['四', 'four', 'し よん', 'よっ(つ)', 'A box with legs; "four" sides of a window.'],
    ['五', 'five', 'ご', 'いつ(つ)', 'Looks like a "5" if you squint — "go" (five in Go the board game).'],
    ['六', 'six', 'ろく', 'むっ(つ)', 'A hat on top and two legs — a roof over six pillars.'],
    ['七', 'seven', 'しち なな', 'なな(つ)', 'A sideways 7 with a hook.'],
    ['八', 'eight', 'はち', 'やっ(つ)', 'Opens downward like a mountain — widening, "eight" spreads.'],
    ['九', 'nine', 'きゅう く', 'ここの(つ)', 'A hand reaching to grab a 9-shaped tail.'],
    ['十', 'ten', 'じゅう', 'とお', 'A plus sign: 10 points of the compass.'],
    ['百', 'hundred', 'ひゃく', '', 'One (一) over white (白) — a hundred whites.'],
    ['千', 'thousand', 'せん', 'ち', 'A person (ノ) over ten (十): ten people thousands.'],
    ['万', 'ten thousand', 'まん', '', 'Looks like a bundle; "man" = 10,000.'],
    ['円', 'yen / circle', 'えん', 'まる(い)', 'A round coin in a box.'],
  ]);

  K('l1-things', 1, [
    ['日', 'sun / day', 'にち じつ', 'ひ か', 'A window with the sun in it.'],
    ['月', 'moon / month', 'げつ がつ', 'つき', 'A crescent moon with stars as strokes.'],
    ['火', 'fire', 'か', 'ひ', 'A campfire with sparks flying out.'],
    ['水', 'water', 'すい', 'みず', 'A stream splashing around a central flow.'],
    ['木', 'tree', 'もく ぼく', 'き', 'A tree with trunk, branches and roots.'],
    ['金', 'gold / money', 'きん', 'かね', 'A roof over two gold nuggets in the ground.'],
    ['土', 'earth / soil', 'ど', 'つち', 'A plant sprout growing from the ground.'],
    ['山', 'mountain', 'さん', 'やま', 'Three peaks — it is literally a mountain range.'],
    ['川', 'river', 'せん', 'かわ', 'Three flowing streams.'],
    ['口', 'mouth', 'こう', 'くち', 'An open square mouth.'],
    ['目', 'eye', 'もく', 'め', 'An eye turned sideways with its pupil lines.'],
    ['手', 'hand', 'しゅ', 'て', 'A hand with fingers and a wrist line.'],
    ['足', 'foot / leg', 'そく', 'あし', 'A mouth (口) on a leg-stand: your foot stepping.'],
    ['耳', 'ear', 'じ', 'みみ', 'An ear with the curl on top.'],
    ['食', 'eat', 'しょく', 'た(べる)', 'A roof over a person who is good (良) — someone eating well.'],
    ['飲', 'drink', 'いん', 'の(む)', 'Eat (食) radical + yawning (欠): gulp a drink.'],
    ['犬', 'dog', 'けん', 'いぬ', 'A big (大) body with a dot — the dog\'s ear.'],
    ['魚', 'fish', 'ぎょ', 'さかな', 'A fish with head, body and tail fins.'],
    ['車', 'car', 'しゃ', 'くるま', 'A cart seen from above with axle and wheels.'],
    ['雨', 'rain', 'う', 'あめ', 'Drops falling from a cloud under a window.'],
  ]);

  K('l1-people', 1, [
    ['人', 'person', 'じん にん', 'ひと', 'A person walking with two legs.'],
    ['女', 'woman', 'じょ', 'おんな', 'A woman kneeling gracefully.'],
    ['男', 'man', 'だん なん', 'おとこ', 'Rice field (田) + power (力): a man works the field.'],
    ['子', 'child', 'し', 'こ', 'A baby with arms spread wide.'],
    ['友', 'friend', 'ゆう', 'とも', 'Two hands joined together as friends.'],
    ['学', 'study', 'がく', 'まな(ぶ)', 'A child (子) under a roof studying.'],
    ['先', 'previous / ahead', 'せん', 'さき', 'A person striding ahead of the pack.'],
    ['生', 'life / birth', 'せい しょう', 'い(きる) う(まれる) なま', 'A plant growing up from the soil: life.'],
    ['名', 'name', 'めい', 'な', 'Evening (夕) + mouth (口): calling names at dusk.'],
    ['母', 'mother', 'ぼ', 'はは', 'A mother with two dots for her nursing breasts.'],
    ['父', 'father', 'ふ', 'ちち', 'A father with an axe chopping wood.'],
  ]);

  K('l1-verbs', 1, [
    ['見', 'see', 'けん', 'み(る)', 'An eye (目) on legs — an eye that walks to look.'],
    ['行', 'go', 'こう ぎょう', 'い(く) おこな(う)', 'A crossroads — head out on the road.'],
    ['来', 'come', 'らい', 'く(る) きた(る)', 'Wheat stalks coming in from the field.'],
    ['出', 'exit', 'しゅつ', 'で(る) だ(す)', 'A plant sprouting out of a pot.'],
    ['入', 'enter', 'にゅう', 'い(る) はい(る)', 'An arrow head pointing in.'],
    ['休', 'rest', 'きゅう', 'やす(む)', 'A person (亻) leaning on a tree (木) to rest.'],
    ['話', 'speak', 'わ', 'はな(す)', 'Words (言) from your tongue (舌).'],
    ['言', 'say', 'げん', 'い(う)', 'A mouth sending words out in lines.'],
    ['時', 'time', 'じ', 'とき', 'Sun (日) at the temple (寺) — temple bells tell time.'],
    ['今', 'now', 'こん', 'いま', 'A lid closing over this very moment.'],
    ['何', 'what', 'か', 'なに なん', 'A person (亻) asking "what?" of something (可).'],
    ['年', 'year', 'ねん', 'とし', 'A harvest cycle that comes once a year.'],
    ['本', 'book / origin', 'ほん', 'もと', 'A tree (木) with a root marked — origin; books come from trees.'],
    ['語', 'language', 'ご', 'かた(る)', 'Words (言) + I (吾): what I say is language.'],
    ['校', 'school', 'こう', '', 'Tree (木) + cross (交): wooden school buildings where paths cross.'],
  ]);

  K('l1-adj', 1, [
    ['大', 'big', 'だい たい', 'おお(きい)', 'A person stretching arms wide — big!'],
    ['小', 'small', 'しょう', 'ちい(さい) こ', 'A tiny thing with two bits falling off it.'],
    ['中', 'middle / inside', 'ちゅう', 'なか', 'A line through the middle of a box.'],
    ['上', 'up / above', 'じょう', 'うえ あ(がる)', 'A line above the baseline pointing up.'],
    ['下', 'down / below', 'か げ', 'した さ(がる)', 'A line below the baseline pointing down.'],
    ['力', 'power', 'りょく りき', 'ちから', 'A flexed arm muscle.'],
    ['強', 'strong', 'きょう', 'つよ(い)', 'A bow (弓) with a bug (虫) strongly stuck to it.'],
    ['弱', 'weak', 'じゃく', 'よわ(い)', 'Two soft feathery bows — frail and weak.'],
    ['好', 'like / fond', 'こう', 'す(き)', 'Woman (女) + child (子): love — what could you like more?'],
    ['気', 'spirit / air', 'き け', '', 'Steam rising from rice — energy, spirit, "ki".'],
    ['新', 'new', 'しん', 'あたら(しい)', 'Stand (立) a tree (木) and chop it with an axe (斤): fresh wood.'],
    ['高', 'tall / expensive', 'こう', 'たか(い)', 'A tall tower with a roof and gate.'],
  ]);

  K('l2-battle', 2, [
    ['魔', 'demon / magic', 'ま', '', 'A ghost (鬼) under a hemp (麻) canopy — demon magic.'],
    ['剣', 'sword', 'けん', 'つるぎ', 'A blade (刂) beside a pointed tip (僉) — a sword.'],
    ['竜', 'dragon', 'りゅう', 'たつ', 'A standing (立) beast with a long body and horns.'],
    ['勇', 'brave', 'ゆう', 'いさ(ましい)', 'A strong (力) path (マ) opened by courage.'],
    ['戦', 'war / fight', 'せん', 'たたか(う) いくさ', 'A single (単) and a spear (戈) — fight in battle.'],
    ['守', 'protect', 'しゅ す', 'まも(る)', 'A roof (宀) with a hand (寸) guarding the house.'],
    ['死', 'die', 'し', 'し(ぬ)', 'A bone (歹) beside a spoon (匕) — remains of death.'],
    ['命', 'life / fate', 'めい', 'いのち', 'A ruler (令) commanding with a mouth (口) — life orders.'],
    ['敵', 'enemy', 'てき', 'かたき', 'A hostile shape (啇) beating with a staff (攵).'],
    ['技', 'technique', 'ぎ', 'わざ', 'A hand (扌) with a branch (支): skilled craft.'],
    ['術', 'art / technique', 'じゅつ', '', 'A road (行) with a sticky millet (朮): the craft of the path.'],
    ['最', 'most / ultimate', 'さい', 'もっと(も)', 'Take (取) under a sun-lid (日): the very most.'],
    ['必', 'certainly', 'ひつ', 'かなら(ず)', 'A heart (心) with a spear through it — a decisive hit.'],
    ['殺', 'kill', 'さつ', 'ころ(す)', 'A killing stroke from a weapon (殳).'],
    ['神', 'god', 'しん じん', 'かみ', 'A shrine altar (示) with a lightning bolt (申).'],
    ['鬼', 'demon / ogre', 'き', 'おに', 'A scary face with horns and a tail: oni.'],
    ['王', 'king', 'おう', '', 'Three lines (heaven/people/earth) joined by a king in the middle.'],
  ]);

  K('l2-feel', 2, [
    ['夢', 'dream', 'む', 'ゆめ', 'Eyes (目) closed under a canopy at dusk (夕) — dreaming.'],
    ['心', 'heart / mind', 'しん', 'こころ', 'A heart with its chambers.'],
    ['愛', 'love', 'あい', '', 'A heart (心) in the middle, accepted with hands: love.'],
    ['光', 'light', 'こう', 'ひかり ひか(る)', 'A person with rays shooting off the head.'],
    ['闇', 'darkness', 'あん', 'やみ', 'A gate (門) with sound (音) — the dark behind it.'],
    ['空', 'sky / empty', 'くう', 'そら から あ(く)', 'A hole (穴) with work (工) — empty and open to the sky.'],
    ['海', 'sea', 'かい', 'うみ', 'Water (氵) + every (毎) — every drop makes the sea.'],
    ['風', 'wind', 'ふう', 'かぜ', 'A sail (几) catching a bug-like gust (虫).'],
    ['星', 'star', 'せい', 'ほし', 'A sun (日) giving birth (生) to stars.'],
    ['魂', 'soul', 'こん', 'たましい', 'A cloud (云) hosting a ghost (鬼): soul.'],
    ['運', 'luck / carry', 'うん', 'はこ(ぶ)', 'An army (軍) on the move (辶): fortune carries on.'],
    ['青', 'blue / green', 'せい', 'あお', 'Growth (生) over the moon (月) — blue-green sky.'],
    ['赤', 'red', 'せき', 'あか', 'Earth (土) burning with fire — red.'],
    ['白', 'white', 'はく', 'しろ', 'A sun with a ray (日 + ノ) — bright white.'],
    ['黒', 'black', 'こく', 'くろ', 'Soot-covered hearth with fire dots below.'],
  ]);
})();
