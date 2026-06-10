const Button = ({
  children,
  variant = "primary",
  className = "",
  as = "button",
  ...props
}) => {
  const variants = {
    primary: "bg-violet-700 text-white hover:bg-violet-800",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    gold: "bg-violet-500 text-white hover:bg-amber-600",
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