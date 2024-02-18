import Link from "next/link";
import Image from "next/image";
import SubHomeTemplate from "../components/SubHomeTemplate";

export default function page() {
  const donationLinks = [
    { title: "Donation link 1: Website.com/donate", link: "/" },
    { title: "Donation link 2: Website.com/donate", link: "/" },
    { title: "Donation link 3: Website.com/donate", link: "/" },
  ];

  return (
    <SubHomeTemplate
      image="/data.svg"
      title="Consider making a donation"
      description="Your donation doesn't just keep our website alive; it breathes life
          into the transformative journeys of countless individuals seeking
          understanding, coping mechanisms, and a community that cares. Join us
          in fostering a space of healing and growth by making a donation today.
          Together, we can make a meaningful difference in the lives of those
          pursuing emotional well-being."
      bottomSection={donationLinks.map((link) => {
        return (
          <div key={link.title}>
            <Link href={link.link} className="hover:underline font-bold">
              {link.title}
            </Link>
          </div>
        );
      })}
    />
  );

  return (
    <section className="pt-16 text-center max-w-screen-sm mx-auto px-4 sm:px-0">
      <div className="space-y-4 flex flex-col">
        <div className="mx-auto">
          <Image
            src="/data.svg"
            width={200}
            height={200}
            alt="Donations"
            className=""
          />
        </div>
        <h2 className="text-3xl">Consider making a donation</h2>
        <p className="text-sm text-start">
          Your generosity makes a significant impact on the vitality of our free
          website, ensuring it remains a beacon of support and knowledge for
          individuals navigating their emotional well-being. By contributing,
          you play a pivotal role in sustaining this valuable resource, allowing
          us to continue providing accessible tools and information to those in
          need of mental healthcare.{" "}
        </p>

        <p className="text-sm text-start">
          Your donation doesn't just keep our website alive; it breathes life
          into the transformative journeys of countless individuals seeking
          understanding, coping mechanisms, and a community that cares. Join us
          in fostering a space of healing and growth by making a donation today.
          Together, we can make a meaningful difference in the lives of those
          pursuing emotional well-being.
        </p>
        <div className="bg-[#6C63FF]/20 flex flex-col p-4 rounded-xl space-y-4">
          <Link href="/" className="hover:underline">
            Donation link 1: Website.com/donate
          </Link>

          <Link href="/" className="hover:underline">
            Donation link 2: Website.com/donate
          </Link>
        </div>
      </div>
    </section>
  );
}
