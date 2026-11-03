import React, { useState } from 'react';
import { X, CheckCircle, MessageSquare, Send, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface ServiceQuoteModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceQuoteModal: React.FC<ServiceQuoteModalProps> = ({
  service,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    city: 'Bogotá',
    details: '',
  });
  const [isSent, setIsSent] = useState(false);

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      onClose();
    }, 2400);
  };

  const whatsappMessage = encodeURIComponent(
    `*SOLICITUD DE SERVICIO TÉCNICO - LOGICONTROLS*\n` +
    `Servicio: ${service.title}\n` +
    `Empresa: ${formData.company || 'Industrial'}\n` +
    `Contacto: ${formData.name || 'Cliente'}\n` +
    `Ciudad: ${formData.city}\n` +
    `Requerimiento: ${formData.details || 'Requiero diagnóstico o cotización técnica'}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#0D1629] border border-[#00F2FE]/30 rounded-t-3xl sm:rounded-3xl shadow-[0_0_35px_rgba(0,242,254,0.25)] flex flex-col text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#050811]/60 sticky top-0 z-10 backdrop-blur-md">
          <div>
            <div className="text-[11px] font-bold text-[#00F2FE] tracking-wider uppercase">Ingeniería Especializada</div>
            <h3 className="text-lg font-extrabold text-white line-clamp-1">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#111928] text-[#9CA3AF] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            {service.description}
          </p>

          {/* Benefits */}
          <div className="p-3.5 rounded-2xl bg-[#111928] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-[#00F2FE] uppercase tracking-wider">Beneficios para tu planta:</h4>
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle className="w-3.5 h-3.5 text-[#00F2FE] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Quick Contact Form */}
          {isSent ? (
            <div className="p-6 rounded-2xl bg-[#111928] border border-[#00F2FE] text-center space-y-2">
              <CheckCircle className="w-12 h-12 text-[#00F2FE] mx-auto animate-bounce" />
              <h4 className="font-extrabold text-white text-base">¡Solicitud Recibida!</h4>
              <p className="text-xs text-[#9CA3AF]">
                Un ingeniero especialista de Logicontrols se pondrá en contacto contigo en breve para coordinar la visita o evaluación técnica.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Solicitar cotización o asesoría técnica:
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-[#9CA3AF] block mb-1">Nombre completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ing. Carlos Rodríguez"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#111928] border border-white/15 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00F2FE]"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#9CA3AF] block mb-1">Empresa / Planta</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Alimentos / Plásticos S.A."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#111928] border border-white/15 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00F2FE]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-[#9CA3AF] block mb-1">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+57 313..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#111928] border border-white/15 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00F2FE]"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#9CA3AF] block mb-1">Ciudad / Municipio</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Bogotá, Medellín..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#111928] border border-white/15 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00F2FE]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-[#9CA3AF] block mb-1">Detalles del proyecto o falla</label>
                <textarea
                  rows={2}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe la maquinaria, marca de PLC o necesidad..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#111928] border border-white/15 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00F2FE]"
                />
              </div>

              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0072FF] to-[#00F2FE] text-[#050811] font-bold text-xs flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,242,254,0.4)] hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Requerimiento Técnico</span>
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-transparent border border-[#00F2FE]/50 text-white font-medium text-xs flex items-center justify-center gap-2 hover:bg-[#00F2FE]/10 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#00F2FE]" />
                  <span>Hablar directo por WhatsApp</span>
                </a>
              </div>
            </form>
          )}

          <div className="flex items-center justify-center gap-2 text-[11px] text-[#9CA3AF]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>Ingenieros colegiados y certificados en RETIE & TIA Portal</span>
          </div>

        </div>

      </div>
    </div>
  );
};
