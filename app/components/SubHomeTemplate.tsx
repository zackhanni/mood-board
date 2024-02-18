import Image from "next/image";
import { ReactNode } from "react";

interface templateProps {
  image: string;
  title: string;
  description: string;
  bottomSection: ReactNode;
}

export default function SubHomeTemplate(props: templateProps) {
  return (
    <section className=" text-center max-w-screen-sm mx-auto px-4 sm:px-0">
      <div className="py-16 space-y-4 flex flex-col">
        <div className="space-y-4 pb-8">
          <Image
            src={props.image}
            width={200}
            height={200}
            alt="Donations"
            className="mx-auto max-h-[200px] max-w-[200px]"
          />

          <h2 className="text-3xl">{props.title}</h2>
          <p className="text-sm text-start">{props.description}</p>
        </div>
        <div className="bg-[#6C63FF]/20 flex flex-col p-8 rounded-xl space-y-4 text-start">
          {props.bottomSection}
        </div>
      </div>
    </section>
  );
}
