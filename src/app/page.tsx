import Header from "./sections/Header";
import Footer from "./sections/Footer";
import { Projects } from "./sections/Projects";
import Career from "./sections/Career";
import { AnimatedTestimonialsDemo } from "./sections/About";
import { Divider } from "./sections/Divider";

export default function Home() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <main>
        <section id="about" className="bg-slate-50">
          <AnimatedTestimonialsDemo />
        </section>
        <section id="career" className="bg-white">
          <Divider></Divider>

          <h1 className="w-full text-lg font-bold md:text-4xl mt-20 text-gray-600 dark:text-white text-center">
            Career
          </h1>
          <Career />
        </section>
        <section id="projects" className="bg-slate-50">
          <Divider></Divider>
          <h1 className="w-full text-lg font-bold md:text-4xl mt-20 text-gray-600 dark:text-white text-center">
            Projects
          </h1>
          <Projects />
        </section>
      </main>
      <Footer />
    </>
  );
}
