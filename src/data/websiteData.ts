export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  keywords: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  alt: string;
  caption: string;
}

export interface LocationItem {
  name: string;
  type: string;
  distanceFromAra: string;
  description: string;
  popularFor: string;
}

export const BUSINESS_INFO = {
  name: "S K Travels",
  category: "Car Rental / Taxi Service",
  tagline: "Chauffeur-Driven Mahindra Scorpio Car Rental in Arrah & Bhojpur, Bihar",
  address: "Old Police Line, Arrah, Bhojpur, Bihar, India",
  pinCode: "802301",
  phone: "6204671213",
  phoneFormatted: "+91 6204671213",
  phoneTel: "tel:6204671213",
  whatsappNumber: "916204671213",
  whatsappUrl: "https://wa.me/916204671213",
  primaryVehicle: "White Mahindra Scorpio",
  serviceType: "Chauffeur-driven car rental (with driver only)",
  operatingBase: "Old Police Line, Arrah",
  primaryKeyword: "Car Rental in Arrah, Bihar",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14392.385739029584!2d84.6465!3d25.556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5ec42c33d839%3A0x64cf517e47a97ce9!2sOld%20Police%20Line%2C%20Arrah%2C%20Bihar%20802301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "local-rental",
    title: "Local Car Rental in Arrah",
    shortDesc: "Chauffeur-driven White Mahindra Scorpio for hassle-free city travel across Arrah & Bhojpur.",
    fullDesc: "Need a comfortable SUV for daily errands, family visits, hospital appointments, or local meetings within Ara? S K Travels provides our reliable Mahindra Scorpio with an experienced local driver who knows every street and landmark in Arrah.",
    iconName: "Car",
    highlights: ["Doorstep pickup anywhere in Ara", "Flexible hourly or daily booking", "Stress-free chauffeur-driven ride", "No fuel or parking hassle"],
    keywords: "Car Rental in Arrah, Taxi Service in Arrah, Cab in Ara Bihar"
  },
  {
    id: "outstation-taxi",
    title: "Outstation Car Rental from Arrah",
    shortDesc: "Comfortable and safe long-distance travel from Arrah to all districts and cities across Bihar.",
    fullDesc: "Planning a trip outside Arrah? Book S K Travels for seamless outstation journeys to Patna, Gaya, Buxar, Sasaram, Muzaffarpur, Rajgir, and beyond. Enjoy a smooth, reliable SUV ride suited for Bihar highways.",
    iconName: "Compass",
    highlights: ["Smooth highway cruising in Scorpio", "Experienced highway chauffeur", "One-way and round trips", "Transparent billing with zero surprises"],
    keywords: "Outstation Taxi from Arrah, Outstation Cab from Ara, Car Hire in Bhojpur"
  },
  {
    id: "scorpio-rental",
    title: "Mahindra Scorpio Rental",
    shortDesc: "Book the iconic, powerful White Mahindra Scorpio for unmatched road presence and comfort.",
    fullDesc: "Mahindra Scorpio is Bihar's most trusted SUV for comfort, rugged road capability, and high ground clearance. We maintain our vehicle to pristine standards to ensure an enjoyable and commanding journey.",
    iconName: "ShieldCheck",
    highlights: ["High ground clearance for all roads", "Powerful dual-zone air conditioning", "Spacious seating & luggage space", "Polite and experienced driver"],
    keywords: "Scorpio Rental in Arrah, Mahindra Scorpio on Rent in Ara, SUV Rental in Ara"
  },
  {
    id: "wedding-function",
    title: "Wedding & Family Function Travel",
    shortDesc: "Grand entry and dependable guest transportation for weddings, tilak, and family celebrations.",
    fullDesc: "Make your special day memorable with our clean white Mahindra Scorpio. Perfect for groom procession, bride entry, baraat travel, and conveying VIP guests across Bhojpur and neighboring districts.",
    iconName: "HeartHandshake",
    highlights: ["Immaculately clean white SUV", "Car decoration assistance available", "Punctual arrivals for auspicious timings", "Courteous chauffeur in proper attire"],
    keywords: "Wedding Car Rental in Arrah, Marriage Car Hire Bhojpur, Baraat Car Ara"
  },
  {
    id: "airport-transfer",
    title: "Airport Pickup & Drop",
    shortDesc: "Punctual, stress-free transfers from Arrah to Jay Prakash Narayan Airport Patna & Gaya Airport.",
    fullDesc: "Catch your flight on time without travel anxiety. We monitor travel routes from Arrah to Patna Airport (JPNI) or Gaya International Airport to ensure timely departures and smooth pickups.",
    iconName: "Plane",
    highlights: ["Timely doorstep pickup in Arrah", "Spacious boot for heavy luggage", "Smooth transit on Patna-Arrah 4-lane highway", "Meet and greet at airport arrival"],
    keywords: "Patna Airport Taxi from Arrah, Gaya Airport Cab Ara, Airport Car Rental Bhojpur"
  },
  {
    id: "railway-transfer",
    title: "Railway Station Pickup & Drop",
    shortDesc: "Reliable transfers to Ara Junction (ARA), Danapur, Patna Junction, and nearby stations.",
    fullDesc: "Whether reaching Ara Junction early morning or boarding a train late at night, S K Travels provides prompt pickup and drop services, helping you travel with peace of mind.",
    iconName: "Train",
    highlights: ["Round-the-clock scheduled pickup", "Assistance with luggage loading", "Quick transfers to Ara Junction ARA", "Transfers to Danapur and Patna stations"],
    keywords: "Ara Junction Taxi, Station Pickup Ara, Railway Station Cab Arrah"
  },
  {
    id: "business-official",
    title: "Business & Official Travel",
    shortDesc: "Executive chauffeur-driven travel for business executives, government visits, and site inspections.",
    fullDesc: "Present a professional impression with a commanding Mahindra Scorpio. Ideal for corporate delegates, engineers, contractors, and officials visiting industrial areas or project sites around Bhojpur.",
    iconName: "Briefcase",
    highlights: ["Professional & discreet chauffeur", "Clean & quiet cabin for calls on the go", "Dedicated full-day duty available", "Reliable punctuality for meetings"],
    keywords: "Corporate Car Rental Arrah, Official Taxi Bhojpur, Executive Cab Ara"
  },
  {
    id: "bihar-long-distance",
    title: "Long-Distance Travel Across Bihar",
    shortDesc: "Custom tour packages and multi-day travel across all 38 districts of Bihar and bordering states.",
    fullDesc: "From religious pilgrimages (Gaya, Bodh Gaya, Pawapuri, Rajgir) to ancestral village visits across Bhojpur, Buxar, Rohtas, and Saran, travel comfortably with a driver who knows Bihar roads inside out.",
    iconName: "MapPin",
    highlights: ["Multi-day booking options", "Knowledge of optimal routes and rest stops", "Safe night and day driving", "Luggage-friendly for the whole family"],
    keywords: "Bihar Tour Car Rental, Outstation Taxi Bihar, Long Distance Cab Arrah"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "garage-front",
    src: "/assets/aistudio/Decorated_White_SUV_in_Covered_Garage_68f9c8e8.png",
    title: "White Mahindra Scorpio Front Profile",
    category: "Exterior",
    alt: "Crisp front angle view of White Mahindra Scorpio car rental in Arrah Bhojpur",
    caption: "Our well-maintained White Mahindra Scorpio parked at our base in Old Police Line, Arrah."
  },
  {
    id: "dashboard-interior",
    src: "/assets/aistudio/Mahindra_Scorpio_Dashboard_Interior_d47a21c2.png",
    title: "Dashboard & Clean Interior Cabin",
    category: "Interior",
    alt: "Spacious dashboard, touchscreen console and clean seats of Mahindra Scorpio car rental Ara",
    caption: "Clean, hygienic interior cabin with comfortable seats, powerful air conditioning, and modern dashboard."
  },
  {
    id: "side-exterior",
    src: "/assets/aistudio/WhatsApp_Image_2026-11-12_at_7.33.47_PM_3fcdc723.jpeg",
    title: "Side Profile on Bihar Road",
    category: "Exterior",
    alt: "Side exterior view of white Mahindra Scorpio ready for outstation journey in Arrah Bihar",
    caption: "Rugged and durable exterior ready for smooth highway journeys and rural road travel across Bihar."
  },
  {
    id: "wedding-front",
    src: "/assets/aistudio/Decorated_Mahindra-Style_SUV_on_a_Dusty_Lot_f6eb9e76.png",
    title: "Occasion & Event Travel View",
    category: "Weddings & Events",
    alt: "White Mahindra Scorpio SUV decorated for family function and wedding car rental in Arrah",
    caption: "Spacious SUV ready for family functions, wedding processions, and special ceremonies."
  },
  {
    id: "rental-poster",
    src: "/assets/aistudio/S_K_Travels_Scorpio_Rental_Poster_2eb9187a.png",
    title: "S K Travels Official Service Poster",
    category: "Branding",
    alt: "S K Travels car rental service poster in Arrah Bhojpur Bihar with contact 6204671213",
    caption: "Official S K Travels service overview highlighting chauffeur-driven Mahindra Scorpio bookings."
  }
];

export const SERVICE_LOCATIONS: LocationItem[] = [
  {
    name: "Ara / Arrah",
    type: "Primary Hub & Headquarter",
    distanceFromAra: "0 km (Local)",
    description: "Full coverage across Old Police Line, Station Road, Nawada, Anaith, Gangi, Dharhara, and Sheoganj.",
    popularFor: "Local city travel, hospital visits, railway station transfers, shopping"
  },
  {
    name: "Koilwar",
    type: "Service Area",
    distanceFromAra: "Approx. 15 km",
    description: "Fast transfers connecting Koilwar, the historic Abdul Bari Bridge, and the new 6-lane Sone River bridge.",
    popularFor: "Transit to Patna, local visits, riverside temple trips"
  },
  {
    name: "Bihiya",
    type: "Service Area",
    distanceFromAra: "Approx. 25 km",
    description: "Reliable chauffeur-driven taxi service connecting Bihiya railway market and nearby rural panchayats.",
    popularFor: "Family visits, business travel, grain market visits"
  },
  {
    name: "Jagdishpur",
    type: "Service Area",
    distanceFromAra: "Approx. 30 km",
    description: "Historic town of Veer Kunwar Singh; regular outstation trips for tourism, family functions, and official visits.",
    popularFor: "Heritage visits, wedding events, agricultural travel"
  },
  {
    name: "Piro",
    type: "Service Area",
    distanceFromAra: "Approx. 40 km",
    description: "Chauffeur service connecting Piro subdivision with Ara headquarters and medical centers.",
    popularFor: "Subdivision administrative work, marriage travel, outstation trips"
  },
  {
    name: "Shahpur",
    type: "Service Area",
    distanceFromAra: "Approx. 28 km",
    description: "Prompt Scorpio car rental service covering Shahpur market, Ganga diara region, and surrounding villages.",
    popularFor: "Local events, family gatherings, transport to Ara Junction"
  },
  {
    name: "Bhojpur District (All Blocks)",
    type: "District-wide Coverage",
    distanceFromAra: "District Wide",
    description: "Serving all 14 community development blocks of Bhojpur with dependable doorstep pickup.",
    popularFor: "Rural family trips, panchayat functions, election/official duty"
  },
  {
    name: "Patna, Gaya, Buxar & Across Bihar",
    type: "Outstation Destinations",
    distanceFromAra: "50 km – 300+ km",
    description: "Direct highway taxi service to Patna Airport, AIIMS Patna, Gaya, Buxar, Sasaram, and all Bihar destinations.",
    popularFor: "Airport drop, medical emergencies, religious tours, highway transit"
  }
];

export const FAQS = [
  {
    question: "Where is S K Travels located in Arrah?",
    answer: "S K Travels is based at Old Police Line, Arrah, Bhojpur, Bihar (PIN 802301). We provide doorstep pickup across Arrah town and all nearby blocks in Bhojpur district."
  },
  {
    question: "Is the Mahindra Scorpio provided with a driver (chauffeur-driven)?",
    answer: "Yes, S K Travels operates strictly chauffeur-driven car rentals. We provide an experienced, courteous local driver who is familiar with all routes in Arrah and highways across Bihar, ensuring your safety and comfort."
  },
  {
    question: "How do I book a car with S K Travels?",
    answer: "Booking is simple and fast! You can call us directly at 6204671213 or send a WhatsApp message with your pickup point, destination, date, and travel purpose. We confirm details promptly."
  },
  {
    question: "Can I book the Scorpio for wedding ceremonies and baraat in Bhojpur?",
    answer: "Yes, our clean white Mahindra Scorpio is ideal for weddings, tilak ceremonies, groom entry, and family functions. Please book in advance to ensure availability on auspicious wedding dates."
  },
  {
    question: "Do you offer airport and railway station pickup and drops?",
    answer: "Yes, we frequently provide punctual transfers from Arrah to Jay Prakash Narayan Airport Patna (JPNI), Gaya Airport, Ara Junction (ARA), and Danapur / Patna Railway Stations."
  },
  {
    question: "Are outstation trips across Bihar available?",
    answer: "Yes, we provide outstation car rental from Arrah to all major cities including Patna, Buxar, Sasaram, Dehri-on-Sone, Gaya, Muzaffarpur, Rajgir, and other destinations across Bihar."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Comfortable Mahindra Scorpio",
    description: "Bihar's favorite SUV offering superior road comfort, high seating posture, generous legroom, and strong air conditioning for all seasons.",
    icon: "Car"
  },
  {
    title: "Driver-Provided Service",
    description: "Experienced, polite, and vetted chauffeur ensures you travel without driving stress, parking worries, or fatigue.",
    icon: "UserCheck"
  },
  {
    title: "Convenient Booking",
    description: "Direct booking over a quick phone call (6204671213) or instant WhatsApp message without complicated signups.",
    icon: "PhoneCall"
  },
  {
    title: "Clean & Maintained Vehicle",
    description: "Regularly serviced and sanitized before every trip so you and your family enjoy a clean and fresh travel experience.",
    icon: "Sparkles"
  },
  {
    title: "Deep Local Knowledge",
    description: "Native familiarity with Arrah, Bhojpur village roads, bypass routes, and traffic shortcuts to save your valuable time.",
    icon: "Navigation"
  },
  {
    title: "Travel Services Across Bihar",
    description: "Whether a short ride in Ara city or a multi-day trip across Bihar, we cater to all your travel plans with utmost dedication.",
    icon: "Map"
  }
];
