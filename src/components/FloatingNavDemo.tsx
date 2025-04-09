
"use client"

import React from "react"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { Home, MessageSquare, User, BarChart2, FileText, Building } from "lucide-react"

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Dashboard",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Investigaciones",
      link: "/investigaciones",
      icon: <FileText className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Rentas",
      link: "/rentas",
      icon: <Building className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Reportes",
      link: "/reportes",
      icon: <BarChart2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]

  return (
    <FloatingNav navItems={navItems} />
  )
}
