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
      { label: "Case Studies", path: "/case-studies" },
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
      headline: "We Build Brands That",
      headlineHighlight: "Dominate Search",
      subheadline:
        "Australia's most results-driven digital marketing agency. We combine data, creativity, and cutting-edge strategy to fuel exponential growth.",
      cta: { label: "Get in Touch", path: "/thank-you" },
      secondaryCta: { label: "View Our Work", path: "/case-studies" },
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
          icon: "Lightbulb",
          title: "Strategy & Consulting",
          description:
            "Data-driven digital strategies tailored to your industry, audience, and growth stage.",
        },
        {
          icon: "Search",
          title: "Search Engine Optimization",
          description:
            "Dominate organic search with technical SEO, content optimization, and authoritative link building.",
        },
        {
          icon: "BarChart3",
          title: "Search Engine Marketing",
          description:
            "Maximize ROI with precision-targeted Google Ads, Bing Ads, and programmatic campaigns.",
        },
        {
          icon: "FileText",
          title: "Content Strategy",
          description:
            "Compelling content that educates, engages, and converts - from blogs to video scripts.",
        },
        {
          icon: "Share2",
          title: "Social Media Marketing",
          description:
            "Build community, drive engagement, and generate leads across every major platform.",
        },
        {
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
      {
        id: "content-strategy",
        icon: "FileText",
        title: "Content Strategy",
        tagline: "Content That Converts",
        description:
          "We produce content with purpose. From SEO-optimized blog posts to thought-leadership whitepapers, every piece is designed to attract, educate, and convert your ideal customers.",
        features: [
          "Content Calendar & Planning",
          "SEO Blog Writing",
          "Whitepapers & E-books",
          "Video Script & Production",
          "Infographic Design",
          "Content Performance Analysis",
        ],
        benefits: [
          "Positions you as an industry leader",
          "Fuels SEO and social channels",
          "Nurtures leads through the funnel",
          "Builds lasting brand equity",
        ],
        cta: { label: "Build Your Content Engine", path: "/contact" },
        stats: [
          { value: "1,800%", label: "Avg Blog Traffic Growth" },
          { value: "500+", label: "Pieces Published Yearly" },
          { value: "28K", label: "Newsletter Subscribers Built" },
          { value: "92%", label: "On-Time Delivery" },
        ],
        faqs: [
          {
            q: "Who writes the content - AI or humans?",
            a: "Every piece is researched and written by experienced human writers and subject-matter experts. We use AI for research and ideation, never as a replacement for quality and accuracy.",
          },
          {
            q: "How do you measure content ROI?",
            a: "We track every piece through the full funnel - impressions, traffic, leads, and attributed revenue - so we can double down on what's working and cut what isn't.",
          },
          {
            q: "Can you match our existing brand voice?",
            a: "Yes. We start every engagement with a brand voice and style guide review to make sure everything we publish sounds authentically like you.",
          },
          {
            q: "How often will we publish?",
            a: "Cadence depends on your strategy - most clients publish 2-4 long-form pieces per week alongside supporting social and email content.",
          },
        ],
      },
      {
        id: "social-media",
        icon: "Share2",
        title: "Social Media Marketing",
        tagline: "Build Community, Drive Revenue",
        description:
          "We create scroll-stopping social strategies across Instagram, LinkedIn, Facebook, TikTok, and X. From organic community building to paid social campaigns - we grow your brand where your audience lives.",
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
      {
        id: "branding",
        icon: "Palette",
        title: "Branding Services",
        tagline: "Look the Part, Win the Sale",
        description:
          "Professional branding services — from brand logo design and visual identity to full brand management — that give Australian businesses the presence, credibility, and consistency they need to grow.",
        features: [
          "Professional Logo Design",
          "Brand Identity Design",
          "Brand Strategy & Positioning",
          "Brand Voice & Messaging",
          "Brand Guidelines",
          "Brand Management & Refresh",
        ],
        benefits: [
          "Instant credibility and trust",
          "Consistent presence everywhere",
          "Differentiation from competitors",
          "Full ownership of all assets",
        ],
        cta: { label: "Build Your Brand", path: "/contact" },
      },
      {
        id: "web-design-development",
        icon: "Monitor",
        title: "Website Design & Development",
        tagline: "Websites Built to Win Customers",
        description:
          "A specialist web development company delivering website design and development services that combine stunning visuals, flawless functionality, and conversion-focused architecture for Australian businesses.",
        features: [
          "Custom Website Design & Development",
          "Ecommerce Website Development",
          "Mobile-First Responsive Design",
          "Speed & Performance Optimisation",
          "Website Maintenance & Security",
          "Website Redesign & Migration",
        ],
        benefits: [
          "Conversion-focused design",
          "SEO built in from day one",
          "Fast, mobile-first builds",
          "Scalable, future-proof platforms",
        ],
        cta: { label: "Start Your Website", path: "/contact" },
      },
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
    categories: ["All", "SEO", "SEM", "Content", "Social Media", "Strategy", "Automation"],
    posts: [
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
            "Content Strategy",
            "Social Media Marketing",
            "Marketing Automation",
            "Full-Service Package",
            "Other",
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
      { label: "Content Strategy", path: "/services/content-strategy" },
      { label: "Social Media", path: "/services/social-media" },
      { label: "Marketing Automation", path: "/services/marketing-automation" },
      { label: "Branding Services", path: "/services/branding" },
      { label: "Website Design & Development", path: "/services/web-design-development" },
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
      seo: {
        title: "Digital Marketing Strategy & Consulting | Marketive",
        description:
          "Data-driven digital marketing strategy and consulting for Australian businesses. Audits, competitor analysis, marketing roadmaps and a 90-day action plan that drives measurable growth.",
        canonical: "https://marketive.com.au/services/strategy-consulting",
      },
      hero: {
        breadcrumb: "Strategy & Consulting",
        tagline: "Strategy & Consulting",
        heading: "Digital Marketing Strategy That Drives Business Growth",
        paragraphs: [
          "Every successful marketing campaign starts with a strategy - not guesswork.",
          "As an experienced Digital Marketing Consultant, we help Australian businesses develop data-driven marketing plans that increase brand visibility, generate qualified leads, and maximise return on investment.",
        ],
        primaryCta: { label: "Get in Touch", path: "/contact" },
        secondaryCta: { label: "View Case Studies", path: "/case-studies" },
      },
      whyMatters: {
        heading: "Why Strategy Matters",
        blocks: [
          {
            img: "/images/services/hero.jpg",
            text: "Many businesses invest in SEO, Google Ads or social media without a clear roadmap. The result is wasted budget, inconsistent messaging and disappointing returns.",
          },
          {
            img: "/images/case-studies/gradient-1.jpg",
            text: "Our strategy consulting identifies where your biggest opportunities exist before you invest another marketing dollar.",
          },
        ],
      },
      help: {
        tagline: "What We Help You With",
        heading: "Strategy, End to End",
        cards: [
          { icon: "Map", title: "Digital Marketing Strategy", text: "Create a complete roadmap across SEO, Paid Ads, Social Media and Content." },
          { icon: "Target", title: "Competitor Analysis", text: "Identify what competitors are doing and uncover opportunities to outperform them." },
          { icon: "Search", title: "Market Research", text: "Understand your audience, buying behaviour and demand." },
          { icon: "Route", title: "Customer Journey Mapping", text: "Map every stage from awareness to conversion." },
          { icon: "Filter", title: "Marketing Funnel Strategy", text: "Improve lead generation and sales processes." },
          { icon: "LineChart", title: "Performance Planning", text: "Set measurable KPIs and reporting frameworks." },
        ],
      },
      included: {
        tagline: "What's Included",
        heading: "Everything in Your Strategy",
        items: [
          "Website Audit",
          "SEO Audit",
          "Google Ads Audit",
          "Social Media Audit",
          "Competitor Analysis",
          "Audience Research",
          "Keyword Research",
          "Marketing Roadmap",
          "Customer Persona Development",
          "Marketing Planning Services",
          "Budget Planning",
          "KPI Framework",
          "90-Day Action Plan",
        ],
      },
      process: {
        tagline: "Our Strategy Process",
        heading: "How We Build Your Strategy",
        steps: [
          { step: "1", title: "Discovery", text: "We take the time to understand your business, industry, competitors, customers, and objectives." },
          { step: "2", title: "Digital Marketing Audit", text: "Our team conducts a comprehensive Digital Marketing Audit to identify strengths, weaknesses, technical issues, and growth opportunities." },
          { step: "3", title: "Research & Strategy Development", text: "Using market insights and customer data, we develop a tailored Business Growth Strategy and Online Marketing Strategy designed to achieve your goals." },
          { step: "4", title: "Marketing Roadmap", text: "You'll receive a practical Marketing Roadmap outlining recommended channels, campaign priorities, timelines, and investment recommendations." },
          { step: "5", title: "Ongoing Strategic Support", text: "As your trusted Marketing Consulting Services partner, we continue refining your strategy based on performance data, market changes, and business growth." },
        ],
      },
      whyChoose: {
        tagline: "Why Choose Us",
        heading: "Strategy That Delivers Results",
        description:
          "Choosing the right Marketing Strategy Agency can make the difference between wasted marketing spend and sustainable business growth. Our approach combines strategic thinking, market research, data analysis, and AI-powered insights to create marketing strategies that deliver measurable results.",
        items: [
          { icon: "BarChart3", label: "Data-Driven Decisions" },
          { icon: "Sparkles", label: "AI-Powered Insights" },
          { icon: "Award", label: "Certified Digital Experts" },
          { icon: "FileText", label: "Transparent Reporting" },
          { icon: "TrendingUp", label: "Tailored Growth Plans" },
          { icon: "MapPin", label: "Australian Market Experience" },
        ],
      },
      industries: {
        tagline: "Industries We Serve",
        heading: "Built for Your Sector",
        items: [
          { icon: "HeartPulse", label: "Healthcare" },
          { icon: "Accessibility", label: "NDIS" },
          { icon: "Building2", label: "Real Estate" },
          { icon: "Wrench", label: "Tradies" },
          { icon: "Briefcase", label: "Professional Services" },
          { icon: "GraduationCap", label: "Education" },
          { icon: "UtensilsCrossed", label: "Hospitality" },
          { icon: "ShoppingCart", label: "eCommerce" },
        ],
      },
      faqs: {
        tagline: "FAQs",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What is a Digital Marketing Strategy?",
            a: "A Digital Marketing Strategy is a customised plan that outlines how your business will use digital channels such as SEO, Google Ads, social media, content marketing, email marketing, and automation to achieve specific business goals. A well-planned Digital Marketing Strategy Australia helps businesses reach the right audience, improve brand visibility, generate qualified leads, and maximise return on investment. As an experienced Digital Marketing Consultant, we develop strategies tailored to your industry, target market, and growth objectives.",
          },
          {
            q: "Why is strategy important before running ads?",
            a: "Running paid advertising without a clear strategy can result in wasted budget and inconsistent results. A well-defined Online Marketing Strategy ensures your campaigns target the right audience with the right message at the right time. Our Marketing Strategy Consultant analyses your business goals, competitors, customer journey, and marketing channels before recommending the most effective approach, helping you achieve sustainable business growth rather than short-term wins.",
          },
          {
            q: "How long does strategy development take?",
            a: "The timeframe depends on your business size, objectives, and project complexity. In most cases, our Digital Strategy Services are completed within 2 to 4 weeks. During this time, we conduct research, competitor analysis, audience profiling, and a comprehensive Digital Marketing Audit before developing a tailored strategy and actionable implementation plan.",
          },
          {
            q: "What's included?",
            a: {
              intro: "Our Marketing Consulting Services provide everything you need to build a successful marketing foundation, including:",
              items: [
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
                "A 90-day action plan",
              ],
              outro: "Every strategy is tailored to your business goals and designed to support long-term growth.",
            },
          },
          {
            q: "Can you implement the strategy?",
            a: "Absolutely. As a full-service Marketing Strategy Agency, we don't just develop strategies—we also execute them. Our team can implement SEO, Google Ads, social media marketing, content marketing, website optimisation, marketing automation, and ongoing campaign management to ensure your strategy delivers measurable business results.",
          },
          {
            q: "Do you work with small businesses?",
            a: "Yes. We work with startups, small businesses, growing companies, and established enterprises across Australia. Whether you're launching a new business or looking to scale an existing one, our Marketing Planning Services are tailored to your goals, budget, and growth stage. Every client receives a personalised Business Growth Strategy designed to maximise opportunities and deliver measurable outcomes.",
          },
          {
            q: "How much does strategy consulting cost?",
            a: "The cost of strategy consulting varies depending on your business size, objectives, and the scope of work required. After an initial consultation, our Digital Marketing Consultant will recommend a tailored solution based on your goals. We provide transparent pricing with no hidden fees and focus on delivering strategies that generate long-term value and return on investment.",
          },
          {
            q: "Do you provide ongoing support?",
            a: "Yes. Strategy isn't a one-time activity—it evolves as your business grows and the market changes. Our ongoing Marketing Consulting Services include performance reviews, strategic planning sessions, campaign optimisation, reporting, and continuous improvements to keep your Online Marketing Strategy aligned with your business objectives.",
          },
          {
            q: "Will I receive a written strategy document?",
            a: "Yes. Every client receives a comprehensive strategy document that includes market research, competitor analysis, customer insights, recommended marketing channels, KPIs, implementation priorities, and a detailed Marketing Roadmap. This document serves as a practical guide for executing your marketing activities and measuring success over time.",
          },
          {
            q: "Can you audit our existing marketing?",
            a: "Yes. We offer a comprehensive Digital Marketing Audit that evaluates every aspect of your current marketing performance, including your website, SEO, paid advertising, social media, content, analytics, and conversion tracking. Our audit identifies strengths, uncovers growth opportunities, and provides actionable recommendations to strengthen your Business Growth Strategy and improve overall marketing performance.",
          },
        ],
      },
      finalCta: {
        heading: "Ready to Grow Your Business?",
        description: "Let's build a digital marketing strategy that delivers measurable results.",
      },
    },

    "marketing-automation": {
      seo: {
        title: "Marketing Automation Services Australia | Marketive",
        description:
          "Marketive delivers marketing automation services that streamline your sales and marketing processes, personalise every customer touchpoint at scale, and convert more leads into customers.",
        canonical: "https://marketive.com.au/services/marketing-automation",
      },
      hero: {
        breadcrumb: "Marketing Automation",
        tagline: "Australia's Specialist Marketing Automation Agency",
        heading: "Work Smarter. Nurture More Leads. Grow Without the Extra Headcount.",
        paragraphs: [
          "Marketive delivers marketing automation services that streamline your sales and marketing processes, personalise every customer touchpoint at scale, and convert more leads into customers — without your team having to manually lift a finger.",
        ],
        primaryCta: { label: "Get in Touch", path: "/contact" },
        secondaryCta: { label: "View Case Studies", path: "/case-studies" },
      },
      whyMatters: {
        heading: "Why Marketing Automation Strategy Matters",
        description: "Your Leads Don't Wait. Your Follow-Up Shouldn't Either.",
        blocks: [
          {
            img: "/images/case-studies/gradient-4.jpg",
            text: "The average Australian business loses up to 79% of its marketing leads because they never receive timely, relevant follow-up. Your sales team is busy, your marketing team is stretched — and the leads that took significant effort and budget to generate quietly go cold. Marketing automation changes this permanently.",
          },
          {
            img: "/images/blog/gradient-6.jpg",
            text: "A well-built marketing automation strategy puts your entire lead nurturing process on autopilot — sending the right message, to the right person, at the right moment in their buying journey, based on their actual behaviour. Whether a prospect downloads a guide, visits a pricing page, abandons a cart, or hasn't engaged in 30 days — your automated workflows respond instantly, intelligently, and personally at scale. At Marketive, we design and implement marketing automation systems that work as a seamless extension of your sales and marketing team.",
          },
        ],
        stats: [
          "Personalised automated emails deliver 6× higher transaction rates than generic broadcast emails",
          "80% of marketers report a measurable increase in leads after implementing marketing automation",
          "Workflow automation reduces manual marketing tasks by up to 40% — freeing your team for high-value work",
          "CRM integration gives your sales team a complete, real-time view of every lead's journey and engagement history",
        ],
      },
      help: {
        tagline: "What We Help You With",
        heading: "Automation, End to End",
        description:
          "A complete suite of marketing automation services — from strategy and platform setup to email automation, workflow design, CRM integration, and ongoing optimisation.",
        cards: [
          { icon: "Map", title: "Marketing Automation Strategy", text: "Before we build a single workflow, we map your full customer journey — identifying every touchpoint, conversion opportunity, and gap where automation can replace manual effort. Your marketing automation strategy becomes the blueprint that ensures every tool and workflow serves a clear business purpose." },
          { icon: "Workflow", title: "Workflow Automation & Implementation", text: "We design and implement intelligent automation workflows that trigger based on real user behaviour — website visits, form submissions, email opens, page views, and purchase events. Every workflow is mapped, tested, and refined to guide prospects through your sales funnel without manual intervention." },
          { icon: "Mail", title: "Email Marketing Automation", text: "We build sophisticated email automation sequences — welcome series, drip campaigns, abandoned cart flows, re-engagement campaigns, and post-purchase sequences — that deliver the right message to each subscriber based on where they are in their journey, not just when they joined your list." },
          { icon: "Sprout", title: "Automated Lead Nurturing", text: "Not every lead is ready to buy today. Our automated lead nurturing programs keep your brand top-of-mind across weeks and months — delivering relevant content, case studies, testimonials, and offers that educate and build trust until the lead is ready to convert, with your sales team notified the moment they are." },
          { icon: "Database", title: "CRM Integration & Sales Alignment", text: "We connect your marketing automation platform with your CRM — HubSpot, Salesforce, Pipedrive, Zoho, and more — creating a unified view of every contact's interaction history, lead score, and funnel stage. Your sales team always knows exactly where a lead is, what they've engaged with, and when to reach out." },
          { icon: "LineChart", title: "Automation Reporting & Optimisation", text: "We monitor, test, and continuously refine your automation workflows — tracking open rates, click-through rates, conversion rates, revenue attributed, and workflow drop-off points. Monthly reporting and optimisation calls ensure your marketing automation is always performing at its best." },
        ],
      },
      included: {
        tagline: "What's Included",
        heading: "Everything in Your Marketing Automation Package",
        description:
          "No vague scope, no half-built workflows. Every Marketive marketing automation engagement includes a complete set of documented deliverables from strategy through to live deployment and reporting.",
        items: [
          { title: "Automation Audit & Opportunity Assessment", text: "A thorough review of your current marketing processes, existing tools, CRM setup, and lead flow — identifying exactly where automation will have the highest impact and where time and money is currently being wasted." },
          { title: "Customer Journey Mapping", text: "A detailed map of your full customer lifecycle — from first awareness through to purchase, retention, and referral — defining every touchpoint where a targeted, automated communication can accelerate progress through the funnel." },
          { title: "Marketing Automation Strategy Document", text: "A fully documented marketing automation strategy covering your workflow architecture, trigger logic, audience segmentation, platform selection, and KPIs — your complete automation blueprint before a single workflow is built." },
          { title: "Platform Setup & Configuration", text: "Full setup and configuration of your chosen marketing automation platform — including list structure, tagging taxonomy, domain authentication, deliverability setup, and integration with your website, CRM, and analytics tools." },
          { title: "Workflow Design & Build", text: "Design and implementation of all agreed automation workflows — welcome sequences, lead nurturing flows, behavioural triggers, re-engagement campaigns, and post-conversion sequences — all mapped, tested, and documented." },
          { title: "Email Automation Copywriting & Design", text: "On-brand email copy and design for every automated communication — written to match your tone of voice, personalised with dynamic content fields, and optimised for open rates, click-through rates, and conversions." },
          { title: "Audience Segmentation & Lead Scoring", text: "Implementation of behavioural and demographic audience segmentation alongside a lead scoring model — so your automation platform can prioritise the hottest leads, trigger the right workflows, and alert your sales team at the perfect moment." },
          { title: "Monthly Reporting, Testing & Optimisation", text: "Monthly performance reports covering workflow conversion rates, email automation metrics, lead attribution, and revenue influenced — plus ongoing A/B testing and workflow refinements to continuously improve results over time." },
        ],
      },
      process: {
        tagline: "Our Strategy Process",
        heading: "How We Build Your Automation",
        description:
          "A proven four-phase framework we follow for every marketing automation engagement — from initial discovery and strategy through to live deployment, CRM integration, and continuous performance optimisation.",
        steps: [
          { step: "1", title: "Audit & Strategise", text: "We audit your current marketing processes, map your full customer journey, and identify every automation opportunity. From this, we build a documented marketing automation strategy defining your workflows, triggers, segmentation logic, and platform requirements before any build begins." },
          { step: "2", title: "Design & Build", text: "We set up and configure your automation platform, design all workflow logic, write and design your email automation sequences, implement CRM integration, and build your lead scoring model — with every component reviewed and approved before going live." },
          { step: "3", title: "Launch & Monitor", text: "Workflows go live with full tracking in place. We monitor every automation closely in the first 30 days — checking deliverability, trigger accuracy, workflow progression rates, and conversion metrics — making real-time adjustments to ensure everything performs as intended from launch." },
          { step: "4", title: "Test & Optimise", text: "Using real performance data, we run structured A/B tests on email subject lines, content, timing, and workflow logic — continuously refining your marketing automation to improve open rates, conversion rates, and revenue generated month over month." },
        ],
      },
      whyChoose: {
        tagline: "Why Choose Us",
        heading: "Why Choose Us as Your Marketing Automation Agency",
        description:
          "We're not a platform reseller or a tool-first implementation shop. We're a strategic marketing automation agency that designs systems aligned to your actual business goals — not just impressive-looking workflow diagrams.",
        items: [
          { icon: "Brain", title: "Strategy Before Software", text: "We start with your business objectives, customer journey, and revenue targets — not the features of a particular platform. Your marketing automation strategy is built around what your business needs to achieve, with the right tools selected to support that strategy, not the other way around." },
          { icon: "Handshake", title: "Sales & Marketing Aligned", text: "Marketing automation only delivers its full potential when sales and marketing work as one. We design automation workflows and CRM integrations that bridge the gap between your marketing platform and your sales team — ensuring no lead falls through the cracks and every handover happens at exactly the right moment." },
          { icon: "Target", title: "Personalisation at Scale", text: "We use behavioural triggers, dynamic content, progressive profiling, and predictive data to create genuinely personalised experiences for every lead and customer — at scale. Every prospect feels like they're receiving individually crafted communication, not being blasted with a mass email campaign." },
          { icon: "Link2", title: "Full-Stack Integration Expertise", text: "We integrate your marketing automation with your CRM, website, ecommerce platform, Google Ads, social media, and analytics tools — creating a connected ecosystem where data flows between every system, giving you a complete picture of your customer across every touchpoint." },
          { icon: "BarChart3", title: "ROI-Focused Reporting", text: "We don't report on open rates and call it a win. We track and report on the business metrics that matter — leads generated by automation, pipeline value influenced, revenue attributed to email automation sequences, and cost-per-acquisition improvements over time." },
          { icon: "MapPin", title: "100% Australian Team", text: "Your marketing automation is managed entirely by our in-house Australian team — no offshore outsourcing, no handoff to a third-party implementation partner. You have direct access to the strategists and builders managing your account, with fast communication and full accountability throughout." },
        ],
      },
      platforms: {
        tagline: "Platforms We Work With",
        heading: "Tools We Know Inside Out",
        description:
          "Our marketing automation agency works across all major automation platforms and CRM systems — recommending the right combination of tools for your business size, budget, and automation objectives.",
        items: ["HubSpot", "ActiveCampaign", "Klaviyo", "Mailchimp", "Zapier", "Shopify", "Google Analytics 4", "Meta Ads Manager"],
      },
      industries: {
        tagline: "Industries We Serve",
        heading: "Built for Your Sector",
        description:
          "Our marketing automation services have delivered measurable results across a broad range of Australian industries — each requiring a different automation architecture, lead nurturing approach, and CRM integration strategy.",
        items: [
          { icon: "ShoppingCart", label: "E-Commerce & Retail", text: "Cart abandonment, post-purchase flows, re-engagement" },
          { icon: "HeartPulse", label: "Healthcare & Allied Health", text: "Appointment reminders, patient nurturing, rebooking flows" },
          { icon: "Building2", label: "Real Estate & Property", text: "Lead nurturing, listing alerts, appraisal follow-up" },
          { icon: "Briefcase", label: "Professional Services", text: "Consultation nurturing, proposal follow-up, client retention" },
          { icon: "GraduationCap", label: "Education & Training", text: "Enrolment funnels, course nurturing, alumni re-engagement" },
          { icon: "Laptop", label: "Technology & SaaS", text: "Trial onboarding, feature adoption, churn prevention" },
          { icon: "Wrench", label: "Construction & Trades", text: "Quote follow-up, project milestone communications, referrals" },
          { icon: "UtensilsCrossed", label: "Hospitality & Events", text: "Booking confirmation, upsell automations, loyalty programs" },
        ],
      },
      faqs: {
        tagline: "FAQs",
        heading: "Frequently Asked Questions",
        description:
          "Everything you want to know about marketing automation services, email automation, and how we implement it for Australian businesses.",
        items: [
          { q: "What is marketing automation and how does it work?", a: "Marketing automation is the use of software to automate repetitive marketing tasks — such as sending emails, scoring leads, updating CRM records, and triggering personalised communications based on user behaviour — that would otherwise require constant manual effort from your team. It works by connecting your marketing platform to your website, CRM, and other tools, then defining rules (called workflows or automations) that trigger specific actions when a contact meets certain criteria. For example: when someone downloads a guide from your website, an automated email sequence begins nurturing them over the following days and weeks — without anyone on your team sending a single email manually. Marketive designs, builds, and manages these automation systems end-to-end for Australian businesses." },
          { q: "What is email marketing automation and how is it different from regular email marketing?", a: "Regular email marketing typically involves sending a broadcast email to your entire list at a set time — the same message to everyone, regardless of where they are in their buyer journey. Email marketing automation is fundamentally different: it sends targeted, personalised emails triggered by specific actions a contact takes or conditions they meet. A new subscriber receives a welcome sequence. A lead who visits your pricing page three times receives a targeted case study. A customer who hasn't purchased in 90 days receives a re-engagement offer. Because the right message reaches the right person at the right moment, personalised automated emails consistently deliver significantly higher open rates, click-through rates, and transaction rates than broadcast campaigns — making email automation one of the highest-ROI marketing investments a business can make." },
          { q: "What is automated lead nurturing and why does my business need it?", a: "Automated lead nurturing is the process of automatically delivering a planned sequence of relevant, valuable communications to prospects over time — educating them, building trust, and moving them progressively closer to a purchasing decision without requiring manual follow-up from your sales team. Most leads are not ready to buy the first time they encounter your business. Research consistently shows that the majority of B2B buyers require multiple touchpoints before making a decision, and that businesses with strong lead nurturing programs generate significantly more sales-ready leads at lower cost. Automated lead nurturing ensures no lead goes cold due to a lack of follow-up, and that every prospect receives consistent, personalised communication based on their actual engagement — not a one-size-fits-all broadcast." },
          { q: "What marketing automation platform is best for my business?", a: "The right platform depends on your business size, budget, technical requirements, and the complexity of the automations you need. HubSpot is an excellent all-in-one choice for businesses that want marketing automation, CRM, and sales tools under one roof — particularly for B2B and professional services. ActiveCampaign is our most recommended platform for small to medium businesses wanting powerful automation at an accessible price point. Klaviyo is the leading choice for ecommerce businesses, particularly those on Shopify, with exceptional email automation and SMS capabilities. Salesforce Marketing Cloud suits large enterprises with complex, multi-channel automation requirements. During your free audit, we'll recommend the right platform based on your specific situation — and we never recommend tools we don't have direct implementation experience with." },
          { q: "How does CRM integration work with marketing automation?", a: "CRM integration connects your marketing automation platform with your sales CRM — creating a two-way data flow that keeps both systems aligned in real time. When a lead takes an action in your marketing automation (opens an email, visits a key page, reaches a lead score threshold), that data is pushed to your CRM and can trigger a sales task or notification. When a salesperson updates a deal stage in the CRM, that can trigger a new marketing automation — sending a relevant follow-up sequence aligned to where the prospect is in the sales process. The result is a unified view of every contact's full interaction history across both marketing and sales, eliminating the manual data entry, duplicate records, and missed follow-ups that cost businesses revenue every day. We integrate with HubSpot, Salesforce, Pipedrive, Zoho, and most major CRM platforms." },
          { q: "How long does it take to set up marketing automation?", a: "A basic marketing automation setup — platform configuration, a welcome sequence, and one or two core nurturing workflows — can typically be live within three to four weeks. A more comprehensive implementation covering multiple audience segments, complex multi-step workflows, full CRM integration, lead scoring, and a suite of email automation sequences generally takes six to ten weeks to design, build, test, and launch properly. Rushing a marketing automation setup is one of the most common and costly mistakes businesses make — poorly built workflows that trigger at the wrong time, send duplicate emails, or misalign with CRM data damage both your deliverability and your customer relationships. We take the time to build it right from the start." },
          { q: "Do I need a large database to benefit from marketing automation?", a: "No — marketing automation delivers value from the very beginning, even with a modest contact database. The most important factor is not the size of your list, but having a clear customer journey and a consistent flow of new leads entering your system. In fact, businesses with smaller, highly engaged databases often see better results from automation than larger businesses with disengaged lists, because quality of engagement matters far more than volume. We frequently implement marketing automation for Australian businesses with a few hundred contacts that generate a significant proportion of their revenue from well-structured, well-targeted automated sequences. As your database grows, your automation compounds — making it one of the most scalable marketing investments you can make." },
          { q: "Won't automation make my marketing feel impersonal?", a: "This is the most common concern businesses have about marketing automation — and it's completely understandable. The reality is that well-designed marketing automation delivers a far more personalised experience than manual marketing ever could. When done correctly, automation uses behavioural triggers, dynamic content, progressive profiling, and audience segmentation to ensure every contact receives communication that feels specifically relevant to them — their interests, their behaviour, their stage in the journey. A generic mass email sent to your entire list at the same time is far more impersonal than an automated email triggered by something a specific person did on your website five minutes ago. The key is thoughtful strategy and quality copywriting — which is exactly what Marketive brings to every automation project." },
          { q: "How do you measure the success of marketing automation?", a: "We measure marketing automation success across multiple layers. At the email and workflow level, we track open rates, click-through rates, unsubscribe rates, workflow completion rates, and drop-off points — identifying exactly where contacts disengage so we can fix it. At the lead generation level, we track the number of leads entering each automation, lead score progression, and the rate at which automated nurturing converts prospects to sales-qualified leads. At the business outcome level — which is what matters most — we track revenue attributed to automation sequences, deals influenced by email automation, cost-per-acquisition improvements, and time saved from manual marketing tasks. Every monthly report connects automation performance directly to business results, not just platform metrics." },
          { q: "Can you take over and improve an existing marketing automation setup?", a: "Yes — automation audits and rebuilds are one of the most common engagements we take on. Many Australian businesses have invested in a marketing automation platform but find their workflows are underperforming, outdated, or were set up without a coherent strategy behind them. We begin with a thorough audit of your existing setup — reviewing your workflow logic, email performance data, CRM integration health, list hygiene, deliverability metrics, and segmentation structure. We then present a clear, prioritised improvement plan covering what to fix immediately, what to rebuild, and what new automations to add. In most cases, a well-structured optimisation of an existing setup delivers faster results than starting from scratch, because the foundational data and contact history is already in place." },
        ],
      },
      finalCta: {
        heading: "Ready to Turn Your Marketing Into a 24/7 Lead-Generating Machine?",
        description: "Get a marketing automation audit from our team. We'll review your current setup, map your customer journey, and show you exactly where automation can save your team time and grow your revenue — at no cost and no obligation.",
      },
    },

    "social-media": {
      seo: {
        title: "Social Media Marketing Services Australia | Marketive",
        description:
          "Marketive delivers social media marketing services that go far beyond likes and followers — turning your social channels into a consistent engine for brand awareness, audience trust, and real Australian revenue.",
        canonical: "https://marketive.com.au/services/social-media",
      },
      hero: {
        breadcrumb: "Social Media Marketing",
        tagline: "Social Media Marketing",
        heading: "Social Media That Builds Your Brand and Fills Your Pipeline",
        paragraphs: [
          "Marketive delivers social media marketing services that go far beyond likes and followers — turning your social channels into a consistent engine for brand awareness, audience trust, and real Australian revenue.",
        ],
        primaryCta: { label: "Get in Touch", path: "/contact" },
        secondaryCta: { label: "View Case Studies", path: "/case-studies" },
      },
      whyMatters: {
        heading: "Posting Without a Strategy Is Just Making Noise",
        blocks: [
          {
            img: "/images/blog/gradient-2.jpg",
            text: "Most Australian businesses treat social media as an afterthought — posting sporadically, chasing trends, and measuring success in likes. The brands that actually grow use social media differently: as a structured, strategy-led channel tied directly to business outcomes.",
          },
          {
            img: "/images/blog/gradient-1.jpg",
            text: "At Marketive, every social media marketing strategy we build starts with your goals, your audience, and your competitive landscape — not a generic content calendar. Whether you need to build brand awareness, generate leads, or drive direct sales, we engineer a social presence that works hard for your business every single day.",
          },
        ],
        stats: [
          "Audience research grounded in real Australian social behaviour",
          "Content pillars aligned to your brand voice and business objectives",
          "Organic and paid social working together as one unified strategy",
          "Monthly reporting tied to leads, traffic, and revenue — not vanity metrics",
        ],
      },
      help: {
        tagline: "What We Help You With",
        heading: "Social, End to End",
        description:
          "A complete suite of social media marketing services — from content creation to paid social advertising — all delivered by one dedicated Australian team.",
        cards: [
          { icon: "PenLine", title: "Social Media Content Creation", text: "We research, write, design, and produce platform-native content tailored to your brand and audience — from Instagram Reels and carousels to LinkedIn articles and Facebook posts that actually get engagement." },
          { icon: "Map", title: "Social Media Marketing Strategy", text: "Before a single post goes live, we build your social media marketing strategy from scratch — defining your content pillars, tone of voice, target audience personas, and platform mix to maximise every piece of content." },
          { icon: "Megaphone", title: "Paid Social Advertising", text: "Organic content builds your audience; paid social scales it. We manage Facebook Ads, Instagram Ads, LinkedIn campaigns, and TikTok advertising — targeting new audiences and retargeting existing ones with precision." },
          { icon: "MessageCircle", title: "Community Management", text: "Social media is a two-way conversation. We actively monitor and respond to your comments, DMs, and brand mentions — building genuine relationships with your audience and protecting your brand reputation in real time." },
          { icon: "Star", title: "Influencer & Creator Partnerships", text: "We identify, vet, and manage Australian influencer partnerships that are genuinely aligned to your brand — from niche micro-influencers with highly engaged audiences to broader ambassador programs that drive real reach." },
          { icon: "BarChart3", title: "Social Media Analytics & Reporting", text: "Every month you receive clear, jargon-free reports showing what's actually working — reach, engagement, follower growth, website traffic from social, and revenue or leads attributed to your social media channels." },
        ],
      },
      included: {
        tagline: "What's Included",
        heading: "Everything in Your Social Media Package",
        description:
          "No hidden extras, no vague scope. Every Marketive social media marketing engagement includes a comprehensive set of deliverables from day one.",
        items: [
          { title: "Social Media Audit & Competitor Analysis", text: "A full review of your existing profiles, content performance, audience data, and what your top competitors are doing differently — with a clear gap analysis and action plan." },
          { title: "Custom Social Media Marketing Strategy", text: "A tailored strategy document covering your platform selection, content pillars, tone of voice, posting frequency, and KPIs — your social media blueprint for the next 90 days." },
          { title: "Monthly Content Calendar", text: "A planned, approved content schedule mapped to your campaigns, seasonal moments, and audience behaviour — so every post has a purpose and nothing is published last-minute." },
          { title: "Branded Graphic Design & Copywriting", text: "Every post is designed to your brand guidelines and written in your unique tone of voice — graphics, captions, hashtags, and CTAs crafted by our in-house creative team." },
          { title: "Short-Form Video & Reels Production", text: "Video is the highest-performing content format across every major platform. We script, edit, and produce short-form video content optimised for Instagram Reels, TikTok, and Facebook." },
          { title: "Scheduling & Publishing", text: "We schedule and publish all content at optimal engagement times for your specific audience — ensuring consistent posting across all managed platforms without you lifting a finger." },
          { title: "Community Engagement & DM Management", text: "Daily monitoring of comments, replies, and direct messages — with prompt, on-brand responses that build community trust and encourage deeper audience relationships." },
          { title: "Monthly Performance Reports & Strategy Calls", text: "Plain-English monthly reports covering reach, engagement, follower growth, social traffic, and conversions — plus a dedicated strategy session to review results and align on next steps." },
        ],
      },
      process: {
        tagline: "Our Strategy Process",
        heading: "Our Social Media Marketing Strategy Process",
        description:
          "A proven four-phase framework we apply to every social media marketing client — from initial discovery to sustained audience and revenue growth.",
        steps: [
          { step: "1", title: "Discover & Define", text: "We audit your current social media presence, analyse your top competitors, and define your target audience personas, content pillars, and tone of voice — the foundation of every effective social media marketing strategy." },
          { step: "2", title: "Plan & Produce", text: "We build your monthly content calendar, produce platform-native creative assets, and plan paid social campaigns — ensuring every piece of content serves a clear purpose tied to your business goals." },
          { step: "3", title: "Publish & Engage", text: "Content goes live on schedule across all managed platforms. We actively manage your community — responding to comments and DMs, engaging with relevant conversations, and building the social proof that converts audiences into customers." },
          { step: "4", title: "Measure & Refine", text: "Monthly reporting covers what's working, what's not, and exactly what we're doing next. We use real performance data to continuously sharpen your social media marketing strategy — doubling down on what drives results." },
        ],
      },
      whyChoose: {
        tagline: "Why Choose Us",
        heading: "Why Choose Us as Your Social Media Marketing Agency",
        description:
          "We're a specialist Australian social media marketing agency obsessed with one thing: growing your business through social — not just your follower count.",
        items: [
          { icon: "MapPin", title: "Built for Australian Audiences", text: "We understand how Australians discover, engage with, and buy from brands on social. Every strategy we build reflects local culture, seasonal moments, and platform-specific behaviour in the Australian market." },
          { icon: "Palette", title: "In-House Creative Team", text: "Our designers, copywriters, and video editors work directly alongside your strategist. No outsourced freelancers, no brand inconsistency — just fast, polished, on-brand content produced under one roof." },
          { icon: "TrendingUp", title: "Results Tied to Your Business Goals", text: "We don't optimise for vanity metrics. We define success by what matters to you — whether that's leads generated, website traffic driven, products sold, or brand reach among your target audience." },
          { icon: "Link2", title: "Organic and Paid as One Strategy", text: "Most agencies silo organic social and paid social. We manage both as a single, integrated strategy — using organic content to build trust and paid advertising to accelerate reach and drive conversions." },
          { icon: "Store", title: "Specialists in Small Business Social Media", text: "Social media marketing for small business is one of our core strengths. We have purpose-built packages designed for businesses with lean budgets that still need professional, consistent social media management." },
          { icon: "Unlock", title: "No Lock-In Contracts", text: "Our social media services operate on rolling monthly agreements. We earn your business every month through the results we deliver — not the fine print of a long-term contract that traps you in a relationship that isn't working." },
        ],
      },
      platforms: {
        tagline: "Platforms We Work With",
        heading: "Every Platform That Matters",
        description:
          "Our social media marketing agency manages your brand presence across every major platform Australians use to discover, research, engage with, and buy from businesses like yours.",
        items: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube", "Pinterest", "X (Twitter)", "Facebook Ads Manager", "Meta Business Suite", "TikTok Ads", "LinkedIn Campaign Manager"],
      },
      industries: {
        tagline: "Industries We Serve",
        heading: "Built for Your Sector",
        description:
          "Our social media marketing services have delivered measurable results across a broad range of Australian industries — from local service businesses to national e-commerce brands.",
        items: [
          { icon: "ShoppingCart", label: "E-Commerce & Retail", text: "Online stores, fashion, homewares, consumer products" },
          { icon: "HeartPulse", label: "Healthcare & Wellness", text: "Clinics, allied health, gyms, beauty, aesthetics" },
          { icon: "Building2", label: "Real Estate & Property", text: "Agents, developers, property managers, builders" },
          { icon: "UtensilsCrossed", label: "Hospitality & Food", text: "Restaurants, cafés, bars, catering, food brands" },
          { icon: "Briefcase", label: "Professional Services", text: "Law firms, accountants, consultants, finance" },
          { icon: "GraduationCap", label: "Education & Training", text: "RTOs, course providers, tutors, coaches" },
          { icon: "Wrench", label: "Trades & Home Services", text: "Builders, plumbers, electricians, landscapers" },
          { icon: "Plane", label: "Travel & Tourism", text: "Tour operators, accommodation, experiences" },
        ],
      },
      faqs: {
        tagline: "FAQs",
        heading: "Frequently Asked Questions",
        description: "Everything you want to know about our social media marketing services before getting started.",
        items: [
          { q: "What does a social media marketing agency actually do?", a: "A social media marketing agency manages and grows your brand's presence across social platforms on your behalf. This includes building your social media marketing strategy, creating content (graphics, copy, video), scheduling and publishing posts at optimal times, running paid social advertising campaigns, managing community engagement — comments, DMs, and replies — and reporting on performance each month. At Marketive, we handle the entire process from strategy through to execution and reporting, so you gain a professional, consistent social presence without the overhead of an in-house team." },
          { q: "What's the difference between social media marketing and social media advertising?", a: "Social media marketing is the broader discipline that covers both organic (unpaid) activity and paid advertising. Organic social media involves content creation, community management, and audience growth through consistency and quality. Social media advertising refers specifically to the paid component — boosted posts, targeted ad campaigns, lead generation forms, and retargeting audiences. A strong social media marketing strategy uses both in tandem: organic content builds long-term brand trust and authority, while paid advertising amplifies your reach and drives faster, more targeted results. Marketive manages both as an integrated approach." },
          { q: "Which social media platforms should my Australian business be on?", a: "The right platforms depend on your business type, target audience, and goals. Instagram and Facebook suit most consumer-facing Australian businesses — retail, hospitality, lifestyle, and trades. LinkedIn is essential for B2B companies and professional services firms wanting to reach decision-makers. TikTok is increasingly powerful for brands targeting Australians under 40 with short-form video content. Pinterest performs well for home, food, fashion, and design businesses. During your free social media audit, we'll recommend the right platform mix for your specific audience — and we'll never spread your budget thin across platforms that won't deliver results." },
          { q: "How much does social media marketing cost in Australia?", a: "Social media marketing costs vary based on the number of platforms managed, content volume, whether paid advertising is included, and your overall objectives. For social media marketing for small business, our packages are designed to be accessible without compromising on quality. Full-service packages that cover strategy, content creation, community management, paid social, and monthly reporting are priced according to the scope involved. We provide a transparent, itemised proposal after your free audit — no generic pricing tiers and no surprise invoices mid-campaign." },
          { q: "How long before I see results from social media marketing?", a: "Timelines vary depending on your starting point, goals, and the channels being used. For organic social media marketing, most clients see meaningful engagement growth and improving reach within the first 60 to 90 days as consistent, high-quality content begins building audience trust and platform momentum. Paid social advertising delivers faster results — typically within two to four weeks once campaigns are live and optimised. We set clear, realistic expectations at the outset and provide monthly progress reports from day one so you always know exactly where things stand." },
          { q: "Can you help with social media marketing for small business with a limited budget?", a: "Yes — and this is genuinely one of our strengths. Social media marketing for small business is a core part of what we do. We offer purpose-built packages for businesses with lean budgets that focus resources on the one or two platforms most relevant to your audience, prioritise high-impact content formats, and use targeted paid amplification to stretch every dollar. You don't need a large brand budget to build a credible, engaging social presence — you need the right social media marketing strategy, executed consistently. Our small business clients regularly see professional results on manageable monthly investments." },
          { q: "Do you create all the social media content, or do I need to supply it?", a: "We handle all content production as part of our social media services. Our in-house creative team produces branded graphics, writes captions and hashtags, edits short-form video, and designs Stories and Reels assets. You'll review and approve content via a shared content calendar before anything goes live — so you always have final say over what represents your brand. Some clients choose to supply raw photos or behind-the-scenes footage for us to edit and repurpose, which often adds great authenticity to the content. This is always optional, never a requirement." },
          { q: "What makes a good social media marketing strategy?", a: "A strong social media marketing strategy starts with a clear understanding of your target audience — who they are, which platforms they use, what content they engage with, and what motivates them to take action. From there, it defines specific content pillars aligned to your brand positioning and business goals, sets a realistic posting cadence that prioritises quality over quantity, and maps out how organic content and paid advertising will work together to maximise reach and conversions. It also includes clear KPIs so performance can be measured against real business outcomes, not just engagement numbers. At Marketive, every social media marketing strategy we build is custom — not adapted from a global template." },
          { q: "Will I retain ownership and access to my social media accounts?", a: "Absolutely — and this is non-negotiable for us. Your social media accounts belong to your business, always. We request the necessary admin or partner access to publish content and manage ads, but account ownership remains entirely with you. If you ever decide to leave Marketive, you keep full access to all your profiles, followers, ad accounts, and any content we've created. We never hold account access as leverage or lock clients into proprietary systems. Your social presence is your brand asset, and it stays that way." },
          { q: "Do you offer social media management without a long-term contract?", a: "Yes. Our social media marketing services operate on rolling monthly agreements — there are no lock-in contracts or long-term commitments required to get started. We do recommend a minimum of three months when beginning a new social media engagement, as this is the realistic timeframe needed to establish your content voice, build initial audience momentum, and gather enough performance data to make meaningful optimisation decisions. After the initial period, you're free to continue on a month-to-month basis. Our clients typically stay far longer because the results make it an easy decision — not because a contract forces them to." },
        ],
      },
      finalCta: {
        heading: "Ready to Build a Social Media Presence Your Competitors Can't Ignore?",
        description: "Get a free social media audit from our team. We'll review your current profiles, benchmark you against competitors, and show you exactly what a proper social media marketing strategy looks like for your business — at no cost and no obligation.",
      },
    },

    "content-strategy": {
      seo: {
        title: "Content Strategy & Content Marketing Services | Marketive",
        description:
          "Marketive delivers content strategy and content marketing services that combine audience research, keyword intelligence, and brand voice to create content that ranks, engages, and drives real revenue.",
        canonical: "https://marketive.com.au/services/content-strategy",
      },
      hero: {
        breadcrumb: "Content Strategy",
        tagline: "Content Strategy & Production",
        heading: "Content That Ranks, Engages, and Drives Real Revenue",
        paragraphs: [
          "Marketive delivers content strategy and content marketing services that go beyond good writing — combining audience research, keyword intelligence, and brand voice to create content that performs across every channel and every stage of the customer journey.",
        ],
        primaryCta: { label: "Get in Touch", path: "/contact" },
        secondaryCta: { label: "View Case Studies", path: "/case-studies" },
      },
      whyMatters: {
        heading: "Publishing Content Without a Strategy Is Just Making Noise",
        blocks: [
          {
            img: "/images/case-studies/gradient-3.jpg",
            text: "The digital landscape is crowded. Every day, thousands of Australian businesses publish blog posts, web pages, and social content that never gets read, never gets ranked, and never generates a single lead. The difference between content that performs and content that disappears isn't talent — it's strategy.",
          },
          {
            img: "/images/blog/gradient-3.jpg",
            text: "A properly built content marketing strategy starts with data: understanding what your target audience is searching for, where they are in their buying journey, and what content formats will move them from awareness to conversion. At Marketive, every content strategy plan we build begins with a thorough content audit — identifying what's working, what's holding you back, and where your biggest growth opportunities lie — before a single word is written.",
          },
        ],
        stats: [
          "Content strategy built on keyword research, competitor analysis, and audience intent data",
          "Every piece of content aligned to a specific stage of your customer's buying journey",
          "Brand voice preserved throughout — content that sounds like you, not a generic agency",
          "Performance tracked against real business outcomes — traffic, leads, and revenue",
        ],
      },
      help: {
        tagline: "What We Help You With",
        heading: "Content, End to End",
        description:
          "A complete suite of content strategy and content marketing services — from initial audit and planning through to production, publication, and performance measurement.",
        cards: [
          { icon: "FileSearch", title: "Content Audit & Gap Analysis", text: "Every engagement begins with a thorough content audit — assessing your existing pages for SEO performance, keyword coverage, user engagement, and conversion contribution. We identify what's working, what needs optimising, and where the content gaps are that your competitors are exploiting." },
          { icon: "Map", title: "Content Strategy & Planning", text: "We build a comprehensive content strategy plan covering your target audience personas, content pillars, keyword mapping, topic clusters, and a rolling content calendar — so every piece of content has a clear purpose, a defined audience, and a measurable business objective behind it." },
          { icon: "PenLine", title: "SEO Copywriting & Content Production", text: "Our content writers are strategists first and wordsmiths second. We produce SEO-optimised blog posts, service pages, landing pages, category content, and guides that are written for your real audience and engineered to rank — with your brand voice intact throughout every word." },
          { icon: "LayoutTemplate", title: "Website Content Strategy", text: "Your website is your most important content asset. Our website content strategy service covers page-level keyword mapping, information architecture, internal linking strategy, meta data optimisation, and a structured content hierarchy that supports both user experience and organic search performance." },
          { icon: "Share2", title: "Multi-Platform Content Marketing", text: "Search doesn't stop with Google. We develop content marketing strategies that extend across social media, YouTube, LinkedIn, email, and industry publications — ensuring your best content reaches your audience across every platform they use to discover, research, and compare their options." },
          { icon: "LineChart", title: "Content Performance & Reporting", text: "We measure what matters — organic traffic growth, keyword rankings, time on page, lead attribution, and revenue influenced by content. Monthly content performance reports show exactly how your content marketing strategy is contributing to your business goals, with clear recommendations for each coming month." },
        ],
      },
      included: {
        tagline: "What's Included",
        heading: "Everything in Your Content Strategy Package",
        description:
          "No vague deliverables, no recycled content templates. Every Marketive content marketing engagement includes a complete, documented set of deliverables from strategy to production.",
        items: [
          { title: "Full Content Audit", text: "A page-by-page review of your existing content — ranking performance, keyword coverage, traffic, engagement, and conversion contribution — with a prioritised action list of what to fix, improve, or remove." },
          { title: "Competitor Content Analysis", text: "A detailed look at what your top competitors are publishing, which keywords they're ranking for, what content gaps they're filling, and where you have a realistic opportunity to outrank them with better, more targeted content." },
          { title: "Keyword Research & Topic Mapping", text: "In-depth keyword research identifying high-intent Australian search terms — mapped to your content pillars, customer journey stages, and website page structure for maximum organic reach and relevance." },
          { title: "Audience Persona Development", text: "Clear, research-backed audience personas defining who your content is for, what questions they're asking at each stage of the buyer journey, and what type of content will move them closer to conversion." },
          { title: "Content Strategy Plan Document", text: "A fully documented content strategy plan covering your content pillars, platform selection, content types, posting cadence, tone of voice guidelines, and 90-day content roadmap — your complete content blueprint." },
          { title: "Rolling Content Calendar", text: "A month-by-month content calendar mapping topics, formats, target keywords, publishing dates, and distribution channels — planned around your campaigns, seasonal moments, and audience search behaviour patterns." },
          { title: "SEO Content Production", text: "Fully written, on-brand, SEO-optimised content assets — blog posts, service pages, landing pages, FAQs, and guides — produced by our in-house writers and reviewed against both keyword targets and your brand voice guidelines." },
          { title: "Monthly Performance Reports & Strategy Reviews", text: "Clear monthly reporting on organic traffic, keyword rankings, content engagement, and lead attribution — plus a strategy review session to assess what's performing, what to double down on, and what to adjust." },
        ],
      },
      process: {
        tagline: "Our Strategy Process",
        heading: "How We Build Your Content Strategy",
        description:
          "A proven four-phase framework we apply to every content marketing engagement — from initial audit and research through to production, publication, and continuous performance refinement.",
        steps: [
          { step: "1", title: "Audit & Research", text: "We conduct a full content audit of your existing website, carry out competitor content analysis, perform in-depth keyword research, and develop audience personas — building the data foundation that shapes every strategic decision that follows." },
          { step: "2", title: "Strategy & Plan", text: "Using the research findings, we build your content strategy plan — defining content pillars, keyword topic clusters, content types, platform priorities, publishing cadence, and a 90-day content calendar tied directly to your business goals." },
          { step: "3", title: "Produce & Publish", text: "Our in-house content team produces SEO-optimised, on-brand content assets to the approved calendar — blog posts, landing pages, guides, and more — with quality checks against keyword targets, readability, and brand voice before every publication." },
          { step: "4", title: "Measure & Optimise", text: "We track rankings, traffic, engagement, and conversions monthly — identifying top-performing content to amplify, underperforming content to improve, and new keyword opportunities to target as your content authority grows over time." },
        ],
      },
      whyChoose: {
        tagline: "Why Choose Us",
        heading: "Why Choose Marketive for Content",
        description:
          "We're not a content mill churning out generic articles. We're a specialist Australian content marketing team that combines creative excellence with data-led strategy to produce content that actually works.",
        items: [
          { icon: "Brain", title: "Strategists, Not Just Writers", text: "Every piece of content we produce is backed by keyword research, audience intent analysis, and competitive insight. Our writers are strategists first — they understand the business purpose behind every article, page, and guide before they write a single sentence." },
          { icon: "MapPin", title: "Built for Australian Search Behaviour", text: "We create content strategies grounded in how Australians actually search — local terminology, Australian spelling, regional buying intent, and search volume data from the Australian Google index. No US-centric keyword strategies recycled for the local market." },
          { icon: "Target", title: "SEO & Content Marketing as One", text: "We don't separate content from SEO — they're the same discipline. Every content strategy plan we build is fully integrated with your technical SEO foundations, internal linking structure, and keyword targets, ensuring your content compounds in authority over time." },
          { icon: "Sparkles", title: "Future-Proof Content for AI Search", text: "With Google's AI Overviews, Search Generative Experience, and tools like ChatGPT and Perplexity reshaping how people find answers, we build content strategies designed to be cited and surfaced in both traditional and AI-driven search environments — keeping you visible in the next era of search." },
          { icon: "MessageCircle", title: "Your Brand Voice, Intact", text: "Content that sounds like it came from a generic agency undermines the trust you've built with your audience. We invest time in understanding your tone of voice, your industry, and your customers — so every piece of content we produce sounds unmistakably like your brand." },
          { icon: "TrendingUp", title: "Results Tied to Business Outcomes", text: "We don't report on word counts or publish frequency. We measure the metrics that matter — organic traffic growth, keyword ranking improvements, leads generated by content, and revenue attributed to your content marketing strategy — and we hold ourselves accountable to them every month." },
        ],
      },
      platforms: {
        tagline: "Platforms We Work With",
        heading: "Tools That Power Our Content",
        description:
          "Our content strategy and content marketing services are powered by industry-leading research tools, analytics platforms, and content management systems — giving every strategic decision a solid data foundation.",
        items: ["Ahrefs", "Semrush", "Google Search Console", "Google Analytics 4", "Surfer SEO", "Clearscope", "Google Trends", "WordPress", "Shopify", "Webflow", "HubSpot", "Looker Studio"],
      },
      industries: {
        tagline: "Industries We Serve",
        heading: "Built for Your Sector",
        description:
          "Our content marketing strategy and content production services have delivered measurable results across a wide range of Australian industries — each requiring a distinctly different content approach, tone, and keyword focus.",
        items: [
          { icon: "ShoppingCart", label: "E-Commerce & Retail", text: "Product guides, buying content, category SEO" },
          { icon: "HeartPulse", label: "Healthcare & Wellness", text: "YMYL-compliant health content, clinic pages" },
          { icon: "Briefcase", label: "Professional Services", text: "Law firms, accountants, consultants, finance" },
          { icon: "Building2", label: "Real Estate & Property", text: "Suburb guides, market insights, agent content" },
          { icon: "GraduationCap", label: "Education & Training", text: "Course content, RTOs, coaches, skill providers" },
          { icon: "Rocket", label: "Technology & SaaS", text: "Product-led content, comparison pages, thought leadership" },
          { icon: "Wrench", label: "Construction & Trades", text: "Local service content, project showcases, FAQs" },
          { icon: "UtensilsCrossed", label: "Hospitality & Food", text: "Local SEO content, menus, venue guides, reviews" },
        ],
      },
      faqs: {
        tagline: "FAQs",
        heading: "Frequently Asked Questions",
        description: "Everything you want to know about content strategy, content marketing, and how we approach it at Marketive.",
        items: [
          { q: "What is a content strategy and why does my business need one?", a: "A content strategy is a documented plan that defines what content your business will create, who it's for, what purpose each piece serves, and how performance will be measured. Without a content strategy plan, most businesses publish content reactively — chasing ideas, copying competitors, or simply filling a content calendar without understanding why. The result is wasted time and budget on content that never ranks, never gets read, and never generates leads. A properly built content strategy ensures every piece of content has a clear keyword target, a defined audience, a place in the customer journey, and a measurable goal — so your content investment compounds over time rather than disappearing into the internet." },
          { q: "What is content marketing and how is it different from traditional marketing?", a: "Content marketing is the practice of creating and distributing valuable, relevant content — blog posts, guides, videos, social content, and more — to attract, engage, and convert your target audience, rather than interrupting them with direct advertising. Unlike traditional marketing, which pushes a message at an audience, content marketing pulls your ideal customer toward you by answering the questions they're already asking. It's a core pillar of SEO and one of the highest-ROI long-term marketing investments an Australian business can make. A well-executed content marketing strategy builds compounding organic traffic, domain authority, and brand trust that paid advertising simply cannot replicate." },
          { q: "What is a website content strategy and what does it involve?", a: "A website content strategy is a specific plan for the content that lives on your website — covering every page, from your homepage and service pages to your blog, FAQ section, and landing pages. It involves mapping keywords to specific pages, defining the purpose and target audience for each page, structuring internal links to pass authority between related pages, and establishing a hierarchy that helps both users and search engines understand what your website is about. An effective website content strategy is the difference between a website that ranks across dozens of keyword opportunities and one that only ranks for your brand name. At Marketive, website content strategy is a foundational deliverable in every content engagement." },
          { q: "How long does it take to see results from content marketing?", a: "Content marketing is a medium-to-long-term investment — and anyone who promises immediate ranking results from content alone should be treated with scepticism. For new content targeting competitive keywords, meaningful organic traffic growth typically begins within three to six months and accelerates significantly between six and twelve months as your domain authority builds. Content targeting lower-competition, long-tail keywords can rank and drive traffic faster — often within weeks of publication. The compounding nature of content marketing is its greatest strength: content published today continues to attract organic traffic, leads, and backlinks for years, delivering an ever-improving return on your original investment." },
          { q: "What types of content deliver the best SEO results?", a: "The most effective content formats depend on your industry, audience, and where in the customer journey you're targeting. However, consistently high-performing content types include: in-depth pillar pages targeting broad, high-volume keywords; supporting cluster content targeting related long-tail variations; FAQ content that captures question-based searches and AI search citations; comparison and buyer's guide content targeting high-purchase-intent queries; local content targeting suburb and city-level searches; and case studies and testimonial pages that convert visitors who are close to a buying decision. At Marketive, our content strategy plan always recommends the right mix of content types based on your specific keyword opportunities and competitive landscape." },
          { q: "Do you produce the content, or do we need to supply it?", a: "We handle all content production as part of our content marketing services. Our in-house team of SEO copywriters, content strategists, and editors produce fully written, on-brand, keyword-optimised content ready to publish. You'll review and approve all content before it goes live — with a simple feedback process that keeps things moving without creating unnecessary delays. Some clients prefer to supply draft content or raw information (especially for technical industries) which we then edit, optimise, and structure for both users and search engines. This is always an option, but never a requirement. We can work entirely independently or collaboratively, depending on your team's capacity and preferences." },
          { q: "How do you ensure the content sounds like our brand, not a generic agency?", a: "Brand voice consistency is one of our most important commitments in content marketing. Before we write a single word for your business, we invest time in understanding your tone of voice — whether that's professional and authoritative, approachable and conversational, technical and precise, or a blend specific to your brand. We create a documented tone of voice guide as part of your content strategy plan, and all content is reviewed against these guidelines before delivery. We also study your existing content, your competitor landscape, and your customer language to ensure everything we produce sounds unmistakably like your brand — not a recycled agency template with your logo on it." },
          { q: "How do you measure the success of a content marketing strategy?", a: "We measure content success against both SEO metrics and real business outcomes. SEO metrics include: organic traffic to content pages, keyword ranking improvements, SERP visibility growth, backlinks earned by content assets, and click-through rates from Google Search Console. Business outcome metrics include: leads or conversions attributed to organic content traffic, revenue influenced by content (tracked via GA4), time on page and engagement rates indicating content quality, and content's contribution to the overall customer journey. Every monthly report connects content performance to business results — not just vanity metrics like word count, publish frequency, or social shares." },
          { q: "How does content strategy work alongside SEO and paid advertising?", a: "Content strategy, SEO, and paid advertising are most powerful when they operate as a unified system. Your content strategy plan provides the keyword roadmap and topical authority that drives organic rankings through SEO. Your paid advertising campaigns can then amplify your best-performing content to new audiences and retarget visitors who engaged with your content but didn't convert. Meanwhile, insights from your paid campaigns — which messages resonate, which offers convert — feed back into your content strategy to make organic content sharper and more effective. As a full-service digital marketing agency, Marketive manages all three disciplines together, ensuring they reinforce each other rather than operating in silos." },
          { q: "What makes a good content strategy plan — and how do I know if mine is working?", a: "A strong content strategy plan has five non-negotiable components: first, it's grounded in real keyword and audience data — not assumptions about what your customers want to read. Second, it maps content to the full customer journey, covering awareness, consideration, and decision stages. Third, it defines clear KPIs for each content type — what does success look like for a pillar page versus an FAQ post versus a case study? Fourth, it includes a realistic publishing cadence your team can sustain — consistency compounds faster than sporadic bursts. Fifth, it's reviewed and updated regularly based on performance data. You'll know your content strategy is working when your organic traffic is growing month on month, your keywords are climbing in rankings, and content is appearing in your lead attribution reports. If those things aren't happening within six to twelve months, something in the strategy needs adjusting — and that's exactly what our monthly strategy review sessions are designed to address." },
        ],
      },
      finalCta: {
        heading: "Is Your Content Actually Driving Traffic and Leads?",
        description: "Get a free content audit from our team. We'll review what's ranking, what's not, and where your biggest content opportunities are — then show you exactly what a results-driven content marketing strategy looks like for your business.",
      },
    },

    "branding": {
      seo: {
        title: "Branding Services & Professional Logo Design | Marketive",
        description:
          "Marketive delivers professional branding services — from brand logo design and visual identity to full brand management — that give Australian businesses the presence, credibility, and consistency they need to grow.",
        canonical: "https://marketive.com.au/services/branding",
      },
      hero: {
        breadcrumb: "Branding Services",
        tagline: "Branding Services",
        heading: "A Brand That Looks the Part Wins the Sale Before a Word Is Spoken",
        paragraphs: [
          "Marketive delivers professional branding services — from brand logo design and visual identity to full brand management — that give Australian businesses the presence, credibility, and consistency they need to grow.",
        ],
        primaryCta: { label: "Get in Touch", path: "/contact" },
        secondaryCta: { label: "View Case Studies", path: "/case-studies" },
      },
      whyMatters: {
        heading: "A Great Product With a Weak Brand Gets Ignored",
        blocks: [
          {
            img: "/images/blog/gradient-4.jpg",
            text: "In today's competitive Australian market, customers make judgements about your business in seconds — before they read a single word, before they speak to anyone on your team. Your brand logo design, colour palette, typography, and visual language all communicate trust, quality, and credibility the moment someone lands on your website or walks past your shopfront.",
          },
          {
            img: "/images/case-studies/gradient-2.jpg",
            text: "At Marketive, our branding services go well beyond designing a pretty logo. We build complete brand identities — underpinned by strategy, market research, and a deep understanding of your target audience — that give your business a unified, professional presence across every touchpoint. From your first business card to your largest billboard, everything speaks the same language.",
          },
        ],
        stats: [
          "Brand identity grounded in audience research and competitive positioning",
          "Professional logo design created for digital, print, and signage applications",
          "Consistent visual language that builds recognition and trust over time",
          "Brand management support to keep your identity strong as your business grows",
        ],
      },
      help: {
        tagline: "What We Help You With",
        heading: "Branding, End to End",
        description:
          "A full suite of branding services covering every element your business needs to build a brand that is memorable, credible, and built to scale.",
        cards: [
          { icon: "PenTool", title: "Professional Logo Design", text: "Our professional logo design process starts with your story, values, and audience — and ends with a mark that's distinctive, versatile, and built to represent your business for years to come. Every logo is delivered across all formats for print, digital, and signage use." },
          { icon: "Palette", title: "Brand Identity Design", text: "Beyond the logo, your brand identity includes your colour palette, typography system, iconography, and graphic elements. We design a cohesive visual language that works consistently across your website, social media, packaging, and marketing collateral." },
          { icon: "BookOpen", title: "Brand Strategy & Positioning", text: "We define your brand's positioning, purpose, values, and personality before a single design begins. This strategic foundation ensures everything we create is intentional — not just aesthetically pleasing, but commercially effective and differentiated from your competitors." },
          { icon: "MessageCircle", title: "Brand Voice & Messaging", text: "How your brand sounds is just as important as how it looks. We develop your tone of voice, key brand messages, tagline, and copy guidelines — so your brand communicates consistently and compellingly across every channel and customer touchpoint." },
          { icon: "ClipboardList", title: "Brand Guidelines", text: "We document everything in a comprehensive brand guidelines document — your logo usage rules, colour codes, font specifications, imagery style, and tone of voice — so your brand stays consistent whether it's your team, a supplier, or a marketing agency applying it." },
          { icon: "RefreshCw", title: "Brand Management & Refresh", text: "Existing brand feeling stale or inconsistent? Our brand management service audits your current identity, identifies what's working and what isn't, and evolves your brand to reflect where your business is today — without losing the equity you've already built." },
        ],
      },
      included: {
        tagline: "What's Included",
        heading: "Everything in Your Branding Package",
        description:
          "No vague scope, no surprise extras. Every Marketive branding engagement includes a complete set of deliverables — from initial discovery to final brand asset handover.",
        items: [
          { title: "Brand Discovery Workshop", text: "A structured session to understand your business, audience, competitors, values, and goals — the strategic foundation every element of your brand identity is built upon." },
          { title: "Competitor & Market Research", text: "We analyse your competitive landscape to identify visual patterns, positioning gaps, and opportunities for your brand to stand out in the Australian market." },
          { title: "Brand Strategy Document", text: "A clear written strategy covering your brand positioning, purpose, audience personas, personality traits, and key differentiators — your brand's north star." },
          { title: "Logo Design Concepts (3 Directions)", text: "Three distinct professional logo design concepts, each with a rationale explaining the creative thinking — so you can make a fully informed decision, not just a gut-feel choice." },
          { title: "Logo Refinements & Final Files", text: "Two rounds of revisions on your chosen brand logo design, followed by final file delivery in all required formats — AI, EPS, SVG, PNG, JPG — in full colour, reversed, and monochrome versions." },
          { title: "Colour Palette & Typography System", text: "A curated primary and secondary colour palette with exact HEX, RGB, and CMYK codes, paired with a complete typography system for headings, body copy, and accent text." },
          { title: "Tone of Voice & Tagline", text: "Your brand's verbal identity — tone of voice guidelines, messaging pillars, and a memorable tagline that communicates your core value proposition with clarity and impact." },
          { title: "Brand Guidelines Document", text: "A professionally designed brand guidelines PDF covering every element of your identity — logo usage, colour, typography, imagery style, and tone of voice — ready to share with any designer or supplier." },
        ],
      },
      process: {
        tagline: "Our Strategy Process",
        heading: "Our Branding Strategy Process",
        description:
          "A structured four-phase framework we use for every branding project — from initial brief to final brand asset delivery and beyond.",
        steps: [
          { step: "1", title: "Discover & Strategise", text: "We run a brand discovery workshop to understand your business, market, competitors, and goals. From this, we build a brand strategy document that defines your positioning, personality, and purpose before any design work begins." },
          { step: "2", title: "Concept & Design", text: "Our logo designer and identity team develop three distinct creative directions for your brand — each accompanied by a written rationale. You choose the direction that best represents your vision, and we refine it to perfection." },
          { step: "3", title: "Refine & Build", text: "With your chosen direction confirmed, we develop the full brand identity — colour palette, typography, brand elements, tone of voice, and guidelines. Every component is designed to work together as a cohesive, professional system." },
          { step: "4", title: "Deliver & Support", text: "We deliver all final brand assets in every required format, walk you through your brand guidelines, and provide ongoing brand management support to ensure your identity is applied consistently as your business grows and evolves." },
        ],
      },
      whyChoose: {
        tagline: "Why Choose Us",
        heading: "Why Choose Us for Your Branding Services",
        description:
          "We're not a generic design agency that produces logos in a vacuum. We're a strategic branding partner that builds identities engineered to grow Australian businesses.",
        items: [
          { icon: "Brain", title: "Strategy Before Design", text: "Every branding project begins with research and strategy — not Photoshop. We understand your market, your audience, and your competitors before we pick up a pencil, ensuring every design decision is intentional and commercially grounded." },
          { icon: "MapPin", title: "Built for the Australian Market", text: "We design brands for Australian audiences and Australian businesses. We understand the local competitive landscape, visual trends, cultural nuances, and what it takes to build brand recognition in cities and regional markets across the country." },
          { icon: "Link2", title: "Branding Integrated with Marketing", text: "As a full-service digital marketing agency, we ensure your brand identity is built to perform across every channel — your website, social media, Google Ads, and printed collateral all speak with a consistent, powerful brand voice from day one." },
          { icon: "PenTool", title: "Expert Logo Designer Team", text: "Our in-house logo designer team combines creative excellence with commercial thinking. Every mark we produce is distinctive, scalable, legally clearable, and designed to stand the test of time — not just look impressive in a presentation deck." },
          { icon: "FolderOpen", title: "You Own Everything", text: "Every file, every concept, every element of your brand identity belongs to you upon final payment. You receive all source files in editable formats — no licencing fees, no ongoing reliance on us to access your own brand assets." },
          { icon: "RefreshCw", title: "Ongoing Brand Management", text: "Our relationship doesn't end at brand launch. We offer ongoing brand management services to help you maintain consistency, evolve your identity as your business grows, and apply your brand across new channels, products, and markets." },
        ],
      },
      platforms: {
        tagline: "Platforms We Work With",
        heading: "Tools We Design With",
        description:
          "Our branding services are delivered using industry-standard creative tools, and your final brand assets are built to work across every platform and application your business needs.",
        items: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Canva for Teams", "After Effects", "WordPress", "Shopify", "Webflow", "Meta (Facebook & Instagram)", "LinkedIn", "Google Display Network"],
      },
      industries: {
        tagline: "Industries We Serve",
        heading: "Built for Your Sector",
        description:
          "Our branding services — from professional logo design to full brand management — have helped businesses across a wide range of Australian industries build stronger, more recognisable brands.",
        items: [
          { icon: "ShoppingCart", label: "E-Commerce & Retail", text: "Product brands, online stores, consumer goods" },
          { icon: "HeartPulse", label: "Healthcare & Wellness", text: "Clinics, allied health, beauty, aesthetics, fitness" },
          { icon: "Building2", label: "Real Estate & Property", text: "Agencies, developers, property management" },
          { icon: "UtensilsCrossed", label: "Hospitality & Food", text: "Restaurants, cafés, food & beverage brands" },
          { icon: "Briefcase", label: "Professional Services", text: "Law firms, accountants, consultants, finance" },
          { icon: "Rocket", label: "Start-Ups & New Ventures", text: "New businesses launching with a brand-first approach" },
          { icon: "Wrench", label: "Construction & Trades", text: "Builders, developers, trade service businesses" },
          { icon: "GraduationCap", label: "Education & Coaching", text: "RTOs, training providers, coaches, consultants" },
        ],
      },
      faqs: {
        tagline: "FAQs",
        heading: "Frequently Asked Questions",
        description: "Everything you want to know about our branding services, logo design process, and brand management before getting started.",
        items: [
          { q: "What are branding services and what do they include?", a: "Branding services cover the full range of work involved in building or refreshing a business's brand identity. This includes brand strategy and positioning, professional logo design, visual identity development (colour palette, typography, graphic elements), brand voice and messaging, brand guidelines documentation, and ongoing brand management. At Marketive, our branding services are strategy-led — meaning we begin with research and positioning before any creative work starts. The result is a brand that isn't just visually appealing, but strategically built to resonate with your target audience and differentiate your business in the Australian market." },
          { q: "How much does professional logo design cost in Australia?", a: "Professional logo design costs vary significantly depending on the depth of the process, the experience of the designer, and what's included in the deliverables. A quality, strategy-led logo design engagement with an experienced agency like Marketive is a meaningful investment — but one that pays dividends for years. We provide transparent, project-based pricing after an initial discovery conversation. What we don't do is produce cheap, templated logos — our professional logo design process is thorough, original, and includes all source files and formats you'll ever need. Contact us for a tailored quote based on your brief." },
          { q: "What is the difference between a logo and a brand identity?", a: "A logo is a single mark — the symbol or wordmark that represents your business. A brand identity is the complete visual and verbal system that surrounds it. This includes your colour palette, typography hierarchy, graphic elements, imagery style, tone of voice, and the rules governing how all of these elements are applied together. A brand logo design is the centrepiece of your identity, but without the supporting system, it can't do its job consistently. Our branding services always deliver a complete identity system — not just a logo in isolation — because that's what creates genuine brand recognition and consistency across every touchpoint." },
          { q: "How long does a branding project take?", a: "A full brand identity project — from initial discovery to final asset delivery — typically takes four to eight weeks depending on the scope and the speed of client feedback at each stage. A logo-only project can move faster, while a complete brand strategy, identity, and guidelines engagement will take longer to do properly. We provide a clear project timeline at the outset so you know exactly what to expect at each milestone. Rushing a brand is the most expensive shortcut a business can take — so we're thorough, but efficient." },
          { q: "Do I own the logo and brand assets after the project is complete?", a: "Yes — full ownership of all brand assets transfers to you upon final payment. This includes all original source files in editable formats (AI, EPS, SVG) as well as production-ready files (PNG, JPG, PDF) in every colour variant and size configuration you'll need. There are no ongoing licencing fees, no watermarks, and no dependency on Marketive to access or use your own brand. Your brand is a business asset that belongs entirely to you, and we make sure you have everything needed to use it independently from day one." },
          { q: "Can you redesign or refresh an existing brand without starting from scratch?", a: "Absolutely. Brand refreshes are a common and valuable engagement for established businesses whose visual identity has become dated, inconsistent, or no longer reflective of where they are today. Our brand management process begins with an audit of your existing identity — assessing what equity is worth retaining and what needs to evolve. We then strategically modernise your brand while preserving the recognition you've already built with your existing audience. A refresh is typically faster and less costly than a full rebrand, while delivering a significant improvement in how your business is perceived." },
          { q: "What makes a good logo designer — and how do I evaluate one?", a: "A good logo designer does much more than produce something that looks nice. They ask questions before they start designing — about your audience, your competitors, and the impression you want to create. They present concepts with rationale, not just visuals. Their work is original, not templated. They understand scalability — how your logo will work at 16px as a favicon and at 2 metres on a building. And they deliver all the file formats you need, not just a JPEG. When evaluating a logo designer, ask to see their portfolio, ask about their process, and be wary of anyone who can produce a logo in 24 hours for under $100. Your brand is too important for a shortcut." },
          { q: "Do you provide brand guidelines as part of your branding services?", a: "Yes — brand guidelines are a core deliverable in every Marketive branding engagement. Your brand guidelines document is a professionally designed reference manual that covers: logo usage rules (clear space, minimum sizes, colour applications, what not to do), your colour palette with exact HEX, RGB, and CMYK codes, your typography system with font specifications and hierarchy rules, imagery and photography style guidance, and tone of voice principles. This document ensures that whether it's your internal team, a web developer, a print supplier, or a social media manager applying your brand, the result is always consistent and on-brand." },
          { q: "What is brand management and does my business need it?", a: "Brand management is the ongoing process of monitoring, maintaining, and evolving your brand as your business grows. This includes ensuring your brand is applied consistently across all channels and materials, updating brand assets as your product range or market position changes, managing how your brand is perceived online (including reviews, social presence, and PR), and evolving your visual identity when needed to stay relevant. Your business needs active brand management if you're growing quickly, expanding into new markets, adding team members who create content, or if your brand has become inconsistent across different touchpoints. Marketive offers retainer-based brand management support tailored to the needs of each client." },
          { q: "Can you handle both branding and digital marketing for my business?", a: "Yes — and this is one of the most significant advantages of working with Marketive. As a full-service digital marketing agency, we provide branding services, SEO, Google Ads, social media marketing, and web design under one roof. This means your brand identity and your marketing campaigns are always strategically and visually aligned. Your logo, brand colours, and tone of voice translate directly into your social media content, your Google display ads, and your website — creating a seamless, consistent customer experience that builds trust faster and converts more effectively than fragmented work from multiple agencies." },
        ],
      },
      finalCta: {
        heading: "Ready to Build a Brand Your Customers Trust on Sight?",
        description: "Start with a free brand consultation. We'll review your current brand, discuss your goals, and show you exactly what professional branding services can do for your business — at no cost and no obligation.",
      },
    },

    "web-design-development": {
      seo: {
        title: "Website Design & Development Services Australia | Marketive",
        description:
          "Marketive is a specialist web development company delivering website design and development services that combine stunning visuals, flawless functionality, and conversion-focused architecture for Australian businesses.",
        canonical: "https://marketive.com.au/services/web-design-development",
      },
      hero: {
        breadcrumb: "Website Design & Development",
        tagline: "Website Design & Development",
        heading: "Websites Built to Win Customers, Not Just Impress Visitors",
        paragraphs: [
          "Marketive is a specialist web development company delivering website design and development services that combine stunning visuals, flawless functionality, and conversion-focused architecture — for Australian businesses ready to grow online.",
        ],
        primaryCta: { label: "Get in Touch", path: "/contact" },
        secondaryCta: { label: "View Case Studies", path: "/case-studies" },
      },
      whyMatters: {
        heading: "A Beautiful Website That Doesn't Convert Is Just Art",
        blocks: [
          {
            img: "/images/services/process-2.jpg",
            text: "Too many Australian businesses invest in a website that looks impressive but fails to generate enquiries, sales, or meaningful traffic. A website is your most powerful digital sales asset — but only when it's built with purpose. Design, development, user experience, page speed, SEO architecture, and conversion rate optimisation all need to work together from day one.",
          },
          {
            img: "/images/case-studies/gradient-5.jpg",
            text: "At Marketive, our website design and development services are built around a single question: will this website grow your business? Every decision — from the layout of your homepage to the structure of your navigation — is made with your target customer and your conversion goals at the centre. We don't just build websites. We build revenue-generating digital assets.",
          },
        ],
        stats: [
          "Conversion-focused design that turns website visitors into paying customers",
          "SEO-ready architecture built into the foundation, not bolted on afterwards",
          "Fast-loading, mobile-first builds that perform across all devices and screen sizes",
          "Scalable platforms that grow with your business without expensive rebuilds",
        ],
      },
      help: {
        tagline: "What We Help You With",
        heading: "Web Design & Development, End to End",
        description:
          "A complete range of website design and development services — from brand-new builds to complex ecommerce platforms — all delivered by our in-house Australian web development team.",
        cards: [
          { icon: "Monitor", title: "Custom Website Design & Development", text: "Fully bespoke websites designed and built from the ground up around your brand, audience, and business goals. No templates, no shortcuts — every pixel and every line of code is purpose-built for your specific requirements and your target customers." },
          { icon: "ShoppingCart", title: "Ecommerce Website Developer", text: "We are a specialist ecommerce website developer building online stores that are engineered to sell. From product architecture and payment gateway integration to abandoned cart recovery and conversion optimisation — we build ecommerce experiences that drive revenue around the clock." },
          { icon: "Smartphone", title: "Mobile-First Responsive Design", text: "Over 65% of Australian web traffic comes from mobile devices. Every website we build is designed mobile-first — ensuring your site looks flawless, loads fast, and converts effectively on every smartphone, tablet, and desktop your customers use to find you." },
          { icon: "Zap", title: "Website Speed & Performance Optimisation", text: "Page speed directly impacts your Google rankings and your conversion rate. Our web development company optimises every website for Core Web Vitals, server response times, image compression, and caching — delivering fast, high-performance sites that Google rewards and customers love." },
          { icon: "ShieldCheck", title: "Website Maintenance & Security", text: "Your website is a 24/7 business asset that needs active care. We provide ongoing website maintenance, security monitoring, plugin updates, uptime tracking, regular backups, and technical support — so your site stays fast, secure, and fully operational at all times." },
          { icon: "RefreshCw", title: "Website Redesign & Migration", text: "Outgrown your current site or moving platforms? Our web development agency manages complete website redesigns and CMS migrations — preserving your existing SEO equity, redirecting old URLs correctly, and delivering a significantly improved user experience without disrupting your business." },
        ],
      },
      included: {
        tagline: "What's Included",
        heading: "Everything in Your Web Development Package",
        description:
          "No ambiguous scope, no hidden costs. Every Marketive website design and development project includes a comprehensive set of deliverables — from strategy through to launch and beyond.",
        items: [
          { title: "Discovery & Requirements Workshop", text: "A structured briefing session to define your goals, target audience, technical requirements, content needs, competitor benchmarks, and desired functionality — before a single wireframe is drawn." },
          { title: "UX Sitemap & Information Architecture", text: "A logical page structure and navigation hierarchy designed around how your customers think and browse — ensuring every visitor can find what they need quickly and take the action you want them to take." },
          { title: "Wireframes & Conversion-Focused UI Design", text: "Low-fidelity wireframes followed by fully designed, pixel-perfect mockups — with conversion principles, visual hierarchy, and your brand identity built into every layout and component." },
          { title: "Responsive Development Across All Devices", text: "Full front-end and back-end development with a mobile-first approach — tested and optimised across desktop, tablet, and mobile to ensure a flawless experience on every screen size." },
          { title: "On-Page SEO Foundation", text: "SEO-optimised URL structures, meta titles, meta descriptions, heading hierarchy, schema markup, XML sitemap, and Google Search Console setup — so your site is ready to rank from day one of launch." },
          { title: "Speed & Core Web Vitals Optimisation", text: "Image compression, lazy loading, caching configuration, CDN setup, and code minification — ensuring your website meets Google's Core Web Vitals benchmarks and loads fast for every visitor." },
          { title: "Analytics, Tracking & Conversion Setup", text: "Google Analytics 4, Google Tag Manager, and conversion goal configuration — so every visit, form submission, phone call, and purchase is tracked accurately from the moment your site goes live." },
          { title: "Training, Launch Support & Handover", text: "A thorough walkthrough of your new website's CMS, a recorded training session for your team, full launch support, and post-launch technical checks — so you're confident and in control from day one." },
        ],
      },
      process: {
        tagline: "Our Strategy Process",
        heading: "Our Website Design & Development Process",
        description:
          "A proven four-phase framework we follow on every web development project — ensuring nothing is missed, no deadline is broken, and the final website exceeds your expectations.",
        steps: [
          { step: "1", title: "Discover & Plan", text: "We run a detailed discovery session to understand your business, audience, competitors, and technical requirements. From this, we produce a UX sitemap, project scope document, and timeline — your complete web project blueprint before design begins." },
          { step: "2", title: "Design & Prototype", text: "Our designers create wireframes and high-fidelity UI mockups for every key page — desktop and mobile. You review and approve the full visual design before a single line of code is written, so there are no surprises at the development stage." },
          { step: "3", title: "Develop & Test", text: "Our web development team builds your approved designs into a fully functional, high-performance website. Every component is tested across browsers and devices, SEO foundations are implemented, tracking is configured, and speed is optimised before launch." },
          { step: "4", title: "Launch & Support", text: "We manage a seamless, zero-downtime launch — migrating content, configuring hosting, setting up SSL, and completing a full pre-launch checklist. After launch, we provide ongoing support, maintenance, and performance monitoring to keep your site at its best." },
        ],
      },
      whyChoose: {
        tagline: "Why Choose Us",
        heading: "Why Choose Us as Your Web Development Agency",
        description:
          "We're not a template-pushing website factory. We're a specialist Australian web development agency that builds digital assets engineered to perform, convert, and scale.",
        items: [
          { icon: "Target", title: "Conversion-First Philosophy", text: "Every design decision we make is evaluated against one question: will this help convert a visitor into a customer? Aesthetics matter, but outcomes matter more — and our website design and development services are built around delivering measurable business results." },
          { icon: "MapPin", title: "100% In-House Australian Team", text: "No offshore outsourcing, no communication delays, no lost-in-translation briefs. Your project is handled entirely by our in-house Australian web development team — designers, developers, and project managers who are accessible, accountable, and invested in your success." },
          { icon: "Search", title: "SEO Built in from Day One", text: "Most web development companies build your website first and add SEO later. We build SEO into the architecture, URL structure, page speed, and content hierarchy from the very beginning — giving you a head start in Google rankings from the moment you launch." },
          { icon: "ShoppingCart", title: "Ecommerce Expertise", text: "As a specialist ecommerce website developer, we understand the unique requirements of online retail — product catalogues, payment gateways, inventory management, shipping integrations, and the conversion optimisation techniques that turn browsers into buyers at scale." },
          { icon: "BarChart3", title: "Data & Analytics Focused", text: "We configure full tracking and analytics from day one — Google Analytics 4, conversion goals, heatmaps, and user behaviour tools — so you can make informed decisions about your website's performance with real data, not guesswork." },
          { icon: "Link2", title: "Full-Service Marketing Integration", text: "As a full-service digital agency, we ensure your new website integrates seamlessly with your SEO strategy, Google Ads campaigns, and social media marketing — so every channel works together to drive traffic, leads, and revenue from a single cohesive platform." },
        ],
      },
      platforms: {
        tagline: "Platforms We Work With",
        heading: "Technologies We Build On",
        description:
          "Our web development company works across all major website platforms and technologies — recommending the right solution for your specific business needs, budget, and long-term growth plans.",
        items: ["WordPress", "Shopify", "Shopify Plus", "WooCommerce", "Webflow", "Squarespace", "BigCommerce", "Magento", "React.js", "Next.js", "Google Analytics 4", "Google Tag Manager"],
      },
      industries: {
        tagline: "Industries We Serve",
        heading: "Built for Your Sector",
        description:
          "Our website design and development services have delivered high-performing websites across a wide range of Australian industries — from local service businesses to national ecommerce brands.",
        items: [
          { icon: "ShoppingCart", label: "E-Commerce & Retail", text: "Online stores, product brands, D2C retailers" },
          { icon: "HeartPulse", label: "Healthcare & Medical", text: "Clinics, specialists, allied health, wellness" },
          { icon: "Building2", label: "Real Estate & Property", text: "Agencies, developers, property managers" },
          { icon: "Scale", label: "Legal & Professional", text: "Law firms, accountants, business consultants" },
          { icon: "Wrench", label: "Construction & Trades", text: "Builders, plumbers, electricians, landscapers" },
          { icon: "GraduationCap", label: "Education & Training", text: "RTOs, course providers, coaches, tutors" },
          { icon: "UtensilsCrossed", label: "Hospitality & Tourism", text: "Restaurants, hotels, tour operators, venues" },
          { icon: "Landmark", label: "Finance & Insurance", text: "Brokers, financial advisers, fintech, insurers" },
        ],
      },
      faqs: {
        tagline: "FAQs",
        heading: "Frequently Asked Questions",
        description: "Everything you want to know about our website design and development services before getting started.",
        items: [
          { q: "What does a web development agency do differently from a freelancer?", a: "A web development agency brings together multiple specialists — UX designers, UI designers, front-end developers, back-end developers, SEO strategists, and project managers — working as a coordinated team under one roof. This means your website benefits from expertise across every discipline simultaneously, rather than relying on a single person to cover all bases. At Marketive, our web development agency also integrates your website into your broader digital marketing strategy — ensuring your site is built to support SEO, Google Ads, and social media from day one, not treated as a standalone asset that's disconnected from your marketing channels." },
          { q: "How much does website design and development cost in Australia?", a: "Website design and development costs vary widely depending on the scope, complexity, and platform involved. A professional small business website typically starts from several thousand dollars, while a custom ecommerce website or complex web application can range significantly higher. Factors that influence cost include the number of pages, required functionality, the platform chosen, content migration needs, and whether ongoing maintenance is included. At Marketive, we provide a detailed, transparent proposal after an initial discovery conversation — with a clear scope of work, itemised deliverables, and no hidden fees. We never provide generic pricing before understanding your specific requirements." },
          { q: "How long does it take to build a website?", a: "Timelines vary based on the complexity of the project. A professional small-to-medium business website typically takes 6 to 10 weeks from kick-off to launch. A complex ecommerce website with custom functionality, large product catalogues, or integrations with third-party systems can take 10 to 20 weeks or more. The biggest factor affecting timelines — beyond project complexity — is the speed of client feedback and content supply. We manage this with a structured project plan and clear milestone deadlines from the start, keeping your project on track from discovery through to launch." },
          { q: "What platform do you recommend — WordPress, Shopify, or Webflow?", a: "Platform recommendation depends entirely on your business type, goals, and technical requirements. WordPress is highly flexible and ideal for content-heavy websites, service businesses, and SEO-focused projects — it powers over 40% of all websites globally and offers unparalleled customisation. Shopify is our preferred recommendation for ecommerce businesses, particularly as a specialist ecommerce website developer — it's purpose-built for online retail, scales beautifully, and has a robust ecosystem of sales and marketing tools. Webflow suits businesses that want pixel-perfect design control with a no-code CMS. We'll recommend the right platform for your specific situation after your discovery session." },
          { q: "Will my new website be optimised for Google search (SEO)?", a: "Yes — SEO optimisation is built into every website we design and develop, not added as an afterthought. Our website design and development services include SEO-friendly URL structures, proper heading hierarchy (H1–H6), optimised meta titles and descriptions, schema markup, XML sitemap generation, Google Search Console verification, and Core Web Vitals performance optimisation. We also ensure your site architecture supports long-term SEO growth by making it easy to add new content, pages, and blog posts. If you want to go further with an active ongoing SEO strategy, we offer that as a separate service that integrates seamlessly with your new website." },
          { q: "Do you build ecommerce websites, and what platforms do you use?", a: "Yes — ecommerce website development is a core speciality of our web development company. As an experienced ecommerce website developer, we build online stores on Shopify, Shopify Plus, WooCommerce, BigCommerce, and Magento, depending on your product range, order volume, and technical requirements. Our ecommerce builds include payment gateway integration (Stripe, Afterpay, PayPal, Zip), shipping calculator setup, product catalogue architecture, abandoned cart recovery, inventory management integration, and conversion rate optimisation from the outset. We also provide ongoing ecommerce support and performance optimisation after launch." },
          { q: "Will I be able to manage and update the website myself after launch?", a: "Absolutely. Every website we build includes a user-friendly content management system (CMS) that allows you and your team to update pages, add blog posts, change images, and manage products without any technical knowledge. We provide a personalised CMS training session after launch and a recorded walkthrough your team can refer back to at any time. We build websites to be genuinely manageable by non-technical users — so you're never dependent on us for routine content updates. Of course, for more complex changes, new page builds, or technical updates, our support team is always available." },
          { q: "Do you provide ongoing website maintenance and support?", a: "Yes. We offer monthly website maintenance and support packages covering plugin and theme updates, security monitoring and patching, performance checks, uptime monitoring, regular backups, and priority technical support. A website is a living business asset — platforms update, security vulnerabilities emerge, and performance degrades over time without active maintenance. Our maintenance plans ensure your website stays fast, secure, and fully functional long after launch, protecting both your investment and your online reputation. Maintenance packages are optional but strongly recommended for business-critical websites." },
          { q: "Can you redesign my existing website without starting from scratch?", a: "Yes — and a full redesign doesn't always mean rebuilding from zero. Our web development agency begins with a thorough audit of your existing website — assessing design, UX, page speed, SEO performance, and conversion metrics — to understand what's working and what needs to change. In many cases, we can redesign the visual layer and improve the user experience while preserving your existing content, URL structure, and hard-won SEO rankings. Where a full rebuild is the better choice, we manage the migration carefully — implementing 301 redirects for all changed URLs and preserving as much existing SEO equity as possible to protect your rankings during the transition." },
          { q: "Do you handle website hosting and domain registration?", a: "Yes — we can manage your entire website hosting setup, including recommending and configuring a high-performance hosting environment appropriate for your website's size and traffic requirements. We work with leading Australian and global hosting providers to ensure fast load times, strong uptime guarantees, and reliable technical infrastructure. We can also assist with domain registration and management, SSL certificate setup, email hosting recommendations, and DNS configuration. If you already have hosting in place, we're equally happy to work within your existing environment — we'll assess its suitability and recommend upgrades only where genuinely needed." },
        ],
      },
      finalCta: {
        heading: "Ready for a Website That Actually Grows Your Business?",
        description: "Get a free website audit and strategy consultation from our web development team. We'll assess your current site, identify what's holding it back, and show you exactly what our website design and development services can deliver for your business.",
      },
    },

    "sem": {
      seo: {
        title: "Search Engine Marketing (SEM) & Google Ads Services | Marketive",
        description:
          "Marketive delivers search engine marketing services that put your brand at the top of Google — and turn every dollar of ad spend into measurable leads, sales, and revenue.",
        canonical: "https://marketive.com.au/services/sem",
      },
      hero: {
        breadcrumb: "Search Engine Marketing",
        tagline: "Search Engine Marketing",
        heading: "Stop Paying for Clicks. Start Paying for Results.",
        paragraphs: [
          "Marketive delivers search engine marketing services that put your brand at the top of Google — and turn every dollar of ad spend into measurable leads, sales, and revenue.",
        ],
        primaryCta: { label: "Get in Touch", path: "/contact" },
        secondaryCta: { label: "View Case Studies", path: "/case-studies" },
      },
      whyMatters: {
        heading: "SEM Without a Strategy Burns Your Budget",
        blocks: [
          {
            img: "/images/services/process-1.jpg",
            text: "Search engine marketing is the fastest way to get your business in front of high-intent Australian buyers — but only when it's managed with precision. Poorly structured Google Ads campaigns bleed budget on the wrong clicks, wrong audiences, and wrong keywords, with nothing to show for it.",
          },
          {
            img: "/images/services/process-3.jpg",
            text: "At Marketive, our SEM marketing approach starts with a deep understanding of your customer journey, competitive landscape, and profit targets. Every campaign we build is engineered to maximise return on ad spend (ROAS) — not just impressions or clicks.",
          },
        ],
        stats: [
          "Campaigns structured around your actual cost-per-acquisition targets",
          "Bid strategies that use real conversion data, not guesswork",
          "Ad copy tested continuously to improve click-through and conversion rates",
          "Full-funnel tracking so every dollar is attributed to real business outcomes",
        ],
      },
      help: {
        tagline: "What We Help You With",
        heading: "SEM, End to End",
        description:
          "A complete suite of search engine marketing services — from Google Ads management to conversion optimisation — all under one roof.",
        cards: [
          { icon: "Target", title: "Google Ads Services", text: "End-to-end Google Ads management including campaign setup, keyword research, audience targeting, ad copy, and ongoing optimisation to maximise your return on every dollar spent." },
          { icon: "DollarSign", title: "Pay Per Click Services", text: "Our PPC services are built around one goal: profitable clicks. We identify the highest-intent search terms, eliminate wasted spend on irrelevant queries, and continuously refine bids to lower your cost per conversion." },
          { icon: "ShoppingBag", title: "Google Shopping Ads", text: "Put your products directly in front of buyers ready to purchase. We optimise your product feed, shopping campaigns, and bidding strategy to drive revenue from high-commercial-intent searches." },
          { icon: "Smartphone", title: "Display & Remarketing", text: "Re-engage visitors who didn't convert the first time. Our remarketing campaigns keep your brand visible across Google's Display Network, bringing warm prospects back to complete their purchase or enquiry." },
          { icon: "Youtube", title: "YouTube & Video Ads", text: "Capture attention at the top of the funnel with targeted YouTube advertising. We handle scripting guidance, audience segmentation, and performance tracking to make your video budget work harder." },
          { icon: "BarChart3", title: "Conversion Rate Optimisation", text: "More clicks mean nothing without conversions. We audit your landing pages, run A/B tests, and implement proven CRO techniques to turn paid traffic into real enquiries and sales." },
        ],
      },
      included: {
        tagline: "What's Included",
        heading: "Everything in Your SEM Package",
        description:
          "No hidden fees, no vague deliverables. Every Marketive SEM engagement covers the full scope of what it takes to run profitable paid search campaigns.",
        items: [
          { title: "Google Ads Account Audit", text: "A comprehensive review of your existing campaigns, wasted spend, quality scores, and structural issues — with a clear fix-it roadmap." },
          { title: "Keyword Research & Negative Lists", text: "Identifying the exact search terms your ideal customers use — and blocking the irrelevant ones that drain your budget." },
          { title: "Campaign Structure & Setup", text: "Logically structured ad groups, match types, and campaign hierarchies built to maximise quality score and relevance." },
          { title: "Ad Copywriting & Testing", text: "Compelling, benefit-led headlines and descriptions written for high CTR — with ongoing A/B testing to continually improve performance." },
          { title: "Bid Strategy & Budget Management", text: "Smart bidding configuration aligned to your CPA or ROAS targets, with daily budget monitoring to eliminate overspend." },
          { title: "Conversion Tracking Setup", text: "Full Google Tag Manager and GA4 implementation so every lead, call, form, and purchase is accurately attributed to your campaigns." },
          { title: "Landing Page Recommendations", text: "We audit the pages your ads send traffic to and provide actionable improvements to increase conversion rates and lower your cost per lead." },
          { title: "Monthly Reporting & Strategy Calls", text: "Plain-English performance reports plus a dedicated monthly call to review results, ad spend efficiency, and next-period priorities." },
        ],
      },
      process: {
        tagline: "Our Strategy Process",
        heading: "Our Search Engine Marketing Process",
        description:
          "A disciplined four-phase approach we apply to every SEM account — from first audit to full-scale growth.",
        steps: [
          { step: "1", title: "Audit & Research", text: "We analyse your current ad account (or competitors' strategies if you're starting fresh), identify wasted spend, map your highest-value keywords, and define your CPA targets." },
          { step: "2", title: "Build & Launch", text: "We architect your campaign structure, write compelling ad copy, configure bidding strategies, set up conversion tracking, and launch campaigns optimised from day one." },
          { step: "3", title: "Test & Optimise", text: "Using real performance data, we run continuous A/B tests on ads and landing pages, refine keyword lists, adjust bids, and eliminate underperforming elements weekly." },
          { step: "4", title: "Scale & Report", text: "Once campaigns are profitable, we identify opportunities to scale — new campaign types, expanded audiences, and higher budgets — while keeping your ROAS firmly on target." },
        ],
      },
      whyChoose: {
        tagline: "Why Choose Us",
        heading: "Why Choose Us as Your SEM Agency",
        description:
          "We're a specialist Australian SEM agency that's obsessed with one metric: your return on ad spend. Here's what sets us apart.",
        items: [
          { icon: "MapPin", title: "Australian Market Experts", text: "We understand how Australians search, compare, and buy. Our Google Ads services are tailored to local buying behaviour, seasonality, and competitive dynamics — not copy-pasted from overseas playbooks." },
          { icon: "TrendingUp", title: "ROAS-Obsessed Management", text: "Every decision we make — from keyword selection to bid adjustments — is driven by return on ad spend. We don't celebrate clicks; we celebrate profitable conversions that grow your business." },
          { icon: "FlaskConical", title: "Relentless Testing Culture", text: "We run structured A/B tests on ad copy, landing pages, audience segments, and bid strategies every week. Continuous testing is how we consistently lower CPAs and increase conversion rates over time." },
          { icon: "UserCheck", title: "Dedicated SEM Strategist", text: "You get a single, senior point of contact who knows your account inside out. No account managers handing you off to juniors — the person you speak to is the person managing your campaigns." },
          { icon: "Unlock", title: "You Own Your Account", text: "Your Google Ads account is yours — always. We work inside your own account, not ours. If you ever leave, you take everything with you: campaign history, data, and conversion tracking." },
          { icon: "ClipboardList", title: "Transparent Reporting", text: "No vanity metrics, no spin. Every report shows the numbers that matter to your business — cost per lead, cost per sale, ROAS, and revenue attributed — with honest commentary on what's working and what's next." },
        ],
      },
      platforms: {
        tagline: "Platforms We Work With",
        heading: "Tools We Advertise Across",
        description:
          "Our SEM marketing team is certified and experienced across the full Google advertising ecosystem and the analytics tools that power smarter decisions.",
        items: ["Google Ads", "Google Shopping", "Google Display Network", "YouTube Ads", "Google Analytics 4", "Google Tag Manager", "Google Merchant Centre", "Microsoft Advertising", "Looker Studio", "Shopify", "WooCommerce"],
      },
      industries: {
        tagline: "Industries We Serve",
        heading: "Built for Your Sector",
        description:
          "Our pay per click services and Google Ads expertise spans a wide range of Australian industries — from local service businesses to national e-commerce brands.",
        items: [
          { icon: "HeartPulse", label: "Healthcare & Medical", text: "Clinics, specialists, allied health" },
          { icon: "Building2", label: "Real Estate & Property", text: "Agents, developers, property managers" },
          { icon: "Scale", label: "Legal & Professional", text: "Law firms, accountants, consultants" },
          { icon: "ShoppingCart", label: "E-Commerce & Retail", text: "Online stores, product brands" },
          { icon: "Wrench", label: "Trades & Home Services", text: "Builders, plumbers, electricians" },
          { icon: "GraduationCap", label: "Education & Training", text: "RTOs, tutors, course providers" },
          { icon: "UtensilsCrossed", label: "Hospitality & Tourism", text: "Restaurants, hotels, experiences" },
          { icon: "Landmark", label: "Finance & Insurance", text: "Brokers, advisers, fintech" },
        ],
      },
      faqs: {
        tagline: "FAQs",
        heading: "Frequently Asked Questions",
        description: "Everything you need to know about our search engine marketing services before getting started.",
        items: [
          { q: "What is search engine marketing (SEM) and how does it work?", a: "Search engine marketing (SEM) is a form of digital advertising that places your business at the top of Google's search results through paid ads. Unlike SEO, which builds organic rankings over time, SEM delivers immediate visibility to people actively searching for your products or services. You set a budget, choose the keywords you want to appear for, and pay only when someone clicks your ad — which is why it's also called pay per click (PPC). Our SEM agency manages the entire process: keyword research, ad creation, bid management, and ongoing optimisation to ensure your budget generates the best possible return." },
          { q: "What's the difference between SEM, PPC, and Google Ads?", a: "These terms are closely related but not identical. Search engine marketing (SEM) is the broad category that covers all paid advertising on search engines. Pay per click (PPC) refers to the pricing model where you pay each time someone clicks your ad — it applies to search, display, shopping, and video ads alike. Google Ads is the specific platform (formerly Google AdWords) where the majority of SEM and PPC campaigns run. At Marketive, our PPC services and Google Ads services are the core of our SEM marketing offering, though we also manage Microsoft Advertising (Bing Ads) when relevant for your audience." },
          { q: "How much does it cost to run Google Ads in Australia?", a: "Google Ads costs vary significantly by industry, keyword competition, and targeting. In Australia, cost-per-click (CPC) can range from under $1 for low-competition niches to $30–$80+ per click in highly competitive sectors like legal, finance, or insurance. We typically recommend a minimum monthly ad spend of $1,500–$3,000 to generate enough data for meaningful optimisation. On top of ad spend, our management fee covers strategy, campaign management, reporting, and continuous optimisation. We'll provide a transparent budget recommendation during your free audit based on your specific goals and industry." },
          { q: "How quickly can I see results from search engine marketing?", a: "One of the biggest advantages of SEM over SEO is speed. Once your campaigns go live, your ads can start appearing in Google search results within hours and generating leads or sales within the first few days. However, it typically takes 4–8 weeks of active management and testing to reach peak efficiency — as we gather conversion data, refine your keyword lists, test ad variations, and tighten your audience targeting. By month three, most clients see significantly improved ROAS compared to their campaign launch benchmarks." },
          { q: "Do I need a minimum ad spend budget to work with you?", a: "We recommend a minimum monthly ad spend of $1,500 for our Google Ads services to ensure there's enough data to optimise effectively and generate a meaningful volume of leads or sales. Campaigns running on very small budgets are difficult to optimise because there simply aren't enough clicks and conversions to draw statistically reliable conclusions. For e-commerce or national campaigns, we typically recommend $5,000 or more in monthly ad spend to scale results. We'll advise the right investment level for your goals during your free strategy consultation." },
          { q: "Will I own my Google Ads account and campaign data?", a: "Absolutely — and this is non-negotiable for us. Your Google Ads account is set up in your name and under your Google login. We request manager access to run your campaigns, but you retain full ownership at all times. If you ever decide to leave Marketive, your entire account history, campaign structure, keyword lists, conversion data, and audience lists remain yours. We never hold your account hostage or lock you into a proprietary system. This is your most important asset in paid search, and it belongs to you." },
          { q: "What makes a good SEM agency — and how do I evaluate one?", a: "A trustworthy SEM agency should be able to clearly explain their strategy, show you real case studies with measurable results, give you access to your own account, and report on the metrics that actually matter to your business — not just impressions and clicks. Warning signs include agencies that hide your account access, charge a percentage of ad spend with no performance accountability, or focus reports on vanity metrics like \"reach.\" At Marketive, we benchmark our SEM marketing performance against your cost per acquisition and revenue generated, and we hold ourselves accountable to those numbers every month." },
          { q: "Can you take over and fix an underperforming Google Ads account?", a: "Yes — account rescues are one of the most common engagements we take on. If your current Google Ads campaigns are spending budget without delivering results, our team will conduct a thorough audit to identify exactly what's going wrong. Common issues include poor campaign structure, overly broad keyword match types, missing negative keyword lists, no conversion tracking, generic ad copy, and landing pages that aren't optimised to convert. We'll present our findings with a clear action plan and, once you approve it, begin restructuring and optimising your account immediately." },
          { q: "Do you manage SEM for e-commerce businesses specifically?", a: "Yes. E-commerce SEM requires a different approach to lead-generation campaigns — particularly around Google Shopping, product feed optimisation, dynamic remarketing, and Performance Max campaigns. Our Google Ads services for e-commerce clients include shopping campaign management, Merchant Centre optimisation, cart-abandonment remarketing, and revenue-focused ROAS tracking through GA4. Whether you're on Shopify, WooCommerce, Magento, or BigCommerce, we have experience integrating your store's product data with Google's advertising ecosystem to drive profitable online sales." },
          { q: "Do you lock clients into long-term contracts for SEM services?", a: "No. We operate on rolling monthly agreements with no lock-in contracts. We believe a good SEM agency earns your ongoing business through results, not fine print. That said, we do ask that new clients commit to a minimum of three months when starting a new account — this is the realistic timeframe needed to build campaign data, complete testing cycles, and demonstrate meaningful performance improvements. After that initial period, you're free to continue on a month-to-month basis with 30 days' notice to cancel." },
        ],
      },
      finalCta: {
        heading: "Ready to Make Your Ad Spend Work Harder?",
        description: "Get a free Google Ads audit from our SEM team. We'll identify exactly where your budget is being wasted and show you the revenue you're leaving on the table.",
      },
    },

    "seo": {
      seo: {
        title: "SEO Agency & Search Engine Optimisation Services | Marketive",
        description:
          "Marketive delivers data-led search engine optimisation services that put your business in front of the right Australians — at the exact moment they're searching.",
        canonical: "https://marketive.com.au/services/seo",
      },
      hero: {
        breadcrumb: "Search Engine Optimisation",
        tagline: "Search Engine Optimisation",
        heading: "Rank Higher. Get Found. Grow Faster.",
        paragraphs: [
          "Marketive delivers data-led search engine optimisation services that put your business in front of the right Australians — at the exact moment they're searching.",
        ],
        primaryCta: { label: "Get in Touch", path: "/contact" },
        secondaryCta: { label: "View Case Studies", path: "/case-studies" },
      },
      whyMatters: {
        heading: "SEO Without a Strategy Is Just Guessing",
        blocks: [
          {
            img: "/images/case-studies/gradient-6.jpg",
            text: "Ranking on Google isn't luck — it's the result of a deliberate, structured plan. At Marketive, every campaign starts with deep research into your market, competitors, and audience intent. Our search engine optimisation services are engineered to deliver compounding results that grow your revenue month after month.",
          },
          {
            img: "/images/blog/gradient-5.jpg",
            text: "Whether you're a local tradie in Melbourne or a national e-commerce brand, we build SEO strategies that are precise, scalable, and tailored to the Australian search landscape.",
          },
        ],
        stats: [
          "Keyword strategies built on real Australian search behaviour",
          "Technical foundations that search engines reward",
          "Content that converts visitors into paying customers",
          "Transparent reporting — you always know what's working",
        ],
      },
      help: {
        tagline: "What We Help You With",
        heading: "SEO, End to End",
        description:
          "A full suite of search engine optimisation services — from local visibility to national dominance.",
        cards: [
          { icon: "Search", title: "Technical SEO", text: "We audit and fix the under-the-hood issues holding your site back — crawlability, site speed, Core Web Vitals, structured data, and indexation errors that Google penalises." },
          { icon: "MapPin", title: "Local SEO Services", text: "Dominate your suburb and city. Our local SEO services optimise your Google Business Profile, citations, and geo-targeted content so nearby customers find you first, not your competitors." },
          { icon: "PenLine", title: "SEO Content Strategy", text: "Authority comes from relevant, well-structured content. We research, write, and optimise content that ranks for high-intent keywords and converts organic visitors into leads." },
          { icon: "Link2", title: "Link Building", text: "Earn backlinks that actually move the needle. Our Australian-focused outreach and digital PR campaigns build domain authority through legitimate, white-hat link acquisition." },
          { icon: "ShoppingCart", title: "E-Commerce SEO", text: "Turn product pages into traffic magnets. We optimise category hierarchies, product schema, and site architecture so your online store outranks larger competitors." },
          { icon: "BarChart3", title: "SEO Reporting & Analytics", text: "Clear, jargon-free dashboards showing keyword rankings, traffic, conversions, and ROI. You'll always know exactly where your investment is going and what it's returning." },
        ],
      },
      included: {
        tagline: "What's Included",
        heading: "Everything in Your SEO Package",
        description:
          "No hidden extras, no bolt-on fees. Every Marketive SEO engagement includes a comprehensive set of deliverables from day one.",
        items: [
          { title: "Full Technical SEO Audit", text: "Site crawl, speed analysis, Core Web Vitals, and indexation review with prioritised fixes." },
          { title: "Keyword Research & Mapping", text: "In-depth research into Australian search volume, intent, and competitor keyword gaps." },
          { title: "On-Page Optimisation", text: "Title tags, meta descriptions, heading hierarchy, internal linking, and schema markup." },
          { title: "Local SEO & Google Business Profile", text: "GBP optimisation, NAP consistency, local citations, and review management guidance." },
          { title: "Content Creation & Optimisation", text: "SEO-first blogs, landing pages, and service pages written for both people and search engines." },
          { title: "Link Building & Authority Growth", text: "White-hat backlink campaigns targeting relevant Australian domains and directories." },
          { title: "Competitor Analysis", text: "Ongoing monitoring of your top competitors' rankings, content, and backlink profiles." },
          { title: "Monthly Reporting & Strategy Calls", text: "Plain-English reports plus a dedicated strategy session to review progress and direction." },
        ],
      },
      process: {
        tagline: "Our Strategy Process",
        heading: "Our SEO Strategy Process",
        description:
          "A proven four-phase framework we use for every client — from initial discovery to sustained ranking growth.",
        steps: [
          { step: "1", title: "Discover & Audit", text: "We analyse your website, target keywords, competitors, and existing organic performance to establish a clear baseline and uncover quick wins." },
          { step: "2", title: "Strategy & Roadmap", text: "Using your audit findings, we build a 90-day SEO roadmap that prioritises the highest-impact technical fixes, content opportunities, and link targets." },
          { step: "3", title: "Execute & Optimise", text: "Our team implements on-page changes, publishes optimised content, builds authoritative links, and refines targeting as data comes in." },
          { step: "4", title: "Report & Scale", text: "Monthly reporting keeps you fully informed. As rankings improve, we identify new keyword clusters and opportunities to expand your organic reach." },
        ],
      },
      whyChoose: {
        tagline: "Why Choose Us",
        heading: "Why Choose Us as Your SEO Agency",
        description:
          "We're not a faceless agency churning out cookie-cutter campaigns. We're a specialist Australian SEO team that treats your growth as our own.",
        items: [
          { icon: "MapPin", title: "100% Australian Focus", text: "We understand the Australian market, search behaviour, and Google's local algorithm nuances. No generic offshore playbooks — only strategies built for .com.au success." },
          { icon: "TrendingUp", title: "ROI-Driven Approach", text: "Rankings are a means, not the end. We tie every SEO activity to business outcomes — leads, sales, and revenue — so you can measure real return on investment." },
          { icon: "Microscope", title: "Data & Research Led", text: "Every decision we make is grounded in data. From keyword selection to content topics, we let Australian search data guide our strategy — not assumptions." },
          { icon: "Handshake", title: "Dedicated Account Team", text: "You'll work directly with your own SEO strategist, not a rotating roster of juniors. One point of contact, full accountability, and proactive communication every step of the way." },
          { icon: "Zap", title: "No Lock-In Contracts", text: "We earn your business every month. Our search engine optimisation services are delivered on rolling agreements — stay because the results are undeniable, not because you're locked in." },
          { icon: "ShieldCheck", title: "100% White-Hat Methods", text: "We only use ethical, Google-approved SEO practices. No shortcuts, no black-hat tricks — just sustainable rankings that protect your brand's long-term reputation." },
        ],
      },
      platforms: {
        tagline: "Platforms We Work With",
        heading: "Tools & Platforms We Master",
        description:
          "Our SEO services integrate seamlessly with your existing technology stack — whatever platform you're on, we've got you covered.",
        items: ["WordPress", "Shopify", "Webflow", "Squarespace", "Wix", "Magento", "BigCommerce", "HubSpot CMS", "Google Search Console", "Google Analytics 4", "Ahrefs", "Semrush"],
      },
      industries: {
        tagline: "Industries We Serve",
        heading: "Built for Your Sector",
        description:
          "Our search engine optimisation services have delivered results across a broad range of Australian industries.",
        items: [
          { icon: "HeartPulse", label: "Healthcare & Medical", text: "Clinics, specialists, allied health" },
          { icon: "Building2", label: "Real Estate & Property", text: "Agents, developers, property managers" },
          { icon: "Scale", label: "Legal & Professional", text: "Law firms, accountants, consultants" },
          { icon: "ShoppingCart", label: "E-Commerce & Retail", text: "Online stores, product brands" },
          { icon: "Wrench", label: "Trades & Home Services", text: "Builders, plumbers, electricians" },
          { icon: "GraduationCap", label: "Education & Training", text: "RTOs, tutors, course providers" },
          { icon: "UtensilsCrossed", label: "Hospitality & Tourism", text: "Restaurants, hotels, experiences" },
          { icon: "Landmark", label: "Finance & Insurance", text: "Brokers, advisers, fintech" },
        ],
      },
      faqs: {
        tagline: "FAQs",
        heading: "Frequently Asked Questions",
        description: "Got questions about our SEO services? Here are the ones we hear most often.",
        items: [
          { q: "What is SEO and why does my Australian business need it?", a: "Search engine optimisation (SEO) is the process of improving your website so it appears higher in Google's organic (unpaid) search results. When Australians search for your product or service, SEO determines whether they find you or your competitor. Unlike paid ads that stop the moment you stop spending, SEO builds compounding, long-term visibility that drives consistent traffic and leads without ongoing ad spend. If your customers are searching online — and they are — you need an SEO strategy." },
          { q: "How long does SEO take to show results?", a: "SEO is a medium-to-long-term investment. Most clients begin to see measurable improvements in keyword rankings and organic traffic within 3–6 months of consistent optimisation. Competitive industries or newer websites may take 6–12 months to reach page-one rankings for high-traffic keywords. However, technical fixes and local SEO improvements can deliver noticeable results within the first 4–8 weeks. We set realistic expectations from day one and show you progress every month." },
          { q: "What's the difference between local SEO and general SEO services?", a: "General search engine optimisation services focus on improving organic rankings broadly — targeting keywords at a national or industry level. Local SEO services are specifically designed to help businesses rank in location-based searches like \"plumber in Brisbane\" or \"dentist near me.\" Local SEO involves optimising your Google Business Profile, building local citations, managing online reviews, and creating geo-targeted content. If you serve customers in specific Australian cities, suburbs, or regions, local SEO is essential for capturing that intent-driven local traffic." },
          { q: "How much do your SEO services cost?", a: "Our SEO packages are tailored to the size, goals, and competitiveness of your business. Pricing varies depending on the scope of work — local SEO services for a single-location business are priced differently from a national e-commerce SEO campaign. We offer transparent, fixed monthly retainers with no hidden fees. Contact us for a free SEO audit and proposal, and we'll recommend the right investment level to achieve your growth goals." },
          { q: "Will SEO work for my industry or niche?", a: "Yes — SEO works for virtually every industry, including healthcare, real estate, legal, trades, retail, hospitality, finance, and education. As long as your target customers are using Google to search for what you offer (and in Australia, almost all of them are), there's a significant SEO opportunity to capture. Our team has delivered results across dozens of Australian industries, and we'll conduct industry-specific keyword research to identify your biggest opportunities before we begin." },
          { q: "Do you offer SEO services for businesses outside major cities?", a: "Absolutely. Our local SEO services are particularly effective for regional and rural Australian businesses, where there's often less competition and faster ranking opportunities. Whether you're in Sydney, Melbourne, Brisbane, Perth, Adelaide, or a regional town, we can build a geo-targeted strategy that captures local search demand. We work with clients across all states and territories — location is no barrier for our team." },
          { q: "What makes Marketive different from other SEO agencies?", a: "Unlike many SEO agencies that rely on templated campaigns, Marketive builds every strategy from scratch based on your specific market, competitors, and business goals. We're 100% focused on the Australian market, which means we understand the nuances of Google.com.au search behaviour and local ranking factors. We also operate without lock-in contracts — our clients stay because we deliver results, not because they're contractually obligated. You'll have a dedicated strategist, not a rotating team, and transparent monthly reporting that shows exactly what your investment is achieving." },
          { q: "What does the onboarding process look like when I start with you?", a: "When you engage Marketive, we begin with a comprehensive discovery session to understand your business, goals, and target audience. From there, we conduct a full technical SEO audit, keyword research, and competitor analysis. Within the first two weeks, you'll receive a clear, prioritised SEO roadmap outlining what we'll focus on and why. Our onboarding is designed to be smooth and efficient — most clients have their strategy confirmed and implementation underway within 7–14 days of signing." },
          { q: "Can I track the progress of my SEO campaign?", a: "Yes — complete transparency is one of our core commitments. Every client receives access to a live reporting dashboard showing keyword rankings, organic traffic, click-through rates, and conversion data. We also provide a detailed monthly report with plain-English commentary, and we schedule a regular strategy call to walk through results, answer questions, and adjust our approach based on what the data shows. You'll never be left wondering what's happening with your campaign." },
          { q: "Do I need to sign a long-term contract?", a: "No. We operate on flexible, rolling monthly agreements — there are no lock-in contracts or long-term commitments required. We believe the quality of our work and the results we deliver should be the reason you stay with us, not a contract. That said, we do recommend committing to at least 6 months to allow the SEO process to fully take effect — sustainable rankings are built over time, not overnight." },
        ],
      },
      finalCta: {
        heading: "Ready to Rank Higher Across Australia?",
        description: "Book a free SEO audit and strategy session with our team. We'll analyse your current rankings, identify your biggest opportunities, and show you exactly what it will take to outrank your competitors.",
      },
    },

  },
};

export default content;
