import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const profileImg = "https://github.com/saidulbadhon.png";

export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-2xl py-24 sm:py-48 lg:py-24">
          <div className="text-center">
            <div className="flex  justify-center items-center">
              <div className="relative w-24">
                <img
                  src={profileImg}
                  alt="saidul badhon"
                  width="192"
                  height="192"
                  quality="95"
                  priority={true}
                  className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />

                <span className="absolute bottom-0 right-0 text-4xl">👋</span>
              </div>
            </div>

            <h1
              className={cn(
                "text-balance leading-loose text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                "mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
              )}
            >
              <span className="font-bold">Hello, I'm Saidul Badhon!</span> I'm a{" "}
              <span className="font-bold">Full Stack Software Engineer</span>{" "}
              with <span className="font-bold">4 years</span> of experience. I
              enjoy building <span className="italic">sites & apps</span>. My
              focus is <span className="underline">Web3</span>,{" "}
              <span className="underline">Blockchain</span> &{" "}
              <span className="underline">AI</span>.
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
              <Link
                to="/contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              >
                Contact me
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>

              <a
                className="bg-white ring-1 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
                href="https://www.linkedin.com/in/saidulbadhon"
                target="_blank"
              >
                <BsLinkedin />
              </a>

              <a
                className="bg-white ring-1 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
                href="https://github.com/SaidulBadhon"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl text-center py-24 sm:py-48 lg:py-24">
          <h1 className="text-2xl font-medium !leading-[1.5] sm:text-4xl">
            About me
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            Hi, I'm a Full Stack Web & App Developer with 4 years of experience.
            I have worked with multiple technologies to build websites, web
            applications, and native applications. I've completed many projects
            with 100% client satisfaction. For me as a professional developer,
            learning new technologies in web and mobile is my passion. I have
            worked with <span className="font-semibold">PHP</span>,{" "}
            <span className="font-semibold">Python</span>,{" "}
            <span className="font-semibold">Java</span>,{" "}
            <span className="font-semibold">C#</span> and now in{" "}
            <span className="font-semibold">React JS</span>,{" "}
            <span className="font-semibold">React Native</span> &{" "}
            <span className="font-semibold">Node JS</span>. Right now, I am
            working as a <span className="font-semibold">MERN</span> stack
            engineer on a different platform.
          </p>

          {/* </motion.section> */}
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
