
import React from 'react';
import PageTransition from '@/components/layout/PageTransition';
import Hero from '@/components/Hero';
import TenantTracker from '@/components/TenantTracker';
import ToolsSection from '@/components/ToolsSection';
import { FloatingNavDemo } from '@/components/FloatingNavDemo';
import RentalsSection from '@/components/RentalsSection';
import StatsCards from '@/components/StatsCards';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <FloatingNavDemo />
        <main className="container mx-auto px-6 pt-24 pb-10"> {/* Added more top padding (pt-24) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 items-start">
            <Hero />
            <StatsCards />
          </div>
          <TenantTracker />
          <RentalsSection />
          <ToolsSection />
        </main>
      </div>
    </PageTransition>
  );
};

export default Index;
