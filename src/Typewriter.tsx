// src/components/Typewriter.tsx
import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number; // ms per character
  deletingSpeed?: number; // ms per character when deleting
  pauseDelay?: number; // how long to show full word before deleting
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDelay = 1800,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Use number instead of NodeJS.Timeout — safe & clean
    let timer: number | undefined;

    const currentWord = words[currentWordIndex];

    if (!isDeleting && currentText.length < currentWord.length) {
      // Typing forward
      timer = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && currentText.length > 0) {
      // Deleting backward
      timer = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && currentText === currentWord) {
      // Pause → start deleting after delay
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && currentText === "") {
      // After deletion finished → move to next word (async with 0 delay)
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 0); // 0 delay is enough to avoid sync setState warning
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
  ]);

  return (
    <span className="inline-block min-w-[140px] text-primary font-black">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
}
