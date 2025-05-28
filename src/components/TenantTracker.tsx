
import React from 'react';
import Card from './Card';
import Progress from './Progress';
import StatusLabel from './StatusLabel';
import { User, PenSquare, ExternalLink, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';

interface Tenant {
  id: string;
  name: string;
  property: string;
  progress: number;
  status: 'form-incomplete' | 'investigation-in-progress' | 'approved' | 'denied';
  dueDate?: string;
  driveUrl?: string;
  clientFormUrl?: string;
}

const tenants: Tenant[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    property: 'Calle Principal 123, Apto 4B',
    progress: 66,
    status: 'investigation-in-progress',
    dueDate: '15 Ago, 2023',
    driveUrl: 'https://drive.google.com/drive/folders/example1',
    clientFormUrl: 'https://app.ejemplo.com/form/juan-perez-123'
  },
  {
    id: '2',
    name: 'María García',
    property: 'Av. Parque 456, Unidad 7',
    progress: 33,
    status: 'form-incomplete',
    dueDate: '10 Ago, 2023',
    driveUrl: 'https://drive.google.com/drive/folders/example2',
    clientFormUrl: 'https://app.ejemplo.com/form/maria-garcia-456'
  },
  {
    id: '3',
    name: 'Miguel Rodríguez',
    property: 'Blvd. Central 789, Apto 12C',
    progress: 100,
    status: 'approved',
    driveUrl: 'https://drive.google.com/drive/folders/example3',
    clientFormUrl: 'https://app.ejemplo.com/form/miguel-rodriguez-789'
  }
];

const allTenants: Tenant[] = [
  ...tenants,
  {
    id: '4',
    name: 'Laura Sánchez',
    property: 'Calle Olmo 234, Casa 5',
    progress: 100,
    status: 'denied',
    dueDate: '20 Ago, 2023',
    driveUrl: 'https://drive.google.com/drive/folders/example4',
    clientFormUrl: 'https://app.ejemplo.com/form/laura-sanchez-234'
  },
  {
    id: '5',
    name: 'Roberto Gómez',
    property: 'Av. Principal 567, Apto 9D',
    progress: 66,
    status: 'investigation-in-progress',
    dueDate: '25 Ago, 2023',
    driveUrl: 'https://drive.google.com/drive/folders/example5',
    clientFormUrl: 'https://app.ejemplo.com/form/roberto-gomez-567'
  }
];

// Helper function to get progress by status
const getProgressByStatus = (status: Tenant['status']): number => {
  switch (status) {
    case 'form-incomplete':
      return 33;
    case 'investigation-in-progress':
      return 66;
    case 'approved':
    case 'denied':
      return 100;
    default:
      return 0;
  }
};

const TenantTracker = () => {
  const { toast } = useToast();

  const handleOpenDrive = (driveUrl: string, clientName: string) => {
    window.open(driveUrl, '_blank');
    console.log(`Opening Google Drive expediente for ${clientName}`);
  };

  const handleCopyFormLink = async (formUrl: string, clientName: string) => {
    try {
      await navigator.clipboard.writeText(formUrl);
      toast({
        title: "Link copiado",
        description: `El link del formulario de ${clientName} ha sido copiado al portapapeles.`,
      });
      console.log(`Form link copied for ${clientName}: ${formUrl}`);
    } catch (err) {
      console.error('Error copying link:', err);
      toast({
        title: "Error",
        description: "No se pudo copiar el link. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="mb-10" id="investigaciones">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Investigaciones</h2>
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-mica-teal font-medium hover:underline">Ver Todos</button>
          </SheetTrigger>
          <SheetContent className="w-[90%] sm:w-[540px] sm:max-w-md overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Todas las Investigaciones</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Progreso</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allTenants.map((tenant) => (
                    <TableRow key={tenant.id}>
                      <TableCell className="font-medium">
                        <div>
                          <div>{tenant.name}</div>
                          <div className="text-xs text-gray-500 truncate">{tenant.property}</div>
                        </div>
                      </TableCell>
                      <TableCell><StatusLabel status={tenant.status} /></TableCell>
                      <TableCell>
                        <Progress 
                          value={getProgressByStatus(tenant.status)} 
                          max={100} 
                          color={tenant.status === 'form-incomplete' ? 'blue' : 'teal'} 
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {tenants.map((tenant, index) => (
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
                  <StatusLabel status={tenant.status} className="ml-2" />
                </div>
                <p className="text-gray-500 text-sm mb-2 truncate">{tenant.property}</p>
                {tenant.dueDate && <p className="text-gray-400 text-xs">Fecha límite: {tenant.dueDate}</p>}
              </div>
            </div>
            
            <Progress 
              value={getProgressByStatus(tenant.status)} 
              max={100} 
              color={tenant.status === 'form-incomplete' ? 'blue' : 'teal'} 
              label="Progreso de Solicitud" 
            />
            
            {/* Action buttons */}
            <div className="mt-4 space-y-2">
              {/* Google Drive Expediente Button */}
              <Button 
                variant="outline" 
                size="sm"
                className="w-full py-1 text-mica-blue border-mica-blue/30 hover:bg-mica-blue/5"
                onClick={() => handleOpenDrive(tenant.driveUrl || '', tenant.name)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Expediente
              </Button>

              {/* Copy Form Link Button */}
              <Button 
                variant="outline" 
                size="sm"
                className="w-full py-1 text-gray-600 border-gray-300 hover:bg-gray-50"
                onClick={() => handleCopyFormLink(tenant.clientFormUrl || '', tenant.name)}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Copiar Link del Formulario
              </Button>

              {/* Contract Info Button - only for approved status */}
              {tenant.status === 'approved' && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full py-1 text-green-600 border-green-300 hover:bg-green-50"
                >
                  <PenSquare className="w-4 h-4 mr-2" />
                  Llenar Información de Contrato
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TenantTracker;
