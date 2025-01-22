"use client";
import { useState, useEffect } from "react";

const words = ["developer", "blogger", "neovim fanatic", "dreamer"];

export const Typewriter = () => {
  const [displayText, setDisplayText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex]!;
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting state
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, 75);
      } else {
        // Move to the next word
        setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 300);
      }
    } else {
      // Typing state
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 75);
      } else {
        // Pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <span className="mx-4">
      {displayText}
      <span className="blink ml-1 inline-block h-[1em] w-2 bg-white"></span>
    </span>
  );
};
