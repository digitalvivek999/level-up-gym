import { GymConfig, MembershipPlan, ProgramItem, ServiceItem, ReviewItem, GalleryItem, FAQItem, TransformationItem } from '../types';

export const GYM_CONFIG: GymConfig = {
  name: "LEVEL UP FITNESS STUDIO",
  tagline: "Train Hard. Move Better. Get Stronger.",
  phone: "07249550348",
  whatsapp: "917249550348",
  rating: "5.0",
  reviewCount: "46",
  address: "Behind Nahar Nursing Hospital, Behind Durga Mandir, Bharhut Nagar",
  landmark: "Behind Nahar Nursing Hospital & Durga Mandir",
  area: "Bharhut Nagar",
  city: "Satna",
  state: "Madhya Pradesh",
  pincode: "485005",
  mapsUrl: "https://maps.app.goo.gl/m2iXERgrz3gWdwWq6",
  instagramUrl: "https://www.instagram.com/levelupfitness_satna/",
  coachName: "Shashank Khare",
  coachTitle: "INTERNATIONAL CERTIFIED FITNESS COACH"
};

export const createWhatsAppUrl = (message?: string): string => {
  const cleanPhone = GYM_CONFIG.whatsapp.replace(/\D/g, '');
  const text = message 
    ? encodeURIComponent(message)
    : encodeURIComponent(`Hi Level Up Fitness Studio! I'm interested in joining. Please share details about programs, timings, and membership plans.`);
  return `https://wa.me/${cleanPhone}?text=${text}`;
};

export const GYM_IMAGES = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop",
  aboutStudio: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
  coach: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1000&auto=format&fit=crop",
  boxingHero: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
  functional: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
  womenGroup: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  transformationBg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
  ctaBg: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1920&auto=format&fit=crop",
  mapMock: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop"
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Monthly Membership",
    price: "Contact for Price",
    duration: "Per Month",
    features: [
      "Access to Gym & Functional Zone",
      "Personalized Fitness Assessment",
      "Structured Daily Workout Routine",
      "Locker & Studio Amenities",
      "Trainer Assistance On Floor"
    ],
    ctaText: "Enquire Monthly Plan"
  },
  {
    id: "quarterly",
    name: "Quarterly Membership",
    price: "Contact for Price",
    duration: "3 Months",
    popular: true,
    features: [
      "Everything in Monthly Plan",
      "Body Composition Analysis",
      "Goal-based Routine Adjustment",
      "Group Fitness & Combat Discount",
      "Priority Coach Guidance"
    ],
    ctaText: "Enquire Quarterly Plan"
  },
  {
    id: "personal-training",
    name: "1-on-1 Personal Training",
    price: "Ask for Details",
    duration: "Custom Sessions",
    features: [
      "Dedicated Session with Coach Shashank Khare",
      "Customized Workout & Diet Blueprint",
      "Postural & Strength Correction",
      "Direct WhatsApp Progress Tracking",
      "Flexible Morning/Evening Slots"
    ],
    ctaText: "Talk to Coach"
  },
  {
    id: "combat-training",
    name: "Combat Sports Pass",
    price: "Ask for Details",
    duration: "Monthly / Special",
    features: [
      "Boxing & Heavy Bag Drills",
      "Kickboxing Technique & Pads",
      "MMA Conditioning Sessions",
      "Cardio & Fighter Stamina Workouts",
      "All Fitness Levels Welcome"
    ],
    ctaText: "Enquire Combat Pass"
  }
];

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "pt",
    number: "01",
    title: "PERSONAL TRAINING",
    shortDesc: "Personalized one-to-one fitness guidance tailored to your body type, goals, and speed of progression.",
    fullDesc: "Under International Certified Coach Shashank Khare, receive individual focus to master posture, lift safely, and accelerate results.",
    category: "personal",
    highlights: ["Individualized Focus", "Posture & Form Correction", "Flexible Timings"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "weight-loss",
    number: "02",
    title: "WEIGHT LOSS TRAINING",
    shortDesc: "Structured fitness sessions engineered specifically to torch fat while maintaining lean muscle strength.",
    fullDesc: "A high-energy, consistency-focused routine combining functional cardio, resistance training, and nutritional advice.",
    category: "functional",
    highlights: ["Targeted Fat Loss", "Calorie Torching Loops", "Sustained Stamina"],
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "functional",
    number: "03",
    title: "FUNCTIONAL TRAINING",
    shortDesc: "Movement-focused workouts designed to develop balance, core stability, coordination, and real-world power.",
    fullDesc: "Utilizing kettlebells, battle ropes, medicine balls, and turf drills to build athletic resilience.",
    category: "functional",
    highlights: ["Full Body Agility", "Core Activation", "Athletic Movement"],
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "boxing",
    number: "04",
    title: "BOXING",
    shortDesc: "Boxing fundamentals, heavy bag conditioning, footwork drills, and technique-focused strike training.",
    fullDesc: "Learn proper stance, jab-cross combinations, defensive slips, and high-intensity punching bag endurance.",
    category: "combat",
    highlights: ["Hand-Eye Coordination", "Stress Relief", "Upper Body Conditioning"],
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "kickboxing",
    number: "05",
    title: "KICKBOXING",
    shortDesc: "Combat-style conditioning merging strike velocity with powerful kick techniques and pad work.",
    fullDesc: "Engage lower body power, improve hip mobility, and build supreme cardiovascular endurance.",
    category: "combat",
    highlights: ["High Explosiveness", "Agility & Reflexes", "Total Body Burn"],
    image: "https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mma",
    number: "06",
    title: "MMA (MIXED MARTIAL ARTS)",
    shortDesc: "Mixed Martial Arts inspired functional conditioning for build endurance, discipline, and mental strength.",
    fullDesc: "Combines striker movement, core endurance, and conditioning drills suitable for beginners and combat enthusiasts.",
    category: "combat",
    highlights: ["Mental Toughness", "Fighter Conditioning", "Full Spectrum Fitness"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "crossfit",
    number: "07",
    title: "CROSSFIT",
    shortDesc: "High-intensity functional movements executed at varying workout paces to elevate athletic capacity.",
    fullDesc: "Constantly varied sessions testing grip, Olympic movements, plyometrics, and stamina.",
    category: "functional",
    highlights: ["Peak Endurance", "Compound Lifts", "Community Push"],
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "hiit",
    number: "08",
    title: "HIIT (INTERVAL TRAINING)",
    shortDesc: "Short, intense bursts of exertion interspersed with brief recovery periods for maximum metabolic impact.",
    fullDesc: "Ideal for busy schedules looking for efficient, powerful, cardio-pumping gym workouts.",
    category: "functional",
    highlights: ["Time-Efficient", "Metabolic Boost", "Cardiovascular Power"],
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "yoga",
    number: "09",
    title: "YOGA",
    shortDesc: "Mindful movement, flexibility enhancement, deep breath control, and mobility-focused sessions.",
    fullDesc: "Complements heavy training by reducing muscle stiffness, protecting joints, and improving mental focus.",
    category: "group",
    highlights: ["Joint Mobility", "Flexibility & Recovery", "Mental Calm"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "zumba",
    number: "10",
    title: "ZUMBA",
    shortDesc: "Energetic, rhythm-driven group dance fitness designed to make cardio fun and exhilarating.",
    fullDesc: "Sweat to upbeat music in a friendly group setting that turns exercise into an enjoyable habit.",
    category: "group",
    highlights: ["High Energy", "Rhythm Cardio", "Upbeat Group Vibe"],
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bootcamp",
    number: "11",
    title: "BOOT CAMP",
    shortDesc: "Group-oriented high-energy fitness sessions that challenge team spirit and push physical boundaries.",
    fullDesc: "Dynamic team-based obstacle circuits, partner drills, and motivational group sweat sessions.",
    category: "group",
    highlights: ["Team Motivation", "Diverse Circuits", "High Energy Vibe"],
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nutrition",
    number: "12",
    title: "NUTRITION CONSULTING",
    shortDesc: "Practical dietary and nutrition guidance aligned with your daily lifestyle and physical training.",
    fullDesc: "Learn sustainable macro planning, hydration, and wholesome nutrition tips without crash dieting.",
    category: "personal",
    highlights: ["Sustainable Habits", "Macro Guidance", "Lifestyle Fit"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  { id: "personal-training", title: "Personal Training", description: "1-on-1 dedicated coaching with custom routine and technique correction.", iconName: "UserCheck", badge: "Popular" },
  { id: "weight-loss-training", title: "Weight Loss Training", description: "Targeted calorie-burning, habit-building fitness routines.", iconName: "Flame", badge: "High Demand" },
  { id: "boxing", title: "Boxing", description: "Pads work, heavy bags, stance, and explosive strike combinations.", iconName: "Swords" },
  { id: "kickboxing", title: "Kickboxing", description: "Dynamic kick-boxing workouts for athletic agility and leg power.", iconName: "Zap" },
  { id: "mma", title: "MMA / Mixed Martial Arts", description: "Striking, core strength, and combat-style athletic conditioning.", iconName: "Shield" },
  { id: "functional-training", title: "Functional Training", description: "Turf exercises, kettlebells, battle ropes, and movement drills.", iconName: "Activity" },
  { id: "crossfit", title: "CrossFit", description: "High-intensity functional movement circuits for power and endurance.", iconName: "Dumbbell" },
  { id: "hiit", title: "HIIT Exercise Classes", description: "Fast-paced interval workouts that keep burning calories all day.", iconName: "Timer" },
  { id: "zumba", title: "Zumba", description: "Dance fitness sessions with uplifting music and continuous cardio.", iconName: "Music" },
  { id: "yoga-classes", title: "Yoga Classes", description: "Breathwork, deep stretching, posture alignment, and recovery.", iconName: "HeartPulse" },
  { id: "boot-camp", title: "Boot Camp", description: "Group fitness circuits building community spirit and physical stamina.", iconName: "Users" },
  { id: "aerobics", title: "Aerobics", description: "Rhythmic cardiovascular workouts for heart health and energy.", iconName: "Sparkles" },
  { id: "weight-training", title: "Weight Training", description: "Free weights, barbells, and machines for strength & muscle tone.", iconName: "BicepsFlexed" },
  { id: "nutrition-consulting", title: "Nutrition Consulting", description: "Personalized dietary advice to complement your gym training.", iconName: "Apple" },
  { id: "special-population", title: "Special Population Workout", description: "Customized workouts for joint recovery, beginners, or specific body needs.", iconName: "ShieldCheck" },
  { id: "youth-sports", title: "Youth Sports", description: "Foundational strength and agility training for young athletes.", iconName: "Trophy" },
  { id: "adult-sports", title: "Adult Sports Conditioning", description: "Athletic agility, speed, and stamina conditioning for active adults.", iconName: "Award" },
  { id: "jazzercise", title: "Jazzercise / Rhythm Dance", description: "Rhythmic pulse workouts blending dance and light weight resistance.", iconName: "Radio" }
];

export const TRANSFORMATIONS_DATA: TransformationItem[] = [
  {
    id: "t1",
    title: "20 KG Weight Loss Journey",
    story: "A dedicated Level Up member achieved a remarkable 20 kg weight loss transformation through consistent personal training, structured cardio, and guided nutrition advice.",
    quote: "Losing 20 kg felt unbelievable. Shashank sir kept me disciplined and gave personal attention during every single session.",
    reviewerName: "Verified Level Up Member",
    verifiedReview: true,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    tag: "-20 KG Result"
  },
  {
    id: "t2",
    title: "5 KG Loss in 20 Days",
    story: "Rapid yet structured weight management routine focusing on high-intensity functional circuits, fat burn conditioning, and active daily habits.",
    quote: "I saw a 5 kg drop in just 20 days with proper posture guidance and no unscientific crash diets. The environment here is so motivating!",
    reviewerName: "Verified Google Reviewer",
    verifiedReview: true,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    tag: "-5 KG in 20 Days"
  },
  {
    id: "t3",
    title: "Strength & Posture Reset",
    story: "Transformed posture, core strength, and overall stamina through functional weight training and boxing workouts under Coach Shashank.",
    quote: "Before joining Level Up, I had frequent back tightness and low stamina. Within months, my posture improved completely and my energy doubled.",
    reviewerName: "Verified Member Satna",
    verifiedReview: true,
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
    tag: "Posture & Strength"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "r1",
    name: "Aman Sharma",
    rating: 5,
    text: "Level Up Fitness Studio is hands down the best fitness center in Satna. Shashank sir is highly knowledgeable, supportive, and ensures personal attention for every individual on the floor.",
    timeAgo: "2 months ago",
    highlight: "Knowledgeable Coach & Personal Attention"
  },
  {
    id: "r2",
    name: "Pooja Verma",
    rating: 5,
    text: "The studio is super clean, well-equipped, and has a very positive atmosphere. I joined for Zumba and functional training and I've seen amazing progress in my stamina!",
    timeAgo: "1 month ago",
    highlight: "Clean & Positive Vibe"
  },
  {
    id: "r3",
    name: "Rahul Singh",
    rating: 5,
    text: "The boxing and kickboxing sessions here are top level! Proper training and advice from Coach Shashank Khare. If you want a real body transformation in Satna, this is the place.",
    timeAgo: "3 months ago",
    highlight: "Top Combat Sports Training"
  },
  {
    id: "r4",
    name: "Neha Tripathy",
    rating: 5,
    text: "Best body transformation studio in Bharhut Nagar Satna. Structured workouts with warm-up, core training, and cool-down. Very safe and encouraging environment.",
    timeAgo: "4 months ago",
    highlight: "Structured Workouts"
  },
  {
    id: "r5",
    name: "Vikram Gautam",
    rating: 5,
    text: "Lost 5 kg in 20 days with proper workouts! Shashank sir explains the reason behind every exercise and corrects your form immediately.",
    timeAgo: "5 months ago",
    highlight: "Fast Consistent Results"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Studio Floor & Heavy Weights Area",
    category: "STUDIO",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    caption: "Clean, high-energy studio floor behind Nahar Nursing Hospital in Bharhut Nagar, Satna."
  },
  {
    id: "g2",
    title: "Boxing & Combat Heavy Bag Training",
    category: "BOXING",
    imageUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
    caption: "Heavy bag striking, pad drills, and fight-style conditioning at Level Up."
  },
  {
    id: "g3",
    title: "Personal Training Session with Coach Shashank",
    category: "COACH",
    imageUrl: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop",
    caption: "International Certified Fitness Coach Shashank Khare guiding proper form."
  },
  {
    id: "g4",
    title: "Functional Turf & Kettlebell Workouts",
    category: "TRAINING",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
    caption: "Functional movements, battle ropes, and explosive core stability exercises."
  },
  {
    id: "g5",
    title: "Energetic Group Fitness & Zumba Batch",
    category: "GROUP FITNESS",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    caption: "Supportive and vibrant group workout atmosphere for all fitness levels."
  },
  {
    id: "g6",
    title: "Weight Loss & Endurance Transformation",
    category: "TRANSFORMATIONS",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
    caption: "Goal-oriented fitness programs delivering measurable transformation progress."
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where is Level Up Fitness Studio located?",
    answer: "Level Up Fitness Studio is located behind Nahar Nursing Hospital and behind Durga Mandir in Bharhut Nagar, Satna, Madhya Pradesh 485005."
  },
  {
    id: "faq-2",
    question: "What training programs are available?",
    answer: "The studio offers Personal Training, Weight Training, Functional Training, Boxing, Kickboxing, MMA, CrossFit, HIIT, Yoga, Zumba, Aerobics, Boot Camp, Weight Loss Training, and specialized workout options."
  },
  {
    id: "faq-3",
    question: "Does Level Up offer personal training?",
    answer: "Yes. Personal training is one of the core specialties of Level Up Fitness Studio, led by International Certified Fitness Coach Shashank Khare with customized 1-on-1 attention."
  },
  {
    id: "faq-4",
    question: "Is boxing training available?",
    answer: "Yes! Boxing, Kickboxing, and MMA-inspired combat conditioning are available for members who want to build strength, reflexes, and fighters' stamina."
  },
  {
    id: "faq-5",
    question: "Does the studio offer weight-loss training?",
    answer: "Yes. Weight Loss Training is a key program designed around structured fat-burning workouts, cardio circuits, and sustainable diet advice."
  },
  {
    id: "faq-6",
    question: "Does Level Up offer Zumba?",
    answer: "Yes. High-energy group Zumba and dance fitness sessions are conducted regularly for enjoyable cardio and endurance."
  },
  {
    id: "faq-7",
    question: "How can I know membership prices?",
    answer: "Please contact the studio directly via phone (07249550348) or click 'Chat on WhatsApp' on this website to receive the latest membership plans and trial details."
  },
  {
    id: "faq-8",
    question: "Can I contact the coach?",
    answer: "Yes, you can directly connect with Coach Shashank Khare through WhatsApp or by placing a direct phone call via the website buttons."
  },
  {
    id: "faq-9",
    question: "Where can I see Google reviews?",
    answer: "You can read authentic member reviews directly in the Reviews section on this page or visit the official Google Maps link: https://maps.app.goo.gl/m2iXERgrz3gWdwWq6."
  }
];
