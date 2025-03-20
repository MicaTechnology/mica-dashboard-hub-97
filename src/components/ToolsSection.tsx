
import React from 'react';
import Card from './Card';
import { DollarSign, Info, ArrowRight, Calculator, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    title: 'Calculadora de Tarifas',
    description: 'Calcula tarifas de administración, comisiones y otros cargos.',
    icon: <DollarSign className="w-6 h-6 text-white" />,
    bgClass: 'bg-mica-teal'
  },
  {
    id: '2',
    title: 'Información de Productos',
    description: 'Conoce los productos de Mica y cómo pueden ayudar a tu negocio.',
    icon: <Info className="w-6 h-6 text-white" />,
    bgClass: 'bg-mica-blue'
  },
  {
    id: '3',
    title: 'Plantillas de Documentos',
    description: 'Accede a plantillas listas para usar de contratos, acuerdos y más.',
    icon: <FileText className="w-6 h-6 text-white" />,
    bgClass: 'bg-mica-purple'
  }
];

const ToolsSection = () => {
  const { toast } = useToast();

  const handleOpenTool = (toolName: string) => {
    toast({
      title: "Abriendo Herramienta",
      description: `${toolName} se está abriendo...`,
    });
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6">Herramientas y Recursos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              
              <button 
                className="text-mica-teal font-medium text-sm flex items-center hover:underline"
                onClick={() => handleOpenTool(tool.title)}
              >
                <span>Abrir Herramienta</span>
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
