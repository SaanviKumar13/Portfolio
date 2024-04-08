const ContactMe = () => {
  return (
    <div id="contact-me">
      <img
        src="images/waves/top.png"
        alt="waves"
        className="hidden md:block w-full h-32"
      />
      <img
        src="images/waves/top-sm.png"
        alt="waves"
        className="md:hidden w-full h-64"
      />
      <div className=" min-h-[40vh] md:min-h-[40vh] h-full bg-page-gradient flex flex-col justify-between items-center">
        <p className="md:w-[50vw] lg:w-[30vw] p-5 text-center text-slate-50 mt-10">
          Hey if you have opportunities for collaboration or want to build
          something amazing, feel free to contact me!
        </p>
        <a
          href="mailto:saanviprashantkumar@gmail.com"
          className="px-4 py-3 bg-portfolio-light-blue rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-portfolio-sea-blue before:to-portfolio-light-blue before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
        >
          Get in touch!
        </a>
        <p className="text-slate-100 p-5">Made with ❤️ by Saanvi Kumar</p>
      </div>
    </div>
  );
};

export default ContactMe;
