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
    darkGreen: "#15803D",
  },
  taxi: {
    name: "UBS Super Taxi",
    tagline: "Your Ride. Your Way.",
    alternativeHeadline: "Fast, Simple & Reliable Rides.",
    description:
      "Book your ride quickly and conveniently with UBS Super Taxi. Simple booking, convenient ride options and a smooth experience — all from one powerful taxi app.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ubs.supertaxi.ubs_super_taxi_app",
    logo: "/logos/ubs-super-taxi-logo.png",
    primaryColor: "#FACC15",
    secondaryYellow: "#EAB308",
    darkYellow: "#CA8A04",
    darkBg: "#111827",
  },
} as const;

export const TAXI_FEATURES = [
  {
    id: "easy-booking",
    title: "Easy Ride Booking",
    description: "Enter your pickup and destination and book your ride with ease.",
    icon: "Zap",
  },
  {
    id: "multiple-options",
    title: "Multiple Ride Options",
    description: "Choose the ride option that best fits your journey.",
    icon: "Sliders",
  },
  {
    id: "location-booking",
    title: "Location-Based Booking",
    description: "Select your pickup and destination locations conveniently.",
    icon: "MapPin",
  },
  {
    id: "ride-tracking",
    title: "Ride Tracking",
    description: "Follow your ride progress through the booking experience.",
    icon: "Navigation",
  },
  {
    id: "driver-info",
    title: "Driver Information",
    description: "View important ride and driver details during your journey.",
    icon: "UserCheck",
  },
  {
    id: "simple-experience",
    title: "Simple Experience",
    description: "Designed to make everyday taxi booking quick and convenient.",
    icon: "Smartphone",
  },
] as const;

export const TAXI_BOOKING_STEPS = [
  {
    step: "01",
    title: "Choose Pickup",
    description: "Set your current location automatically or search for any custom pickup address.",
    badge: "Auto-detect or pin",
  },
  {
    step: "02",
    title: "Enter Destination",
    description: "Type where you want to travel and review your calculated route instantly.",
    badge: "Live route line",
  },
  {
    step: "03",
    title: "Select Your Ride",
    description: "Browse vehicle classes suited for your budget, passenger count, and comfort.",
    badge: "Transparent options",
  },
  {
    step: "04",
    title: "Book Your Ride",
    description: "Confirm your dispatch in one tap and receive driver details with real-time ETA.",
    badge: "Fast confirmation",
  },
] as const;

export const RIDE_OPTIONS = [
  {
    id: "bike",
    name: "Bike",
    tagline: "Quick solo transit",
    description: "Beat city traffic and reach your destination rapidly.",
    capacity: "1 Passenger",
    icon: "Bike",
    badge: "Fastest in Traffic",
  },
  {
    id: "auto",
    name: "Auto",
    tagline: "Everyday economical ride",
    description: "Classic three-wheeler rides for effortless short to medium hops.",
    capacity: "3 Passengers",
    icon: "Compass",
    badge: "Budget Friendly",
  },
  {
    id: "mini",
    name: "Mini",
    tagline: "Pocket-friendly hatchbacks",
    description: "Compact air-conditioned cars ideal for everyday individual travel.",
    capacity: "4 Passengers",
    icon: "Car",
    badge: "High Value",
  },
  {
    id: "sedan",
    name: "Sedan",
    tagline: "Spacious everyday comfort",
    description: "Premium comfort sedans with top-rated drivers and extra trunk space.",
    capacity: "4 Passengers",
    icon: "CarFront",
    badge: "Most Popular",
  },
  {
    id: "suv",
    name: "SUV",
    tagline: "Group travel & luggage",
    description: "Larger 6-seater vehicles perfect for family outings and airport luggage.",
    capacity: "6 Passengers",
    icon: "Truck",
    badge: "Extra Room",
  },
  {
    id: "luxury",
    name: "Luxury",
    tagline: "Executive first-class rides",
    description: "High-end premium vehicles offering refined comfort and silent rides.",
    capacity: "4 Passengers",
    icon: "Sparkles",
    badge: "Premium Class",
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

export const WHY_SUPER_TAXI = [
  {
    title: "Easy",
    description: "Straightforward interface designed for anyone to request a ride without friction.",
    icon: "Sparkles",
  },
  {
    title: "Convenient",
    description: "On-demand availability whenever you need a pickup right at your doorstep.",
    icon: "Clock",
  },
  {
    title: "Fast Booking",
    description: "Minimized steps from opening the app to finding your nearby driver.",
    icon: "Zap",
  },
  {
    title: "Simple Interface",
    description: "Clean typography, high-contrast maps, and zero clutter or intrusive ads.",
    icon: "Smartphone",
  },
  {
    title: "Ride Visibility",
    description: "Clear route lines, transparent ride tiers, and live status progress markers.",
    icon: "Eye",
  },
  {
    title: "Reliable Experience",
    description: "Consistent driver dispatch, verified vehicle details, and dependable performance.",
    icon: "ShieldCheck",
  },
] as const;

export const SERVICES = [
  {
    id: "taxi",
    title: "Taxi Booking",
    description: "Book rides anytime, anywhere with dedicated UBS Super Taxi vehicles.",
    icon: "Car",
    badge: "UBS Super Taxi",
    color: "yellow",
    isHighlighted: true,
  },
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

export const UNIVERSAL_STEPS = [
  {
    step: "01",
    title: "Open the App",
    description: "Launch UBS Super Taxi for direct rides or UBSSuper for the all-in-one ecosystem.",
  },
  {
    step: "02",
    title: "Choose Your Service",
    description: "Select taxi transport, food delivery, grocery restocking, stays, or medical bookings.",
  },
  {
    step: "03",
    title: "Book What You Need",
    description: "Review options, check upfront estimates, and complete your request in seconds.",
  },
  {
    step: "04",
    title: "Enjoy the Experience",
    description: "Track your driver or service provider in real-time with reliable digital updates.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is UBS Super Taxi?",
    answer:
      "UBS Super Taxi is a dedicated taxi and ride-booking application. It focuses exclusively on making everyday transportation fast, simple, and reliable with multiple vehicle options, clear route visibility, and convenient booking.",
  },
  {
    question: "How can I download UBS Super Taxi?",
    answer:
      "You can download UBS Super Taxi directly on Android via the Google Play Store. Simply tap any 'Download UBS Super Taxi' button on this website or search for 'UBS Super Taxi' on Google Play.",
  },
  {
    question: "What is UBSSuper?",
    answer:
      "UBSSuper is an all-in-one booking and service platform that brings multiple everyday services together in one mobile application — including groceries, food ordering, taxi rides, hotel reservations, doctor bookings, real estate, job search, and everyday home services.",
  },
  {
    question: "What services are available in UBSSuper?",
    answer:
      "UBSSuper provides 8 integrated service categories: Grocery Shopping, Food Ordering, Taxi Booking (powered by the UBS ride ecosystem), Hotel Reservations, Doctor Appointments, Real Estate listings, Job Search, and On-Demand Home Services.",
  },
  {
    question: "Can I book taxis through UBSSuper?",
    answer:
      "Yes! You can book rides directly inside UBSSuper through its dedicated Taxi service category, or you can use the standalone UBS Super Taxi app for a dedicated, instant ride-booking experience.",
  },
  {
    question: "What is the difference between UBSSuper and UBS Super Taxi?",
    answer:
      "UBS Super Taxi is purpose-built specifically for ride and taxi booking with rapid dispatch and vehicle selection. UBSSuper is the broader super app designed for users who want multiple everyday services (food, groceries, stays, healthcare, jobs) in addition to ride booking.",
  },
  {
    question: "Where can I download the apps?",
    answer:
      "Both applications are available on the official Google Play Store for Android smartphones. UBSSuper and UBS Super Taxi each have their own official Google Play Store listing accessible directly from the download buttons on this page.",
  },
] as const;
