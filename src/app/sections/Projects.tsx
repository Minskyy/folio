"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const basePath = process.env.NODE_ENV === "production" ? "/folio" : "";

export function Projects() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] mt-8">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          technologies={item.technologies}
          url={item.url}
        />
      ))}
    </BentoGrid>
  );
}

const Header = (src: string) => {

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <div className="h-full w-full rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image src={src} alt="avatar" height="400" width="400" />
      </div>
      
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
    header: Header(`${basePath}/BSCTools.png`),
    technologies: [
      "Node",
      "GraphQL",
      "BitQuery",
      "Solidity",
      "Redis",
      "Telegram Bot API",
    ],
    className: "md:col-span-2 md:row-span-2",
    url: "https://github.com/Minskyy/CoinSniper",
  },
  {
    title: "Pixel",
    description: (
      <span className="text-sm">
        A decentralized application mixing finances, art, and NFT&apos;s
      </span>
    ),
    technologies: [
      "Node",
      "Express",
      "Redis",
      "Angular",
      "GraphQL",
      "BitQuery",
      "Solidity",
    ],
    header: Header(`${basePath}/pixel.png`),
    className: "md:col-span-2 md:row-span-2",
    url: "https://pixel-io.art/",
  },
  {
    title: "Portfolio website",
    description: <span className="text-sm">This website!</span>,
    technologies: [
      "Next.js",
      "React",
      "Node",
      "Aceternity.UI",
      "Shadcn",
      "TailwindCSS",
    ],
    header: Header(`${basePath}/folioWebsite.png`),
    className: "md:col-span-2 md:row-span-1",
    url: "https://github.com/Minskyy/folio",
  },
  {
    title: "Burger Builder",
    description: (
      <span className="text-sm">
        An app which implements all of the basic features of a burger ordering
        website
      </span>
    ),
    technologies: ["React", "Node", "Firebase"],
    header: Header(`${basePath}/BurgerBuilder.png`),
    className: "md:col-span-2 md:row-span-2",
    url: "https://burgerbuilder-5da8a.web.app/",
  },
  {
    title: "Polymarket bot",
    description: (
      <span className="text-sm">
        A bot to exploit polymarket&apos;s reward system
      </span>
    ),
    technologies: ["Node", "Polymarket API", "Web3"],
    header: Header(`${basePath}/Polymarket.png`),
    className: "md:col-span-1",
  },
  {
    title: "Lottery Cracker",
    description: (
      <span className="text-sm">
        A tool to exploit a lottery-type of smart contract
      </span>
    ),
    technologies: ["Solidity", "Web3", "BSC Scan"],
    header: Header(`${basePath}/Polymarket.png`),
    className: "md:col-span-1",
    url: "https://github.com/Minskyy/PseudoRandomCracker",
  },
];
