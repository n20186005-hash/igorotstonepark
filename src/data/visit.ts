export type VisitFact = {
  label: string;
  value: string;
  note?: string;
};

export type FoodSpot = {
  name: string;
  kind: string;
  note: string;
};

export type NearbyPlace = {
  name: string;
  note: string;
  tag: string;
};

export const visitFacts: VisitFact[] = [
  { label: 'Bukas', value: '7:00 AM – 6:00 PM', note: 'Araw-araw; maaaring magbago sa espesyal na okasyon.' },
  { label: 'Oras sa loob', value: '1–2 oras', note: 'Maglaan pa kung mahilig kang kumuha ng litrato.' },
  { label: 'Google rating', value: '4.4 / 5', note: 'Mula sa 5,411 user reviews sa Google Maps (Setyembre 2026); nababago habang dumarami ang reviews.' },
  { label: 'Lokasyon', value: 'Pinsao Proper, Baguio', note: 'Sa Longlong Road, sa gilid ng kabundukan.' }
];

export const foodSpots: FoodSpot[] = [
  {
    name: "The Farmer's Daughter Restaurant",
    kind: 'Cordilleran / Filipino',
    note: 'Malapit sa Tam-awan Village; magandang pares sa cultural day trip at kilala sa mga lutuing Cordilleran.'
  },
  {
    name: 'Igorot Charm Cafe',
    kind: 'Kape at meryenda',
    note: 'Maliit at artsy na café sa Tam-awan/Pinsao area—praktikal na pahingahan bago o pagkatapos ng lakaran.'
  },
  {
    name: "Antonio's Cafe",
    kind: 'All-day casual',
    note: 'Nasa Longlong Road at madaling isingit sa itinerary para sa almusal, rice meals o kape.'
  }
];

export const nearbyPlaces: NearbyPlace[] = [
  {
    name: 'Tam-awan Village',
    tag: 'Sining + kultura',
    note: 'Hillside art-and-culture stop na may mga kubo, galleries at café; pinakamadaling ipares sa Stone Kingdom.'
  },
  {
    name: 'Lourdes Grotto',
    tag: 'Tanawin + hagdan',
    note: 'Kilala sa mahabang paakyat at city views—isa pang outdoor stop para sa mga handa sa hagdan.'
  },
  {
    name: 'Mirador Heritage and Eco-Spirituality Park',
    tag: 'Hardin + viewpoint',
    note: 'Tahimik na elevated park na may gardens at panoramic viewpoints sa Baguio.'
  },
  {
    name: 'Burnham Park',
    tag: 'Sentro ng lungsod',
    note: 'Classic Baguio stop para sa mas patag na lakaran, lawa at pahinga bago o pagkatapos ng hill attractions.'
  }
];

export const faqs = [
  {
    question: 'Magkano ang entrance fee?',
    answer: 'Ang pinakahuling malawak na iniulat na rate ay humigit-kumulang ₱130 para sa adult at ₱100 para sa bata, habang libre ang toddler. Maaaring magbago ang rate, discount at promo, kaya kumpirmahin sa gate bago bumili.'
  },
  {
    question: 'Gaano katagal ang magandang ilaan?',
    answer: 'Karaniwang sapat ang 1–2 oras. Maglaan ng mas mahaba kung gusto mong dahan-dahang akyatin ang mga terrace, magpahinga at kumuha ng maraming larawan.'
  },
  {
    question: 'Madali ba para sa stroller o wheelchair?',
    answer: 'Hindi ito ideal para sa stroller o wheelchair dahil hillside ang lugar at maraming hagdan, makitid na daan at hindi pantay na bato. Mainam na magtanong sa staff tungkol sa kasalukuyang accessible areas.'
  },
  {
    question: 'May parking ba?',
    answer: 'May parking sa paligid ngunit mabilis mapuno kapag weekend at peak hours. May bayad ang ilang parking area; ang rate ay maaaring magbago, kaya magdala ng cash at magtanong muna bago pumarada.'
  },
  {
    question: 'Kailan pinakamagandang pumunta?',
    answer: 'Pinakamagaan ang experience sa weekday at maagang umaga: mas malamig, mas kaunti ang tao at mas madali ang parking. Magdala pa rin ng payong o light rain layer dahil mabilis magbago ang panahon sa Baguio.'
  },
  {
    question: 'Sinaunang kaharian ba ito?',
    answer: 'Hindi. Isa itong modernong cultural theme attraction na gumagamit ng stonework at mga kuwentong hango sa Cordillera. Mas magandang tingnan ito bilang malikhaing interpretasyon, hindi bilang sinaunang guho o kapalit ng mga buhay na tradisyon ng mga komunidad ng Cordillera.'
  },
  {
    question: 'Saan matatagpuan ang Igorot Stone Kingdom?',
    answer: 'Nasa 362 Longlong Road, Pinsao Proper, Baguio City, 2600 Benguet, Philippines. Mga 15–25 minuto ang biyahe mula sa city center; pinakamadaling taxi o Grab mula sentro.'
  }
] as const;

export type FeeTier = {
  label: string;
  price: string;
};

export const feeTiers: FeeTier[] = [
  { label: 'Adult', price: '~₱130' },
  { label: 'Bata', price: '~₱100' },
  { label: 'Toddler', price: 'Libre*' }
];

export type FeeFaq = {
  question: string;
  answer: string;
};

export const feeFaqs: FeeFaq[] = [
  {
    question: 'Magkano ang entrance fee?',
    answer: 'Ang pinakahuling madalas na iniulat na rate ay humigit-kumulang ₱130 para sa adult at ₱100 para sa bata, habang libre ang toddler. Maaaring magbago ang rate, discount at promo, kaya kumpirmahin sa gate bago bumili.'
  },
  {
    question: 'Anong oras bukas ang Igorot Stone Kingdom?',
    answer: 'Bukas ito araw-araw mula 7:00 AM hanggang 6:00 PM. Maaaring magbago ang oras sa espesyal na okasyon o kapag maulan; mainam ang same-day check sa gate o sa Google Maps listing.'
  },
  {
    question: 'Cash ba o card ang tinatanggap?',
    answer: 'Karaniwang cash ang hinihingi sa entrance at parking, kaya magdala ng maliit na cash. Maaaring mag-iba ang payment options, kaya magtanong muna sa staff kung tumatanggap ng card o e-wallet.'
  },
  {
    question: 'May discount ba para sa senior o student?',
    answer: 'May mga discount category na minsan iniaalok, pero hindi ito garantisado at maaaring magbago. Magpakita ng valid ID at kumpirmahin ang eksaktong discount sa entrance bago bumili ng ticket.'
  }
];

export type TransportMode = {
  label: string;
  title: string;
  note: string;
  extra?: string[];
};

export const transportModes: TransportMode[] = [
  {
    label: 'Taxi / Grab',
    title: 'Pinakasimple mula sa city center',
    note: 'Sabihin sa driver: “Igorot Stone Kingdom, Longlong Road, Pinsao Proper.” Ito ang pinakamadaling option kung ayaw mong maghanap ng jeepney transfer o mag-isip ng parking.',
    extra: [
      'Mula city center: humigit-kumulang 15–20 minuto depende sa traffic.',
      'Ang Grab ay available sa Baguio pero limitado ang supply sa rush hour at rainy days—magpa-book nang maaga.',
      'Sabihin ang eksaktong address (362 Longlong Road) dahil may ibang “Stone Kingdom” na maling drop-off.'
    ]
  },
  {
    label: 'Paliparan',
    title: 'Mula Loakan Airport (BGO)',
    note: 'Ang Baguio Loakan Airport ay nasa humigit-kumulang 7–8 km mula sa Igorot Stone Kingdom, o mga 20–30 minutong biyahe depende sa daloy ng trapiko.',
    extra: [
      'Airport taxi / Grab: Pinakadirekta. Sabihin ang eksaktong address: 362 Longlong Road, Pinsao Proper.',
      'Jeepney + lakad: Mula airport, sumakay ng jeep patungong city center, pagkatapos lumipat sa Tam-awan / Longlong route na jeep mula Kayang/Otek terminal.',
      'Pre-arranged transfer: Kung maraming gamit o kasama ang grupo, mas praktikal ang private transfer.',
      'Limitado ang commercial flights papuntang BGO; karamihan ng bisita ay bumibiyahe mula Manila o Clark via bus.'
    ]
  },
  {
    label: 'Bus (mula Maynila / Clark)',
    title: 'Long-haul papuntang Baguio',
    note: 'Ang karamihan ng bisita ay sumasakay ng bus mula Cubao/Pasay (Manila) o Dau/Clark papuntang Baguio bus terminal (~4–6 oras), pagkatapos ay taxi/jeep papuntang attraction.',
    extra: [
      'Baba sa Baguio bus terminal, pagkatapos sumakay ng taxi/Grab o magtanong para sa Tam-awan/Longlong jeep.',
      'Sa maagang umaga ang byahe ay mas mabilis; iwas sa Friday night at holiday rush.',
      'Mula terminal, ang attraction ay ~15–25 minuto pa by land.'
    ]
  },
  {
    label: 'Jeepney',
    title: 'Hanapin ang Tam-awan / Longlong route',
    note: 'Magtanong sa central terminals sa may Kayang/Otek area para sa jeep na patungong Tam-awan/Longlong. Kumpirmahin sa dispatcher o driver kung dumaraan o saan pinakamalapit bumaba para sa Stone Kingdom.',
    extra: [
      'Baba sa pinakamalapit na punto sa Longlong Road, pagkatapos ay maikling lakad o tricycle papunta sa gate.',
      'Tricycle sa Pinsao area: maikli at direkta pero magtanong muna ng fare bago sumakay.',
      'Hindi direkta ang jeep papunta sa gate—maglaan ng extra time at tanungin ang locals.'
    ]
  },
  {
    label: 'Sariling kotse',
    title: 'I-pin ang mismong attraction',
    note: 'Gamitin ang map pin sa ibaba. Mag-expect ng uphill streets at limitadong parking sa busy hours; umaga ang mas madaling arrival window.',
    extra: [
      'I-save ang pin bago bumiyahe; mahina ang signal sa ahon.',
      'Parking ay roadside at paid lots—mabilis mapuno sa weekend.',
      'Magdala ng cash para sa parking at toll/entry kung meron.'
    ]
  }
];

export type DirectoryItem = {
  name: string;
  tag: string;
  note: string;
};

export const directoryItems: DirectoryItem[] = [
  {
    name: 'Stone Terraces',
    tag: 'Pangunahing tanawin',
    note: 'Ang mismong tuktok ng attraction: malalaking hakbang at terrace na hinulma mula sa bato, na pinakamadalas na litratuhan at pinakakilalang bahagi ng Stone Kingdom.'
  },
  {
    name: 'Passageways & Stairs',
    tag: 'Ruta',
    note: 'Pasikot-sikot na stone passages at hagdan na nagdudugtong sa iba’t ibang antas. Tuloy-tuloy ang lakaran, kaya komportableng sapatos ang malaking tulong.'
  },
  {
    name: 'Viewpoint Decks',
    tag: 'Tanawin',
    note: 'Mga spot kung saan bughaw ang langit at berde ang kabundukan ng Cordillera. Pinakamaganda rito tuwing maagang umaga o malamig na hapon.'
  },
  {
    name: 'Photo Stops',
    tag: 'Kuwento',
    note: 'Mga markadong punto para sa mga kuwento at cultural framing ng attraction. Mabagal na pace ang inirerekomenda kung maraming gustong kuhaan.'
  },
  {
    name: 'Cultural Markers',
    tag: 'Konteksto',
    note: 'Mga information marker na naglalahad ng modernong interpretasyon ng Stone Kingdom—isang malikhaing kuwento, hindi sinaunang guho.'
  },
  {
    name: 'Entrance & Courtyard',
    tag: 'Pasok',
    note: 'Dito nagtatapos ang hagdan mula sa gate at parking. Dito rin ang ticketing at pinakamadaling assembly point bago akyatin ang mga terrace.'
  }
];

export type FacilityGroup = {
  icon: string;
  title: string;
  note: string;
  items: string[];
};

// Type-neutral overview only — no specific merchant names (non-profit, objective guidance).
export const facilities: FacilityGroup[] = [
  {
    icon: '🚻',
    title: 'Restroom / CR',
    note: 'May basic restroom sa entrance at courtyard area. Limitado ang bilang, kaya maghanda ng sariling tissue at huwag umasa nang sobra lalo na kapag maraming tao.',
    items: ['Basic public CR', 'Malapit sa entrance/courtyard', 'Magdala ng sariling tissue']
  },
  {
    icon: '🅿️',
    title: 'Parking',
    note: 'May mga roadside at paid parking area sa paligid, mabilis mapuno sa weekend at peak hours. Dumating nang maaga at magdala ng cash para sa bayad.',
    items: ['Roadside / paid lots', 'Mabilis mapuno sa weekend', 'Magdala ng cash para sa bayad']
  },
  {
    icon: '🍽️',
    title: 'Kainan',
    note: 'Sa Tam-awan / Pinsao area may mga small eatery, carinderia at café. Para sa mas maraming pagpipilian, ang city center (15–20 min) ay may restaurants at food strips.',
    items: ['Small eateries / carinderia', 'Cafés sa Tam-awan/Pinsao', 'City center para sa mas marami']
  },
  {
    icon: '🛏️',
    title: 'Matutuluyan',
    note: 'Walang lodging sa mismong attraction. Ang Baguio city proper (15–20 min by car) ay may homestay, inn at hotel sa iba’t ibang price range.',
    items: ['Walang lodging sa site', 'Homestay / inn / hotel sa city', 'Mag-book nang maaga sa peak season']
  },
  {
    icon: '🛒',
    title: 'Tindahan',
    note: 'May sari-sari store para sa tubig, snacks at essentials malapit sa area. Para sa supermarket at pharmacy, ang city center ang pinakamalapit.',
    items: ['Sari-sari store (tubig/snacks)', 'Supermarket sa city center', 'Pharmacy sa city proper']
  },
  {
    icon: '⛽',
    title: 'Gasolina / Charging',
    note: 'Ang mga gasoline station ay nasa city proper. Para sa EV, may charging point sa ilang mall at establishment sa Baguio—i-check ang real-time availability bago umalis.',
    items: ['Gas station sa city proper', 'EV charging sa malls', 'I-check ang availability']
  }
];

export type QuarterRow = {
  quarter: string;
  weather: string;
  comfort: string;
  tip: string;
};

// General guidance based on Baguio’s typical highland climate (cool, with wet/dry seasons).
export const quarterStrategy: QuarterRow[] = [
  { quarter: 'Q1 · Ene–Mar', weather: 'Cool-dry; pinakamalamig na buwan (babaan hanggang ~10°C gabi). Panagbenga sa Pebrero.', comfort: 'Komportable maglakad; madalas clear ang umaga.', tip: 'Jacket + layers. Inaasahan ang crowds tuwing Panagbenga—maagang umaga ang payo.' },
  { quarter: 'Q2 · Abr–Hun', weather: 'Warm-dry patungong transition; paminsan-minsan na init para sa Baguio (~25°C).', comfort: 'Mainit-init pero tolerable; simula ng mga ulan pagsapit ng Hunyo.', tip: 'Umoras ng maaga para iwas init at traffic. Dhala pa rin ng light rain layer.' },
  { quarter: 'Q3 · Hul–Sety', weather: 'Pinakamauulan (SW monsoon). Madalas hapon na ambon at ulap.', comfort: 'Madulas at preskong-presko; berde ang paligid.', tip: 'Payong / rain jacket at sapatos na may kapit. Iwas sa madulas na hagdan kapag basa.' },
  { quarter: 'Q4 · Okt–Dis', weather: 'Umuunti ang ulan; coolest sa Disyembre. Holiday crowds.', comfort: 'Maganda ang tanghali; maraming tao sa holiday season.', tip: 'Maglaan ng extra time para sa parking at traffic. Jacket para sa gabi.' }
];

export type CrowdRoute = {
  icon: string;
  title: string;
  who: string;
  steps: string[];
};

export const crowdRoutes: CrowdRoute[] = [
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Pamilya / may bata',
    who: 'Suitable for families with kids',
    steps: [
      'Pumili ng weekday morning para hindi siksik.',
      'Iwan ang stroller sa entrance; karga o hipan ang bata sa hagdan.',
      'Short loop: courtyard → mababang terrace → viewpoint deck → photo stop.',
      'Magpahinga sa flat areas; magdala ng tubig at snacks.'
    ]
  },
  {
    icon: '📷',
    title: 'Photography / nature',
    who: 'For photographers and nature lovers',
    steps: [
      'Best light: 7–9 AM at 3–5 PM (golden hour sa bundok).',
      'Target: stone terraces, viewpoint decks, mist sa umaga.',
      'Tripod-friendly sa flat decks; iwas sa makitid na passage.',
      'Maghintay ng clearing ng ulap para sa dramatic backdrop.'
    ]
  },
  {
    icon: '♿',
    title: 'Low-mobility / accessible',
    who: 'For seniors and limited mobility',
    steps: [
      'Taxi/own car hanggang entrance para hindi na lakarin ang ahon.',
      'Stay sa courtyard at malapit na viewpoint na hindi akyatan.',
      'Tanong sa staff kung aling bahagi ang pwdeng puntahan nang patag.',
      'Huwag pilitin ang buong route—enjoy lang sa entrance view.'
    ]
  }
];

export type GeneralRoute = {
  title: string;
  duration: string;
  steps: string[];
};

export const generalRoutes: GeneralRoute[] = [
  {
    title: 'Half-day (2–3 oras)',
    duration: '~2–3 hours',
    steps: [
      'Arrive morning → bayad sa entrance',
      'Courtyard → main stone terraces → viewpoint deck',
      'Photo stops sa cultural markers',
      'Exit, kain sa Tam-awan/Pinsao'
    ]
  },
  {
    title: 'Full-day (Baguio culture loop)',
    duration: '~6–8 hours',
    steps: [
      'Morning: Stone Kingdom → Tam-awan Village',
      'Lunch sa city / Pinsao area',
      'Afternoon: Lourdes Grotto → Mirador Park',
      'Sunset / evening stroll sa Burnham Park'
    ]
  }
];

export type AboutContext = {
  intro: string;
  heritage: string;
  modern: string;
  responsibility: string[];
};

export const aboutContext: AboutContext = {
  intro: 'Ang Igorot Stone Kingdom ay isang hillside attraction sa Pinsao, Baguio na hinubog mula sa bato—mga hagdan, terrace at passage na humuhugot ng itsura mula sa bundok ng Cordillera. Isa itong kuwento na pwedeng basahin sa bawat antas: tungkol sa pamumuhay sa bundok, sa mga komunidad na bumuo ng kultura sa hilaga ng Luzon, at sa paraan kung paano nabuo ang isang “kaharian” mula sa pawis at bato.',
  heritage: 'Ang salitang “Igorot” ay pangkalahatang tumutukoy sa mga grupong ethnolinguistic ng Cordillera—tulad ng Ibaloi, Kankana-ey, Ifugao at iba pa—na kilala sa rice terraces, stonework at matitibay na sistema ng pamayanan. Ang Stone Kingdom ay kumukuha ng inspirasyon mula sa mga imaheng ito: ang bato bilang simbolo ng tibay, at ang bundok bilang tahanan. Hindi nito inaangkin na ito ay sinaunang guho; sa halip, ito ay isang makabagong interpretasyon ng isang pamana.',
  modern: 'Mahalagang tandaan na ito ay isang kontemporaryong, independently-built na attraction—hindi archaeological site o lugar ng sinaunang ritwal. Ang mga kuwento at “legend” na ipinapakita rito ay bahagi ng creative framing ng mga nagtayo nito. Bilang bisita, mas nagiging makabuluhan ang pagpunta kung kinikilala ito bilang isang malikhaing proyekto at hindi bilang kapalit ng mga buhay na tradisyon ng Cordillera.',
  responsibility: [
    'Huwag mag-ukit o mag-alis ng bato; preserbahin ang structure para sa susunod na bisita.',
    'Umahon lamang sa mga designated na daan at hagdan—ang hindi pantay na bato ay delikado kapag basa.',
    'Zero waste: dalhin pabalik ang sariling basura at hindi magkalat.',
    'Igalang ang mga lokal na residente at negosyo sa Pinsao; bumili nang responsable at huwag istorbohin ang pribadong bahay.',
    'Tamang-asahan ang impormasyon: ito ay modernong attraction, hindi sinaunang archaeological ruin.'
  ]
};
