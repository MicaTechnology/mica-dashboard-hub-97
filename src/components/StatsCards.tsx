
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
    <div className={`relative bg-white p-3 md:p-6 rounded-xl border border-gray-100 shadow-sm overflow-hidden ${className}`}>
      <div className="flex justify-between mb-1 md:mb-3 relative z-10">
        <div className={`p-1.5 md:p-2 rounded-lg ${color}`}>
          {icon}
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 md:w-5 md:h-5">
            <circle cx="12" cy="7" r="1" stroke="none" fill="currentColor" />
            <circle cx="12" cy="12" r="1" stroke="none" fill="currentColor" />
            <circle cx="12" cy="17" r="1" stroke="none" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div className="mt-1 md:mt-4 relative z-10">
        <h2 className="text-xl md:text-3xl font-bold flex items-center gap-1 md:gap-2">
          {value}
          <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
        </h2>
        <p className="text-xs md:text-base text-gray-600 truncate">{label}</p>
      </div>
      <div className={`absolute -right-6 -top-6 w-16 md:w-24 h-16 md:h-24 rounded-full opacity-10 ${color.replace('text', 'bg')}`}></div>
    </div>
  );
};

const StatsCards = () => {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-4 mb-4 md:mb-10">
      <StatCard 
        icon={<FileText className="w-3 h-3 md:w-5 md:h-5 text-white" />}
        value="12"
        label="Investigaciones"
        color="bg-mica-teal text-white"
      />
      <StatCard 
        icon={<FileCheck className="w-3 h-3 md:w-5 md:h-5 text-white" />}
        value="5"
        label="Contratos en proceso"
        color="bg-mica-blue text-white"
      />
      <StatCard 
        icon={<Building className="w-3 h-3 md:w-5 md:h-5 text-white" />}
        value="24"
        label="Rentas activas"
        color="bg-green-600 text-white"
      />
    </div>
  );
};

export default StatsCards;
