
import React from 'react';
import { cn } from '@/lib/utils';

type Status = 'pending' | 'completed' | 'action-required' | 'form-incomplete' | 'investigation-in-progress' | 'approved' | 'denied';

interface StatusLabelProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<Status, { className: string, label: string }> = {
  'pending': {
    className: 'bg-amber-100 text-amber-800',
    label: 'Pendiente'
  },
  'completed': {
    className: 'bg-green-100 text-green-800',
    label: 'Completado'
  },
  'action-required': {
    className: 'bg-blue-100 text-blue-800',
    label: 'Acción Requerida'
  },
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
  }
};

const StatusLabel = ({ status, className }: StatusLabelProps) => {
  const config = statusConfig[status];
  
  return (
    <span 
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', 
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
};

export default StatusLabel;
