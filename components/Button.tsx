const Button = ({ onClick, children, variant }: any) => {
  const getButtonStyles = () => {
    switch (variant) {
      case "primary":
        return "md:w-48 p-2 md:px-5 md:py-5 text-xs rounded-xl bg-[#0a2140] hover:bg-slate-400 hover:text-[#0a2140] font-bold text-[#527794] shadow-2xl md:text-base transition-all duration-500";
      case "secondary":
        return "w-28 py-3 md:w-48 p-2 md:px-5 md:py-5 text-xs rounded-xl md:text-base bg-[#527794] text-slate-50 hover:bg-slate-400 font-bold shadow-2xl transition-all duration-500";
      case "delete":
        return "h-6 py-1 px-2 text-xs rounded-xl md:text-base md:h-10 md:px-5 md:py-2 border  border-solid  transition-all duration-500";
      default:
        return "";
    }
  };

  return (
    <button className={getButtonStyles()} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
