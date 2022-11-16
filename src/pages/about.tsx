import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Section from "../components/section";
import Link from "../components/link";
import me from "../images/metemp.png";

const About: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>About - Volchek.Dev</title>
      </Head>
      <div>
        <h1 className="text-4xl">Daniel Volchek - About Me </h1>
        <div>
          <section className="flex flex-col lg:flex-row">
            <div className="mt-4 flex flex-col">
              <h2 className="text-2xl">So... who are you?</h2>
              <article className="pl-4">
                <div className="flex flex-col lg:flex-row">
                  <Image
                    src={me}
                    alt="Daniel Volchek - Profile Image"
                    className="order-first mt-4 h-auto rounded-md border-4 border-teal-300 lg:order-last lg:ml-6 lg:w-[25vw] xl:w-[18vw] 2xl:w-[15vw]"
                  />
                  <div className="flex flex-col">
                    <Section
                      header={<>I&apos;m just me!</>}
                      headerClasses="text-2xl"
                      p={
                        <>
                          Ok, you probably want to know a little more than that,
                          right? I don&apos;t think you&apos;d be here if you
                          didn&apos;t
                          <br />
                          Well first off, I&apos;m much more than just my
                          terminal. When I&apos;m not coding, I love to try new
                          things. Lately, I&apos;ve been learning to rock climb.
                          I&apos;m starting off slowly, but hopefully this time
                          next year I&apos;ll be scaling mountains! I love the
                          outdoors, and if it wasn&apos;t for my other love
                          Wi-Fi, I&apos;d probably be living in a cabin in the
                          middle of the woods by now.
                        </>
                      }
                    />
                    <Section
                      header={"Why programming?"}
                      p={
                        <>
                          As a kid, I loved to tinker. I was always curious
                          about how my computer worked, what caused this to do
                          that, and how I could do it myself. It didn&apos;t
                          take long before I knew I wanted to be a programmer.
                          The much harder question was what type of programming
                          I wanted to do.
                        </>
                      }
                    />
                  </div>
                </div>
                <Section
                  header="What are your goals?"
                  p={
                    <>
                      Right now, the goal is to find a job where I can prove
                      myself. I&apos;ve put in the time and work to become a
                      proficient developer. I&apos;m aware that I&apos;m
                      talented, and yet I&apos;m aware of how little I know.
                      When I get my first role as a junior developer, I&apos;ll
                      take it as an opportunity to show my chops, and to learn
                      and absorb as much as I can.
                      <br />
                      The only place I can go from there is up. My goal in the
                      next 5 years is to become a senior developer. I&apos;m
                      confident I&apos;ll be able to do it. The longest term of
                      my goals is to eventually become a CTO of a startup that
                      leaves a positive impact on the world. I&apos;ll settle
                      for nothing less.
                    </>
                  }
                />
              </article>
            </div>
          </section>
        </div>
        <section className="">
          <h2 className="text-2xl">
            Let&apos;s talk a little more technical...
          </h2>
          <article className="flex flex-col pl-4">
            <Section
              header="What do you do?"
              p={
                <>
                  I&apos;m a software engineer, leaning towards
                  frontend/fullstack development. I love the technical challenge
                  of solving logical problems, and I don&apos;t mind working
                  behind the scenes to get everything working just right. Still,
                  I enjoy building functional websites with react and tailwind
                  quite a bit. Thus, fullstack.
                </>
              }
            />
            <Section
              header="Where do you do it?"
              p={
                <>
                  My dev enviornment is constantly in flux. My primary editor is
                  Neovim, and I spend a lot of time tweaking and modifying my
                  settings. It&apos;s almost like its own little hobby! If
                  you&apos;d like to take a look at my dotfiles, you can find
                  them right{" "}
                  <Link
                    href="https://github.com/danielvolchek/dotfiles"
                    content="here!"
                  />
                </>
              }
            />
          </article>
        </section>
      </div>
    </>
  );
};

export default About;
