import React from 'react';
import { ShoppingCart, ArrowRight, Cpu, Activity, Radio, Server, Clock, Wrench, Star, MessageSquare, Truck, Shield } from 'lucide-react';
import { PRODUCTS_DATA, COMPANY_INFO, HERO_IMAGE } from '../../data/mockData';
import { Product, ActiveTab } from '../../types';

interface HomeViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onNavigateTab: (tab: ActiveTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectProduct,
  onAddToCart,
  onNavigateTab,
}) => {
  const featuredProducts = PRODUCTS_DATA.slice(0, 2);

  const quickServices = [
    { id: 'plc', label: 'PLC y Control', icon: Cpu },
    { id: 'variadores', label: 'Variadores de Frecuencia', icon: Activity },
    { id: 'sensores', label: 'Sensores e Instrumentación', icon: Radio },
    { id: 'tableros', label: 'Tableros Eléctricos', icon: Server },
    { id: 'asistencia', label: 'Asistencia Técnica', icon: Clock },
    { id: 'diagnostico', label: 'Diagnóstico y Soporte', icon: Wrench },
  ];

  return (
    <div className="space-y-6 pb-24 text-white">
      
      {/* Hero Section */}
      <section className="relative px-4 pt-5 pb-2">
        <div className="max-w-md mx-auto sm:max-w-xl">
          
          {/* Main Title & Subtitle */}
          <div className="space-y-2 mb-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] text-white">
              Automatización <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#00F2FE]">
                que impulsa tu industria
              </span>
            </h1>
            <p className="text-sm text-[#9CA3AF] max-w-sm">
              Control inteligente y soluciones eléctricas de alta gama para optimizar la productividad de tu planta.
            </p>

            {/* Glowing CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onNavigateTab('tienda')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0072FF] to-[#00F2FE] text-[#050811] font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(0,242,254,0.45)] hover:shadow-[0_4px_30px_rgba(0,242,254,0.65)] hover:brightness-110 active:scale-[0.98] transition-all group"
              >
                <ShoppingCart className="w-4 h-4 text-[#050811] group-hover:scale-110 transition-transform" />
                <span>Tienda Industrial</span>
                <ArrowRight className="w-4 h-4 text-[#050811] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Hero Industrial Robotic Arm Graphic with Vignette */}
          <div className="relative rounded-3xl overflow-hidden border border-[#00F2FE]/30 bg-[#0D1629] shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
            <div className="h-56 sm:h-64 relative overflow-hidden">
              <img
                src={HERO_IMAGE}
                alt="Brazo robótico y automatización industrial"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Dark Vignette Overlay for Seamless Dark Integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050811]/40 via-transparent to-transparent" />
              
              {/* Floating Pill Badge */}
              <div className="absolute bottom-3 left-3 bg-[#050811]/90 backdrop-blur-md border border-[#00F2FE]/40 px-3 py-1.5 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse"></span>
                <span className="text-[11px] font-semibold text-white tracking-wide">Industria 4.0 · Colombia</span>
              </div>
            </div>
          </div>

          {/* Quick Access Horizontal Pills / Cards */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              { title: 'Automatización y Control', icon: Cpu },
              { title: 'Soporte Técnico 24/7', icon: Wrench },
              { title: 'Proyectos a la Medida', icon: Shield },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => onNavigateTab('servicios')}
                  className="p-3 rounded-2xl bg-[#0D1629]/90 border border-[#00F2FE]/20 hover:border-[#00F2FE] hover:shadow-[0_0_15px_rgba(0,242,254,0.2)] transition-all flex flex-col items-center text-center gap-1.5 group active:scale-95"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#111928] border border-[#00F2FE]/30 flex items-center justify-center text-[#00F2FE] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-200 leading-tight">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Nuestros Servicios Modular Grid */}
      <section className="px-4">
        <div className="max-w-md mx-auto sm:max-w-xl">
          <div className="text-center mb-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">Nuestros Servicios</h2>
            <p className="text-xs text-[#9CA3AF] mt-0.5">Soluciones integrales para tu industria</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {quickServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <button
                  key={srv.id}
                  onClick={() => onNavigateTab('servicios')}
                  className="p-3.5 rounded-2xl bg-[#0D1629] border border-white/10 hover:border-[#00F2FE]/50 hover:shadow-[0_0_15px_rgba(0,242,254,0.2)] transition-all flex flex-col items-center text-center gap-2 group active:scale-95"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#111928] border border-[#00F2FE]/30 flex items-center justify-center text-[#00F2FE] group-hover:scale-110 group-hover:bg-[#00F2FE]/10 transition-all">
                    <Icon className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]" />
                  </div>
                  <span className="text-xs font-semibold text-white leading-tight">
                    {srv.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="px-4">
        <div className="max-w-md mx-auto sm:max-w-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#00F2FE] rounded-full shadow-[0_0_8px_#00F2FE]"></span>
              <h2 className="text-lg font-extrabold text-white">Productos Destacados</h2>
            </div>
            <button
              onClick={() => onNavigateTab('tienda')}
              className="text-xs font-semibold text-[#00F2FE] hover:underline flex items-center gap-1"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {featuredProducts.map((prod) => (
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
                    <div className="absolute top-1.5 right-1.5 bg-[#050811]/85 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-[#00F2FE] border border-[#00F2FE]/30">
                      En Stock
                    </div>
                  </div>

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
                  <div className="text-sm font-black text-[#00F2FE] drop-shadow-[0_0_8px_rgba(0,242,254,0.2)]">
                    {prod.priceFormatted}
                  </div>

                  <button
                    onClick={() => onAddToCart(prod)}
                    className="mt-2 w-full py-1.5 rounded-lg bg-[#111928] border border-[#00F2FE]/40 hover:bg-[#00F2FE]/20 hover:border-[#00F2FE] text-white text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 text-[#00F2FE]" />
                    <span>Agregar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Envíos a todo Colombia Banner */}
          <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-[#0D1629] to-[#111928] border border-[#00F2FE]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#050811] border border-[#00F2FE]/40 flex items-center justify-center text-[#00F2FE]">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Envíos a todo Colombia</h4>
                <p className="text-[11px] text-[#9CA3AF]">Despachos rápidos desde Bogotá</p>
              </div>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Hola%20Logicontrols,%20deseo%20consultar%20costo%20de%20env%C3%ADo`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-emerald-600/30 border border-emerald-400/40 text-emerald-400 hover:bg-emerald-500/30 transition-all"
              title="Consultar por WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Floating WhatsApp CTA */}
          <div className="mt-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Hola%20Logicontrols,%20deseo%20informaci%C3%B3n%20sobre%20sus%20servicios`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.35)] hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Contáctanos por WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
