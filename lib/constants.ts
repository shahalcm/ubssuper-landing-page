export const APP_LINKS = {
  ubssuper: {
    id: "ubssuper",
    name: "UBSSuper",
    shortName: "UBSSuper",
    role: "Customer / Consumer Super App",
    tagline: "Book food, hotels, taxis & more in one app.",
    description:
      "UBSSuper is the main customer-facing Super App. Book food, hotels, taxis, groceries, logistics, doctors, marketplace products & home appliances in one unified app.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.natechsys.ubssuper",
    logo: "/logos/ubssuper-logo.png",
    primaryColor: "#16A34A",
    accentColor: "#22C55E",
    darkGreen: "#15803D",
    brandColor: "green" as const,
    badge: "Customer Super App",
    headline: "Your All-in-One Super App",
  },
  taxi: {
    id: "taxi",
    name: "UBS Super Taxi",
    shortName: "Super Taxi",
    role: "Dedicated Taxi / Ride Booking App",
    tagline: "Your Ride. Your Way.",
    description:
      "A dedicated application for customers who primarily want taxi and ride-booking services. Simple booking, convenient ride options, transparent route tracking and fast dispatch.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ubs.supertaxi.ubs_super_taxi_app",
    logo: "/logos/ubs-super-taxi-logo.png",
    primaryColor: "#FACC15",
    secondaryYellow: "#EAB308",
    darkYellow: "#CA8A04",
    brandColor: "yellow" as const,
    badge: "Dedicated Taxi App",
    headline: "Dedicated Ride Booking",
  },
  partner: {
    id: "partner",
    name: "UBS Partner",
    shortName: "Partner",
    role: "Business Partner / Merchant / Service Provider App",
    tagline: "Manage. Grow. Connect.",
    coreConcept: "Grow Your Business With UBS",
    description:
      "UBS Partner is the business-side application for restaurants, grocery stores, hotels, taxi operators, logistics providers, doctors, and sellers to manage orders, products, bookings, and earnings.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.natechsys.ubspartners",
    logo: "/logos/ubs-partner-logo.png",
    primaryColor: "#2563EB",
    accentColor: "#3B82F6",
    darkBlue: "#1D4ED8",
    brandColor: "blue" as const,
    badge: "Business & Merchant App",
    headline: "Business Management App",
  },
  delivery: {
    id: "delivery",
    name: "UBS Delivery",
    shortName: "Delivery",
    role: "Delivery Partner / Delivery Driver App",
    tagline: "Powering Every Delivery.",
    coreConcept: "Deliver. Earn. Grow.",
    description:
      "UBS Delivery is the delivery-side application used by delivery partners to manage delivery requests, pickup and drop navigation, order status, and track earnings across the UBS ecosystem.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.natechsys.delivery",
    logo: "/logos/ubs-delivery-logo.png",
    primaryColor: "#EA580C",
    accentColor: "#F97316",
    darkOrange: "#C2410C",
    brandColor: "orange" as const,
    badge: "Delivery Partner App",
    headline: "Delivery Partner App",
  },
} as const;

export const FOUR_APPS = [
  {
    ...APP_LINKS.ubssuper,
    cardTitle: "UBSSuper",
    cardSubtitle: "Your All-in-One Super App",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/40",
    glowColor: "from-green-500/20 via-emerald-500/10 to-transparent",
    accentBorder: "border-green-500/40 hover:border-green-400",
    buttonVariant: "ubssuper" as const,
    buttonText: "Download UBSSuper",
    features: [
      "Taxi Booking",
      "Grocery Shopping",
      "Food Ordering",
      "Hotel Reservations",
      "Logistics & Freight",
      "Doctor Appointments",
      "Marketplace Shopping",
      "Home Appliances",
    ],
  },
  {
    ...APP_LINKS.taxi,
    cardTitle: "UBS Super Taxi",
    cardSubtitle: "Dedicated Ride Booking",
    badgeColor: "bg-yellow-400/20 text-yellow-400 border-yellow-400/40",
    glowColor: "from-yellow-500/20 via-amber-500/10 to-transparent",
    accentBorder: "border-yellow-400/50 hover:border-yellow-300",
    buttonVariant: "taxi" as const,
    buttonText: "Download UBS Super Taxi",
    features: [
      "Ride Booking",
      "Pickup & Destination",
      "Ride Selection",
      "Driver Information",
      "Ride Tracking",
    ],
  },
  {
    ...APP_LINKS.partner,
    cardTitle: "UBS Partner",
    cardSubtitle: "Business Management App",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/40",
    glowColor: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentBorder: "border-blue-500/40 hover:border-blue-400",
    buttonVariant: "partner" as const,
    buttonText: "Download UBS Partner",
    features: [
      "Business Management",
      "Orders",
      "Products",
      "Services",
      "Customers",
      "Earnings",
      "Analytics",
    ],
  },
  {
    ...APP_LINKS.delivery,
    cardTitle: "UBS Delivery",
    cardSubtitle: "Delivery Partner App",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/40",
    glowColor: "from-orange-500/20 via-amber-500/10 to-transparent",
    accentBorder: "border-orange-500/40 hover:border-orange-400",
    buttonVariant: "delivery" as const,
    buttonText: "Download UBS Delivery",
    features: [
      "Delivery Requests",
      "Pickup & Drop",
      "Navigation",
      "Order Status",
      "Delivery History",
      "Earnings",
    ],
  },
] as const;

export const UBSSUPER_SERVICES = [
  {
    id: "taxi",
    title: "Taxi",
    description: "Book city rides with direct dispatch from the UBS transportation fleet.",
    icon: "Car",
    badge: "Dedicated Rides",
    color: "yellow",
    isTaxi: true,
  },
  {
    id: "grocery",
    title: "Grocery",
    description: "Daily supermarket items, farm fresh produce, and home pantry restocking.",
    icon: "ShoppingBag",
    badge: "Everyday Store",
    color: "emerald",
  },
  {
    id: "food",
    title: "Food",
    description: "Discover top-rated local dining spots and savor meals delivered to your doorstep.",
    icon: "UtensilsCrossed",
    badge: "Hot & Fresh",
    color: "amber",
  },
  {
    id: "hotels",
    title: "Hotels",
    description: "Search, compare, and reserve verified boutique stays, resorts and hotels.",
    icon: "Hotel",
    badge: "Stays & Trips",
    color: "indigo",
  },
  {
    id: "logistics",
    title: "Logistics",
    description: "Reliable intra-city parcel transport, bulky item hauling, and business freight.",
    icon: "Truck",
    badge: "Cargo & Haulage",
    color: "cyan",
  },
  {
    id: "doctors",
    title: "Doctors",
    description: "Consult licensed physicians, clinical specialists, and healthcare clinics.",
    icon: "Stethoscope",
    badge: "Care & Health",
    color: "blue",
  },
  {
    id: "marketplace",
    title: "Marketplace",
    description: "Multi-vendor retail catalog featuring fashion, accessories, tools and goods.",
    icon: "Store",
    badge: "Retail & Goods",
    color: "purple",
  },
  {
    id: "appliances",
    title: "Appliances",
    description: "Home electronics, kitchen gadgetry, appliances, and device repair requests.",
    icon: "Tv",
    badge: "Electronics",
    color: "rose",
  },
] as const;

export const SERVICES = UBSSUPER_SERVICES;

export const PARTNER_CATEGORIES = [
  {
    title: "Restaurants",
    description: "Manage digital menus, live orders, kitchen prep times, and dining promotions.",
    icon: "UtensilsCrossed",
  },
  {
    title: "Grocery Stores",
    description: "Sync store stock, manage SKU catalogs, and receive instant pickup requests.",
    icon: "ShoppingBag",
  },
  {
    title: "Hotels",
    description: "Control room inventory, check-in schedules, rate tiers, and guest bookings.",
    icon: "Hotel",
  },
  {
    title: "Taxi Operators",
    description: "Fleet registration, vehicle management, and automated driver dispatch.",
    icon: "Car",
  },
  {
    title: "Logistics Providers",
    description: "Manage commercial routes, heavy freight dispatches, and delivery capacity.",
    icon: "Truck",
  },
  {
    title: "Doctors / Clinics",
    description: "Digital appointment schedule, patient queue visibility, and clinic profiles.",
    icon: "Stethoscope",
  },
  {
    title: "Marketplace Sellers",
    description: "Product catalog management, inventory levels, order fulfillment, and reviews.",
    icon: "Store",
  },
  {
    title: "Appliance Stores",
    description: "Showcase home appliances, warranty tracking, installation, and service inquiries.",
    icon: "Tv",
  },
] as const;

export const PARTNER_CAPABILITIES = [
  {
    title: "Business Dashboard",
    description: "Real-time birds-eye view of your business status, daily activity, and operational alerts.",
    icon: "LayoutDashboard",
  },
  {
    title: "Orders Management",
    description: "Receive, accept, prepare, and complete customer orders with status updates.",
    icon: "PackageCheck",
  },
  {
    title: "Products & Catalog",
    description: "Manage inventory, item pricing, product photos, categories, and stock availability.",
    icon: "Layers",
  },
  {
    title: "Services & Bookings",
    description: "Accept and coordinate appointment slots, bookings, and customer scheduling.",
    icon: "CalendarCheck",
  },
  {
    title: "Customers & Reviews",
    description: "View customer feedback, ratings, and build lasting customer relationships.",
    icon: "Users",
  },
  {
    title: "Earnings & Payouts",
    description: "Clear breakdown of completed orders, revenue summaries, and payout tracking.",
    icon: "BadgePercent",
  },
] as const;

export const DELIVERY_CAPABILITIES = [
  {
    title: "Delivery Requests",
    description: "Instant dispatch notifications with transparent pickup and delivery information.",
    icon: "BellRing",
  },
  {
    title: "Active Navigation",
    description: "Optimized route mapping with turn-by-turn guidance for fast, safe deliveries.",
    icon: "Compass",
  },
  {
    title: "Pickup & Drop Details",
    description: "Accurate store pickup points, customer drop addresses, and handling instructions.",
    icon: "MapPin",
  },
  {
    title: "Order Status Updates",
    description: "Simple step-by-step milestones: Arrived, Picked Up, In Transit, Delivered.",
    icon: "CheckCircle2",
  },
  {
    title: "Earnings Tracking",
    description: "Transparent earnings per trip, daily totals, and weekly payout summaries.",
    icon: "DollarSign",
  },
  {
    title: "Delivery History",
    description: "Comprehensive trip log with timestamps, routes taken, and customer confirmations.",
    icon: "Clock",
  },
] as const;

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

export const FAQ_ITEMS = [
  {
    question: "What is the UBS Ecosystem?",
    answer:
      "The UBS Ecosystem is a connected digital technology platform comprising four dedicated applications: UBSSuper (Customer Super App), UBS Super Taxi (Dedicated Ride Booking App), UBS Partner (Business & Merchant Management App), and UBS Delivery (Delivery Partner & Driver App). Together, they seamlessly link consumers, merchants, drivers, and delivery partners.",
  },
  {
    question: "What is UBSSuper and what services does it provide?",
    answer:
      "UBSSuper is the all-in-one consumer Super App. It allows customers to access 8 key service categories from a single application: Taxi Booking, Grocery Shopping, Food Ordering, Hotel Reservations, Logistics & Freight, Doctor Appointments, Marketplace Shopping, and Home Appliances.",
  },
  {
    question: "How is UBS Super Taxi different from UBSSuper?",
    answer:
      "UBS Super Taxi is a purpose-built, dedicated application focused solely on ride and taxi booking with instant map launch, route tracking, and custom vehicle tiers (Bike, Auto, Mini, Sedan, SUV, Luxury). UBSSuper is the broader multi-service super app that also includes food, groceries, healthcare, stays, logistics, and retail shopping.",
  },
  {
    question: "What is UBS Partner and who is it designed for?",
    answer:
      "UBS Partner is designed for businesses and independent service providers who partner with UBS. This includes restaurants, grocery merchants, hotels, taxi fleet operators, logistics providers, doctors, and marketplace sellers. It provides order fulfillment tools, product catalogs, service listings, booking management, and revenue analytics.",
  },
  {
    question: "What is UBS Delivery and how do delivery partners use it?",
    answer:
      "UBS Delivery is the dedicated mobile app for delivery couriers and drivers. It enables partners to receive on-demand delivery requests, navigate to pickup and drop-off locations, communicate order progress, and track daily earnings across food, grocery, and marketplace deliveries.",
  },
  {
    question: "Where can I download the UBS apps?",
    answer:
      "All four applications are officially available on Google Play for Android smartphones. Each app has its own direct listing: UBSSuper, UBS Super Taxi, UBS Partner, and UBS Delivery. You can download each app directly using the official Google Play buttons on this website.",
  },
  {
    question: "Do all four apps work together?",
    answer:
      "Yes. When a customer places an order or requests a service on UBSSuper, it is received by the merchant on UBS Partner and dispatched to a courier via UBS Delivery. Similarly, dedicated taxi bookings placed on UBS Super Taxi are directly matched with drivers in the UBS transportation network.",
  },
] as const;

export const STATS = [
  { value: "4", label: "Connected Apps", sub: "One unified platform" },
  { value: "8+", label: "Services", sub: "All in UBSSuper" },
  { value: "24/7", label: "Convenience", sub: "Round-the-clock access" },
  { value: "Fast", label: "Booking & Dispatch", sub: "Real-time coordination" },
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

export const UNIVERSAL_STEPS = [
  {
    step: "01",
    title: "Choose Your App",
    description: "Launch UBSSuper for everyday services, UBS Super Taxi for direct rides, UBS Partner for business management, or UBS Delivery for delivery dispatch.",
  },
  {
    step: "02",
    title: "Select Service or Order",
    description: "Select rides, meals, groceries, freight, hotel stays, health appointments, or accept customer fulfillment requests.",
  },
  {
    step: "03",
    title: "Confirm in Seconds",
    description: "Review transparent options, check upfront fares or order specs, and complete your action with a single tap.",
  },
  {
    step: "04",
    title: "Real-Time Tracking",
    description: "Follow your driver, order progress, or delivery courier live with real-time status updates.",
  },
] as const;

