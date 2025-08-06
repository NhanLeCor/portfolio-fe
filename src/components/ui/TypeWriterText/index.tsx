import { cn } from "@/utils/classname";
import { useEffect, useState } from "react";

export const TypewriterText = ({ text, speed = 100, delay = 0, repeatDelay = 5000 }: ITypeWriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Reset function to restart the animation
  const resetAnimation = () => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsCompleted(false);
    setIsStarted(false);
  };

  // Initial delay
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay, isStarted]);

  // Typewriter effect
  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (!isCompleted) {
      // Mark as completed when finished typing
      setIsCompleted(true);
    }
  }, [currentIndex, text, speed, isStarted, isCompleted]);

  // Repeat animation after completion
  useEffect(() => {
    if (isCompleted) {
      const repeatTimer = setTimeout(() => {
        resetAnimation();
      }, repeatDelay);

      return () => clearTimeout(repeatTimer);
    }
  }, [isCompleted, repeatDelay]);

  return (
  <span>
    {displayText}
    <span 
      className={cn(isCompleted ? "cursor-blink" : "animate-pulse")}
      style={{ verticalAlign: 'top' }}
    >
      |
    </span>
  </span>
  );
}