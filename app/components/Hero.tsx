import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-16 flex flex-col-reverse sm:flex-row items-center mx-auto sm:max-w-[80%]">
      <div className="flex flex-col mx-auto sm:max-w-[50%] space-y-4">
        <h1 className="text-4xl font-semibold text-center sm:text-start">
          Learn about your feelings and track your daily emotions
        </h1>
        <p className="text-center sm:text-start">
          Evolve your understanding of emotions and dig deeper into your self.
        </p>
        <div className="flex space-x-4 mx-auto sm:mx-0">
          <Button
            classes="bg-black rounded-xl text-sm"
            text="Get started FREE"
          />
          <Button
            classes="bg-gray-500 rounded-xl text-sm"
            text="Try the demo"
          />
        </div>
      </div>
      <div className="sm:max-w-[50%] mx-auto">
        <Image
          src="/meditate.svg"
          width={300}
          height={300}
          alt="Meditation"
          className=""
        />
      </div>
    </section>
  );
}
