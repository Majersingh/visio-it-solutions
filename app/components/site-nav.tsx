"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { nav, site } from "@/lib/site";

const apple = [0.16, 1, 0.3, 1] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMobile = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      <header className="rise-in fixed inset-x-0 top-0 z-50">
        <div className="container-wide pt-3 md:pt-4">
          <div
            className={cn(
              "relative flex h-14 items-center justify-between rounded-full px-4 md:h-16 md:px-6 transition-all duration-500",
              scrolled
                ? "glass-strong"
                : "border border-white/[0.06] bg-white/[0.03] backdrop-blur-md",
            )}
          >
            <Link
              href="/"
              className="group flex items-center gap-2"
              aria-label={site.name}
            >
              <Image
                src="/visiologo.png"
                alt={site.name}
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-contain"
                priority
              />
              <span className="t-body font-semibold tracking-tight text-white md:text-[17px]">
                Visio<span className="text-white/60">IT</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-[14px] font-medium text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex">
              <Link
                href="/#contact"
                className="btn-primary inline-flex h-10 items-center rounded-full px-5 text-[14px] font-medium text-white"
              >
                Talk to an engineer
              </Link>
            </div>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: apple }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              className="relative flex h-full flex-col justify-between px-6 pb-10 pt-24"
            >
              <ul className="flex flex-col gap-2">
                {nav.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: apple } },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className="block rounded-2xl px-4 py-5 text-[22px] font-medium tracking-tight text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/#contact"
                onClick={closeMobile}
                className="btn-primary inline-flex h-16 w-full items-center justify-center rounded-full px-8 py-5 text-[17px] font-medium text-white"
              >
                Talk to an engineer
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

