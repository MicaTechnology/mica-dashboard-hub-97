
import React from 'react';
import Card from './Card';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';

interface Renewal {
  id: string;
  tenant: string;
  property: string;
  currentEndDate: string;
  renewalDate: string;
  daysLeft: number;
}

const renewals: Renewal[] = [
  {
    id: '1',
    tenant: 'Sarah Johnson',
    property: '123 Main St, Apt 4B',
    currentEndDate: 'Sept 30, 2023',
    renewalDate: 'Oct 1, 2023',
    daysLeft: 32
  },
  {
    id: '2',
    tenant: 'Robert Davis',
    property: '456 Park Ave, Unit 7',
    currentEndDate: 'Sept 15, 2023',
    renewalDate: 'Sept 16, 2023',
    daysLeft: 17
  }
];

const RenewalsTimeline = () => {
  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Upcoming Renewals</h2>
        <button className="text-mica-teal font-medium hover:underline">View Calendar</button>
      </div>
      
      <Card className="overflow-hidden p-0">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center text-gray-500 mb-1">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">Upcoming lease renewals</span>
          </div>
          <p className="text-lg font-medium">{renewals.length} renewals in the next 60 days</p>
        </div>
        
        <div className="divide-y divide-gray-50">
          {renewals.map((renewal, index) => (
            <div 
              key={renewal.id} 
              className="p-6 flex items-center hover:bg-gray-50 transition-colors"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="mr-4 flex-shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${renewal.daysLeft < 30 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                  <span className="font-medium">{renewal.daysLeft}d</span>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium mb-1 truncate">{renewal.tenant}</h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span className="truncate">{renewal.property}</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center text-sm text-gray-500">
                  <span>{renewal.currentEndDate}</span>
                  <ArrowRight className="w-3 h-3 mx-1" />
                  <span className="font-medium text-mica-teal">{renewal.renewalDate}</span>
                </div>
                
                <button className="mt-2 text-sm text-mica-blue font-medium hover:underline">
                  Start Renewal
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default RenewalsTimeline;
