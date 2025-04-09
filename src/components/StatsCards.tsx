
import React from 'react';
import Card from './Card';
import { FileText, FileCheck, Building } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

const StatCard = ({ icon, value, label, className }: StatCardProps) => {
  return (
    <div className={`bg-gray-50 p-6 rounded-xl ${className}`}>
      <div className="flex justify-between mb-3">
        {icon}
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <circle cx="12" cy="7" r="1" stroke="none" fill="currentColor" />
            <circle cx="12" cy="12" r="1" stroke="none" fill="currentColor" />
            <circle cx="12" cy="17" r="1" stroke="none" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-3xl font-bold">{value}</h2>
        <p className="text-gray-600 mt-1">{label}</p>
      </div>
    </div>
  );
};

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      <StatCard 
        icon={<FileText className="w-6 h-6 text-mica-teal" />}
        value="12"
        label="Investigaciones"
      />
      <StatCard 
        icon={<FileCheck className="w-6 h-6 text-mica-blue" />}
        value="5"
        label="Contratos en proceso"
      />
      <StatCard 
        icon={<Building className="w-6 h-6 text-green-600" />}
        value="24"
        label="Rentas activas"
      />
    </div>
  );
};

export default StatsCards;
