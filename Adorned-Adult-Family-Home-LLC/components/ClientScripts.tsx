'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lucide icons
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }

    // Simple Reveal Animation Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    // Small delay to ensure DOM is ready after navigation
    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]); // Re-run when pathname changes

  return null;
}
