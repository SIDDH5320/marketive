// ============================================================
// MARKETIVE - SINGLE EDITABLE CONTENT FILE
// ============================================================
// ✏️  Edit ONLY this file to update all website content.
//     No other files need to be touched.
// ============================================================

const content = {

  // ----------------------------------------------------------
  // SITE-WIDE
  // ----------------------------------------------------------
  siteName: "Marketive",
  siteTagline: "Digital Marketing & SEO Agency",
  siteDomain: "marketive.com.au",
  siteUrl: "https://marketive.com.au",
  logo: "Marketive",

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  nav: {
    links: [
      { label: "Home", path: "/" },
      { label: "Services", path: "/services" },
      //{ label: "Case Studies", path: "/case-studies" },
      { label: "About", path: "/about" },
      { label: "Blog", path: "/blog" },
      { label: "Contact", path: "/contact" },
    ],
    cta: { label: "Get an Audit", path: "/contact" },
  },

  // ----------------------------------------------------------
  // HOME PAGE
  // ----------------------------------------------------------
  home: {
    hero: {
      headline: "Business",
      headlineHighlight: "Dominate Search",
      subheadline:
        "Australia's most results-driven digital marketing agency. We combine data, creativity, and cutting-edge strategy to fuel exponential growth.",
      cta: { label: "Get in Touch", path: "/thank-you" },
      secondaryCta: { label: "Explore Services", path: "/services" },
    },

    trustedBy: {
      heading: "Trusted by Leading Australian Brands",
      logos: [
        "TechFlow",
        "GreenLeaf",
        "UrbanNest",
        "CloudSync",
        "BrightPath",
        "NovaHealth",
      ],
    },

    servicesPreview: {
      tagline: "What We Do",
      heading: "Full-Stack Digital Marketing Solutions",
      description:
        "From strategy to execution, we cover every pillar of digital growth - so you can focus on running your business.",
      services: [
        {
          id: "strategy-consulting",
          icon: "Lightbulb",
          title: "Strategy & Consulting",
          description:
            "Data-driven digital strategies tailored to your industry, audience, and growth stage.",
        },
        {
          id: "seo",
          icon: "Search",
          title: "Search Engine Optimization",
          description:
            "Dominate organic search with technical SEO, content optimization, and authoritative link building.",
        },
        {
          id: "sem",
          icon: "BarChart3",
          title: "Search Engine Marketing",
          description:
            "Maximize ROI with precision-targeted Google Ads, Bing Ads, and programmatic campaigns.",
        },
        // {
        //   id: "content-strategy",
        //   icon: "FileText",
        //   title: "Content Strategy",
        //   description:
        //     "Compelling content that educates, engages, and converts - from blogs to video scripts.",
        // },
        {
          id: "social-media",
          icon: "Share2",
          title: "Social Media Marketing",
          description:
            "Build community, drive engagement, and generate leads across every major platform.",
        },
        {
          id: "marketing-automation",
          icon: "Zap",
          title: "Marketing Automation",
          description:
            "Automate your funnel with intelligent workflows, email sequences, and CRM integrations.",
        },
      ],
    },

    stats: {
      heading: "Numbers That Speak Louder",
      items: [
        { value: 320, suffix: "+", label: "Clients Served" },
        { value: 98, suffix: "%", label: "Client Retention" },
        { value: 4.2, suffix: "M", label: "Leads Generated" },
        { value: 12, suffix: "+", label: "Years Experience" },
      ],
    },

    caseStudiesPreview: {
      tagline: "Our Results",
      heading: "Case Studies That Prove It",
      description:
        "Real clients, real challenges, real results. Explore how we've transformed businesses across Australia.",
    },

    testimonials: {
      tagline: "Client Love",
      heading: "What Our Clients Say",
      items: [
        {
          quote:
            "Marketive took our organic traffic from 2,000 to 45,000 monthly visitors in under 12 months. Their SEO strategy is world-class.",
          name: "Sarah Mitchell",
          role: "CMO, TechFlow",
          avatar: "SM",
        },
        {
          quote:
            "The team's attention to data and creative execution sets them apart. Our ROAS improved by 340% within the first quarter.",
          name: "James Chen",
          role: "Founder, UrbanNest",
          avatar: "JC",
        },
        {
          quote:
            "They don't just run campaigns - they build growth engines. Marketive is an extension of our team.",
          name: "Priya Sharma",
          role: "Head of Digital, NovaHealth",
          avatar: "PS",
        },
        {
          quote:
            "The automation workflows they built have saved us 20+ hours per week and doubled our conversion rates.",
          name: "Liam O'Brien",
          role: "CEO, BrightPath",
          avatar: "LO",
        },
      ],
    },

    ctaBanner: {
      heading: "Ready to Accelerate Your Growth?",
      description:
        "Get in touch and discover how we can 10x your digital presence.",
      cta: { label: "Get in Touch", path: "/contact" },
    },
  },

  // ----------------------------------------------------------
  // SERVICES PAGE
  // ----------------------------------------------------------
  services: {
    hero: {
      tagline: "What We Do",
      heading: "End-to-End Digital Marketing Services",
      description:
        "We don't just execute tactics - we architect growth. Every service is powered by data, refined by creativity, and measured by results.",
    },
    items: [
      {
        id: "strategy-consulting",
        icon: "Lightbulb",
        title: "Strategy & Consulting",
        tagline: "The Blueprint for Growth",
        description:
          "Every successful campaign starts with a bulletproof strategy. We audit your current digital presence, analyze competitors, map your customer journey, and craft a roadmap that aligns marketing spend with business outcomes.",
        features: [
          "Comprehensive Digital Audit",
          "Competitor & Market Analysis",
          "Customer Journey Mapping",
          "KPI Framework & Reporting Setup",
          "Budget Allocation Strategy",
          "Quarterly Business Reviews",
        ],
        benefits: [
          "Clear direction and measurable goals",
          "Reduced wasted ad spend",
          "Data-backed decision making",
          "Scalable growth framework",
        ],
        cta: { label: "Get in Touch", path: "/contact" },
        stats: [
          { value: "120+", label: "Strategies Delivered" },
          { value: "4.8x", label: "Avg ROI Uplift" },
          { value: "30 Days", label: "To First Roadmap" },
          { value: "98%", label: "Client Retention" },
        ],
        faqs: [
          {
            q: "How long does a strategy engagement take?",
            a: "Most audits and roadmaps are delivered within 2-4 weeks, depending on the size of your business and how many channels we're analysing. Implementation timelines are mapped out as part of the roadmap itself.",
          },
          {
            q: "Do you work with businesses that already have an in-house marketing team?",
            a: "Absolutely. We regularly work alongside in-house teams as a strategic layer - providing the data, frameworks, and roadmap your team executes against.",
          },
          {
            q: "What do I actually receive at the end of the audit?",
            a: "A full digital audit report, a prioritised growth roadmap, a defined KPI framework, and a recommended budget allocation across channels.",
          },
          {
            q: "How is success measured?",
            a: "We agree on clear KPIs upfront - whether that's traffic, leads, revenue, or retention - and report against them every quarter.",
          },
        ],
      },
      {
        id: "seo",
        icon: "Search",
        title: "Search Engine Optimization",
        tagline: "Own Page One, Organically",
        description:
          "Our SEO methodology goes beyond keywords. We build topical authority, fix technical foundations, and earn high-quality backlinks - creating a compounding asset that drives free traffic 24/7.",
        features: [
          "Technical SEO & Site Architecture",
          "On-Page & Content Optimization",
          "Link Building & Digital PR",
          "Local SEO & Google Business Profile",
          "E-E-A-T & Core Web Vitals",
          "SEO Reporting & Analytics",
        ],
        benefits: [
          "Sustainable organic traffic growth",
          "Lower customer acquisition costs",
          "Increased brand authority",
          "Long-term compounding ROI",
        ],
        cta: { label: "Start Ranking Higher", path: "/contact" },
        stats: [
          { value: "2,150%", label: "Avg Organic Traffic Growth" },
          { value: "340+", label: "Keywords Ranked Top 10" },
          { value: "6-9 Mo", label: "To Page One Results" },
          { value: "97%", label: "Client Retention" },
        ],
        faqs: [
          {
            q: "Do you guarantee first-page rankings?",
            a: "No ethical SEO agency can guarantee specific rankings - Google's algorithm has too many variables. What we guarantee is a transparent, white-hat process built on proven fundamentals that consistently drives results.",
          },
          {
            q: "How long until I see SEO results?",
            a: "Most clients see meaningful movement within 3-4 months and compounding growth by month 6-9. SEO is a long-term asset - the longer we work together, the stronger your moat becomes.",
          },
          {
            q: "Do you follow Google's guidelines (white-hat only)?",
            a: "Always. We never use link schemes, cloaking, or other tactics that risk a penalty. Every tactic we use is built to survive algorithm updates, not exploit loopholes.",
          },
          {
            q: "What's included in monthly reporting?",
            a: "Keyword rankings, organic traffic and conversions, technical health, backlink growth, and a plain-English summary of what we did and why.",
          },
        ],
      },
      {
        id: "sem",
        icon: "BarChart3",
        title: "Search Engine Marketing",
        tagline: "Instant Visibility, Maximum ROI",
        description:
          "Our SEM team manages millions in ad spend across Google, Bing, and YouTube. We combine AI-driven bidding, creative A/B testing, and conversion rate optimization to make every dollar work harder.",
        features: [
          "Google Ads Management",
          "Bing Ads & Microsoft Advertising",
          "YouTube & Display Campaigns",
          "Shopping & Performance Max",
          "Conversion Tracking & Attribution",
          "Landing Page Optimization",
        ],
        benefits: [
          "Immediate qualified traffic",
          "Transparent ROI tracking",
          "Lower cost per acquisition",
          "Rapid testing & iteration",
        ],
        cta: { label: "Launch Your Campaign", path: "/contact" },
        stats: [
          { value: "$15M+", label: "Ad Spend Managed" },
          { value: "7.9x", label: "Avg ROAS" },
          { value: "-62%", label: "Avg Cost Per Lead" },
          { value: "48 Hrs", label: "Campaign Launch Time" },
        ],
        faqs: [
          {
            q: "What's the minimum ad budget you work with?",
            a: "We typically work with clients spending $3,000+ per month in ad spend, which gives the algorithms enough data to optimise effectively. We'll always tell you honestly if your budget is too low to be effective.",
          },
          {
            q: "Which platforms do you manage campaigns on?",
            a: "Google Ads, Bing/Microsoft Advertising, YouTube, Display, Shopping, and Performance Max - plus paid social when it complements your funnel.",
          },
          {
            q: "How do you optimize campaigns over time?",
            a: "We run continuous A/B tests on ad copy, audiences, and landing pages, paired with smart bidding strategies that learn from your conversion data week over week.",
          },
          {
            q: "Will I own my ad accounts?",
            a: "Yes - all accounts are set up under your ownership. You always retain full access and control, even if you ever decide to move on.",
          },
        ],
      },
      // {
      // id: "content-strategy",
      // icon: "FileText",
      // title: "Content Strategy",
      // tagline: "Content That Converts",
      // description:
      // "We produce content with purpose. From SEO-optimized blog posts to thought-leadership whitepapers, every piece is designed to attract, educate, and convert your ideal customers.",
      // features: [
      // "Content Calendar & Planning",
      // "SEO Blog Writing",
      // "Whitepapers & E-books",
      // "Video Script & Production",
      // "Infographic Design",
      // "Content Performance Analysis",
      // ],
      // benefits: [
      // "Positions you as an industry leader",
      // "Fuels SEO and social channels",
      // "Nurtures leads through the funnel",
      // "Builds lasting brand equity",
      // ],
      // cta: { label: "Build Your Content Engine", path: "/contact" },
      // stats: [
      // { value: "1,800%", label: "Avg Blog Traffic Growth" },
      // { value: "500+", label: "Pieces Published Yearly" },
      // { value: "28K", label: "Newsletter Subscribers Built" },
      // { value: "92%", label: "On-Time Delivery" },
      // ],
      // faqs: [
      // {
      // q: "Who writes the content - AI or humans?",
      // a: "Every piece is researched and written by experienced human writers and subject-matter experts. We use AI for research and ideation, never as a replacement for quality and accuracy.",
      // },
      // {
      // q: "How do you measure content ROI?",
      // a: "We track every piece through the full funnel - impressions, traffic, leads, and attributed revenue - so we can double down on what's working and cut what isn't.",
      // },
      // {
      // q: "Can you match our existing brand voice?",
      // a: "Yes. We start every engagement with a brand voice and style guide review to make sure everything we publish sounds authentically like you.",
      // },
      // {
      // q: "How often will we publish?",
      // a: "Cadence depends on your strategy - most clients publish 2-4 long-form pieces per week alongside supporting social and email content.",
      // },
      // ],
      // },
      {
        id: "social-media",
        icon: "Share2",
        title: "Social Media Marketing",
        tagline: "Build Community, Drive Revenue",
        description:
          "Build an engaged community, amplify your brand, and drive qualified leads and revenue across all major social media platforms.",
        features: [
          "Social Media Strategy",
          "Content Creation & Design",
          "Community Management",
          "Paid Social Advertising",
          "Influencer Partnerships",
          "Social Listening & Analytics",
        ],
        benefits: [
          "Increased brand awareness",
          "Engaged community of advocates",
          "Direct revenue from social",
          "Real-time customer insights",
        ],
        cta: { label: "Grow Your Social Presence", path: "/contact" },
        stats: [
          { value: "85K+", label: "Followers Generated" },
          { value: "420%", label: "Avg Engagement Lift" },
          { value: "$95K/mo", label: "Revenue From Social" },
          { value: "15+", label: "Platforms Managed" },
        ],
        faqs: [
          {
            q: "Which platforms should my business be on?",
            a: "It depends on your audience - we don't believe in being everywhere at once. We'll recommend the 2-3 platforms where your customers actually spend time and focus our effort there.",
          },
          {
            q: "Do you create the content or just manage posting?",
            a: "Full service - strategy, content creation, design, copywriting, scheduling, and community management. You approve, we execute.",
          },
          {
            q: "How do you handle community management & DMs?",
            a: "Our team monitors and responds to comments and messages during business hours using your approved brand voice, escalating anything sensitive straight to you.",
          },
          {
            q: "Do you run paid social ads too?",
            a: "Yes - organic and paid work best together. We can layer in paid social campaigns on Meta, TikTok, and LinkedIn to accelerate growth.",
          },
        ],
      },
      {
        id: "marketing-automation",
        icon: "Zap",
        title: "Marketing Automation",
        tagline: "Scale Without the Chaos",
        description:
          "We implement and optimize marketing automation platforms - from HubSpot to Klaviyo - building intelligent workflows that nurture leads, re-engage customers, and drive revenue on autopilot.",
        features: [
          "Platform Setup & Migration",
          "Email Marketing Automation",
          "Lead Scoring & Segmentation",
          "Drip Campaigns & Sequences",
          "CRM Integration",
          "A/B Testing & Optimization",
        ],
        benefits: [
          "Save 20+ hours per week",
          "Higher lead-to-customer conversion",
          "Personalized customer journeys",
          "Scalable processes",
        ],
        cta: { label: "Automate Your Growth", path: "/contact" },
        stats: [
          { value: "25 Hrs/wk", label: "Avg Time Saved" },
          { value: "210%", label: "Lead-to-Customer Lift" },
          { value: "12+", label: "Workflows Per Client" },
          { value: "$1.2M", label: "Avg Pipeline Generated" },
        ],
        faqs: [
          {
            q: "Which automation platforms do you work with?",
            a: "We're certified across HubSpot, Klaviyo, ActiveCampaign, and most major CRMs - and we'll recommend the right fit based on your business model and budget.",
          },
          {
            q: "Can you migrate us from our current CRM?",
            a: "Yes, we handle full data migration, workflow rebuilding, and integration testing so nothing falls through the cracks during the switch.",
          },
          {
            q: "How long does implementation take?",
            a: "A typical setup - platform configuration, core workflows, and integrations - takes 4-6 weeks. More complex migrations can take longer.",
          },
          {
            q: "Do you write the email sequences too?",
            a: "Yes - copywriting, design, and logic for every sequence is included, from welcome flows to win-back campaigns.",
          },
        ],
      },
      // {
      // id: "branding",
      // icon: "Palette",
      // title: "Branding Services",
      // tagline: "Look the Part, Win the Sale",
      // description:
      // "Professional branding services — from brand logo design and visual identity to full brand management — that give Australian businesses the presence, credibility, and consistency they need to grow.",
      // features: [
      // "Professional Logo Design",
      // "Brand Identity Design",
      // "Brand Strategy & Positioning",
      // "Brand Voice & Messaging",
      // "Brand Guidelines",
      // "Brand Management & Refresh",
      // ],
      // benefits: [
      // "Instant credibility and trust",
      // "Consistent presence everywhere",
      // "Differentiation from competitors",
      // "Full ownership of all assets",
      // ],
      // cta: { label: "Build Your Brand", path: "/contact" },
      // },
      // {
      // id: "web-design-development",
      // icon: "Monitor",
      // title: "Website Design & Development",
      // tagline: "Websites Built to Win Customers",
      // description:
      // "A specialist web development company delivering website design and development services that combine stunning visuals, flawless functionality, and conversion-focused architecture for Australian businesses.",
      // features: [
      // "Custom Website Design & Development",
      // "Ecommerce Website Development",
      // "Mobile-First Responsive Design",
      // "Speed & Performance Optimisation",
      // "Website Maintenance & Security",
      // "Website Redesign & Migration",
      // ],
      // benefits: [
      // "Conversion-focused design",
      // "SEO built in from day one",
      // "Fast, mobile-first builds",
      // "Scalable, future-proof platforms",
      // ],
      // cta: { label: "Start Your Website", path: "/contact" },
      // },
    ],
  },

  // ----------------------------------------------------------
  // CASE STUDIES
  // ----------------------------------------------------------
  caseStudies: {
    hero: {
      tagline: "Our Work",
      heading: "Results That Speak for Themselves",
      description:
        "Explore real-world success stories where strategy meets execution - and the numbers do the talking.",
    },
    categories: ["All", "SEO", "SEM", "Content", "Social Media", "Automation"],
    items: [
      {
        id: "techflow-seo",
        title: "TechFlow SaaS - 2,150% Organic Traffic Growth",
        industry: "SaaS / Technology",
        category: "SEO",
        image: "gradient-1",
        problem:
          "TechFlow was invisible in search results with under 2,000 monthly organic sessions. Their content was thin, their site had critical technical issues, and competitors dominated every relevant keyword.",
        solution:
          "We rebuilt their site architecture, created a 60-piece pillar content strategy, and launched an aggressive digital PR campaign targeting SaaS publications.",
        results: [
          { metric: "Organic Traffic", value: "+2,150%" },
          { metric: "Keywords in Top 10", value: "340+" },
          { metric: "Domain Authority", value: "32 → 58" },
          { metric: "MQLs from SEO", value: "+890%" },
        ],
      },
      {
        id: "urbannest-sem",
        title: "UrbanNest - 340% ROAS Improvement",
        industry: "Real Estate / PropTech",
        category: "SEM",
        image: "gradient-2",
        problem:
          "UrbanNest was spending $50K/month on Google Ads with a ROAS of 1.8x. Campaign structure was bloated, targeting was broad, and landing pages weren't optimized for conversion.",
        solution:
          "We restructured all campaigns, built dedicated landing pages with dynamic content, implemented smart bidding strategies, and set up proper conversion tracking and attribution.",
        results: [
          { metric: "ROAS", value: "1.8x → 7.9x" },
          { metric: "Cost Per Lead", value: "-62%" },
          { metric: "Conversion Rate", value: "+185%" },
          { metric: "Monthly Revenue", value: "+$320K" },
        ],
      },
      {
        id: "greenleaf-content",
        title: "GreenLeaf - Content-Led Brand Authority",
        industry: "Sustainability / E-commerce",
        category: "Content",
        image: "gradient-3",
        problem:
          "GreenLeaf had strong products but zero brand recognition. Their blog was dormant, social engagement was minimal, and they had no thought leadership in the sustainability space.",
        solution:
          "We developed a comprehensive content ecosystem - SEO blog content, a weekly newsletter, a podcast series, and a sustainability report that got picked up by major publications.",
        results: [
          { metric: "Blog Traffic", value: "+1,800%" },
          { metric: "Newsletter Subscribers", value: "0 → 28K" },
          { metric: "Media Mentions", value: "45+" },
          { metric: "Revenue from Content", value: "+$180K" },
        ],
      },
      {
        id: "novahealth-social",
        title: "NovaHealth - Social Media Revenue Engine",
        industry: "Healthcare / Wellness",
        category: "Social Media",
        image: "gradient-4",
        problem:
          "NovaHealth's social media presence was inconsistent and purely brand-awareness focused. They had 3K followers across platforms with no measurable revenue attribution from social channels.",
        solution:
          "We built a full-funnel social strategy with organic community building on Instagram and LinkedIn, plus paid campaigns on Meta and TikTok targeting lookalike audiences.",
        results: [
          { metric: "Social Following", value: "3K → 85K" },
          { metric: "Engagement Rate", value: "+420%" },
          { metric: "Social Revenue", value: "$0 → $95K/mo" },
          { metric: "Lead Cost", value: "-55%" },
        ],
      },
      {
        id: "brightpath-automation",
        title: "BrightPath - Marketing Automation Overhaul",
        industry: "Education / EdTech",
        category: "Automation",
        image: "gradient-5",
        problem:
          "BrightPath's sales team was manually following up with every lead. They had no email sequences, no lead scoring, and their CRM was a mess of unorganized contacts.",
        solution:
          "We migrated them to HubSpot, built 12 automated workflows, implemented lead scoring, and created personalized email sequences for each buyer persona.",
        results: [
          { metric: "Time Saved", value: "25 hrs/week" },
          { metric: "Lead-to-Customer", value: "+210%" },
          { metric: "Email Open Rate", value: "42%" },
          { metric: "Pipeline Value", value: "+$1.2M" },
        ],
      },
      {
        id: "cloudsync-seo",
        title: "CloudSync - Enterprise SEO Domination",
        industry: "Cloud Infrastructure",
        category: "SEO",
        image: "gradient-6",
        problem:
          "CloudSync was losing market share to competitors who owned the top positions for high-value enterprise keywords. Their website had severe technical issues and outdated content.",
        solution:
          "We executed a 12-month enterprise SEO program including technical overhaul, programmatic content creation, and a targeted link acquisition strategy.",
        results: [
          { metric: "Organic Revenue", value: "+$2.4M" },
          { metric: "Enterprise Leads", value: "+340%" },
          { metric: "Page 1 Rankings", value: "180+" },
          { metric: "Site Speed", value: "65 → 98" },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // ABOUT PAGE
  // ----------------------------------------------------------
  about: {
    hero: {
      tagline: "About Marketive",
      heading: "We're Not Just an Agency - We're Your Growth Partner",
      description:
        "Founded in Melbourne, Marketive was born from a simple belief: every business deserves world-class digital marketing. We combine deep expertise, cutting-edge technology, and genuine partnership to deliver results that matter.",
    },
    mission: {
      heading: "Our Mission",
      description:
        "To democratize growth. We make enterprise-level digital marketing strategies accessible to businesses of every size - from ambitious startups to established enterprises.",
    },
    vision: {
      heading: "Our Vision",
      description:
        "To be Australia's most trusted and results-driven digital marketing partner, known for innovation, transparency, and measurable impact.",
    },
    values: [
      {
        icon: "Target",
        title: "Results First",
        description: "Every decision is guided by data and measured by outcomes. Vanity metrics don't pay the bills.",
      },
      {
        icon: "Users",
        title: "True Partnership",
        description: "We embed ourselves in your business. Your goals are our goals. Your wins are our wins.",
      },
      {
        icon: "Sparkles",
        title: "Relentless Innovation",
        description: "The digital landscape evolves daily. We stay ahead so you don't have to.",
      },
      {
        icon: "Shield",
        title: "Radical Transparency",
        description: "No smoke and mirrors. Full access to data, clear reporting, and honest conversations.",
      },
    ],
    timeline: [
      {
        year: "2013",
        title: "The Beginning",
        description: "Founded in a Melbourne co-working space with 2 team members and a passion for SEO.",
      },
      {
        year: "2015",
        title: "First Major Win",
        description: "Crossed $1M in managed ad spend. Expanded into SEM and content marketing.",
      },
      {
        year: "2017",
        title: "Team of 15",
        description: "Moved into our first proper office. Added social media and automation services.",
      },
      {
        year: "2019",
        title: "100 Clients Milestone",
        description: "Served our 100th client. Launched our proprietary analytics dashboard.",
      },
      {
        year: "2021",
        title: "National Expansion",
        description: "Opened Sydney and Brisbane hubs. Named a top 10 digital agency in Australia.",
      },
      {
        year: "2024",
        title: "320+ Clients & Growing",
        description: "Managing $15M+ in annual ad spend. Team of 45+ specialists across the country.",
      },
    ],
    team: {
      heading: "Meet the Leadership",
      members: [
        {
          name: "Alex Morgan",
          role: "Founder & CEO",
          bio: "15+ years in digital marketing. Former Google & HubSpot.",
          avatar: "AM",
        },
        {
          name: "Maya Patel",
          role: "Head of SEO",
          bio: "Ex-agency director. Managed SEO for Fortune 500 brands.",
          avatar: "MP",
        },
        {
          name: "David Kim",
          role: "Head of Paid Media",
          bio: "Google Ads certified. $50M+ in managed spend.",
          avatar: "DK",
        },
        {
          name: "Emma Wilson",
          role: "Creative Director",
          bio: "Award-winning designer. Storyteller at heart.",
          avatar: "EW",
        },
      ],
    },
  },

  // ----------------------------------------------------------
  // BLOG PAGE
  // ----------------------------------------------------------
  blog: {
    hero: {
      tagline: "Insights & Resources",
      heading: "The Marketive Blog",
      description:
        "Expert insights, actionable guides, and industry analysis to help you stay ahead of the digital curve.",
    },
    categories: ["All", "Growth", "Dental Marketing", "SEO", "SEM", "Content", "Social Media", "Strategy", "Automation"],
    posts: [
      {
        id: "ethical-ai-creative",
        title: "Ethical AI & The Human Touch: How We Scale Creative Without Losing Soul",
        excerpt:
          "AI tools can supercharge marketing production, but genuine brand authenticity requires human nuance. Discover how to balance AI speed with creative integrity.",
        category: "Growth",
        author: "Maya Patel",
        date: "Jan 28, 2026",
        readTime: "6 min read",
        image: "ethical-ai",
        content: `
Artificial intelligence has revolutionized how agency teams brainstorm, draft, and design content. But with endless AI-generated content flooding the web, how do brands stand out?

## The Problem with Pure AI Content
AI models excel at pattern recognition, data synthesis, and rapid ideation. However, they lack lived human experience, emotional nuance, and deep brand empathy. When over-relied upon, content sounds repetitive, robotic, and lacks a genuine point of view.

## The Hybrid Workflow: AI Speed + Human Soul
At Marketive, we use AI to handle repetitive tasks, data auditing, and raw drafts. But human strategists and copywriters refine every single line, ensuring:
- Authentic voice and tone tailored to your target audience.
- Original industry insights and real-world case studies.
- Strict factual checks and original narrative angles.

## Scaling Quality Without Compromise
By implementing an ethical AI framework, Australian brands can increase content output by 3x while actually improving creative resonance and search engine trust signals (E-E-A-T).
        `,
      },
      {
        id: "marketing-tools-vs-strategy",
        title: "Marketing Tools vs. Strategy: Why Software Can't Replace Your Agency",
        excerpt:
          "Buying the latest SEO or automation software won't automatically grow your revenue. Here is why strategic direction remains the ultimate competitive edge.",
        category: "Dental Marketing",
        author: "Alex Morgan",
        date: "Nov 27, 2025",
        readTime: "8 min read",
        image: "dental-marketing",
        content: `
With subscription software available for every conceivable marketing function, many business owners wonder: "Can't we just buy the tools and do it ourselves?"

## Tools Are Accelerators, Not Navigators
A high-end set of surgical tools doesn't make someone a surgeon. Similarly, owning Semrush, HubSpot, or Google Ads manager won't yield ROI unless guided by experienced strategic direction.

## The High Cost of Misconfigured Software
We frequently audit client setups where expensive software is improperly integrated, leading to:
- False attribution and inaccurate lead data.
- Automated emails sent to incorrect audience segments.
- Wasteful PPC ad spend targeted at broad, low-intent keywords.

## Why Strategic Partnerships Win
An agency partner brings battle-tested strategy across dozens of industries, expert execution across full tech stacks, and constant adaptation as search and ad algorithms change.
        `,
      },
      {
        id: "bing-webmaster-tools",
        title: "How Bing Webmaster Tools Works (And How It's Different from Google Search Console)",
        excerpt:
          "While Google commands the majority of search, Bing's integration with Microsoft Copilot and ChatGPT makes it essential. Here's how to master Bing Webmaster Tools.",
        category: "SEO",
        author: "David Kim",
        date: "Nov 27, 2025",
        readTime: "10 min read",
        image: "bing-webmaster",
        content: `
Google Search Console is familiar to every SEO, but ignoring Bing Webmaster Tools (BWT) means missing out on high-intent Microsoft searchers and AI-driven Bing Chat / Copilot visibility.

## Key Features Exclusive to Bing Webmaster Tools
1. **URL Submission API / IndexNow:** Instantly index new content as soon as you hit publish.
2. **SEO Reports & Site Scan:** Automated technical audits that highlight page-level issues directly in your dashboard.
3. **Keyword Research Tool:** Real search volume data sourced straight from Bing's search engine index.
4. **Backlink & Competitor Disavow Tools:** Compare link profiles against competitors in your exact niche.

## Why Bing SEO Matters More in 2026
With Microsoft's heavy investment in OpenAI and Copilot, Bing's search query share and referral traffic quality have grown steadily—especially across corporate and B2B desktop users. Setting up Bing Webmaster Tools takes less than 5 minutes when connected via Google Search Console authentication.
        `,
      },
      {
        id: "seo-trends-2025",
        title: "10 SEO Trends That Will Define 2025",
        excerpt:
          "From AI-powered search to zero-click results, here's what every marketer needs to know about the future of SEO.",
        category: "SEO",
        author: "Maya Patel",
        date: "March 15, 2025",
        readTime: "8 min read",
        image: "gradient-1",
        content: `
The SEO landscape is evolving faster than ever. With Google's AI Overviews reshaping search results and E-E-A-T becoming the gold standard for content quality, marketers need to adapt or risk falling behind.

## 1. AI-Powered Search Is Here to Stay
Google's Search Generative Experience (SGE) is fundamentally changing how users interact with search results. Brands need to optimize for AI-generated summaries while maintaining traditional ranking strategies.

## 2. Zero-Click Searches Dominate
Over 65% of searches now end without a click. The solution? Own the featured snippets, People Also Ask boxes, and knowledge panels.

## 3. E-E-A-T Is Non-Negotiable
Experience, Expertise, Authoritativeness, and Trustworthiness aren't just ranking factors - they're the foundation of sustainable SEO.

## 4. Video SEO Goes Mainstream
YouTube is the second largest search engine. Brands ignoring video SEO are leaving massive traffic on the table.

## 5. Core Web Vitals 2.0
Google's page experience signals continue to evolve. INP (Interaction to Next Paint) is now the key responsiveness metric.

## Key Takeaway
The brands that win in 2025 will be those that embrace these changes early, create genuinely helpful content, and build authentic authority in their space.
        `,
      },
      {
        id: "google-ads-roi",
        title: "How to 3x Your Google Ads ROI in 90 Days",
        excerpt:
          "A step-by-step framework we've used with 100+ clients to dramatically improve paid search performance.",
        category: "SEM",
        author: "David Kim",
        date: "March 8, 2025",
        readTime: "12 min read",
        image: "gradient-2",
        content: `
Most businesses waste 40-60% of their Google Ads budget on poor targeting, bad ad copy, and unoptimized landing pages. Here's the exact framework we use to fix that.

## Phase 1: Audit & Clean (Week 1-2)
Start by auditing your search term reports. You'll likely find that 30%+ of your spend is going to irrelevant queries. Add negative keywords aggressively and restructure campaigns around tight thematic ad groups.

## Phase 2: Optimize Landing Pages (Week 3-4)
Your landing page is where money is made or lost. Ensure message match between ad copy and landing page headline. Add social proof, clear CTAs, and remove friction from forms.

## Phase 3: Smart Bidding & Scaling (Week 5-8)
Once you have conversion data, switch to smart bidding strategies like Target CPA or Maximize Conversions. Let Google's AI optimize for your goals.

## Phase 4: Testing & Iteration (Week 9-12)
Run systematic A/B tests on ad copy, extensions, and landing page elements. Small improvements compound into massive ROI gains.

## The Bottom Line
There's no magic bullet - just disciplined execution of fundamentals. Follow this framework consistently, and you'll see transformative results.
        `,
      },
      {
        id: "content-marketing-framework",
        title: "The Content Marketing Framework That Generated $2M",
        excerpt:
          "How we built a content engine for a B2B client that went from 0 to $2M in content-attributed revenue.",
        category: "Content",
        author: "Alex Morgan",
        date: "February 28, 2025",
        readTime: "10 min read",
        image: "gradient-3",
        content: `
Content marketing isn't just about writing blog posts. It's about building a systematic engine that attracts, nurtures, and converts your ideal customers over time.

## The Pillar-Cluster Model
We structured all content around 6 main pillar topics, each supported by 10-15 cluster articles. This created topical authority and strong internal linking architecture.

## Distribution Is King
Creating content is only half the battle. We built a distribution system that amplified every piece across email, social, communities, and partnerships.

## Measurement Framework
We tracked every piece of content through the full funnel: impressions → clicks → leads → SQLs → revenue. This let us double down on what worked and cut what didn't.

## Results After 12 Months
The content program generated 28,000 newsletter subscribers, 340 qualified leads, and $2M in directly attributed revenue. The best part? It compounds - the content continues to drive results long after publication.
        `,
      },
      {
        id: "social-media-strategy-2025",
        title: "Social Media Strategy: The Playbook for 2025",
        excerpt:
          "Platform algorithms change, but principles don't. Here's how to build a social media strategy that actually drives business results.",
        category: "Social Media",
        author: "Emma Wilson",
        date: "February 20, 2025",
        readTime: "9 min read",
        image: "gradient-4",
        content: `
Social media in 2025 is unrecognizable from even 2 years ago. Short-form video dominates, AI content is everywhere, and authenticity is the ultimate differentiator.

## Choose Your Platforms Wisely
You don't need to be on every platform. Focus on 2-3 where your audience actually spends time. For B2B, that's LinkedIn and YouTube. For B2C, Instagram, TikTok, and Pinterest.

## The 70-20-10 Content Rule
70% value-driven content (educate, entertain, inspire), 20% shared/curated content, and 10% promotional. This balance keeps your audience engaged without feeling sold to.

## Video First, Always
Every platform is prioritizing video. Reels, Shorts, TikToks, LinkedIn video - if you're not creating video content, you're invisible to algorithms.

## Community Over Followers
A engaged community of 1,000 is worth more than 100,000 passive followers. Focus on building genuine connections, responding to comments, and creating conversation.
        `,
      },
      {
        id: "marketing-automation-guide",
        title: "Marketing Automation: The Complete Setup Guide",
        excerpt:
          "Everything you need to know about implementing marketing automation - from platform selection to your first workflow.",
        category: "Automation",
        author: "Alex Morgan",
        date: "February 12, 2025",
        readTime: "15 min read",
        image: "gradient-5",
        content: `
Marketing automation isn't just for enterprise companies anymore. With platforms like HubSpot, ActiveCampaign, and Klaviyo, businesses of any size can automate their marketing and scale efficiently.

## Choosing the Right Platform
The best platform depends on your business model, budget, and technical capabilities. HubSpot is great for B2B, Klaviyo for e-commerce, and ActiveCampaign for small businesses.

## Your First 5 Workflows
Start with these essential automations: Welcome sequence, lead nurture series, abandoned cart recovery, re-engagement campaign, and customer onboarding.

## Lead Scoring Done Right
Not all leads are created equal. Implement lead scoring based on demographic fit (company size, role, industry) and behavioral signals (page views, downloads, email engagement).

## The Human Touch
Automation should enhance personal connections, not replace them. Use automation to handle repetitive tasks so your team can focus on high-value conversations.
        `,
      },
      {
        id: "digital-strategy-checklist",
        title: "The Ultimate Digital Strategy Checklist for 2025",
        excerpt:
          "A comprehensive checklist covering every aspect of digital marketing strategy - bookmark this one.",
        category: "Strategy",
        author: "Alex Morgan",
        date: "February 5, 2025",
        readTime: "7 min read",
        image: "gradient-6",
        content: `
Every year, we audit hundreds of digital marketing programs. Here's the comprehensive checklist we use to evaluate and improve digital strategies.

## Foundation
- Clear business objectives tied to marketing KPIs
- Defined target audience personas
- Competitive analysis completed
- Budget allocated across channels
- Analytics and tracking properly configured

## SEO Checklist
- Technical audit completed
- Keyword strategy documented
- Content calendar in place
- Link building strategy active
- Local SEO optimized (if applicable)

## Paid Media Checklist
- Campaign structure aligned with business goals
- Conversion tracking verified
- Landing pages optimized
- Negative keyword lists maintained
- A/B tests running continuously

## Content Checklist
- Content pillars defined
- Distribution plan documented
- Performance metrics tracked
- Content refresh schedule set
- Video content strategy in place

Use this checklist quarterly to ensure nothing falls through the cracks.
        `,
      },
    ],
  },

  // ----------------------------------------------------------
  // CONTACT PAGE
  // ----------------------------------------------------------
  contact: {
    hero: {
      tagline: "Get in Touch",
      heading: "Let's Build Something Extraordinary",
      description:
        "Whether you're looking for a full-service partner or need help with a specific challenge, we'd love to hear from you.",
    },
    info: {
      email: "info@marketive.com.au",
      phone: "0415 991 736",
      address: "Pier Avenue, Doreen, Victoria, 3754",
      hours: "Mon - Fri: 9:00 AM to 6:00 PM AEST",
    },
    form: {
      heading: "Send Us a Message",
      fields: [
        { name: "name", label: "Full Name", type: "text", placeholder: "John Smith", required: true },
        { name: "email", label: "Email Address", type: "email", placeholder: "john@company.com", required: true },
        { name: "phone", label: "Phone Number", type: "tel", placeholder: "+61 400 000 000", required: false },
        { name: "company", label: "Company Name", type: "text", placeholder: "Your Company", required: false },
        {
          name: "service",
          label: "Service Interested In",
          type: "select",
          options: [
            "Strategy & Consulting",
            "SEO",
            "SEM / Google Ads",
            // "Content Strategy",
            "Social Media Marketing",
            "Marketing Automation",
            // "Full-Service Package",
            // "Other",
          ],
          required: true,
        },
        { name: "message", label: "Tell Us About Your Project", type: "textarea", placeholder: "Describe your goals and challenges...", required: true },
      ],
      submitLabel: "Send Message",
      successMessage: "Thanks! We'll get back to you within 24 hours.",
    },
    cta: {
      heading: "Prefer a Quick Chat?",
      description:
        "Get in touch with our team directly. No pressure, no obligations - just actionable advice.",
      cta: { label: "Get in Touch", path: "/contact" },
    },
  },

  // ----------------------------------------------------------
  // 404 — PAGE NOT FOUND
  // ----------------------------------------------------------
  notFound: {
    code: "404",
    heading: "Page Not Found",
    description:
      "The page you're looking for doesn't exist or may have moved. Let's get you back on track.",
    primaryCta: { label: "Back to Home", path: "/" },
    secondaryCta: { label: "View Services", path: "/services" },
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    description:
      "Australia's most results-driven digital marketing & SEO agency. We combine strategy, creativity, and technology to fuel your growth.",
    quickLinks: [
      { label: "Home", path: "/" },
      { label: "Services", path: "/services" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "About", path: "/about" },
      { label: "Blog", path: "/blog" },
      { label: "Contact", path: "/contact" },
    ],
    serviceLinks: [
      { label: "Strategy & Consulting", path: "/services/strategy-consulting" },
      { label: "SEO", path: "/services/seo" },
      { label: "SEM / Google Ads", path: "/services/sem" },
      // { label: "Content Strategy", path: "/services/content-strategy" },
      { label: "Social Media", path: "/services/social-media" },
      { label: "Marketing Automation", path: "/services/marketing-automation" },
      // { label: "Branding Services", path: "/services/branding" },
      // { label: "Website Design & Development", path: "/services/web-design-development" },
    ],
    social: [
      { platform: "LinkedIn", url: "https://linkedin.com/company/marketive" },
      { platform: "Instagram", url: "https://instagram.com/marketive" },
      { platform: "Facebook", url: "https://facebook.com/marketive" },
      { platform: "X", url: "https://x.com/marketive" },
    ],
    copyright: "© 2025 Marketive. All rights reserved.",
    bottomLinks: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
    ],
  },

  // ----------------------------------------------------------
  // PRIVACY POLICY
  // ----------------------------------------------------------
  privacy: {
    seo: {
      title: "Privacy Policy | Marketive",
      description:
        "How Marketive collects, uses, discloses, and protects your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.",
      canonical: "https://marketive.com.au/privacy",
    },
    heading: "Privacy Policy",
    intro:
      "This policy explains how we collect, use, disclose, and protect your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).",
    sections: [
      {
        title: "1. Who we are",
        blocks: [
          { type: "p", text: "Marketive (ABN XX XXX XXX XXX) operates this website and associated marketing services. We are based in Australia and are bound by the Australian Privacy Principles." },
        ],
      },
      {
        title: "2. What information we collect",
        blocks: [
          { type: "p", text: "We may collect the following types of personal information:" },
          {
            type: "defs",
            items: [
              { term: "Identity & contact", desc: "Name, email address, phone number, postal address, job title" },
              { term: "Usage & technical", desc: "IP address, browser type, pages visited, time on site, referring URLs" },
              { term: "Marketing preferences", desc: "Communication opt-ins, survey responses, campaign interactions" },
              { term: "Transactional", desc: "Purchase history, billing information (payment details held by our payment processor)" },
            ],
          },
          { type: "p", text: "We do not knowingly collect personal information from individuals under 18 without parental consent." },
        ],
      },
      {
        title: "3. How we collect information",
        blocks: [
          { type: "p", text: "We collect information in the following ways:" },
          {
            type: "list",
            items: [
              "Directly from you — when you fill in forms, subscribe to our newsletter, request a quote, or contact us",
              "Automatically — via cookies, analytics tools, and tracking technologies when you browse our website",
              "From third parties — such as social media platforms, advertising networks, or business partners, where you have consented to this sharing",
              "Publicly available sources — where permitted by law",
            ],
          },
        ],
      },
      {
        title: "4. How we use your information",
        blocks: [
          { type: "p", text: "We use your personal information to:" },
          {
            type: "list",
            items: [
              "Provide, operate, and improve our website and services",
              "Send you marketing communications, offers, and updates (with your consent)",
              "Respond to your enquiries and provide customer support",
              "Process transactions and manage our business relationship with you",
              "Conduct analytics and research to better understand our audience",
              "Personalise your experience on our website and in our communications",
              "Comply with legal obligations and enforce our terms",
              "Detect and prevent fraud or security incidents",
            ],
          },
        ],
      },
      {
        title: "5. Disclosure to third parties",
        blocks: [
          { type: "p", text: "We may share your information with:" },
          {
            type: "list",
            items: [
              "Service providers — hosting, email platforms, CRM systems, analytics, payment processors, and advertising platforms who act on our behalf",
              "Marketing & advertising partners — including Google, Meta, and similar platforms, for audience targeting and campaign measurement",
              "Professional advisers — lawyers, accountants, and auditors as required",
              "Government bodies — where required or authorised by law",
              "Business transfers — in connection with a merger, acquisition, or sale of assets",
            ],
          },
          { type: "p", text: "We do not sell your personal information to third parties." },
        ],
      },
      {
        title: "6. Overseas disclosure",
        blocks: [
          { type: "p", text: "Some of our third-party service providers may be located outside Australia, including in the United States, Ireland, and Singapore. Before disclosing personal information overseas, we take reasonable steps to ensure the recipient handles it consistently with the Australian Privacy Principles (APP 8)." },
          { type: "p", text: "By using our website, you consent to your information being transferred and processed in countries outside Australia where privacy laws may differ from those in Australia." },
        ],
      },
      {
        title: "7. Cookies & tracking technologies",
        blocks: [
          { type: "p", text: "We use cookies and similar technologies (pixels, web beacons) to:" },
          {
            type: "list",
            items: [
              "Keep you logged in and remember your preferences",
              "Analyse website traffic and user behaviour (e.g. Google Analytics)",
              "Serve targeted advertising and measure campaign effectiveness",
              "Operate social media sharing features",
            ],
          },
          { type: "p", text: "You can control or disable cookies through your browser settings. Note that disabling cookies may affect certain features of our website. You may also opt out of interest-based advertising via youronlinechoices.com.au." },
        ],
      },
      {
        title: "8. Data security",
        blocks: [
          { type: "p", text: "We implement reasonable technical and organisational measures to protect your personal information from unauthorised access, loss, misuse, or alteration. These include SSL encryption, access controls, and regular security reviews." },
          { type: "p", text: "In the event of a data breach that is likely to result in serious harm, we will notify affected individuals and the Office of the Australian Information Commissioner (OAIC) as required under the Notifiable Data Breaches (NDB) scheme." },
          { type: "p", text: "No method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information." },
        ],
      },
      {
        title: "9. Retention of information",
        blocks: [
          { type: "p", text: "We retain your personal information only for as long as necessary to fulfil the purposes set out in this policy, or as required by law. When information is no longer needed, we take reasonable steps to destroy or de-identify it." },
        ],
      },
      {
        title: "10. Your rights & access",
        blocks: [
          { type: "p", text: "Under the Australian Privacy Principles, you have the right to:" },
          {
            type: "list",
            items: [
              "Access your data",
              "Request a copy of the information we hold about you",
              "Correct your data",
              "Ask us to update inaccurate or incomplete information",
              "Opt out of marketing",
              "Unsubscribe from emails or request we stop direct marketing",
              "Lodge a complaint",
              "Raise a privacy concern with us or the OAIC",
            ],
          },
          { type: "p", text: "To exercise any of these rights, contact us at privacy@yourcompany.com.au. We will respond within 30 days." },
        ],
      },
      {
        title: "11. Complaints",
        blocks: [
          { type: "p", text: "If you believe we have breached the Australian Privacy Principles, you may lodge a complaint by emailing privacy@yourcompany.com.au. We will investigate and respond within 30 days." },
          { type: "p", text: "If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au or call 1300 363 992." },
        ],
      },
      {
        title: "12. Changes to this policy",
        blocks: [
          { type: "p", text: "We may update this policy from time to time to reflect changes in our practices or legal requirements. We will post the revised policy on this page with an updated date. We encourage you to review this policy periodically." },
        ],
      },
    ],
  },

  // ----------------------------------------------------------
  // SERVICE DETAIL PAGES
  // Each key is the route slug (/services/<slug>). All three share
  // the same structure; sections render only when present here.
  // Item shapes are flexible:
  //   included.items  -> string (chip) OR { title, text } (card)
  //   whyChoose.items -> { icon, label } (row) OR { icon, title, text } (card)
  //   industries.items-> { icon, label } OR { icon, label, text }
  //   faqs.items[].a  -> string OR { intro, items, outro }
  // ----------------------------------------------------------
  servicePages: {
    "strategy-consulting": {
      "seo": {
        "title": "Digital Marketing Strategy Consulting Services Australia",
        "description": "Marketive offers Digital Marketing Strategy Consulting Services Australia — from digital roadmap strategy to strategic business solutions that deliver growth.",
        "canonical": "https://marketive.com.au/services/strategy-consulting"
      },
      "hero": {
        "breadcrumb": "Strategy & Consulting",
        "tagline": "",
        "heading": "Digital Strategy & Consulting Services",
        "paragraphs": [
          "Strategic business solutions that turn ambition into an actionable digital roadmap strategy — built for growth, backed by data.",
          "Marketive's business strategy consulting and digital strategy & consulting services help Australian businesses cut through complexity, align teams around a clear direction, and translate strategy into measurable digital and commercial outcomes. As a trusted marketing strategy consultant partner, we combine business consulting with hands-on delivery across SEO and social media strategies, ensuring your digital marketing strategy Australia is built to perform."
        ],
        "primaryCta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "whyMatters": {
        "heading": "Why Strategy Matters",
        "blocks": [
          {
            "img": "/images/services/hero.jpg",
            "text": "Many businesses invest in SEO, Google Ads or social media without a clear digital roadmap strategy. The result is wasted budget, inconsistent messaging and disappointing returns."
          },
          {
            "img": "/images/case-studies/gradient-1.jpg",
            "text": "Our business strategy consulting identifies where your biggest opportunities exist before you invest another marketing dollar — replacing guesswork with strategic business solutions built on data, not assumptions."
          },
          {
            "img": "/images/services/process-1.jpg",
            "text": "As a trusted provider of consulting services Australia businesses rely on, Marketive combines digital strategy & consulting services with hands-on delivery. Whether you need a marketing strategy consultant to sharpen your SEO and social media strategies, or broader business consulting services Australia-wide, we help you plan with clarity and invest with confidence."
          }
        ]
      },
      "help": {
        "tagline": "What We Help You With",
        "heading": "Our Digital Strategy & Consulting Services",
        "description": "Marketive's strategy consulting services are designed to support businesses at every stage — whether you're setting direction for the first time or refining an existing plan. As a leading provider of consulting services Australia businesses trust, we combine business strategy consulting with hands-on digital delivery.",
        "cards": [
          {
            "icon": "Briefcase",
            "title": "Business Strategy Development",
            "text": "Corporate and business-unit strategy, growth planning, and market positioning built around your objectives — the foundation of effective business consulting."
          },
          {
            "icon": "Monitor",
            "title": "Digital Consulting & Digital Strategy",
            "text": "A digital roadmap strategy covering website, SEO, paid media, content, and marketing automation — aligned to commercial goals and delivered by experienced digital consulting specialists."
          },
          {
            "icon": "TrendingUp",
            "title": "Market Entry & Growth Strategy",
            "text": "Research-backed strategies for entering new markets, launching new products, or expanding into new customer segments across Australia."
          },
          {
            "icon": "Zap",
            "title": "Business Model & Transformation Strategy",
            "text": "Support for organisations rethinking how they operate, sell, or deliver value in response to market or technology change — a core part of our strategic business solutions."
          },
          {
            "icon": "Map",
            "title": "Strategic Planning & Roadmapping",
            "text": "Practical, phased roadmaps with clear milestones, ownership, and resourcing — not just a strategy document that sits on a shelf."
          },
          {
            "icon": "Search",
            "title": "Competitor & Market Analysis",
            "text": "In-depth analysis of your competitive landscape, including SEO and social media strategies, to sharpen positioning and identify untapped opportunity."
          },
          {
            "icon": "Users",
            "title": "Ongoing Strategic Advisory",
            "text": "Continued access to our Marketing Strategy Consultant team as your strategy evolves, your market shifts, or new opportunities emerge."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "included": {
        "tagline": "What's Included",
        "heading": "Everything in Your Strategy",
        "description": "Our Marketing Consulting Services provide everything you need to build a successful marketing foundation and strategic business solutions.",
        "items": [
          "Business discovery workshop",
          "Comprehensive Digital Marketing Audit",
          "Competitor and market analysis",
          "Customer and audience research",
          "SEO and keyword research",
          "Website performance review",
          "Marketing channel recommendations",
          "Budget planning",
          "KPI framework",
          "A customised Marketing Roadmap",
          "A 90-day action plan"
        ]
      },
      "process": {
        "tagline": "",
        "heading": "Our Unique Approach",
        "description": "We follow a structured, six-stage process for every strategy consulting and business consulting engagement — keeping you involved at every key decision point.",
        "steps": [
          {
            "step": "1",
            "title": "Initiate",
            "text": "Understand your business, objectives, and current challenges through structured discovery."
          },
          {
            "step": "2",
            "title": "Plan",
            "text": "Develop a tailored strategic plan and digital roadmap strategy, prioritised by impact and effort."
          },
          {
            "step": "3",
            "title": "Deliver",
            "text": "Execute against agreed timelines, milestones, and governance, with full transparency throughout."
          },
          {
            "step": "4",
            "title": "Verify",
            "text": "Review outcomes against KPIs, testing assumptions and refining the approach as needed."
          },
          {
            "step": "5",
            "title": "Handover",
            "text": "Embed the strategy and supporting tools within your team, so you're equipped to run with it."
          },
          {
            "step": "6",
            "title": "Ongoing Support",
            "text": "Remain on hand for strategic advisory, roadmap updates, and emerging opportunities."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "whyChoose": {
        "tagline": "Why Choose Us",
        "heading": "Strategy That Delivers Results",
        "description": [
          "Choosing the right Marketing Strategy Agency can make the difference between wasted marketing spend and sustainable business growth. As specialists in business strategy consulting and Digital Strategy & Consulting Services, our approach combines strategic thinking, market research, data analysis, and AI-powered insights to build a digital roadmap strategy that delivers measurable results.",
          "Whether you're refining your SEO and social media strategies or need a dedicated marketing strategy consultant to guide your next phase of growth, Marketive brings the strategic business solutions Australian businesses need to invest with confidence and grow sustainably."
        ],
        "items": [
          {
            "icon": "BarChart3",
            "label": "Data-Driven Decisions"
          },
          {
            "icon": "Sparkles",
            "label": "AI-Powered Insights"
          },
          {
            "icon": "Award",
            "label": "Certified Digital Experts"
          },
          {
            "icon": "FileText",
            "label": "Transparent Reporting"
          },
          {
            "icon": "TrendingUp",
            "label": "Tailored Growth Plans"
          },
          {
            "icon": "MapPin",
            "label": "Australian Market Experience"
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "industries": {
        "tagline": "Industries We Serve",
        "heading": "Built for Your Sector",
        "items": [
          {
            "icon": "HeartPulse",
            "label": "Healthcare"
          },
          {
            "icon": "Accessibility",
            "label": "NDIS"
          },
          {
            "icon": "Building2",
            "label": "Real Estate"
          },
          {
            "icon": "Wrench",
            "label": "Tradies"
          },
          {
            "icon": "Briefcase",
            "label": "Professional Services"
          },
          {
            "icon": "GraduationCap",
            "label": "Education"
          },
          {
            "icon": "UtensilsCrossed",
            "label": "Hospitality"
          },
          {
            "icon": "ShoppingCart",
            "label": "eCommerce"
          }
        ]
      },
      "didYouKnow": {
        "heading": "Did you know?",
        "items": [
          {
            "text": "Businesses that align their content strategy with SEO are 13x more likely to see positive ROI",
            "source": "(HubSpot, 2021)"
          },
          {
            "text": "Social signals can indirectly influence search rankings by up to 20%",
            "source": "(Moz, 2023)"
          }
        ]
      },
      "faqs": {
        "tagline": "FAQ's",
        "heading": "Frequently Asked Questions",
        "items": [
          {
            "q": "What is a Digital Marketing Strategy?",
            "a": "A Digital Marketing Strategy is a customised digital roadmap strategy that outlines how your business will use digital channels such as SEO, Google Ads, social media, content marketing, email marketing, and automation to achieve specific business goals. A well-planned Digital Marketing Strategy Australia helps businesses reach the right audience, improve brand visibility, generate qualified leads, and maximise return on investment. As an experienced Digital Marketing Consultant, we develop strategies tailored to your industry, target market, and growth objectives."
          },
          {
            "q": "Why is Strategy Important Before Running Ads?",
            "a": "Running paid advertising without a clear strategy can result in wasted budget and inconsistent results. A well-defined Online Marketing Strategy — combining SEO and social media strategies with paid media — ensures your campaigns target the right audience with the right message at the right time. Our Marketing Strategy Consultant applies business strategy consulting principles to analyse your business goals, competitors, customer journey, and marketing channels before recommending the most effective approach, helping you achieve sustainable business growth rather than short-term wins."
          },
          {
            "q": "How Long Does Strategy Development Take?",
            "a": "The timeframe depends on your business size, objectives, and project complexity. In most cases, our Digital Strategy & Consulting Services are completed within 2 to 4 weeks. During this time, we conduct research, competitor analysis, audience profiling, and a comprehensive Digital Marketing Audit before developing a tailored strategy and actionable implementation plan."
          },
          {
            "q": "What's Included?",
            "a": {
              "intro": "Our Marketing Consulting Services provide everything you need to build a successful marketing foundation and strategic business solutions, including:",
              "items": [
                "Business discovery workshop",
                "Comprehensive Digital Marketing Audit",
                "Competitor and market analysis",
                "Customer and audience research",
                "SEO and keyword research",
                "Website performance review",
                "Marketing channel recommendations",
                "Budget planning",
                "KPI framework",
                "A customised Marketing Roadmap",
                "A 90-day action plan"
              ],
              "outro": "Every strategy is tailored to your business goals and designed to support long-term growth."
            }
          },
          {
            "q": "Can You Implement the Strategy?",
            "a": "Absolutely. As a full-service Marketing Strategy Agency, we don't just develop strategies — we also execute them. Combining digital consulting with hands-on delivery, our team can implement SEO, Google Ads, social media marketing, content marketing, website optimisation, marketing automation, and ongoing campaign management to ensure your strategy delivers measurable business results."
          },
          {
            "q": "Do You Work With Small Businesses?",
            "a": "Yes. We provide consulting services Australia-wide to startups, small businesses, growing companies, and established enterprises. Whether you're launching a new business or looking to scale an existing one, our Marketing Planning Services are tailored to your goals, budget, and growth stage. Every client receives a personalised Business Growth Strategy designed to maximise opportunities and deliver measurable outcomes."
          },
          {
            "q": "How Much Does Strategy Consulting Cost?",
            "a": "The cost of strategy consulting and business consulting services Australia businesses invest in varies depending on your business size, objectives, and the scope of work required. After an initial consultation, our Digital Marketing Consultant will recommend a tailored solution based on your goals. We provide transparent pricing with no hidden fees and focus on delivering strategies that generate long-term value and return on investment."
          },
          {
            "q": "Do you Provide Ongoing Support?",
            "a": "Yes. Strategy isn't a one-time activity — it evolves as your business grows and the market changes. As part of our broader business consulting offering, our ongoing Marketing Consulting Services include performance reviews, strategic planning sessions, campaign optimisation, reporting, and continuous improvements to keep your Online Marketing Strategy aligned with your business objectives."
          },
          {
            "q": "Will I Receive a Written Strategy Document?",
            "a": "Yes. Every client receives a comprehensive strategy document that includes market research, competitor analysis, customer insights, recommended marketing channels, KPIs, implementation priorities, and a detailed digital roadmap strategy. This document serves as a practical guide for executing your marketing activities and measuring success over time."
          },
          {
            "q": "Can you Audit Our Existing Marketing?",
            "a": "Yes. We offer a comprehensive Digital Marketing Audit that evaluates every aspect of your current marketing performance, including your website, SEO, paid advertising, social media, content, analytics, and conversion tracking. Our audit identifies strengths, uncovers growth opportunities, and provides actionable recommendations to strengthen your Business Growth Strategy through practical, strategic business solutions."
          }
        ]
      },
      "finalCta": {
        "heading": "Ready to Scale Your Growth with Strategic Clarity?",
        "description": "Get in touch with Marketive's strategy consultants to build a data-driven digital roadmap tailored to your business."
      }
    },
    "seo": {
      "seo": {
        "title": "Leading Search Engine Optimisation Agency in Australia",
        "description": "Marketive is a results-driven Search Engine Optimisation Agency in Australia helping small businesses rank higher, get more traffic & grow online.",
        "canonical": "https://marketive.com.au/services/seo"
      },
      "hero": {
        "breadcrumb": "Search Engine Optimisation",
        "tagline": "",
        "heading": "Search Engine Optimisation Agency in Australia",
        "paragraphs": [
          "Marketive is a specialist search engine optimisation agency delivering data-led search engine optimisation services that put your business in front of the right Australians — at the exact moment they're searching."
        ],
        "primaryCta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "help": {
        "tagline": "",
        "heading": "Our Services Complete Search Engine Optimisation Solutions",
        "description": "As a full-service digital marketing agency, Marketive offers a complete suite of SEO solutions designed to help Australian businesses grow their online visibility, attract qualified traffic, and convert visitors into customers.",
        "cards": [
          {
            "icon": "Target",
            "title": "Competitive Analysis",
            "text": "Before we build your strategy, we study your competitors. Our team analyses who's ranking above you, what keywords they're targeting, and where the gaps are in their approach. This research forms the foundation of every search engine optimisation strategy we build, ensuring your campaign is designed to outperform, not just compete."
          },
          {
            "icon": "Search",
            "title": "Search Engine Optimization (SEO)",
            "text": "Our core search engine optimisation services cover everything from on-page optimisation to authority building. Whether you need SEO services Australia wide or a hyper-targeted campaign for a single market, we tailor our approach to your industry, audience, and goals — helping you climb the rankings and stay there."
          },
          {
            "icon": "MapPin",
            "title": "Local SEO",
            "text": "For businesses that rely on nearby customers, our local SEO services for small business help you dominate location-based searches like \"near me\" queries. As a trusted local SEO agency Australia businesses turn to, we optimise your Google Business Profile, build local citations, and manage reviews so you show up when it matters most."
          },
          {
            "icon": "Code",
            "title": "Technical SEO",
            "text": "Rankings start with a healthy website. Our technical SEO services address site speed, crawlability, indexing issues, mobile-friendliness, and structured data — the behind-the-scenes factors that determine whether Google can find, understand, and rank your site."
          },
          {
            "icon": "FileText",
            "title": "Content Strategy",
            "text": "Great content drives both rankings and conversions. We develop content strategies built around real search intent and keyword research, creating pages and articles that answer your customers' questions and position your brand as the authority in your industry."
          },
          {
            "icon": "Link",
            "title": "Link Building",
            "text": "Backlinks remain one of the strongest ranking signals in Google's algorithm. Our ethical, white-hat link building campaigns earn high-quality links from relevant, authoritative Australian websites — boosting your domain authority and search visibility over time."
          },
          {
            "icon": "ShoppingCart",
            "title": "E-Commerce SEO",
            "text": "Online stores need a specialised approach. We optimise product pages, category structures, and site architecture to help e-commerce businesses capture high-intent shoppers and turn organic search into a genuine sales channel."
          },
          {
            "icon": "BarChart3",
            "title": "Analytics and Reporting",
            "text": "You shouldn't have to guess whether your SEO investment is working. We provide transparent, easy-to-understand reporting on rankings, traffic, and conversions — so you always know exactly what your campaign is delivering."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "included": {
        "tagline": "What's Included",
        "heading": "Everything in Your SEO Package",
        "description": [
          "No hidden extras, no bolt-on fees. Every Marketive SEO engagement includes a comprehensive set of deliverables from day one — because a genuine search engine optimisation agency shouldn't nickel-and-dime you for the basics.",
          "Whether you're investing in SEO services for small business or a larger digital marketing services package, every plan includes:"
        ],
        "items": [
          "Comprehensive SEO Audit - A full technical, on-page, and competitive audit to identify exactly where your opportunities lie",
          "Keyword Research & Strategy — Industry-specific research that forms the backbone of your search engine optimisation strategy",
          "Technical SEO Fixes — Site speed, crawlability, indexing, and mobile optimisation covered under our technical SEO services",
          "On-Page Optimisation — Meta titles, descriptions, headers, and content structured to rank",
          "Local SEO Setup — Google Business Profile optimisation and citation building included as standard for our local SEO services for small business",
          "Content Recommendations — Strategic guidance on what to publish and why, based on real search intent",
          "Link Building Activity — Ethical, white-hat outreach to build your site's authority",
          "Monthly Reporting & Strategy Calls — Transparent, plain-English reporting so you always know what your investment is achieving"
        ],
        "paragraphs": [
          "No lock-in contracts. No surprise invoices. No \"that'll cost extra\" conversations halfway through the month. Just a straightforward, all-inclusive approach from a digital marketing agency that believes pricing transparency should be the standard — not the exception.",
          "As a trusted digital marketing company serving businesses across Australia, we built our pricing model around one simple principle: what you're quoted is what you pay, every month, for as long as you work with us."
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "process": {
        "tagline": "",
        "heading": "Our SEO Strategy Process",
        "description": "A proven four-phase framework we use for every client — from initial discovery to sustained ranking growth.",
        "steps": [
          {
            "step": "1",
            "title": "Discover & Audit",
            "text": "We analyse your website, target keywords, competitors, and existing organic performance to establish a clear baseline and uncover quick wins. This phase includes a full technical SEO audit and forms the research foundation of every search engine optimisation strategy we build — whether you're a single-location business needing local SEO services for small business or a national brand competing at scale."
          },
          {
            "step": "2",
            "title": "Strategy & Roadmap",
            "text": "Using your audit findings, we build a 90-day SEO roadmap that prioritises the highest-impact technical fixes, content opportunities, and link targets. As a dedicated search engine optimisation agency, we tailor this roadmap to your specific market — factoring in local search demand for businesses that need a trusted local SEO agency Australia partner, or broader visibility for those seeking national SEO services Australia wide."
          },
          {
            "step": "3",
            "title": "Execute & Optimise",
            "text": "Our team implements on-page changes, publishes optimised content, builds authoritative links, and refines targeting as data comes in. This is where our technical SEO services and content strategy come together — turning roadmap priorities into measurable ranking improvements across both organic and local SEO for small businesses channels."
          },
          {
            "step": "4",
            "title": "Report & Scale",
            "text": "Monthly reporting keeps you fully informed. As rankings improve, we identify new keyword clusters and opportunities to expand your organic reach. As your ongoing digital marketing agency, we don't just maintain results — we scale them, uncovering fresh opportunities that keep your search engine optimisation services delivering compounding returns month after month."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "whyChoose": {
        "tagline": "Why Choose Us",
        "heading": "Why Choose Us as Your SEO Agency",
        "description": "We're not a faceless agency churning out cookie-cutter campaigns. We're a specialist Australian SEO team that treats your growth as our own — a search engine optimisation agency built on partnership, not transactions.",
        "items": [
          {
            "icon": "MapPin",
            "title": "Truly Australian Focus",
            "text": "We understand the Australian market, search behaviour, and Google.com.au algorithm nuances. Built specifically for .com.au success."
          },
          {
            "icon": "TrendingUp",
            "title": "ROI-Driven Approach",
            "text": "Rankings are a means, not the end. We tie every SEO activity to business outcomes — leads, sales, and revenue."
          },
          {
            "icon": "BarChart3",
            "title": "Data & Research Led",
            "text": "Every decision we make is grounded in data. From keyword selection to content topics, Australian search data guides our search engine optimisation strategy."
          },
          {
            "icon": "Users",
            "title": "Dedicated Account Team",
            "text": "You'll work directly with your own SEO strategist, not a rotating roster of juniors. One point of contact, full accountability, and proactive communication."
          },
          {
            "icon": "ShieldCheck",
            "title": "No Lock-In Contracts",
            "text": "We earn your business every month. Our search engine optimisation services are delivered on rolling monthly agreements."
          },
          {
            "icon": "CheckCircle",
            "title": "Ethical White-Hat Methods",
            "text": "We only use ethical, Google-approved SEO practices. No shortcuts, no black-hat tricks — just sustainable rankings that protect your brand."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "didYouKnow": {
        "heading": "Did you know?",
        "items": [
          "Remember, in search marketing, sometimes the biggest opportunities come in small packages."
        ]
      },
      "faqs": {
        "tagline": "FAQ's",
        "heading": "Frequently Asked Questions",
        "items": [
          {
            "q": "What is SEO and Why Does My Australian Business Need It?",
            "a": "Search engine optimisation (SEO) is the process of improving your website so it appears higher in Google's organic (unpaid) search results. When Australians search for your product or service, a solid search engine optimisation strategy determines whether they find you or your competitor. Unlike paid ads that stop the moment you stop spending, SEO services for small business build compounding, long-term visibility that drives consistent traffic and leads without ongoing ad spend. If your customers are searching online — and they are — you need SEO services Australia businesses can rely on."
          },
          {
            "q": "How Long Does SEO Take to Show Results?",
            "a": "SEO is a medium-to-long-term investment. Most clients begin to see measurable improvements in keyword rankings and organic traffic within 3–6 months of consistent optimisation through our search engine optimisation services. Competitive industries or newer websites may take 6–12 months to reach page-one rankings for high-traffic keywords. However, technical seo services and local SEO improvements can deliver noticeable results within the first 4–8 weeks. We set realistic expectations from day one and show you progress every month."
          },
          {
            "q": "What's the Difference Between Local SEO and General SEO Services?",
            "a": "General search engine optimisation services focus on improving organic rankings broadly — targeting keywords at a national or industry level. Local SEO services for small business are specifically designed to help businesses rank in location-based searches like \"plumber in Brisbane\" or \"dentist near me.\" Local seo for small businesses involves optimising your Google Business Profile, building local citations, managing online reviews, and creating geo-targeted content. If you serve customers in specific Australian cities, suburbs, or regions, working with a local seo agency Australia trusts is essential for capturing that intent-driven local traffic."
          },
          {
            "q": "How Much Do Your SEO Services Cost?",
            "a": "Our SEO packages are tailored to the size, goals, and competitiveness of your business. Pricing varies depending on the scope of work — local seo services for small business are priced differently from a national e-commerce SEO campaign. We offer transparent, fixed monthly retainers with no hidden fees, as with any digital marketing services worth investing in. Contact us for a free SEO audit and proposal, and we'll recommend the right investment level to achieve your growth goals."
          },
          {
            "q": "Will SEO Work For My Industry or Niche?",
            "a": "Yes — SEO works for virtually every industry, including healthcare, real estate, legal, trades, retail, hospitality, finance, and education. As long as your target customers are using Google to search for what you offer (and in Australia, almost all of them are), there's a significant opportunity for any search engine optimisation agency to help you capture it. Our team has delivered results across dozens of Australian industries, and we'll conduct industry-specific keyword research to identify your biggest opportunities before we begin."
          },
          {
            "q": "Do You Offer SEO Services For Businesses Outside Major Cities?",
            "a": "Absolutely. Our local SEO services are particularly effective for regional and rural Australian businesses, where there's often less competition and faster ranking opportunities. Whether you're in Sydney, Melbourne, Brisbane, Perth, Adelaide, or a regional town, we can build a geo-targeted strategy that captures local search demand. We work with clients across all states and territories as a local seo agency Australia wide — location is no barrier for our team."
          },
          {
            "q": "What Makes Marketive Different From Other SEO Agencies?",
            "a": "Unlike many search engine optimisation agency options that rely on templated campaigns, Marketive builds every strategy from scratch based on your specific market, competitors, and business goals. We're 100% focused on the Australian market, which means we understand the nuances of Google.com.au search behaviour and local ranking factors. As a full-service digital marketing agency, we also operate without lock-in contracts — our clients stay because we deliver results, not because they're contractually obligated. You'll have a dedicated strategist, not a rotating team, and transparent monthly reporting that shows exactly what your investment is achieving."
          },
          {
            "q": "What Does the Onboarding Process Look Like When I Start With You?",
            "a": "When you engage Marketive, we begin with a comprehensive discovery session to understand your business, goals, and target audience. From there, we conduct a full technical seo services audit, keyword research, and competitor analysis. Within the first two weeks, you'll receive a clear, prioritised SEO roadmap outlining what we'll focus on and why. Our onboarding is designed to be smooth and efficient — most clients have their strategy confirmed and implementation underway within 7–14 days of signing."
          },
          {
            "q": "Can I Track the Progress of My SEO Campaign?",
            "a": "Yes — complete transparency is one of our core commitments as a digital marketing company. Every client receives access to a live reporting dashboard showing keyword rankings, organic traffic, click-through rates, and conversion data. We also provide a detailed monthly report with plain-English commentary, and we schedule a regular strategy call to walk through results, answer questions, and adjust our approach based on what the data shows. You'll never be left wondering what's happening with your campaign."
          },
          {
            "q": "Do I Need to Sign a Long-Term Contract?",
            "a": "No. We operate on flexible, rolling monthly agreements — there are no lock-in contracts or long-term commitments required. We believe the quality of our work and the results we deliver should be the reason you stay with us, not a contract. That said, we do recommend committing to at least 6 months to allow the SEO process to fully take effect — sustainable rankings are built over time, not overnight."
          }
        ]
      },
      "finalCta": {
        "heading": "Ready to Dominate Search Rankings?",
        "description": "Book your free SEO audit today and see how Marketive can put your website at the top of Google."
      }
    },
    "sem": {
      "seo": {
        "title": "Leading Search Engine Marketing Agency in Australia",
        "description": "Marketive is a results-driven Search Engine Marketing Agency in Australia helping businesses nationwide boost ROAS with expert Google Ads, PPC & SEM management.",
        "canonical": "https://marketive.com.au/services/sem"
      },
      "hero": {
        "breadcrumb": "Search Engine Marketing",
        "tagline": "",
        "heading": "Search Engine Marketing Agency in Australia",
        "paragraphs": [
          "Marketive is the search engine marketing company Australian businesses turn to when they want results, not guesswork. As a search engine marketing agency focused on accountability over vanity metrics, we deliver complete search engine marketing services under one roof — so your strategy, execution, and reporting all stay connected."
        ],
        "primaryCta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "whyMatters": {
        "heading": "SEM Without a Strategy Burns Your Budget",
        "blocks": [
          {
            "img": "/images/services/hero.jpg",
            "text": "Search engine marketing is the fastest way to get your business in front of high-intent Australian buyers — but only when it's managed with precision. Poorly structured Google Ads campaigns bleed budget on the wrong clicks, wrong audiences, and wrong keywords, with nothing to show for it. This is exactly why businesses eventually stop trying to manage it themselves and look for a proper search engine marketing company or Google Ads Agency Australia can rely on."
          },
          {
            "img": "/images/case-studies/gradient-2.jpg",
            "text": "At Marketive, our SEM marketing approach starts with a deep understanding of your customer journey, competitive landscape, and profit targets. As a search engine marketing agency built around accountability, every campaign we run is engineered to maximise return on ad spend (ROAS) — not just impressions or clicks. Our PPC strategy is developed by dedicated PPC specialists who treat every dollar of your ad spend as an investment, not a line item."
          },
          {
            "img": "/images/services/process-2.jpg",
            "text": "Whether you need full PPC management Australia businesses can trust for lead generation, ongoing Google Ads Management Australia for an established account, or you're comparing us as a digital marketing agency offering digital marketing services beyond paid search, our search engine marketing services and PPC Australia services are built on the same principle: precision over guesswork. It's this discipline that positions us as one of the best PPC agency Australia options for businesses who are done watching budget disappear with nothing to show for it."
          }
        ]
      },
      "help": {
        "tagline": "What We Help You With",
        "heading": "SEM, End to End",
        "description": "A complete suite of search engine marketing services — from Google Ads management to conversion optimisation — all under one roof. As a full-service search engine marketing company, we bring everything under one team so nothing falls through the cracks between strategy and execution.",
        "cards": [
          {
            "icon": "Search",
            "title": "Google Ads Services",
            "text": "End-to-end Google Ads management including campaign setup, keyword research, audience targeting, ad copy, and ongoing optimisation to maximise your return on every dollar spent. As a trusted Google Ads Agency Australia businesses turn to, our Google Ads Management Australia service covers everything from brand-new account builds to scaling established campaigns nationally."
          },
          {
            "icon": "MousePointerClick",
            "title": "Pay Per Click Services",
            "text": "Our PPC services are built around one goal: profitable clicks. Our PPC specialists identify the highest-intent search terms, eliminate wasted spend on irrelevant queries, and continuously refine bids to lower your cost per conversion — the same standard we hold ourselves to as a PPC agency Australia businesses come to rely on."
          },
          {
            "icon": "ShoppingCart",
            "title": "Google Shopping Ads",
            "text": "Put your products directly in front of buyers ready to purchase. We optimise your product feed, shopping campaigns, and bidding strategy to drive revenue from high-commercial-intent searches."
          },
          {
            "icon": "Eye",
            "title": "Display & Remarketing",
            "text": "Re-engage visitors who didn't convert the first time. Our remarketing campaigns keep your brand visible across Google's Display Network, bringing warm prospects back to complete their purchase or enquiry."
          },
          {
            "icon": "Video",
            "title": "YouTube & Video Ads",
            "text": "Capture attention at the top of the funnel with targeted YouTube advertising. We handle scripting guidance, audience segmentation, and performance tracking to make your video budget work harder."
          },
          {
            "icon": "TrendingUp",
            "title": "Conversion Rate Optimisation",
            "text": "More clicks mean nothing without conversions. We audit your landing pages, run A/B tests, and implement proven CRO techniques to turn paid traffic into real enquiries and sales."
          },
          {
            "icon": "FileText",
            "title": "PPC Strategy & Consulting",
            "text": "Not sure where to start, or want a second opinion on your current setup? Our PPC strategy consulting gives you a clear roadmap — channel selection, budget allocation, and campaign structure — backed by the same PPC Australia services and PPC management Australia approach we use for our full-service clients. It's a lighter-touch option for businesses that want direction from experienced PPC specialists without handing over full account management yet."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "included": {
        "tagline": "What's Included",
        "heading": "Everything in Your SEM Package",
        "description": "No hidden fees, no vague deliverables. Every Marketive SEM engagement covers the full scope of what it takes to run profitable paid search campaigns — the same standard behind our PPC management Australia and Google Ads Management Australia services.",
        "items": [
          {
            "title": "Google Ads Account Audit",
            "text": "A comprehensive review of your existing campaigns, wasted spend, quality scores, and structural issues — with a clear fix-it roadmap."
          },
          {
            "title": "Keyword Research & Negative Lists",
            "text": "Identifying the exact search terms your ideal customers use — and blocking the irrelevant ones that drain your budget."
          },
          {
            "title": "Campaign Structure & Setup",
            "text": "Logically structured ad groups, match types, and campaign hierarchies built to maximise quality score and relevance."
          },
          {
            "title": "Ad Copywriting & Testing",
            "text": "Compelling, benefit-led headlines and descriptions written for high CTR — with ongoing A/B testing to continually improve performance."
          },
          {
            "title": "Bid Strategy & Budget Management",
            "text": "Smart bidding configuration aligned to your CPA or ROAS targets, with daily budget monitoring to eliminate overspend — a core part of every PPC strategy we build."
          },
          {
            "title": "Conversion Tracking Setup",
            "text": "Full Google Tag Manager and GA4 implementation so every lead, call, form, and purchase is accurately attributed to your campaigns."
          },
          {
            "title": "Landing Page Recommendations",
            "text": "We audit the pages your ads send traffic to and provide actionable improvements to increase conversion rates and lower your cost per lead."
          },
          {
            "title": "Monthly Reporting & Strategy Calls",
            "text": "Plain-English performance reports plus a dedicated monthly call with your PPC specialists to review results, ad spend efficiency, and next-period priorities."
          },
          {
            "title": "Full Account Access & Ownership",
            "text": "Every account we manage stays in your name, under your login — no lock-in, no hidden dependencies. It's the transparency you should expect from any PPC agency Australia businesses trust with their ad spend."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "process": {
        "tagline": "",
        "heading": "Our Search Engine Marketing Process",
        "description": "A disciplined four-phase approach we apply to every SEM account — from first audit to full-scale growth. It's the same process behind every engagement we run as a search engine marketing agency, whether you're starting fresh or handing us an underperforming account.",
        "steps": [
          {
            "step": "1",
            "title": "Audit & Research",
            "text": "We analyse your current ad account (or competitors' strategies if you're starting fresh), identify wasted spend, map your highest-value keywords, and define your CPA targets. This is where our PPC specialists set the foundation for everything that follows."
          },
          {
            "step": "2",
            "title": "Build & Launch",
            "text": "We architect your campaign structure, write compelling ad copy, configure bidding strategies, set up conversion tracking, and launch campaigns optimised from day one — following the same PPC strategy framework we use across every Google Ads Management Australia engagement."
          },
          {
            "step": "3",
            "title": "Test & Optimise",
            "text": "Using real performance data, we run continuous A/B tests on ads and landing pages, refine keyword lists, adjust bids, and eliminate underperforming elements weekly."
          },
          {
            "step": "4",
            "title": "Scale & Report",
            "text": "Once campaigns are profitable, we identify opportunities to scale — new campaign types, expanded audiences, and higher budgets — while keeping your ROAS firmly on target. As your Google Ads Agency Australia partner, we revisit your PPC strategy at this stage to make sure it's still built around your actual growth goals, not just last quarter's numbers."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "whyChoose": {
        "tagline": "Why Choose Us",
        "heading": "Why Choose Us as Your SEM Agency",
        "description": "We're a specialist Australian SEM agency that's obsessed with one metric: your return on ad spend. As a search engine marketing agency built specifically around Australian businesses, here's what sets us apart.",
        "items": [
          {
            "icon": "MapPin",
            "title": "Australian Market Experts",
            "text": "We understand how Australians search, compare, and buy. Our Google Ads services are tailored to local buying behaviour, seasonality, and competitive dynamics — not copy-pasted from overseas playbooks. It's this local focus that makes us a genuine Google Ads Agency Australia businesses, not an overseas team running generic campaigns."
          },
          {
            "icon": "TrendingUp",
            "title": "ROAS-Obsessed Management",
            "text": "Every decision we make — from keyword selection to bid adjustments — is driven by return on ad spend. We don't celebrate clicks; we celebrate profitable conversions that grow your business. This is the standard behind every PPC strategy our team builds."
          },
          {
            "icon": "Sparkles",
            "title": "Relentless Testing Culture",
            "text": "We run structured A/B tests on ad copy, landing pages, audience segments, and bid strategies every week. Continuous testing is how our PPC specialists consistently lower CPAs and increase conversion rates over time."
          },
          {
            "icon": "User",
            "title": "Dedicated SEM Strategist",
            "text": "You get a single, senior point of contact who knows your account inside out. No account managers handing you off to juniors — the person you speak to is the person managing your campaigns. It's a level of hands-on PPC management Australia businesses often expect but rarely get."
          },
          {
            "icon": "Key",
            "title": "You Own Your Account",
            "text": "Your Google Ads account is yours — always. We work inside your own account, not ours. If you ever leave, you take everything with you: campaign history, data, and conversion tracking. It's a principle every trustworthy PPC agency Australia should operate by."
          },
          {
            "icon": "FileText",
            "title": "Transparent Reporting",
            "text": "No vanity metrics, no spin. Every report shows the numbers that matter to your business — cost per lead, cost per sale, ROAS, and revenue attributed — with honest commentary on what's working and what's next. It's the same transparency you'd expect from a digital marketing company you're trusting with real budget, whether you're working with us purely for Google Ads Management Australia or as your broader digital marketing agency."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "platforms": {
        "tagline": "Platform We Work With",
        "heading": "Tools We Advertise Across",
        "description": "Our SEM marketing team is certified and experienced across the full Google advertising ecosystem and the analytics tools that power smarter decisions — the backbone of every search engine marketing services engagement we run.",
        "items": [
          "Google Search Ads",
          "Google Shopping",
          "Google Display Network",
          "YouTube Ads",
          "Performance Max",
          "Google Tag Manager",
          "Google Analytics 4 (GA4)",
          "Microsoft Advertising",
          "Google Merchant Center",
          "Looker Studio"
        ]
      },
      "industries": {
        "tagline": "Industries We Serve",
        "heading": "Built for Your Sector",
        "description": "Our pay per click services and Google Ads expertise spans a wide range of Australian industries — from local service businesses to national e-commerce brands, delivered through the same PPC Australia services approach regardless of sector.",
        "items": [
          { "icon": "HeartPulse", "label": "Healthcare" },
          { "icon": "Accessibility", "label": "NDIS" },
          { "icon": "Building2", "label": "Real Estate" },
          { "icon": "Wrench", "label": "Tradies" },
          { "icon": "Briefcase", "label": "Professional Services" },
          { "icon": "GraduationCap", "label": "Education" },
          { "icon": "UtensilsCrossed", "label": "Hospitality" },
          { "icon": "ShoppingCart", "label": "eCommerce" }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "faqs": {
        "tagline": "FAQ's",
        "heading": "Frequently Asked Questions",
        "items": [
          {
            "q": "What is Search Engine Marketing (SEM) and How Does It Work?",
            "a": "Search engine marketing (SEM) is a form of digital advertising that places your business at the top of Google's search results through paid ads. Unlike SEO, which builds organic rankings over time, SEM delivers immediate visibility to people actively searching for your products or services. You set a budget, choose the keywords you want to appear for, and pay only when someone clicks your ad — which is why it's also called pay per click (PPC). As a dedicated search engine marketing company, we manage the entire process: keyword research, ad creation, bid management, and ongoing optimisation to ensure your budget generates the best possible return. Businesses looking for reliable search engine marketing services typically come to us once they've outgrown DIY campaigns and want a search engine marketing agency that can scale results properly."
          },
          {
            "q": "What's the Difference Between SEM, PPC, and Google Ads?",
            "a": "These terms are closely related but not identical. Search engine marketing (SEM) is the broad category that covers all paid advertising on search engines. Pay per click (PPC) refers to the pricing model where you pay each time someone clicks your ad — it applies to search, display, shopping, and video ads alike. Google Ads is the specific platform (formerly Google AdWords) where the majority of SEM and PPC campaigns run. As a Google Ads Agency Australia businesses trust, our PPC Australia services and Google Ads management are the core of our SEM offering, though we also manage Microsoft Advertising (Bing Ads) when relevant for your audience."
          },
          {
            "q": "How Much Does It Cost to Run Google Ads in Australia?",
            "a": "Google Ads costs vary significantly by industry, keyword competition, and targeting. In Australia, cost-per-click (CPC) can range from under $1 for low-competition niches to $30–$80+ per click in highly competitive sectors like legal, finance, or insurance. We typically recommend a minimum monthly ad spend of $1,500–$3,000 to generate enough data for meaningful optimisation. On top of ad spend, our management fee covers strategy, campaign management, reporting, and continuous optimisation. As part of our PPC management Australia service, we'll provide a transparent budget recommendation during your free audit based on your specific goals and industry."
          },
          {
            "q": "How Quickly Can I See Results From Search Engine Marketing?",
            "a": "One of the biggest advantages of SEM over SEO is speed. Once your campaigns go live, your ads can start appearing in Google search results within hours and generating leads or sales within the first few days. However, it typically takes 4–8 weeks of active management and testing to reach peak efficiency — as we gather conversion data, refine your keyword lists, test ad variations, and tighten your audience targeting. This kind of iterative testing is central to our PPC strategy, and by month three, most clients see significantly improved ROAS compared to their campaign launch benchmarks."
          },
          {
            "q": "Do I Need a Minimum Ad Spend Budget to Work With You?",
            "a": "We recommend a minimum monthly ad spend of $1,500 for our Google Ads Management Australia service to ensure there's enough data to optimise effectively and generate a meaningful volume of leads or sales. Campaigns running on very small budgets are difficult to optimise because there simply aren't enough clicks and conversions to draw statistically reliable conclusions. For e-commerce or national campaigns, we typically recommend $5,000 or more in monthly ad spend to scale results. As experienced PPC specialists, we'll advise the right investment level for your goals during your free strategy consultation."
          },
          {
            "q": "Will I Own My Google Ads Account and Campaign Data?",
            "a": "Absolutely — and this is non-negotiable for us. Your Google Ads account is set up in your name and under your Google login. We request manager access to run your campaigns, but you retain full ownership at all times. If you ever decide to leave us, your entire account history, campaign structure, keyword lists, conversion data, and audience lists remain yours. We never hold your account hostage or lock you into a proprietary system. This is your most important asset in paid search, and it belongs to you — a principle every reputable PPC agency Australia businesses should stand behind."
          },
          {
            "q": "What Makes a Good SEM Agency — And How Do I Evaluate One?",
            "a": "A trustworthy search engine marketing agency should be able to clearly explain their strategy, show you real case studies with measurable results, give you access to your own account, and report on the metrics that actually matter to your business — not just impressions and clicks. Warning signs include agencies that hide your account access, charge a percentage of ad spend with no performance accountability, or focus reports on vanity metrics like \"reach.\" When people search for the best PPC agency Australia has to offer, they're usually looking for exactly this level of transparency. We benchmark our performance against your cost per acquisition and revenue generated, and we hold ourselves accountable to those numbers every month."
          },
          {
            "q": "Can You Take Over and Fix an Underperforming Google Ads Account?",
            "a": "Yes — account rescues are one of the most common engagements we take on. If your current Google Ads campaigns are spending budget without delivering results, our team will conduct a thorough audit to identify exactly what's going wrong. Common issues include poor campaign structure, overly broad keyword match types, missing negative keyword lists, no conversion tracking, generic ad copy, and landing pages that aren't optimised to convert. We'll present our findings with a clear action plan and, once you approve it, begin restructuring and optimising your account immediately."
          },
          {
            "q": "Do You Manage SEM For E-Commerce Businesses Specifically?",
            "a": "Yes. E-commerce SEM requires a different approach to lead-generation campaigns — particularly around Google Shopping, product feed optimisation, dynamic remarketing, and Performance Max campaigns. Our Google Ads services for e-commerce clients include shopping campaign management, Merchant Centre optimisation, cart-abandonment remarketing, and revenue-focused ROAS tracking through GA4. Whether you're on Shopify, WooCommerce, Magento, or BigCommerce, we have experience integrating your store's product data with Google's advertising ecosystem to drive profitable online sales."
          },
          {
            "q": "Do You Lock Clients Into Long-Term Contracts for SEM Services?",
            "a": "No. We operate on rolling monthly agreements with no lock-in contracts. We believe a good agency earns your ongoing business through results, not fine print. That said, we do ask that new clients commit to a minimum of three months when starting a new account — this is the realistic timeframe needed to build campaign data, complete testing cycles, and demonstrate meaningful performance improvements. After that initial period, you're free to continue on a month-to-month basis with 30 days' notice to cancel."
          },
          {
            "q": "Are You a Full Digital Marketing Agency, or Do You Only Handle PPC and SEM?",
            "a": "While paid search is our specialty, we operate as a full-service digital marketing agency, meaning your SEM and PPC campaigns are never managed in isolation. As a digital marketing company, we can also support you with SEO, conversion rate optimisation, landing page design, and analytics — so your paid campaigns work alongside the rest of your marketing rather than against it. If you only need our digital marketing services for paid search right now, that's completely fine too; you can scale up to other channels whenever it makes sense for your business."
          },
          {
            "q": "Why Choose Marketive as Your PPC Agency in Australia?",
            "a": "Businesses searching for a PPC agency Australia trusts usually want three things: transparency, accountability, and results — and that's exactly how we operate. As a locally focused Google Ads Agency Australia wide, our team of PPC specialists builds every PPC strategy around your actual commercial goals, not vanity metrics. From PPC management Australia businesses rely on for lead generation, to full Google Ads Management Australia for e-commerce brands scaling nationally, we combine local market knowledge with hands-on account ownership. It's this combination that consistently puts us in the conversation when people ask who the best PPC agency Australia has to offer really is."
          }
        ]
      },
      "finalCta": {
        "heading": "Ready to Make Your Ad Spend Work Harder?",
        "description": "Get a free Google Ads audit from our SEM team. We'll identify exactly where your budget is being wasted and show you how to maximize ROAS."
      }
    },
    "marketing-automation": {
      "seo": {
        "title": "Leading Marketing Automation Services in Australia",
        "description": "Expert marketing automation services in Australia. Email automation, CRM integration & lead nurturing built to convert. Book your free audit today.",
        "canonical": "https://marketive.com.au/services/marketing-automation"
      },
      "hero": {
        "breadcrumb": "Marketing Automation",
        "tagline": "",
        "heading": "Marketing Automation Services in Australia",
        "paragraphs": [
          "Marketive delivers marketing automation services that streamline your sales and marketing processes, personalise every customer touchpoint at scale, and convert more leads into customers — without your team having to manually lift a finger."
        ],
        "primaryCta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "whyMatters": {
        "heading": "Why Marketing Automation Strategy Matters",
        "description": "Your Leads Don't Wait. Your Follow-Up Shouldn't Either.",
        "blocks": [
          {
            "img": "/images/services/hero.jpg",
            "text": "The average Australian business loses up to 79% of its marketing leads because they never receive timely, relevant follow-up. Your sales team is busy, your marketing team is stretched — and the leads that took significant effort and budget to generate quietly go cold. Marketing automation changes this permanently."
          },
          {
            "img": "/images/case-studies/gradient-3.jpg",
            "text": "A well-built marketing automation strategy puts your entire lead nurturing process on autopilot — sending the right message, to the right person, at the right moment in their buying journey, based on their actual behaviour. Whether a prospect downloads a guide, visits a pricing page, abandons a cart, or hasn't engaged in 30 days — your automated workflows respond instantly, intelligently, and personally at scale, with email marketing automation forming the backbone of every sequence. This is what effective automation marketing looks like in practice: not a single tool or tactic, but a connected system working continuously in the background."
          },
          {
            "img": "/images/services/process-2.jpg",
            "text": "At Marketive, we design and implement marketing automation solutions that work as a seamless extension of your sales and marketing team. As a specialist in automation digital marketing, we bring the strategic thinking of a dedicated marketing agency automation partner to every build — meaning you get more than software configuration, you get a system engineered around your specific buyer journey. It's an approach that's helped us become a trusted name in marketing automation Australia-wide, working with businesses that are done watching hard-won leads slip away."
          }
        ]
      },
      "help": {
        "tagline": "What We Help You With",
        "heading": "Automation, End to End",
        "description": "A complete suite of marketing automation services — from strategy and platform setup to email automation, workflow design, CRM integration, and ongoing optimisation.",
        "cards": [
          {
            "icon": "Compass",
            "title": "Marketing Automation Strategy",
            "text": "Before we build a single workflow, we map your full customer journey — identifying every touchpoint, conversion opportunity, and gap where automation can replace manual effort. Your marketing automation strategy becomes the blueprint that ensures every tool and workflow serves a clear business purpose, and the foundation every other automation marketing initiative builds on."
          },
          {
            "icon": "Settings",
            "title": "Platform Selection & Setup",
            "text": "Choosing the right platform is one of the most consequential decisions in any marketing automation solutions project. Whether it's HubSpot, ActiveCampaign, Klaviyo, or Salesforce Marketing Cloud, we assess your business size, budget, and technical requirements before configuring your platform, migrating your data, and setting up the foundations properly from day one."
          },
          {
            "icon": "Workflow",
            "title": "Workflow Automation & Implementation",
            "text": "We design and implement intelligent automation workflows that trigger based on real user behaviour — website visits, form submissions, email opens, page views, and purchase events. Every workflow is mapped, tested, and refined to guide prospects through your sales funnel without manual intervention, forming the operational core of your broader advertising automation and marketing automation efforts."
          },
          {
            "icon": "Mail",
            "title": "Email Marketing Automation",
            "text": "We build sophisticated email marketing automation sequences — welcome series, drip campaigns, abandoned cart flows, re-engagement campaigns, and post-purchase sequences — that deliver the right message to each subscriber based on where they are in their journey, not just when they joined your list."
          },
          {
            "icon": "UserCheck",
            "title": "Automated Lead Nurturing",
            "text": "Not every lead is ready to buy today. Our automated lead nurturing programs keep your brand top-of-mind across weeks and months — delivering relevant content, case studies, testimonials, and offers that educate and build trust until the lead is ready to convert, with your sales team notified the moment they are."
          },
          {
            "icon": "Filter",
            "title": "Lead Scoring & Segmentation",
            "text": "We build lead scoring models that rank prospects by engagement and buying intent, paired with dynamic segmentation that groups contacts by behaviour, interests, and funnel stage. This ensures your email automation and nurturing sequences always reach the right audience with the right message — not a one-size-fits-all broadcast."
          },
          {
            "icon": "Database",
            "title": "CRM Integration & Sales Alignment",
            "text": "We connect your marketing automation platform with your CRM — HubSpot, Salesforce, Pipedrive, Zoho, and more — creating a unified view of every contact's interaction history, lead score, and funnel stage. Your sales team always knows exactly where a lead is, what they've engaged with, and when to reach out."
          },
          {
            "icon": "BarChart3",
            "title": "Automation Reporting & Optimisation",
            "text": "We monitor, test, and continuously refine your automation workflows — tracking open rates, click-through rates, conversion rates, revenue attributed, and workflow drop-off points. Monthly reporting and optimisation calls ensure your marketing automation solutions are always performing at their best."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "included": {
        "tagline": "What's Included",
        "heading": "Everything in Your Marketing Automation Package",
        "description": "No vague scope, no half-built workflows. Every Marketive marketing automation engagement includes a complete set of documented deliverables from strategy through to live deployment and reporting.",
        "items": [
          {
            "title": "Automation Audit & Opportunity Assessment",
            "text": "A thorough review of your current marketing processes, existing tools, CRM setup, and lead flow — identifying exactly where automation will have the highest impact and where time and money is currently being wasted. This is the same rigorous assessment we use whether you're starting fresh or already searching for the best agency for Marketing Automation services to improve an existing setup."
          },
          {
            "title": "Customer Journey Mapping",
            "text": "A detailed map of your full customer lifecycle — from first awareness through to purchase, retention, and referral — defining every touchpoint where a targeted, automated communication can accelerate progress through the funnel."
          },
          {
            "title": "Marketing Automation Strategy Document",
            "text": "A fully documented marketing automation strategy covering your workflow architecture, trigger logic, audience segmentation, platform selection, and KPIs — your complete automation blueprint before a single workflow is built. This document underpins every element of your automation marketing program going forward."
          },
          {
            "title": "Platform Setup & Configuration",
            "text": "Full setup and configuration of your chosen marketing automation platform — including list structure, tagging taxonomy, domain authentication, deliverability setup, and integration with your website, CRM, and analytics tools."
          },
          {
            "title": "Workflow Design & Build",
            "text": "Design and implementation of all agreed automation workflows — welcome sequences, lead nurturing flows, behavioural triggers, re-engagement campaigns, and post-conversion sequences — all mapped, tested, and documented as part of your broader marketing automation solutions."
          },
          {
            "title": "Email Marketing Automation Copywriting & Design",
            "text": "On-brand email copy and design for every automated communication — written to match your tone of voice, personalised with dynamic content fields, and optimised for open rates, click-through rates, and conversions. Every email automation sequence is built to perform, not just to send."
          },
          {
            "title": "Audience Segmentation & Lead Scoring",
            "text": "Implementation of behavioural and demographic audience segmentation alongside a lead scoring model — so your automation platform can prioritise the hottest leads, trigger the right workflows, and alert your sales team at the perfect moment."
          },
          {
            "title": "Monthly Reporting, Testing & Optimisation",
            "text": "Monthly performance reports covering workflow conversion rates, email marketing automation metrics, lead attribution, and revenue influenced — plus ongoing A/B testing and workflow refinements to continuously improve results over time. It's the ongoing layer of support that sets a genuine marketing agency automation partner apart from a one-off platform setup."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "process": {
        "tagline": "Our Strategy Process",
        "heading": "How We Build Your Automation",
        "description": "A proven four-phase framework we follow for every marketing automation engagement — from initial discovery and strategy through to live deployment, CRM integration, and continuous performance optimisation.",
        "steps": [
          {
            "step": "1",
            "title": "Audit & Strategise",
            "text": "We audit your current marketing processes, map your full customer journey, and identify every automation opportunity. From this, we build a documented marketing automation strategy defining your workflows, triggers, segmentation logic, and platform requirements before any build begins — the foundation of every effective automation marketing engagement."
          },
          {
            "step": "2",
            "title": "Design & Build",
            "text": "We set up and configure your automation platform, design all workflow logic, write and design your email marketing automation sequences, implement CRM integration, and build your lead scoring model — with every component reviewed and approved before going live. This is where your marketing automation solutions take shape as a fully connected system."
          },
          {
            "step": "3",
            "title": "Launch & Monitor",
            "text": "Workflows go live with full tracking in place. We monitor every automation closely in the first 30 days — checking deliverability, trigger accuracy, workflow progression rates, and conversion metrics — making real-time adjustments to ensure everything performs as intended from launch."
          },
          {
            "step": "4",
            "title": "Test & Optimise",
            "text": "Using real performance data, we run structured A/B tests on email subject lines, content, timing, and workflow logic — continuously refining your marketing automation to improve open rates, conversion rates, and revenue generated month over month. It's this ongoing optimisation that distinguishes a genuine marketing automation service from a one-time setup."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "whyChoose": {
        "tagline": "Why Choose Us",
        "heading": "Why Choose Us as Your Marketing Automation Agency",
        "description": "We're not a platform reseller or a tool-first implementation shop. We're a strategic marketing automation agency that designs systems aligned to your actual business goals — not just impressive-looking workflow diagrams. For businesses searching for the best agency for Marketing Automation services in Australia, this is the difference that shows up in results, not just in a sales pitch.",
        "items": [
          {
            "icon": "Compass",
            "title": "Strategy Before Software",
            "text": "We start with your business objectives, customer journey, and revenue targets — not the features of a particular platform. Your marketing automation strategy is built around what your business needs to achieve, with the right tools selected to support that strategy, not the other way around."
          },
          {
            "icon": "Users",
            "title": "Sales & Marketing Aligned",
            "text": "Marketing automation only delivers its full potential when sales and marketing work as one. We design automation workflows and CRM integrations that bridge the gap between your marketing platform and your sales team — ensuring no lead falls through the cracks and every handover happens at exactly the right moment."
          },
          {
            "icon": "Sparkles",
            "title": "Personalisation at Scale",
            "text": "We use behavioural triggers, dynamic content, progressive profiling, and predictive data to create genuinely personalised experiences for every lead and customer — at scale. Every prospect feels like they're receiving individually crafted communication, not being blasted with a mass email campaign."
          },
          {
            "icon": "Cpu",
            "title": "Full-Stack Integration Expertise",
            "text": "We integrate your marketing automation with your CRM, website, ecommerce platform, Google Ads, social media, and analytics tools — creating a connected ecosystem where data flows between every system, giving you a complete picture of your customer across every touchpoint. It's this breadth that sets a true agency automation partner apart from a single-platform specialist."
          },
          {
            "icon": "BarChart3",
            "title": "ROI-Focused Reporting",
            "text": "We don't report on open rates and call it a win. We track and report on the business metrics that matter — leads generated by automation, pipeline value influenced, revenue attributed to email marketing automation sequences, and cost-per-acquisition improvements over time."
          },
          {
            "icon": "MapPin",
            "title": "Entirely Australian-Run",
            "text": "Your marketing automation is managed entirely by our in-house Australian team — no offshore outsourcing, no handoff to a third-party implementation partner. As a dedicated marketing automation Australia provider, we give you direct access to the strategists and builders managing your account, with fast communication and full accountability throughout."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "platforms": {
        "tagline": "",
        "heading": "Platforms We Work With — Tools We Know Inside Out",
        "description": "Our marketing automation agency works across all major marketing automation platforms and CRM systems — recommending the right combination of tools for your business size, budget, and automation marketing objectives. Whether you need a single email marketing automation platform or a fully integrated tech stack, we bring hands-on implementation experience, not just theoretical familiarity.",
        "items": [
          "HubSpot",
          "ActiveCampaign",
          "Klaviyo",
          "Salesforce Marketing Cloud",
          "Mailchimp",
          "Pipedrive",
          "Zoho CRM",
          "Google Analytics 4"
        ]
      },
      "industries": {
        "tagline": "",
        "heading": "Industries Built for Your Sector",
        "description": "Our marketing automation services have delivered measurable results across a broad range of Australian industries — each requiring a different automation architecture, lead nurturing approach, and CRM integration strategy. From ecommerce to professional services, our marketing automation solutions are tailored to how your specific sector actually buys, not applied as a generic template.",
        "items": [
          {
            "icon": "ShoppingCart",
            "label": "eCommerce & Retail",
            "text": "Abandoned cart flows, post-purchase sequences, and loyalty automation."
          },
          {
            "icon": "Briefcase",
            "label": "B2B & SaaS",
            "text": "Multi-touch lead nurturing, trial onboarding, and renewal automation."
          },
          {
            "icon": "Building2",
            "label": "Professional Services",
            "text": "Proposal follow-up, client onboarding, and referral automation."
          },
          {
            "icon": "GraduationCap",
            "label": "Healthcare & Education",
            "text": "Patient/student inquiry nurturing, appointment reminders, and re-engagement."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "faqs": {
        "tagline": "FAQ's",
        "heading": "Frequently Asked Questions",
        "items": [
          {
            "q": "What is Marketing Automation and How Does It Work?",
            "a": "Marketing automation is the use of software to automate repetitive marketing tasks — such as sending emails, scoring leads, updating CRM records, and triggering personalised communications based on user behaviour — that would otherwise require constant manual effort from your team. It works by connecting your marketing platform to your website, CRM, and other tools, then defining rules (called workflows or automations) that trigger specific actions when a contact meets certain criteria. For example: when someone downloads a guide from your website, an automated email sequence begins nurturing them over the following days and weeks — without anyone on your team sending a single email manually. As a specialist in automation digital marketing, Marketive designs, builds, and manages these marketing automation solutions end-to-end for businesses across Australia."
          },
          {
            "q": "What is Email Marketing Automation and How Is It Different From Regular Email Marketing?",
            "a": "Regular email marketing typically involves sending a broadcast email to your entire list at a set time — the same message to everyone, regardless of where they are in their buyer journey. Email marketing automation is fundamentally different: it sends targeted, personalised emails triggered by specific actions a contact takes or conditions they meet. A new subscriber receives a welcome sequence. A lead who visits your pricing page three times receives a targeted case study. A customer who hasn't purchased in 90 days receives a re-engagement offer. Because the right message reaches the right person at the right moment, personalised automated emails consistently deliver significantly higher open rates, click-through rates, and transaction rates than broadcast campaigns — making email marketing automation one of the highest-ROI investments a business can make in automation marketing."
          },
          {
            "q": "What is Automated Lead Nurturing and Why Does My Business Need It?",
            "a": "Automated lead nurturing is the process of automatically delivering a planned sequence of relevant, valuable communications to prospects over time — educating them, building trust, and moving them progressively closer to a purchasing decision without requiring manual follow-up from your sales team. Most leads are not ready to buy the first time they encounter your business. Research consistently shows that the majority of B2B buyers require multiple touchpoints before making a decision, and that businesses with strong lead nurturing programs generate significantly more sales-ready leads at lower cost. As part of a broader marketing automation service, automated lead nurturing ensures no lead goes cold due to a lack of follow-up, and that every prospect receives consistent, personalised communication based on their actual engagement — not a one-size-fits-all broadcast."
          },
          {
            "q": "What Marketing Automation Platform is Best For My Business?",
            "a": "The right platform depends on your business size, budget, technical requirements, and the complexity of the automations you need. HubSpot is an excellent all-in-one choice for businesses that want marketing automation, CRM, and sales tools under one roof — particularly for B2B and professional services. ActiveCampaign is our most recommended platform for small to medium businesses wanting powerful automation at an accessible price point. Klaviyo is the leading choice for ecommerce businesses, particularly those on Shopify, with exceptional email automation and SMS capabilities. Salesforce Marketing Cloud suits large enterprises with complex, multi-channel advertising automation and marketing automation requirements. During your free audit, we'll recommend the right marketing automation solutions based on your specific situation — and we never recommend tools we don't have direct implementation experience with."
          },
          {
            "q": "How Does CRM Integration Work With Marketing Automation?",
            "a": "CRM integration connects your marketing automation platform with your sales CRM — creating a two-way data flow that keeps both systems aligned in real time. When a lead takes an action in your marketing automation (opens an email, visits a key page, reaches a lead score threshold), that data is pushed to your CRM and can trigger a sales task or notification. When a salesperson updates a deal stage in the CRM, that can trigger a new automation — sending a relevant follow-up sequence aligned to where the prospect is in the sales process. The result is a unified view of every contact's full interaction history across both marketing and sales, eliminating the manual data entry, duplicate records, and missed follow-ups that cost businesses revenue every day. We integrate with HubSpot, Salesforce, Pipedrive, Zoho, and most major CRM platforms as part of our marketing automation service."
          },
          {
            "q": "How Long Does It Take to Set Up Marketing Automation?",
            "a": "A basic marketing automation setup — platform configuration, a welcome sequence, and one or two core nurturing workflows — can typically be live within three to four weeks. A more comprehensive implementation covering multiple audience segments, complex multi-step workflows, full CRM integration, lead scoring, and a suite of email marketing automation sequences generally takes six to ten weeks to design, build, test, and launch properly. Rushing a marketing automation setup is one of the most common and costly mistakes businesses make — poorly built workflows that trigger at the wrong time, send duplicate emails, or misalign with CRM data damage both your deliverability and your customer relationships. As an experienced marketing agency automation partner, we take the time to build it right from the start."
          },
          {
            "q": "Do I Need a Large Database to Benefit From Marketing Automation?",
            "a": "No — marketing automation delivers value from the very beginning, even with a modest contact database. The most important factor is not the size of your list, but having a clear customer journey and a consistent flow of new leads entering your system. In fact, businesses with smaller, highly engaged databases often see better results from automation than larger businesses with disengaged lists, because quality of engagement matters far more than volume. We frequently implement marketing automation Australia-wide for businesses with a few hundred contacts that generate a significant proportion of their revenue from well-structured, well-targeted automated sequences. As your database grows, your automation compounds — making it one of the most scalable marketing investments you can make."
          },
          {
            "q": "Won't Automation Make My Marketing Feel Impersonal?",
            "a": "This is the most common concern businesses have about marketing automation — and it's completely understandable. The reality is that well-designed marketing automation delivers a far more personalised experience than manual marketing ever could. When done correctly, automation uses behavioural triggers, dynamic content, progressive profiling, and audience segmentation to ensure every contact receives communication that feels specifically relevant to them — their interests, their behaviour, their stage in the journey. A generic mass email sent to your entire list at the same time is far more impersonal than an automated email triggered by something a specific person did on your website five minutes ago. The key is thoughtful strategy and quality copywriting — which is exactly what Marketive brings to every agency automation project."
          },
          {
            "q": "How Do You Measure the Success of Marketing Automation?",
            "a": "We measure marketing automation success across multiple layers. At the email and workflow level, we track open rates, click-through rates, unsubscribe rates, workflow completion rates, and drop-off points — identifying exactly where contacts disengage so we can fix it. At the lead generation level, we track the number of leads entering each automation, lead score progression, and the rate at which automated nurturing converts prospects to sales-qualified leads. At the business outcome level — which is what matters most — we track revenue attributed to automation sequences, deals influenced by email marketing automation, cost-per-acquisition improvements, and time saved from manual marketing tasks. Every monthly report connects automation performance directly to business results, not just platform metrics."
          },
          {
            "q": "Can You Take Over and Improve an Existing Marketing Automation Setup?",
            "a": "Yes — automation audits and rebuilds are one of the most common engagements we take on. Many businesses across Australia have invested in a marketing automation platform but find their workflows are underperforming, outdated, or were set up without a coherent strategy behind them. We begin with a thorough audit of your existing setup — reviewing your workflow logic, email performance data, CRM integration health, list hygiene, deliverability metrics, and segmentation structure. We then present a clear, prioritised improvement plan covering what to fix immediately, what to rebuild, and what new automations to add. In most cases, a well-structured optimisation of an existing setup delivers faster results than starting from scratch, because the foundational data and contact history is already in place — which is why many businesses search for the best agency for Marketing Automation services rather than attempting a rebuild in-house."
          }
        ]
      },
      "finalCta": {
        "heading": "Ready to Put Your Growth on Autopilot?",
        "description": "Book your free marketing automation audit and see how Marketive can streamline your sales funnel and convert more leads."
      }
    },
    "social-media": {
      "seo": {
        "title": "Leading Social Media Marketing Services in Australia",
        "description": "Leading Social Media Marketing Services in Australia: grow your brand, boost engagement and drive real results with our proven, data-driven strategies.",
        "canonical": "https://marketive.com.au/services/social-media"
      },
      "hero": {
        "breadcrumb": "Social Media Marketing",
        "tagline": "",
        "heading": "Social Media Marketing Services in Australia",
        "paragraphs": [
          "Marketive delivers social media marketing services that go far beyond likes and followers — turning your social channels into a consistent engine for brand awareness, audience trust, and real Australian revenue."
        ]
      },
      "whyMatters": {
        "heading": "Posting Without a Strategy Is Just Making Noise",
        "blocks": [
          {
            "img": "/images/services/hero.jpg",
            "text": "Most Australian businesses treat social media as an afterthought: posting sporadically, chasing trends, and measuring success in likes. The brands that actually grow use social media differently, as a structured, strategy-led channel tied directly to business outcomes. That is where professional social media marketing services make the difference."
          },
          {
            "img": "/images/case-studies/gradient-4.jpg",
            "text": "At Marketive, a results-focused social media marketing agency, every social media marketing strategy we build starts with your goals, your audience, and your competitive landscape, not a generic content calendar. Whether you need to build brand awareness, generate leads, or drive direct sales, our social media marketing Australia specialists engineer a social presence that works hard for your business every single day."
          },
          {
            "img": "/images/services/process-1.jpg",
            "text": "As a full-service social media management agency, we deliver end-to-end social media management services, from content creation and community engagement to reporting and optimisation. Our Social Media Management approach, backed by dedicated social media marketing management, keeps your brand consistent, active and accountable."
          },
          {
            "img": "/images/services/process-2.jpg",
            "text": "Looking for Social media management Australia you can rely on? We pair a long-term organic social media strategy with high-performing paid social media marketing, so you build lasting audience trust and amplify it with targeted campaigns. Our social media branding services make sure every post reflects who you are, while our wider Social Media Services keep your business visible, credible and growing across every platform that matters."
          }
        ],
        "stats": [
          "Audience research grounded in real Australian social behaviour",
          "Content pillars aligned to your brand voice and business objectives",
          "Organic and paid social working together as one unified strategy",
          "Monthly reporting tied to leads, traffic, and revenue — not vanity metrics"
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "help": {
        "tagline": "What We Help You With",
        "heading": "Social, End to End",
        "description": "A complete suite of social media marketing services — from content creation to paid social advertising — all delivered by one dedicated Australian team.",
        "cards": [
          {
            "icon": "Camera",
            "title": "Social Media Content Creation",
            "text": "We research, write, design, and produce platform-native content tailored to your brand and audience, from Instagram Reels and carousels to LinkedIn articles and Facebook posts that actually get engagement. Our social media marketing services cover every format your brand needs, and our Social Media Services team keeps your content consistent and on brand."
          },
          {
            "icon": "Compass",
            "title": "Social Media Marketing Strategy",
            "text": "Before a single post goes live, we build your social media marketing strategy from scratch, defining your content pillars, tone of voice, target audience personas, and platform mix to maximise every piece of content. Our organic social media strategy lays the foundation for long-term audience growth, supported by our social media branding services so every post reflects who you are."
          },
          {
            "icon": "TrendingUp",
            "title": "Paid Social Advertising",
            "text": "Organic content builds your audience; paid social scales it. As a leading social media marketing agency, we deliver paid social media marketing across Facebook Ads, Instagram Ads, LinkedIn campaigns, and TikTok advertising, targeting new audiences and retargeting existing ones with precision."
          },
          {
            "icon": "MessageSquare",
            "title": "Community Management",
            "text": "Social media is a two-way conversation. Our social media management services include actively monitoring and responding to your comments, DMs, and brand mentions, building genuine relationships with your audience and protecting your brand reputation in real time. As a trusted social media management agency, we make sure no message goes unanswered."
          },
          {
            "icon": "Users",
            "title": "Influencer & Creator Partnerships",
            "text": "We identify, vet, and manage Australian influencer partnerships that are genuinely aligned to your brand, from niche micro-influencers with highly engaged audiences to broader ambassador programs that drive real reach. This is a key part of our social media marketing Australia offering."
          },
          {
            "icon": "BarChart3",
            "title": "Social Media Analytics & Reporting",
            "text": "Every month you receive clear, jargon-free reports showing what's actually working: reach, engagement, follower growth, website traffic from social, and revenue or leads attributed to your social media channels. Our social media marketing management and Social Media Management approach keeps every campaign accountable, and our Social media management Australia clients always know their return on investment."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "included": {
        "tagline": "What's Included",
        "heading": "Everything in Your Social Media Package",
        "description": "No hidden extras, no vague scope. Every Marketive social media marketing services engagement includes a comprehensive set of deliverables from day one.",
        "items": [
          {
            "title": "Social Media Audit & Competitor Analysis",
            "text": "A full review of your existing profiles, content performance, audience data, and what your top competitors are doing differently, with a clear gap analysis and action plan. It is the foundation of every social media marketing strategy we build."
          },
          {
            "title": "Custom Social Media Marketing Strategy",
            "text": "A tailored strategy document covering your platform selection, content pillars, tone of voice, posting frequency, and KPIs. It is your social media blueprint for the next 90 days, combining an organic social media strategy with paid social media marketing where it makes sense."
          },
          {
            "title": "Monthly Content Calendar",
            "text": "A planned, approved content schedule mapped to your campaigns, seasonal moments, and audience behaviour, so every post has a purpose and nothing is published last-minute. Our social media management services keep your calendar organised and on track."
          },
          {
            "title": "Branded Graphic Design & Copywriting",
            "text": "Every post is designed to your brand guidelines and written in your unique tone of voice, with graphics, captions, hashtags, and CTAs crafted by our in-house creative team. These social media branding services keep your brand consistent across every platform."
          },
          {
            "title": "Short-Form Video & Reels Production",
            "text": "Video is the highest-performing content format across every major platform. We script, edit, and produce short-form video content optimised for Instagram Reels, TikTok, and Facebook, as part of our wider social media marketing services."
          },
          {
            "title": "Scheduling & Publishing",
            "text": "We schedule and publish all content at optimal engagement times for your specific audience, ensuring consistent posting across all managed platforms without you lifting a finger. This is where a dedicated social media management agency saves you the most time."
          },
          {
            "title": "Community Engagement & DM Management",
            "text": "Daily monitoring of comments, replies, and direct messages, with prompt, on-brand responses that build community trust and encourage deeper audience relationships. Our Social Media Management team treats every interaction as a chance to strengthen your brand."
          },
          {
            "title": "Monthly Performance Reports & Strategy Calls",
            "text": "Plain-English monthly reports covering reach, engagement, follower growth, social traffic, and conversions, plus a dedicated strategy session to review results and align on next steps. Our social media marketing management keeps every campaign accountable, and as a social media marketing agency serving social media marketing Australia clients, we make sure you always see the return on your investment."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "process": {
        "tagline": "",
        "heading": "Our Social Media Marketing Strategy Process",
        "description": "A proven four-phase framework we apply to every social media marketing client — from initial discovery to sustained audience and revenue growth.",
        "steps": [
          {
            "step": "1",
            "title": "Discover & Define",
            "text": "We audit your current social media presence, analyse your top competitors, and define your target audience personas, content pillars, and tone of voice. This is the foundation of every effective social media marketing strategy, and it shapes your organic social media strategy from day one."
          },
          {
            "step": "2",
            "title": "Plan & Produce",
            "text": "We build your monthly content calendar, produce platform-native creative assets, and plan paid social media marketing campaigns, ensuring every piece of content serves a clear purpose tied to your business goals. Our social media branding services keep every asset on brand."
          },
          {
            "step": "3",
            "title": "Publish & Engage",
            "text": "Content goes live on schedule across all managed platforms. Our social media management services include actively managing your community, responding to comments and DMs, engaging with relevant conversations, and building the social proof that converts audiences into customers."
          },
          {
            "step": "4",
            "title": "Measure & Refine",
            "text": "Monthly reporting covers what's working, what's not, and exactly what we're doing next. As a data-led social media marketing agency, we use real performance data to continuously sharpen your social media marketing strategy, doubling down on what drives results through ongoing social media marketing management."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "whyChoose": {
        "tagline": "",
        "heading": "Why Choose Marketive as Your Social Media Marketing Agency",
        "description": "Followers are nice. Revenue is better. As a specialist social media marketing agency in Australia, we build social media marketing services that grow your business, not just your numbers.",
        "items": [
          {
            "icon": "MapPin",
            "title": "Built for Australian Audiences",
            "text": "We understand how Australians discover, engage with, and buy from brands on social. As a social media marketing agency focused on social media marketing Australia businesses can trust, every strategy we build reflects local culture, seasonal moments, and platform-specific behaviour in the Australian market."
          },
          {
            "icon": "Palette",
            "title": "In-House Creative Team",
            "text": "Our designers, copywriters, and video editors work directly alongside your strategist. No outsourced freelancers, no brand inconsistency, just fast, polished, on-brand content produced under one roof. It is the engine behind our social media branding services."
          },
          {
            "icon": "Target",
            "title": "Results Tied to Your Business Goals",
            "text": "We don't optimise for vanity metrics. We define success by what matters to you, whether that's leads generated, website traffic driven, products sold, or brand reach among your target audience. Every social media marketing strategy we deliver is built around those outcomes."
          },
          {
            "icon": "Layers",
            "title": "Organic and Paid as One Strategy",
            "text": "Most agencies silo organic social and paid social. We manage both as a single, integrated strategy, using an organic social media strategy to build trust and paid social media marketing to accelerate reach and drive conversions."
          },
          {
            "icon": "Briefcase",
            "title": "Specialists in Small Business Social Media",
            "text": "Social media marketing for small business is one of our core strengths. We have purpose-built packages designed for businesses with lean budgets that still need professional, consistent social media management services from a dedicated social media management agency."
          },
          {
            "icon": "ShieldCheck",
            "title": "No Lock-In Contracts",
            "text": "Our social media marketing services operate on rolling monthly agreements. We earn your business every month through the results we deliver, not the fine print of a long-term contract that traps you in a relationship that isn't working."
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "platforms": {
        "tagline": "Platforms We Work With",
        "heading": "Every Platform That Matters",
        "description": "Our social media marketing agency manages your brand presence across every major platform Australians use to discover, research, engage with, and buy from businesses like yours.",
        "items": [
          "Instagram",
          "Facebook",
          "LinkedIn",
          "TikTok",
          "YouTube",
          "Pinterest",
          "X (Twitter)",
          "Facebook Ads Manager",
          "Meta Business Suite",
          "TikTok Ads",
          "LinkedIn Campaign Manager"
        ]
      },
      "industries": {
        "tagline": "Industries We Serve",
        "heading": "Built for Your Sector",
        "description": "Our social media marketing services have delivered measurable results across a broad range of Australian industries — from local service businesses to national e-commerce brands.",
        "items": [
          {
            "icon": "ShoppingCart",
            "label": "E-Commerce & Retail",
            "text": "Online stores, fashion, homewares, consumer products"
          },
          {
            "icon": "HeartPulse",
            "label": "Healthcare & Wellness",
            "text": "Clinics, allied health, gyms, beauty, aesthetics"
          },
          {
            "icon": "Building2",
            "label": "Real Estate & Property",
            "text": "Agents, developers, property managers, builders"
          },
          {
            "icon": "UtensilsCrossed",
            "label": "Hospitality & Food",
            "text": "Restaurants, cafés, bars, catering, food brands"
          },
          {
            "icon": "Briefcase",
            "label": "Professional Services",
            "text": "Law firms, accountants, consultancies, agencies"
          },
          {
            "icon": "GraduationCap",
            "label": "Education & Training",
            "text": "RTOs, private colleges, tutoring, course creators"
          },
          {
            "icon": "Wrench",
            "label": "Trades & Home Services",
            "text": "Builders, plumbers, electricians, landscapers"
          },
          {
            "icon": "Plane",
            "label": "Travel & Tourism",
            "text": "Tour operators, accommodation, experiences"
          }
        ],
        "cta": {
          "label": "Get in Touch",
          "path": "/contact"
        }
      },
      "faqs": {
        "tagline": "FAQ's",
        "heading": "Frequently Asked Questions",
        "description": "Everything you want to know about our social media marketing services before getting started.",
        "items": [
          {
            "q": "What Does a Social Media Marketing Agency Actually Do?",
            "a": "A social media marketing agency manages and grows your brand's presence across social platforms on your behalf. This includes building your social media marketing strategy, creating content (graphics, copy, video), scheduling and publishing posts at optimal times, running paid social media marketing campaigns, managing community engagement (comments, DMs, and replies), and reporting on performance each month. At Marketive, we handle the entire process from strategy through to execution and reporting, so you gain a professional, consistent social presence without the overhead of an in-house team."
          },
          {
            "q": "What's the Difference Between Social Media Marketing and Social Media Advertising?",
            "a": "Social media marketing is the broader discipline that covers both organic (unpaid) activity and paid advertising. An organic social media strategy involves content creation, community management, and audience growth through consistency and quality. Social media advertising refers specifically to the paid component: boosted posts, targeted ad campaigns, lead generation forms, and retargeting audiences. A strong social media marketing strategy uses both in tandem: organic content builds long-term brand trust and authority, while paid social media marketing amplifies your reach and drives faster, more targeted results. Marketive manages both as an integrated approach."
          },
          {
            "q": "Which Social Media Platforms Should My Australian Business Be On?",
            "a": "The right platforms depend on your business type, target audience, and goals. Instagram and Facebook suit most consumer-facing Australian businesses, including retail, hospitality, lifestyle, and trades. LinkedIn is essential for B2B companies and professional services firms wanting to reach decision-makers. TikTok is increasingly powerful for brands targeting Australians under 40 with short-form video content. Pinterest performs well for home, food, fashion, and design businesses. During your free social media audit, our social media marketing Australia specialists will recommend the right platform mix for your specific audience, and we'll never spread your budget thin across platforms that won't deliver results."
          },
          {
            "q": "How Much Does Social Media Marketing Cost in Australia?",
            "a": "Social media marketing costs vary based on the number of platforms managed, content volume, whether paid advertising is included, and your overall objectives. For social media marketing for small business, our social media marketing services packages are designed to be accessible without compromising on quality. Full-service packages that cover strategy, content creation, community management, paid social, and monthly reporting are priced according to the scope involved. We provide a transparent, itemised proposal after your free audit, with no generic pricing tiers and no surprise invoices mid-campaign."
          },
          {
            "q": "How Long Before I See Results From Social Media Marketing?",
            "a": "Timelines vary depending on your starting point, goals, and the channels being used. For organic social media marketing, most clients see meaningful engagement growth and improving reach within the first 60 to 90 days as consistent, high-quality content begins building audience trust and platform momentum. Paid social advertising delivers faster results, typically within two to four weeks once campaigns are live and optimised. Our social media marketing management sets clear, realistic expectations at the outset and provides monthly progress reports from day one so you always know exactly where things stand."
          },
          {
            "q": "Can You Help With Social Media Marketing For Small Business With a Limited Budget?",
            "a": "Yes, and this is genuinely one of our strengths. Social media marketing for small business is a core part of what we do. As a social media management agency, we offer purpose-built packages for businesses with lean budgets that focus resources on the one or two platforms most relevant to your audience, prioritise high-impact content formats, and use targeted paid amplification to stretch every dollar. You don't need a large brand budget to build a credible, engaging social presence. You need the right social media marketing strategy, executed consistently. Our small business clients regularly see professional results on manageable monthly investments."
          },
          {
            "q": "Do you Create All the Social Media Content, or Do I Need to Supply It?",
            "a": "We handle all content production as part of our Social Media Services. Our in-house creative team delivers social media branding services, including branded graphics, captions and hashtags, short-form video editing, and Stories and Reels assets. You'll review and approve content via a shared content calendar before anything goes live, so you always have final say over what represents your brand. Some clients choose to supply raw photos or behind-the-scenes footage for us to edit and repurpose, which often adds great authenticity to the content. This is always optional, never a requirement."
          },
          {
            "q": "What Makes a Good Social Media Marketing Strategy?",
            "a": "A strong social media marketing strategy starts with a clear understanding of your target audience: who they are, which platforms they use, what content they engage with, and what motivates them to take action. From there, it defines specific content pillars aligned to your brand positioning and business goals, sets a realistic posting cadence that prioritises quality over quantity, and maps out how organic content and paid advertising will work together to maximise reach and conversions. It also includes clear KPIs so performance can be measured against real business outcomes, not just engagement numbers. At Marketive, every strategy we build is custom, not adapted from a global template."
          },
          {
            "q": "Will I Retain Ownership and Access To My Social Media Accounts?",
            "a": "Absolutely, and this is non-negotiable for us. Your social media accounts belong to your business, always. We request the necessary admin or partner access to publish content and manage ads, but account ownership remains entirely with you. If you ever decide to leave Marketive, you keep full access to all your profiles, followers, ad accounts, and any content we've created. We never hold account access as leverage or lock clients into proprietary systems. With our Social Media Management, your social presence is your brand asset, and it stays that way."
          },
          {
            "q": "Do You Offer Social Media Management Without a Long-Term Contract?",
            "a": "Yes. Our social media management services operate on rolling monthly agreements, so there are no lock-in contracts or long-term commitments required to get started. For Social media management Australia clients beginning a new engagement, we do recommend a minimum of three months, as this is the realistic timeframe needed to establish your content voice, build initial audience momentum, and gather enough performance data to make meaningful optimisation decisions. After the initial period, you're free to continue on a month-to-month basis. Our clients typically stay far longer because the results make it an easy decision, not because a contract forces them to."
          }
        ]
      },
      "finalCta": {
        "heading": "Ready to Turn Social Media into a Revenue Engine?",
        "description": "Book your free social media audit with Marketive today and discover how to build an audience that converts."
      }
    }
  },

};

export default content;
