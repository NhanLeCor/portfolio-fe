function HeroSection() {
  return (
    <section className="min-h-[700px] bg-[#f9faff] relative overflow-hidden">
      {/* Yellow background shape */}
      <div className="absolute right-0 -top-[100px] w-[720px] h-[649px] hidden lg:block">
        <div className="absolute bottom-0 right-[-57px] w-[777px] h-[897px]">
          <svg
            className="w-full h-full"
            viewBox="0 0 777 897"
            fill="none"
          >
            <path
              d="M0 20H777V897C777 897 600 820 400 720C200 620 0 420 0 20Z"
              fill="#FDC435"
            />
          </svg>
        </div>
        {/* Hero image */}
        <div 
          className="absolute bottom-0 right-0 w-[720px] h-[629px] bg-contain bg-no-repeat bg-bottom"
        //   style={{
        //     backgroundImage: `url('${imgPexelsArtemBeliaikin1832323RemovebgPreview}')`,
        //   }}
        />
      </div>

      {/* Content */}
      <div className="px-8 lg:px-[120px] py-16 lg:py-24 relative z-10">
        <div className="max-w-[486px]">
          <div className="font-['Nunito:Bold',_sans-serif] text-[20px] text-[#fdc435] uppercase mb-6">
            UI/UX Designer
          </div>
          <h1 className="font-['Playfair_Display:Bold',_sans-serif] text-[48px] lg:text-[64px] text-[#25282b] leading-[1.2] mb-8">
            Hello, my name is Madelyn Torff
          </h1>
          <p className="font-['Nunito:Regular',_sans-serif] text-[20px] lg:text-[24px] text-[#828282] leading-[1.5] mb-8">
            Short text with details about you, what you do or your professional career. You can add more information on the about page.
          </p>
          <div className="flex gap-3">
            <button className="bg-[#fdc435] px-6 py-3 rounded-lg font-['Roboto:Medium',_sans-serif] text-[18px] text-[#25282b] hover:bg-[#fdbf1a] transition-colors">
              Projects
            </button>
            <button className="border-2 border-[#25282b] px-6 py-3 rounded-lg font-['Roboto:Medium',_sans-serif] text-[18px] text-[#25282b] hover:bg-gray-50 transition-colors">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#f9faff]">
      <div className="px-8 lg:px-[120px]">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-['Playfair_Display:Bold',_sans-serif] text-[40px] lg:text-[48px] text-[#25282b] mb-2">
            Projects
          </h2>
          <div className="bg-[#fdc435] h-1 w-[100px] rounded-sm mx-auto" />
        </div>

        <div className="space-y-16 lg:space-y-20">
          {/* <ProjectCard
            title="Project Name"
            description="I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
            buttonText="View Project"
            imageSrc={imgPexelsEllyFairytale38232071}
            imagePosition="right"
          />

          <ProjectCard
            title="Project Name"
            description="What was your role, your deliverables, if the project was personal, freelancing."
            buttonText="View Project"
            imageSrc={imgRectangle7}
            imagePosition="left"
          />

          <ProjectCard
            title="Project Name"
            description="You can also add in this description the type of the project, if it was for web, mobile, electron."
            buttonText="View Project"
            imageSrc={imgRectangle8}
            imagePosition="right"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#f9faff]">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}