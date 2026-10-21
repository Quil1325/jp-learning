// EVERYDAY JAPAN track: levels, units and "good to know" culture notes.
NH_LEVELS.forEach(l => { l.track = 'anime'; });
NH_UNITS.forEach(u => { u.track = 'anime'; });

NH_LEVELS.push(
  { n: 11, name: 'Survival', jlpt: 'First trip · first week', track: 'life', blurb: 'Manners, restaurants, menus, shopping, numbers and time — everything you need on day one.' },
  { n: 12, name: 'Out & about', jlpt: 'Getting around', track: 'life', blurb: 'Trains, directions, signs, hotels, health and emergencies.' },
  { n: 13, name: 'Settling in', jlpt: 'Living & connecting', track: 'life', blurb: 'Small talk, making friends, post/bank/phone, and the workplace.' },
);

NH_UNITS.push(
  { id: 'e1-manners', lv: 11, track: 'life', title: 'Manners & first words', blurb: 'Greetings, thanks, sorry, saying no politely',
    tips: ['A small nod is enough — foreigners are not expected to bow perfectly.', 'Take your shoes off where there is a step up (homes, many restaurants, ryokan). Slippers are for hallways — never wear them on tatami.', 'There is no tipping in Japan. Leave nothing; the price is the price.', 'Be quiet on trains: no phone calls, keep voices low.', 'Hand over money, cards and business cards with both hands. At shops, put money on the small tray instead of into the hand.', 'A flat "no" is rare. ちょっと… ("a bit…") or 難しいです usually means no.'] },
  { id: 'e1-eat', lv: 11, track: 'life', title: 'Eating out', blurb: 'Seating, ordering, paying, allergies',
    tips: ['Say いただきます before eating and ごちそうさまでした when you finish or leave.', 'In casual places you pay at the register by the door, not at the table.', 'Ramen shops often use a ticket machine (券売機): pay first, hand the ticket to the staff.', 'Izakaya (pub) add a small table charge (お通し) — normal, not a scam.', 'Never stick chopsticks upright in rice or pass food chopstick-to-chopstick (funeral customs).', 'Slurping noodles is fine. Water and tea are usually free.'] },
  { id: 'e1-menu', lv: 11, track: 'life', title: 'Reading menus & food', blurb: 'Dishes, ingredients, flavors, kanji 米肉酒茶',
    tips: ['Plastic food models in the window (食品サンプル) are your friend: point to what you want.', '日替わり (hikawari) is the daily special. 定食 is a set meal: main + rice + miso soup + pickles.', 'Fish stock (出汁, dashi) and lard hide in many dishes that look vegetarian. If you avoid an ingredient, say so clearly and name it — アレルギーがあります helps for allergies.'] },
  { id: 'e1-shop', lv: 11, track: 'life', title: 'Shopping & convenience stores', blurb: 'Prices, bags, trying on, tax-free',
    tips: ['Tags may be 税抜 (before tax) or 税込 (tax included) — check which.', 'No haggling in regular shops. Konbini staff may ask if you want the food heated and whether you need chopsticks or a bag (bags cost a few yen).', 'Tax-free shopping rules for tourists change from time to time — look for the tax-free sign and have your passport ready.', 'Many small shops are cash-only; IC cards (Suica/Pasmo) work at konbini and vending machines.'] },
  { id: 'e1-numbers', lv: 11, track: 'life', title: 'Numbers, prices, time & counters', blurb: 'Hundreds, thousands, o\'clock, counters',
    tips: ['Prices are said in 万 (10,000): 一万円 = 10,000 yen, 三万円 = 30,000 yen.', 'Opening hours: 10:00〜20:00 is "10 to 8 pm". Many restaurants close between lunch and dinner.', 'Trains run on the minute — if the sign says 9:07, it comes at 9:07.'] },
  { id: 'e2-transport', lv: 12, track: 'life', title: 'Trains, buses & taxis', blurb: 'Tickets, platforms, IC cards',
    tips: ['Get a Suica or Pasmo IC card (also in Apple Wallet) — tap in, tap out; works on most trains, buses, konbini and vending machines.', 'Most last trains leave around midnight (終電) — check before you go out.', 'Priority seats (優先席) are for people who need them; keep phones quiet and off calls.', 'Taxi doors open and close automatically — don\'t touch them.', 'On escalators, Tokyo stands on the left and Osaka stands on the right.'] },
  { id: 'e2-directions', lv: 12, track: 'life', title: 'Directions & signs', blurb: 'Left/right, landmarks, reading signs',
    tips: ['Japanese addresses are by area and block number, not street names — use a map app and show the screen.', 'Police boxes (交番) are happy to give directions.', 'Door signs: 押 (push), 引 (pull), 開 (open), 閉 (close), 出口 (exit), 入口 (entrance), 非常口 (emergency exit).'] },
  { id: 'e2-hotel', lv: 12, track: 'life', title: 'Hotels & lodging', blurb: 'Check-in, breakfast, bath and bedding',
    tips: ['Onsen etiquette: wash and rinse before entering, keep the towel out of the water, no swimsuits. Tattoos may be restricted — ask first.', 'At a ryokan, shoes come off at the entrance, you wear a yukata, and futons are laid out for you in the evening.', 'Check-in is usually afternoon; check-out is around 10-11 a.m. Luggage can often be stored at the front desk.'] },
  { id: 'e2-health', lv: 12, track: 'life', title: 'Health & emergencies', blurb: 'Symptoms, lost items, who to call',
    tips: ['Emergency numbers: 110 = police, 119 = fire and ambulance.', 'Earthquakes: drop, cover, hold on; don\'t run outside during shaking; follow the staff and phone alerts. Hotels post instructions in the room.', 'Lost something? Ask at the nearest 交番 or station — lost items are often returned.', 'Pharmacies (薬局) sell non-prescription medicine. Some common foreign medicines are restricted in Japan — check before you travel.'] },
  { id: 'e3-people', lv: 13, track: 'life', title: 'Small talk & making friends', blurb: 'Introductions, hobbies, invitations',
    tips: ['Use さん after names, not first names, until invited otherwise. Avoid asking age or salary early on.', 'Keep the conversation flowing with short responses: そうですね, そうですか, なるほど, へえ — they show you are listening (あいづち).', 'Compliments are deflected: 日本語が上手ですね → いえいえ、まだまだです。'] },
  { id: 'e3-services', lv: 13, track: 'life', title: 'Phone, post, bank & services', blurb: 'Parcels, ATMs, trash, repairs',
    tips: ['Trash sorting is strict: burnable, non-burnable, plastic, cans, bottles — check your area\'s calendar.', 'A delivery slip (不在票) means the courier missed you; request a redelivery (再配達) by phone or app.', 'Cash is still common. 7-Eleven and post-office ATMs generally accept foreign cards.'] },
  { id: 'e3-work', lv: 13, track: 'life', title: 'Work & routines', blurb: 'Business cards, polite work phrases',
    tips: ['Business cards (名刺): present and receive with both hands, read it, and place it on the table in front of you — don\'t stash it right away.', 'お疲れ様です works as "hello" and "good work" among colleagues all day.', 'Report, contact, consult (報告・連絡・相談 → ほうれんそう) is the workplace habit that keeps everyone informed.'] },
);
