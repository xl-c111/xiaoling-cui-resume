"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, MailIcon } from "lucide-react";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/animations";
import { motion } from "framer-motion";

const connectOptions = [
  {
    title: "LinkedIn",
    subtitle: "Connect professionally",
    handle: "@xiaoling-cui",
    href: "https://www.linkedin.com/in/xiaolingcui/",
    icon: Linkedin,
    iconClasses: "bg-[#F8FAE5]/20 text-[#F8FAE5]",
  },
  {
    title: "Github",
    subtitle: "Explore my code",
    handle: "@xl-c111",
    href: "https://github.com/xl-c111",
    icon: Github,
    iconClasses: "bg-[#F8FAE5]/20 text-[#F8FAE5]",
  },
  {
    title: "Email",
    subtitle: "Reach out anytime",
    handle: "xiaolingcui0111@gmail.com",
    href: "mailto:xiaolingcui0111@gmail.com",
    icon: MailIcon,
    iconClasses: "bg-[#F8FAE5]/20 text-[#F8FAE5]",
  },
];

export function Contact() {
  return (
    <section id="contact" className="flex items-center justify-center px-2 sm:px-2 lg:px-2 py-4 sm:py-5 bg-[#76453B]">
      <div className="max-w-3xl mx-auto w-full">
        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#F8FAE5]/70 mb-3">stay in touch</p>
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="text-[#F8FAE5]">Contact Me</span>
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-[32px] p-3 sm:p-4 bg-[#F8FAE5]/10 border border-[#F8FAE5]/20 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-1 rounded-full bg-[#B19470]"></div>
              <div className="text-xl sm:text-2xl font-semibold text-[#F8FAE5]">Connect With Me</div>
            </div>

            <StaggerContainer className="space-y-4">
              {connectOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <motion.div key={option.title} variants={staggerItem}>
                    <Card className="border-[#F8FAE5]/30 bg-[#F8FAE5]/5 hover:bg-[#F8FAE5]/15 hover:scale-[1.02] transition-all duration-300 rounded-2xl cursor-pointer">
                      <a href={option.href} target="_blank" rel="noopener noreferrer">
                        <CardContent className="flex items-center gap-2 py-1.5 px-4 sm:py-1.5 sm:px-5">
                          <div
                            className={`w-10 h-10 rounded-2xl flex items-center justify-center ${option.iconClasses}`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col gap-0">
                            <span className="text-lg font-semibold text-[#F8FAE5]">{option.title}</span>
                            <span className="text-sm text-[#F8FAE5]/70">{option.subtitle}</span>
                            <span className="text-sm font-medium text-[#F8FAE5]/90">{option.handle}</span>
                          </div>
                        </CardContent>
                      </a>
                    </Card>
                  </motion.div>
                );
              })}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
