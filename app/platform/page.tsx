import SubHomeTemplate from "../components/SubHomeTemplate";
import Link from "next/link";

export default function page() {
  const data = [
    {
      title: "Our Philosophy",
      description:
        "Mood Board operates on the belief that emotional well-being is a skill that can be cultivated. We're committed to providing a space where individuals can explore, learn, and embrace their emotions without judgment. Our philosophy is grounded in the idea that by understanding the nuances of your feelings, you gain the power to navigate life's challenges with greater clarity and purpose.",
    },
    { title: "Goals", description: "" },
    {
      title: "Comprehensive Emotional Education",
      description:
        "We aspire to be your go-to resource for comprehensive emotional education. Mood Board goes beyond the basics, offering in-depth insights into a wide spectrum of emotions, empowering you to recognize, understand, and express yourself authentically.",
    },
    {
      title: "Interactive Learning Experience",
      description:
        "Our goal is to make the journey of emotional discovery engaging and enjoyable. Through interactive learning modules, quizzes, and personalized tracking features, Mood Board ensures that the process of understanding your emotions is not only educational but also genuinely enriching.",
    },
    {
      title: "Supporting Mental Health:",
      description:
        "We are dedicated to supporting mental health by providing reliable information, expert insights, and a sense of community. Mood Board strives to be a trusted companion on your mental health journey, offering resources, tools, and connections to help you on your path to well-being.",
    },
  ];

  return (
    <SubHomeTemplate
      image="/love-it.svg"
      title="The Mood Board Platform"
      description="Welcome to Mood Board, a revolutionary web app designed to guide you on an insightful journey into the depths of your emotions. Our platform is more than just a tool; it's a philosophy centered around fostering emotional intelligence, resilience, and personal growth. At Mood Board, we believe that understanding your emotions is the key to unlocking a happier, more fulfilling life."
      bottomSection={data.map((resource) => {
        return (
          <div key={resource.title}>
            <h3 className="font-bold">{resource.title}</h3>
            <p>{resource.description}</p>
          </div>
        );
      })}
    />
  );
}
