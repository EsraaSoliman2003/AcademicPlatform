const CustomPagination = ({ colors, totalSlides, activeIndex, onBulletClick }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onBulletClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === activeIndex ? 'w-8' : 'hover:opacity-70'
          }`}
          style={{
            backgroundColor: index === activeIndex ? colors.primary : colors.gray
          }}
          aria-label={`انتقل إلى الشريحة ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CustomPagination;