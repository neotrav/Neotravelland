import logoImage from "figma:asset/788385f1cec0f7c2fefd3e38b2f96d5c07145337.png";

interface NeoLogoProps {
  className?: string;
}

export function NeoLogo({ className = "w-6 h-6" }: NeoLogoProps) {
  return (
    <img 
      src={logoImage} 
      alt="NeoTravel Logo" 
      className={className}
    />
  );
}
