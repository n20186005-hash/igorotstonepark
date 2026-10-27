// Long-tail topic pages for Igorot Stone Kingdom guide.
// Bilingual (Filipino + English). Each page answers one clear traveler intent.

export type TopicSection = { hFil: string; hEn: string; bFil: string; bEn: string };
export type TopicFaq = { qFil: string; qEn: string; aFil: string; aEn: string };
export type Topic = {
  slug: string;
  group: 'core' | 'transport' | 'food' | 'nearby' | 'itinerary' | 'seasonal' | 'faq';
  titleFil: string;
  titleEn: string;
  descFil: string;
  descEn: string;
  h1Fil: string;
  h1En: string;
  introFil: string;
  introEn: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
};

export const topics: Record<string, Topic> = {
  'photos': {
    slug: 'photos',
    group: 'core',
    titleFil: 'Igorot Stone Kingdom Photos — Mga Totoong Larawan at Photo Spots',
    titleEn: 'Igorot Stone Kingdom Photos — Real Shots & Best Photo Spots',
    descFil: 'Koleksyon ng mga totoong larawan ng Igorot Stone Kingdom sa Baguio: stone terraces, viewpoint decks at photo stops, pati na rin kung kailan pinakamaganda kumuha.',
    descEn: 'A collection of real, on-site photos of Igorot Stone Kingdom in Baguio: stone terraces, viewpoint decks and photo stops, plus when light is best for shooting.',
    h1Fil: 'Mga Larawan ng Igorot Stone Kingdom',
    h1En: 'Igorot Stone Kingdom Photos',
    introFil: 'Ang mga larawan dito ay kuha mismo sa attraction—hindi mula sa commercial stock library. Ipinapakita nito ang bawat antas ng stone terraces, ang mga viewpoint deck sa gilid ng bundok, at ang courtyard kung saan nagtatapos ang hagdan mula sa gate.',
    introEn: 'The photos here were taken on-site at the attraction—not from a commercial stock library. They show each tier of the stone terraces, the mountain-edge viewpoint decks, and the courtyard where the stairs from the gate end.',
    sections: [
      { hFil: 'Mga bahagi na madalas litratuhan', hEn: 'Parts visitors photograph most', bFil: 'Ang main stone terraces ang pinakasikat na kuha dahil sa sukat at texture ng bato. Ang viewpoint decks naman ay nagbibigay ng malawak na backdrop ng Cordillera greens kapag malinaw ang umaga.', bEn: 'The main stone terraces are the most photographed part because of the scale and texture of the stone. The viewpoint decks give a wide Cordillera-green backdrop when the morning is clear.' },
      { hFil: 'Pinakamagandang oras para kumuha', hEn: 'Best time to shoot', bFil: 'Ang golden hour sa bundok ay humigit-kumulang 7–9 AM at 3–5 PM. Umiwas sa madulas na hagdan kapag basa, at magdala ng lens cloth dahil sa ambon.', bEn: 'Mountain golden hour is roughly 7–9 AM and 3–5 PM. Avoid the slippery stairs when wet, and bring a lens cloth for the drizzle.' },
      { hFil: 'Paunawa sa copyright at larawan', hEn: 'Photo & copyright note', bFil: 'Ang mga larawan sa pahinang ito ay totoong kuha sa lugar o mula sa mga bisitang nagbahagi. Kung ikaw ay may-ari ng isang larawan at nais itong tanggalin o bigyang-credit, makipag-ugnayan sa aming gabay.', bEn: 'The images on this page are on-site shots or shared by visitors. If you are the owner of a photo and want it removed or credited, contact our guide.' }
    ],
    faqs: [
      { qFil: 'May bayad ba para sa photo shoot?', qEn: 'Is there a fee for photo shoots?', aFil: 'Ang karaniwang entrance fee (~₱130 adult, ~₱100 child) ay sumasakop sa pagkuha ng personal na litrato. Para sa commercial o professional shoot, kumpirmahin sa staff sa gate ang kasalukuyang patakaran.', aEn: 'The regular entrance fee (~₱130 adult, ~₱100 child) covers personal photography. For commercial or professional shoots, confirm the current policy with staff at the gate.' },
      { qFil: 'Pwede ba ang drone?', qEn: 'Are drones allowed?', aFil: 'Karaniwang bawal o limitado ang drone sa loob ng attraction at sa buong Baguio airspace. Magtanong muna sa staff at sa lokal na aviation rules bago magpakita ng drone.', aEn: 'Drones are generally prohibited or restricted inside the attraction and across Baguio airspace. Ask staff and check local aviation rules before bringing one.' },
      { qFil: 'Saan makikita ang pinakabagong photos?', qEn: 'Where can I see the newest photos?', aFil: 'Bukod sa pahinang ito, ang opisyal na Google Maps listing ng Igorot Stone Kingdom Inc. ay may pinakasariwang user photos mula sa mga bisita.', aEn: 'Beyond this page, the official Google Maps listing of Igorot Stone Kingdom Inc. has the freshest visitor-uploaded photos.' }
    ],
    related: ['what-is', 'hours', 'tam-awan-village', 'photography-itinerary']
  },
  'hours': {
    slug: 'hours',
    group: 'core',
    titleFil: 'Igorot Stone Kingdom Opening Hours — Oras ng Pagbukas at Best Time',
    titleEn: 'Igorot Stone Kingdom Opening Hours — When It Opens & Best Time',
    descFil: 'Araw-araw na opening hours ng Igorot Stone Kingdom sa Baguio, kailan pinakamaganda pumunta, at gaano katagal ang inirerekomendang stay.',
    descEn: 'Daily opening hours of Igorot Stone Kingdom in Baguio, when to go for the best experience, and how long to plan your stay.',
    h1Fil: 'Opening Hours at Oras ng Pagbukas',
    h1En: 'Opening Hours',
    introFil: 'Bukas ang Igorot Stone Kingdom araw-araw mula 7:00 AM hanggang 6:00 PM. Maaaring magbago ang oras sa espesyal na okasyon o kapag maulan, kaya mainam ang same-day check sa gate o sa Google Maps listing bago bumiyahe.',
    introEn: 'Igorot Stone Kingdom is open every day from 7:00 AM to 6:00 PM. Hours may change on special occasions or in heavy rain, so a same-day check at the gate or on the Google Maps listing is best before you travel.',
    sections: [
      { hFil: 'Karaniwang oras', hEn: 'Regular hours', bFil: '7:00 AM – 6:00 PM, araw-araw. Ang huling papasok ay karaniwang bago mag-6:00 PM para may oras sa loob bago magsara ang gate.', bEn: '7:00 AM – 6:00 PM, daily. Last entry is usually before 6:00 PM so you have time inside before the gate closes.' },
      { hFil: 'Gaano katagal manatili', hEn: 'How long to stay', bFil: 'Sapat ang 1–2 oras para sa pangunahing ruta. Maglaan ng mas mahaba kung mabagal ang pace, maraming gustong kuhaan, o may kasamang bata at senior.', bEn: '1–2 hours is enough for the main route. Allow more if you move slowly, want many photos, or are with kids and seniors.' },
      { hFil: 'Pinakamagandang oras sa araw', hEn: 'Best time of day', bFil: 'Maagang umaga (bukas hanggang ~9 AM) ang pinakatahimik at pinakamalamig. Ang hapon (3–5 PM) ay maganda para sa golden-hour na kuha ng terraces.', bEn: 'Early morning (open until ~9 AM) is the quietest and coolest. Afternoon (3–5 PM) is good for golden-hour shots of the terraces.' }
    ],
    faqs: [
      { qFil: 'Bukas ba kapag Lunes?', qEn: 'Is it open on Mondays?', aFil: 'Oo, bukas ito araw-araw kabilang ang Lunes at mga holiday, maliban kung may espesyal na anunsyo mula sa management.', aEn: 'Yes, it is open every day including Mondays and holidays, unless management posts a special announcement.' },
      { qFil: 'Hanggang anong oras ang last entry?', qEn: 'What is the last entry time?', aFil: 'Karaniwang bago mag-6:00 PM, pero huwag ituring na fixed. Kumpirmahin sa gate lalo na kapag maulan o may okasyon.', aEn: 'Usually before 6:00 PM, but do not treat it as fixed. Confirm at the gate especially when raining or on special occasions.' },
      { qFil: 'Anong buwan pinakamaganda?', qEn: 'Which month is best?', aFil: 'Ang cool-dry na buwan (Nobyembre–Pebrero) ay pinakakomportable, habang ang Pebrero ay may Panagbenga flower festival kaya inaasahan ang mas maraming tao.', aEn: 'The cool-dry months (November–February) are most comfortable, while February brings the Panagbenga flower festival and bigger crowds.' }
    ],
    related: ['best-time-to-visit', 'parking', 'photos', 'first-time-tips']
  },
  'parking': {
    slug: 'parking',
    group: 'core',
    titleFil: 'Igorot Stone Kingdom Parking — Saan at Magkano',
    titleEn: 'Igorot Stone Kingdom Parking — Where & How Much',
    descFil: 'Parking sa paligid ng Igorot Stone Kingdom sa Baguio: kung saan, magkano ang rate, at kailan mabilis mapuno.',
    descEn: 'Parking around Igorot Stone Kingdom in Baguio: where to park, typical rates, and when it fills up fast.',
    h1Fil: 'Parking sa Igorot Stone Kingdom',
    h1En: 'Parking at Igorot Stone Kingdom',
    introFil: 'May mga roadside at paid parking area sa paligid ng attraction, pero mabilis mapuno sa weekend at peak hours. May ilang recent visitor reports na humigit-kumulang ₱100 ang car parking; huwag ituring na fixed rate dahil maaaring mag-iba ang operator at araw.',
    introEn: 'There are roadside and paid parking areas around the attraction, but they fill quickly on weekends and peak hours. Some recent visitor reports mention about ₱100 for car parking; treat it as a guide, not a fixed rate, since operators and days vary.',
    sections: [
      { hFil: 'Saan nag-pa-park', hEn: 'Where to park', bFil: 'Ang pinakamalapit na parking ay roadside sa Longlong Road at ilang paid lots malapit sa gate. Sa busy na oras, maaaring kailangang maglakad nang konti mula sa pinakamalapit na maayos na lot.', bEn: 'The closest parking is roadside on Longlong Road and a few paid lots near the gate. At busy times you may walk a short distance from the nearest proper lot.' },
      { hFil: 'Magkano at anong payment', hEn: 'Cost & payment', bFil: 'Karaniwang cash ang hinihingi sa parking; magdala ng maliit na bill at coins. Ang rate ay maaaring magbago, kaya magtanong muna sa attendant bago iwan ang sasakyan.', bEn: 'Parking usually asks for cash; bring small bills and coins. Rates change, so ask the attendant before leaving the vehicle.' },
      { hFil: 'Paano iwas sa parking stress', hEn: 'Avoiding parking stress', bFil: 'Dumating malapit sa opening time (7–8 AM) kung may sariling sasakyan. Kung ayaw sa parking hassle, taxi o Grab mula city center ang pinakasimple.', bEn: 'Arrive near opening time (7–8 AM) if driving yourself. If you want to skip parking hassle, taxi or Grab from the city center is simplest.' }
    ],
    faqs: [
      { qFil: 'May parking ba para sa van o bus?', qEn: 'Is there parking for vans or buses?', aFil: 'Limitado ang space para sa malalaking sasakyan. Para sa group tour, mainam na magpa-drop-off na lang malapit sa gate at maghanap ng malaking parking sa city proper.', aEn: 'Space for large vehicles is limited. For group tours, a drop-off near the gate plus parking in the city proper is more practical.' },
      { qFil: 'Safe ba ang parking sa gabi?', qEn: 'Is parking safe at night?', aFil: 'Ang attraction ay sarado sa gabi (6 PM), kaya walang opisyal na parking sa loob ng operating hours. Para sa gabi, ang city center ang mas may ayos na options.', aEn: 'The attraction closes at night (6 PM), so there is no official parking during operating hours after that. For evening plans, the city center has more organized options.' },
      { qFil: 'Pwede bang i-park tapos lakarin ang Tam-awan?', qEn: 'Can I park then walk to Tam-awan?', aFil: 'Ang Tam-awan Village ay ilang minuto ang layo pero may ahon at walang direktang sidewalk sa Longlong Road, kaya mas ligtas ang tricycle o jeep kaysa lakarin.', aEn: 'Tam-awan Village is a few minutes away but uphill with no proper sidewalk along Longlong Road, so a tricycle or jeep is safer than walking.' }
    ],
    related: ['drive-parking-tips', 'taxi-grab', 'jeepney-pinsao', 'hours']
  },
  'things-to-do-near': {
    slug: 'things-to-do-near',
    group: 'core',
    titleFil: 'Things to Do Near Igorot Stone Kingdom — Kalapit na Pasyalan',
    titleEn: 'Things to Do Near Igorot Stone Kingdom — Nearby Stops',
    descFil: 'Mga kalapit na pasyalan sa Baguio na pwedeng pagsamahin sa Igorot Stone Kingdom: Tam-awan Village, Lourdes Grotto, Mirador Park at Burnham Park.',
    descEn: 'Nearby Baguio stops you can pair with Igorot Stone Kingdom: Tam-awan Village, Lourdes Grotto, Mirador Park and Burnham Park.',
    h1Fil: 'Anong Pwedeng Gawin Malapit?',
    h1En: 'What to Do Nearby?',
    introFil: 'Dahil hillside at nasa Pinsao ang Igorot Stone Kingdom, pinakamadaling ipares ito sa mga stop na nasa parehong banda ng lungsod. Sa isang half-day o full-day, puwedeng bumuo ng Baguio culture loop nang hindi bumabalik nang paulit-ulit sa centro.',
    introEn: 'Because the Stone Kingdom is hillside in Pinsao, it pairs most easily with stops on the same side of the city. In a half or full day you can build a Baguio culture loop without repeatedly returning to the center.',
    sections: [
      { hFil: 'Mga cultural stop', hEn: 'Cultural stops', bFil: 'Ang Tam-awan Village ay hillside art-and-culture stop na may mga kubo, galleries at café—pinakamadaling ipares sa Stone Kingdom. Ang Mirador Heritage and Eco-Spirituality Park naman ay tahimik na elevated garden at viewpoint.', bEn: 'Tam-awan Village is a hillside art-and-culture stop with huts, galleries and a café—the easiest to pair with the Stone Kingdom. Mirador Heritage and Eco-Spirituality Park is a quiet elevated garden and viewpoint.' },
      { hFil: 'Mga outdoor at city stop', hEn: 'Outdoor & city stops', bFil: 'Ang Lourdes Grotto ay kilala sa mahabang hagdan at city views. Ang Burnham Park sa sentro ay classic Baguio stop para sa patag na lakaran at lawa bago o pagkatapos ng hill attractions.', bEn: 'Lourdes Grotto is known for its long staircase and city views. Burnham Park in the center is a classic Baguio stop for flat walks and a lake before or after the hill attractions.' },
      { hFil: 'Paano isaayos ang ruta', hEn: 'How to sequence the route', bFil: 'Simulan sa Stone Kingdom sa umaga (tahimik), sunod ang Tam-awan para sa lunch, tapos ang Grotto o Mirador sa hapon, at Burnham sa gabi. Ito ang full-day culture loop na inirerekomenda ng gabay.', bEn: 'Start at the Stone Kingdom in the morning (quiet), then Tam-awan for lunch, Grotto or Mirador in the afternoon, and Burnham at night. That is the suggested full-day culture loop.' }
    ],
    faqs: [
      { qFil: 'Ilang oras ang buong loop?', qEn: 'How long is the whole loop?', aFil: 'Ang full-day culture loop ay humigit-kumulang 6–8 oras kasama ang biyahe at lunch. Ang half-day (Stone Kingdom + Tam-awan) ay 2–3 oras lamang.', aEn: 'The full-day culture loop is about 6–8 hours including travel and lunch. The half-day (Stone Kingdom + Tam-awan) is just 2–3 hours.' },
      { qFil: 'Pwede bang lakarin lahat?', qEn: 'Can I walk all of them?', aFil: 'Hindi. Ang mga stop ay may distance at ahon, kaya jeep, taxi o Grab ang praktikal na transport sa pagitan ng mga ito.', bEn: 'No. The stops are spaced out with hills, so jeep, taxi or Grab is the practical transport between them.' },
      { qFil: 'Saan makakuha ng opisyal na listahan?', qEn: 'Where do I get an official list?', aFil: 'Para sa opisyal na tourism info at mga event, bisitahin ang Department of Tourism at ang official Baguio tourism channels.', aEn: 'For official tourism info and events, visit the Department of Tourism and official Baguio tourism channels.' }
    ],
    related: ['tam-awan-village', 'lourdes-grotto', 'mirador-park', 'full-day-culture-loop']
  },
  'what-is': {
    slug: 'what-is',
    group: 'core',
    titleFil: 'What Is Igorot Stone Kingdom? — Hindi Sinaunang Guho',
    titleEn: 'What Is Igorot Stone Kingdom? — Not an Ancient Ruin',
    descFil: 'Ano ang Igorot Stone Kingdom sa Baguio: isang modernong cultural attraction, hindi archaeological site. Linawin ang mga maling akala tulad ng "castle".',
    descEn: 'What Igorot Stone Kingdom in Baguio actually is: a modern cultural attraction, not an archaeological site. Clearing up myths like "castle".',
    h1Fil: 'Ano ang Igorot Stone Kingdom?',
    h1En: 'What Is Igorot Stone Kingdom?',
    introFil: 'Ang Igorot Stone Kingdom ay isang modernong, independently-built na hillside attraction sa Pinsao, Baguio—hindi ito sinaunang archaeological ruin o lugar ng sinaunang ritwal. Ang mga kuwento at "legend" dito ay bahagi ng creative framing ng mga nagtayo nito.',
    introEn: 'Igorot Stone Kingdom is a modern, independently-built hillside attraction in Pinsao, Baguio—not an ancient archaeological ruin or a site of old rituals. The stories and "legends" here are part of the creative framing by its builders.',
    sections: [
      { hFil: 'Koneksyon sa Cordillera', hEn: 'Connection to the Cordillera', bFil: 'Ang salitang "Igorot" ay tumutukoy sa mga ethnolinguistic group ng Cordillera—tulad ng Ibaloi, Kankana-ey at Ifugao—kilala sa rice terraces at stonework. Humuhugot ng inspirasyon ang attraction mula sa mga imaheng ito.', bEn: 'The word "Igorot" refers to the Cordillera ethnolinguistic groups—such as Ibaloi, Kankana-ey and Ifugao—known for rice terraces and stonework. The attraction draws inspiration from these images.' },
      { hFil: 'Bakit hindi ito "castle"', hEn: 'Why it is not a "castle"', bFil: 'Minsan ito tinatawag na "Igorot castle" sa mga search, pero ito ay modernong stonework attraction, hindi isang palace o fortresa. Tama lang na asahan ang isang malikhaing interpretasyon, hindi isang sinaunang kastilyo.', bEn: 'It is sometimes called an "Igorot castle" in searches, but it is a modern stonework attraction, not a palace or fortress. Expect a creative interpretation, not an ancient castle.' },
      { hFil: 'Paano tamang bisitahin', hEn: 'How to visit it correctly', bFil: 'Mas nagiging makabuluhan ang pagpunta kung kinikilala itong modernong proyekto at hindi kapalit ng mga buhay na tradisyon ng Cordillera. Igalang ang structure at ang lokal na komunidad.', bEn: 'The visit is more meaningful when you treat it as a modern project, not a substitute for living Cordillera traditions. Respect the structure and the local community.' }
    ],
    faqs: [
      { qFil: 'Sinaunang guho ba ito?', qEn: 'Is it an ancient ruin?', aFil: 'Hindi. Ito ay modernong attraction na gumagamit ng stonework at kuwentong hango sa Cordillera. Mas mabuting tingnan ito bilang malikhaing interpretasyon.', aEn: 'No. It is a modern attraction using stonework and Cordillera-inspired storytelling. See it as a creative interpretation.' },
      { qFil: 'Sino ang nagtayo?', qEn: 'Who built it?', aFil: 'Ito ay independently-built ng mga lokal na nagtayo; ang opisyal na entity sa Google Maps ay "Igorot Stone Kingdom Inc." Para sa detalye, buksan ang listing.', aEn: 'It was independently built by local builders; the official entity on Google Maps is "Igorot Stone Kingdom Inc." Open the listing for details.' },
      { qFil: 'Bakit tawag na "kingdom"?', qEn: 'Why is it called a "kingdom"?', aFil: 'Ang "kingdom" ay bahagi ng creative theme ng attraction—isang metapor para sa bawat antas ng bato—hindi isang totoong kaharian.', aEn: 'The "kingdom" is part of the attraction’s creative theme—a metaphor for each stone tier—not an actual kingdom.' }
    ],
    related: ['photos', 'vs-other-baguio', 'first-time-tips', 'things-to-do-near']
  },

  // ===================== B. TRANSPORT =====================
  'from-manila': {
    slug: 'from-manila',
    group: 'transport',
    titleFil: 'Baguio mula Maynila — Bus at Paano Pumuntang Stone Kingdom',
    titleEn: 'Baguio from Manila — Bus & Getting to the Stone Kingdom',
    descFil: 'Paano mag-Baguio mula Cubao o Pasay papuntang Igorot Stone Kingdom: bus schedule, biyahe, at transfer mula terminal.',
    descEn: 'How to reach Baguio from Cubao or Pasay to Igorot Stone Kingdom: bus schedule, trip and transfer from the terminal.',
    h1Fil: 'Mula Maynila patungong Stone Kingdom',
    h1En: 'From Manila to the Stone Kingdom',
    introFil: 'Ang karamihan ng bisita mula Manila ay sumasakay ng bus (4–6 oras) papuntang Baguio bus terminal, pagkatapos ay taxi/Grab o jeep papuntang attraction. Ang Stone Kingdom ay nasa Pinsao, humigit-kumulang 15–25 minuto mula sa sentro.',
    introEn: 'Most visitors from Manila take a bus (4–6 hours) to the Baguio bus terminal, then taxi/Grab or jeep to the attraction. The Stone Kingdom is in Pinsao, about 15–25 minutes from the center.',
    sections: [
      { hFil: 'Bus mula Cubao / Pasay', hEn: 'Bus from Cubao / Pasay', bFil: 'May mga hourly na bus sa Cubao at Pasay patungong Baguio. Ang biyahe ay 4–6 oras depende sa traffic; sa umaga ay mas mabilis.', bEn: 'There are hourly buses from Cubao and Pasay to Baguio. The trip is 4–6 hours depending on traffic; mornings are faster.' },
      { hFil: 'Mula bus terminal papunta sa attraction', hEn: 'From the bus terminal to the attraction', bFil: 'Baba sa Baguio bus terminal, pagkatapos sumakay ng taxi/Grab (direkta, ~15–25 min) o magtanong para sa Tam-awan/Longlong jeep mula Kayang/Otek terminal.', bEn: 'Alight at the Baguio bus terminal, then take a taxi/Grab (direct, ~15–25 min) or ask about the Tam-awan/Longlong jeep from the Kayang/Otek terminals.' },
      { hFil: 'Tips sa biyahe', hEn: 'Travel tips', bFil: 'Iwas sa Friday night at holiday rush. Mag-book ng bus seat nang maaga, at maglaan ng cash para sa taxi o parking sa Baguio.', bEn: 'Avoid Friday night and holiday rushes. Book a bus seat early, and bring cash for taxis or parking in Baguio.' }
    ],
    faqs: [
      { qFil: 'Ilang oras ang biyahe?', qEn: 'How long is the trip?', aFil: 'Humigit-kumulang 4–6 oras mula Manila depende sa traffic at stopover. Sa maagang umaga, madalas nasa mababa ang 4 oras.', aEn: 'About 4–6 hours from Manila depending on traffic and stops. Early morning often dips toward 4 hours.' },
      { qFil: 'Anong bus ang pinakamaganda?', qEn: 'Which bus is best?', aFil: 'Walang iisang "pinakamaganda"; pipiliin ang may bagong unit at maagang oras. Para sa opisyal na listahan ng operators, tingnan ang tourism channels.', aEn: 'There is no single "best"; choose a newer unit and an early departure. For an official operator list, check tourism channels.' },
      { qFil: 'Pwede bang diretso sa Stone Kingdom?', qEn: 'Can I go straight to the Stone Kingdom?', aFil: 'Hindi direkta ang bus; baba muna sa Baguio terminal, tapos taxi/jeep papunta sa Pinsao. Mas mabilis ang Grab kaysa magpalipat-lipat ng jeep.', aEn: 'The bus is not direct; alight at the Baguio terminal, then taxi/jeep to Pinsao. Grab is faster than switching jeeps.' }
    ],
    related: ['taxi-grab', 'jeepney-pinsao', 'baguio-airport-loakan', 'from-clark']
  },
  'from-clark': {
    slug: 'from-clark',
    group: 'transport',
    titleFil: 'Baguio mula Clark / Dau — Bus at Transfer',
    titleEn: 'Baguio from Clark / Dau — Bus & Transfer',
    descFil: 'Paano pumuntang Baguio mula Clark Airport o Dau terminal papuntang Igorot Stone Kingdom.',
    descEn: 'How to reach Baguio from Clark Airport or Dau terminal to Igorot Stone Kingdom.',
    h1Fil: 'Mula Clark patungong Stone Kingdom',
    h1En: 'From Clark to the Stone Kingdom',
    introFil: 'Kung galing ka sa Clark International Airport, ang pinakapraktikal ay bumaba sa Dau terminal (Mabalacat) at sumakay ng bus papuntang Baguio, pagkatapos ay taxi/jeep papunta sa attraction sa Pinsao.',
    introEn: 'If you are coming from Clark International Airport, the most practical route is to go to Dau terminal (Mabalacat) and take a bus to Baguio, then taxi/jeep to the attraction in Pinsao.',
    sections: [
      { hFil: 'Clark Airport → Dau → Baguio', hEn: 'Clark Airport → Dau → Baguio', bFil: 'May shuttle o taxi mula Clark patungong Dau terminal (10–20 min), kung saan dumadaan ang mga bus papuntang Baguio (3–4 oras).', bEn: 'There is a shuttle or taxi from Clark to Dau terminal (10–20 min), where Baguio buses pass through (3–4 hours).' },
      { hFil: 'Mula Baguio terminal', hEn: 'From the Baguio terminal', bFil: 'Katulad ng galing Manila, baba sa bus terminal at sumakay ng taxi/Grab o Tam-awan/Longlong jeep papuntang Stone Kingdom.', bEn: 'Like coming from Manila, alight at the bus terminal and take a taxi/Grab or the Tam-awan/Longlong jeep to the Stone Kingdom.' },
      { hFil: 'Kailan magbiyahe', hEn: 'When to travel', bFil: 'Ang maagang umaga mula Dau ay nakaiwas sa traffic papasok ng Baguio. Magdala ng cash para sa transfer sa Dau at taxi sa Baguio.', bEn: 'An early morning departure from Dau avoids Baguio-bound traffic. Carry cash for the Dau transfer and Baguio taxi.' }
    ],
    faqs: [
      { qFil: 'May direktang bus ba mula Clark?', qEn: 'Is there a direct bus from Clark?', aFil: 'Madalas kailangang dumaan muna sa Dau terminal; bihira ang direktang Clark–Baguio bus. Mas ligtas ang rutang Dau.', aEn: 'You usually pass through Dau terminal first; a direct Clark–Baguio bus is rare. The Dau route is safer.' },
      { qFil: 'Ilang oras lahat?', qEn: 'How long total?', aFil: 'Clark → Dau (~20 min) + Dau → Baguio (3–4 oras) + taxi (~25 min) = humigit-kumulang 4–5 oras na may buffer.', aEn: 'Clark → Dau (~20 min) + Dau → Baguio (3–4 hrs) + taxi (~25 min) = roughly 4–5 hours with buffer.' },
      { qFil: 'Mas mura ba kaysa galing Manila?', qEn: 'Is it cheaper than from Manila?', aFil: 'Depende sa flight at bus fare mo; ang bus portion ay katulad ng regular Baguio fare. Iwas sa "fixer" sa terminal at magbayad sa opisyal na ticketing.', aEn: 'It depends on your flight and bus fare; the bus portion matches regular Baguio fare. Avoid terminal "fixers" and pay at official ticketing.' }
    ],
    related: ['from-manila', 'baguio-airport-loakan', 'taxi-grab', 'jeepney-pinsao']
  },
  'baguio-airport-loakan': {
    slug: 'baguio-airport-loakan',
    group: 'transport',
    titleFil: 'Loakan Airport (BGO) papuntang Stone Kingdom',
    titleEn: 'Loakan Airport (BGO) to the Stone Kingdom',
    descFil: 'Distansya at transport mula Baguio Loakan Airport papuntang Igorot Stone Kingdom, kasama taxi, Grab at jeep.',
    descEn: 'Distance and transport from Baguio Loakan Airport to Igorot Stone Kingdom, including taxi, Grab and jeep.',
    h1Fil: 'Mula Loakan Airport',
    h1En: 'From Loakan Airport',
    introFil: 'Ang Baguio Loakan Airport ay nasa humigit-kumulang 7–8 km mula sa Igorot Stone Kingdom, o mga 20–30 minutong biyahe depende sa daloy ng trapiko. Limitado ang commercial flights papuntang BGO, kaya karamihan ay bumibiyahe mula Manila o Clark via bus.',
    introEn: 'Baguio Loakan Airport is about 7–8 km from Igorot Stone Kingdom, or roughly 20–30 minutes depending on traffic. Commercial flights to BGO are limited, so most visitors arrive from Manila or Clark by bus.',
    sections: [
      { hFil: 'Taxi / Grab mula airport', hEn: 'Taxi / Grab from the airport', bFil: 'Ito ang pinakadirekta. Sabihin sa driver ang eksaktong address: 362 Longlong Road, Pinsao Proper. Ang daan ay may ahon, kaya normal na mas mabagal.', bEn: 'This is the most direct. Tell the driver the exact address: 362 Longlong Road, Pinsao Proper. The road is uphill, so it is normally slower.' },
      { hFil: 'Jeepney + lakad', hEn: 'Jeepney + walk', bFil: 'Mula airport, sumakay ng jeep patungong city center, pagkatapos lumipat sa Tam-awan / Longlong route na jeep mula Kayang/Otek terminal.', bEn: 'From the airport, take a jeep to the city center, then transfer to the Tam-awan / Longlong jeep from the Kayang/Otek terminal.' },
      { hFil: 'Pre-arranged transfer', hEn: 'Pre-arranged transfer', bFil: 'Kung maraming gamit o kasama ang grupo, mas praktikal ang private transfer mula airport papuntang attraction.', bEn: 'If you have lots of luggage or a group, a private transfer from the airport to the attraction is more practical.' }
    ],
    faqs: [
      { qFil: 'May flight ba mula Manila?', qEn: 'Are there flights from Manila?', aFil: 'Limitado at paminsan-minsan lamang ang commercial flights papuntang Loakan; karamihan ay dadaan sa bus mula Manila o Clark.', aEn: 'Commercial flights to Loakan are limited and intermittent; most visitors take the bus from Manila or Clark.' },
      { qFil: 'Gaano kalayo ang airport?', qEn: 'How far is the airport?', aFil: 'Humigit-kumulang 7–8 km at 20–30 minutong biyahe mula sa Stone Kingdom, depende sa traffic.', aEn: 'About 7–8 km and 20–30 minutes from the Stone Kingdom, depending on traffic.' },
      { qFil: 'May Grab ba sa airport?', qEn: 'Is Grab available at the airport?', aFil: 'Maaaring limitado ang Grab supply sa airport; magpa-book nang maaga o magtanong sa airport counter para sa authorized transport.', aEn: 'Grab supply at the airport can be limited; book early or ask the airport counter for authorized transport.' }
    ],
    related: ['from-manila', 'from-clark', 'taxi-grab', 'drive-parking-tips']
  },
  'taxi-grab': {
    slug: 'taxi-grab',
    group: 'transport',
    titleFil: 'Taxi at Grab papuntang Stone Kingdom',
    titleEn: 'Taxi & Grab to the Stone Kingdom',
    descFil: 'Pinakasimpleng paraan mula city center: taxi o Grab papuntang Igorot Stone Kingdom, kasama ang eksaktong address at rate.',
    descEn: 'Simplest way from the city center: taxi or Grab to Igorot Stone Kingdom, with the exact address and typical fares.',
    h1Fil: 'Taxi at Grab',
    h1En: 'Taxi & Grab',
    introFil: 'Ang taxi o Grab mula city center ay ang pinakasimpleng option kung ayaw mong maghanap ng jeepney transfer o mag-isip ng parking. Sabihin sa driver: "Igorot Stone Kingdom, Longlong Road, Pinsao Proper."',
    introEn: 'A taxi or Grab from the city center is the simplest option if you want to skip the jeepney transfer or parking. Tell the driver: "Igorot Stone Kingdom, Longlong Road, Pinsao Proper."',
    sections: [
      { hFil: 'Eksaktong address', hEn: 'Exact address', bFil: 'I-save at ibigay ang: 362 Longlong Road, Pinsao Proper, Baguio City. May ibang "Stone Kingdom" na maling drop-off, kaya banggitin ang buong address.', bEn: 'Save and give: 362 Longlong Road, Pinsao Proper, Baguio City. There are other "Stone Kingdom" wrong drop-offs, so state the full address.' },
      { hFil: 'Tagal at rate', hEn: 'Duration & fare', bFil: 'Mula city center: humigit-kumulang 15–20 minuto depende sa traffic. Ang Grab ay available pero limitado sa rush hour at rainy days—magpa-book nang maaga.', bEn: 'From the city center: about 15–20 minutes depending on traffic. Grab is available but limited in rush hour and rain—book early.' },
      { hFil: 'Bakit ito ang pinakasimple', hEn: 'Why it is simplest', bFil: 'Iniiwas nito ang parking stress at jeepney transfer. Mainam lalo na kung may bata, senior, o maraming gamit.', bEn: 'It avoids parking stress and jeepney transfers. Ideal especially with kids, seniors, or lots of luggage.' }
    ],
    faqs: [
      { qFil: 'Magkano ang Grab?', qEn: 'How much is Grab?', aFil: 'Nag-iiba-iba ayon sa surge at distance; tingnan sa app bago sumakay. Bilang gabay, ang city center → Stone Kingdom ay maikli at nasa municipal fare range.', aEn: 'It varies with surge and distance; check the app before riding. As a guide, city center → Stone Kingdom is short and within municipal fare range.' },
      { qFil: 'Madaling sumakay ng taxi sa sentro?', qEn: 'Is it easy to get a taxi in the center?', aFil: 'Oo sa karaniwang oras, pero mahirap sa Session Road tuwing gabi at weekend. Ang Grab ay mas mapagkakatiwalaan kung may signal.', bEn: 'Yes at normal hours, but hard along Session Road at night and weekends. Grab is more reliable when there is signal.' },
      { qFil: 'Pwede bang i-book pabalik?', qEn: 'Can I book the return trip?', aFil: 'Mahina ang signal sa ahon ng Pinsao, kaya magpa-book ng return bago umakyat, o mag-ready ng cash para sa roadside transport.', bEn: 'Signal is weak on the Pinsao uphill, so book your return before climbing, or keep cash for roadside transport.' }
    ],
    related: ['jeepney-pinsao', 'parking', 'drive-parking-tips', 'from-manila']
  },
  'jeepney-pinsao': {
    slug: 'jeepney-pinsao',
    group: 'transport',
    titleFil: 'Jeepney papuntang Tam-awan / Longlong (Pinsao)',
    titleEn: 'Jeepney to Tam-awan / Longlong (Pinsao)',
    descFil: 'Paano sumakay ng jeepney patungong Pinsao / Longlong Road para sa Igorot Stone Kingdom.',
    descEn: 'How to ride a jeepney toward Pinsao / Longlong Road for Igorot Stone Kingdom.',
    h1Fil: 'Jeepney papuntang Pinsao',
    h1En: 'Jeepney to Pinsao',
    introFil: 'Magtanong sa central terminals sa may Kayang/Otek area para sa jeep na patungong Tam-awan/Longlong. Kumpirmahin sa dispatcher o driver kung dumaraan o saan pinakamalapit bumaba para sa Stone Kingdom.',
    introEn: 'Ask at the central terminals around Kayang/Otek for a jeep heading to Tam-awan/Longlong. Confirm with the dispatcher or driver whether it passes or where to alight closest to the Stone Kingdom.',
    sections: [
      { hFil: 'Saan sumakay', hEn: 'Where to board', bFil: 'Ang Kayang at Otek terminals sa city center ang simulan ng mga jeep patungong Tam-awan / Longlong. Magtanong muna kung "Stone Kingdom" ang labas.', bEn: 'The Kayang and Otek terminals in the center start jeeps toward Tam-awan / Longlong. Ask first if "Stone Kingdom" is on the route.' },
      { hFil: 'Baba at transfer', hEn: 'Alight & transfer', bFil: 'Baba sa pinakamalapit na punto sa Longlong Road, pagkatapos ay maikling lakad o tricycle papunta sa gate. Hindi direkta ang jeep papunta sa gate.', bEn: 'Alight at the closest point on Longlong Road, then a short walk or tricycle to the gate. The jeep does not go directly to the gate.' },
      { hFil: 'Mga tips', hEn: 'Tips', bFil: 'Tricycle sa Pinsao area ay maikli at direkta pero magtanong muna ng fare bago sumakay. Huwag umasa nang sobra sa schedule—umuwi bago gumabi.', bEn: 'A tricycle in Pinsao is short and direct but ask the fare before riding. Do not rely too much on a schedule—head back before dark.' }
    ],
    faqs: [
      { qFil: 'Dumadaan ba ang jeep sa gate?', qEn: 'Does the jeep pass the gate?', aFil: 'Hindi direkta. Bumababa ka sa Longlong Road at naglalakad o sumasakay ng tricycle papunta sa gate.', aEn: 'Not directly. You alight on Longlong Road and walk or take a tricycle to the gate.' },
      { qFil: 'Magkano ang jeep fare?', qEn: 'How much is the jeep fare?', aFil: 'Mababa ang jeepney fare (regular municipal rate); magdala ng coins. Ang tricycle ay ibang presyo, kaya magtanong muna.', aEn: 'Jeepney fare is low (regular municipal rate); bring coins. The tricycle is a different price, so ask first.' },
      { qFil: 'Safe ba para sa first-timer?', qEn: 'Is it safe for a first-timer?', aFil: 'Oo, pero magtanong nang magtanong sa locals at dispatcher. Mas simple ang taxi kung first time mo sa Baguio.', aEn: 'Yes, but keep asking locals and the dispatcher. A taxi is simpler if it is your first time in Baguio.' }
    ],
    related: ['taxi-grab', 'drive-parking-tips', 'from-manila', 'things-to-do-near']
  },
  'drive-parking-tips': {
    slug: 'drive-parking-tips',
    group: 'transport',
    titleFil: 'Pagda-drive papuntang Stone Kingdom — Kalsada at Parking',
    titleEn: 'Driving to the Stone Kingdom — Roads & Parking',
    descFil: 'Tips sa pagda-drive papuntang Igorot Stone Kingdom: uphill roads, signal, gasolina at parking.',
    descEn: 'Tips for driving to Igorot Stone Kingdom: uphill roads, signal, fuel and parking.',
    h1Fil: 'Pagda-drive papuntang Pinsao',
    h1En: 'Driving to Pinsao',
    introFil: 'I-save ang map pin sa ibaba at mag-expect ng uphill streets at limitadong parking sa busy hours; umaga ang mas madaling arrival window.',
    introEn: 'Save the map pin below and expect uphill streets and limited parking at busy hours; morning is the easier arrival window.',
    sections: [
      { hFil: 'Kalsada at signal', hEn: 'Roads & signal', bFil: 'Ang final approach ay hillside road, kaya normal na mas mabagal kapag weekend o maulan. Mahina ang signal sa ahon—i-save ang pin bago bumiyahe.', bEn: 'The final approach is a hillside road, so it is normally slower on weekends or in rain. Signal is weak uphill—save the pin before you travel.' },
      { hFil: 'Gasolina at charging', hEn: 'Fuel & charging', bFil: 'Ang mga gasoline station ay nasa city proper. Para sa EV, may charging point sa ilang mall at establishment sa Baguio—i-check ang real-time availability bago umalis.', bEn: 'Gas stations are in the city proper. For EVs, some malls and establishments in Baguio have charging points—check real-time availability before leaving.' },
      { hFil: 'Parking plan', hEn: 'Parking plan', bFil: 'I-park sa roadside o paid lot malapit sa gate, magdala ng cash para sa bayad, at dumating nang maaga sa weekend para hindi ma-stress.', bEn: 'Park at a roadside or paid lot near the gate, bring cash for payment, and arrive early on weekends to avoid stress.' }
    ],
    faqs: [
      { qFil: 'Mahirap ba ang kalsada?', qEn: 'Is the road difficult?', aFil: 'Hindi ito technically mahirap, pero ahon at makitid sa mga bahagi. Sanayin ang sasakyan at huwag pwersahin kung basa.', bEn: 'Not technically hard, but uphill and narrow in parts. Know your vehicle and do not force it when wet.' },
      { qFil: 'Saan ang pinakamalapit na gas station?', qEn: 'Where is the nearest gas station?', aFil: 'Sa city proper; walang gas station sa mismong Pinsao ahon. Mag-fuel bago umakyat.', bEn: 'In the city proper; there is no station on the Pinsao uphill. Fuel before climbing.' },
      { qFil: 'Pwede bang i-leave ang sasakyan buong araw?', qEn: 'Can I leave the car all day?', aFil: 'Oo sa paid lots, pero may bayad at limitadong slot. Para sa whole-day loop, mas ok iwan sa city at mag-Grab sa gabi.', aEn: 'Yes at paid lots, but there is a fee and limited slots. For a whole-day loop, leaving it in the city and using Grab at night is better.' }
    ],
    related: ['parking', 'taxi-grab', 'jeepney-pinsao', 'baguio-airport-loakan']
  },

  // ===================== C. FOOD / DRINK =====================
  'cordilleran-food': {
    slug: 'cordilleran-food',
    group: 'food',
    titleFil: 'Cordilleran Food — Ano ang Pinoy Highland Cuisine',
    titleEn: 'Cordilleran Food — Highland Cuisine to Know',
    descFil: 'Kilalanin ang Cordilleran cuisine bago bisitahin ang Igorot Stone Kingdom: pinikpikan, etag, native chicken at iba pa.',
    descEn: 'Know Cordilleran cuisine before visiting Igorot Stone Kingdom: pinikpikan, etag, native chicken and more.',
    h1Fil: 'Cordilleran Cuisine',
    h1En: 'Cordilleran Cuisine',
    introFil: 'Ang Igorot Stone Kingdom ay humuhugot ng inspirasyon sa kultura ng Cordillera, at ang pagkain ay bahagi nito. Bago ka pumunta, mainam na alamin ang ilang dish na maaari mong masubukan sa paligid ng Baguio at Pinsao.',
    introEn: 'Igorot Stone Kingdom draws inspiration from Cordillera culture, and food is part of it. Before you go, it helps to know a few dishes you may try around Baguio and Pinsao.',
    sections: [
      { hFil: 'Mga kilalang dish', hEn: 'Well-known dishes', bFil: 'Ang pinikpikan (manok na hinampas bago lutuin), etag (fermented pork/carabao), at native chicken soup ay mga halimbawa ng highland cooking. May mga variation ito bawat grupo sa Cordillera.', bEn: 'Pinikpikan (chicken beaten before cooking), etag (fermented pork/carabao), and native chicken soup are examples of highland cooking. They vary across Cordillera groups.' },
      { hFil: 'Saan subukan', hEn: 'Where to try', bFil: 'Ang Tam-awan / Pinsao area at city proper ay may mga eatery at café na naglilingkod ng Cordilleran at Filipino meals. Para sa opisyal na food guide at listings, tingnan ang Department of Tourism.', bEn: 'The Tam-awan / Pinsao area and city proper have eateries and cafés serving Cordilleran and Filipino meals. For an official food guide and listings, see the Department of Tourism.' },
      { hFil: 'Respeto sa pagkain', hEn: 'Respect around food', bFil: 'Ang ilang dish ay may ritual o community context; ituring itong parte ng kultura, hindi lamang "exotic food." Tanggapin ang portion at huwag mag-aksaya.', bEn: 'Some dishes carry ritual or community context; treat them as culture, not just "exotic food." Accept a portion and avoid waste.' }
    ],
    faqs: [
      { qFil: 'Ano ang etag?', qEn: 'What is etag?', aFil: 'Ang etag ay fermented meat (karaniwang baboy o carabao) na ginagamit bilang pampalasa sa highland cooking. Maalat at malakas ang amoy para sa hindi sanay.', aEn: 'Etag is fermented meat (usually pork or carabao) used as a seasoning in highland cooking. Salty and strong-smelling to the uninitiated.' },
      { qFil: 'May vegetarian option ba?', qEn: 'Are there vegetarian options?', aFil: 'Limitado ang purely vegetarian sa tradisyunal na Cordilleran dish, pero ang city proper ay may vegetarian at plant-based restaurants.', aEn: 'Purely vegetarian options are limited in traditional Cordillera dishes, but the city proper has vegetarian and plant-based restaurants.' },
      { qFil: 'Safe ba kumain sa carinderia?', qEn: 'Is it safe to eat at a carinderia?', aFil: 'Karaniwang safe ang malinis na carinderia, pero piliin ang maayos at maraming tao (fresh turnover). Magdala ng tubig at iwas sa hilaw kapag sensitive ang tiyan.', bEn: 'A clean carinderia is generally safe, but choose tidy, busy ones (fresh turnover). Carry water and avoid raw items if your stomach is sensitive.' }
    ],
    related: ['where-to-eat-near', 'baguio-coffee-cafes', 'vegetarian-baguio', 'market-and-souvenir']
  },
  'where-to-eat-near': {
    slug: 'where-to-eat-near',
    group: 'food',
    titleFil: 'Where to Eat Near Igorot Stone Kingdom',
    titleEn: 'Where to Eat Near Igorot Stone Kingdom',
    descFil: 'Mga kainan sa paligid ng Igorot Stone Kingdom: Tam-awan / Pinsao eateries, café at city food strips.',
    descEn: 'Food spots around Igorot Stone Kingdom: Tam-awan / Pinsao eateries, cafés and city food strips.',
    h1Fil: 'Kainan sa Paligid',
    h1En: 'Food Around the Area',
    introFil: 'Ang Tam-awan / Pinsao area ay may ilang magandang local stops—small eatery, carinderia at café. Para sa mas maraming pagpipilian, ang city center (15–20 min) ay may restaurants at food strips.',
    introEn: 'The Tam-awan / Pinsao area has a few good local stops—small eateries, carinderias and cafés. For more variety, the city center (15–20 min) has restaurants and food strips.',
    sections: [
      { hFil: 'Tam-awan / Pinsao', hEn: 'Tam-awan / Pinsao', bFil: 'Mainam para sa Cordilleran at casual meals pagkatapos umakyat ng terraces. May artsy café rin na pwede mong pahingahan bago o pagkatapos ng lakaran.', bEn: 'Good for Cordilleran and casual meals after climbing the terraces. There is also an artsy café to rest before or after walking.' },
      { hFil: 'City center', hEn: 'City center', bFil: 'Ang Session Road at paligid nito ay may budget eats, restaurants, at café na bukas hanggang gabi. Mas malaki ang selection kaysa sa hillside area.', bEn: 'Session Road and surroundings have budget eats, restaurants and cafés open late. The selection is larger than the hillside area.' },
      { hFil: 'Paunawa', hEn: 'Disclaimer', bFil: 'Ang gabay na ito ay tungkol sa uri at lokasyon ng kainan, hindi rekomendasyon ng partikular na negosyo. Oras at menu ay puwedeng magbago—tingnan ang current listing.', bEn: 'This guide is about the type and location of eateries, not an endorsement of any business. Hours and menus may change—check the current listing.' }
    ],
    faqs: [
      { qFil: 'May bukas ba sa umaga?', qEn: 'Anything open in the morning?', aFil: 'Ang ibang café at carinderia sa Tam-awan ay bukas nang maaga para sa agahan; i-check ang oras bago pumunta.', bEn: 'Some cafés and carinderias in Tam-awan open early for breakfast; check hours before going.' },
      { qFil: 'May halal o vegetarian?', qEn: 'Any halal or vegetarian?', aFil: 'Limitado sa hillside area; ang city proper ang may mas maraming halal at vegetarian option.', aEn: 'Limited in the hillside area; the city proper has more halal and vegetarian options.' },
      { qFil: 'Pwede bang mag-takeout?', qEn: 'Can I get takeout?', aFil: 'Oo sa karamihan ng eatery; praktikal ito kung gusto mong kumain sa viewpoint o courtyard ng Stone Kingdom.', aEn: 'Yes at most eateries; handy if you want to eat at a viewpoint or the Stone Kingdom courtyard.' }
    ],
    related: ['cordilleran-food', 'baguio-coffee-cafes', 'vegetarian-baguio', 'baguio-food-trip']
  },
  'baguio-coffee-cafes': {
    slug: 'baguio-coffee-cafes',
    group: 'food',
    titleFil: 'Baguio Coffee & Cafés — Inumin at Pahinga',
    titleEn: 'Baguio Coffee & Cafés — Drinks & Rest',
    descFil: 'Baguio coffee culture at mga café malapit sa Igorot Stone Kingdom: kape, merienda at pahinga pagkatapos ng lakad.',
    descEn: 'Baguio coffee culture and cafés near Igorot Stone Kingdom: coffee, snacks and rest after walking.',
    h1Fil: 'Kape at Café sa Baguio',
    h1En: 'Coffee & Cafés in Baguio',
    introFil: 'Kilala ang Baguio sa preskong hangin at coffee culture. Matapos ang hagdan ng Stone Kingdom, isang café sa Tam-awan / Pinsao ang praktikal na pahingahan bago bumalik sa sentro.',
    introEn: 'Baguio is known for cool air and coffee culture. After the Stone Kingdom stairs, a café in Tam-awan / Pinsao is a practical rest stop before heading back to the center.',
    sections: [
      { hFil: 'Bakit sikat ang kape rito', hEn: 'Why coffee is popular here', bFil: 'Ang cool highland climate ay ideal para sa coffee-growing at café-hopping. Maraming independent café sa city at sa mga art district tulad ng Tam-awan.', bEn: 'The cool highland climate is ideal for coffee-growing and café-hopping. Many independent cafés sit in the city and art districts like Tam-awan.' },
      { hFil: 'Saan mag-kape', hEn: 'Where to coffee', bFil: 'Sa Tam-awan / Pinsao may maliit at artsy na café na walking distance mula sa attraction. Sa centro, ang Session Road ay puno ng options mula budget hanggang specialty.', bEn: 'In Tam-awan / Pinsao there are small, artsy cafés within walking distance of the attraction. In the center, Session Road is full of options from budget to specialty.' },
      { hFil: 'Drink + merienda combo', hEn: 'Drink + snack combo', bFil: 'Karaniwang may kape, tsaa, at maliliit na pastry o local snack. Mainam na pair ito sa pahinga bago ang susunod na stop sa culture loop.', bEn: 'Usually coffee, tea and small pastries or local snacks. Pair it with rest before the next stop on your culture loop.' }
    ],
    faqs: [
      { qFil: 'May Wi-Fi ba ang café?', qEn: 'Do cafés have Wi-Fi?', aFil: 'Karaniwang may Wi-Fi ang mga café sa centro; sa hillside area ay limitado, kaya huwag umasa kung kailangan ang signal.', bEn: 'City cafés usually have Wi-Fi; the hillside area is limited, so do not rely on it if you need signal.' },
      { qFil: 'Anong oras bukas?', qEn: 'What are the hours?', aFil: 'Karaniwang 8 AM–8 PM sa karamihan, pero mag-iba sa holiday at weekday. I-check ang current listing.', bEn: 'Often 8 AM–8 PM for most, but it shifts on holidays and weekdays. Check the current listing.' },
      { qFil: 'May local coffee ba?', qEn: 'Is there local coffee?', aFil: 'Oo, maraming café ang nagse-serve ng Benguet coffee at ibang PH origins. Itanong sa barista para sa recommended brew.', bEn: 'Yes, many cafés serve Benguet coffee and other PH origins. Ask the barista for a recommended brew.' }
    ],
    related: ['where-to-eat-near', 'cordilleran-food', 'baguio-food-trip', 'things-to-do-near']
  },
  'baguio-food-trip': {
    slug: 'baguio-food-trip',
    group: 'food',
    titleFil: 'Baguio Food Trip — Ruta ng Pagkain',
    titleEn: 'Baguio Food Trip — Eating Route',
    descFil: 'Isang food-focused day sa Baguio na pwedeng isama ang Igorot Stone Kingdom: café, market at restaurant stops.',
    descEn: 'A food-focused Baguio day that can include Igorot Stone Kingdom: café, market and restaurant stops.',
    h1Fil: 'Baguio Food Trip',
    h1En: 'Baguio Food Trip',
    introFil: 'Kung gusto mong pagsamahin ang Stone Kingdom at kain, simulan sa umagang kape sa Tam-awan, bisitahin ang attraction, tapos bumaba sa city para sa market at dinner sa Session Road.',
    introEn: 'If you want to combine the Stone Kingdom with eating, start with a morning coffee in Tam-awan, visit the attraction, then go down to the city for the market and dinner on Session Road.',
    sections: [
      { hFil: 'Umaga: kape at agahan', hEn: 'Morning: coffee & breakfast', bFil: 'Mag-kape sa Tam-awan / Pinsao, tapos akyatin ang Stone Kingdom habang tahimik pa (7–9 AM).', bEn: 'Coffee in Tam-awan / Pinsao, then climb the Stone Kingdom while still quiet (7–9 AM).' },
      { hFil: 'Tanghali: market at city', hEn: 'Midday: market & city', bFil: 'Bumaba sa city para sa Baguio public market (fresh produce, strawberries, pasalubong) at isang lunch stop.', bEn: 'Go down to the city for the Baguio public market (fresh produce, strawberries, pasalubong) and a lunch stop.' },
      { hFil: 'Gabi: Session Road', hEn: 'Evening: Session Road', bFil: 'Taposin sa Session Road para sa dinner at dessert walk. Iwas sa sobrang late kung may susunod pang araw.', bEn: 'End on Session Road for dinner and a dessert walk. Avoid staying too late if you have another day ahead.' }
    ],
    faqs: [
      { qFil: 'Kailangan ba ng budget?', qEn: 'What budget do I need?', aFil: 'Ang PH travelers ay puwedeng mag-bond paper budget; ang cafe at carinderia ay mura, ang restaurants naman ay mid-range.', aEn: 'PH travelers can keep it on a paper budget; cafés and carinderias are cheap, restaurants mid-range.' },
      { qFil: 'Pwede bang i-include ang Stone Kingdom?', qEn: 'Can I include the Stone Kingdom?', aFil: 'Oo—ito ang natural na morning stop bago ang city food crawl. Ilang oras lang ang attraction kaya sisingit nang maayos.', aEn: 'Yes—it is the natural morning stop before the city food crawl. The attraction takes only a couple of hours, so it fits neatly.' },
      { qFil: 'May food tour ba?', qEn: 'Are there food tours?', aFil: 'May mga organized tour, pero puwede ring self-guided gamit ang gabay na ito. Para sa opisyal na tourism info, tingnan ang Department of Tourism.', bEn: 'There are organized tours, but you can also self-guide with this page. For official tourism info, see the Department of Tourism.' }
    ],
    related: ['baguio-coffee-cafes', 'where-to-eat-near', 'market-and-souvenir', 'full-day-culture-loop']
  },
  'market-and-souvenir': {
    slug: 'market-and-souvenir',
    group: 'food',
    titleFil: 'Baguio Market & Souvenir — Pasalubong',
    titleEn: 'Baguio Market & Souvenir — Pasalubong',
    descFil: 'Baguio public market, strawberries, handicraft at souvenir: kung saan bumili ng pasalubong malapit sa Stone Kingdom trip.',
    descEn: 'Baguio public market, strawberries, handicraft and souvenirs: where to buy pasalubong near your Stone Kingdom trip.',
    h1Fil: 'Market at Pasalubong',
    h1En: 'Market & Souvenirs',
    introFil: 'Bago o pagkatapos ng Stone Kingdom, ang Baguio public market ay sentro ng fresh produce, strawberries, at local handicraft. Mainam na pahinga ito mula sa ahon.',
    introEn: 'Before or after the Stone Kingdom, the Baguio public market is the hub for fresh produce, strawberries and local handicraft. It is a good rest from the uphill climb.',
    sections: [
      { hFil: 'Strawberries at produce', hEn: 'Strawberries & produce', bFil: 'Ang Baguio ay kilala sa strawberries at cool-climate veggies. Bumili nang sariwa at iwas sa overpriced "tourist pack" sa mismong attraction.', bEn: 'Baguio is known for strawberries and cool-climate veggies. Buy fresh and avoid overpriced "tourist packs" at the attraction itself.' },
      { hFil: 'Handicraft at souvenir', hEn: 'Handicraft & souvenir', bFil: 'Ang woven products, woodcraft at native items ay bahagi ng Cordillera heritage. Bumili mula sa legitimate vendor at i-respeto ang cultural meaning.', bEn: 'Woven products, woodcraft and native items are part of Cordillera heritage. Buy from legitimate vendors and respect the cultural meaning.' },
      { hFil: 'Paunawa sa bilihan', hEn: 'Buying note', bFil: 'Walang koneksyon ang gabay na ito sa anumang tindahan; ito ay neutral na impormasyon lang. Mag-compare ng presyo at mag-budget.', bEn: 'This guide has no connection to any shop; it is neutral information only. Compare prices and budget.' }
    ],
    faqs: [
      { qFil: 'Malapit ba ang market sa Stone Kingdom?', qEn: 'Is the market near the Stone Kingdom?', aFil: 'Hindi—nasa city proper ito (~15–25 min). Gawing separate stop sa ibang araw o bago umakyat.', aEn: 'No—it is in the city proper (~15–25 min). Make it a separate stop another day or before climbing.' },
      { qFil: 'Anong oras bukas ang market?', qEn: 'What are market hours?', aFil: 'Karaniwang maaga hanggang gabi, pero maingay at siksik sa weekend. Dumating nang maaga para mas presko.', bEn: 'Generally early to late, but crowded on weekends. Arrive early for fresher goods.' },
      { qFil: 'Pwede bang magpa-wrap?', qEn: 'Can they wrap items?', aFil: 'Oo, maraming stall ang nag-o-offer ng pasalubong wrapping. Magdala ng extra cash para sa small fees.', aEn: 'Yes, many stalls offer pasalubong wrapping. Carry extra cash for small fees.' }
    ],
    related: ['baguio-food-trip', 'cordilleran-food', 'where-to-eat-near', 'things-to-do-near']
  },
  'vegetarian-baguio': {
    slug: 'vegetarian-baguio',
    group: 'food',
    titleFil: 'Vegetarian & Halal Food sa Baguio',
    titleEn: 'Vegetarian & Halal Food in Baguio',
    descFil: 'Kung saan kumain ng vegetarian o halal sa Baguio malapit sa Igorot Stone Kingdom trip.',
    descEn: 'Where to eat vegetarian or halal in Baguio near your Igorot Stone Kingdom trip.',
    h1Fil: 'Vegetarian at Halal Options',
    h1En: 'Vegetarian & Halal Options',
    introFil: 'Ang tradisyunal na Cordilleran dish ay karaniwang may karne, kaya ang purely vegetarian o halal ay mas madaling mahanap sa city proper kaysa sa hillside area.',
    introEn: 'Traditional Cordillera dishes usually contain meat, so purely vegetarian or halal options are easier to find in the city proper than in the hillside area.',
    sections: [
      { hFil: 'Vegetarian', hEn: 'Vegetarian', bFil: 'Ang city proper ay may vegetarian at plant-based restaurants, lalo na sa Session Road at mga café. Sa Tam-awan, magtanong para sa meat-free na ulam.', bEn: 'The city proper has vegetarian and plant-based restaurants, especially along Session Road and cafés. In Tam-awan, ask for meat-free dishes.' },
      { hFil: 'Halal', hEn: 'Halal', bFil: 'May halal-certified restaurants sa Baguio; hanapin ang sertipikasyon bago kumain. Ang mga carinderia ay hindi laging halal.', bEn: 'There are halal-certified restaurants in Baguio; look for certification before eating. Carinderias are not always halal.' },
      { hFil: 'Tips', hEn: 'Tips', bFil: 'Mag-search ng current listing bago pumunta, at maglaan ng extra time sa city para sa selection. Iwas sa assumption—tanong ang halal status.', bEn: 'Search the current listing before going, and allow extra time in the city for selection. Avoid assumptions—ask about halal status.' }
    ],
    faqs: [
      { qFil: 'May vegetarian sa Stone Kingdom?', qEn: 'Is there vegetarian food at the Stone Kingdom?', aFil: 'Walang food stall sa loob; magbaon ng snack o kumain sa Tam-awan bago umakyat.', aEn: 'There is no food stall inside; bring a snack or eat in Tam-awan before climbing.' },
      { qFil: 'Safe ba ang street food?', qEn: 'Is street food safe?', aFil: 'Karaniwang safe kung luto at mainit, pero iwas sa hilaw kung sensitive ang tiyan. Piliin ang maraming tao.', bEn: 'Generally safe if cooked and hot, but avoid raw if your stomach is sensitive. Choose busy stalls.' },
      { qFil: 'Pwede bang mag-request ng veg version?', qEn: 'Can I request a veg version?', aFil: 'Minsan oo sa café at carinderia; sabihin nang maaga at malinaw ang request.', aEn: 'Sometimes yes at cafés and carinderias; state your request early and clearly.' }
    ],
    related: ['where-to-eat-near', 'cordilleran-food', 'baguio-coffee-cafes', 'baguio-food-trip']
  },

  // ===================== D. NEARBY (PLAY) =====================
  'tam-awan-village': {
    slug: 'tam-awan-village',
    group: 'nearby',
    titleFil: 'Tam-awan Village — Sining at Kultura malapit sa Stone Kingdom',
    titleEn: 'Tam-awan Village — Art & Culture near the Stone Kingdom',
    descFil: 'Tam-awan Village Baguio: hillside art-and-culture stop na pinakamadaling ipares sa Igorot Stone Kingdom.',
    descEn: 'Tam-awan Village Baguio: a hillside art-and-culture stop easiest to pair with Igorot Stone Kingdom.',
    h1Fil: 'Tam-awan Village',
    h1En: 'Tam-awan Village',
    introFil: 'Ang Tam-awan Village ay hillside art-and-culture stop na may mga kubo, galleries at café; pinakamadaling ipares sa Stone Kingdom dahil nasa parehong Pinsao area.',
    introEn: 'Tam-awan Village is a hillside art-and-culture stop with huts, galleries and a café; the easiest to pair with the Stone Kingdom because it is in the same Pinsao area.',
    sections: [
      { hFil: 'Ano ang nandoon', hEn: 'What is there', bFil: 'May mga reconstructed Cordillera huts, art galleries, at workshop na nagpapakita ng highland art. Mabagal na lakad ang inirerekomenda para sambahin ang bawat space.', bEn: 'There are reconstructed Cordillera huts, art galleries and workshops showing highland art. A slow walk is recommended to appreciate each space.' },
      { hFil: 'Bakit ipares sa Stone Kingdom', hEn: 'Why pair with the Stone Kingdom', bFil: 'Pareho silang nasa Pinsao at may creative/Cordillera theme, kaya isang short ride lang ang pagitan. Mainam na gawing lunch + culture stop.', bEn: 'Both are in Pinsao with a creative/Cordillera theme, just a short ride apart. Ideal as a lunch + culture stop.' },
      { hFil: 'Paunawa', hEn: 'Note', bFil: 'Ang Tam-awan ay separate attraction na may sariling entrance at oras. Kumpirmahin sa kanilang opisyal na channel bago pumunta.', bEn: 'Tam-awan is a separate attraction with its own entrance and hours. Confirm via their official channel before going.' }
    ],
    faqs: [
      { qFil: 'Malayo ba sa Stone Kingdom?', qEn: 'Is it far from the Stone Kingdom?', aFil: 'Hindi—ilang minuto lang ang layo sa Tam-awan / Longlong area, pero may ahon kaya tricycle o jeep ang praktikal.', aEn: 'No—just a few minutes in the Tam-awan / Longlong area, but uphill so a tricycle or jeep is practical.' },
      { qFil: 'May bayad ba?', qEn: 'Is there a fee?', aFil: 'May sariling entrance fee ang Tam-awan; kumpirmahin sa opisyal na listing ang kasalukuyang rate.', aEn: 'Tam-awan has its own entrance fee; confirm the current rate on the official listing.' },
      { qFil: 'Pwede bang mag-coffee?', qEn: 'Can I get coffee there?', aFil: 'Oo, may café sa loob na pwede mong pahingahan pagkatapos ng arts walk.', aEn: 'Yes, there is a café inside where you can rest after the arts walk.' }
    ],
    related: ['things-to-do-near', 'lourdes-grotto', 'mirador-park', 'baguio-coffee-cafes']
  },
  'lourdes-grotto': {
    slug: 'lourdes-grotto',
    group: 'nearby',
    titleFil: 'Lourdes Grotto Baguio — Hagdan at City View',
    titleEn: 'Lourdes Grotto Baguio — Stairs & City View',
    descFil: 'Lourdes Grotto Baguio: kilala sa mahabang paakyat at city views, isang outdoor stop malapit sa Stone Kingdom.',
    descEn: 'Lourdes Grotto Baguio: known for its long climb and city views, an outdoor stop near the Stone Kingdom.',
    h1Fil: 'Lourdes Grotto',
    h1En: 'Lourdes Grotto',
    introFil: 'Ang Lourdes Grotto ay kilala sa mahabang paakyat at city views—isa pang outdoor stop para sa mga handa sa hagdan, at madaling ipares sa Stone Kingdom sa isang araw.',
    introEn: 'Lourdes Grotto is known for its long climb and city views—another outdoor stop for those ready for stairs, and easy to pair with the Stone Kingdom in one day.',
    sections: [
      { hFil: 'Ang hagdan', hEn: 'The staircase', bFil: 'May mahabang flight ng hagdan patungo sa grotto; dahan-dahan kung may senior o bata. May stations of the cross sa gilid.', bEn: 'There is a long flight of stairs to the grotto; go slowly with seniors or kids. Stations of the cross line the side.' },
      { hFil: 'City view', hEn: 'City view', bFil: 'Sa taas ay tanaw ang bahagi ng Baguio. Maganda ito sa umaga o malamig na hapon, bago dumilim.', bEn: 'At the top you see part of Baguio. Nice in the morning or cool afternoon, before dark.' },
      { hFil: 'Paunawa', hEn: 'Note', bFil: 'Ito ay separate religious site; maging tahimik at magalang. Kumpirmahin ang oras bago pumunta.', bEn: 'This is a separate religious site; be quiet and respectful. Confirm hours before going.' }
    ],
    faqs: [
      { qFil: 'Ilang hagdan?', qEn: 'How many steps?', aFil: 'Marami (daan-daan); hindi eksaktong bilang ang ibinabahagi rito. Mag-pace at mag-break kung kailangan.', aEn: 'Many (hundreds); an exact count is not provided here. Pace yourself and take breaks as needed.' },
      { qFil: 'Malapit ba sa Stone Kingdom?', qEn: 'Is it near the Stone Kingdom?', aFil: 'Pareho silang nasa hill side ng Baguio; isang short ride ang pagitan. Pwedeng i-sequence sa afternoon.', aEn: 'Both are on Baguio’s hill side; a short ride apart. Can be sequenced in the afternoon.' },
      { qFil: 'May bayad ba?', qEn: 'Is there a fee?', aFil: 'Karaniwang walang entrance fee, pero may donation box. Magdala ng coins kung gustong mag-ambag.', aEn: 'Usually no entrance fee, but there is a donation box. Bring coins if you wish to contribute.' }
    ],
    related: ['tam-awan-village', 'mirador-park', 'things-to-do-near', 'full-day-culture-loop']
  },
  'mirador-park': {
    slug: 'mirador-park',
    group: 'nearby',
    titleFil: 'Mirador Heritage & Eco-Spirituality Park',
    titleEn: 'Mirador Heritage & Eco-Spirituality Park',
    descFil: 'Mirador Park Baguio: tahimik na elevated garden at viewpoint na malapit sa Stone Kingdom.',
    descEn: 'Mirador Park Baguio: a quiet elevated garden and viewpoint near the Stone Kingdom.',
    h1Fil: 'Mirador Park',
    h1En: 'Mirador Park',
    introFil: 'Ang Mirador Heritage and Eco-Spirituality Park ay tahimik na elevated park na may gardens at panoramic viewpoints sa Baguio—magandang pahinga bago o pagkatapos ng hill attractions.',
    introEn: 'Mirador Heritage and Eco-Spirituality Park is a quiet elevated park with gardens and panoramic viewpoints in Baguio—a good rest before or after the hill attractions.',
    sections: [
      { hFil: 'Viewpoint at garden', hEn: 'Viewpoint & garden', bFil: 'May elevated deck na nagbibigay ng malawak na view ng lungsod at bundok. Mainam para sa relaxed na lakad kumpara sa matarik na Stone Kingdom.', bEn: 'There is an elevated deck giving a wide view of the city and mountains. Good for a relaxed walk versus the steep Stone Kingdom.' },
      { hFil: 'Eco-spirituality theme', hEn: 'Eco-spirituality theme', bFil: 'Ang park ay may reflective at meditation spaces; maging tahimik at magalang sa ibang bisita.', bEn: 'The park has reflective and meditation spaces; be quiet and respectful of other visitors.' },
      { hFil: 'Paunawa', hEn: 'Note', bFil: 'Separate site ito na may sariling oras at patakaran. Kumpirmahin sa opisyal na channel bago pumunta.', bEn: 'This is a separate site with its own hours and rules. Confirm via the official channel before going.' }
    ],
    faqs: [
      { qFil: 'Mas madali ba kaysa Stone Kingdom?', qEn: 'Is it easier than the Stone Kingdom?', aFil: 'Oo, mas patag at hindi matarik; mainam para sa low-mobility visitors.', aEn: 'Yes, flatter and less steep; good for low-mobility visitors.' },
      { qFil: 'May bayad ba?', qEn: 'Is there a fee?', aFil: 'Kumpirmahin sa opisyal na listing; madalas ay libre o mababang donation.', aEn: 'Confirm on the official listing; often free or a small donation.' },
      { qFil: 'Pwede bang pagsamahin sa Grotto?', qEn: 'Can I combine it with the Grotto?', aFil: 'Oo, pareho silang hill-side stops at maaaring i-sequence sa hapon.', aEn: 'Yes, both are hill-side stops and can be sequenced in the afternoon.' }
    ],
    related: ['lourdes-grotto', 'tam-awan-village', 'burnham-park', 'things-to-do-near']
  },
  'burnham-park': {
    slug: 'burnham-park',
    group: 'nearby',
    titleFil: 'Burnham Park Baguio — Sentro ng Lungsod',
    titleEn: 'Burnham Park Baguio — City Center',
    descFil: 'Burnham Park Baguio: classic city stop para sa patag na lakaran, lawa at pahinga bago o pagkatapos ng hill attractions.',
    descEn: 'Burnham Park Baguio: a classic city stop for flat walks, a lake and rest before or after the hill attractions.',
    h1Fil: 'Burnham Park',
    h1En: 'Burnham Park',
    introFil: 'Ang Burnham Park ay classic Baguio stop sa centro para sa mas patag na lakaran, lawa at pahinga bago o pagkatapos ng mga hill attraction tulad ng Stone Kingdom.',
    introEn: 'Burnham Park is a classic Baguio stop in the center for flatter walks, a lake and rest before or after hill attractions like the Stone Kingdom.',
    sections: [
      { hFil: 'Ano ang gagawin', hEn: 'What to do', bFil: 'Pwedeng mag-lakad sa palibot ng lake, mag-boat, o huminga sa garden. Patag ito kaya accessible para sa stroller at wheelchair.', bEn: 'You can walk around the lake, ride a boat, or relax in the garden. It is flat, so accessible for strollers and wheelchairs.' },
      { hFil: 'Kailan pumunta', hEn: 'When to go', bFil: 'Maganda sa gabi (ilaw at cool air) o umaga (less crowd). Iwas sa weekend peak kung ayaw ng siksikan.', bEn: 'Nice at night (lights and cool air) or morning (less crowd). Avoid weekend peaks if you dislike crowds.' },
      { hFil: 'Paunawa', hEn: 'Note', bFil: 'Ito ay public city park; may sariling rules. Magbantay ng gamit at i-zero waste.', bEn: 'This is a public city park with its own rules. Watch your belongings and practice zero waste.' }
    ],
    faqs: [
      { qFil: 'Malayo ba sa Stone Kingdom?', qEn: 'Is it far from the Stone Kingdom?', aFil: 'Humigit-kumulang 15–25 min mula Pinsao; gawing city stop sa gabi pagkatapos ng hill attractions.', aEn: 'About 15–25 min from Pinsao; make it a city stop at night after the hill attractions.' },
      { qFil: 'May boat ba?', qEn: 'Are there boats?', aFil: 'Oo, may boat rental sa lake; may bayad at oras, kumpirmahin sa site.', aEn: 'Yes, there is boat rental on the lake; there is a fee and hours, confirm on site.' },
      { qFil: 'Accessible ba?', qEn: 'Is it accessible?', aFil: 'Oo, patag at wheelchair/stroller-friendly kumpara sa Stone Kingdom.', aEn: 'Yes, flat and wheelchair/stroller-friendly compared to the Stone Kingdom.' }
    ],
    related: ['mirador-park', 'mines-view-park', 'wright-park', 'things-to-do-near']
  },
  'mines-view-park': {
    slug: 'mines-view-park',
    group: 'nearby',
    titleFil: 'Mines View Park Baguio — Viewpoint',
    titleEn: 'Mines View Park Baguio — Viewpoint',
    descFil: 'Mines View Park Baguio: famous overlook na pwedeng isama sa culture loop malapit sa Stone Kingdom.',
    descEn: 'Mines View Park Baguio: a famous overlook you can add to a culture loop near the Stone Kingdom.',
    h1Fil: 'Mines View Park',
    h1En: 'Mines View Park',
    introFil: 'Ang Mines View Park ay isa sa mga kilalang viewpoint sa Baguio na nagbibigay ng malawak na tanawin ng mga bundok at valley. Madaling idagdag sa isang hill loop kasama ang Stone Kingdom.',
    introEn: 'Mines View Park is one of Baguio’s famous overlooks offering a wide view of mountains and valleys. Easy to add to a hill loop with the Stone Kingdom.',
    sections: [
      { hFil: 'Ang viewpoint', hEn: 'The viewpoint', bFil: 'May deck kung saan kita ang mining valley at kabundukan. Maagang umaga ang pinakamalinaw na view.', bEn: 'There is a deck where you see the mining valley and mountains. Early morning gives the clearest view.' },
      { hFil: 'Souvenir stalls', hEn: 'Souvenir stalls', bFil: 'May mga stall ng pasalubong at costume photo ops sa paligid. Mag-compare ng presyo at i-respeto ang vendors.', bEn: 'There are pasalubong stalls and costume photo ops around. Compare prices and respect vendors.' },
      { hFil: 'Paunawa', hEn: 'Note', bFil: 'Separate site ito; maaaring may entrance o parking fee. Kumpirmahin sa opisyal na listing.', bEn: 'This is a separate site; there may be an entrance or parking fee. Confirm on the official listing.' }
    ],
    faqs: [
      { qFil: 'Malapit ba sa Stone Kingdom?', qEn: 'Is it near the Stone Kingdom?', aFil: 'Pareho silang hill-side attractions; isang short drive ang pagitan. Pwedeng i-sequence.', aEn: 'Both are hill-side attractions; a short drive apart. Can be sequenced.' },
      { qFil: 'Anong oras bukas?', qEn: 'What are the hours?', aFil: 'Karaniwang bukas sa umaga hanggang gabi; kumpirmahin sa opisyal na listing.', aEn: 'Generally open morning to evening; confirm on the official listing.' },
      { qFil: 'May entrance fee?', qEn: 'Is there an entrance fee?', aFil: 'Posibleng may parking o minimal fee; i-check sa gate.', aEn: 'There may be a parking or minimal fee; check at the gate.' }
    ],
    related: ['burnham-park', 'wright-park', 'baguio-botanical-garden', 'full-day-culture-loop']
  },
  'baguio-botanical-garden': {
    slug: 'baguio-botanical-garden',
    group: 'nearby',
    titleFil: 'Baguio Botanical Garden — Hardin at Lakaran',
    titleEn: 'Baguio Botanical Garden — Garden & Walk',
    descFil: 'Baguio Botanical Garden: green space para sa relaxed na lakaran malapit sa city loop.',
    descEn: 'Baguio Botanical Garden: a green space for a relaxed walk near the city loop.',
    h1Fil: 'Botanical Garden',
    h1En: 'Botanical Garden',
    introFil: 'Ang Baguio Botanical Garden ay green space para sa relaxed na lakaran at mga plant display—magandang buffer stop sa pagitan ng hill attractions at city.',
    introEn: 'The Baguio Botanical Garden is a green space for relaxed walks and plant displays—a good buffer stop between hill attractions and the city.',
    sections: [
      { hFil: 'Ano ang nandoon', hEn: 'What is there', bFil: 'May themed gardens, pathways, at mga sculpture. Patag hanggang gentle slope, kaya mas accessible kaysa Stone Kingdom.', bEn: 'There are themed gardens, pathways and sculptures. Flat to gentle slope, so more accessible than the Stone Kingdom.' },
      { hFil: 'Kailan pumunta', hEn: 'When to go', bFil: 'Umaga para sa cool air at less crowd. Maganda rin sa hapon bago ang Session Road dinner.', bEn: 'Morning for cool air and fewer crowds. Also nice in the afternoon before a Session Road dinner.' },
      { hFil: 'Paunawa', hEn: 'Note', bFil: 'Separate public garden; may sariling oras at rules. Mag-zero waste at bantayan ang gamit.', bEn: 'A separate public garden with its own hours and rules. Practice zero waste and watch belongings.' }
    ],
    faqs: [
      { qFil: 'May bayad?', qEn: 'Is there a fee?', aFil: 'Kumpirmahin sa opisyal na listing; madalas ay libre o minimal.', aEn: 'Confirm on the official listing; often free or minimal.' },
      { qFil: 'Pwede bang pagsamahin sa Stone Kingdom?', qEn: 'Can I combine it with the Stone Kingdom?', aFil: 'Oo, gawing city-side stop pagkatapos ng Pinsao attractions.', aEn: 'Yes, make it a city-side stop after the Pinsao attractions.' },
      { qFil: 'Accessible ba?', qEn: 'Is it accessible?', aFil: 'Higit na accessible kaysa Stone Kingdom, pero may bahaging may slope.', aEn: 'More accessible than the Stone Kingdom, though some parts have a slope.' }
    ],
    related: ['burnham-park', 'mines-view-park', 'wright-park', 'things-to-do-near']
  },
  'wright-park': {
    slug: 'wright-park',
    group: 'nearby',
    titleFil: 'Wright Park Baguio — Kabayo at Lakaran',
    titleEn: 'Wright Park Baguio — Horses & Walk',
    descFil: 'Wright Park Baguio: kilala sa horse riding at pool of pencils, malapit sa Mines View loop.',
    descEn: 'Wright Park Baguio: known for horse riding and the pool of pencils, near the Mines View loop.',
    h1Fil: 'Wright Park',
    h1En: 'Wright Park',
    introFil: 'Ang Wright Park ay kilala sa horse riding at ang "pool of pencils" (long pond). Madalas itong isinasama sa hill loop kasama ang Mines View Park, sa parehong banda ng Baguio.',
    introEn: 'Wright Park is known for horse riding and the "pool of pencils" (a long pond). It is often included in a hill loop with Mines View Park, on the same side of Baguio.',
    sections: [
      { hFil: 'Horse riding', hEn: 'Horse riding', bFil: 'May mga kabayo at pony para sa short ride; may bayad at fixed route. Magtanong sa rider ng presyo bago sumakay.', bEn: 'There are horses and ponies for a short ride; there is a fee and fixed route. Ask the rider the price before riding.' },
      { hFil: 'Pool of pencils', hEn: 'Pool of pencils', bFil: 'Ang mahabang pond ay magandang spot para sa photos at isang relaxed na lakaran sa palibot.', bEn: 'The long pond is a nice spot for photos and a relaxed walk around it.' },
      { hFil: 'Paunawa', hEn: 'Note', bFil: 'Separate public park; maging maingat sa mga hayop at bantayan ang bata.', aEn: 'A separate public park; be careful around the animals and watch children.' }
    ],
    faqs: [
      { qFil: 'Magkano ang horse ride?', qEn: 'How much is the horse ride?', aFil: 'Nag-iiba ang rate; magtanong at mag-usap bago sumakay. Iwas sa "package" na hindi malinaw.', aEn: 'The rate varies; ask and agree before riding. Avoid unclear "packages."' },
      { qFil: 'Malapit ba sa Stone Kingdom?', qEn: 'Is it near the Stone Kingdom?', aFil: 'Pareho silang hill-side, pero ang Wright Park ay sa kabilang banda (Mines View side). Isang short drive ang pagitan.', aEn: 'Both are hill-side, but Wright Park is on the other side (Mines View side). A short drive apart.' },
      { qFil: 'May bayad sa park?', qEn: 'Is there a park fee?', aFil: 'Karaniwang walang entrance fee sa park; ang horse ride lang ang may bayad.', aEn: 'Usually no entrance fee to the park; only the horse ride costs.' }
    ],
    related: ['mines-view-park', 'baguio-botanical-garden', 'burnham-park', 'full-day-culture-loop']
  },
  'baguio-night-market': {
    slug: 'baguio-night-market',
    group: 'nearby',
    titleFil: 'Baguio Night Market at Session Road',
    titleEn: 'Baguio Night Market & Session Road',
    descFil: 'Baguio night market, Session Road at gabi: kain, shopping at night life pagkatapos ng Stone Kingdom trip.',
    descEn: 'Baguio night market, Session Road at night: food, shopping and nightlife after your Stone Kingdom trip.',
    h1Fil: 'Night Market at Session Road',
    h1En: 'Night Market & Session Road',
    introFil: 'Sa gabi, ang Session Road at paligid nito ay nagiging night market—food stalls, ukay-ukay at shopping. Magandang tapos sa isang araw sa Baguio.',
    introEn: 'At night, Session Road and surroundings become a night market—food stalls, thrift shopping and browsing. A good way to end a Baguio day.',
    sections: [
      { hFil: 'Ano ang bumili', hEn: 'What to buy', bFil: 'May ukay-ukay, local snacks, at pasalubong sa night market. Mag-compare at mag-budget; iwas sa overpriced tourist items.', bEn: 'There is thrift shopping, local snacks and pasalubong at the night market. Compare and budget; avoid overpriced tourist items.' },
      { hFil: 'Pagkain sa gabi', hEn: 'Night food', bFil: 'Ang street food at grilled items ay sikat; piliin ang luto at mainit. Magdala ng cash (small bills).', bEn: 'Street food and grilled items are popular; choose cooked and hot. Carry cash (small bills).' },
      { hFil: 'Safety tips', hEn: 'Safety tips', bFil: 'Siksik ang tao; bantayan ang gamit at huwag magpakalasing nang sobra. Mag-commute nang maaga pabalik sa lodging.', aEn: 'It gets crowded; watch belongings and avoid overdrinking. Commute back to lodging early.' }
    ],
    faqs: [
      { qFil: 'Anong oras nagsisimula?', qEn: 'What time does it start?', aFil: 'Karaniwang gabi (~6 PM) hanggang hatinggabi, lalo na weekend at holiday.', aEn: 'Usually evening (~6 PM) until midnight, especially weekends and holidays.' },
      { qFil: 'Malapit ba sa Stone Kingdom?', qEn: 'Is it near the Stone Kingdom?', aFil: 'Nasa city center ito (~15–25 min mula Pinsao); gawing gabi stop.', aEn: 'It is in the city center (~15–25 min from Pinsao); make it an evening stop.' },
      { qFil: 'Pwede bang pumunta ng family?', qEn: 'Is it family-friendly?', aFil: 'Oo, pero maingay at siksik; bantayan ang bata at iwas sa late hours.', aEn: 'Yes, but noisy and crowded; watch children and avoid late hours.' }
    ],
    related: ['baguio-food-trip', 'market-and-souvenir', 'burnham-park', '2-day-baguio']
  },

  // ===================== E. ITINERARIES =====================
  'half-day-itinerary': {
    slug: 'half-day-itinerary',
    group: 'itinerary',
    titleFil: 'Half-Day Itinerary — Stone Kingdom + Tam-awan',
    titleEn: 'Half-Day Itinerary — Stone Kingdom + Tam-awan',
    descFil: '2–3 oras na plano: Igorot Stone Kingdom sa umaga, Tam-awan Village para sa lunch, bago bumalik sa sentro.',
    descEn: 'A 2–3 hour plan: Igorot Stone Kingdom in the morning, Tam-awan Village for lunch, before returning to the center.',
    h1Fil: 'Half-Day Itinerary',
    h1En: 'Half-Day Itinerary',
    introFil: 'Kung limitado ang oras, ito ang pinakasulit na half-day: Stone Kingdom sa maagang umaga, tapos Tam-awan para sa culture at lunch, tapos uwi bago dumilim.',
    introEn: 'If time is limited, this is the most efficient half-day: Stone Kingdom in the early morning, then Tam-awan for culture and lunch, then home before dark.',
    sections: [
      { hFil: '7:00–9:00 AM — Stone Kingdom', hEn: '7:00–9:00 AM — Stone Kingdom', bFil: 'Dumating sa opening para tahimik ang terraces. Akyatin ang main route (1–2 oras) at kumuha ng photos sa viewpoint.', bEn: 'Arrive at opening for quiet terraces. Climb the main route (1–2 hours) and shoot photos at the viewpoint.' },
      { hFil: '9:30–11:30 AM — Tam-awan', hEn: '9:30–11:30 AM — Tam-awan', bFil: 'Short ride papuntang Tam-awan Village para sa huts, galleries at café. Mag-lunch sa area bago mag-init.', bEn: 'A short ride to Tam-awan Village for huts, galleries and a café. Lunch in the area before it gets warm.' },
      { hFil: '12:00 NN — balik centro', hEn: '12:00 NN — back to center', bFil: 'Bumaba sa city para sa pahinga o diretso sa lodging. Tapos na ang hill loop nang hindi pagod.', bEn: 'Go down to the city for rest or straight to lodging. The hill loop is done without exhaustion.' }
    ],
    faqs: [
      { qFil: 'Kasya ba sa 3 oras?', qEn: 'Does it fit in 3 hours?', aFil: 'Oo kung maaga ang start at mabilis ang transfer. Dagdahan ng buffer kung may photo-heavy pace.', aEn: 'Yes if you start early and transfer quickly. Add buffer for a photo-heavy pace.' },
      { qFil: 'Pwede bang commute?', qEn: 'Can I use public transport?', aFil: 'Oo—jeep/Tam-awan route papunta, taxi pabalik. Mas simple ang Grab para sa round trip.', aEn: 'Yes—jeep/Tam-awan route there, taxi back. Grab is simpler for the round trip.' },
      { qFil: 'Anong month pinakamaganda?', qEn: 'Which month is best?', aFil: 'Ang cool-dry months (Nov–Feb) ay pinakakomportable para sa umagang lakad.', aEn: 'The cool-dry months (Nov–Feb) are most comfortable for a morning walk.' }
    ],
    related: ['full-day-culture-loop', 'family-itinerary', 'first-time-tips', 'tam-awan-village']
  },
  'full-day-culture-loop': {
    slug: 'full-day-culture-loop',
    group: 'itinerary',
    titleFil: 'Full-Day Baguio Culture Loop',
    titleEn: 'Full-Day Baguio Culture Loop',
    descFil: '6–8 oras na ruta: Stone Kingdom, Tam-awan, Lourdes Grotto, Mirador at Burnham sa gabi.',
    descEn: 'A 6–8 hour route: Stone Kingdom, Tam-awan, Lourdes Grotto, Mirador and Burnham at night.',
    h1Fil: 'Full-Day Culture Loop',
    h1En: 'Full-Day Culture Loop',
    introFil: 'Kung buong araw ang available, ito ang kumpletong hill-to-city loop: Stone Kingdom + Tam-awan sa umaga, Grotto o Mirador sa hapon, at Burnham sa gabi.',
    introEn: 'If you have a full day, this is the complete hill-to-city loop: Stone Kingdom + Tam-awan in the morning, Grotto or Mirador in the afternoon, and Burnham at night.',
    sections: [
      { hFil: '7:00–9:00 AM — Stone Kingdom', hEn: '7:00–9:00 AM — Stone Kingdom', bFil: 'Simulan sa Pinsao habang tahimik. Akyatin ang terraces at kumuha ng golden-morning shots.', bEn: 'Start in Pinsao while it is quiet. Climb the terraces and catch golden-morning shots.' },
      { hFil: '9:30–12:00 NN — Tam-awan at lunch', hEn: '9:30–12:00 NN — Tam-awan & lunch', bFil: 'Short ride sa Tam-awan para sa culture at Cordilleran lunch sa area.', bEn: 'A short ride to Tam-awan for culture and a Cordilleran lunch in the area.' },
      { hFil: '1:30–4:00 PM — Grotto o Mirador', hEn: '1:30–4:00 PM — Grotto or Mirador', bFil: 'Pumili ng Lourdes Grotto (hagdan + city view) o Mirador (relaxed garden). Kapwa nasa hill side.', bEn: 'Choose Lourdes Grotto (stairs + city view) or Mirador (relaxed garden). Both are on the hill side.' },
      { hFil: '5:30–8:00 PM — Burnham sa gabi', hEn: '5:30–8:00 PM — Burnham at night', bFil: 'Bumaba sa centro para sa lake walk, dinner sa Session Road, at cool night air.', bEn: 'Go down to the center for a lake walk, dinner on Session Road, and cool night air.' }
    ],
    faqs: [
      { qFil: 'Ilang oras lahat?', qEn: 'How long total?', aFil: 'Humigit-kumulang 6–8 oras kasama biyahe at lunch.', aEn: 'About 6–8 hours including travel and lunch.' },
      { qFil: 'Pwede bang i-include ang Mines View?', qEn: 'Can I include Mines View?', aFil: 'Oo, pero magdadag ng kabilang banda ng bundok; mas ok sa hiwalay na half-day kung limited ang oras.', aEn: 'Yes, but it adds the other hill side; better as a separate half-day if time is limited.' },
      { qFil: 'Anong buwan pinakamaganda?', qEn: 'Which month is best?', aFil: 'Ang cool-dry months (Nov–Feb) ay pinakakomportable; iwasan ang peak ng Panagbenga kung ayaw ng crowd.', aEn: 'The cool-dry months (Nov–Feb) are most comfortable; avoid the Panagbenga peak if you dislike crowds.' }
    ],
    related: ['half-day-itinerary', 'family-itinerary', 'photography-itinerary', '2-day-baguio']
  },
  'family-itinerary': {
    slug: 'family-itinerary',
    group: 'itinerary',
    titleFil: 'Baguio Family Itinerary — Stone Kingdom with Kids',
    titleEn: 'Baguio Family Itinerary — Stone Kingdom with Kids',
    descFil: 'Kid-friendly Baguio day na may Igorot Stone Kingdom: pacing, rest stops at stroller-friendly na routes.',
    descEn: 'A kid-friendly Baguio day with Igorot Stone Kingdom: pacing, rest stops and stroller-friendly routes.',
    h1Fil: 'Family Itinerary',
    h1En: 'Family Itinerary',
    introFil: 'Ang Stone Kingdom ay may hagdan at ahon, kaya kailangan ng pacing kung may bata. Ito ang relaxed na plano na may stroller-friendly na buffer stops.',
    introEn: 'The Stone Kingdom has stairs and hills, so it needs pacing with kids. This is a relaxed plan with stroller-friendly buffer stops.',
    sections: [
      { hFil: 'Umaga: Stone Kingdom (slow)', hEn: 'Morning: Stone Kingdom (slow)', bFil: 'Dumating nang maaga, umakyat nang dahan-dahan, at gumamit ng sling/stroller sa patag na bahagi. Mag-break bago ang viewpoint.', bEn: 'Arrive early, climb slowly, and use a sling/stroller on the flat parts. Take a break before the viewpoint.' },
      { hFil: 'Tanghali: Tam-awan + lunch', hEn: 'Midday: Tam-awan + lunch', bFil: 'Short ride sa Tam-awan para sa open space at café; mas ok ang bata sa malawak na area kaysa sa siksik na hill.', bEn: 'A short ride to Tam-awan for open space and a café; kids do better in the wide area than the crowded hill.' },
      { hFil: 'Hapon: Burnham (flat)', hEn: 'Afternoon: Burnham (flat)', bFil: 'Bumaba sa Burnham Park para sa lake walk at boat ride—patag at stroller-friendly.', bEn: 'Go down to Burnham Park for a lake walk and boat ride—flat and stroller-friendly.' }
    ],
    faqs: [
      { qFil: 'Stroller-friendly ba ang Stone Kingdom?', qEn: 'Is the Stone Kingdom stroller-friendly?', aFil: 'Hindi fully—maraming hagdan, kaya sling o carrier ang mas praktikal sa taas. Ang baba ay may patag na courtyard.', aEn: 'Not fully—there are many stairs, so a sling or carrier is more practical up top. The base has a flat courtyard.' },
      { qFil: 'Safe ba para sa toddler?', qEn: 'Is it safe for toddlers?', aFil: 'Oo kung bantay at hawak; maalog ang ilang hagdan. Iwas sa edge ng viewpoint.', bEn: 'Yes if supervised and held; some stairs are uneven. Keep away from the viewpoint edge.' },
      { qFil: 'Pwede bang i-include ang Mines View?', qEn: 'Can I include Mines View?', aFil: 'Oo, pero limitado ang oras; gawing optional stop kung hindi pagod ang bata.', aEn: 'Yes, but keep it optional if the kids are tired.' }
    ],
    related: ['half-day-itinerary', 'full-day-culture-loop', 'accessibility', 'things-to-do-near']
  },
  'photography-itinerary': {
    slug: 'photography-itinerary',
    group: 'itinerary',
    titleFil: 'Baguio Photography Itinerary — Stone Kingdom Shots',
    titleEn: 'Baguio Photography Itinerary — Stone Kingdom Shots',
    descFil: 'Photo route para sa Igorot Stone Kingdom: golden hour, composition tips at related viewpoints.',
    descEn: 'A photo route for Igorot Stone Kingdom: golden hour, composition tips and related viewpoints.',
    h1Fil: 'Photography Itinerary',
    h1En: 'Photography Itinerary',
    introFil: 'Kung hobby mo ang photography, ito ang plano para sa best light at shots sa Stone Kingdom at kalapit na viewpoint.',
    introEn: 'If photography is your hobby, this is the plan for the best light and shots at the Stone Kingdom and nearby viewpoints.',
    sections: [
      { hFil: '7:00–9:00 AM — golden terraces', hEn: '7:00–9:00 AM — golden terraces', bFil: 'Maagang oras para sa malambot na ilaw sa stone tiers. Iwas sa mga turista sa entrance.', bEn: 'Early light for soft illumination on the stone tiers. Avoid the entrance crowds.' },
      { hFil: '9:30–11:00 AM — Tam-awan frames', hEn: '9:30–11:00 AM — Tam-awan frames', bFil: 'Kumuha ng cultural frames sa huts at gardens bago lumakas ang araw.', bEn: 'Capture cultural frames at the huts and gardens before the sun strengthens.' },
      { hFil: '3:00–5:00 PM — afternoon backlight', hEn: '3:00–5:00 PM — afternoon backlight', bFil: 'Bumalik para sa warm backlight sa terraces; magdala ng ND filter kung may.', bEn: 'Return for warm backlight on the terraces; bring an ND filter if you have one.' }
    ],
    faqs: [
      { qFil: 'Pwede ba ang tripod?', qEn: 'Are tripods allowed?', aFil: 'Karaniwang oo sa open areas, pero iwas sa daanan. Iwasan ang setup na nakakaharang.', aEn: 'Usually yes in open areas, but keep clear of walkways. Avoid blocking setups.' },
      { qFil: 'Anong lens ang ok?', qEn: 'What lens works well?', aFil: 'Ang wide-angle (16–35mm) ay ok sa tight terraces; ang 50mm+ naman para sa compressed mountain shots.', aEn: 'A wide-angle (16–35mm) suits the tight terraces; 50mm+ for compressed mountain shots.' },
      { qFil: 'May drone ba?', qEn: 'Are drones allowed?', aFil: 'Karaniwang bawal o limitado sa attraction at Baguio airspace. Magtanong sa staff.', aEn: 'Generally prohibited or restricted inside and across Baguio airspace. Ask staff.' }
    ],
    related: ['photos', 'mines-view-park', 'full-day-culture-loop', 'things-to-do-near']
  },
  'rainy-day-baguio': {
    slug: 'rainy-day-baguio',
    group: 'itinerary',
    titleFil: 'Baguio Rainy Day — Plan B with Stone Kingdom',
    titleEn: 'Baguio Rainy Day — Plan B with the Stone Kingdom',
    descFil: 'Anong gawin kapag umulan sa Baguio: indoor stops at flexible Stone Kingdom timing.',
    descEn: 'What to do when it rains in Baguio: indoor stops and flexible Stone Kingdom timing.',
    h1Fil: 'Rainy Day Plan',
    h1En: 'Rainy Day Plan',
    introFil: 'Ang Baguio ay madalas umulan; may plan B na may covered o indoor options, at flexible window para sa Stone Kingdom.',
    introEn: 'Baguio rains often; have a Plan B with covered or indoor options, plus a flexible window for the Stone Kingdom.',
    sections: [
      { hFil: 'Timing ang Stone Kingdom', hEn: 'Timing the Stone Kingdom', bFil: 'Pumunta nang maaga bago ang tanghaling ulan, o sa hapon kapag may break. Iwas sa basang hagdan.', bEn: 'Go early before midday rain, or late afternoon during a break. Avoid the wet stairs.' },
      { hFil: 'Indoor stops', hEn: 'Indoor stops', bFil: 'Ang Tam-awan café, city malls at museums ay covered options kapag kumukulog.', bEn: 'Tam-awan café, city malls and museums are covered options during showers.' },
      { hFil: 'Gear tips', hEn: 'Gear tips', bFil: 'Magdala ng rain jacket, lens cloth, at anti-slip shoes. Iwas sa drone kapag basa.', bEn: 'Bring a rain jacket, lens cloth and slip-resistant shoes. Skip the drone when wet.' }
    ],
    faqs: [
      { qFil: 'Sarado ba kapag maulan?', qEn: 'Is it closed when raining?', aFil: 'Hindi laging sarado, pero delikado ang hagdan; mas mabuting iwas ang malakas na ulan.', aEn: 'Not always closed, but the stairs get dangerous; avoid heavy rain.' },
      { qFil: 'May covered area ba?', qEn: 'Is there a covered area?', aFil: 'Limitado; ang courtyard ay open. Maglaan ng jacket kung uulan.', aEn: 'Limited; the courtyard is open. Bring a jacket if rain is likely.' },
      { qFil: 'Pwede bang i-refund?', qEn: 'Can I get a refund?', aFil: 'Depende sa policy sa gate; tanong muna bago bumili ng ticket.', aEn: 'Depends on the gate policy; ask before buying a ticket.' }
    ],
    related: ['best-time-to-visit', 'baguio-temperature', 'things-to-do-near', 'full-day-culture-loop']
  },
  '2-day-baguio': {
    slug: '2-day-baguio',
    group: 'itinerary',
    titleFil: '2-Day Baguio Itinerary — Stone Kingdom + More',
    titleEn: '2-Day Baguio Itinerary — Stone Kingdom + More',
    descFil: 'Two-day Baguio plan na may Stone Kingdom, culture loop at night market.',
    descEn: 'A two-day Baguio plan with the Stone Kingdom, a culture loop and the night market.',
    h1Fil: '2-Day Itinerary',
    h1En: '2-Day Itinerary',
    introFil: 'Kung 2 araw ang available, maaari mong pagsamahin ang Stone Kingdom, culture loop, at night market nang hindi nagmamadali.',
    introEn: 'With two days, you can combine the Stone Kingdom, a culture loop and the night market without rushing.',
    sections: [
      { hFil: 'Day 1 — Hill side', hEn: 'Day 1 — Hill side', bFil: 'Stone Kingdom + Tam-awan sa umaga, Grotto o Mirador sa hapon, Burnham + night market sa gabi.', bEn: 'Stone Kingdom + Tam-awan in the morning, Grotto or Mirador in the afternoon, Burnham + night market at night.' },
      { hFil: 'Day 2 — Mines View banda', hEn: 'Day 2 — Mines View side', bFil: 'Mines View Park, Wright Park at Botanical Garden sa umaga, city market at Session Road sa tanghali, museum o café sa hapon.', bEn: 'Mines View Park, Wright Park and Botanical Garden in the morning, city market and Session Road at midday, museum or café in the afternoon.' },
      { hFil: 'Pacing tips', hEn: 'Pacing tips', bFil: 'Huwag pagsabayin ang dalawang hill sides sa iisang araw; hiwa-hiwalayin para hindi pagod.', bEn: 'Do not combine both hill sides in one day; split them to avoid exhaustion.' }
    ],
    faqs: [
      { qFil: 'Kasya ba ang Stone Kingdom sa 2 days?', qEn: 'Does the Stone Kingdom fit in 2 days?', aFil: 'Oo—ilang oras lang ito; madaling isingit sa Day 1 morning.', aEn: 'Yes—it takes just a couple of hours; easy to slot into Day 1 morning.' },
      { qFil: 'Saan mag-stay?', qEn: 'Where to stay?', aFil: 'Ang city center ay convenient para sa night market at commute. Iwas sa Pinsao kung walang sasakyan.', aEn: 'The city center is convenient for the night market and commuting. Avoid Pinsao without a car.' },
      { qFil: 'Pwede bang commute lang?', qEn: 'Can I use public transport only?', aFil: 'Oo, pero mas mabilis ang Grab para sa hill transfers.', aEn: 'Yes, but Grab is faster for hill transfers.' }
    ],
    related: ['full-day-culture-loop', 'half-day-itinerary', 'baguio-night-market', 'best-time-to-visit']
  },

  // ===================== F. SEASONAL =====================
  'best-time-to-visit': {
    slug: 'best-time-to-visit',
    group: 'seasonal',
    titleFil: 'Best Time to Visit Baguio at Stone Kingdom',
    titleEn: 'Best Time to Visit Baguio & the Stone Kingdom',
    descFil: 'Kailan pinakamaganda pumuntang Baguio para sa Stone Kingdom: cool-dry months, Panagbenga at rainy season.',
    descEn: 'When to best visit Baguio for the Stone Kingdom: cool-dry months, Panagbenga and the rainy season.',
    h1Fil: 'Best Time to Visit',
    h1En: 'Best Time to Visit',
    introFil: 'Ang Baguio ay cool-dry mula November hanggang February—pinakakomportable para sa ahon ng Stone Kingdom. Ang Pebrero ay may Panagbenga flower festival (mas maraming tao).',
    introEn: 'Baguio is cool-dry from November to February—most comfortable for the Stone Kingdom’s hills. February brings the Panagbenga flower festival (bigger crowds).',
    sections: [
      { hFil: 'Cool-dry (Nov–Feb)', hEn: 'Cool-dry (Nov–Feb)', bFil: 'Pinakamalamig at mataas ang visibility; ideal para sa photography at walking. Magdala ng jacket.', bEn: 'Coldest and clearest; ideal for photography and walking. Bring a jacket.' },
      { hFil: 'Panagbenga (Feb)', hEn: 'Panagbenga (Feb)', bFil: 'Flower festival month—maraming events at traffic; mag-book nang maaga ng lodging at transport.', bEn: 'Flower festival month—many events and traffic; book lodging and transport early.' },
      { hFil: 'Rainy (Jun–Oct)', hEn: 'Rainy (Jun–Oct)', bFil: 'Madalas umulan; magplano ng flexible timing at indoor buffer. Iwas sa basang hagdan.', bEn: 'Frequent rain; plan flexible timing and indoor buffers. Avoid the wet stairs.' }
    ],
    faqs: [
      { qFil: 'Anong buwan pinakamaganda?', qEn: 'Which month is best?', aFil: 'Ang Disyembre–Enero ay pinakamalamig at malinaw; Pebrero ay festive pero crowded.', aEn: 'December–January is coldest and clearest; February is festive but crowded.' },
      { qFil: 'Mainit ba sa Baguio?', qEn: 'Is Baguio hot?', aFil: 'Bihira; baguio ay kilala sa cool climate. Pero maalinsangan sa siksik na tanghali.', aEn: 'Rarely; Baguio is known for cool climate. But midday crowds can feel stuffy.' },
      { qFil: 'Pwede bang umaga lang?', qEn: 'Is morning only enough?', aFil: 'Oo, ang Stone Kingdom ay 1–2 oras lang; maagang umaga ang pinakatahimik.', aEn: 'Yes, the Stone Kingdom is only 1–2 hours; early morning is quietest.' }
    ],
    related: ['baguio-by-month', 'panagbenga', 'baguio-temperature', 'rainy-day-baguio']
  },
  'panagbenga': {
    slug: 'panagbenga',
    group: 'seasonal',
    titleFil: 'Panagbenga Festival Baguio — Tips sa Stone Kingdom',
    titleEn: 'Panagbenga Festival Baguio — Stone Kingdom Tips',
    descFil: 'Panagbenga flower festival: kailan, traffic, at paano isingit ang Stone Kingdom.',
    descEn: 'Panagbenga flower festival: when, traffic, and how to slot in the Stone Kingdom.',
    h1Fil: 'Panagbenga Festival',
    h1En: 'Panagbenga Festival',
    introFil: 'Ang Panagbenga ay Baguio’s month-long flower festival tuwing Pebrero, may grand street parade at floats. Asahan ang maraming tao at traffic.',
    introEn: 'Panagbenga is Baguio’s month-long flower festival every February, with a grand street parade and floats. Expect bigger crowds and traffic.',
    sections: [
      { hFil: 'Kailan', hEn: 'When', bFil: 'Karaniwang buong buwan ng Pebrero, na may peak sa street dancing at float parade (dates vary yearly).', bEn: 'Usually the whole month of February, peaking at the street dancing and float parade (dates vary yearly).' },
      { hFil: 'Traffic at transport', hEn: 'Traffic & transport', bFil: 'Sarado ang ilang kalsada sa parade; mas mabuting mag-Grab nang maaga o maglakad mula sa city.', bEn: 'Some roads close for parades; take Grab early or walk from the city.' },
      { hFil: 'Stone Kingdom timing', hEn: 'Stone Kingdom timing', bFil: 'Pumunta nang maaga (7–8 AM) bago ang crowd, o sa weekday para iwas sa festival weekend.', bEn: 'Go early (7–8 AM) before crowds, or on a weekday to avoid festival weekends.' }
    ],
    faqs: [
      { qFil: 'Bukas ba ang Stone Kingdom sa Panagbenga?', qEn: 'Is the Stone Kingdom open during Panagbenga?', aFil: 'Oo, karaniwang bukas, pero maaaring may ibang oras; kumpirmahin sa gate.', aEn: 'Yes, generally open, but hours may vary; confirm at the gate.' },
      { qFil: 'Mas mahal ba ang lodging?', qEn: 'Is lodging more expensive?', aFil: 'Oo sa festival dates; mag-book nang ilang buwan maaga.', aEn: 'Yes during festival dates; book months ahead.' },
      { qFil: 'Pwede bang pagsabayin?', qEn: 'Can I combine them?', aFil: 'Oo—gawing morning ang Stone Kingdom, tapos city festival sa hapon/gabi.', aEn: 'Yes—do the Stone Kingdom in the morning, then the city festival in the afternoon/evening.' }
    ],
    related: ['best-time-to-visit', 'baguio-by-month', 'first-time-tips', 'full-day-culture-loop']
  },
  'baguio-by-month': {
    slug: 'baguio-by-month',
    group: 'seasonal',
    titleFil: 'Baguio by Month — Weather at Crowd Guide',
    titleEn: 'Baguio by Month — Weather & Crowd Guide',
    descFil: 'Month-by-month Baguio guide para sa Stone Kingdom: temperature, ulan at crowd.',
    descEn: 'A month-by-month Baguio guide for the Stone Kingdom: temperature, rain and crowds.',
    h1Fil: 'Baguio by Month',
    h1En: 'Baguio by Month',
    introFil: 'Isang mabilis na overview ng bawat buwan sa Baguio para planuhin ang Stone Kingdom visit.',
    introEn: 'A quick overview of each Baguio month to plan your Stone Kingdom visit.',
    sections: [
      { hFil: 'Nov–Feb (cool-dry)', hEn: 'Nov–Feb (cool-dry)', bFil: 'Pinakamalamig (13–22°C) at least rain; ideal walking. Pebrero ay Panagbenga.', bEn: 'Coldest (13–22°C) and least rain; ideal walking. February is Panagbenga.' },
      { hFil: 'Mar–May (warm-dry)', hEn: 'Mar–May (warm-dry)', bFil: 'Medyo mainit sa tanghali (17–25°C) pero presko pa rin; good visibility.', bEn: 'A bit warmer midday (17–25°C) but still fresh; good visibility.' },
      { hFil: 'Jun–Oct (rainy)', hEn: 'Jun–Oct (rainy)', bFil: 'Madalas ulan at amihan; mag-flexible timing. Setyembre–Oktubre ay peak ng southwest monsoon.', bEn: 'Frequent rain and habagat; keep timing flexible. Sep–Oct is peak southwest monsoon.' }
    ],
    faqs: [
      { qFil: 'Anong buwan pinakamalamig?', qEn: 'Which month is coldest?', aFil: 'Ang Enero ay kadalasang pinakamalamig; magdala ng thick jacket.', aEn: 'January is usually coldest; bring a thick jacket.' },
      { qFil: 'Anong buwan pinaka-basâ?', qEn: 'Which month is wettest?', aFil: 'Ang Agosto at Setyembre ay karaniwang pinakamaramimg ulan.', aEn: 'August and September are usually the wettest.' },
      { qFil: 'Kailan least crowd?', qEn: 'When are crowds least?', aFil: 'Ang Hulyo–Setyembre (rainy) ay mas kaunti ang turista, maliban sa holidays.', aEn: 'July–September (rainy) has fewer tourists, except holidays.' }
    ],
    related: ['best-time-to-visit', 'baguio-temperature', 'rainy-day-baguio', 'panagbenga']
  },
  'baguio-temperature': {
    slug: 'baguio-temperature',
    group: 'seasonal',
    titleFil: 'Baguio Temperature — Cool Climate Guide',
    titleEn: 'Baguio Temperature — Cool Climate Guide',
    descFil: 'Baguio temperature at climate para sa Stone Kingdom: what to wear at when to go.',
    descEn: 'Baguio temperature and climate for the Stone Kingdom: what to wear and when to go.',
    h1Fil: 'Baguio Temperature',
    h1En: 'Baguio Temperature',
    introFil: 'Kilala ang Baguio bilang "Summer Capital" dahil sa cool climate (average ~16–20°C). Mainam itong malaman bago umakyat ng Stone Kingdom.',
    introEn: 'Baguio is known as the "Summer Capital" for its cool climate (average ~16–20°C). Good to know before climbing the Stone Kingdom.',
    sections: [
      { hFil: 'Average temps', hEn: 'Average temps', bFil: 'Daytime ~18–24°C, gabi ~12–16°C. Sa cool-dry months ay bumababa sa single digits.', bEn: 'Daytime ~18–24°C, night ~12–16°C. In cool-dry months it drops to single digits.' },
      { hFil: 'What to wear', hEn: 'What to wear', bFil: 'Magdala ng jacket/layer kahit summer; maambon at malamig sa umaga. Comfortable shoes para sa hagdan.', bEn: 'Bring a jacket/layer even in summer; it drizzles and is cold in the morning. Comfortable shoes for the stairs.' },
      { hFil: 'Climate note', hEn: 'Climate note', bFil: 'Ang figures ay typical range, hindi real-time. Tingnan ang weather app bago bumiyahe.', bEn: 'Figures are a typical range, not real-time. Check a weather app before traveling.' }
    ],
    faqs: [
      { qFil: 'Need ba ng jacket?', qEn: 'Do I need a jacket?', aFil: 'Oo, lalo na sa umaga at gabi. Kahit mainit sa tanghali, presko pa rin.', aEn: 'Yes, especially morning and night. Even midday is fresh.' },
      { qFil: 'Mainit ba sa Stone Kingdom?', qEn: 'Is the Stone Kingdom hot?', aFil: 'Hindi gaanong mainit dahil sa altitude, pero exposed ang terraces sa araw.', aEn: 'Not very hot due to altitude, but the terraces are exposed to the sun.' },
      { qFil: 'Ulan ba palagi?', qEn: 'Does it rain constantly?', aFil: 'Hindi; may dry spells, pero madalas may ambon. Mag-ready ng umbrella.', aEn: 'No; there are dry spells, but drizzle is common. Keep an umbrella ready.' }
    ],
    related: ['baguio-by-month', 'best-time-to-visit', 'rainy-day-baguio', 'first-time-tips']
  },

  // ===================== G. FAQ / TIPS =====================
  'first-time-tips': {
    slug: 'first-time-tips',
    group: 'faq',
    titleFil: 'Igorot Stone Kingdom First-Time Tips',
    titleEn: 'Igorot Stone Kingdom First-Time Tips',
    descFil: 'First-timer guide sa Igorot Stone Kingdom: what to bring, pacing at common mistakes.',
    descEn: 'A first-timer guide to Igorot Stone Kingdom: what to bring, pacing and common mistakes.',
    h1Fil: 'First-Time Tips',
    h1En: 'First-Time Tips',
    introFil: 'Kung first time mo sa Igorot Stone Kingdom, ito ang mga praktikal na tips bago at habang nasa attraction.',
    introEn: 'If it is your first time at Igorot Stone Kingdom, here are practical tips before and during your visit.',
    sections: [
      { hFil: 'What to bring', hEn: 'What to bring', bFil: 'Comfortable shoes, jacket, tubig, at cash para sa entrance/parking. Magdala ng phone powerbank para sa photos.', bEn: 'Comfortable shoes, a jacket, water and cash for entrance/parking. Bring a power bank for photos.' },
      { hFil: 'Pacing at stamina', hEn: 'Pacing & stamina', bFil: 'Ang route ay may hagdan at ahon; umakyat nang dahan-dahan at mag-break. Huwag pilitin kung pagod.', bEn: 'The route has stairs and hills; climb slowly and take breaks. Do not push if tired.' },
      { hFil: 'Common mistakes', hEn: 'Common mistakes', bFil: 'Mali ang wrong drop-off address, late arrival sa weekend (parking), at hindi pagdala ng cash.', bEn: 'Wrong drop-off address, late weekend arrival (parking) and no cash are common mistakes.' }
    ],
    faqs: [
      { qFil: 'Ilang oras ang tour?', qEn: 'How long is the tour?', aFil: '1–2 oras para sa main route; mas mahaba kung maraming photo stops.', aEn: '1–2 hours for the main route; longer with many photo stops.' },
      { qFil: 'Bawal ba ang sandals?', qEn: 'Are sandals allowed?', aFil: 'Pwede, pero mas mainam ang closed shoes dahil sa uneven na hagdan.', aEn: 'Allowed, but closed shoes are better for uneven stairs.' },
      { qFil: 'May guide ba sa loob?', qEn: 'Are there guides inside?', aFil: 'Karaniwang self-guided; may staff sa gate para sa basic info.', aEn: 'Usually self-guided; staff at the gate provide basic info.' }
    ],
    related: ['what-is', 'hours', 'parking', 'accessibility']
  },
  'accessibility': {
    slug: 'accessibility',
    group: 'faq',
    titleFil: 'Accessibility sa Igorot Stone Kingdom',
    titleEn: 'Accessibility at Igorot Stone Kingdom',
    descFil: 'Accessibility info: stairs, slopes, senior at PWD considerations sa Stone Kingdom.',
    descEn: 'Accessibility info: stairs, slopes, and senior or PWD considerations at the Stone Kingdom.',
    h1Fil: 'Accessibility',
    h1En: 'Accessibility',
    introFil: 'Ang Stone Kingdom ay may hagdan at ahon, kaya limitado ang full accessibility. Ito ang mga dapat asahan ng senior at PWD.',
    introEn: 'The Stone Kingdom has stairs and hills, so full accessibility is limited. Here is what seniors and PWDs should expect.',
    sections: [
      { hFil: 'Stairs at slopes', hEn: 'Stairs & slopes', bFil: 'Maraming hakbang mula sa gate papunta sa terraces. May patag na courtyard sa baba para sa pahinga.', bEn: 'Many steps from the gate up to the terraces. There is a flat courtyard at the base for rest.' },
      { hFil: 'Senior at PWD tips', hEn: 'Senior & PWD tips', bFil: 'Magpahinga nang madalas, umakyat nang dahan-dahan, at magdala ng companion. Iwas sa maulap na araw.', bEn: 'Rest often, climb slowly, and bring a companion. Avoid cloudy/rainy days.' },
      { hFil: 'Alternative stops', hEn: 'Alternative stops', bFil: 'Kung hindi kaya ang ahon, ang Burnham at Mirador ay mas accessible na option.', bEn: 'If the hill is too much, Burnham and Mirador are more accessible options.' }
    ],
    faqs: [
      { qFil: 'Wheelchair-friendly ba?', qEn: 'Is it wheelchair-friendly?', aFil: 'Hindi fully; maraming hagdan. Ang baba ay may patag na bahagi.', aEn: 'Not fully; there are many stairs. The base has flat areas.' },
      { qFil: 'May discount ba para sa senior/PWD?', qEn: 'Is there a discount for seniors/PWDs?', aFil: 'Kumpirmahin sa gate ang current policy; iba-iba ang rate.', aEn: 'Confirm the current policy at the gate; rates vary.' },
      { qFil: 'May rest area ba?', qEn: 'Are there rest areas?', aFil: 'Oo, ang courtyard at ilang landing ay pwede mong pahingahan.', aEn: 'Yes, the courtyard and some landings let you rest.' }
    ],
    related: ['first-time-tips', 'family-itinerary', 'things-to-do-near', 'hours']
  },
  'vs-other-baguio': {
    slug: 'vs-other-baguio',
    group: 'faq',
    titleFil: 'Igorot Stone Kingdom vs Other Baguio Spots',
    titleEn: 'Igorot Stone Kingdom vs Other Baguio Spots',
    descFil: 'Paano kaiba ang Stone Kingdom sa Mines View, Burnham at Tam-awan—kailan pumili ng alin.',
    descEn: 'How the Stone Kingdom differs from Mines View, Burnham and Tam-awan—when to choose which.',
    h1Fil: 'vs Other Baguio Spots',
    h1En: 'vs Other Baguio Spots',
    introFil: 'Maraming attractions sa Baguio; ito ang mabilis na comparison para malaman kung kailan pupuntahan ang Stone Kingdom vs iba.',
    introEn: 'Baguio has many attractions; here is a quick comparison of when to choose the Stone Kingdom versus others.',
    sections: [
      { hFil: 'Stone Kingdom vs Mines View', hEn: 'Stone Kingdom vs Mines View', bFil: 'Ang Stone Kingdom ay stonework at stairs (active climb); ang Mines View ay overlook/photo deck (less walking).', bEn: 'The Stone Kingdom is stonework and stairs (active climb); Mines View is an overlook/photo deck (less walking).' },
      { hFil: 'Stone Kingdom vs Burnham', hEn: 'Stone Kingdom vs Burnham', bFil: 'Ang Stone Kingdom ay hill attraction; ang Burnham ay flat city park (boats, lake). Iba ang energy level.', bEn: 'The Stone Kingdom is a hill attraction; Burnham is a flat city park (boats, lake). Different energy levels.' },
      { hFil: 'Stone Kingdom vs Tam-awan', hEn: 'Stone Kingdom vs Tam-awan', bFil: 'Pareho sa Pinsao; ang Stone Kingdom ay stone terraces, ang Tam-awan ay art/culture huts + café.', bEn: 'Both in Pinsao; the Stone Kingdom is stone terraces, Tam-awan is art/culture huts + café.' }
    ],
    faqs: [
      { qFil: 'Pwede bang i-combine lahat?', qEn: 'Can I combine them all?', aFil: 'Oo sa full-day o 2-day; iwas lang sa pagod sa back-to-back hills.', aEn: 'Yes on a full-day or 2-day; just avoid exhausting back-to-back hills.' },
      { qFil: 'Alin ang pinakamadaling lakarin?', qEn: 'Which is easiest to walk?', aFil: 'Ang Burnham ang pinakapatag; ang Stone Kingdom ang pinaka-ahon.', aEn: 'Burnham is flattest; the Stone Kingdom is the most uphill.' },
      { qFil: 'Alin ang free?', qEn: 'Which is free?', aFil: 'Karaniwang may bayad ang Stone Kingdom; ang Burnham at ilang park ay libre. Kumpirmahin sa site.', aEn: 'The Stone Kingdom usually has a fee; Burnham and some parks are free. Confirm on site.' }
    ],
    related: ['what-is', 'things-to-do-near', 'mines-view-park', 'burnham-park']
  },
  'faq': {
    slug: 'faq',
    group: 'faq',
    titleFil: 'Igorot Stone Kingdom FAQ — Mga Saging na Tanong',
    titleEn: 'Igorot Stone Kingdom FAQ — Common Questions',
    descFil: 'Mga sagot sa pinakamadalas itanong tungkol sa Igorot Stone Kingdom: entrance, oras, transport, at tips.',
    descEn: 'Answers to the most common questions about Igorot Stone Kingdom: entrance, hours, transport and tips.',
    h1Fil: 'Mga Saging na Tanong',
    h1En: 'Frequently Asked Questions',
    introFil: 'Isang mabilisang collection ng pinakamadalas na tanong (FAQ) para sa Igorot Stone Kingdom, mula sa entrance fee hanggang sa transport.',
    introEn: 'A quick collection of the most common questions (FAQ) about Igorot Stone Kingdom, from entrance fee to transport.',
    sections: [
      { hFil: 'Entrance at oras', hEn: 'Entrance & hours', bFil: 'Bukas araw-araw 7 AM–6 PM; entrance ay ~(₱130 adult, ₱100 child). Kumpirmahin sa gate ang current rate.', bEn: 'Open daily 7 AM–6 PM; entrance ~(₱130 adult, ₱100 child). Confirm the current rate at the gate.' },
      { hFil: 'Transport', hEn: 'Transport', bFil: 'Taxi/Grab mula city center (~15–25 min) ang pinakasimple; jeep papuntang Tam-awan/Longlong ang budget option.', bEn: 'Taxi/Grab from the city center (~15–25 min) is simplest; the jeep to Tam-awan/Longlong is the budget option.' },
      { hFil: 'General tips', hEn: 'General tips', bFil: 'Dumating nang maaga, magdala ng cash at jacket, at umakyat nang dahan-dahan.', bEn: 'Arrive early, bring cash and a jacket, and climb slowly.' }
    ],
    faqs: [
      { qFil: 'Ano ang Igorot Stone Kingdom?', qEn: 'What is the Igorot Stone Kingdom?', aFil: 'Isang modernong, independently-built na hillside stonework attraction sa Pinsao, Baguio—hindi sinaunang guho.', aEn: 'A modern, independently-built hillside stonework attraction in Pinsao, Baguio—not an ancient ruin.' },
      { qFil: 'Magkano ang entrance?', qEn: 'How much is the entrance?', aFil: 'Karaniwang ~(₱130 adult, ₱100 child); kumpirmahin sa gate ang current rate.', aEn: 'Usually ~(₱130 adult, ₱100 child); confirm the current rate at the gate.' },
      { qFil: 'Paano pumunta?', qEn: 'How do I get there?', aFil: 'Taxi/Grab o jeep mula city center papuntang Longlong Road, Pinsao Proper.', aEn: 'Taxi/Grab or jeep from the city center to Longlong Road, Pinsao Proper.' },
      { qFil: 'Bukas ba kapag Lunes?', qEn: 'Is it open on Mondays?', aFil: 'Oo, araw-araw itong bukas.', aEn: 'Yes, it is open every day.' },
      { qFil: 'May parking ba?', qEn: 'Is there parking?', aFil: 'Oo, roadside at paid lots malapit sa gate; mabilis mapuno sa weekend.', aEn: 'Yes, roadside and paid lots near the gate; fills fast on weekends.' }
    ],
    related: ['what-is', 'hours', 'parking', 'first-time-tips']
  }
};
