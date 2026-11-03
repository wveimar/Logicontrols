import React, { useState } from 'react';
import { Search, ShoppingCart, Star, Cpu, Activity, Radio, Tv, Server, Layers, Truck, MessageSquare, X } from 'lucide-react';
import { PRODUCTS_DATA, COMPANY_INFO } from '../../data/mockData';
import { Product } from '../../types';

interface StoreViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const StoreView: React.FC<StoreViewProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Todos', icon: Layers },
    { id: 'plc', label: 'PLC', icon: Cpu },
    { id: 'variadores', label: 'Variadores', icon: Activity },
    { id: 'sensores', label: 'Sensores', icon: Radio },
    { id: 'hmi', label: 'HMI', icon: Tv },
    { id: 'tableros', label: 'Tableros', icon: Server },
    { id: 'otros', label: 'Otros', icon: Layers },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-5 pb-24 text-white px-4 pt-4">
      <div className="max-w-md mx-auto sm:max-w-xl space-y-4">
        
        {/* Title Header matching Screen 2 */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Tienda <span className="text-[#00F2FE]">Industrial</span>
          </h1>
          <p className="text-xs text-[#9CA3AF] mt-0.5">
            Equipos y soluciones de la más alta calidad para la industria colombiana
          </p>
        </div>

        {/* Search Bar with glowing focus */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9CA3AF]">
            <Search className="w-4 h-4 text-[#00F2FE]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar productos (ej. Siemens, VFD, PLC)..."
            className="w-full pl-10 pr-10 py-3 rounded-2xl bg-[#0D1629] border border-[#00F2FE]/30 text-white placeholder:text-[#9CA3AF]/60 text-xs focus:outline-none focus:border-[#00F2FE] focus:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#9CA3AF] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills Scroller */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-2.5 rounded-2xl border transition-all flex flex-col items-center justify-center gap-1 active:scale-95 ${
                  isSelected
                    ? 'bg-[#0D1629] border-[#00F2FE] text-[#00F2FE] shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                    : 'bg-[#111928]/60 border-white/5 text-[#9CA3AF] hover:text-white hover:border-[#00F2FE]/40'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'scale-110 drop-shadow-[0_0_8px_#00F2FE]' : ''}`} />
                <span className="text-[11px] font-semibold tracking-tight">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Section Title */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#00F2FE] rounded-full shadow-[0_0_8px_#00F2FE]" />
            <h2 className="text-base font-extrabold text-white">
              {selectedCategory === 'all' ? 'Todos los Equipos' : `Categoría: ${selectedCategory.toUpperCase()}`}
            </h2>
          </div>
          <span className="text-xs text-[#9CA3AF]">{filteredProducts.length} disponibles</span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-10 rounded-2xl bg-[#0D1629] border border-white/10 text-center space-y-2">
            <p className="text-sm text-[#9CA3AF]">No se encontraron productos con el filtro actual.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs rounded-xl bg-[#111928] text-[#00F2FE] border border-[#00F2FE]/40"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="p-3 rounded-2xl bg-[#0D1629] border border-[#00F2FE]/25 hover:border-[#00F2FE] transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Image container */}
                  <div
                    onClick={() => onSelectProduct(prod)}
                    className="relative w-full h-32 rounded-xl bg-[#050811] overflow-hidden mb-2.5 cursor-pointer flex items-center justify-center border border-white/5"
                  >
                    <img
                      src={prod.images[0]}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-1.5 right-1.5 bg-[#050811]/90 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-bold text-[#00F2FE] border border-[#00F2FE]/30">
                      En Stock
                    </div>
                  </div>

                  <div className="text-[10px] text-[#9CA3AF] uppercase font-semibold">{prod.brand}</div>
                  <h3
                    onClick={() => onSelectProduct(prod)}
                    className="font-bold text-xs sm:text-sm text-white line-clamp-2 cursor-pointer hover:text-[#00F2FE] transition-colors"
                  >
                    {prod.name}
                  </h3>

                  <div className="flex items-center gap-1 mt-1 text-amber-400 text-[10px]">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span className="font-bold text-white">{prod.rating.toFixed(1)}</span>
                    <span className="text-[#9CA3AF]">({prod.reviewsCount})</span>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-white/10">
                  <div className="text-xs sm:text-sm font-black text-[#00F2FE] drop-shadow-[0_0_8px_rgba(0,242,254,0.2)]">
                    {prod.priceFormatted}
                  </div>

                  <div className="grid grid-cols-3 gap-1 mt-2">
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="col-span-1 py-1.5 rounded-lg bg-[#111928] border border-white/10 hover:border-[#00F2FE]/60 text-[#9CA3AF] hover:text-white text-[11px] font-medium transition-colors text-center"
                    >
                      Ver
                    </button>
                    <button
                      onClick={() => onAddToCart(prod)}
                      className="col-span-2 py-1.5 rounded-lg bg-[#111928] border border-[#00F2FE]/40 hover:bg-[#00F2FE]/20 hover:border-[#00F2FE] text-white text-xs font-semibold flex items-center justify-center gap-1 active:scale-95 transition-all"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 text-[#00F2FE]" />
                      <span>Agregar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Envíos a todo Colombia Banner */}
        <div className="p-3.5 rounded-2xl bg-[#0D1629] border border-[#00F2FE]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#050811] border border-[#00F2FE]/40 flex items-center justify-center text-[#00F2FE]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Envíos a todo Colombia</h4>
              <p className="text-[11px] text-[#9CA3AF]">Entrega asegurada y factura electrónica</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Hola%20Logicontrols,%20requiero%20cotizaci%C3%B3n%20formal%20de%20equipos`}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-emerald-600/30 border border-emerald-400/40 text-emerald-400 hover:bg-emerald-500/30 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
