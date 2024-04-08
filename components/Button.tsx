const Button = () => {
  return (
    <button className="overflow-hidden w-32 p-2 h-12 bg-portfolio-light-blue text-portfolio-navy-blue border-none rounded-md text-xl cursor-pointer relative z-10 group">
      Resume
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-portfolio-light-blue rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-portfolio-sea-blue rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
      <a
        href="/SaanviKumar.pdf"
        download="SaanviKumar.pdf"
        className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-4 z-10"
      >
        Download
      </a>
    </button>
  );
};

export default Button;
