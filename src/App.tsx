/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './components/views/HomeView';
import { StoreView } from './components/views/StoreView';
import { ServicesView } from './components/views/ServicesView';
import { ContactView } from './components/views/ContactView';
import { ShowcaseGalleryView } from './components/views/ShowcaseGalleryView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { ServiceQuoteModal } from './components/ServiceQuoteModal';
import { PRODUCTS_DATA } from './data/mockData';
import { ActiveTab, CartItem, Product, ServiceItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('inicio');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDeviceMode, setIsDeviceMode] = useState(false);

  // Initial cart with 2 items matching Screen 2 badge count in the reference mockup
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS_DATA[0], quantity: 1 },
    { product: PRODUCTS_DATA[1], quantity: 1 },
  ]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`"${product.name}" agregado al carrito`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Producto eliminado del carrito');
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast('Carrito vaciado');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'inicio':
        return (
          <HomeView
            onSelectProduct={setSelectedProduct}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onNavigateTab={setActiveTab}
          />
        );
      case 'tienda':
        return (
          <StoreView
            onSelectProduct={setSelectedProduct}
            onAddToCart={(p) => handleAddToCart(p, 1)}
          />
        );
      case 'servicios':
        return (
          <ServicesView
            onSelectService={setSelectedService}
          />
        );
      case 'contacto':
        return <ContactView />;
      case 'showcase':
        return (
          <ShowcaseGalleryView
            onNavigateTab={setActiveTab}
            onSelectProduct={setSelectedProduct}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-white flex flex-col font-['Outfit'] selection:bg-[#00F2FE]/30 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#0D1629] border border-[#00F2FE] text-white px-4 py-2.5 rounded-2xl shadow-[0_4px_20px_rgba(0,242,254,0.4)] text-xs font-semibold flex items-center gap-2 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Layout Area */}
      {isDeviceMode ? (
        /* Device Mockup Frame (iPhone 16 Pro styling) on Desktop */
        <div className="min-h-screen py-6 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-[#050811] via-[#090f1e] to-[#050811]">
          {/* Top Frame Bar with Controls */}
          <div className="w-full max-w-[420px] mb-3 flex items-center justify-between text-xs text-[#9CA3AF]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-white">Logicontrols Mobile Preview</span>
            </div>
            <button
              onClick={() => setIsDeviceMode(false)}
              className="text-[#00F2FE] hover:underline font-medium"
            >
              Pantalla Completa
            </button>
          </div>

          {/* Smartphone Hardware Frame */}
          <div className="relative w-full max-w-[400px] h-[850px] bg-[#050811] rounded-[48px] p-3 shadow-[0_0_50px_rgba(0,242,254,0.25)] border-[4px] border-[#1e293b] flex flex-col overflow-hidden">
            {/* Dynamic Island / Speaker notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-50 flex items-center justify-between px-3">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
              <div className="w-2 h-2 rounded-full bg-blue-950/60" />
            </div>

            {/* Inner Phone Screen Container */}
            <div className="w-full h-full bg-[#050811] rounded-[38px] overflow-hidden flex flex-col relative">
              <Header
                cartCount={totalCartCount}
                onOpenCart={() => setIsCartOpen(true)}
                activeTab={activeTab}
                onSelectTab={setActiveTab}
                isDeviceMode={isDeviceMode}
                onToggleDeviceMode={() => setIsDeviceMode(false)}
              />

              <main className="flex-1 overflow-y-auto overscroll-contain">
                {renderActiveView()}
              </main>

              <BottomNav
                activeTab={activeTab}
                onSelectTab={setActiveTab}
                cartCount={totalCartCount}
              />
            </div>
          </div>
        </div>
      ) : (
        /* Full-Width Mobile-First Responsive Layout */
        <div className="min-h-screen flex flex-col">
          <Header
            cartCount={totalCartCount}
            onOpenCart={() => setIsCartOpen(true)}
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            isDeviceMode={isDeviceMode}
            onToggleDeviceMode={() => setIsDeviceMode(true)}
          />

          <main className="flex-1 w-full max-w-5xl mx-auto">
            {renderActiveView()}
          </main>

          <BottomNav
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            cartCount={totalCartCount}
          />
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Service Quote Modal */}
      <ServiceQuoteModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
