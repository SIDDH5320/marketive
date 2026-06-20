// ============================================================
// MARKETIVE — SINGLE EDITABLE CONTENT FILE
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
    cta: { label: "Get a Free Audit", path: "/contact" },
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
        "From strategy to execution, we cover every pillar of digital growth — so you can focus on running your business.",
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
            "Compelling content that educates, engages, and converts — from blogs to video scripts.",
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
            "They don't just run campaigns — they build growth engines. Marketive is an extension of our team.",
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
        "Book a free 30-minute strategy call and discover how we can 10x your digital presence.",
      cta: { label: "Book a Free Strategy Call", path: "/contact" },
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
        "We don't just execute tactics — we architect growth. Every service is powered by data, refined by creativity, and measured by results.",
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
        cta: { label: "Get Your Free Strategy Session", path: "/contact" },
      },
      {
        id: "seo",
        icon: "Search",
        title: "Search Engine Optimization",
        tagline: "Own Page One, Organically",
        description:
          "Our SEO methodology goes beyond keywords. We build topical authority, fix technical foundations, and earn high-quality backlinks — creating a compounding asset that drives free traffic 24/7.",
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
      },
      {
        id: "social-media",
        icon: "Share2",
        title: "Social Media Marketing",
        tagline: "Build Community, Drive Revenue",
        description:
          "We create scroll-stopping social strategies across Instagram, LinkedIn, Facebook, TikTok, and X. From organic community building to paid social campaigns — we grow your brand where your audience lives.",
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
      },
      {
        id: "marketing-automation",
        icon: "Zap",
        title: "Marketing Automation",
        tagline: "Scale Without the Chaos",
        description:
          "We implement and optimize marketing automation platforms — from HubSpot to Klaviyo — building intelligent workflows that nurture leads, re-engage customers, and drive revenue on autopilot.",
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
        "Explore real-world success stories where strategy meets execution — and the numbers do the talking.",
    },
    categories: ["All", "SEO", "SEM", "Content", "Social Media", "Automation"],
    items: [
      {
        id: "techflow-seo",
        title: "TechFlow SaaS — 2,150% Organic Traffic Growth",
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
        title: "UrbanNest — 340% ROAS Improvement",
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
        title: "GreenLeaf — Content-Led Brand Authority",
        industry: "Sustainability / E-commerce",
        category: "Content",
        image: "gradient-3",
        problem:
          "GreenLeaf had strong products but zero brand recognition. Their blog was dormant, social engagement was minimal, and they had no thought leadership in the sustainability space.",
        solution:
          "We developed a comprehensive content ecosystem — SEO blog content, a weekly newsletter, a podcast series, and a sustainability report that got picked up by major publications.",
        results: [
          { metric: "Blog Traffic", value: "+1,800%" },
          { metric: "Newsletter Subscribers", value: "0 → 28K" },
          { metric: "Media Mentions", value: "45+" },
          { metric: "Revenue from Content", value: "+$180K" },
        ],
      },
      {
        id: "novahealth-social",
        title: "NovaHealth — Social Media Revenue Engine",
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
        title: "BrightPath — Marketing Automation Overhaul",
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
        title: "CloudSync — Enterprise SEO Domination",
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
      heading: "We're Not Just an Agency — We're Your Growth Partner",
      description:
        "Founded in Melbourne, Marketive was born from a simple belief: every business deserves world-class digital marketing. We combine deep expertise, cutting-edge technology, and genuine partnership to deliver results that matter.",
    },
    mission: {
      heading: "Our Mission",
      description:
        "To democratize growth. We make enterprise-level digital marketing strategies accessible to businesses of every size — from ambitious startups to established enterprises.",
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
Experience, Expertise, Authoritativeness, and Trustworthiness aren't just ranking factors — they're the foundation of sustainable SEO.

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
There's no magic bullet — just disciplined execution of fundamentals. Follow this framework consistently, and you'll see transformative results.
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
The content program generated 28,000 newsletter subscribers, 340 qualified leads, and $2M in directly attributed revenue. The best part? It compounds — the content continues to drive results long after publication.
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
Every platform is prioritizing video. Reels, Shorts, TikToks, LinkedIn video — if you're not creating video content, you're invisible to algorithms.

## Community Over Followers
A engaged community of 1,000 is worth more than 100,000 passive followers. Focus on building genuine connections, responding to comments, and creating conversation.
        `,
      },
      {
        id: "marketing-automation-guide",
        title: "Marketing Automation: The Complete Setup Guide",
        excerpt:
          "Everything you need to know about implementing marketing automation — from platform selection to your first workflow.",
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
          "A comprehensive checklist covering every aspect of digital marketing strategy — bookmark this one.",
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
      email: "hello@marketive.com.au",
      phone: "+61 3 9000 1234",
      address: "Level 12, 456 Collins Street, Melbourne VIC 3000",
      hours: "Mon – Fri: 9:00 AM – 6:00 PM AEST",
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
        "Book a free 30-minute strategy call directly with our team. No pressure, no obligations — just actionable advice.",
      cta: { label: "Book a Free Call", path: "/contact" },
    },
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
      { label: "Strategy & Consulting", path: "/services#strategy-consulting" },
      { label: "SEO", path: "/services#seo" },
      { label: "SEM / Google Ads", path: "/services#sem" },
      { label: "Content Strategy", path: "/services#content-strategy" },
      { label: "Social Media", path: "/services#social-media" },
      { label: "Marketing Automation", path: "/services#marketing-automation" },
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
};

export default content;
