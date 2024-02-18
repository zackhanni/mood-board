import Link from "next/link";
import SubHomeTemplate from "../components/SubHomeTemplate";

export default function page() {
  const resources = [
    {
      title: "National Institute of Mental Health (NIMH)",
      description:
        "A reliable source for mental health information, NIMH provides research-based resources, publications, and updates on a wide range of mental health disorders and treatments.",
      link: "National Institute of Mental Health (NIMH)",
    },
    {
      title: "TherapyRoute.com",
      description:
        "A global mental health directory connecting individuals with therapists, psychologists, and mental health professionals worldwide. It can be a valuable resource for those seeking professional support.",
      link: "https://www.therapyroute.com/",
    },
    {
      title: "Psychology Today",
      description:
        "An online platform offering articles, blogs, and a therapist directory to help individuals explore different aspects of psychology and connect with mental health professionals.",
      link: "Psychology Today",
    },
    {
      title: "Mind",
      description:
        "Mind is a UK-based mental health charity that provides extensive information on various mental health issues, resources for support, and campaigns to raise awareness.",
      link: "https://www.mind.org.uk/",
    },
    {
      title: "Headspace",
      description:
        "A popular meditation and mindfulness app, Headspace also offers a blog with articles on stress management, mindfulness practices, and overall mental well-being.",
      link: "https://www.headspace.com/",
    },
    {
      title: "Verywell Mind",
      description:
        "Verywell Mind is an online resource that covers a wide array of mental health topics, providing articles, expert advice, and practical tips for emotional well-being.",
      link: "https://www.verywellmind.com/",
    },
  ];

  return (
    <SubHomeTemplate
      image="/online-resume.svg"
      title="External Resources"
      description="These resources cover a spectrum of topics, from mindfulness
      practices to coping strategies, ensuring you have access to a
      comprehensive range of tools for your personal growth. Click through
      to discover a network of trusted partners dedicated to empowering
      you on your path to emotional resilience and happiness."
      bottomSection={resources.map((resource) => {
        return (
          <div key={resource.title}>
            <Link href={resource.link} className="hover:underline font-bold">
              {resource.title}
            </Link>
            <p>{resource.description}</p>
          </div>
        );
      })}
    />
  );
}
