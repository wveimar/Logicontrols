import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const whatsappLink = `https://wa.me/${COMPANY_INFO.phoneClean}?text=Hola%20Logicontrols,%20estoy%20en%20el%20sitio%20web%20y%20deseo%20asesor%C3%ADa%20técnica.`;

  return (
    <div className="space-y-6 pb-24 text-white px-4 pt-4">
      <div className="max-w-md mx-auto sm:max-w-xl space-y-5">
        
        {/* Title Header matching Screen 5 */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Contáctanos
          </h1>
          <p className="text-xs text-[#9CA3AF] mt-0.5">
            Estamos listos para ayudarte con tus proyectos industriales
          </p>
        </div>

        {/* 3 Contact Info Cards matching Screen 5 */}
        <div className="space-y-3">
          
          {/* Phone */}
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="p-4 rounded-2xl bg-[#0D1629] border border-[#00F2FE]/25 hover:border-[#00F2FE] hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#111928] border border-[#00F2FE]/40 flex items-center justify-center text-[#00F2FE] group-hover:scale-105 transition-transform shrink-0">
              <Phone className="w-6 h-6 drop-shadow-[0_0_8px_rgba(0,242,254,0.7)]" />
            </div>
            <div>
              <div className="text-base font-extrabold text-white group-hover:text-[#00F2FE] transition-colors">
                {COMPANY_INFO.phone}
              </div>
              <div className="text-xs text-[#9CA3AF]">Llámanos · Soporte 24/7 en planta</div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="p-4 rounded-2xl bg-[#0D1629] border border-[#00F2FE]/25 hover:border-[#00F2FE] hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#111928] border border-[#00F2FE]/40 flex items-center justify-center text-[#00F2FE] group-hover:scale-105 transition-transform shrink-0">
              <Mail className="w-6 h-6 drop-shadow-[0_0_8px_rgba(0,242,254,0.7)]" />
            </div>
            <div>
              <div className="text-base font-extrabold text-white group-hover:text-[#00F2FE] transition-colors">
                {COMPANY_INFO.email}
              </div>
              <div className="text-xs text-[#9CA3AF]">Escríbenos · Cotizaciones formales</div>
            </div>
          </a>

          {/* Location with Tech Graphic */}
          <div className="relative p-4 rounded-2xl bg-[#0D1629] border border-[#00F2FE]/25 overflow-hidden flex items-center gap-4">
            {/* Tech network background lines */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#00F2FE" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-[#111928] border border-[#00F2FE]/40 flex items-center justify-center text-[#00F2FE] relative z-10 shrink-0">
              <MapPin className="w-6 h-6 drop-shadow-[0_0_8px_rgba(0,242,254,0.7)]" />
            </div>
            <div className="relative z-10">
              <div className="text-base font-extrabold text-white">
                {COMPANY_INFO.location}
              </div>
              <div className="text-xs text-[#9CA3AF]">{COMPANY_INFO.address}</div>
            </div>
          </div>

        </div>

        {/* WhatsApp Prominent CTA Section matching Screen 5 */}
        <div className="p-5 rounded-3xl bg-gradient-to-b from-[#0D1629] to-[#050811] border border-[#00F2FE]/30 text-center space-y-3">
          <p className="text-xs sm:text-sm text-[#9CA3AF]">
            También puedes escribirnos directamente por WhatsApp
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-[#00F2FE] text-[#050811] font-black text-base flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(0,242,254,0.45)] hover:shadow-[0_4px_30px_rgba(0,242,254,0.65)] hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-6 h-6 fill-[#050811]" />
            <span>Iniciar Chat</span>
          </a>

          <div className="flex items-center justify-center gap-2 text-xs text-[#9CA3AF] pt-1">
            <Clock className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>Respuesta en menos de 10 minutos en horario laboral</span>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="p-5 rounded-3xl bg-[#0D1629] border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F2FE]"></span>
            <span>Mensaje Directo al Equipo de Ingeniería</span>
          </h3>

          {submitted ? (
            <div className="p-4 rounded-xl bg-[#111928] border border-[#00F2FE] text-center space-y-2">
              <CheckCircle className="w-8 h-8 text-[#00F2FE] mx-auto animate-bounce" />
              <p className="text-sm font-bold text-white">¡Mensaje enviado con éxito!</p>
              <p className="text-xs text-[#9CA3AF]">Nos comunicaremos contigo a tu correo o teléfono.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre completo o empresa"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#111928] border border-white/15 text-white placeholder:text-[#9CA3AF]/60 focus:outline-none focus:border-[#00F2FE]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Correo corporativo"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#111928] border border-white/15 text-white placeholder:text-[#9CA3AF]/60 focus:outline-none focus:border-[#00F2FE]"
                />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Teléfono / Celular"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#111928] border border-white/15 text-white placeholder:text-[#9CA3AF]/60 focus:outline-none focus:border-[#00F2FE]"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="¿En qué podemos colaborar? (Cotización de PLC, tableros, asistencia técnica...)"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#111928] border border-white/15 text-white placeholder:text-[#9CA3AF]/60 focus:outline-none focus:border-[#00F2FE]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#111928] border border-[#00F2FE]/50 text-[#00F2FE] hover:bg-[#00F2FE]/15 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta Técnica</span>
              </button>
            </form>
          )}
        </div>

        {/* Brand Footer Lockup matching Screen 5 bottom */}
        <div className="pt-6 pb-2 text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <div className="w-7 h-7 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
                <polygon
                  points="20,2 36,11 36,29 20,38 4,29 4,11"
                  stroke="#00F2FE"
                  strokeWidth="2.5"
                />
                <circle cx="20" cy="20" r="3" fill="#00F2FE" />
              </svg>
            </div>
            <span className="text-lg font-extrabold text-white tracking-widest uppercase">
              LOGICONTROLS
            </span>
          </div>
          <p className="text-xs text-[#9CA3AF] tracking-wide">
            {COMPANY_INFO.slogan}
          </p>
          <p className="text-[10px] text-slate-600 pt-2">
            © {new Date().getFullYear()} Logicontrols SAS · Todos los derechos reservados · Colombia
          </p>
        </div>

      </div>
    </div>
  );
};
