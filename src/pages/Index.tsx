
import React from 'react';
import PageTransition from '@/components/layout/PageTransition';
import Hero from '@/components/Hero';
import TenantTracker from '@/components/TenantTracker';
import RenewalsTimeline from '@/components/RenewalsTimeline';
import DashboardMetrics from '@/components/DashboardMetrics';
import ToolsSection from '@/components/ToolsSection';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm subtle-glass">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="font-bold text-2xl text-mica-teal">mica</div>
              <span className="text-gray-400 mx-4">|</span>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-900 font-medium">Tablero</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Propiedades</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Inquilinos</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Documentos</a>
              </nav>
            </div>
            
            <div className="flex items-center">
              <div className="h-8 w-8 bg-mica-teal text-white rounded-full flex items-center justify-center mr-2">
                <span className="font-medium text-sm">JS</span>
              </div>
            </div>
          </div>
        </header>
        
        <main className="container mx-auto px-6 py-10">
          <Hero />
          <TenantTracker />
          <DashboardMetrics />
          <RenewalsTimeline />
          <ToolsSection />
        </main>
      </div>
    </PageTransition>
  );
};

export default Index;
