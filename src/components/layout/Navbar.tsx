'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#hero' },
  { name: 'Tech Stack', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const lastScrollY = useRef(0);

  // Smooth scroll handler for anchor links
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) return;
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  // Scroll direction detector (Hide on scroll down, Show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync active section with IntersectionObserver
  useEffect(() => {
    if (!isHomePage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
      }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  // Split string into characters for continuous pop wave loop
  const fullName = 'RathaHeng'.split('');
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-slate-950/60 backdrop-blur-md border-b border-white/5 py-3.5 shadow-xl shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Animated Brand Logo */}
        <Link href="/" onClick={scrollToTop}>
          <motion.div
            className="relative flex items-center gap-2.5 cursor-pointer group py-1 px-2 rounded-lg"
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            {/* Soft Ambient Glow Effect on Hover */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-cyan-500/15 blur-md -z-10"
              variants={{
                rest: { opacity: 0, scale: 0.8 },
                hover: { opacity: 1, scale: 1.1 },
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Terminal Icon Container */}
            <motion.div
              className="p-1.5 rounded-md bg-slate-900 border border-slate-800/80 text-cyan-400 group-hover:border-cyan-500/40 transition-colors shadow-inner"
              variants={{
                rest: { rotate: 0 },
                hover: { rotate: 12, scale: 1.05 },
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <Terminal className="w-4 h-4" />
            </motion.div>

            {/* Typography with Continuous Character Pop Wave (Solid Colors) */}
            <div className="flex items-center text-lg font-bold tracking-tight select-none py-0.5">
              {fullName.map((char, index) => {
                const isRatha = index < 5; // "Ratha" = index 0-4 (White), "Heng" = index 5-8 (Cyan)

                return (
                  <React.Fragment key={index}>
                    {/* Add spacing between 'Ratha' and 'Heng' */}
                    {index === 5 && <span className="w-1" />}

                    <motion.span
                      className={`inline-block ${
                        isRatha ? 'text-slate-100' : 'text-cyan-400'
                      }`}
                      animate={{
                        scale: [1, 1.35, 1],
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        repeatDelay: 1.2,
                        delay: index * 0.12, // Sequential popping
                        ease: 'easeInOut',
                      }}
                    >
                      {char}
                    </motion.span>
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        </Link>

        {/* Translucent Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {isHomePage ? (
            navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  )}
                </a>
              );
            })
          ) : (
            <Link
              href="/"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              ← Back to Overview
            </Link>
          )}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={isHomePage ? '#contact' : '/#contact'}
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 transition-all shadow-md shadow-cyan-500/10 hover:shadow-cyan-400/20 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/80 backdrop-blur-lg border-b border-white/10 px-6 py-5 flex flex-col gap-4 shadow-xl">
          {isHomePage ? (
            navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-sm py-1 transition-colors ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })
          ) : (
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-cyan-400 py-1"
            >
              ← Back to Overview
            </Link>
          )}

          <a
            href={isHomePage ? '#contact' : '/#contact'}
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="text-center py-2.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};