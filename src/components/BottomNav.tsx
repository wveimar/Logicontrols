import React from 'react';
import { Home, LayoutGrid, Headphones, User, Sparkles } from 'lucide-react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  cartCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onSelectTab,
  cartCount,
}) => {
  const navItems = [
    { id: 'inicio' as ActiveTab, label: 'Inicio', icon: Home },
    { id: 'tienda' as ActiveTab, label: 'Tienda', icon: LayoutGrid, badge: cartCount > 0 ? cartCount : undefined },
    { id: 'servicios' as ActiveTab, label: 'Soporte', icon: Headphones },
    { id: 'contacto' as ActiveTab, label: 'Cuenta', icon: User },
    { id: 'showcase' as ActiveTab, label: 'Ficha UI', icon: Sparkles },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#050811]/95 backdrop-blur-lg border-t border-[#00F2FE]/25 px-2 py-1.5 transition-all shadow-[0_-8px_25px_rgba(0,0,0,0.7)]">
      <div className="max-w-md mx-auto grid grid-cols-5 items-center justify-between">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-1 min-h-[48px] rounded-xl transition-all group ${
                isActive ? 'text-[#00F2FE]' : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              {/* Subtle top indicator beam for active tab */}
              {isActive && (
                <span className="absolute -top-1.5 w-8 h-1 bg-gradient-to-r from-[#0072FF] to-[#00F2FE] rounded-full shadow-[0_0_8px_#00F2FE]" />
              )}

              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]' : 'group-hover:scale-105'
                  }`}
                />
                {item.badge !== undefined && (
                  <span className="absolute -top-1.5 -right-2 bg-gradient-to-r from-[#0072FF] to-[#00F2FE] text-[#050811] text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>

              <span
                className={`text-[10px] font-medium tracking-tight mt-1 transition-colors ${
                  isActive ? 'text-[#00F2FE] font-bold' : 'text-[#9CA3AF]'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
