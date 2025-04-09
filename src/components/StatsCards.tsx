
import React from 'react';
import { FileText, FileCheck, Building, ArrowUpRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  className?: string;
}

const StatCard = ({ icon, value, label, color, className }: StatCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`relative bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm overflow-hidden ${className}`}>
      <div className="flex justify-between mb-2 md:mb-3 relative z-10">
        <div className={`p-2 rounded-lg ${color}`}>
          {icon}
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
            <circle cx="12" cy="7" r="1" stroke="none" fill="currentColor" />
            <circle cx="12" cy="12" r="1" stroke="none" fill="currentColor" />
            <circle cx="12" cy="17" r="1" stroke="none" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div className="mt-2 md:mt-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-1 md:gap-2">
          {value}
          <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-0.5 md:mt-1">{label}</p>
      </div>
      <div className={`absolute -right-6 -top-6 w-20 md:w-24 h-20 md:h-24 rounded-full opacity-10 ${color.replace('text', 'bg')}`}></div>
    </div>
  );
};

const StatsCards = () => {
  return (
    <div className="flex flex-row overflow-x-auto gap-2 md:grid md:grid-cols-3 md:gap-4 mb-6 md:mb-10 pb-2 md:pb-0 -mx-2 px-2 md:mx-0 md:px-0">
      <StatCard 
        icon={<FileText className="w-4 h-4 md:w-5 md:h-5 text-white" />}
        value="12"
        label="Investigaciones"
        color="bg-mica-teal text-white"
        className="min-w-[120px] flex-1"
      />
      <StatCard 
        icon={<FileCheck className="w-4 h-4 md:w-5 md:h-5 text-white" />}
        value="5"
        label="Contratos en proceso"
        color="bg-mica-blue text-white"
        className="min-w-[120px] flex-1"
      />
      <StatCard 
        icon={<Building className="w-4 h-4 md:w-5 md:h-5 text-white" />}
        value="24"
        label="Rentas activas"
        color="bg-green-600 text-white"
        className="min-w-[120px] flex-1"
      />
    </div>
  );
};

export default StatsCards;
