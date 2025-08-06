function ProjectCard({ 
  title, 
  description, 
  buttonText, 
  imageSrc, 
  imagePosition = "right" 
}: { 
  title: string; 
  description: string; 
  buttonText: string; 
  imageSrc: string; 
  imagePosition?: "left" | "right";
}) {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[524px] rounded-3xl shadow-[0px_6px_64px_0px_rgba(112,144,176,0.1)] overflow-hidden max-w-[992px] mx-auto">
      {imagePosition === "left" && (
        <div 
          className="w-full lg:w-[496px] h-[300px] lg:h-[524px] bg-cover bg-center"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />
      )}
      
      <div className="bg-white w-full lg:w-[496px] p-8 lg:p-12 flex flex-col justify-center">
        <h3 className="font-['Playfair_Display:Bold',_sans-serif] text-[32px] lg:text-[40px] text-[#25282b] leading-[1.5] mb-6">
          {title}
        </h3>
        <p className="font-['Nunito:Regular',_sans-serif] text-[16px] lg:text-[18px] text-[#828282] leading-[1.5] mb-6">
          {description}
        </p>
        <button className="border border-[#25282b] px-6 py-2 rounded-3xl font-['Roboto:Medium',_sans-serif] text-[18px] text-[#25282b] hover:bg-gray-50 transition-colors w-fit">
          {buttonText}
        </button>
      </div>

      {imagePosition === "right" && (
        <div 
          className="w-full lg:w-[496px] h-[300px] lg:h-[524px] bg-cover bg-center"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />
      )}
    </div>
  );
}