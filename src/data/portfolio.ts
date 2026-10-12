export const profile = {
  name: "Ezequiel Dominguez Pace",
  initials: "EDP",
  location: "Argentina",
  role: "Lead Product Designer",
  descriptor: "AI · Healthcare · Design systems",
  introduction:
    "I turn complex systems into clear, useful products. My work brings together UX strategy, product thinking, and emerging AI to improve the way people work.",
  summary:
    "I’m a product and UX designer with a background in industrial design and more than 20 years building products across physical and digital spaces. Since 2023, I’ve focused on AI-driven product design—especially complex healthcare and B2B workflows. I partner with product, engineering, and stakeholders to make AI useful, usable, and trustworthy.",
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
    visual: "chat",
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
    visual: "fashion",
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
    title: "Seeing the bigger picture",
    description: "Connecting user needs, business goals, and product opportunities to help teams focus on the right problems.",
    icon: "compass",
  },
  {
    title: "Understanding users",
    description: "Getting close to people's needs and frustrations through research, observation, and testing assumptions.",
    icon: "search",
  },
  {
    title: "Untangling complexity",
    description: "Making complicated workflows easier to understand, especially in healthcare, B2B platforms, and operational tools.",
    icon: "workflow",
  },
  {
    title: "Making AI useful",
    description: "Exploring how AI can support better decisions and simplify work without making the experience harder to understand.",
    icon: "sparkles",
  },
  {
    title: "Building consistency",
    description: "Creating design systems and reusable patterns that make products easier to design, build, and maintain.",
    icon: "layers",
  },
  {
    title: "Bringing people together",
    description: "Working closely with product, engineering, and stakeholders to challenge ideas, find common ground, and move toward better solutions.",
    icon: "users",
  },
] as const;

export const processSteps = [
  { number: "01", title: "Get the full picture", text: "I dig into user needs, existing workflows, and business goals to understand what's really happening." },
  { number: "02", title: "Find the real problem", text: "I connect the dots, challenge assumptions, and narrow things down to what will make the biggest difference." },
  { number: "03", title: "Explore possibilities", text: "I bring different perspectives together, challenge the obvious solutions, and look for better ways forward." },
  { number: "04", title: "Make ideas real", text: "I turn concepts into tangible experiences so we can explore the details, uncover gaps, and see what holds up." },
  { number: "05", title: "Learn by testing", text: "I put ideas in front of users, pay attention to what works and what doesn't, and use those insights to make better decisions." },
  { number: "06", title: "Make it better", text: "I work with the team to get the solution out the door, learn from real usage, and keep improving it over time." },
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
    question: "Tell me about yourself.",
    answer:
      "I’m a UX designer with experience designing complex enterprise software, improving workflows, and translating business challenges into user-centered solutions. Currently, I work at Homecare Homebase, where I focus on scheduling experiences for healthcare professionals and schedulers, including data visualization, workflow optimization, and AI-powered recommendations. Over time, I’ve become increasingly interested in the strategic side of UX: connecting user needs with business goals, influencing product decisions, and helping teams build better products. I’m now looking for an opportunity where I can combine hands-on design with leadership, contribute to the product vision, and help establish a strong UX practice.",
  },
  {
    question: "Walk me through your experience.",
    answer:
      "My experience has centered on designing digital products that solve complex problems for users. At Homecare Homebase, I work on healthcare software, focusing on scheduling workflows, clinician autonomy, and tools that help schedulers make better decisions through data visualization and intelligent recommendations. A big part of my role is understanding how users work, identifying friction in existing experiences, and translating those insights into practical design solutions. I’ve also worked extensively with design systems and interactive prototyping, helping create more consistent and scalable experiences. These experiences have strengthened my ability to work across product, engineering, and business teams, and have motivated me to take the next step into a leadership role where I can guide design direction and help other designers grow.",
  },
  {
    question: "What is your biggest accomplishment?",
    answer:
      "One of my most meaningful accomplishments has been contributing to the improvement of complex scheduling workflows in healthcare software. These workflows involve a significant amount of information, multiple constraints, and decisions that directly affect how efficiently people can do their jobs. My contribution has been to rethink how information is presented, simplify interactions, and explore ways to help users make better decisions through clearer visualizations and AI-powered recommendations. What makes this work meaningful to me is that it goes beyond making an interface look better; it’s about reducing cognitive load, improving operational efficiency, and creating a better experience for people who rely on these tools every day. It has reinforced my belief that good UX should create measurable value for both users and the business.",
  },
  {
    question: "Why are you looking for a new opportunity?",
    answer:
      "I’ve learned a lot in my current role, particularly about designing complex enterprise products and working through challenging user and business problems. At this point in my career, I’m looking for an opportunity to expand my impact beyond individual design initiatives and contribute more directly to product strategy, team development, and the overall UX vision. I’m especially interested in organizations that recognize the value of UX and want to make it a stronger part of their product development process. A lead position feels like a natural next step because it would allow me to combine my design experience with my ability to align stakeholders, guide decisions, and help build a more mature design practice.",
  },
  {
    question: "What are your strengths?",
    answer:
      "I would say my main strengths are problem-solving, systems thinking, and the ability to connect user needs with business objectives. I’m comfortable working with complex products where there isn’t an obvious solution, and I enjoy breaking down complicated workflows into experiences that are easier to understand and use. I also think strategically about consistency and scalability, which is why design systems and reusable patterns are important to me. Another strength is collaboration: I enjoy working with product managers, engineers, and stakeholders to challenge assumptions, explore alternatives, and find solutions that are both useful for users and feasible for the business. I believe these strengths are particularly valuable in a lead role, where success depends on both design quality and the ability to influence decisions.",
  },
  {
    question: "What are your weaknesses?",
    answer:
      "One area I’ve been working on is learning when to stop exploring and move toward a decision. Because I enjoy solving complex problems, I can sometimes spend more time than necessary evaluating alternatives or refining details. I’ve learned that not every decision needs the same level of exploration, especially when timelines are tight. Now, I try to define success criteria earlier, prioritize the riskiest assumptions, and align with stakeholders on how much validation is needed before moving forward. This helps me balance design quality with speed and keeps the team focused on outcomes rather than perfection.",
  },
  {
    question: "Why should we hire you?",
    answer:
      "You should hire me because I bring a combination of strong UX problem-solving skills, experience with complex enterprise products, and a mindset focused on connecting design decisions to business outcomes. I’m comfortable navigating ambiguity, understanding complicated workflows, and collaborating with different disciplines to turn challenges into actionable solutions. Beyond the design execution itself, I understand that a lead designer needs to create alignment, establish direction, communicate rationale, and help the team make better decisions. I would bring a practical, user-centered approach to the role while helping strengthen the design process, improve collaboration, and demonstrate the value of UX through tangible product improvements.",
  },
  {
    question: "What kind of role are you looking for?",
    answer:
      "I’m looking for a Lead UX Designer role where I can combine hands-on design work with strategic thinking and team leadership. I enjoy staying close to the product, understanding users, exploring solutions, and working with engineers and product managers to bring ideas to life. At the same time, I want to help define the UX vision, establish standards and processes, mentor other designers, and influence product decisions earlier in the development cycle. Ideally, I’d join an organization where UX is evolving or becoming more strategic, because I enjoy helping teams mature their design practices and demonstrating how better user experiences can contribute to business success.",
  },
  {
    question: "How would your coworkers describe you?",
    answer:
      "I think my coworkers would describe me as collaborative, thoughtful, and someone who brings structure to complex problems. I’m usually the person who tries to understand the bigger picture before jumping into solutions, and I like asking questions that help the team challenge assumptions and see problems from different perspectives. They would probably also say that I’m curious, open to feedback, and willing to explore new approaches, particularly when it comes to technology and AI. At the same time, I care about moving things forward, so I try to turn discussions into clear decisions and actionable next steps rather than getting stuck in endless debate.",
  },
  {
    question: "What would you do in your first 30/60/90 days?",
    answer:
      "In my first 30 days, I’d focus on listening and learning: understanding the product, business goals, users, team structure, existing design processes, and the main challenges facing the organization. By day 60, I’d identify the most important opportunities, validate them with stakeholders and users where possible, and align with the team on priorities and a practical UX improvement plan. I’d also evaluate how design collaborates with product and engineering and identify opportunities to improve that process. By day 90, I’d aim to have delivered or advanced an initial high-impact initiative, established clear design priorities, and defined ways to measure progress. My goal would be to build trust first, understand the context, and then create momentum through focused, measurable improvements rather than introducing change for its own sake.",
  },
  {
    question: "Are you a team player?",
    answer:
      "Absolutely. I see UX as a collaborative discipline because the best solutions rarely come from design working in isolation. I enjoy partnering with product managers, engineers, researchers, and business stakeholders to understand different perspectives and find the right balance between user needs, technical constraints, and business priorities. I also believe being a team player doesn’t mean agreeing with everyone; it means being able to challenge ideas respectfully, explain your reasoning, listen to feedback, and commit to a shared decision. In a lead role, I think collaboration becomes even more important because your responsibility is not only to deliver good design but also to help the entire team work more effectively and achieve better outcomes together.",
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