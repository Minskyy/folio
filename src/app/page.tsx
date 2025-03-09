import Header from "./sections/Header";
import Footer from "./sections/Footer";
import { Projects } from "./sections/Projects";
import Career from "./sections/Career";
import { AnimatedTestimonialsDemo } from "./sections/About";

export default function Home() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <main>
        <section id="about">
          <AnimatedTestimonialsDemo />
        </section>

        <section id="career">
          <h1 className="w-full text-lg font-bold md:text-4xl mt-20 text-black dark:text-white text-center">
            Career
          </h1>
          <Career />
        </section>
        <section id="projects">
        <h1 className="w-full text-lg font-bold md:text-4xl mt-20 text-black dark:text-white text-center">
            Projects
          </h1>
          <Projects />
        </section>
      </main>
      <Footer />
    </>
  );
}
