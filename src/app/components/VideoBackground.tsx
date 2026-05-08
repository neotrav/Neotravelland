import { useState, useEffect } from 'react';

export function VideoBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Используем изображения вместо видео для большей надежности
  const backgrounds = [
    'https://images.unsplash.com/photo-1770230739533-13c4704e0d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHRha2luZyUyMG9mZiUyMHJ1bndheXxlbnwxfHx8fDE3NzM5Mzg2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760781284910-8d4200cf26cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBwYXNzZW5nZXJzJTIwd2Fsa2luZ3xlbnwxfHx8fDE3NzM5Mzg2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1655722724447-2d2a3071e7f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZGluZyUyMHBhc3MlMjBwYXNzcG9ydCUyMHRyYXZlbHxlbnwxfHx8fDE3NzM5Mzg2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1663007714483-2fe4742a6a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGNsb3VkcyUyMHdpbmclMjB2aWV3fGVufDF8fHx8MTc3MzkzODY3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Меняем каждые 5 секунд

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ 
            opacity: index === currentIndex ? 1 : 0,
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Добавляем эффект zoom для имитации движения */}
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animation: index === currentIndex ? 'kenburns 15s ease-out' : 'none',
            }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151827]/95 via-[#151827]/85 to-[#88d756]/20 z-10" />
      
      <style>{`
        @keyframes kenburns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
