import Button from "@/components/core/Button";
import { useEffect, useRef, useState } from "react";

export const ProjectCard = ({ 
  title, 
  description, 
  buttonText, 
  imageSrc, 
  imagePosition = "right"
}: IProjectProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset animation khi element ra khỏi viewport
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2, // Tăng threshold để trigger animation sớm hơn
        rootMargin: '50px 0px -50px 0px' // Thêm margin để animation mượt hơn
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Logic slide direction dựa trên imagePosition
  const getAnimationClasses = () => {
    if (imagePosition === "right") {
      // Card có hình bên phải - trượt từ trái vào
      return isVisible 
        ? 'opacity-100 translate-x-0 scale-100' 
        : 'opacity-0 -translate-x-20 scale-95';
    } else {
      // Card có hình bên trái - trượt từ phải vào  
      return isVisible 
        ? 'opacity-100 translate-x-0 scale-100' 
        : 'opacity-0 translate-x-20 scale-95';
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`
        flex flex-col lg:flex-row h-auto lg:h-[524px] rounded-3xl 
        shadow-[0px_6px_64px_0px_rgba(112,144,176,0.1)] overflow-hidden 
        max-w-[992px] mx-auto transition-all duration-1000 ease-out
        transform-gpu will-change-transform
        ${getAnimationClasses()}
      `}
    >
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
        <div className="flex">
          <Button variant="outline" size="lg">
            {buttonText}
          </Button>
        </div>
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