import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const MobileQuickActions = () => {
    return (
        <div 
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 md:hidden z-[100] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
            style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
        >
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                <a
                    href="tel:+13865320220"
                    className="flex items-center justify-center bg-primary text-white py-3 px-4 rounded-xl font-bold tracking-wide shadow-lg active:scale-95 transition-transform min-h-[48px]"
                >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                </a>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Carepack+Pharmacy+1039+Harley+Strickland+Blvd+Orange+City+FL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-secondary text-white py-3 px-4 rounded-xl font-bold tracking-wide shadow-lg active:scale-95 transition-transform min-h-[48px]"
                >
                    <MapPin className="w-5 h-5 mr-2" />
                    Directions
                </a>
            </div>
        </div>
    );
};

export default MobileQuickActions;
