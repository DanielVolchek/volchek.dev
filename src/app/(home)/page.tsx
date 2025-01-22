"use client";

import { FC, ReactNode, useEffect, useRef } from "react";

const waitInputMS = async (number = 100) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, number);
  });
};

const applyClassToGroup = async (children: HTMLCollection) => {
  for (const child of children) {
    child.classList.add("visible");
    await waitInputMS();
  }
};

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) {
      return;
    }

    const children = mainRef.current.children;
    applyClassToGroup(children);
  }, []);

  return (
    <main ref={mainRef} className="flex flex-col gap-8">
      <Group
        header={"Daniel Volchek"}
        subheader={"Front-end platform engineer"}
        content={
          <p>
            Front-End developer focused on scalable, maintainable code.
            Passionate about developer experience.
          </p>
        }
      />

      <Group
        header={"Work Experience"}
        subheader={"See what I've worked on"}
        content={undefined}
      />
      <Group
        header={"Projects"}
        subheader={"Check out my projects"}
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
        content={undefined}
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
      <div>{content}</div>
    </div>
  );
};

const Subheader: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return (
    <p className="text-3xl italic text-gray-400 transition-transform duration-75 hover:-translate-y-1 hover:underline">
      {children}
    </p>
  );
};

const Header: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return <h2 className="text-5xl">{children}</h2>;
};
