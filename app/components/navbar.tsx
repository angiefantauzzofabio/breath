import React from 'react';

const Navbar = () => {
  const links = [
    { name: 'Sobre el proyecto', href: '#' },
    { name: 'Objetivos', href: '#' },
    { name: 'Investigación', href: '#' },
    { name: 'Futuro', href: '#' },
    { name: 'Contactanos', href: '#' },
  ];

  return (
    <nav className="relative w-full bg-[#f8f9e9] border-t-8 border-[#d4e95d] px-8 py-4 flex items-center justify-between">
      {/* Lado Izquierdo: Imagen de la planta */}

      {/* Centro: Links de navegación */}
      <ul className="flex space-x-8 text-gray-600 font-medium">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-gray-900 transition-colors">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Lado Derecho: Logo Circular */}
      <div className="flex-shrink-0">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4a7c6d] to-[#7db2b1] flex flex-col items-center justify-center text-white text-[10px] font-bold text-center p-2 shadow-sm">
          <span>BREATH</span>
          <span className="border-t border-white/30 mt-1 pt-1">RESPIRAR</span>
          {/* Aquí irían los iconos de los pulmones/hoja */}
          <div className="mt-1 text-xs">🌿</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;