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
}
