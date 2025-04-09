
import React from 'react';
import { Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="mb-10">
      <div className="mb-10">
        <span className="inline-block px-3 py-1 text-sm font-medium text-mica-teal bg-mica-teal/10 rounded-full mb-4 animate-fade-in">
          Protección de Renta Mica
        </span>
        <h1 className="text-4xl font-bold mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          ¡Bienvenido a tu tablero!
        </h1>
        <p className="text-gray-500 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Administra tus propiedades en renta con confianza utilizando las potentes herramientas de Mica para 
          evaluación de inquilinos, protección de renta y gestión de contratos.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <button className="cta-primary group">
          <Shield className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          <span>Compartir link de Investigación</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
