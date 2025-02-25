"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

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
          <p>
            Fullstack Developer - Angular 2, Typescript, Node.js Javascript, Java
          </p>
          <p>
            Migrating a huge java swing application to Angular, one dialog at a time
          </p>
          <p>
            Developing tools to automate the process of creating the scaffolding for the migrated dialogs (Angular Schematics)
          </p>
          <p>
            Implementing best practices and improving overall performance of the application and quality of the codebase
          </p>
          <p>
            Working daily with cloud based tools and services
          </p>

        </div>
      ),
    },
    {
      title: "2019-2021",
      content: (
        <div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/GoContact.png"
              onClick={() => window.open("https://www.gocontact.com/", "_blank")}
              alt="hero template"
              width={500}
              height={500}
              className="cursor-pointer rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developing software mainly using ReactJS and Node.js.
            - Dealing daily with cloud and microservices architectures
            - Experience with IPBX solutions and technologies underneath (VoIP, SIP)
            - Providing users with support in the occurrence of software or server issues (Linux, PM2, freeswitch)
            - Experience with interesting 3rd party services, such as Dialogflow and Deepspeech.
          </p>

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
              src="/geometrix.png"
              alt="hero template"
              width={500}
              height={500}
              className="cursor-pointer rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built interactive educational platforms using JavaScript and ThreeJS, focusing on responsive design and user engagement.
          </h1>
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
    <section id="career">
      <TimelineDemo />
    </section>
  )


}

export default Career;