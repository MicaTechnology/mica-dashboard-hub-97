
import React from 'react';
import { cn } from '@/lib/utils';

type Status = 
  // Investigation statuses
  'form-incomplete' | 'investigation-in-progress' | 'approved' | 'denied' |
  // Rental statuses
  'active' | 'pending-first-payment' | 'contract-in-progress' | 'completed' | 'renewal-soon';

interface StatusLabelProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<Status, { className: string, label: string }> = {
  // Investigation statuses
  'form-incomplete': {
    className: 'bg-amber-100 text-amber-800',
    label: 'Formulario incompleto'
  },
  'investigation-in-progress': {
    className: 'bg-blue-100 text-blue-800',
    label: 'Investigación en proceso'
  },
  'approved': {
    className: 'bg-green-100 text-green-800',
    label: 'Aprobado'
  },
  'denied': {
    className: 'bg-red-100 text-red-800',
    label: 'Denegado'
  },
  
  // Rental statuses
  'active': {
    className: 'bg-green-100 text-green-800',
    label: 'Activo'
  },
  'pending-first-payment': {
    className: 'bg-amber-100 text-amber-800',
    label: 'Primer pago pendiente'
  },
  'contract-in-progress': {
    className: 'bg-blue-100 text-blue-800',
    label: 'Contrato en elaboración'
  },
  'completed': {
    className: 'bg-gray-100 text-gray-800',
    label: 'Finalizado'
  },
  'renewal-soon': {
    className: 'bg-purple-100 text-purple-800',
    label: 'Próximo a renovación'
  }
};

const StatusLabel = ({ status, className }: StatusLabelProps) => {
  const config = statusConfig[status];
  
  return (
    <span 
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-normal break-words min-w-0 max-w-full', 
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
};

export default StatusLabel;
