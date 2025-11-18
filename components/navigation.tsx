"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export const Navigation = memo(function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const router = useRouter();
  const pathname = usePathname();
  const ticking = useRef(false);
  const sectionPositionsRef = useRef<Map<string, { top: number; bottom: number }>>(new Map());

  // Cache section positions to avoid repeated DOM queries
  const cacheSectionPositions = useCallback(() => {
    const sections = ["hero", "about", "portfolio", "experience", "education", "additional", "contact"];
    const positions = new Map<string, { top: number; bottom: number }>();

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        positions.set(sectionId, { top: offsetTop, bottom: offsetTop + offsetHeight });
      }
    });

    sectionPositionsRef.current = positions;
  }, []);

  // Track active section based on scroll position or pathname
  useEffect(() => {
    // Map pathname to section ID
    const pathToSection: { [key: string]: string } = {
      "/": "hero",
      "/about": "about",
      "/portfolio": "portfolio",
      "/experience": "experience",
      "/education": "education",
      "/additional": "additional",
      "/contact": "contact",
    };

    // If not on home page, set active section based on pathname
    if (pathname !== "/") {
      const section = pathToSection[pathname] || "hero";
      setActiveSection(section);
      return;
    }

    // Cache positions initially and on resize
    cacheSectionPositions();

    // Recache positions when window resizes (throttled)
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(cacheSectionPositions, 150);
    };
    window.addEventListener("resize", handleResize);

    // Throttled scroll handler using requestAnimationFrame
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 100;
      const positions = sectionPositionsRef.current;

      for (const [sectionId, { top, bottom }] of positions) {
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(sectionId);
          break;
        }
      }

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateActiveSection);
        ticking.current = true;
      }
    };

    updateActiveSection(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [pathname, cacheSectionPositions]);

  const scrollToSection = useCallback((sectionId: string) => {
    // Map section IDs to routes - always navigate to individual pages
    const routeMap: { [key: string]: string } = {
      hero: "/",
      about: "/about",
      portfolio: "/portfolio",
      experience: "/experience",
      education: "/education",
      additional: "/additional",
      contact: "/contact",
    };

    // Always navigate to the individual page route
    const route = routeMap[sectionId] || "/";
    router.push(route);
    setIsMobileMenuOpen(false);
  }, [router]);

  // Handle hash navigation when landing on page with hash
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [pathname]);

  const isProjectDetailPage = pathname.startsWith("/project/");

  // Don't render navigation on project detail pages
  if (isProjectDetailPage) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-[100] bg-[#1f3a34]/98 backdrop-blur-md border-b border-[#43766C]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl sm:text-3xl font-black text-[#F8FAE5] cursor-pointer hover:text-[#c5dcd5] transition-colors tracking-tight"
          >
            Xiaoling Cui
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "portfolio", label: "Portfolio" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "additional", label: "Additional" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-base font-semibold transition-all cursor-pointer relative ${
                  activeSection === item.id ? "text-[#c5dcd5] font-semibold" : "text-[#7fa99a] hover:text-[#F8FAE5]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c5dcd5] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-[#7fa99a] hover:text-[#F8FAE5] hover:bg-[#2d4f47]/50" asChild>
              <a href="https://github.com/xl-c111" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-[#7fa99a] hover:text-[#F8FAE5] hover:bg-[#2d4f47]/50" asChild>
              <a href="https://www.linkedin.com/in/xiaolingcui/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-[#7fa99a] hover:text-[#F8FAE5] hover:bg-[#2d4f47]/50" asChild>
              <a href="mailto:xiaolingcui0111@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#7fa99a] hover:text-[#F8FAE5] hover:bg-[#2d4f47]/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "portfolio", label: "Portfolio" },
                { id: "experience", label: "Experience" },
                { id: "education", label: "Education" },
                { id: "additional", label: "Additional" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base text-left transition-colors ${
                    activeSection === item.id ? "text-[#c5dcd5] font-semibold" : "text-[#7fa99a]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});
