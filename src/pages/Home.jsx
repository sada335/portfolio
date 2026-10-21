import React from "react";
import Sidebar from "../components/Sidebar";
import TextFormatter from "../components/TextFormatter";
import sidebar from "../database/sidebar.json";
import { aboutMe } from "../database/about-me.json";
import { education } from "../database/education.json";
import { recentUpdates } from "../database/recent-updates.json";
import InfoSection from "../components/InfoSection";


const Home = () => {
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-bold">About Me</h1>

      <div className="mt-6">
        <TextFormatter text={aboutMe.description} />
      </div>

      <div className="pt-6 lg:pt-8 pb-3 text-base lg:text-lg">Here's quick preview of {sidebar.name}:</div>

      <div className="">
        <ul className="space-y-3">
          {aboutMe.quickPreviews.map((item, index) => {
            return (
              <li key={index} className="list-disc ml-5 lg:ml-6 text-base lg:text-lg">
                <TextFormatter text={item} />
              </li>
            );
          })}
        </ul>
      </div>

      <InfoSection title="Research Interests" bulletPoints={aboutMe.researchInterests} />
      <InfoSection title="Education" bulletPoints={education} />
      <InfoSection title="Recent Updates" bulletPoints={recentUpdates} />
    </div>
  );
};

export default Home;
