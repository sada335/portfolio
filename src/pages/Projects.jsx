import React from "react";
import TextFormatter from "../components/TextFormatter";
import { projects } from "../database/projects.json";

const Projects = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold border-b border-gray-200 mb-4">
        Projects
      </h1>

      <div className="mt-4 space-y-6">
        {projects.map((item, index) => (
          <div key={index}>
            <h2 className="text-lg font-bold">{item.title}</h2>
            {item.tools ? (
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">Tools: </span>
                {item.tools}
              </p>
            ) : null}
            <ul className="list-disc ml-5 text-gray-700 mt-1 space-y-1">
              {item.description.map((point, idx) => (
                <li key={idx}>
                  <TextFormatter text={point} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
