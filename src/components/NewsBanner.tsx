
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import { Bell, ExternalLink, Calendar } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'update' | 'news' | 'alert';
  url?: string;
  image?: string;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Nueva función de seguimiento de pagos',
    description: 'Ahora puedes ver el historial completo de pagos de tus inquilinos en tiempo real.',
    date: '2024-06-08',
    type: 'update',
    url: '#',
    image: 'photo-1649972904349-6e44c42644a7'
  },
  {
    id: '2',
    title: 'Actualización en el proceso de investigación',
    description: 'Mejoramos los tiempos de respuesta en las investigaciones de inquilinos.',
    date: '2024-06-07',
    type: 'news',
    url: '#'
  },
  {
    id: '3',
    title: 'Mantenimiento programado',
    description: 'El sistema estará en mantenimiento el domingo de 2:00 AM a 4:00 AM.',
    date: '2024-06-06',
    type: 'alert',
    url: '#'
  },
  {
    id: '4',
    title: 'Nuevos reportes disponibles',
    description: 'Genera reportes detallados de ocupación y rentabilidad de tus propiedades.',
    date: '2024-06-05',
    type: 'update',
    url: '#',
    image: 'photo-1488590528505-98d2b5aba04b'
  }
];

const getTypeColor = (type: NewsItem['type']) => {
  switch (type) {
    case 'update':
      return 'bg-mica-teal text-white';
    case 'news':
      return 'bg-mica-blue text-white';
    case 'alert':
      return 'bg-yellow-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

const getTypeIcon = (type: NewsItem['type']) => {
  switch (type) {
    case 'alert':
      return <Bell className="w-4 h-4" />;
    default:
      return <Calendar className="w-4 h-4" />;
  }
};

const NewsBanner = () => {
  const handleNewsClick = (url?: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Últimas Noticias</h2>
        <span className="text-sm text-gray-500">Desliza para ver más</span>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {newsItems.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card 
                className="h-full cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden group"
                onClick={() => handleNewsClick(item.url)}
              >
                {item.image && (
                  <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&q=80`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      {item.type === 'update' ? 'Actualización' : item.type === 'news' ? 'Noticia' : 'Alerta'}
                    </span>
                    <span className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-mica-teal transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {item.description}
                  </p>
                  
                  {item.url && item.url !== '#' && (
                    <div className="flex items-center text-mica-teal text-sm font-medium group-hover:text-mica-teal-dark transition-colors">
                      <span className="mr-1">Leer más</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  )}
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default NewsBanner;
