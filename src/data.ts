export const profile = {
  name: "NAVEEN KUMAR",
  title: "Solution Architect \u00b7 17+ Years",
  greeting: "Hello, I'm",
  avatar: "https://avatars.githubusercontent.com/u/5559390",
  contact: {
    location: "Bengaluru, India",
    email: "spk2naveen@hotmail.com",
  },
  education: ["B.E. ECE 2009", "Vel Tech Engineering College", "Chennai"],
  summaryHtml:
    "Solution Architect who builds <strong>Cloud-Native Distributed Systems</strong> from the ground up and modernizes legacy monoliths into portable, cloud-agnostic platforms. I lean on <strong>.NET Aspire</strong> &amp; <strong>DAPR</strong> to keep workloads scalable and maintainable as teams grow.",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/spk2naveen", display: "linkedin.com/in/spk2naveen", brand: "linkedin" as const },
    { label: "GitHub", href: "https://github.com/spicycoder", display: "github.com/spicycoder", brand: "github" as const },
    { label: "Profile", href: "https://spicycoder.github.io/naveen", display: "spicycoder.github.io/naveen", brand: "globe" as const },
    { label: "Email", href: "mailto:spk2naveen@hotmail.com", display: "spk2naveen@hotmail.com", brand: "mail" as const },
  ],
}

export const focusAreas = [
  "Cloud-Native Architecture",
  "Legacy Modernization",
  "Greenfield Distributed Systems",
]

export const contributions = [
  {
    title: "Building Cloud-Native Systems with .NET Aspire & DAPR",
    desc: "Authored a hands-on course showing how to build portable, cloud-agnostic distributed systems using Aspire orchestration and DAPR sidecars.",
    href: "https://netrecipes.github.io/courses/dapr-aspire/",
    display: "netrecipes.github.io/courses/dapr-aspire",
    brand: "globe" as const,
  },
  {
    title: "Cloud-Native CI/CD Template",
    desc: "Open-source scaffold for bootstrapping cloud-native distributed apps with .NET Aspire and DAPR — reproducible pipelines, observability, and deployment out of the box.",
    href: "https://github.com/spicycoder/CICDTemplate",
    display: "github.com/spicycoder/CICDTemplate",
    brand: "github" as const,
  },
]

export const experience = [
  {
    company: "Altimetrik",
    place: "Bengaluru",
    domain: "Fintech",
    dates: ["02/2026 - Present"],
    role: "Principal Engineer",
    points: [
      "Playing the role of Solution Architect",
      "Modernizing Legacy Systems into Cloud-Native Distributed-Systems for Fintech Domain",
      "Architecting and delivering AI-powered business capabilities using Microsoft.Extensions.AI \u2014 sentiment analysis, account balance prediction/projection, and adaptive smart reminders and suggestions",
      "Kept the platform portable and cloud-agnostic by abstracting providers behind .NET Aspire + DAPR, so it scales on Kubernetes without rewriting for each environment",
    ],
  },
  {
    company: "Eurofins IT Solutions",
    place: "Bengaluru",
    domain: "Ecommerce",
    dates: ["08/2024 - 12/2025", "06/2016 - 08/2019"],
    role: "Solution Architect (Contractor) \u00b7 Module Lead",
    points: [
      "Modernized legacy eCommerce ordering platform into modular, cloud-native distributed system",
      "Designed microservices with sidecar-based communication, enforcing clear service boundaries",
      "Defined vertical slice architecture, domain models, observability standards, deployment strategies",
      "Worked cross-functionally to align architecture with product vision and operational workflows",
      "Greenfield-built new commerce services on Aspire/DAPR, proving the same patterns work from scratch \u2014 not just as a legacy fix",
    ],
  },
  {
    company: "JustAnswer",
    place: "Bengaluru",
    domain: "Internet",
    dates: ["04/2021 - 08/2024", "08/2019 - 08/2020"],
    role: "Associate Architect \u00b7 Senior Software Engineer",
    points: [
      "Led AI-driven modernization of customer experience platforms across email, chat, and voice",
      "Guided transition from in-house AI solutions to scalable, API-based integrations",
      "Designed intent recognition and intelligent automation workflows to reduce agent load",
      "Delivered AI features for sentiment analysis, conversational routing, and agent assist",
      "Made the CX platform horizontally scalable via stateless services and cached inference, keeping it maintainable as traffic and models churned",
    ],
  },
  {
    company: "Talent Recruit Software",
    place: "Bengaluru",
    domain: "ATS",
    dates: ["08/2020 - 04/2021"],
    role: "Vice President - Technology",
    points: [
      "Owned engineering execution and delivery across the organization",
      "Built autonomous, high-performing teams with clear accountability for product outcomes",
      "Aligned engineering priorities with business and customer needs",
    ],
  },
  {
    company: "ABCO Advisory Services",
    place: "Chennai",
    domain: "Healthcare",
    dates: ["10/2014 - 06/2016", "05/2012 - 06/2013"],
    role: "Software Engineer",
    points: [
      "Built and enhanced healthcare communication platform for patient engagement",
      "Implemented workflow-driven communication and reporting with focus on data integrity",
    ],
  },
  {
    company: "Kony, Inc.",
    place: "Hyderabad",
    domain: "Mobile",
    dates: ["06/2013 - 10/2014"],
    role: "Senior Product Developer",
    points: [
      "Contributed to cross-platform application runtime for XAML-based apps",
      "Built runtime and tooling abstractions for enterprise-grade write-once development",
    ],
  },
  {
    company: "iLink Systems",
    place: "Chennai",
    domain: "Telecommunication",
    dates: ["09/2011 - 05/2012"],
    role: "Software Engineer",
    points: [
      "Built B2B communication platform with document processing, versioning, notifications",
      "Designed backend workflows for templated report generation and scheduled delivery",
    ],
  },
  {
    company: "SrinSoft Technologies",
    place: "Chennai",
    domain: "Ecommerce",
    dates: ["06/2009 - 05/2011"],
    role: "Technical Lead",
    points: [
      "Led B2B eCommerce platform development for procurement and sales operations",
      "Built CAD integrations and automation modules with engineering teams",
    ],
  },
]

export const skills = [
  { group: "PLATFORMS", tags: [".NET (Core & Framework)", ".NET Aspire", "Azure", "Kubernetes"] },
  { group: "ARCHITECTURE", tags: ["Clean Architecture", "Vertical Slice", "DDD", "SOLID", "GoF Patterns"] },
  { group: "CLOUD NATIVE", tags: ["DAPR", "YARP", "Ocelot", "Podman", "Docker", "Helm"] },
  { group: "DATA", tags: ["MS SQL Server", "PostgreSQL", "Redis", "MongoDB", "EF Core", "Dapper", "Repository & UoW", "CQRS"] },
  { group: "AI", tags: ["Microsoft.Extensions.AI", "Augment Code", "OpenCode", "Microsoft Presidio"] },
  { group: "FRONTEND & UI", tags: ["Angular", "React", "TypeScript", "TailwindCSS", "BFF Patterns", "Blazor", "WPF / Windows Forms"] },
  { group: "QUALITY & TESTING", tags: ["xUnit", "nUnit", "NSubstitute", "Moq", "WireMock.NET", "Test Pyramid", "TDD", "BDD", "Test Containers"] },
  { group: "OBSERVABILITY", tags: ["OpenTelemetry", "Serilog", "Grafana", "Seq", "Aspire Dashboard"] },
  { group: "MESSAGING & CACHING", tags: ["RabbitMQ", "Redis Streams", "Redis", "Valkey", "Garnet", "Hybrid/Fusion Cache"] },
]

export const navItems = [
  { id: "intro", label: "About" },
  { id: "journey", label: "Experience" },
  { id: "skills", label: "Skills" },
]
