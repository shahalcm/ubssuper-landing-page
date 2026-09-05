export const APP_LINKS = {
  ubssuper: {
    name: "UBSSuper",
    tagline: "Book food, hotels, taxis & more in one app.",
    description:
      "UBSSuper brings everyday services together in one powerful and easy-to-use app. From food and groceries to travel, healthcare, jobs and property services — everything is just a tap away.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.natechsys.ubssuper",
    logo: "/logos/ubssuper-logo.png",
    primaryColor: "#16A34A",
    accentColor: "#22C55E",
  },
  taxi: {
    name: "UBS Super Taxi",
    tagline: "Your Ride. Your Way.",
    description: "Book your ride quickly and conveniently with UBS Super Taxi.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ubs.supertaxi.ubs_super_taxi_app",
    logo: "/logos/ubs-super-taxi-logo.png",
    primaryColor: "#FACC15",
    accentColor: "#EAB308",
    darkBg: "#111827",
  },
} as const;

export const SERVICES = [
  {
    id: "grocery",
    title: "Grocery Shopping",
    description: "Order daily essentials and groceries easily from nearby stores.",
    icon: "ShoppingBag",
    badge: "Fast Delivery",
    color: "emerald",
  },
  {
    id: "food",
    title: "Food Ordering",
    description: "Discover restaurants and order your favorite meals quickly.",
    icon: "UtensilsCrossed",
    badge: "Hot & Fresh",
    color: "amber",
  },
  {
    id: "doctor",
    title: "Doctor Booking",
    description: "Find doctors and book appointments with ease.",
    icon: "Stethoscope",
    badge: "Verified Pros",
    color: "blue",
  },
  {
    id: "hotel",
    title: "Hotel Booking",
    description: "Search and reserve hotels for your trips and stays.",
    icon: "Hotel",
    badge: "Best Rates",
    color: "indigo",
  },
  {
    id: "taxi",
    title: "Taxi Booking",
    description: "Book rides anytime, anywhere.",
    icon: "Car",
    badge: "UBS Super Taxi",
    color: "yellow",
  },
  {
    id: "realestate",
    title: "Real Estate",
    description: "Explore properties for buying, selling or renting.",
    icon: "Building2",
    badge: "Verified Listings",
    color: "teal",
  },
  {
    id: "jobs",
    title: "Job Search",
    description: "Find job opportunities and connect with employers.",
    icon: "Briefcase",
    badge: "Career Growth",
    color: "purple",
  },
  {
    id: "services",
    title: "Services",
    description: "Find trusted services for your everyday needs.",
    icon: "Wrench",
    badge: "At Your Doorstep",
    color: "rose",
  },
] as const;

export const STATS = [
  { value: "8+", label: "Services", sub: "All in a single app" },
  { value: "24/7", label: "Convenience", sub: "Round-the-clock access" },
  { value: "One", label: "Super App", sub: "Unified platform" },
  { value: "Fast", label: "Booking", sub: "Instant confirmation" },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "Layers",
    title: "All-in-One Platform",
    description: "No need to juggle multiple apps. Food, travel, healthcare, and rides live in one integrated dashboard.",
  },
  {
    icon: "Smile",
    title: "Easy & Convenient",
    description: "Intuitive, clean interface designed for zero-friction navigation and effortless day-to-day use.",
  },
  {
    icon: "Zap",
    title: "Fast Booking",
    description: "Rapid confirmations, optimized matching, and quick checkouts to save your valuable time.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure & Reliable",
    description: "Built with industry-grade data protection, verified providers, and guaranteed operational stability.",
  },
  {
    icon: "Sparkles",
    title: "Multiple Services",
    description: "From morning grocery restocking to late-night taxi dispatch, meet every everyday need.",
  },
  {
    icon: "Smartphone",
    title: "Modern Experience",
    description: "Sleek visuals, real-time status updates, and mobile-first craftsmanship tailored for Android.",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Choose a Service",
    description: "Select food, grocery, taxi, hotel, doctor, jobs, property or another service.",
  },
  {
    step: "02",
    title: "Book What You Need",
    description: "Choose your preferred option and complete your booking.",
  },
  {
    step: "03",
    title: "Enjoy the Experience",
    description: "Track your order, ride, booking or service easily.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is UBSSuper?",
    answer:
      "UBSSuper is an all-in-one booking and service platform that combines everyday services including grocery shopping, food ordering, doctor appointments, hotel bookings, taxi rides, real estate, job search, and everyday home services into one convenient, easy-to-use mobile application.",
  },
  {
    question: "What services are available in UBSSuper?",
    answer:
      "UBSSuper brings together 8 core services: Grocery Shopping, Food Ordering, Doctor Booking, Hotel Booking, Taxi Booking, Real Estate, Job Search, and Other Services.",
  },
  {
    question: "Where can I download UBSSuper?",
    answer:
      "UBSSuper is available on the Google Play Store for Android devices. You can tap any 'Download UBSSuper' button on this site to visit the official Google Play Store page directly.",
  },
  {
    question: "What is UBS Super Taxi?",
    answer:
      "UBS Super Taxi is the dedicated taxi and ride-booking application in the UBS ecosystem. It allows users to book rides quickly and conveniently with multiple vehicle tiers, fast pickups, and transparent fares.",
  },
  {
    question: "Where can I download UBS Super Taxi?",
    answer:
      "UBS Super Taxi is available on the Google Play Store. You can tap the 'Download UBS Super Taxi' button to visit its official Google Play Store page directly.",
  },
  {
    question: "Is UBSSuper available on Android?",
    answer:
      "Yes, UBSSuper is available for Android smartphones and can be downloaded from the Google Play Store.",
  },
  {
    question: "How do I book a taxi?",
    answer:
      "You can book a taxi through the dedicated UBS Super Taxi app or via the Taxi Booking service inside UBSSuper. Simply set your pickup and destination locations, select your ride preference, view your fare estimate, and tap Book Ride.",
  },
] as const;
