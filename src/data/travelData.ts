import { TourPackage, DestinationItem, ReviewItem, FaqItem } from '../types/travel';

export const DESTINATIONS: DestinationItem[] = [
  {
    id: 'kashmir',
    name: 'Kashmir Valley',
    badge: 'Heaven on Earth',
    badgeType: 'primary',
    subLocations: 'Gulmarg • Pahalgam • Dal Lake Houseboat',
    temp: '8°C - 18°C Mild',
    tempIcon: 'cloud',
    bestMonths: 'Apr - Oct',
    fromPrice: 18999,
    fromPriceDisplay: '₹18,999',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCA7Gq5p5FSnujpRj_8ZZFk0yMdM0InDHS_bdp7XieC_2E8KGpGY-p0GyJ2uDzQubgJcZTEWVwQLVW2F6kePp73c_v-fA-dmoTkWVsVliRyp3mlO1xIIJRLSEMrbH-Jc3knJ2FYtWKtwFzEIu0L4iYLDeyaje68mA4PANG0JpQSVYIVTTzx3VLQ8dL2qG0XxDLbHEjnAVnIeiL9TO-qX0sKK7yxKfTSJCYNU23_FbxbCJK_t4VnTCf',
    imageAlt: 'Traditional ornate wooden Shikara boat floating gracefully on glassy Dal Lake in Srinagar Kashmir with snowcapped Pir Panjal mountains and pink lotus flowers in morning mist',
    description: 'Renowned as the paradise on earth, Kashmir offers emerald valleys, snow-clad alpine peaks of Gulmarg, tranquil Shikara cruises along Dal Lake, and cozy handcrafted cedar houseboats.',
    highlights: ['Dal Lake Shikara Ride', 'Gulmarg Gondola Ride Phase 1 & 2', 'Betaab Valley & Aru in Pahalgam', 'Shankaracharya Temple & Mughal Gardens'],
    idealDuration: '6 Days / 5 Nights'
  },
  {
    id: 'himachal',
    name: 'Manali & Shimla',
    badge: 'Himalayan Serenity',
    badgeType: 'secondary',
    subLocations: 'Solang Valley • Rohtang Pass • Mall Road',
    temp: '12°C - 22°C',
    tempIcon: 'ac_unit',
    bestMonths: 'Round the Year',
    fromPrice: 16499,
    fromPriceDisplay: '₹16,499',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOthnM5SnreHqlCJWGC3IDy5viCtuPquaME9Qk40fIX-h-lVtCCM7WzF4fgfyRuUnJXO8zyZzCltaEAqWhBO6VDUzTsOBvEeh9Fir5u67YY31gXZzOoJz1EsImVGVg_gOlLEQav_pKieK1ezSu-37lV6nK3VgA1e8rbX-bpGGVVaER2jsxr2nTfr6gT596uMfG0tGRmbIR8_fKn5EhUIISD0nrus2JmVXIVpo7feuJU-IO2G70tr7Q',
    imageAlt: 'Breathtaking alpine valley of Solang and Manali Himachal Pradesh with dense deodar cedar forests, snow-clad mountain passes, and cozy wooden cottages in morning sunlight',
    description: 'Crisp mountain air, towering pine and deodar forests, thrilling snow sports in Solang, and colonial charm on Shimla’s iconic Ridge.',
    highlights: ['Solang Valley Snow Point', 'Rohtang Pass high altitude glacier', 'Shimla Mall Road & Christ Church', 'Kullu River Rafting & Shawl Factories'],
    idealDuration: '7 Days / 6 Nights'
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    badge: 'Devbhoomi & Nature',
    badgeType: 'primary',
    subLocations: 'Nainital • Rishikesh • Mussoorie • Auli',
    temp: '15°C - 26°C',
    tempIcon: 'wb_sunny',
    bestMonths: 'Mar - Jun, Sep - Nov',
    fromPrice: 17200,
    fromPriceDisplay: '₹17,200',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfNCojafFrwLnut-xfsgk9YSHFc3ZFt4OBFILenYXAGk8Uvh1kNeKQp0p5HTY5gXu075z5D3AvUgp5LRTz3aI3u5BFQHAXXuhMueNEXnSUA_7qKIfRI4yKn54dniRWt0Z2n3IeIDS5yvu2o61S5ySoj0BS5lAgWlIvdCG-YsPoPpcCr9ZDlto0DCCuWyRRZDgBSak9C4IariSczRV2z1G01oyHd-xvPoIH6Z62wLLFZyuKn-UtQZuE',
    imageAlt: 'Emerald Naini lake in Nainital surrounded by lush green hills, alongside spiritual Ganga riverbank in Rishikesh with prayer bells and mountain breeze',
    description: 'From serene Himalayan lakes in Nainital to the spiritual Ganga Aarti of Rishikesh and skiing meadows of Auli, Uttarakhand is the sacred land of deities and untamed mountain vistas.',
    highlights: ['Naini Lake Boating & Naina Devi', 'Rishikesh Ganga Aarti & River Rafting', 'Mussoorie Kempty Falls', 'Jim Corbett National Park Safari'],
    idealDuration: '6 Days / 5 Nights'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    badge: "God's Own Country",
    badgeType: 'secondary',
    subLocations: 'Munnar Tea Estates • Alleppey • Kovalam',
    temp: '20°C - 30°C',
    tempIcon: 'water_drop',
    bestMonths: 'Sep - Mar',
    fromPrice: 19800,
    fromPriceDisplay: '₹19,800',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG2JvZXvpqa9618s8kUqcwIFB3FhINkDHLfYZW6cT4HUxVyJy-A397essMcxb25-70npqZbCmSh0a0fG813SGNw2F2X-xmNmXvnAM0cyh7LiQ42qN96Gz0ZqzIJnkIRqhFXrwondnwRPF-dh4unQW8exDDRw6B6Hj0jyTGfsFBCVvBisOgiY1oQSQpjKnMXPaZkDpbN4leh_IEdguwrFibNrNnCGC6-xtox_bNS_jwJZ4f7QjJbqvG',
    imageAlt: 'Traditional luxury wooden Kettuvallam houseboat cruising through calm palm-fringed backwaters of Alleppey Kerala under a golden tropical sunset sky',
    description: 'Drift through serene tropical backwaters on an air-conditioned Kettuvallam houseboat, breathe aromatic spices in Munnar tea plantations, and rejuvenate with authentic Ayurvedic wellness.',
    highlights: ['Alleppey Overnight Houseboat Cruise', 'Munnar Tea Plantation Tour', 'Periyar Wildlife Sanctuary boat safari', 'Kovalam Beach & Lighthouse'],
    idealDuration: '5 Days / 4 Nights'
  },
  {
    id: 'rajasthan',
    name: 'Royal Rajasthan',
    badge: 'Land of Maharajas',
    badgeType: 'secondary',
    subLocations: 'Jaipur • Udaipur Palace • Jaisalmer Dunes',
    temp: '18°C - 31°C',
    tempIcon: 'wb_sunny',
    bestMonths: 'Oct - Mar',
    fromPrice: 21500,
    fromPriceDisplay: '₹21,500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu3Dr28qPzXQxxVvdOjvdBRdQ9-Mz9zDar8tVds88ldmln8PyP4t1uiVVrbbG12xpxqgvwmQtTtou-nSBRkUlpF_zCFD4yC3Bah6LudbW6KNApXMeefo2a4H09ilt_cpPgH9XfGWzTYm6pkdtOP-jwwglsOqWMA-LKRt5CmDiQqhOFlpuYvQ_uxeTWic8_6_9PJYOlIQKR_yr3GXw8B4-F-MfrWoVcrnxMJ9oHV7ZlQ-vGI1gMv8tx',
    imageAlt: 'Majestic golden sandstone Hawa Mahal palace in Jaipur and royal desert sand dunes with camels decorated in vibrant marigold textiles in Jaisalmer Rajasthan',
    description: 'Immerse in grand Rajput forts, romantic palace lakes in Udaipur, candlelit Swiss camps in Thar desert dunes, and royal feasts steeped in timeless hospitality.',
    highlights: ['Amer Fort Elephant / Jeep ride', 'Udaipur City Palace & Lake Pichola Boat', 'Jaisalmer Sam Sand Dunes & Camel Safari', 'Jodhpur Mehrangarh Fort'],
    idealDuration: '6 Days / 5 Nights'
  },
  {
    id: 'goa',
    name: 'Goa Getaway',
    badge: 'Sun, Sand & Heritage',
    badgeType: 'primary',
    subLocations: 'North & South Goa Luxury Beach Resorts',
    temp: '24°C - 32°C',
    tempIcon: 'beach_access',
    bestMonths: 'Oct - May',
    fromPrice: 14500,
    fromPriceDisplay: '₹14,500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiZZ8YF6y7S50hNo5wVrgL30zj2xcHJSH-qZj69YZMteI9XeC2c8XnZ53ejno-i_BSqrZb9X3iX773idKSIpplpUNKX5bisDseoMI326mYFpfV-cjpZVhsYYqHSur9Tuj5ap7y9eMC2yqYruPTrblS_LHJkHIIo3cYOYcdZLu8O16WX2XE1-GoddBoIIFdK9z5E1dHLEfLLM26Sf-FPP82ODF7j6IK6ow9USV6pchQ9I2XG7J-HgHY',
    imageAlt: 'Pristine white sand beach in South Goa with coconut palms swaying gently over turquoise ocean waves, beach shacks, and vibrant sunset sky',
    description: 'Golden sandy shores, swaying palm fronds, Portuguese heritage villas in Fontainhas, sunset cruises on the Mandovi River, and exquisite seafood dining.',
    highlights: ['Calangute, Baga & Anjuna Beach', 'Dudhsagar Waterfalls excursion', 'Old Goa Basilica of Bom Jesus', 'Luxury Mandovi River Sunset Catamaran'],
    idealDuration: '4 Days / 3 Nights'
  },
  {
    id: 'andaman',
    name: 'Andaman Islands',
    badge: 'Tropical Paradise',
    badgeType: 'primary',
    subLocations: 'Havelock Radhanagar • Scuba & Coral Reefs',
    temp: '22°C - 30°C',
    tempIcon: 'surfing',
    bestMonths: 'Oct - May',
    fromPrice: 26999,
    fromPriceDisplay: '₹26,999',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApMIwWtzIVcaeNtT3nO3VPeq66duchhCNa_fxi-A14mT6IoQSOKjCKrjTo4xyMgRHe3ap3_VxzncW90Tn2llUOw1K-b0GJwg0-yfodEKzgtRhP-h3wVeDNjSS2Iie-ezc_v1mwQt9exYzDgb8NNFdBTG7KAjU4GEHyuwi-byQGBJspa_KrbQoknxiaANA8EdkCXjECM2IEEfz7YGg_WsSZ7Ne_ovSgz-r9sxATMEz4CfGhMab5mpvh',
    imageAlt: 'Crystalline azure waters of Radhanagar Beach in Havelock Andaman Islands, vibrant coral reef marine life, and lush rainforest shoreline under radiant blue sky',
    description: 'Crystal-clear turquoise waters, Asia’s finest Radhanagar Beach, vibrant coral gardens at Elephant Beach, and poignant history at Cellular Jail.',
    highlights: ['Radhanagar Beach Sunset', 'Scuba Diving & Sea Walk at Elephant Beach', 'Cellular Jail Light & Sound Show', 'Neil Island Natural Rock Formation'],
    idealDuration: '6 Days / 5 Nights'
  },
  {
    id: 'northeast',
    name: 'Northeast & Sikkim',
    badge: 'Untamed Beauty',
    badgeType: 'secondary',
    subLocations: 'Gangtok • Tsomgo Lake • Darjeeling Tea',
    temp: '10°C - 20°C',
    tempIcon: 'landscape',
    bestMonths: 'Mar - Jun, Sep - Dec',
    fromPrice: 22400,
    fromPriceDisplay: '₹22,400',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeLCzZJWW1Oej4CGmhZQBYH8hW6ZE4ByEnJ1eQW9oSH7CbMOAKrgMap6-VfhvkgGQROIyKE9H8JX_dLGS5NnEqRhbFuFfFi5JavXj7K3oDdocn0TMC3uQMB-OQd7ARGJmA7reoVd57XEqmq7QQz-nKuruu8nqLi6gI9LIuh9COQj4xDO5cnuBDOAjk8ZN1aZuzRb5JlI1X299mb5c91-_l37lYqSwroP8-FKHvUvCq6a6zZPV9ioe5',
    imageAlt: 'High-altitude alpine glacial Tsomgo lake in Sikkim with colorful Buddhist prayer flags fluttering and majestic Mount Kanchenjunga peaks in the background',
    description: 'Fluttering Buddhist prayer flags, high-altitude glacial lakes, panoramic sunrises over Mount Kanchenjunga, and world-renowned Darjeeling aromatic tea estates.',
    highlights: ['Glacial Tsomgo Lake & Baba Mandir', 'Tiger Hill Sunrise over Kanchenjunga', 'Rumtek Monastery spiritual walk', 'Darjeeling Himalayan Toy Train'],
    idealDuration: '6 Days / 5 Nights'
  }
];

export const PACKAGES: TourPackage[] = [
  {
    id: 'kashmir-magical',
    title: 'Magical Kashmir Valley with Houseboat Experience',
    destination: 'Kashmir',
    region: 'North',
    duration: '6 Days / 5 Nights',
    days: 6,
    nights: 5,
    locations: ['Srinagar', 'Gulmarg', 'Pahalgam'],
    price: 18999,
    samplePriceDisplay: '₹18,999',
    rating: 4.9,
    reviewsCount: 380,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjVHVl-Rb4PPXfi89Po3ds2OuZzRE_Sihk4JnCKZMch0k0-u-b1xme8kkq0URKy_Q2Pd-Xix9sYUt_QRqv3jW18MXfVbsCGPWjAvQ2eGdT1JnKp-kAPhu08KvB6FivS9F2vshgNP9vBlCDslLD0rdhkdfUqjVPIW93wsmhc6WRUc96Cq0jRjwryEsNVuhoHrsDTFYTQNgL0yK8kmvJay5vKpPzPr7eQJ7e0L56nzQdvtbY_kbwsQy-',
    imageAlt: 'Traditional luxury Kashmiri cedar houseboat anchored on Dal Lake with intricately carved wooden balustrades, flower shikaras, and distant snow peaks',
    category: 'Family',
    isPopular: true,
    overview: 'Experience the sheer poetry of Kashmir. Float on the tranquil waters of Dal Lake in an authentic carved pine wood houseboat, ride the Gulmarg Gondola over snow-clad peaks, and stroll through the saffron and pine meadows of Pahalgam.',
    bestTimeToVisit: 'April through October (Pleasant meadows) & December through February (Snow sports)',
    inclusions: [
      { icon: 'hotel', label: '4-Star Hotels' },
      { icon: 'sailing', label: 'Houseboat Stay' },
      { icon: 'restaurant', label: 'Breakfast & Dinner' },
      { icon: 'directions_car', label: 'Private Cab & Driver' },
      { icon: 'rowing', label: 'Shikara Ride Included' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar & Dal Lake Shikara Cruise',
        description: 'Warm welcome by ChunMun representative at Srinagar Airport (SXR). Private transfer to luxury Dal Lake houseboat. Enjoy a 1-hour sunset Shikara ride across the floating gardens and lotus lakes.',
        meals: 'Dinner included',
        stay: 'Super Deluxe Dal Lake Houseboat',
        highlights: ['Airport pickup in private sanitized sedan', 'Kashmiri Kahwa welcome drink', 'Evening Shikara ride across Dal Lake']
      },
      {
        day: 2,
        title: 'Srinagar to Gulmarg Day Trip (Meadow of Flowers)',
        description: 'Morning scenic drive to Gulmarg (54 km). Board the world-famous Gulmarg Gondola up to Phase 1 (Kongdoori) and Phase 2 (Apharwat Peak at 13,780 ft). Try skiing or sledging on the alpine slopes.',
        meals: 'Breakfast & Dinner',
        stay: 'Hotel Grand Mumtaz / Hilltop Gulmarg',
        highlights: ['Gondola cable car ride tickets assistance', 'Snow activities at Apharwat Peak', 'Golf course & St. Mary Church visit']
      },
      {
        day: 3,
        title: 'Gulmarg to Pahalgam (Valley of Shepherds)',
        description: 'Drive through the saffron fields of Pampore and walnut orchards towards Pahalgam. Check-in to your riverside resort with panoramic views of the Lidder River.',
        meals: 'Breakfast & Dinner',
        stay: 'Pine N Peak / Hotel Heevan Pahalgam',
        highlights: ['Pampore Saffron shopping stop', 'Lidder riverbank evening stroll', 'Local trout fish tasting optional']
      },
      {
        day: 4,
        title: 'Pahalgam Exploration: Betaab Valley & Aru Valley',
        description: 'Full day excursion to Betaab Valley, Aru Valley, and Chandanwari via local union vehicle. Walk through lush pine trails and enjoy a picnic lunch amidst the mountains.',
        meals: 'Breakfast & Dinner',
        stay: 'Pine N Peak / Hotel Heevan Pahalgam',
        highlights: ['Betaab Valley photography point', 'Aru village cultural walk', 'Riverside tea stop']
      },
      {
        day: 5,
        title: 'Pahalgam to Srinagar & Mughal Gardens Tour',
        description: 'Return to Srinagar. Visit the magnificent Mughal Gardens: Nishat Bagh (Garden of Pleasure), Shalimar Bagh (Abode of Love), and Shankaracharya Hill Temple for panoramic views of Srinagar city.',
        meals: 'Breakfast & Dinner',
        stay: 'The Lalit Grand Palace / Radisson Srinagar',
        highlights: ['Nishat & Shalimar Gardens', 'Shankaracharya Temple visit', 'Local Lal Chowk spice & dry fruit market']
      },
      {
        day: 6,
        title: 'Departure from Srinagar with Fond Memories',
        description: 'Enjoy a leisurely breakfast on the lawn. Assisted transfer to Srinagar Airport for your onward flight home with sweet memories of ChunMun hospitality.',
        meals: 'Breakfast included',
        stay: 'Departure',
        highlights: ['Assisted airport drop', 'Souvenir token gift from ChunMun']
      }
    ]
  },
  {
    id: 'himachal-delights',
    title: 'Himachal Delights: Shimla & Manali with Rohtang',
    destination: 'Himachal',
    region: 'North',
    duration: '7 Days / 6 Nights',
    days: 7,
    nights: 6,
    locations: ['Shimla', 'Kufri', 'Manali', 'Solang', 'Rohtang'],
    price: 16499,
    samplePriceDisplay: '₹16,499',
    rating: 4.8,
    reviewsCount: 420,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEnKK1wU38tp9D7mt1G-Wweg6teBkL5emM2U2C6MPGrE3E4XmAFx22MFBNY8glv_p8cfl2yf6SYSiAmt3bFu6ssD14GqtzYkU3-WexHVz6i3HDYGXJRKaEITWbgNaCKGMkSCTWDFW_oRwbjyqGY-hwRylqpBe4ziZY3nSCM1mc5XkQwxGinU4dDdShWlxVPXfETFCq0bOUkr7Cj0DOnHxhxKz4Uv4viyzty8AFX38cl5-7bDjg6kTc',
    imageAlt: 'Snow covered peaks of Rohtang Pass near Manali with happy travelers skiing, surrounded by towering pine trees and mountain ridge line',
    category: 'Family',
    isPopular: true,
    overview: 'The quintessential Himalayan vacation. Revel in Shimla’s colonial nostalgia and Kufri ridge views, journey along the bubbling Beas River, and experience the thrill of snow in Solang Valley and Rohtang Pass.',
    bestTimeToVisit: 'March to June (Summer breeze) & November to February (Snowfall wonderland)',
    inclusions: [
      { icon: 'directions_bus', label: 'Luxury Volvo / SUV' },
      { icon: 'hotel', label: '3-Star Premium Hotels' },
      { icon: 'downhill_skiing', label: 'Solang Snow Excursion' },
      { icon: 'restaurant', label: 'Daily Breakfast & Dinner' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi/Chandigarh to Shimla Drive',
        description: 'Morning pickup from Delhi/Chandigarh in private AC Innova/Sedan. Drive through scenic Shivalik foothills. Arrive in Shimla and check in.',
        meals: 'Dinner included',
        stay: 'Hotel Willow Banks / Clarkes Shimla',
        highlights: ['Scenic Himalayan expressway drive', 'Evening walk on Shimla Mall Road & Ridge']
      },
      {
        day: 2,
        title: 'Shimla Sightseeing & Kufri Winter Sports',
        description: 'Excursion to Kufri at 8,600 ft. Horseback ride to Mahasu Peak, Himalayan Nature Park, and Indira Tourist Park. Evening explore Christ Church and Lakkar Bazaar.',
        meals: 'Breakfast & Dinner',
        stay: 'Hotel Willow Banks / Clarkes Shimla',
        highlights: ['Kufri snow view point', 'Lakkar Bazaar wooden craft shopping', 'Jakhoo Temple Ropeway option']
      },
      {
        day: 3,
        title: 'Shimla to Manali via Kullu Valley & Pandoh Dam',
        description: 'Picturesque mountain drive along Beas River. Stop at Pandoh Dam, Sundernagar Lake, and Hanogi Mata temple. Visit Kullu Shawl Weaving factory.',
        meals: 'Breakfast & Dinner',
        stay: 'The Himalayan Resort / Apple Country Manali',
        highlights: ['Kullu Valley shawl weaving factory', 'Beas riverbank photo stops', 'Bonfire welcome at Manali resort']
      },
      {
        day: 4,
        title: 'Manali Local Sightseeing & Old Manali Cafes',
        description: 'Explore the 450-year-old wooden Hadimba Devi Temple amidst cedar forests. Visit Vashisht Hot Sulphur Springs, Tibetan Monastery, and Club House.',
        meals: 'Breakfast & Dinner',
        stay: 'The Himalayan Resort / Apple Country Manali',
        highlights: ['Hadimba Temple deodar forest walk', 'Vashisht hot sulfur springs', 'Old Manali bohemian cafe culture']
      },
      {
        day: 5,
        title: 'Solang Valley Adventure & Atal Tunnel Excursion',
        description: 'Full day adventure at Solang Valley. Enjoy zorbing, paragliding, quad biking, and cable car. Cross through the engineering marvel of Atal Tunnel to Sissu.',
        meals: 'Breakfast & Dinner',
        stay: 'The Himalayan Resort / Apple Country Manali',
        highlights: ['Solang Valley adventure sports', 'Atal Tunnel crossing to Lahaul Valley', 'Sissu waterfall photo point']
      },
      {
        day: 6,
        title: 'Rohtang Pass Snow Point Excursion (Subject to Permit)',
        description: 'Early morning excursion to Rohtang Pass (13,058 ft). Witness majestic snow peaks, panoramic Himalayan views, and play in pristine glaciers.',
        meals: 'Breakfast & Dinner',
        stay: 'The Himalayan Resort / Apple Country Manali',
        highlights: ['Rohtang Pass high altitude permit assistance', 'Panoramic Pir Panjal range view']
      },
      {
        day: 7,
        title: 'Manali to Delhi/Chandigarh Departure',
        description: 'Breakfast and private transfer back to Delhi or Chandigarh airport/railway station for your flight or train.',
        meals: 'Breakfast included',
        stay: 'Departure',
        highlights: ['Comfortable private drop', 'Memories of the high mountains']
      }
    ]
  },
  {
    id: 'rajasthan-heritage',
    title: 'Royal Rajasthan Heritage & Desert Safari',
    destination: 'Rajasthan',
    region: 'West',
    duration: '6 Days / 5 Nights',
    days: 6,
    nights: 5,
    locations: ['Jaipur', 'Jodhpur', 'Jaisalmer Desert Camp'],
    price: 21500,
    samplePriceDisplay: '₹21,500',
    rating: 4.9,
    reviewsCount: 290,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaqJ1dgV8Q0XLC_L1imu5pv4qERhVdaxwxESguqZXNW4v0fms8FDEOwm8WDn1eJsv7ArHNspvrJeN54GJaD8jMpoWwqIGt1-Fh5XTOSOHGQjCC8m0u2bVMhXFu2-l_7PdiYVkHAFq1PHHRQ3ftRBPgD6aCvn5v_8yTCo1V1PtbUXT3xbPDp-Jd6y3gbZU_LTFkGUbuhD5NIL7GmG2pvwmf7ZYr280qhl9d4ttB5K1LQIXsCW86u1if',
    imageAlt: 'Golden sand desert dunes in Sam Jaisalmer with candlelit Swiss tent camp, Rajasthani dancers in mirrors and vibrant ghagra, starry sky and bonfires',
    category: 'Heritage',
    isPopular: true,
    overview: 'Live like royalty across Rajasthan’s most iconic golden sands. Explore the amber palaces of Jaipur, the blue fortresses of Jodhpur, and sleep under a blanket of stars at a luxury Swiss desert tent in Jaisalmer with Kalbeliya dance and royal feasts.',
    bestTimeToVisit: 'October to March (Golden desert winter season)',
    inclusions: [
      { icon: 'fort', label: 'Heritage Haveli Stays' },
      { icon: 'landscape', label: 'Camel Dune Safari' },
      { icon: 'theater_comedy', label: 'Cultural Folk Show' },
      { icon: 'badge', label: 'English/Hindi Tour Guide' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Pink City Jaipur',
        description: 'Meet and greet at Jaipur Airport/Railway Station. Transfer to heritage hotel. Afternoon visit to Albert Hall Museum, Birla Temple, and colorful Bapu Bazaar.',
        meals: 'Dinner included',
        stay: 'Alsisar Haveli / Shahpura House Jaipur',
        highlights: ['Traditional Rajasthani Aarti & Tika welcome', 'Pink City heritage walk', 'Authentic Ghewar & Pyaaz Kachori tasting']
      },
      {
        day: 2,
        title: 'Jaipur Regal Forts & Palaces',
        description: 'Full day sightseeing of Amer Fort with elephant or open jeep ride. Visit Jal Mahal water palace, City Palace, Jantar Mantar observatory, and Hawa Mahal.',
        meals: 'Breakfast & Dinner',
        stay: 'Alsisar Haveli / Shahpura House Jaipur',
        highlights: ['Amer Fort Sheesh Mahal (Mirror Palace)', 'Hawa Mahal photo stop', 'Govind Dev Ji Temple evening aarti']
      },
      {
        day: 3,
        title: 'Jaipur to Sun City Jodhpur',
        description: 'Morning drive to Jodhpur (330 km). Check in to hotel. Visit the colossal Mehrangarh Fort perched on a cliff, Jaswant Thada marble cenotaph, and Clock Tower.',
        meals: 'Breakfast & Dinner',
        stay: 'Ajit Bhawan Palace / Ranbanka Heritage Jodhpur',
        highlights: ['Mehrangarh Fort private guided tour', 'Jaswant Thada white marble architecture', 'Old blue city alleyways photography']
      },
      {
        day: 4,
        title: 'Jodhpur to Golden City Jaisalmer Desert',
        description: 'Drive across the Thar Desert to Jaisalmer (285 km). Arrive at Sam Sand Dunes. Experience an exhilarating 4x4 Jeep dune bashing and camel safari into sunset.',
        meals: 'Breakfast & Royal Rajasthani Camp Dinner',
        stay: 'Luxury Swiss AC Tent at Royal Desert Camp Sam',
        highlights: ['Sunset Camel Safari over shifting dunes', 'Kalbeliya folk dance & fire acrobats show', 'Candlelit Rajasthani thali dinner under desert stars']
      },
      {
        day: 5,
        title: 'Jaisalmer Living Fort & Patwon Ki Haveli',
        description: 'Visit the Golden Sonar Qila (Jaisalmer Fort) where families still reside. Tour the carved limestone Patwon Ki Haveli, Salim Singh Haveli, and peaceful Gadisar Lake.',
        meals: 'Breakfast & Dinner',
        stay: 'Fort Rajwada / Gorbandh Palace Jaisalmer',
        highlights: ['Jaisalmer Golden Fort walk', 'Carved sandstone jharokhas of Patwon Haveli', 'Gadisar Lake paddle boating']
      },
      {
        day: 6,
        title: 'Departure from Jodhpur/Jaisalmer',
        description: 'Breakfast at hotel and assisted private transfer to Jodhpur or Jaisalmer airport for your return journey.',
        meals: 'Breakfast included',
        stay: 'Departure',
        highlights: ['Assisted airport transfer', 'Complimentary Rajasthani block-print gift souvenir']
      }
    ]
  },
  {
    id: 'kerala-romantic',
    title: 'Kerala Romantic Escape & Houseboat Cruise',
    destination: 'Kerala',
    region: 'South',
    duration: '5 Days / 4 Nights',
    days: 5,
    nights: 4,
    locations: ['Cochin', 'Munnar', 'Thekkady', 'Alleppey'],
    price: 19800,
    samplePriceDisplay: '₹19,800',
    rating: 4.9,
    reviewsCount: 340,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1b41nkSe67kogyF2kQWnm7oaZuWvE0T2CgzqF1w1GVFZCyGR8tyzIdpnBUVu1dv3xwH_S51gqXbahr1xCgQi4bLjUN7Qhne0OyYesj3RLeNzs-MzjxmkFtNZyol1rilNa4Rlf_BopTHVSobveuVirrTGMOwI3WflDGc0efQaIib59XyPvbL5V8nlEjGOq5eayfqA1x3_9Kbr3LpCGFVj865FS3MgiEdLZOexyF6apz4whoTZf9Kuz',
    imageAlt: 'Picturesque hillside mist floating over emerald green manicured tea gardens of Munnar Kerala with cascading Cheeyappara waterfalls and tropical flora',
    category: 'Honeymoon',
    isPopular: true,
    overview: 'Kerala’s most beloved circuit for couples and families alike. Breathe fresh mountain mist across undulating Munnar tea slopes, discover spice plantations in Thekkady, and cruise the palm-fringed backwaters of Alleppey on a private luxury houseboat.',
    bestTimeToVisit: 'September to March (Pleasant backwater and beach season)',
    inclusions: [
      { icon: 'local_cafe', label: 'Munnar Tea Estates' },
      { icon: 'spa', label: 'Spice Plantation Tour' },
      { icon: 'sailing', label: 'Alleppey AC Deluxe Cruise' },
      { icon: 'dinner_dining', label: 'All Houseboat Meals Included' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Cochin Arrival & Scenic Drive to Munnar Hills',
        description: 'Arrive at Cochin International Airport (COK). Scenic hill drive passing cascading Cheeyappara and Valara waterfalls. Check in to hillside tea plantation resort.',
        meals: 'Dinner included',
        stay: 'Blanket Hotel & Spa / Fragrant Nature Munnar',
        highlights: ['Scenic Western Ghats drive', 'Cheeyappara & Valara waterfalls stop', 'Tender coconut refreshment']
      },
      {
        day: 2,
        title: 'Munnar Tea Gardens & Eravikulam National Park',
        description: 'Morning visit to Eravikulam National Park to spot the endangered Nilgiri Tahr mountain goat. Tour Tata Tea Museum, Mattupetty Dam, and Echo Point.',
        meals: 'Breakfast & Dinner',
        stay: 'Blanket Hotel & Spa / Fragrant Nature Munnar',
        highlights: ['Nilgiri Tahr spotting at Eravikulam', 'Fresh tea tasting session', 'Mattupetty speed boating optional']
      },
      {
        day: 3,
        title: 'Munnar to Thekkady Spice Sanctuary',
        description: 'Drive to Thekkady (85 km). Guided walking tour of aromatic cardamom, cinnamon, and vanilla plantations. Evening boat ride in Periyar Lake to view wild elephants.',
        meals: 'Breakfast & Dinner',
        stay: 'Cardamom County / Elephant Court Thekkady',
        highlights: ['Aromatic Spice plantation guided walk', 'Periyar Wildlife Sanctuary boat safari', 'Kathakali classical dance show in the evening']
      },
      {
        day: 4,
        title: 'Thekkady to Alleppey Luxury Houseboat Cruise',
        description: 'Board your private luxury AC Kettuvallam houseboat at 12:00 noon in Alleppey. Cruise through serene canals, paddy fields, and lagoons. Relish freshly prepared traditional Kerala Karimeen fish curry and payasam dessert.',
        meals: 'Breakfast, Traditional Kerala Lunch, Evening Tea & Candlelit Dinner',
        stay: 'Private Air-Conditioned Deluxe Houseboat',
        highlights: ['Exclusive private crew (Captain, Chef, Engine Driver)', 'Candlelight dinner setup for couples', 'Sunset backwater cruise through narrow canals']
      },
      {
        day: 5,
        title: 'Houseboat Checkout & Cochin Departure',
        description: 'Relish sunrise breakfast on the houseboat deck. Disembark at 9:00 AM. Visit Fort Kochi Chinese Fishing Nets and Jewish Synagogue before transfer to Cochin Airport.',
        meals: 'Breakfast included',
        stay: 'Departure',
        highlights: ['Fort Kochi Chinese fishing nets', 'Jew Town shopping for antique artifacts & spices', 'Assisted drop at Cochin airport']
      }
    ]
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Rajesh & Sunita Sharma',
    location: 'Ahmedabad, Gujarat',
    tour: 'Kashmir Family Tour',
    avatarText: 'RS',
    avatarBg: 'bg-primary-container text-on-primary',
    stars: 5,
    comment: 'Flawless Kashmir family tour organized by ChunMun team! From Dal Lake houseboat to Gulmarg gondola ride, everything was seamless. Our driver Mr. Bashir was so courteous with my elderly parents.',
    verifiedLabel: 'Verified Guest'
  },
  {
    id: 'rev-2',
    name: 'Dr. Amit & Priya Verma',
    location: 'New Delhi',
    tour: 'Kerala Honeymoon Special',
    avatarText: 'AV',
    avatarBg: 'bg-secondary-container text-on-secondary-container',
    stars: 5,
    comment: 'Unforgettable honeymoon in Munnar & Alleppey! Special thanks to the 24/7 WhatsApp concierge support. The candlelit houseboat dinner and private tea villa exceeded all our expectations.',
    verifiedLabel: 'Verified Guest'
  },
  {
    id: 'rev-3',
    name: 'David & Sarah Jenkins',
    location: 'London, UK',
    tour: 'Rajasthan Heritage Circuit',
    avatarText: 'DJ',
    avatarBg: 'bg-tertiary-container text-on-tertiary',
    stars: 5,
    comment: 'First time visiting India and Rajasthan was magical. Professional drivers, pristine safe vehicles, and punctual guides. ChunMun delivered a truly royal experience without any tourist hassle.',
    verifiedLabel: 'Verified Inbound Traveler'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Can I customize the day-by-day tour itinerary and hotels?',
    answer: 'Absolutely yes! Every ChunMun holiday itinerary is 100% customizable. You can modify hotel categories (from 3-star comfort to 5-star heritage palaces), adjust sightseeing duration, add special romantic experiences, or include specific meal plans according to your dietary requirements (pure Jain, vegetarian, or international).'
  },
  {
    id: 'faq-2',
    question: 'What is the booking process and advance token payment?',
    answer: 'Booking is simple and secure. Once your itinerary is finalized with our holiday specialist, you can secure the reservation with a nominal 25% token advance. The remaining balance can be settled 10 to 15 days prior to your travel departure or upon arrival as per the package agreement.'
  },
  {
    id: 'faq-3',
    question: 'What are the payment options available?',
    answer: 'We provide 100% secure payment gateways supporting UPI (Google Pay, PhonePe, Paytm), Net Banking via major Indian banks, RuPay, Visa, and Mastercard credit/debit cards. We also provide bank wire transfer options for international travelers.'
  },
  {
    id: 'faq-4',
    question: "What is ChunMun Holiday Travels' cancellation & reschedule policy?",
    answer: 'We understand travel plans can shift unexpectedly. Cancellations made 30 days before departure are eligible for a full refund minus a nominal administrative fee. We also offer free date rescheduling vouchers valid for up to 12 months in unforeseen situations or medical emergencies.'
  },
  {
    id: 'faq-5',
    question: 'Are flight tickets included or can ChunMun book flights too?',
    answer: 'All our displayed prices are for on-ground land packages (hotels, chauffeur vehicle, sightseeing, meals, and permits). However, our IATA-accredited flight desk can bundle cheap discounted domestic flights from Delhi, Mumbai, Ahmedabad, Bengaluru, or any other city at zero convenience fees.'
  },
  {
    id: 'faq-6',
    question: 'What safety and health precautions are followed during the trip?',
    answer: 'All our dedicated vehicles are sanitized daily and driven by police-verified commercial chauffeurs. We maintain 24/7 real-time tracking, on-ground coordinator contact, and 24-hour medical on-call tie-ups across all destination hotels.'
  }
];

export const SEASONAL_GUIDE = [
  {
    region: 'Kashmir',
    bestTime: 'April to October (Pleasant meadows) & Dec to Feb (Snow)',
    weather: 'Spring: 12-20°C | Summer: 18-28°C | Winter: -2 to 8°C',
    highlights: 'Tulip Garden (April), Dal Lake Shikara, Gulmarg Skiing, Apple harvest (Sep)'
  },
  {
    region: 'Himachal Pradesh (Manali & Shimla)',
    bestTime: 'March to June (Summer escape) & Dec to Jan (Snowfall)',
    weather: 'Summer: 15-25°C | Monsoon: 18-22°C | Winter: 0-10°C',
    highlights: 'Solang snow adventures, Rohtang Pass, apple orchards, Kufri pine treks'
  },
  {
    region: 'Rajasthan (Jaipur, Udaipur, Jaisalmer)',
    bestTime: 'October to March (Cool desert winter)',
    weather: 'Winter: 12-25°C | Desert Nights: 8-12°C | Summer: 35-42°C',
    highlights: 'Desert camping under stars, Pushkar Fair (Nov), Lake Pichola boat cruises, Palaces'
  },
  {
    region: 'Kerala (Munnar, Alleppey, Kovalam)',
    bestTime: 'September to March (Lush green season)',
    weather: 'Winter: 22-30°C | Monsoon: 24-28°C (Ayurveda season)',
    highlights: 'Backwater houseboats, tea estate walks, Kathakali dance, Kovalam beaches'
  },
  {
    region: 'Andaman & Nicobar Islands',
    bestTime: 'October to May (Calm waters & clear visibility)',
    weather: 'Year-round tropical: 23-30°C',
    highlights: 'Radhanagar Beach sunsets, scuba diving at Havelock, sea walks at Elephant Beach'
  },
  {
    region: 'Uttarakhand (Nainital, Rishikesh, Auli)',
    bestTime: 'March to June & September to November',
    weather: 'Summer: 15-26°C | Winter: 2-12°C',
    highlights: 'River rafting in Rishikesh, lake boating in Nainital, Auli snow skiing in Jan'
  }
];
