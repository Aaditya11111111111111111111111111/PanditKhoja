const SectionTitle = ({
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div
      className={`mb-12 ${
        center ? "text-center" : ""
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-[#2e4a70] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;