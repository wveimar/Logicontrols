import React from 'react';
import { ShoppingBag, Menu, X, Smartphone, Monitor, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { ActiveTab } from '../types';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  isDeviceMode: boolean;
  onToggleDeviceMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  activeTab,
  onSelectTab,
  isDeviceMode,
  onToggleDeviceMode,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#050811]/90 backdrop-blur-md border-b border-[#00F2FE]/20 transition-all">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
          
          {/* Logo & Brand Zone */}
          <button
            onClick={() => onSelectTab('inicio')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            aria-label="Ir a Inicio"
          >
            {/* Hexagonal Cyber Industrial Icon */}
            <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
              <div className="absolute inset-0 bg-[#00F2FE]/20 rounded-lg blur-[6px] group-hover:bg-[#00F2FE]/30 transition-all"></div>
              <svg viewBox="0 0 40 40" className="w-8 h-8 relative z-10" fill="none">
                <polygon
                  points="20,2 36,11 36,29 20,38 4,29 4,11"
                  stroke="#00F2FE"
                  strokeWidth="2.5"
                  className="drop-shadow-[0_0_8px_rgba(0,242,254,0.8)]"
                />
                <polygon
                  points="20,8 30,14 30,26 20,32 10,26 10,14"
                  stroke="#0072FF"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                <circle cx="20" cy="20" r="3" fill="#00F2FE" className="animate-pulse" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base font-extrabold tracking-wider text-white uppercase group-hover:text-[#00F2FE] transition-colors font-['Outfit']">
                  LOGICONTROLS
                </span>
              </div>
              <span className="text-[10px] text-[#9CA3AF] tracking-tight hidden sm:inline leading-none">
                Automatización y Soluciones Eléctricas
              </span>
            </div>
          </button>

          {/* Desktop Nav Links (hidden on mobile frame) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <button
              onClick={() => onSelectTab('inicio')}
              className={`transition-colors py-1 ${activeTab === 'inicio' ? 'text-[#00F2FE] border-b-2 border-[#00F2FE]' : 'text-[#9CA3AF] hover:text-white'}`}
            >
              Inicio
            </button>
            <button
              onClick={() => onSelectTab('tienda')}
              className={`transition-colors py-1 ${activeTab === 'tienda' ? 'text-[#00F2FE] border-b-2 border-[#00F2FE]' : 'text-[#9CA3AF] hover:text-white'}`}
            >
              Tienda Industrial
            </button>
            <button
              onClick={() => onSelectTab('servicios')}
              className={`transition-colors py-1 ${activeTab === 'servicios' ? 'text-[#00F2FE] border-b-2 border-[#00F2FE]' : 'text-[#9CA3AF] hover:text-white'}`}
            >
              Nuestros Servicios
            </button>
            <button
              onClick={() => onSelectTab('contacto')}
              className={`transition-colors py-1 ${activeTab === 'contacto' ? 'text-[#00F2FE] border-b-2 border-[#00F2FE]' : 'text-[#9CA3AF] hover:text-white'}`}
            >
              Contáctanos
            </button>
            <button
              onClick={() => onSelectTab('showcase')}
              className={`transition-colors py-1 flex items-center gap-1 ${activeTab === 'showcase' ? 'text-[#00F2FE] border-b-2 border-[#00F2FE]' : 'text-[#9CA3AF] hover:text-white'}`}
            >
              <span>Ficha UI/UX</span>
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            
            {/* Device Mode Toggle (Desktop only helper) */}
            <button
              onClick={onToggleDeviceMode}
              title={isDeviceMode ? 'Cambiar a Pantalla Completa' : 'Ver en Marco Móvil (iPhone)'}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[#0D1629] border border-[#00F2FE]/30 text-[#9CA3AF] hover:text-[#00F2FE] hover:border-[#00F2FE] transition-all"
            >
              {isDeviceMode ? (
                <>
                  <Monitor className="w-3.5 h-3.5 text-[#00F2FE]" />
                  <span>Pantalla Completa</span>
                </>
              ) : (
                <>
                  <Smartphone className="w-3.5 h-3.5 text-[#00F2FE]" />
                  <span>Modo Celular</span>
                </>
              )}
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label={`Carrito de compras con ${cartCount} productos`}
              className="relative p-2.5 rounded-xl bg-[#0D1629] border border-[#00F2FE]/25 hover:border-[#00F2FE] text-white hover:text-[#00F2FE] transition-all active:scale-95"
            >
              <ShoppingBag className="w-5 h-5 text-[#00F2FE]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-[#0072FF] to-[#00F2FE] text-[#050811] text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,242,254,0.7)]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl bg-[#0D1629] border border-[#00F2FE]/25 text-[#9CA3AF] hover:text-white active:scale-95 transition-all"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-[#00F2FE]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#050811]/95 backdrop-blur-xl p-6 flex flex-col justify-between animate-fadeIn">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#0D1629]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#0D1629] border border-[#00F2FE]/40 flex items-center justify-center">
                  <span className="text-[#00F2FE] font-black text-sm">LC</span>
                </div>
                <div>
                  <h3 className="font-bold text-white tracking-wider">LOGICONTROLS</h3>
                  <p className="text-xs text-[#9CA3AF]">Menú de Navegación</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg bg-[#0D1629] text-[#9CA3AF] hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-8 space-y-3">
              {[
                { tab: 'inicio', label: 'Inicio', desc: 'Portada, catálogo y servicios' },
                { tab: 'tienda', label: 'Tienda Industrial', desc: 'PLCs, variadores, sensores y HMIs' },
                { tab: 'servicios', label: 'Nuestros Servicios', desc: 'Ingeniería, diagnóstico y soporte RETIE' },
                { tab: 'contacto', label: 'Contacto & WhatsApp', desc: '+57 313 770 5394 Bogotá, Colombia' },
                { tab: 'showcase', label: 'Ficha de Diseño UI/UX', desc: 'Muestrario de pantallas y paleta' },
              ].map((item) => (
                <button
                  key={item.tab}
                  onClick={() => {
                    onSelectTab(item.tab as ActiveTab);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                    activeTab === item.tab
                      ? 'bg-[#0D1629] border-[#00F2FE] text-white shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                      : 'bg-[#111928]/60 border-white/5 text-[#9CA3AF] hover:text-white hover:border-[#00F2FE]/40'
                  }`}
                >
                  <div>
                    <div className="font-semibold text-base text-white">{item.label}</div>
                    <div className="text-xs text-[#9CA3AF] mt-0.5">{item.desc}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#00F2FE]" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#0D1629]">
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Hola%20Logicontrols,%20requiero%20asesor%C3%ADa%20industrial`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0072FF] to-[#00F2FE] text-[#050811] font-bold flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,242,254,0.4)]"
            >
              <span>Chat de Ingeniería por WhatsApp</span>
            </a>
            <p className="text-center text-xs text-[#9CA3AF] mt-3">{COMPANY_INFO.phone} · Bogotá, Colombia</p>
          </div>
        </div>
      )}
    </>
  );
};
