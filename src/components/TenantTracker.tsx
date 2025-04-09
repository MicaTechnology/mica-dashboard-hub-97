import React from 'react';
import Card from './Card';
import Progress from './Progress';
import StatusLabel from './StatusLabel';
import { User, PenSquare, Eye } from 'lucide-react';
import { Button } from './ui/button';
interface Tenant {
  id: string;
  name: string;
  property: string;
  progress: number;
  status: 'pending' | 'completed' | 'action-required';
  dueDate?: string;
}
const tenants: Tenant[] = [{
  id: '1',
  name: 'Juan Pérez',
  property: 'Calle Principal 123, Apto 4B',
  progress: 75,
  status: 'pending',
  dueDate: '15 Ago, 2023'
}, {
  id: '2',
  name: 'María García',
  property: 'Av. Parque 456, Unidad 7',
  progress: 30,
  status: 'action-required',
  dueDate: '10 Ago, 2023'
}, {
  id: '3',
  name: 'Miguel Rodríguez',
  property: 'Blvd. Central 789, Apto 12C',
  progress: 100,
  status: 'completed'
}];
const TenantTracker = () => {
  return <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Investigaciones</h2>
        <button className="text-mica-teal font-medium hover:underline">Ver Todos</button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {tenants.map((tenant, index) => <Card key={tenant.id} className="flex flex-col" style={{
        animationDelay: `${0.1 * (index + 1)}s`
      }}>
            <div className="flex items-start mb-4">
              <div className="bg-gray-100 rounded-full p-3 mr-4">
                <User className="w-5 h-5 text-gray-500" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-medium truncate">{tenant.name}</h3>
                  <StatusLabel status={tenant.status} className="ml-2" />
                </div>
                <p className="text-gray-500 text-sm mb-2 truncate">{tenant.property}</p>
                {tenant.dueDate && <p className="text-gray-400 text-xs">Fecha límite: {tenant.dueDate}</p>}
              </div>
            </div>
            
            <Progress value={tenant.progress} max={100} color={tenant.status === 'action-required' ? 'blue' : 'teal'} label="Progreso de Solicitud" />
            
            <div className="mt-4 flex flex-col gap-2">
              {tenant.status === 'action-required' && <div className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full py-2 text-mica-blue border-mica-blue/30 hover:bg-mica-blue/5">
                    <PenSquare className="w-4 h-4 mr-2" />
                    Llenar Información de Contrato
                  </Button>
                  <Button variant="outline" className="w-full py-2 text-gray-700 border-gray-300 hover:bg-gray-100">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalles
                  </Button>
                </div>}
              
              {tenant.status === 'completed' && <Button variant="outline" className="w-full py-2 text-mica-teal border-mica-teal/30 hover:bg-mica-teal/5">
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Detalles
                </Button>}
              
              {tenant.status === 'pending' && <Button variant="outline" className="w-full py-2 text-gray-700 border-gray-300 hover:bg-gray-100">
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Detalles
                </Button>}
            </div>
          </Card>)}
      </div>
    </section>;
};
export default TenantTracker;