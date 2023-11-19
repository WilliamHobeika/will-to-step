const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center rounded-full cursor-pointer gap-2 px-7 py-4 border-2 font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-baby-blue text-white border-baby-blue"
      } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-8 h-8" />
      )}
    </button>
  );
};

export default Button;
