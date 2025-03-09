import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";

const Socials: React.FC = () => {

  const mySocials = [
    {
      title: 'LinkedIn',
      icon: (
        <Image
          src="https://www.svgrepo.com/show/448234/linkedin.svg"
          width={20}
          height={20}
          alt="LinkedIn"
        />
      ),
      href: "https://www.linkedin.com/in/adrian0liveira/"
    },
    {
      title: 'Github',
      icon: (
        <Image
          src="https://www.svgrepo.com/show/512317/github-142.svg"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "https://github.com/Minskyy"
    },
  ]


  return (
    <div className="flex mt-8 items-center justify-center w-full">
      <FloatingDock
        items={mySocials}
      />
    </div>

  )
}

export default Socials;