import { BgMaskIcon } from "@/assets/icons";
import { Button } from "@/components/ui";
import { TypewriterText } from "@/components/ui/TypeWriterText";

export const HeroSection = () => {
  return (
    <section className="min-h-[700px] bg-[#f9faff] relative">
      {/* Yellow background shape */}
      <div className="absolute right-0 -top-[92px] w-[720px] h-[649px] hidden lg:block overflow-hidden">
        <div className="relative w-full h-full">
          {/* Background mask - này sẽ là layer dưới */}
          <div className="absolute inset-0">
            <BgMaskIcon />
          </div>
          
          {/* Hero image - nằm trong mask */}
          {/* <div className="absolute inset-0 z-0">
            <Image
              src={avatarSrc}
              alt="Hero"
              fill
              className="object-cover object-center"
              style={{
                clipPath: 'inherit', // Kế thừa clip path từ parent nếu có
              }}
            />
          </div> */}
        </div>
      </div>  

      {/* Content */}
      <div className="px-8 lg:px-[120px] py-10 lg:py-12 relative z-10">
        <div className="max-w-[486px]">
          <div className="font-semibold text-[20px] text-[#fdc435] uppercase mb-6">
            Backend Developer
          </div>
          <h1 className="font-semibold text-[48px] lg:text-[60px] text-[#25282b] leading-[1.2] mb-8">
            <TypewriterText 
              text="Hello, my name is Madelyn Torff" 
              speed={80} 
              delay={500}
              repeatDelay={5000}
            />
          </h1>
          <p className="font-['Nunito:Regular',_sans-serif] text-[20px] lg:text-[24px] text-[#828282] leading-[1.5] mb-8">
            Short text with details about you, what you do or your professional career. You can add more information on the about page.
          </p>
          <div className="flex gap-3">
            <Button variant="primary" size="lg" className="bg-[#FDC435] text-black hover:bg-[#FDC435]/90">Projects</Button>
            <Button variant="outline" size="lg">LinkedIn</Button>
          </div>
        </div>
      </div>
    </section>
  );
}