import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {

  const basePath = process.env.NODE_ENV === 'production' ? '/folio' : '';


  const testimonials = [

    {
      quote:
        "Computer Engineer with 6 years of experience as a Full Stack Developer. I have a passion for constantly learning new technologies and developing fun projects in my free time.",
      name: "Adriano Oliveira",
      designation: "Full Stack Developer @ Kuehne-Nagel",
      src: `${basePath}/adriano.jpeg`,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
