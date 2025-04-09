
import React from 'react';
import Card from './Card';
import { User, LifeBuoy } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Tenant {
  id: string;
  name: string;
  property: string;
  progress: number;
  status: 'pending' | 'completed' | 'action-required';
  monthlyRent: string;
  startDate: string;
}

const rentalTenants: Tenant[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    property: 'Av. Las Palmas 567, Casa 3',
    progress: 100,
    status: 'completed',
    monthlyRent: '$12,500',
    startDate: '1 Jun, 2023'
  },
  {
    id: '2',
    name: 'Ana Pérez',
    property: 'Calle Roble 234, Apto 8A',
    progress: 100,
    status: 'completed',
    monthlyRent: '$9,800', 
    startDate: '15 May, 2023'
  },
  {
    id: '3',
    name: 'Luis Hernández',
    property: 'Av. Del Mar 456, Unidad 12',
    progress: 100,
    status: 'completed',
    monthlyRent: '$14,300',
    startDate: '1 Mar, 2023'
  }
];

// Additional tenants for the full list view
const allRentalTenants: Tenant[] = [
  ...rentalTenants,
  {
    id: '4',
    name: 'Sofia Ramírez',
    property: 'Blvd. Los Pinos 789, Apto 15F',
    progress: 100,
    status: 'completed',
    monthlyRent: '$11,200',
    startDate: '15 Apr, 2023'
  },
  {
    id: '5',
    name: 'Eduardo Torres',
    property: 'Av. Central 123, Unidad 7',
    progress: 100,
    status: 'completed',
    monthlyRent: '$10,600',
    startDate: '1 Feb, 2023'
  }
];

const RentalsSection = () => {
  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Rentas</h2>
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-mica-teal font-medium hover:underline">Ver Todos</button>
          </SheetTrigger>
          <SheetContent className="w-[90%] sm:w-[540px] sm:max-w-md overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Todas las Rentas</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Renta</TableHead>
                    <TableHead>Inicio</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allRentalTenants.map((tenant) => (
                    <TableRow key={tenant.id}>
                      <TableCell className="font-medium">
                        <div>
                          <div>{tenant.name}</div>
                          <div className="text-xs text-gray-500 truncate">{tenant.property}</div>
                        </div>
                      </TableCell>
                      <TableCell>{tenant.monthlyRent}</TableCell>
                      <TableCell>{tenant.startDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {rentalTenants.map((tenant, index) => (
          <Card 
            key={tenant.id} 
            className="flex flex-col" 
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className="flex items-start mb-4">
              <div className="bg-gray-100 rounded-full p-3 mr-4">
                <User className="w-5 h-5 text-gray-500" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-medium truncate">{tenant.name}</h3>
                  <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">Activo</div>
                </div>
                <p className="text-gray-500 text-sm mb-2 truncate">{tenant.property}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Renta:</span>
                  <span className="font-medium">{tenant.monthlyRent}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-400">Inicio:</span>
                  <span>{tenant.startDate}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 w-full text-mica-blue border-mica-blue hover:bg-mica-blue hover:text-white transition-colors"
                >
                  <LifeBuoy className="w-4 h-4 mr-2" />
                  Necesito ayuda
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RentalsSection;
