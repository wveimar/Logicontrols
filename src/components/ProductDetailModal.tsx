import React, { useState } from 'react';
import { X, Star, CheckCircle, ChevronDown, ChevronUp, ShoppingBag, MessageSquare, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);
  const [addedToast, setAddedToast] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2200);
  };

  const currentImage = product.images[selectedImageIndex] || product.images[0];

  const whatsappMessage = encodeURIComponent(
    `Hola Logicontrols, me interesa cotizar el producto: ${product.name} (Ref: ${product.model}) con precio ${product.priceFormatted}. ¿Tienen disponibilidad inmediata para despacho?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#0D1629] border border-[#00F2FE]/30 rounded-t-3xl sm:rounded-3xl shadow-[0_0_35px_rgba(0,242,254,0.25)] flex flex-col text-white">
        
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-[#0D1629]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
            <span>Inicio</span>
            <span>&gt;</span>
            <span>Tienda</span>
            <span>&gt;</span>
            <span className="text-[#00F2FE] font-medium uppercase">{product.category}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-1.5 rounded-full bg-[#111928] text-[#9CA3AF] hover:text-white hover:border-[#00F2FE] border border-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 space-y-5">
          
          {/* Main Product Showcase Box with Dark Frame */}
          <div className="relative rounded-2xl overflow-hidden bg-[#111928] border border-[#00F2FE]/25 p-3 flex flex-col items-center">
            <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-[#050811] relative flex items-center justify-center">
              <img
                src={currentImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute top-3 left-3 bg-[#050811]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#00F2FE]/30 text-[11px] font-semibold text-[#00F2FE]">
                {product.inStock ? 'En Stock' : 'Bajo Pedido'}
              </div>
            </div>

            {/* Thumbnail switcher */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2 mt-3 w-full justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-16 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-[#00F2FE] shadow-[0_0_10px_rgba(0,242,254,0.5)]'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title, Model & Rating */}
          <div>
            <div className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold">{product.brand} · {product.model}</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              {product.name}
            </h2>

            {/* Rating Stars */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-white">{product.rating.toFixed(1)}</span>
              <span className="text-xs text-[#9CA3AF]">({product.reviewsCount} opiniones verificadas)</span>
            </div>

            {/* Price */}
            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-3xl font-black text-[#00F2FE] tracking-tight drop-shadow-[0_0_12px_rgba(0,242,254,0.3)]">
                {product.priceFormatted}
              </span>
              <span className="text-xs text-[#9CA3AF]">IVA incluido · Factura electrónica</span>
            </div>
          </div>

          {/* Value Highlights with Checkmarks */}
          <div className="space-y-2 py-3 border-y border-white/10">
            {product.features.map((feat, index) => (
              <div key={index} className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#00F2FE] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium text-[#9CA3AF]">Cantidad a cotizar:</span>
            <div className="flex items-center bg-[#111928] border border-[#00F2FE]/30 rounded-xl p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0D1629] text-white hover:text-[#00F2FE] transition-colors"
                aria-label="Disminuir cantidad"
              >
                -
              </button>
              <span className="w-12 text-center font-bold text-base text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0D1629] text-white hover:text-[#00F2FE] transition-colors"
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleAddToCart}
              className="w-full h-12 rounded-xl bg-gradient-to-r from-[#0072FF] to-[#00F2FE] text-[#050811] font-extrabold text-base flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,242,254,0.4)] hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{addedToast ? '¡Agregado al carrito!' : 'Agregar al carrito'}</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="w-full h-12 rounded-xl bg-transparent border border-[#00F2FE]/60 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#00F2FE]/10 active:scale-[0.98] transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#00F2FE]" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>

          {/* Technical Specifications Accordion */}
          <div className="border border-white/10 rounded-xl bg-[#111928]/60 overflow-hidden">
            <button
              onClick={() => setIsSpecsOpen(!isSpecsOpen)}
              className="w-full px-4 py-3 flex items-center justify-between text-left font-bold text-sm text-white hover:text-[#00F2FE] transition-colors"
            >
              <span>Especificaciones Técnicas</span>
              {isSpecsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {isSpecsOpen && (
              <div className="px-4 pb-4 pt-1 space-y-2 text-xs border-t border-white/5">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#9CA3AF]">{key}</span>
                    <span className="font-medium text-right text-slate-200">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 gap-3 text-xs text-[#9CA3AF] pt-1">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#111928] border border-white/5">
              <Truck className="w-4 h-4 text-[#00F2FE] shrink-0" />
              <span>Despachos asegurados a toda Colombia</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#111928] border border-white/5">
              <ShieldCheck className="w-4 h-4 text-[#00F2FE] shrink-0" />
              <span>Garantía y soporte directo de fábrica</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
