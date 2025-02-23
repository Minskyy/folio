import Header from "./sections/Header";
import Footer from "./sections/Footer";
import { Projects } from "./sections/Projects";
import Career from "./sections/Career";
import { AnimatedTestimonialsDemo } from "./sections/About2";


export default function Home() {
  return (
    <>
      <div className='App'>
        <Header />
      </div>
      <main>
        <AnimatedTestimonialsDemo />

        <Career />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
