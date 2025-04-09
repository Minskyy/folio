"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BadgeList } from "@/components/ui/badge-list";

export function TimelineDemo() {

  const basePath = process.env.NODE_ENV === 'production' ? '/folio' : '';

  const data = [
    {
      title: "2021-Present",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              onClick={() => window.open("https://home.kuehne-nagel.com/en/", "_blank")}
              src={`${basePath}/Kuehnenagel.jpg`}
              alt="startup template"
              width={500}
              height={500}
              className="cursor-pointer rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
            <p>
              - Migrating a huge <span className="font-semibold">java swing application</span> to <span className="font-semibold">Angular</span>
            </p>
            <p>
              - Developing tools to improve the experience of everyone involved in the project
            </p>
            <p>
              - Developing tools to automate the process of creating the scaffolding for the migrated dialogs (<span className="font-semibold">Angular Schematics</span>)
            </p>
            <p>
              - Implementing best practices and improving overall <span className="font-semibold">performance</span> of the application and <span className="font-semibold">quality</span> of the codebase
            </p>
            <p>
              - Working daily with <span className="font-semibold">cloud based tools and services</span>
            </p>
          </div>


          <BadgeList badgeNames={["Angular", "Node", "Oracle", "Java", "Spring Boot", "Bash", "Docker", "Kubernetes"]}></BadgeList>


        </div>
      ),
    },
    {
      title: "2019-2021",
      content: (
        <div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={`${basePath}/GoContact.png`}
              onClick={() => window.open("https://www.gocontact.com/", "_blank")}
              alt="hero template"
              width={500}
              height={500}
              className="cursor-pointer rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
            <p>- Developing a block-programming tool for building IVR&apos;s (Interactive Voice Response) using <span className="font-semibold">ReactJS</span> and <span className="font-semibold">Node.js</span>.</p>
            <p>- Dealing daily with <span className="font-semibold">cloud</span> and <span className="font-semibold">microservices architectures</span>.</p>
            <p>- Experience with <span className="font-semibold">IPBX solutions</span> and technologies underneath (<span className="font-semibold">VoIP</span>, <span className="font-semibold">SIP</span>).</p>
            <p>- Providing users with support in the occurrence of software or server issues (<span className="font-semibold">Linux</span>, <span className="font-semibold">PM2</span>, <span className="font-semibold">Freeswitch</span>).</p>
            <p>- Experience with interesting 3rd party services, such as <span className="font-semibold">Dialogflow</span> and <span className="font-semibold">Deepspeech</span>.</p>
          </div>
          <BadgeList badgeNames={["React", "Node", "Postgres", "Docker", "Microservices", "Elastic Search"]}></BadgeList>


        </div>
      ),
    },
    {
      title: "2016",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              onClick={() => window.open("https://geometrix.cidma.ua.pt/", "_blank")}
              src={`${basePath}/geometrix.png`}
              alt="hero template"
              width={500}
              height={500}
              className="cursor-pointer rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
            <p>
              - Project developed as part of a scholarship granted while studying at the University of Aveiro.
            </p>
            <p>
              - Built interactive games for an educational platform which helped children with disabilities learn all sorts of subjects.
            </p>
          </div>
          <BadgeList badgeNames={["Javascript", "HTML", "ThreeJS"]}></BadgeList>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}


const Career: React.FC = () => {

  return (
      <TimelineDemo />
    
  )


}

export default Career;