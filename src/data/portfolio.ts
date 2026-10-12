export const profile = {
  name: "Ezequiel Dominguez Pace",
  initials: "EDP",
  location: "Argentina",
  role: "Lead Product Designer",
  descriptor: "AI · Healthcare · Design systems",
  introduction:
    "I turn complex systems into clear, useful products. My work brings together UX strategy, product thinking, and emerging AI to improve the way people work.",
  summary:
    "I’m a product and UX designer with a background in industrial design and more than 20 years building products across physical and digital spaces. Over the past two years, I’ve focused on AI-driven product design—especially complex healthcare and B2B workflows. I partner with product, engineering, and stakeholders to make AI useful, usable, and trustworthy.",
  linkedin:
    "https://www.linkedin.com/in/ezequiel-dominguez-pace-1029839/",
  behance: "https://www.behance.net/Zeque-Dominguez-Pace",
} as const;

export const experiences = [
  {
    company: "Kopius, Inc.",
    client: "Homecare Homebase (HCHB)",
    title: "UX/UI Designer · Project Leader",
    period: "August 2023 — Present",
    location: "Texas, United States",
    description:
      "Leading design and product definition for AI-powered scheduling, clinician workflows, and decision support in home healthcare.",
    highlights: [
      "Designed smart scheduling concepts for staffing, routing, and workload distribution.",
      "Defined AI interaction patterns for recommendations, automation, and explainability.",
      "Partnered with product and engineering from discovery and research through prototypes and implementation-ready specifications.",
      "Contributed to Care+ clinical recommendations and intelligent workflow improvements.",
    ],
  },
  {
    company: "Making Sense LLC",
    client: "Shop Your Way · Fintech",
    title: "Senior UX/UI Designer",
    period: "January 2022 — August 2023",
    location: "United States",
    description:
      "Worked across a retail marketplace, responsive web experience, and B2B fintech products using research-led UX and Agile ways of working.",
    highlights: [
      "Contributed to research, usability testing, interaction design, and functional walkthroughs.",
      "Facilitated UX workshops, including UX writing and gamification.",
      "Collaborated on reusable design-system components and maintained close client communication.",
    ],
  },
  {
    company: "IBM iX",
    client: "Telecommunications",
    title: "UX Designer · Conversational Designer · Cell Squad Leader",
    period: "February 2021 — January 2022",
    location: "Buenos Aires, Argentina",
    description:
      "Focused on research and voice user experience for AI-powered telecommunications products, using Agile and Enterprise Design Thinking.",
    highlights: [
      "Created UX writing and conversational flows using flowcharts and storytelling.",
      "Conducted interviews, journey mapping, persona work, card sorting, and usability testing.",
      "Led client co-creation workshops.",
    ],
  },
  {
    company: "Grimoldi S.A.",
    client: "Hush Puppies · CAT Footwear · 3D design modernization",
    title: "Lead UX Designer · Brand Manager · Project Leader",
    period: "2016 — February 2021",
    location: "Buenos Aires Province, Argentina",
    description:
      "Held roles across digital experience, brand strategy, and product-design operations. The LinkedIn profile records a total tenure of 7 years and 10 months.",
    highlights: [
      "Led UX research and website design for Hush Puppies across desktop and mobile.",
      "Managed CAT Footwear brand strategy, product mix, and a cross-functional team.",
      "Led a nine-person team on 3D design implementation, reporting to the CEO.",
    ],
  },
  {
    company: "Freelance",
    client: "Projects across multiple industries",
    title: "UX Designer · Discovery, Ideation & UI",
    period: "January 2018 — December 2022",
    location: "",
    description:
      "Delivered research-informed digital product design, working with clients, developers, and stakeholders from discovery through prototypes.",
    highlights: [
      "Created tailored research plans, user flows, wireframes, and prototypes.",
      "Aligned project teams around goals, timelines, and design decisions.",
    ],
  },
] as const;

export const projects = [
  {
    number: "01",
    title: "Clinician dashboard",
    category: "Healthcare · HCHB",
    summary:
      "A daily mission-control concept bringing visits, alerts, messages, and progress into one clinician view.",
    challenge:
      "Clinicians need to understand what matters next without navigating a scattered set of administrative tasks. The brief focuses on prioritization, timely visits, and giving clinicians a more supportive daily experience.",
    approach:
      "The source case study describes interviews with HCHB schedulers, workflow observation, and gathering the information clinicians and schedulers need to act on.",
    designed:
      "A centralized dashboard concept with context-aware priorities and clear visit and progress information.",
    role: "UX/UI design · project leadership",
    methods: "Scheduler interviews · workflow observation · prioritization",
    evidence: "",
    href: "https://www.behance.net/gallery/235885827/Clinician-dashboard",
    visual: "dashboard",
    accent: "mint",
  },
  {
    number: "02",
    title: "Scheduling data visualization",
    category: "Healthcare · HCHB",
    summary:
      "A scheduler-focused view for understanding availability, workload, conflicts, and route opportunities.",
    challenge:
      "Schedulers coordinate home-health visits while responding to changes, travel logistics, workload imbalance, and scheduling conflicts.",
    approach:
      "The project material describes scheduler interviews, workflow observation, and benchmarking across healthcare, logistics, and workforce-management dashboards.",
    designed:
      "A dashboard concept intended to make clinician availability, schedule gaps, conflicts, routes, and workload distribution easier to scan.",
    role: "UX/UI design · research",
    methods: "Scheduler interviews · benchmarking · data visualization",
    evidence: "",
    href: "https://www.behance.net/gallery/218867227/Data-visualization",
    visual: "chart",
    accent: "lavender",
  },
  {
    number: "03",
    title: "AI-assisted care workflows",
    category: "AI · Healthcare · HCHB",
    summary:
      "Smart scheduling, clinician workflows, and clinical recommendations designed around real operational needs.",
    challenge:
      "Home-health operations involve complex staffing, routing, and workload decisions. AI capabilities need to fit existing work and be understandable to the people acting on them.",
    approach:
      "The profile describes end-to-end design, usability testing, feature prioritization, and close partnership with product, engineering, and stakeholders.",
    designed:
      "Smart scheduling and routing concepts, AI-assisted experiences for schedulers and clinicians, and contributions to Care+ clinical recommendations. No quantified outcome is claimed in the supplied materials.",
    role: "UX/UI design · project leadership",
    methods: "Discovery · usability testing · AI recommendations and explainability",
    evidence: "",
    href: "https://www.behance.net/Zeque-Dominguez-Pace",
    visual: "care",
    accent: "pink",
  },
  {
    number: "04",
    title: "Shop Your Way marketplace",
    category: "E-commerce · Mobile & web",
    summary:
      "Marketplace experiences connecting product discovery, purchases, points, and rewards across app and responsive web.",
    challenge:
      "The supplied case material frames the work around extending a marketplace experience to web users while supporting shopping, points earning, and gift-card redemption.",
    approach:
      "The source describes user-centered design. The LinkedIn profile also documents research, usability testing, micro-interactions, workshops, and design-system collaboration across the Shop Your Way work.",
    designed:
      "A responsive marketplace concept for browsing and buying products, earning points, and redeeming rewards.",
    role: "Senior UX/UI design · research",
    methods: "Agile · user research · usability testing · design-system collaboration",
    evidence: "",
    href: "https://www.behance.net/gallery/169767103/marketplace-web-app",
    visual: "marketplace",
    accent: "pink",
  },
  {
    number: "05",
    title: "Credit Hub",
    category: "Fintech · Responsive web",
    summary:
      "A clearer path for comparing credit-card offerings, creating an account, and applying.",
    challenge:
      "The project brief identifies confusion around credit-card options and the application process as the problem to address.",
    approach:
      "The supplied case study describes a user-centered approach focused on clear information, account creation, an understandable application flow, security, and support.",
    designed:
      "A responsive credit hub concept that organizes product information and guides people through account creation and application steps. The PDF includes unsubstantiated generic results, so no conversion claim is repeated here.",
    role: "Senior UX/UI design",
    methods: "Responsive design · product comparison · guided application flows",
    evidence: "",
    href: "https://www.behance.net/gallery/169755383/Credit-Hub",
    visual: "fintech",
    accent: "lavender",
  },
  {
    number: "06",
    title: "Atom Design System",
    category: "Design systems",
    summary:
      "A component hierarchy exploring how foundational interface elements can build into complete experiences.",
    challenge:
      "The case material focuses on consistency, reuse, scalability, collaboration, and maintainability across interface work.",
    approach:
      "The documented structure moves from foundational tokens and elements through components and larger interface compositions.",
    designed:
      "A documented design-system concept covering color, typography, shadows, spacing, components, and page-level structures.",
    role: "Design-system concept",
    methods: "Atomic design · design tokens · reusable components",
    evidence: "",
    href: "https://www.behance.net/gallery/205378411/Atom-Design-System",
    visual: "system",
    accent: "mint",
  },
  {
    number: "07",
    title: "Conversational assistant",
    category: "AI · Voice UX · Telecom",
    summary:
      "A cognitive assistant concept shaped through user research, conversational flows, and iterative text and voice testing.",
    challenge:
      "The project brief aimed to improve customer service, improve NPS, and reduce a flow of six million monthly calls handled by people.",
    approach:
      "The case study documents 20 user interviews, proto-personas informed by client data, IVR card sorting, stakeholder workshops, conversational flows, and repeated tests with real users.",
    designed:
      "A virtual cognitive assistant using IBM Watson Assistant, refined through text-chat and voice-chat prototypes. The deck records evaluation findings before a planned production launch.",
    role: "UX & conversational design · cell squad leadership",
    methods: "IBM Watson Assistant · 20 interviews · IVR card sorting · text and voice testing",
    evidence:
      "The deck reports that 80% found talking to the virtual assistant comfortable, 80% felt safe doing so, and 87% said completing their request was simpler than with a human. The test sample size is not stated in the source.",
    href: "https://www.behance.net/Zeque-Dominguez-Pace",
    visual: "care",
    accent: "mint",
  },
  {
    number: "08",
    title: "Hush Puppies e-commerce",
    category: "E-commerce · UX research",
    summary:
      "Improving product discovery between store windows and a desktop-and-mobile footwear site.",
    challenge:
      "The business goal was to increase online sales, reduce unfinished conversions, and improve the intended store-to-online sales mix. Those were project goals, not reported achieved results.",
    approach:
      "Research included 12 interviews across 3 stores, 400 digital-user surveys, and platform analytics. The work also developed personas, journey maps, and empathy maps.",
    designed:
      "The documented design directions focused on clearer footwear categories, more useful filters, saving favorites, and prompts to continue a purchase from favorites.",
    role: "Lead UX design · UX research",
    methods: "12 interviews · 400 surveys · analytics · journey mapping · filters and favorites",
    evidence:
      "The deck reports that 70% found it difficult to find online shoes they had seen in a store or ad, 45% had trouble understanding site categories, and 55% wanted to try shoes before buying. These are discovery findings, not post-launch impact.",
    href: "https://www.behance.net/Zeque-Dominguez-Pace",
    visual: "marketplace",
    accent: "pink",
  },
  {
    number: "09",
    title: "Digichecks employee benefits",
    category: "Fintech · Service design",
    summary:
      "A digital voucher concept to help employers offer practical benefits during economic uncertainty.",
    challenge:
      "The project explored ways for companies to support and motivate employees when traditional salary increases were difficult.",
    approach:
      "The source material describes interviews, surveys, card sorting, personas, journey and empathy maps, value proposition work, and client co-creation.",
    designed:
      "Employee and employer flows for receiving, managing, and using digital benefit checks, including a mobile experience and an employer-facing flow.",
    role: "UX research · service and interaction design",
    methods: "Enterprise Design Thinking · interviews · surveys · card sorting · service flows",
    evidence:
      "The deck reports survey preferences for grocery discounts and benefit checks, but does not state respondent counts. Those figures are therefore not presented as representative outcomes.",
    href: "https://www.behance.net/Zeque-Dominguez-Pace",
    visual: "fintech",
    accent: "lavender",
  },
] as const;

export const capabilities = [
  {
    title: "Product direction",
    description: "Problem framing, prioritization, roadmaps, and product strategy.",
    icon: "compass",
  },
  {
    title: "Research & validation",
    description: "Interviews, surveys, usability studies, journey maps, and synthesis.",
    icon: "search",
  },
  {
    title: "Complex workflows",
    description: "Healthcare, B2B platforms, scheduling, and operational tools.",
    icon: "workflow",
  },
  {
    title: "AI product design",
    description: "Useful, understandable AI recommendations and assisted workflows.",
    icon: "sparkles",
  },
  {
    title: "Design systems",
    description: "Reusable patterns, consistency, and collaboration with engineering.",
    icon: "layers",
  },
  {
    title: "Cross-functional leadership",
    description: "Bringing product, engineering, clients, and stakeholders into alignment.",
    icon: "users",
  },
] as const;

export const processSteps = [
  { number: "01", title: "Discover", text: "Learn the people, context, and constraints." },
  { number: "02", title: "Define", text: "Turn evidence into a focused problem and direction." },
  { number: "03", title: "Ideate", text: "Explore options with the team and stakeholders." },
  { number: "04", title: "Prototype", text: "Make the strongest ideas tangible and testable." },
  { number: "05", title: "Validate", text: "Use feedback and testing to refine the experience." },
  { number: "06", title: "Ship & iterate", text: "Support delivery, learn from use, and improve." },
] as const;

export const toolsAndMethods = [
  "Figma",
  "Figma Make",
  "ChatGPT",
  "Gemini",
  "Grok",
  "Claude Code",
  "Cursor AI",
  "Lovable",
  "v0",
  "Prototyping",
  "Usability testing",
  "Accessibility",
] as const;

export const faqs = [
  {
    question: "Can you tell me about yourself?",
    answer:
      "I’m Ezequiel, a product and UX designer with a background in industrial design and more than 20 years building products across physical and digital spaces. Over the past two years, I’ve focused on AI-driven products, especially complex healthcare and B2B workflows. I enjoy making emerging technology useful and trustworthy in people’s day-to-day work.",
  },
  {
    question: "Can you walk me through your experience?",
    answer:
      "My experience spans industrial and product design, brand management, UX research, digital product design, and project leadership. Most recently at Kopius, working with HCHB, I’ve focused on AI-powered scheduling, clinician workflows, and decision support. Before that, I worked across Shop Your Way and fintech at Making Sense, conversational design at IBM iX, and e-commerce and brand work at Grimoldi.",
  },
  {
    question: "What accomplishment are you most proud of?",
    answer:
      "I’m proud of helping shape AI-enabled healthcare work from problem definition through implementation-ready design. That includes smart scheduling, clinician workflows, and contributions to Care+ clinical recommendations. The materials I’ve shared don’t include verified business-outcome metrics, so I prefer to discuss the work and its scope rather than overstate results.",
  },
  {
    question: "What are your strengths?",
    answer:
      "My profile highlights turning ambiguity into product direction, optimizing complex workflows, and connecting business goals with user needs and technical possibilities. I’m also experienced in research and usability testing, and in aligning product, engineering, clients, and stakeholders around what to build and why.",
  },
  {
    question: "What is one area you’re working to improve?",
    answer:
      "The career information I shared doesn’t identify a personal weakness, and I don’t want to invent one. I’m happy to discuss a real development area and how I’m addressing it in a conversation.",
  },
  {
    question: "What kind of role are you looking for?",
    answer:
      "I’m interested in senior or lead product-design work where UX strategy, complex systems, design systems, or AI-enabled workflows matter. Healthcare and B2B are especially familiar contexts, and I value close collaboration with product and engineering.",
  },
  {
    question: "Why are you looking for a new opportunity?",
    answer:
      "My profile doesn’t state a reason for changing roles, so I don’t want to assume one. I’m glad to talk about the kind of product-design challenge and team that would be a strong mutual fit.",
  },
  {
    question: "How would your coworkers describe you?",
    answer:
      "I can’t speak for colleagues, but my work history describes me as a bridge between design, engineering, and stakeholders. It also reflects close partnership with product teams, client communication, and collaborative workshops.",
  },
  {
    question: "Would you say you’re a team player?",
    answer:
      "Yes. My experience includes close partnership with product and engineering, client co-creation workshops, and cross-functional teams. I’ve also worked to align people around scope, constraints, priorities, and delivery.",
  },
  {
    question: "What would you focus on in your first 30, 60, and 90 days?",
    answer:
      "I’d start by understanding the users, business goals, current workflows, and constraints. Then I’d align with the team on the highest-value problem and use research, prototyping, and validation to shape a practical direction. That reflects the discovery-to-delivery approach documented in my experience; the exact plan would depend on the team and product.",
  },
] as const;

export const education = [
  {
    school: "Aceleradora AI",
    program: "Generative AI, LLM Apps & AI Agents",
    period: "2025 — 2026",
  },
  {
    school: "University of Buenos Aires",
    program: "Master’s · Marketing Management & Competitive Strategies",
    period: "2013 — 2015",
  },
  {
    school: "Digital House Argentina",
    program: "UX Design",
    period: "2019",
  },
  {
    school: "University of Buenos Aires",
    program: "Bachelor’s · Industrial and Product Design",
    period: "2001 — 2008",
  },
] as const;

export const certifications = [
  "AWS Certified AI Practitioner · 2025",
  "Inclusive and Equitable UX · Nielsen Norman Group · 2025",
  "Journey Mapping to Understand Customer Needs · Nielsen Norman Group · 2025",
  "Measuring UX and ROI · Nielsen Norman Group · 2024",
  "Introduction to Web Accessibility · W3Cx · 2025",
] as const;