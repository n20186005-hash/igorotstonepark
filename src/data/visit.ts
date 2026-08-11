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
  { label: 'Google rating', value: '4.4 / 5', note: 'Nagbabago habang dumarami ang reviews.' },
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
  }
] as const;
