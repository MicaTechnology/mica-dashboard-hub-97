
import React from 'react';
import PageTransition from '@/components/layout/PageTransition';
import Hero from '@/components/Hero';
import TenantTracker from '@/components/TenantTracker';
import RenewalsTimeline from '@/components/RenewalsTimeline';
import ToolsSection from '@/components/ToolsSection';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-6 py-10">
          <Hero />
          <TenantTracker />
          <RenewalsTimeline />
          <ToolsSection />
        </main>
      </div>
    </PageTransition>
  );
};

export default Index;
