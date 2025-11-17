"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";

const education = [
  {
    title: "Software Engineering",
    institution: "Holberton School Australia",
    location: "Melbourne, Australia",
    period: "February 2025 – November 2025",
    highlights: [
      "Completed an intensive, full-time software engineering program emphasizing collaborative, hands-on learning.",
      "Developed real-world applications using Python, C, JavaScript, SQL, and React, strengthening full-stack development skills.",
      "Applied software engineering principles and Test-Driven Development (TDD) to build robust, maintainable codebases.",
      "Gained proficiency in CI/CD workflows and Git-based version control, enabling efficient team collaboration.",
      "Studied data structures and algorithms with a focus on performance optimization and problem-solving techniques.",
    ],
  },
  {
    title: "Exchange Student - German",
    institution: "TU Bergakademie Freiberg",
    location: "Freiberg, Germany",
    period: "September 2014 – September 2015",
    highlights: [
      "Developed strong adaptability and intercultural communication skills through one year study in Germany.",
    ],
  },
  {
    title: "Bachelor of Arts - German",
    institution: "Northwestern Polytechnical University",
    location: "Xi'an, China",
    period: "September 2011 – July 2016",
    highlights: [
      "Completed foundational coursework in computer science, including Computer Engineering and Visual Basic Programming.",
      "Received University Scholarship for Academic Excellence (2012, 2013).",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="flex items-center justify-center px-6 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-[#43766C]">Education</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="space-y-8">
          {education.map((edu, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="gradient-border bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-sm hover:glow-sage hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B19470]/5 via-transparent to-[#43766C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B19470]/10 to-transparent rounded-bl-full" />

                <CardContent className="pt-8 pb-8 relative z-10">
                  <div className="border-l-4 border-gradient-to-b from-[#B19470] via-[#43766C] to-[#B19470] pl-6 relative">
                    {/* Glowing dot at top of border */}
                    <div className="absolute -left-[6px] top-0 w-2 h-2 rounded-full bg-[#B19470] shadow-lg shadow-[#B19470]/50" />
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-[#B19470] to-[#43766C] bg-clip-text text-transparent mb-2">
                      {edu.title}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <p className="text-lg font-semibold text-[#43766C]">
                        {edu.institution} | {edu.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#B19470]/10 to-[#43766C]/10 border border-[#B19470]/20">
                        <p className="text-sm text-muted-foreground font-mono">{edu.period}</p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#43766C] mt-0.5 flex-shrink-0" />
                          <span className="text-base text-foreground leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
