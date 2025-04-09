
"use client"

import React, { useEffect } from "react"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { Home, FileText, Building, Wrench } from "lucide-react"

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Dashboard",
      link: "#top",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
      scrollTo: "top"
    },
    {
      name: "Investigaciones",
      link: "#investigaciones",
      icon: <FileText className="h-4 w-4 text-neutral-500 dark:text-white" />,
      scrollTo: "investigaciones"
    },
    {
      name: "Rentas",
      link: "#rentas",
      icon: <Building className="h-4 w-4 text-neutral-500 dark:text-white" />,
      scrollTo: "rentas"
    },
    {
      name: "Herramientas y Recursos",
      link: "#herramientas",
      icon: <Wrench className="h-4 w-4 text-neutral-500 dark:text-white" />,
      scrollTo: "herramientas" 
    },
  ]

  // Add IDs to sections for smooth scrolling
  useEffect(() => {
    const addSectionIds = () => {
      // Add ID for top of page
      document.body.id = "top";
      
      // Find the Investigaciones section and add ID
      const investigacionesSection = document.querySelector('h2.text-2xl.font-bold');
      if (investigacionesSection && investigacionesSection.textContent?.includes("Investigaciones")) {
        const parentSection = investigacionesSection.closest('section');
        if (parentSection) parentSection.id = "investigaciones";
      }
      
      // Find the Rentals section and add ID
      const rentasSection = document.querySelectorAll('h2.text-2xl.font-bold')[1]; // Using index since we know the order
      if (rentasSection) {
        const parentSection = rentasSection.closest('section');
        if (parentSection) parentSection.id = "rentas";
      }
      
      // Find the Tools section and add ID
      const herramientasSection = document.querySelectorAll('h2.text-2xl.font-bold')[2]; // Using index for the third h2
      if (herramientasSection) {
        const parentSection = herramientasSection.closest('section');
        if (parentSection) parentSection.id = "herramientas";
      }
    };
    
    // Run after DOM is fully loaded
    setTimeout(addSectionIds, 500);
  }, []);

  return (
    <FloatingNav navItems={navItems} />
  )
}
