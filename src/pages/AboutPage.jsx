import React from "react";

export default function AboutPage() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* <div className="max-w-2xl mx-auto flex flex-col  justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
          Hi, I'm Saidul Badhon, a Frontend Developer with a passion for
          creating stunning and responsive web experiences.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
          Hi, I'm a Full Stack Web & App Developer with 4 years of experience. I
          have worked with multiple technologies to build websites, web
          applications, and native applications. I've completed many projects
          with 100% client satisfaction. For me as a professional developer,
          learning new technologies in web and mobile is my passion. I have
          worked with PHP, Python, Java, C# and now in React JS, React Native &
          Node JS. Right now, I am working as a MERN stack engineer on a
          different platform.
        </p>
      </div> */}

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Section: Introduction */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About Me
        </h1>
        <section className="mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            Hi, I'm a Full Stack Web & App Developer with 4 years of experience.
            I've worked with a variety of technologies to build websites, web
            applications, and native mobile applications, always striving for
            100% client satisfaction.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mt-4">
            For me, development isn't just a job—it's my passion. I love
            learning about new technologies in the web and mobile space and
            finding innovative ways to solve problems and create great user
            experiences.
          </p>
        </section>

        {/* Section: Skills */}
        <section className="mb-12">
          <h2 className="text-2xl  font-semibold text-gray-900 mb-6">
            My Skills
          </h2>
          <ul className="list-disc list-inside ml-6 text-lg text-gray-700">
            <li className="mb-2">
              Languages: PHP, Python, Java, C#, JavaScript
            </li>
            <li className="mb-2">
              Technologies & Frameworks: React.js, React Native, Node.js, MERN
              Stack
            </li>
            <li className="mb-2">
              Development Areas: Full Stack Web Development, Mobile App
              Development, Backend API Development
            </li>
          </ul>
          <p className="text-xl text-gray-700 mt-6">
            Right now, I'm focused on building scalable and efficient
            applications using the <strong>MERN stack</strong> (MongoDB,
            Express, React, Node.js).
          </p>
        </section>

        {/* Section: Experience */}
        <section className="mb-12">
          <h2 className="text-2xl  font-semibold text-gray-900 mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            I have successfully completed numerous projects with a focus on
            quality and client satisfaction. Throughout my career, I have
            delivered solutions for different platforms, working with both
            startups and established businesses. My approach always involves
            understanding clients' needs in depth, and then translating them
            into intuitive and effective technical solutions.
          </p>
        </section>

        {/* Section: What Drives Me */}
        <section className="mb-12">
          <h2 className="text-2xl  font-semibold text-gray-900 mb-6">
            What Drives Me
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            What excites me most is the challenge of turning complex
            requirements into seamless user experiences, whether it’s for the
            web or mobile. I enjoy staying up to date with the latest
            technologies, and I constantly look for opportunities to enhance my
            skills and contribute meaningfully to the tech community.
          </p>
        </section>

        {/* Section: Let's Connect */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Let’s Connect!
          </h2>
          <p className="text-xl text-gray-700">
            I'm always eager to take on new challenges and collaborate on
            meaningful projects. If you'd like to work together or have a chat
            about tech, feel free to reach out or connect with me on{" "}
            <a
              href="https://linkedin.com/in/saidulbadhon"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
