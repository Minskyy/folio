import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const KNSkills = [
  {
    title: 'Angular',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/452156/angular.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
  {
    title: 'TypeScript',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/439022/typescript.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
  {
    title: 'Node.js',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/378837/node.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
]


export const personalProjects = [
  {
    title: 'Solidity',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/374088/solidity.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
  {
    title: 'Unity',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/473818/unity.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
]

const professionalExperience = [
  {
    title: 'React',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/452092/react.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
  {
    title: 'Angular',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/452156/angular.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
  {
    title: 'TypeScript',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/439022/typescript.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
  {
    title: 'Node.js',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/378837/node.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
  {
    title: 'Python',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/452091/python.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
  {
    title: 'Docker',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/452192/docker.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
  {
    title: 'Kubernetes',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/376331/kubernetes.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
  {
    title: 'Jenkins',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/378837/node.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
  {
    title: 'AWS',
    icon: (
      <Image
        src="https://www.svgrepo.com/show/448266/aws.svg"
        width={100}
        height={100}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },



]



const Skills: React.FC = () => {



  return (
    <section id="skills" >
      <div className="flex items-center justify-center w-full ">
        <FloatingDock
          items={[...professionalExperience, ...personalProjects]}
        />
      </div>

    </section >
  )
}

export default Skills;