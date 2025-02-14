import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description=""
      />

<div className="flex  px-4">
  <img src="images/about/vision.jpg" alt="Vision" className="w-1/2 md:w-1/3 rounded-lg shadow-lg p-4 " />
  <div className="text-center w-[80%] md:w-[50%] ">
    <h2 className="text-3xl font-bold text-white underline p-2 ">Our Vision</h2>
    <p className="mt-2 text-lg text-white leading-relaxed p-4 text-justify  ">
      We aim to inspire and empower tomorrow’s innovators by offering students hands-on learning experiences through internships, 
      meaningful projects, and personalized career guidance in both software and hardware, helping them turn their potential into real-world success.
    </p>
  </div>
</div>

<div className="flex justify-start mt-8 px-4">

  <div className="text-center w-[80%] md:w-[50%]">
    <h2 className="text-3xl font-bold text-white underline p-2 ">Our Mission</h2>
    <p className="mt-2 text-lg text-white leading-relaxed p-4 text-justify">
      Our mission is to offer students comprehensive opportunities for growth through internships, project-based learning, expert assistance in both software and hardware, and career guidance, helping them bridge the gap between academia and industry. We strive to equip them with the skills, knowledge, and confidence to succeed in their careers.
    </p>
  </div>
  <img src="images/about/mission.jpg" alt="Vision" className="w-1/2 md:w-1/3 rounded-lg shadow-lg p-4 " />
</div>
    </>
  );
};

export default AboutPage;
