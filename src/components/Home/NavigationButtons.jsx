import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavigationButtons = ({ colors, onPrev, onNext }) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300 z-10"
        style={{ 
          color: colors.primary, 
          borderColor: colors.primary,
          boxShadow: `0 4px 12px ${colors.primary}20`
        }}
        aria-label="الشريحة السابقة"
      >
        <ChevronRight size={20} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300 z-10"
        style={{ 
          color: colors.primary, 
          borderColor: colors.primary,
          boxShadow: `0 4px 12px ${colors.primary}20`
        }}
        aria-label="الشريحة التالية"
      >
        <ChevronLeft size={20} />
      </button>
    </>
  );
};

export default NavigationButtons;