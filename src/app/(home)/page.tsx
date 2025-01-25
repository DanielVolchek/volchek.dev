// TODO
// Move waitInputMS and applyClassToList and LoadOutLink to seperate files
// Add custom property transitionOnEntry to elements you want to be transitioned out (or just use class fade-in-element)
// Switch from grabbing elements from ref to grabbing elements by that with document selector
// Add load in code to layout
//
// Set main page color by setting a css var on each page when loading it
// Then get color when needed with var or using inherit
//
// BUG
// The first load of a page doesn't apply the transition effects

"use client";

import { IconGroup } from "@/components/IconGroup";
import { LoadOutLink } from "@/components/LoadOutLink";
import { ChevronRight } from "lucide-react";

import { FC, ReactNode } from "react";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Group
        header={"Daniel Volchek"}
        subheader={"Front-End Developer. Minimalist. Dreamer"}
        content={
          <p>
            I am a Front-End developer, specialized in building scalable React
            Web-apps.
          </p>
        }
      />

      <Group
        header={"Work Experience"}
        subheader={
          <LoadOutLink href="/work">See where I&apos;ve worked</LoadOutLink>
        }
        content={undefined}
      />
      <Group
        header={"Projects"}
        subheader={
          <LoadOutLink href="/projects">Check out my projects</LoadOutLink>
        }
        content={undefined}
      />
      <Group
        header={"Blog Posts"}
        subheader={"Read my thoughts"}
        content={undefined}
      />
      <Group
        header={"Contact Me"}
        subheader={"Let's work together"}
        content={
          <>
            <IconGroup size="md" />
          </>
        }
      />
    </main>
  );
}

type GroupProps = {
  header: ReactNode;
  subheader: ReactNode;
  content: ReactNode;
};

const Group: FC<GroupProps> = (props) => {
  const { header, subheader, content } = props;

  return (
    <div className="fade-in-element">
      <Header>{header}</Header>
      <Subheader>{subheader}</Subheader>
      <div className="text-gray-400">{content}</div>
    </div>
  );
};

const Header: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return <h2 className="text-2xl md:text-4xl">{children}</h2>;
};

const Subheader: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return (
    <p className="font-mono text-lg text-gray-400 transition-transform duration-75 hover:-translate-y-1 hover:underline md:text-xl">
      <span className="">
        {children}
        <ChevronRight className="inline" />
      </span>
    </p>
  );
};

// (
//     <div className="flex gap-4">
//       <Link
//         href="https://github.com/danielvolchek"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="transition-colors hover:text-gray-300"
//       >
//         <Github size={32} />
//         <span className="sr-only">GitHub</span>
//       </Link>
//       <Link
//         href="https://linkedin.com/in/danielvolchek"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="transition-colors hover:text-gray-300"
//       >
//         <Linkedin size={32} />
//         <span className="sr-only">LinkedIn</span>
//       </Link>
//       <Link
//         href="mailto:daniel@volchek.dev"
//         className="transition-colors hover:text-gray-300"
//       >
//         <Mail size={32} />
//         <span className="sr-only">Email</span>
//       </Link>
//       <Link
//         href="/resume.pdf"
//         className="transition-colors hover:text-gray-300"
//       >
//         <FileText size={32} />
//         <span className="sr-only">Resume</span>
//       </Link>
//     </div>
//   )//       </Link>
//     </div>
//   )//   )//   )//   )//   )//   )//   )//   )

// const SubHeaderAnimation: FC<SubHeaderAnimationProps> = (props) => {
//   const { text, timeInMs = 2000 } = props;
//
//   const [currentText, setCurrentText] = useState(text[0]);
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//
//   const pRef = useRef<HTMLDivElement>(null);
//
//   const [isVisible, setIsVisible] = useState(false);
//
//   const cycleToNextWord = useCallback(() => {
//     setIsVisible(() => false);
//     const nextIndex = (currentTextIndex + 1) % text.length;
//     setCurrentText(text[nextIndex]);
//     setCurrentTextIndex(nextIndex);
//   }, [
//     setIsVisible,
//     text,
//     setCurrentText,
//     currentTextIndex,
//     setCurrentTextIndex,
//   ]);
//
//   useEffect(() => {
//     const interval = setInterval(() => {
//       cycleToNextWord();
//     }, timeInMs);
//
//     return () => clearInterval(interval);
//   }, [timeInMs, cycleToNextWord]);
//
//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 1000);
//   }, [currentText]);
//
//   return (
//     <span
//       ref={pRef}
//       className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity`}
//     >
//       {currentText}
//     </span>
//   );
// };//       className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity`}
//     >
//       {currentText}
//     </span>
//   );
// };// };// };// };// };// };// };// };//   );
// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };//   );
// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };//   );
// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };//   );
// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };//   );
// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };//   );
// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };//   );
// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };//   );
// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };//   );
// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };//   );
// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };//   );
// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };// };
