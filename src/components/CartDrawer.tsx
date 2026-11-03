import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalCOP = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const formatCOP = (val: number) => {
    return `$${val.toLocaleString('es-CO')} COP`;
  };

  const generateWhatsAppCheckout = () => {
    let text = `*SOLICITUD DE COTIZACIÓN - LOGICONTROLS*\n`;
    text += `------------------------------------\n`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. *${item.product.name}*\n   Cant: ${item.quantity} un. | Ref: ${item.product.model}\n   Subtotal: ${formatCOP(item.product.price * item.quantity)}\n`;
    });
    text += `------------------------------------\n`;
    text += `*TOTAL ESTIMADO: ${formatCOP(totalCOP)}*\n`;
    text += `\nFavor confirmar disponibilidad, tiempo de entrega y datos para facturación electrónica.`;

    return `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0D1629] border-l border-[#00F2FE]/30 shadow-2xl flex flex-col text-white">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#050811]/60">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#111928] border border-[#00F2FE]/40 text-[#00F2FE]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white">Carrito de Cotización</h3>
                <p className="text-xs text-[#9CA3AF]">{items.length} productos seleccionados</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#9CA3AF] hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery Note */}
          <div className="px-5 py-2.5 bg-[#111928] border-b border-white/5 flex items-center gap-2 text-xs text-[#9CA3AF]">
            <Truck className="w-4 h-4 text-[#00F2FE] shrink-0" />
            <span>Envíos asegurados a todo Colombia · Soporte técnico Logicontrols</span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#9CA3AF]">
                <ShoppingBag className="w-16 h-16 text-slate-700 mb-3" />
                <h4 className="font-bold text-white text-base">Tu carrito está vacío</h4>
                <p className="text-xs mt-1 text-[#9CA3AF]">
                  Explora la tienda industrial para agregar PLCs, variadores y componentes de automatización.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-5 py-2.5 rounded-xl bg-[#111928] border border-[#00F2FE]/40 text-[#00F2FE] text-xs font-semibold hover:bg-[#00F2FE]/10"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-2xl bg-[#111928] border border-white/10 hover:border-[#00F2FE]/40 transition-all flex gap-3"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#050811] shrink-0 border border-white/5">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-bold text-sm text-white line-clamp-1">{item.product.name}</h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#9CA3AF] hover:text-red-400 p-1"
                          title="Eliminar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#9CA3AF]">{item.product.model}</p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-black text-[#00F2FE]">
                        {formatCOP(item.product.price * item.quantity)}
                      </span>

                      {/* Quantity adjuster */}
                      <div className="flex items-center bg-[#050811] rounded-lg border border-white/10 p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-xs text-[#9CA3AF] hover:text-white"
                        >
                          -
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-white">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-xs text-[#9CA3AF] hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & CTAs */}
          {items.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#050811]/90 backdrop-blur-md space-y-4">
              <div className="space-y-1.5 text-xs text-[#9CA3AF]">
                <div className="flex justify-between">
                  <span>Subtotal de equipos</span>
                  <span className="text-white font-bold">{formatCOP(totalCOP)}</span>
                </div>
                <div className="flex justify-between">
                  <span>IVA estimado (19%)</span>
                  <span>Incluido en precios</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-white/10">
                  <span className="font-bold text-white">Total Estimado</span>
                  <span className="font-black text-[#00F2FE] text-lg">{formatCOP(totalCOP)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={generateWhatsAppCheckout()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0072FF] to-[#00F2FE] text-[#050811] font-black text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,242,254,0.4)] hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Cotizar por WhatsApp Ahora</span>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </a>

                <button
                  onClick={onClearCart}
                  className="w-full py-2 text-center text-xs text-[#9CA3AF] hover:text-red-400 transition-colors"
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
