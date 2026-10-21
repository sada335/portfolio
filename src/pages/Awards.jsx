import React from "react";
import TextFormatter from "../components/TextFormatter";
import awardsData from "../database/awards.json";

const Awards = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold border-b border-gray-200 mb-4">
        Awards & Achievements
      </h1>
      <div className="space-y-8">
        {Object.keys(awardsData).map((divisionKey, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold capitalize mb-2">
              {divisionKey.replace(/([A-Z])/g, ' $1').trim()}
            </h2>
            <ul className="list-disc list-inside space-y-4">
              {awardsData[divisionKey].map((award, idx) => (
                <li key={idx} className="text-gray-700">
                  <span className="font-bold">{award.title}</span>
                  <br />
                  <TextFormatter text={award.description} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
