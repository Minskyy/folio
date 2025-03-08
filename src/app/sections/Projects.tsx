"use client";
import { cn } from "@/lib/utils";
import React from "react";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const basePath = process.env.NODE_ENV === 'production' ? '/folio' : '';


export function Projects() {
  return (
    <section id="projects">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
            url={item.url}

          />
        ))}
      </BentoGrid>
    </section>

  );
}

const SkeletonOne = () => {

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <Image
        src="/pixel.png"
        alt="avatar"
        height="687"
        width="1809"
        className="rounded-lg h-full w-full"
      />
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = (src: string) => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-full rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src={src}
          alt="avatar"
          height="200"
          width="200"
        />

      </motion.div>


    </motion.div>
  );
};
const SkeletonFive = () => {
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >

      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "BSC Tools",
    description: (
      <span className="text-sm">
        Tools for detecting freshly-launched tokens with great potential.
      </span>
    ),
    header: SkeletonFour("/BSCTools.png"),
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    url: "https://github.com/Minskyy/CoinSniper"
  },

  {
    title: "Portfolio website",
    description: (
      <span className="text-sm">
        This website!
      </span>
    ),
    header: SkeletonFour("/folioWebsite.png"),
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    url: "https://github.com/Minskyy/folio"
  },
  {
    title: "Pixel",
    description: (
      <span className="text-sm">
        A decentralized application mixing finances, art, and NFT&apos;s
      </span>
    ),
    header: SkeletonFour("/Pixel.png"),
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    url: "https://github.com/Minskyy/pixel-web"
  },
  {
    title: "Polymarket bot",
    description: (
      <span className="text-sm">
        A bot to exploit polymarket&apos;s reward system
      </span>
    ),
    header: SkeletonFour("/Polymarket.png"),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lottery Cracker",
    description: (
      <span className="text-sm">
        A tool to exploit a lottery-type of smart contract
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    url: "https://github.com/Minskyy/PseudoRandomCracker"
  },
  {
    title: "Burger Builder",
    description: (
      <span className="text-sm">
        A tool to exploit a lottery-type of smart contract
      </span>
    ),
    header: SkeletonFour(`${basePath}/BurgerBuilder.png`),
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    url: "https://burgerbuilder-5da8a.web.app/"
  },

];
