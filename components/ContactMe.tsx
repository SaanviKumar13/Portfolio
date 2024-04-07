const ContactMe = () => {
  return (
    <div id="contact-me">
      <img
        src="waves-top.png"
        alt="waves"
        className="hidden md:block w-full h-32"
      />
      <img
        src="/waves-top-sm.png"
        alt="waves"
        className="md:hidden w-full h-64"
      />
      <div className="min-h-screen md:min-h-[70vh] h-full bg-page-gradient"></div>
    </div>
  );
};

export default ContactMe;
