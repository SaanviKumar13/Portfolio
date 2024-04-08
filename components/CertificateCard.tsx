interface CardProps {
  name: string;
  description: string;
  issuedBy: string;
  image: string;
}

export default function CertificateCard({
  name,
  image,
  description,
  issuedBy,
}: CardProps) {
  return (
    <div className="z-0 relative group cursor-pointer group overflow-hidden shadow-md text-gray-50 md:h-[30vh] lg:h-[45vh] md:w-[40vw] rounded-2xl hover:duration-700 duration-700">
      <div className="md:w-[40vw] md:h-72 lg:h-[45vh]">
        <img src={image} alt={name} />
      </div>
      <div className="absolute text-portfolio-navy-blue bg-portfolio-light-blue -bottom-40 md:w-[40vw] p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-1000 duration-700">
        <span className="font-bold text-xl">{name}</span>
        <span className="font-bold text-xs">{issuedBy}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
