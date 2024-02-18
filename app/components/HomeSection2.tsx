import Link from "next/link";
import React from "react";

export default function HomeSection2() {
  return (
    <section className="bg-[#242255] py-16 text-white text-xs text-center">
      <div>
        <h2 className="text-3xl pb-8">Mood Board</h2>
        <p>Created by Zack Hanni</p>
        <Link href="https://www.zachary.works/" className="hover:underline">
          See more Projects here.
        </Link>
      </div>
    </section>
  );
}
