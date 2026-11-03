import React, { useState } from 'react';
import { Eye, Smartphone, Palette, Type, Layers, ExternalLink } from 'lucide-react';
import { SHOWCASE_POSTER } from '../../data/mockData';
import { ActiveTab, Product } from '../../types';
import { PRODUCTS_DATA } from '../../data/mockData';

interface ShowcaseGalleryViewProps {
  onNavigateTab: (tab: ActiveTab) => void;
  onSelectProduct: (product: Product) => void;
}

export const ShowcaseGalleryView: React.FC<ShowcaseGalleryViewProps> = ({
  onNavigateTab,
  onSelectProduct,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'tokens' | 'screens' | 'reference'>('screens');

  const colorTokens = [
    { name: 'Negro Industrial', hex: '#050811', usage: 'Fondo general y pantallas base', bg: 'bg-[#050811]', border: 'border-white/20' },
    { name: 'Azul Profundo', hex: '#0D1629', usage: 'Tarjetas, contenedores y barras', bg: 'bg-[#0D1629]', border: 'border-[#00F2FE]/30' },
    { name: 'Superficie Modular', hex: '#111928', usage: 'Módulos internos y botones oscuros', bg: 'bg-[#111928]', border: 'border-white/20' },
    { name: 'Azul Eléctrico', hex: '#0072FF', usage: 'Acento primario y gradiente', bg: 'bg-[#0072FF]', border: 'border-white/20' },
    { name: 'Turquesa / Neón', hex: '#00F2FE', usage: 'CTA, precios, halos y efectos glow', bg: 'bg-[#00F2FE]', border: 'border-white/20', textDark: true },
    { name: 'Blanco Puro', hex: '#FFFFFF', usage: 'Títulos de alto impacto', bg: 'bg-white', border: 'border-white/20', textDark: true },
    { name: 'Gris Metálico', hex: '#9CA3AF', usage: 'Textos secundarios y leyendas', bg: 'bg-[#9CA3AF]', border: 'border-white/20', textDark: true },
  ];

  const screensInfo = [
    {
      num: '01',
      title: 'Inicio / Hero',
      desc: 'Brazo robótico, lema de automatización, accesos directos y servicios clave.',
      action: () => onNavigateTab('inicio'),
      btnLabel: 'Ver Pantalla Inicio',
    },
    {
      num: '02',
      title: 'Tienda Industrial',
      desc: 'Buscador, filtro por categorías (PLC, Variadores, Sensores) y precios en COP.',
      action: () => onNavigateTab('tienda'),
      btnLabel: 'Ver Catálogo',
    },
    {
      num: '03',
      title: 'Nuestros Servicios',
      desc: 'Ingeniero en tablero de control, 5 servicios especializados y cotización.',
      action: () => onNavigateTab('servicios'),
      btnLabel: 'Ver Servicios',
    },
    {
      num: '04',
      title: 'Detalle de Producto',
      desc: 'Ficha técnica del PLC Siemens S7-1200, galería, checklist, selector y WhatsApp.',
      action: () => onSelectProduct(PRODUCTS_DATA[0]),
      btnLabel: 'Abrir PLC S7-1200',
    },
    {
      num: '05',
      title: 'Contáctanos',
      desc: 'Tarjetas directas (teléfono, email, Bogotá), mapa tecnológico y botón de chat.',
      action: () => onNavigateTab('contacto'),
      btnLabel: 'Ver Contacto',
    },
  ];

  return (
    <div className="space-y-6 pb-28 text-white px-4 pt-4">
      <div className="max-w-md mx-auto sm:max-w-2xl space-y-5">
        
        {/* Header */}
        <div className="text-center sm:text-left">
          <div className="text-xs font-bold text-[#00F2FE] tracking-wider uppercase">
            Ficha de Estilo UI/UX · Mobile-First
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Sistema Visual <span className="text-[#00F2FE]">Logicontrols</span>
          </h1>
          <p className="text-xs text-[#9CA3AF] mt-1">
            Diseño móvil de alta gama, tecnológico, futurista y uniforme en Dark Mode nativo.
          </p>
        </div>

        {/* Segmented Control */}
        <div className="grid grid-cols-3 p-1 rounded-2xl bg-[#0D1629] border border-[#00F2FE]/25 text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab('screens')}
            className={`py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeSubTab === 'screens'
                ? 'bg-gradient-to-r from-[#0072FF] to-[#00F2FE] text-[#050811] shadow-[0_0_12px_rgba(0,242,254,0.4)]'
                : 'text-[#9CA3AF] hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>5 Pantallas</span>
          </button>
          <button
            onClick={() => setActiveSubTab('tokens')}
            className={`py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeSubTab === 'tokens'
                ? 'bg-gradient-to-r from-[#0072FF] to-[#00F2FE] text-[#050811] shadow-[0_0_12px_rgba(0,242,254,0.4)]'
                : 'text-[#9CA3AF] hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Colores & Reglas</span>
          </button>
          <button
            onClick={() => setActiveSubTab('reference')}
            className={`py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeSubTab === 'reference'
                ? 'bg-gradient-to-r from-[#0072FF] to-[#00F2FE] text-[#050811] shadow-[0_0_12px_rgba(0,242,254,0.4)]'
                : 'text-[#9CA3AF] hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Mockup Original</span>
          </button>
        </div>

        {/* Tab 1: Screens List & Jump */}
        {activeSubTab === 'screens' && (
          <div className="space-y-3">
            <p className="text-xs text-[#9CA3AF]">
              Toca cualquier pantalla para navegar directamente a la experiencia interactiva:
            </p>

            <div className="space-y-3">
              {screensInfo.map((scr) => (
                <div
                  key={scr.num}
                  className="p-4 rounded-2xl bg-[#0D1629] border border-[#00F2FE]/25 hover:border-[#00F2FE] transition-all flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-black text-[#00F2FE] tracking-tight w-7 shrink-0">
                      {scr.num}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-white">{scr.title}</h4>
                      <p className="text-xs text-[#9CA3AF] mt-0.5">{scr.desc}</p>
                    </div>
                  </div>

                  <button
                    onClick={scr.action}
                    className="shrink-0 px-3 py-2 rounded-xl bg-[#111928] border border-[#00F2FE]/40 hover:bg-[#00F2FE]/20 text-[#00F2FE] text-xs font-semibold flex items-center gap-1.5 active:scale-95 transition-all"
                  >
                    <span>{scr.btnLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Style Guide Tokens & UI/UX Constitution */}
        {activeSubTab === 'tokens' && (
          <div className="space-y-5">
            {/* Colors */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#00F2FE] uppercase tracking-wider flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5" />
                <span>Paleta Cromática Industrial</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {colorTokens.map((c) => (
                  <div
                    key={c.name}
                    className="p-2.5 rounded-xl bg-[#0D1629] border border-white/10 flex items-center gap-3"
                  >
                    <div className={`w-9 h-9 rounded-lg ${c.bg} ${c.border} border shrink-0 shadow-sm`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-white">{c.name}</span>
                        <code className="text-[10px] text-[#00F2FE] font-mono">{c.hex}</code>
                      </div>
                      <p className="text-[11px] text-[#9CA3AF] truncate">{c.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="p-4 rounded-2xl bg-[#0D1629] border border-white/10 space-y-3">
              <h3 className="text-xs font-bold text-[#00F2FE] uppercase tracking-wider flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5" />
                <span>Jerarquía Tipográfica (Móvil)</span>
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex items-baseline justify-between border-b border-white/5 pb-1.5">
                  <span className="font-extrabold text-xl text-white">H1 Título 28-32px</span>
                  <span className="text-[#9CA3AF]">Bold / Blanco Puro</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-white/5 pb-1.5">
                  <span className="font-bold text-base text-white">H2 Subtítulos 18-20px</span>
                  <span className="text-[#9CA3AF]">SemiBold / Blanco</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-white/5 pb-1.5">
                  <span className="font-normal text-sm text-[#9CA3AF]">Cuerpo de texto 14px</span>
                  <span className="text-[#9CA3AF]">Regular / Gris Metálico</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-black text-base text-[#00F2FE]">$2.450.000 COP</span>
                  <span className="text-[#9CA3AF]">Precios / Turquesa Neón</span>
                </div>
              </div>
            </div>

            {/* Card & Button rules */}
            <div className="p-4 rounded-2xl bg-[#0D1629] border border-[#00F2FE]/25 space-y-3">
              <h3 className="text-xs font-bold text-[#00F2FE] uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Componentes y Microinteracciones</span>
              </h3>

              <ul className="text-xs text-[#9CA3AF] space-y-2 list-disc list-inside">
                <li><strong className="text-white">Dark Mode Nativo:</strong> Sin bloques blancos masivos para preservar inmersión y bajo consumo en OLED.</li>
                <li><strong className="text-white">Bordes Luminosos:</strong> 1px con halo tecnológico sutil `border: 1px solid rgba(0, 242, 254, 0.25)`.</li>
                <li><strong className="text-white">CTA Principal:</strong> Gradiente Azul Eléctrico (#0072FF) a Turquesa (#00F2FE) con sombra difuminada Glow.</li>
                <li><strong className="text-white">Ergonomía Táctil:</strong> Áreas de toque &ge; 44x44px y navegación inferior al alcance del pulgar.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 3: Reference Image */}
        {activeSubTab === 'reference' && (
          <div className="space-y-3">
            <p className="text-xs text-[#9CA3AF]">
              Diseño original de referencia subido en el proyecto con las 5 pantallas de Logicontrols:
            </p>

            <div className="rounded-2xl overflow-hidden border border-[#00F2FE]/30 bg-[#0D1629]">
              <img
                src={SHOWCASE_POSTER}
                alt="Galería Móvil de Automatización Industrial Logicontrols"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
