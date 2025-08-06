interface IIconProps extends React.SVGProps<SVGSVGElement> {}

interface IProjectProps {
  title: string; 
  description: string; 
  buttonText: string; 
  imageSrc: string; 
  imagePosition?: "left" | "right";
}
interface ITypeWriterTextProps{ 
  text: string; 
  speed?: number; 
  delay?: number;
  repeatDelay?: number;
}