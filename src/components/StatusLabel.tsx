
import React from 'react';
import { cn } from '@/lib/utils';

type Status = 'pending' | 'completed' | 'action-required';

interface StatusLabelProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<Status, { className: string, label: string }> = {
  'pending': {
    className: 'status-pending',
    label: 'Pendiente'
  },
  'completed': {
    className: 'status-completed',
    label: 'Completado'
  },
  'action-required': {
    className: 'status-action-required',
    label: 'Acción Requerida'
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
