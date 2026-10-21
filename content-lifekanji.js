// EVERYDAY JAPAN kanji: the characters you actually meet on menus, signs, tickets and forms.
// Row: [char, meaning, on-yomi, kun-yomi, mnemonic]
(() => {
  const K = (u, lv, rows) => rows.forEach(r => NH_KANJI.push({ u, lv, ch: r[0], en: r[1], on: r[2], kun: r[3], mn: r[4] }));

  K('e1-menu', 11, [
    ['米', 'rice', 'べい まい', 'こめ', 'A grain head with kernels spreading in four directions.'],
    ['肉', 'meat', 'にく', '', 'A slab of meat with the marbling lines inside.'],
    ['酒', 'alcohol / sake', 'しゅ', 'さけ さか', 'Water (氵) drops pouring from a bottle (酉).'],
    ['茶', 'tea', 'ちゃ さ', '', 'Grass (艹) on top of a tree (木) — tea leaves, with a roof (人) between.'],
    ['飯', 'cooked rice / meal', 'はん', 'めし', 'Food (食) that turns (反) round and round in the pot.'],
    ['菜', 'vegetables', 'さい', 'な', 'Grass (艹) you pick (采): leafy greens.'],
  ]);

  K('e1-shop', 11, [
    ['店', 'shop', 'てん', 'みせ', 'Under a cliff-roof (广), people occupy (占) a spot to sell.'],
    ['売', 'sell', 'ばい', 'う(る)', 'A scholar (士) with a hood (冖) holding goods to sell.'],
    ['買', 'buy', 'ばい', 'か(う)', 'A net (罒) catching a shell (貝, money): buying.'],
    ['税', 'tax', 'ぜい', '', 'Grain (禾) handed over (兌) to the state.'],
    ['込', 'included / crowded', '', 'こ(む)', 'Moving (辶) into (入) something: included.'],
    ['割', 'divide / discount', 'かつ', 'わ(る) わり', 'A blade (刂) cutting a harm (害) into parts.'],
    ['引', 'pull / deduct', 'いん', 'ひ(く)', 'A bow (弓) with a string pulled (丨).'],
    ['料', 'fee / materials', 'りょう', '', 'Rice (米) measured by a ladle (斗): ingredients, charges.'],
    ['営', 'operate', 'えい', 'いとな(む)', 'Two lamps (吕) under a crown (冖): a running business.'],
    ['準', 'standard / prepare', 'じゅん', '', 'Water (氵) and a bird (隹) on a level (十): aligned, ready.'],
    ['備', 'prepare', 'び', 'そな(える)', 'A person (亻) and a tool kit: getting ready.'],
  ]);

  K('e1-numbers', 11, [
    ['午', 'noon', 'ご', '', 'A pestle standing at noon.'],
    ['前', 'before / front', 'ぜん', 'まえ', 'Stepping forward with a knife (刂) cutting a path: ahead.'],
    ['半', 'half', 'はん', 'なか(ば)', 'An ox (牛) divided in half by a line.'],
    ['分', 'minute / divide', 'ふん ぶん', 'わ(ける) わ(かる)', 'A knife (刀) splitting (八) something.'],
    ['朝', 'morning', 'ちょう', 'あさ', 'The sun rising by the moon: dawn.'],
    ['昼', 'daytime / noon', 'ちゅう', 'ひる', 'The sun (日) high over a ruler (尺).'],
    ['夜', 'night', 'や', 'よる よ', 'A person leaning under a roof as the moon rises.'],
    ['週', 'week', 'しゅう', '', 'Going around (辶) the full circle (周): a week.'],
  ]);

  K('e2-transport', 12, [
    ['駅', 'station', 'えき', '', 'A horse (馬) waiting at a post-station.'],
    ['電', 'electricity', 'でん', '', 'Rain (雨) with a lightning bolt: electricity.'],
    ['鉄', 'iron / metal', 'てつ', '', 'Metal (金) lost (失): iron.'],
    ['線', 'line', 'せん', '', 'Thread (糸) in a spring (泉): a long line.'],
    ['番', 'number / turn', 'ばん', '', 'Rice paddies (田) with a seed pattern: numbered plots.'],
    ['号', 'number / signal', 'ごう', '', 'A mouth (口) calling out a number.'],
    ['階', 'floor / stairs', 'かい', '', 'A hill (阝) climbed by all (皆) people: floors.'],
    ['乗', 'ride', 'じょう', 'の(る)', 'A person on a tree with legs hooked: riding.'],
    ['降', 'descend / get off', 'こう', 'お(りる) ふ(る)', 'Steps down a hill (阝) one foot at a time.'],
    ['券', 'ticket', 'けん', '', 'A rolled (龹) slip cut by a knife (刀): ticket.'],
    ['急', 'hurry / sudden', 'きゅう', 'いそ(ぐ)', 'A heart (心) with a hand grabbing ahead: in a rush.'],
  ]);

  K('e2-directions', 12, [
    ['右', 'right', 'う ゆう', 'みぎ', 'A hand (ナ) over a mouth (口): the hand you eat with.'],
    ['左', 'left', 'さ', 'ひだり', 'A hand (ナ) over a tool (工): the other hand holds the work.'],
    ['北', 'north', 'ほく', 'きた', 'Two people back to back, turning from the sun in the north.'],
    ['南', 'south', 'なん', 'みなみ', 'A warm hut with plants growing in the south.'],
    ['東', 'east', 'とう', 'ひがし', 'The sun (日) rising behind a tree (木).'],
    ['西', 'west', 'せい さい', 'にし', 'A bird settling into its nest as the sun sets.'],
    ['道', 'road / way', 'どう', 'みち', 'Walking (辶) toward the head (首): a way forward.'],
    ['地', 'ground', 'ち じ', '', 'Earth (土) and a snake (也): the ground.'],
    ['図', 'diagram / map', 'ず と', 'はか(る)', 'A boundary box (囗) with a plan inside.'],
    ['開', 'open', 'かい', 'あ(ける) ひら(く)', 'A gate (門) with hands pulling the bar open.'],
    ['閉', 'close', 'へい', 'し(める) と(じる)', 'A gate (門) with a bolt (才) across it.'],
    ['押', 'push', 'おう', 'お(す)', 'A hand (扌) at a shell-like door (甲): push.'],
    ['止', 'stop', 'し', 'と(まる)', 'A foot planted firmly: stop.'],
    ['非', 'non- / un-', 'ひ', '', 'Two wings flying apart: opposite, not.'],
    ['常', 'usual / always', 'じょう', 'つね', 'A cloth (巾) hung up in the usual place.'],
    ['危', 'danger', 'き', 'あぶ(ない)', 'A person on a cliff, kneeling in danger.'],
    ['険', 'steep / dangerous', 'けん', 'けわ(しい)', 'A hill (阝) with a sharp point (僉): steep.'],
  ]);

  K('e2-hotel', 12, [
    ['部', 'section / department', 'ぶ', '', 'A village (阝) of people (咅) each in a section.'],
    ['屋', 'roof / shop / room', 'おく', 'や', 'A corpse-like body (尸) reaching a spot (至): a house.'],
    ['泊', 'stay overnight', 'はく', 'と(まる)', 'Water (氵) and white (白): resting by the shore.'],
    ['予', 'beforehand', 'よ', '', 'A hook pulling the front forward: in advance.'],
    ['鍵', 'key', 'けん', 'かぎ', 'A metal (金) tool that builds (建) security.'],
    ['荷', 'luggage', 'か', 'に', 'A flower (艹) stem carrying (何) a load.'],
    ['持', 'hold', 'じ', 'も(つ)', 'A hand (扌) at the temple (寺): holding.'],
  ]);

  K('e2-health', 12, [
    ['病', 'illness', 'びょう', 'や(む)', 'A bed (疒) with fever (丙) over you: sickness.'],
    ['院', 'institution', 'いん', '', 'A hill (阝) with a complete (完) building: hospital, temple.'],
    ['医', 'medicine / doctor', 'い', '', 'A box (匚) holding arrows (矢): healing tools.'],
    ['薬', 'medicine', 'やく', 'くすり', 'Herbs (艹) that bring comfort (楽).'],
    ['痛', 'pain', 'つう', 'いた(い)', 'An illness (疒) that goes through (甬) you.'],
    ['熱', 'fever / heat', 'ねつ', 'あつ(い)', 'A fire (灬) spreading (埶): heat.'],
    ['救', 'rescue', 'きゅう', 'すく(う)', 'A tap (攵) on someone seeking (求) help: save.'],
    ['助', 'help', 'じょ', 'たす(ける)', 'Strength (力) added on top (且): help.'],
  ]);

  K('e3-people', 13, [
    ['住', 'live / reside', 'じゅう', 'す(む)', 'A person (亻) who stays put (主): a resident.'],
    ['趣', 'interest', 'しゅ', 'おもむき', 'Running (走) after things you take (取): hobbies.'],
    ['旅', 'travel', 'りょ', 'たび', 'A banner (方) leading a group: a journey.'],
    ['外', 'outside', 'がい げ', 'そと ほか', 'Evening (夕) divination (卜) outside: not at home.'],
    ['国', 'country', 'こく', 'くに', 'A border (囗) around a jewel (玉): a country.'],
    ['歳', 'age (years)', 'さい', '', 'A halberd (戈) marking steps of the years.'],
  ]);

  K('e3-services', 13, [
    ['銀', 'silver', 'ぎん', '', 'Metal (金) that is hard to part with (艮): silver, banks.'],
    ['郵', 'mail', 'ゆう', '', 'A village (阝) with a drooping (垂) relay: postal.'],
    ['便', 'convenience / mail', 'べん びん', 'たよ(り)', 'A person (亻) changing (更) things to make them easy.'],
    ['局', 'bureau / office', 'きょく', '', 'A body (尸) of officials in a section (句).'],
    ['送', 'send', 'そう', 'おく(る)', 'Moving along (辶) with a gift: send.'],
    ['払', 'pay', 'ふつ', 'はら(う)', 'A hand (扌) brushing away (厶): paying off.'],
    ['両', 'both / two', 'りょう', '', 'Two scales hanging on a balance: both sides.'],
    ['替', 'exchange', 'たい', 'か(える)', 'Two people (夫夫) speaking (曰): swapping.'],
  ]);

  K('e3-work', 13, [
    ['会', 'meet / society', 'かい え', 'あ(う)', 'People gathering under a roof (人) to say (云): a meeting.'],
    ['社', 'company / shrine', 'しゃ', 'やしろ', 'An altar (示) on the ground (土): a gathering place.'],
    ['仕', 'serve / do', 'し', 'つか(える)', 'A person (亻) in service (士).'],
    ['働', 'work', 'どう', 'はたら(く)', 'A person (亻) in motion (動): working.'],
  ]);
})();
