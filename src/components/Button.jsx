export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700
        disabled:bg-gray-400 disabled:cursor-not-allowed
        transition ${className}
      `}
    >
      {children}
    </button>
  );
}
