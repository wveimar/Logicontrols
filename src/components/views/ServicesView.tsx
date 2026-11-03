import React from 'react';
import { Cpu, Wrench, Clock, Monitor, Layers, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO, ENGINEER_IMAGE } from '../../data/mockData';
import { ServiceItem } from '../../types';

interface ServicesViewProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onSelectService,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return Cpu;
      case 'Wrench': return Wrench;
      case 'Clock': return Clock;
      case 'Monitor': return Monitor;
      case 'Layers': return Layers;
      default: return Cpu;
    }
  };

  return (
    <div className="space-y-5 pb-24 text-white px-4 pt-3">
      <div className="max-w-md mx-auto sm:max-w-xl space-y-5">
        
        {/* Hero Engineer Image with Vignette & Brand Badge */}
        <div className="relative rounded-3xl overflow-hidden border border-[#00F2FE]/30 bg-[#0D1629] shadow-xl">
          <div className="h-52 sm:h-60 relative overflow-hidden">
            <img
              src={ENGINEER_IMAGE}
              alt="Ingeniero en tablero de automatización industrial"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Vignette blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/40 to-transparent" />
            
            {/* Logicontrols brand badge in image corner */}
            <div className="absolute top-3 right-3 bg-[#050811]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#00F2FE]/40 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
              <span className="text-[11px] font-bold text-white tracking-wider">LOGICONTROLS</span>
            </div>

            {/* Bottom text overlay */}
            <div className="absolute bottom-3 left-4 right-4">
              <h1 className="text-2xl font-black text-white">
                Nuestros <span className="text-[#00F2FE]">Servicios</span>
              </h1>
              <p className="text-xs text-slate-300">
                Experiencia y tecnología a tu servicio en toda Colombia
              </p>
            </div>
          </div>
        </div>

        {/* Services List matching Screen 3 */}
        <div className="space-y-3">
          {SERVICES_DATA.map((service) => {
            const Icon = getIcon(service.iconName);

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="p-4 rounded-2xl bg-[#0D1629] border border-white/10 hover:border-[#00F2FE] hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] transition-all cursor-pointer flex items-center justify-between gap-3 group active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#111928] border border-[#00F2FE]/30 flex items-center justify-center text-[#00F2FE] shrink-0 group-hover:scale-105 group-hover:border-[#00F2FE] transition-all">
                    <Icon className="w-6 h-6 drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[#00F2FE] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#9CA3AF] mt-0.5 line-clamp-1">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#111928] border border-white/10 group-hover:border-[#00F2FE] group-hover:bg-[#00F2FE]/20 flex items-center justify-center text-[#9CA3AF] group-hover:text-[#00F2FE] shrink-0 transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact CTA Card matching Screen 3 */}
        <div className="p-5 rounded-3xl bg-gradient-to-br from-[#0D1629] to-[#111928] border border-[#00F2FE]/40 text-center space-y-3 shadow-[0_0_25px_rgba(0,242,254,0.15)]">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-white">
              Contáctanos hoy
            </h3>
            <p className="text-xs text-[#9CA3AF] mt-0.5">
              Y lleva tu industria al siguiente nivel de automatización
            </p>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Hola%20Logicontrols,%20deseo%20asesor%C3%ADa%20para%20un%20proyecto%20industrial`}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chatear por WhatsApp</span>
          </a>

          <div className="flex items-center justify-center gap-2 text-[11px] text-[#9CA3AF]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>Atención de emergencias y soporte a paradas de planta</span>
          </div>
        </div>

      </div>
    </div>
  );
};
