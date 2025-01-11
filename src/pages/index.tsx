import Link from "next/link";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { on } from "events";
import { start } from "repl";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-4 text-white">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Portfolio Under Development</h1>
        <p className="mb-8 text-xl">
          I&apos;m currently working on something <Typewriter />. Stay tuned!
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/danielvolchek"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-300"
          >
            <Github size={32} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/danielvolchek"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-300"
          >
            <Linkedin size={32} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:daniel@volchek.dev"
            className="transition-colors hover:text-gray-300"
          >
            <Mail size={32} />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="/resume.pdf"
            className="transition-colors hover:text-gray-300"
          >
            <FileText size={32} />
            <span className="sr-only">Resume</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

const words = [
  "awesome",
  "beautiful",
  "jawdropping",
  "unique",
  "awe-inspiring",
  "creative",
  "contemporary",
  "breathtaking",
];

const TIME = 300;

const Typewriter = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (isDeleting) {
      // Deleting state
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, 50);
      } else {
        // Move to the next word
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      // Typing state
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 50);
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
    <span className="typewriter">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};
