const Button = ({
  children,
  variant = "primary",
  className = "",
  as = "button",
  ...props
}) => {
  const variants = {
    primary: "bg-[#FF6F00] text-white hover:bg-[#e65c00]",
    secondary: "border border-[#C62828] text-[#C62828] hover:bg-[#fff3e0]",
    gold: "bg-amber-500 text-white hover:bg-amber-600",
  };

  const baseClasses = `
    px-6 py-3 rounded-full font-medium transition cursor-pointer
  `;

  const Component = as;

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;