import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Section from "../components/section";
import Link from "../components/link";
import me from "../images/stock.webp";

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
                    className="order-first mt-4 h-auto rounded-md border-4 border-teal-300 lg:order-last lg:ml-6 lg:w-[30vw] xl:w-[25vw] 2xl:w-[20vw]"
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
                        </>
                      }
                    />
                    <Section
                      header={<>I&apos;m much more than just my terminal</>}
                      headerClasses="text-2xl"
                      p={
                        <>
                          When I&apos;m not coding, I love to try new things.
                          Lately, I&apos;ve been learning to rock climb.
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
                        </>
                      }
                    />
                  </div>
                </div>
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
                  behind the scenes to get everything functioning just right. I
                  also enjoy putting the puzzle pieces together, with a
                  satisfing visual representation. ReactJS and TailwindCSS are
                  my preferred frontend tools. Thus, fullstack.
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
