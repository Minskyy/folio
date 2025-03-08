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

const items = [
  {
    title: "BSC Tools",
    description: (
      <span className="text-sm">
        Tools for detecting freshly-launched tokens with great potential.
      </span>
    ),
    header: SkeletonFour(`${basePath}/BSCTools.png`),
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
    header: SkeletonFour(`${basePath}/folioWebsite.png`),
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
    header: SkeletonFour(`${basePath}/Pixel.png`),
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
    header: SkeletonFour(`${basePath}/Polymarket.png`),
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
