'use client'

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";

const experiences = [
  {
    title: 'Business Analyst',
    company: 'Taiyuan Heavy Machinery Group Co., Ltd.',
    location: 'Taiyuan, China',
    period: 'August 2016 – December 2018',
    highlights: [
      'Collaborated with cross-functional teams and international clients to gather and define business requirements, developing BI solutions using SQL, Excel, and Tableau.',
      'Extracted and analyzed large-scale datasets to uncover actionable insights and craft clear, data-driven narratives for internal stakeholders.',
      'Conducted customer survey analyses using mixed analytical techniques to inform operational improvements and strategic decision-making.',
      'Led the development of both manual and automated reporting tools in Excel and Tableau, enhancing reporting efficiency and accuracy.',
      'Delivered training sessions to empower end-users in adopting data visualization and self-service analytics tools, fostering a data-informed culture.'
    ]
  },
]

export function Experience() {
  return (
    <section id="experience" className="flex items-center justify-center px-6 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-[#43766C]">Work Experience</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="gradient-border bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-sm hover:glow-sage hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#43766C]/5 via-transparent to-[#B19470]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#43766C]/10 to-transparent rounded-bl-full" />

              <CardContent className="pt-8 pb-8 relative z-10">
                <div className="border-l-4 border-gradient-to-b from-[#43766C] via-[#B19470] to-[#43766C] pl-6 relative">
                  {/* Glowing dot at top of border */}
                  <div className="absolute -left-[6px] top-0 w-2 h-2 rounded-full bg-[#43766C] shadow-lg shadow-[#43766C]/50" />
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-[#43766C] to-[#B19470] bg-clip-text text-transparent mb-2">{exp.title}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <p className="text-lg font-semibold text-[#43766C]">
                      {exp.company} | {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#43766C]/10 to-[#B19470]/10 border border-[#43766C]/20">
                      <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#43766C] mt-0.5 shrink-0" />
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
  )
}
