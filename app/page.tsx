import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { BlurEffect } from "@/components/kico/effects/blur-effect";
import { Heading } from "@/components/kico/ui/heading";
import { Section } from "@/components/kico/ui/section";
import { PageActionLinks } from "@/components/page-actions";
import { LightBGAnimation } from "@/components/kico/animations/light-bg-animation";
import { DotEffect } from "@/components/kico/effects/dot-effect";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { WebIcon } from "@/components/icons/web";
import { MobileIcon } from "@/components/icons/mobile";
import { CodeIcon } from "@/components/icons/code";
import { DatabaseIcon } from "@/components/icons/database";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { ProjectCard } from "@/components/kico/ui/project-card";
import { ButtonLink } from "@/components/kico/ui/button-link";

import projects, { mySkills } from "@/constants";
import { Stars } from "@/components/icons/starts";
import { UniversAnimation } from "@/components/kico/animations/univers-animation";

export type Project = {
  tag: string;
  src: string;
  title: string;
  description: string;
  status: "done" | "inProgress" | "pending";
  borderGradient?: boolean;
  leftButton?: { title: string; href: string };
  rightButton?: { title: string; href: string };
};

const Home = () => {
  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* hero */}
      <Section crosses>
        <div className="container sm:w-[90%] mx-auto">
          <UniversAnimation />
          <div className="pb-10 md:pb-0 relative md:p-6 md:mt-10">
            <Heading
              title="Hi, I'am Yashraj Jagtap"
              tag="Full Stack Web Developer"
              text="Computer Engineering student and Full Stack Web Developer with experience building production-ready web applications and SaaS platforms."
              className="mb-6 lg:mb-8"
              underline
            />
            <PageActionLinks className="mb-6 lg:mb-10" />
            <BlurEffect />
          </div>

        </div>
      </Section>

      {/* about  */}
      <Section id="about" crosses topBorder>
        <LightBGAnimation className="absolute left-0" />
        <LightBGAnimation className="absolute right-0" />
        <BlurEffect />
        <div className="container sm:w-[90%] mx-auto">
          <Heading title="About Me" underline />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center lg:px-[4rem]">
            <div className="relative">
              <div className="rounded-[50%] h-[300px] w-[300px] overflow-hidden bg-[#682bb3] backdrop-blur-sm z-10">
                <Image
                  src={"/assets/Yashraj.webp"}
                  alt="yashraj-jagtap"
                  height={500}
                  width={500}
                />
              </div>
            </div>

            <div className="relative px-[2rem] lg:px-0">
              <Heading tag="full stack developer" className="mb-2 lg:mb-2" />

              <ul className="list-disc space-y-4">
                <li className="body-2 text-md">
                  I&apos;m a{" "}
                  <span className="text-gradient">
                    Full Stack Web Developer
                  </span>{" "}
                  and Computer Engineering student based in Pune, Maharashtra. I specialize in building scalable web applications using React, Node.js, and MongoDB.
                </li>

                <li className="body-2 text-md">
                  Experienced in{" "}
                  <span className="text-gradient">VPS infrastructure, domain configuration, and secure production hosting</span>. I love turning complex problems into elegant, production-ready solutions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience" crosses topBorder>
        <div className="container mx-auto px-4 md:w-[90%]">
          <Heading title="Experience" underline />
          <div className="glass-effect p-8 my-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="h5 text-gradient">Freelance Full Stack Developer</h3>
                <p className="body-2 text-muted-foreground">Self-Employed</p>
              </div>
              <span className="tag">Oct 2025 – Present</span>
            </div>
            <ul className="list-disc list-inside space-y-2 font-thin text-sm">
              <li>Developing a scalable **Zyntherraa E-commerce platform** using React, Node.js, and MongoDB with secure backend APIs.</li>
              <li>Building backend services for authentication, product management, and order processing.</li>
              <li>Managing production deployment on Linux VPS using NGINX and SSL configuration.</li>
              <li>Built and deployed various custom web solutions, SaaS platforms, and scheduling tools for diverse clients.</li>
              <li>Experienced in VPS infrastructure, domain configuration, and secure production hosting.</li>
            </ul>
          </div>
        </div>
      </Section>


      {/* projects  */}
      <Section id="projects" crosses topBorder>
        <div className="container mx-auto px-4 md:w-[90%]">
          <Heading title="Projects" underline />
          <BlurEffect />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-20 my-8">
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                {...project}
                className="w-full max-w-[300px]"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* skills  */}
      <Section id="skills" crosses topBorder>
        <div className="container md:w-[90%] mx-auto">
          <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <Image
              src={"/assets/gradient-sphere.png"}
              className="relative z-1"
              width={255}
              height={255}
              alt="Sphere"
            />
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <Stars />
            </div>
          </div>

          <Heading title="Skills" underline tag="skills" />
          <div className="flex items-center justify-center flex-wrap gap-6">
            <BlurEffect />
            {mySkills.map((skill) => (
              <span
                key={skill.title}
                className="group glass-effect rounded-full md:rounded-lg p-3 flex items-center justify-center w-fit cursor-pointer transition-all"
              >
                {skill.icon}
                <p className="hidden md:block text-sm font-thin pl-3">
                  {skill.title}
                </p>
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* my strategy */}
      <Section id="strategy" crosses topBorder>
        <div className="container sm:w-[90%] mx-auto">
          <Heading
            title="Quick and beautiful web design"
            tag="my strategy"
            underline
          />

          <div className="flex flex-wrap gap-12 items-center justify-center">
            <div className="max-w-[350px] glass-effect">
              <div className="flex items-center justify-center">
                <div className="relative bg-foreground/95 supports-[backdrop-filter]:bg-foreground/5 w-full h-32 backdrop-blur rounded-2xl border border-foreground/20 flex items-center justify-center">
                  <DotEffect />
                  <div className="relative bg-foreground/95 supports-[backdrop-filter]:bg-foreground/5 w-[75%] h-16 backdrop-blur rounded-2xl border border-foreground/20"></div>
                </div>
              </div>
              <h6 className="h6 text-foreground py-4">
                Modular Design Systems
              </h6>
              <p className="text-foreground text-sm font-thin pb-6">
                Explore the art of building salable, cohesive design systems
                that streamline UI development and enhance team collaboration.
              </p>

              <ButtonLink
                buttonTitle="Learn More"
                buttonHref="https://ant.design/components/overview/"
              />
            </div>

            <div className="max-w-[550px] glass-effect">
              <BlurEffect />

              <div className="z-10">
                <h6 className="h6 text-foreground">
                  UI Kits: Bridging Design and Code
                </h6>

                <p className="text-foreground text-sm font-thin py-4">
                  An in-depth guide to understanding the core principles,
                  structures, and benefits of well-organized design systems in
                  digital products.
                </p>

                <ButtonLink
                  buttonTitle="Documentation"
                  buttonHref="https://ant.design/components/overview/"
                  className="mb-8"
                />

                <Image
                  src={"/assets/ui-kit.png"}
                  width={500}
                  height={60}
                  alt="video"
                />
              </div>
            </div>

            <div className="max-w-[550px] glass-effect">
              <BlurEffect />

              <div className="z-10">
                <Image
                  src={"/assets/effective-design.png"}
                  width={500}
                  height={60}
                  alt="video"
                />

                <h6 className="h6 text-foreground py-4">
                  The Anatomy of Effective Design Systems
                </h6>

                <p className="text-foreground text-sm font-thin mb-8">
                  Uncover the secrets of seamlessly integrating UI kits into
                  your development workflow, enhancing both design quality and
                  coding efficiency.
                </p>

                <ButtonLink
                  buttonTitle="Documentation"
                  buttonHref="https://ui.shadcn.com/docs/components"
                />
              </div>
            </div>

            <div className="max-w-[350px] glass-effect">
              <h6 className="h6 text-foreground">Modular Design Systems</h6>

              <p className="text-foreground text-sm font-thin py-4">
                Explore the art of building salable, cohesive design systems
                that streamline UI development and enhance team collaboration.
              </p>

              <ButtonLink
                buttonTitle="Components"
                buttonHref="https://ant.design/components/overview/"
                className="mb-8"
              />

              <div className="flex items-center justify-center">
                <div className="relative bg-foreground/95 supports-[backdrop-filter]:bg-foreground/5 w-full h-32 backdrop-blur rounded-2xl border border-foreground/20 flex items-center justify-around">
                  <DotEffect />
                  <CodeIcon className="h-10 text-blue-500 w-10" />
                  <WebIcon className="h-10 text-pink-500 w-10" />
                  <MobileIcon className="h-10 text-orange-500 w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>


      {/* connect */}
      <Section id="connect" crosses topBorder>
        <div className="container md:w-[90%] mx-auto">
          <Heading
            title="Let's Connect"
            tag="Contact"
            text="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
            underline
          />

          <div className="flex flex-wrap gap-8 justify-center py-10">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="glass-effect p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform w-[300px]"
            >
              <IoMailOutline className="h-10 text-red-500 w-10" />
              <span className="font-semibold text-foreground">Email</span>
              <span className="text-sm font-thin text-foreground">{siteConfig.links.email}</span>
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-effect p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform w-[300px]"
            >
              <FaLinkedinIn className="h-10 text-blue-500 w-10" />
              <span className="font-semibold text-foreground">LinkedIn</span>
              <span className="text-sm font-thin text-foreground">yashraj-jagtap</span>
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="glass-effect p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform w-[300px]"
            >
              <FaGithub className="h-10 w-10 text-foreground" />
              <span className="font-semibold text-foreground">GitHub</span>
              <span className="text-sm font-thin text-foreground">Yashraj9595</span>
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
};
export default Home;
