
import React from 'react';
import Card from './Card';
import { DollarSign, Info, ArrowRight } from 'lucide-react';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgClass: string;
}

const tools: Tool[] = [
  {
    id: '1',
    title: 'Fee Calculator',
    description: 'Calculate management fees, commission, and other charges.',
    icon: <DollarSign className="w-6 h-6 text-white" />,
    bgClass: 'bg-mica-teal'
  },
  {
    id: '2',
    title: 'Product Information',
    description: 'Learn about Mica's products and how they can help your business.',
    icon: <Info className="w-6 h-6 text-white" />,
    bgClass: 'bg-mica-blue'
  }
];

const ToolsSection = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6">Tools & Resources</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <Card 
            key={tool.id} 
            className="flex items-start"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className={`${tool.bgClass} rounded-lg p-3 mr-4`}>
              {tool.icon}
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-1">{tool.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{tool.description}</p>
              
              <button className="text-mica-teal font-medium text-sm flex items-center hover:underline">
                <span>Open Tool</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
