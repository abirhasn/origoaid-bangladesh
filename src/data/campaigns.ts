export interface Campaign {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  raised: number;
  goal: number;
  daysLeft: number;
  category: string;
  organizer?: string;
  location?: string;
  backers?: number;
}

export const campaignsData: Campaign[] = [
  {
    id: "clean-water-sylhet",
    title: "Clean Water for Sylhet Villages",
    description: "Providing safe drinking water to 500 families in remote areas of Sylhet through tube well installations.",
    longDescription: "Access to clean drinking water remains one of the most pressing challenges for rural communities in Sylhet. This campaign aims to install 50 deep tube wells across 10 villages, providing safe and reliable water to over 500 families. Each tube well serves approximately 10 families and is built to last 15+ years with minimal maintenance. Our team of local engineers and community volunteers will oversee installation and provide training on water safety and hygiene practices.",
    image: "https://images.unsplash.com/photo-1594398901394-4e34939a02eb?w=600&h=400&fit=crop",
    raised: 285000,
    goal: 500000,
    daysLeft: 18,
    category: "Community",
    organizer: "Sylhet Water Foundation",
    location: "Sylhet Division",
    backers: 342,
  },
  {
    id: "girls-education-rangpur",
    title: "Girls' Education Fund - Rangpur",
    description: "Supporting 200 girls in Rangpur with scholarships, books, and school supplies for a full academic year.",
    longDescription: "Education is the most powerful tool for change. In Rangpur, many talented girls are forced to drop out due to financial constraints. This fund provides full scholarships covering tuition, textbooks, uniforms, and school supplies for 200 deserving students. We also offer after-school tutoring and mentorship programs to ensure academic success. Every donation directly impacts a young girl's future and her community.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
    raised: 420000,
    goal: 600000,
    daysLeft: 25,
    category: "Education",
    organizer: "Rangpur Education Trust",
    location: "Rangpur Division",
    backers: 587,
  },
  {
    id: "mobile-health-clinic",
    title: "Mobile Health Clinic - Char Areas",
    description: "A floating medical clinic bringing healthcare to flood-prone char communities in the Brahmaputra.",
    longDescription: "Char communities along the Brahmaputra river are among the most isolated in Bangladesh. With no roads and limited access to medical facilities, residents often go without basic healthcare. Our mobile floating clinic will travel between char islands providing primary care, vaccinations, maternal health services, and emergency treatment. The clinic will be staffed by qualified doctors, nurses, and health workers making bi-weekly rounds to 15 char communities.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop",
    raised: 780000,
    goal: 1200000,
    daysLeft: 32,
    category: "Healthcare",
    organizer: "River Health Initiative",
    location: "Kurigram District",
    backers: 1024,
  },
  {
    id: "tech-skills-dhaka",
    title: "Tech Skills for Youth - Dhaka",
    description: "Free coding bootcamp for 100 underprivileged youth in Dhaka to build careers in technology.",
    longDescription: "Bangladesh's tech sector is booming, but access to quality training remains unequal. This bootcamp provides 100 young people from low-income backgrounds with 6 months of intensive training in web development, mobile apps, and data science. Graduates receive job placement support and mentorship from industry professionals. Previous cohorts have seen 85% employment rates within 3 months of graduation.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    raised: 150000,
    goal: 350000,
    daysLeft: 40,
    category: "Startup",
    organizer: "Code for Bangladesh",
    location: "Dhaka",
    backers: 198,
  },
  {
    id: "flood-relief-north",
    title: "Flood Relief - Northern Bangladesh",
    description: "Emergency relief and rehabilitation for families affected by monsoon floods in northern districts.",
    longDescription: "The 2024 monsoon season has devastated northern Bangladesh, displacing thousands of families. This emergency fund provides immediate relief including food packages, clean water, temporary shelter, and medical supplies. Phase two focuses on rebuilding homes, restoring livelihoods, and providing psychological support. Every taka counts in helping our brothers and sisters recover from this disaster.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
    raised: 950000,
    goal: 1000000,
    daysLeft: 5,
    category: "Emergency",
    organizer: "Bangladesh Relief Network",
    location: "Northern Districts",
    backers: 2150,
  },
  {
    id: "organic-farming-khulna",
    title: "Organic Farming Co-op - Khulna",
    description: "Establishing an organic farming cooperative for 50 small farmers in the Khulna region.",
    longDescription: "Small farmers in Khulna face mounting challenges from climate change and rising input costs. This cooperative will unite 50 farmers to practice organic farming, share resources, and access premium markets. Members receive training in composting, natural pest management, and crop rotation. The co-op will also establish a direct-to-consumer marketplace, ensuring farmers earn fair prices for their produce.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop",
    raised: 88000,
    goal: 400000,
    daysLeft: 45,
    category: "Agriculture",
    organizer: "Green Khulna Initiative",
    location: "Khulna Division",
    backers: 112,
  },
];
