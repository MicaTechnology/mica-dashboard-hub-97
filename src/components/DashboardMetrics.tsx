
import React from 'react';
import Card from './Card';
import { BarChart3, ArrowUp, ArrowDown, DollarSign, Home, Users } from 'lucide-react';

interface Metric {
  title: string;
  value: string;
  change: {
    value: string;
    positive: boolean;
  };
  icon: React.ReactNode;
}

const metrics: Metric[] = [
  {
    title: 'Total de Propiedades',
    value: '24',
    change: {
      value: '+12%',
      positive: true
    },
    icon: <Home className="w-5 h-5 text-mica-teal" />
  },
  {
    title: 'Inquilinos Activos',
    value: '42',
    change: {
      value: '+8%',
      positive: true
    },
    icon: <Users className="w-5 h-5 text-mica-blue" />
  },
  {
    title: 'Ingresos Mensuales',
    value: '$38,500',
    change: {
      value: '+24%',
      positive: true
    },
    icon: <DollarSign className="w-5 h-5 text-green-500" />
  },
  {
    title: 'Unidades Vacantes',
    value: '3',
    change: {
      value: '-25%',
      positive: true
    },
    icon: <BarChart3 className="w-5 h-5 text-yellow-500" />
  }
];

const DashboardMetrics = () => {
  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">📊 Tablero</h2>
        <div className="text-gray-500 text-sm">⏰ Última actualización: Hoy, 9:41 AM</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card 
            key={metric.title} 
            className="flex flex-col"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className="flex justify-between mb-2">
              <div className="bg-gray-100 rounded-lg p-2">
                {metric.icon}
              </div>
              
              <div className="flex items-center">
                <span className={`text-xs font-medium flex items-center ${metric.change.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change.positive ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                  {metric.change.value}
                </span>
              </div>
            </div>
            
            <div className="mt-auto">
              <p className="text-gray-500 text-sm mb-1">{metric.title}</p>
              <p className="text-2xl font-bold">{metric.value}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DashboardMetrics;
