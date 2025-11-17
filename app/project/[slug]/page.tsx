import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Code2, Layers, Star, Box } from "lucide-react";
import Image from "next/image";

// Project data with detailed information
const projects = {
  "heidi-ai-care-assistant": {
    title: "Heidi AI Care Assistant",
    description:
      "Flask-based post-surgery care assistant powered by the Heidi AI REST API for audio transcription and AI-driven care planning.",
    longDescription:
      "A production-ready post-surgery care assistant built with Flask and vanilla JavaScript. Features secure file uploads, audio transcription via Heidi AI API, SSE-driven streaming responses, and automated pytest suites. Delivers a clinician-focused UI with drag-and-drop functionality and real-time AI updates.",
    image: "/healthcare.png",
    technologies: ["Flask", "Python", "JavaScript", "HTML/CSS", "Heidi AI API", "pytest", "Docker"],
    github: "https://github.com/xl-c111/heidi_AI_integration_project",
    demo: "https://github.com/xl-c111/heidi_AI_integration_project",
    features: [
      "🏗️ Flask Backend Architecture - Vanilla JS/HTML/CSS frontend with secure uploads, audio transcription, and SSE-driven AI responses",
      "🤖 Heidi AI Integration - JWT auth, sessions, SSE with retry/fallback logic for structured care plans and consult notes",
      "🧪 Automated Testing - pytest suites with mocked Heidi endpoints covering authentication, transcription, and streaming workflows",
      "👨‍⚕️ Clinician-Focused UI - Drag-and-drop uploads, progress indicators, and live AI updates for streamlined workflows",
      "🔐 Secure File Handling - Encrypted uploads and secure session management",
      "⚡ Real-time Streaming - Server-Sent Events (SSE) for live AI response updates",
      "🐳 Docker Deployment - Containerized application for consistent deployment",
    ],
    stats: {
      technologies: 7,
      features: 7,
    },
  },
  flora: {
    title: "Flora",
    description:
      "Full-stack flower marketplace with React/TypeScript frontend, Express backend, and complete e-commerce functionality.",
    longDescription:
      "A production-ready flower marketplace built with React, TypeScript, and Express. Features secure checkout with Stripe, Auth0 authentication, AI-powered gift messages via Gemini AI, automated email confirmations, and full Docker containerization with CI/CD deployment.",
    image: "/flora.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "Prisma ORM",
      "PostgreSQL",
      "Stripe",
      "Auth0",
      "Nodemailer",
      "Gemini AI",
      "Docker",
      "GitHub Actions",
    ],
    github: "https://github.com/xl-c111/Flora",
    demo: "https://dzmu16crq41il.cloudfront.net/",
    features: [
      "🌸 Full-stack Marketplace - Browse flowers, manage checkout, and handle subscriptions",
      "🔐 Auth0 Authentication - Secure user authentication and authorization",
      "💳 Stripe Integration - Secure checkout with Stripe API (test mode) and webhook handling",
      "📧 Automated Emails - Confirmation emails via Nodemailer for order updates",
      "🤖 AI Gift Messages - Gemini AI integration for personalized gift message generation",
      "🐳 Docker Containerization - Containerized frontend, backend, database, and Stripe-CLI services",
      "🚀 CI/CD Pipeline - GitHub Actions for automated testing and seamless deployment",
    ],
    stats: {
      technologies: 11,
      features: 7,
    },
  },
  "hbnb-luxe-airbnb-clone": {
    title: "HBnB - Luxe Airbnb Clone",
    description:
      "Full-stack Airbnb clone with payment processing, featuring secure Stripe integration, AWS deployment, and optimized database performance.",
    longDescription:
      "A production-ready Airbnb clone featuring Stripe payment integration, AWS deployment, and 70% database performance optimization. Built with Flask, React, and MySQL, this platform includes complete booking management, role-based dashboards, and RESTful APIs with 85%+ test coverage.",
    image: "/hbnb.jpg",
    technologies: ["Python", "Flask", "React", "Tailwind CSS", "MySQL", "Stripe API", "AWS"],
    github: "https://github.com/xl-c111/holbertonschool-hbnb",
    demo: "https://d2gfqpg21nkiyl.cloudfront.net/",
    features: [
      "💳 Stripe Payment Intents API with secure server-side verification and custom checkout flow",
      "☁️ AWS deployment with S3/CloudFront frontend and EC2 backend infrastructure",
      "📋 Complete booking lifecycle with cancellations, reviews, and role-based guest/host dashboards",
      "⚡ 70% database optimization (9→3 queries) with JWT authentication and bcrypt hashing",
      "🏗️ Multi-tenant RESTful APIs with Swagger docs and 36+ unit tests (85%+ coverage)",
      "🎨 Responsive React UI with date-range selection and real-time availability checking",
    ],
    stats: {
      technologies: 7,
      features: 6,
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="min-h-screen pt-6 sm:pt-8 pb-12 sm:pb-16 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 text-base sm:text-lg text-muted-foreground">
            <Link
              href="/portfolio"
              className="flex items-center gap-2 hover:text-[#43766C] transition-all hover:gap-3 group"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
              <span className="font-medium">Back to Projects</span>
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#43766C] via-[#5a8a7a] to-[#43766C] bg-clip-text text-transparent animate-gradient mb-6 sm:mb-8">
            {project.title}
          </h1>

        {/* Mobile Image - Only visible on mobile */}
        <div className="lg:hidden mb-6 sm:mb-8">
          <div className="rounded-xl overflow-hidden border border-[#43766C]/30">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 600px, 100vw"
              className="w-full h-auto"
            />
          </div>
        </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            {/* Left Column - All Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="gradient-border bg-card/80 backdrop-blur-sm hover:glow-sage transition-all group">
                  <CardContent className="py-0 px-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#43766C]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Code2 className="h-5 w-5 text-[#43766C]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground leading-none">
                        {project.stats.technologies}
                      </div>
                      <div className="text-m text-muted-foreground font-medium mt-1">Total Technology</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gradient-border bg-card/80 backdrop-blur-sm hover:glow-sage transition-all group">
                  <CardContent className="py-1.5 px-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#43766C]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Layers className="h-5 w-5 text-[#43766C]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground leading-none">{project.stats.features}</div>
                      <div className="text-m text-muted-foreground font-medium mt-1">Key Features</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#43766C] hover:bg-[#386657] text-white text-base px-6 py-5 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-[#43766C] hover:bg-[#386657] text-white text-base px-6 py-5 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Github
                  </a>
                </Button>
              </div>

              {/* Technologies Used */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="h-5 w-5 text-[#43766C]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Technologies Used</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="px-3 py-2 text-sm font-medium border-[#43766C]/40 bg-[#43766C]/10 hover:bg-[#43766C]/20 hover:scale-105 transition-all cursor-default flex items-center gap-2"
                    >
                      <Box className="h-4 w-4 text-[#43766C]" />
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Project Image and Key Features */}
            <div className="space-y-6 sm:space-y-8">
              {/* Project Image - Only visible on desktop */}
              <div className="hidden lg:block relative group">
                <div className="rounded-xl overflow-hidden border border-[#43766C]/30">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1400}
                    height={900}
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Key Features */}
              <Card className="relative overflow-hidden bg-gradient-to-br from-[#e8f3f0]/90 via-card/90 to-[#c5dcd5]/40 backdrop-blur-sm border-2 border-[#2d4f47]/30 shadow-xl">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2d4f47]/15 via-[#7fa99a]/10 to-[#2d4f47]/12 opacity-60" />

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2d4f47]/25 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#365a52]/20 to-transparent rounded-tr-full" />

                <CardContent className="relative pt-8 pb-8 px-6 sm:px-8">
                  {/* Header with gradient background */}
                  <div className="relative mb-8 pb-4 border-b-2 border-[#2d4f47]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2d4f47] to-[#365a52] flex items-center justify-center shadow-lg">
                        <Star className="h-6 w-6 text-[#e8f3f0] fill-[#e8f3f0]" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2d4f47] via-[#43766C] to-[#2d4f47] bg-clip-text text-transparent">
                        Key Features
                      </h2>
                    </div>
                  </div>

                  {/* Features list with enhanced styling */}
                  <div className="space-y-5">
                    {project.features.map((feature, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <div
                          key={index}
                          className={`group relative flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-md border ${
                            isEven
                              ? 'bg-gradient-to-r from-[#2d4f47]/12 to-[#c5dcd5]/20 hover:from-[#2d4f47]/20 hover:to-[#c5dcd5]/30 border-[#2d4f47]/20 hover:border-[#2d4f47]/40'
                              : 'bg-gradient-to-r from-[#7fa99a]/15 to-[#e8f3f0]/20 hover:from-[#7fa99a]/25 hover:to-[#e8f3f0]/30 border-[#7fa99a]/20 hover:border-[#7fa99a]/40'
                          }`}
                        >
                          {/* Animated bullet point */}
                          <div className="relative mt-1 shrink-0">
                            <div className={`w-3 h-3 rounded-full shadow-sm group-hover:shadow-lg group-hover:scale-125 transition-all duration-300 ${
                              isEven
                                ? 'bg-gradient-to-br from-[#2d4f47] to-[#43766C]'
                                : 'bg-gradient-to-br from-[#43766C] to-[#7fa99a]'
                            }`} />
                            <div className={`absolute inset-0 w-3 h-3 rounded-full animate-ping group-hover:opacity-75 ${
                              isEven ? 'bg-[#2d4f47]/30' : 'bg-[#7fa99a]/30'
                            }`} />
                          </div>

                          {/* Feature text with gradient on hover */}
                          <p className={`text-base leading-relaxed text-foreground transition-colors duration-300 font-medium ${
                            isEven ? 'group-hover:text-[#2d4f47]' : 'group-hover:text-[#43766C]'
                          }`}>
                            {feature}
                          </p>

                          {/* Hover indicator */}
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className={`w-1.5 h-8 rounded-full ${
                              isEven
                                ? 'bg-gradient-to-b from-[#2d4f47] to-[#43766C]'
                                : 'bg-gradient-to-b from-[#43766C] to-[#7fa99a]'
                            }`} />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom decorative line */}
                  <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-[#2d4f47]/40 via-[#43766C]/40 to-[#2d4f47]/40" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
