interface TogglerWithLabelProps {
  isActive: boolean;
  onToggle: () => void;
  activeLabel?: string;
  inactiveLabel?: string;
  activeColor?: string;
  inactiveColor?: string;
  bgColor?: string;
  size?: 'sm' | 'md' | 'lg';
  minWidth?: string;
  showLabel?: boolean;
}

export const TogglerWithLabel = ({
  isActive,
  onToggle,
  activeLabel = 'نشط',
  inactiveLabel = 'غير نشط',
  activeColor = 'bg-green-500',
  inactiveColor = 'bg-gray-300',
  bgColor = 'bg-[#F5F5F5]',
  size = 'md',
  minWidth = 'min-w-[140px]',
  showLabel = true,
}: TogglerWithLabelProps) => {
  const sizeClasses = {
    sm: {
      toggle: 'h-5 w-9',
      circle: 'h-4 w-4',
      translateActive: 'translate-x-[-3px]',
      translateInactive: 'translate-x-[-18px]',
    },
    md: {
      toggle: 'h-6 w-11',
      circle: 'h-5 w-5',
      translateActive: 'translate-x-[0]',
      translateInactive: 'translate-x-[-22px]',
    },
    lg: {
      toggle: 'h-7 w-14',
      circle: 'h-6 w-6',
      translateActive: 'translate-x-[0]',
      translateInactive: 'translate-x-[-28px]',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`inline-flex justify-between items-center gap-2 px-4 py-2 rounded-lg ${bgColor} ${minWidth}`}>
      <button
        onClick={onToggle}
        className={`relative inline-flex ${currentSize.toggle} items-center rounded-full transition-colors ${
          isActive ? activeColor : inactiveColor
        }`}
        type="button"
      >
        <span
          className={`inline-block ${currentSize.circle} transform rounded-full bg-white transition-transform ${
            isActive ? currentSize.translateActive : currentSize.translateInactive
          }`}
        />
      </button>

      {showLabel && (
        <span className={`text-sm font-medium [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
          isActive ? 'text-green-500' : 'text-red-500'
        }`}>
          {isActive ? activeLabel : inactiveLabel}
        </span>
      )}
    </div>
  );
};
