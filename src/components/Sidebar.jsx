import sidebar from "../database/sidebar.json";
// import avatar from "../assets/avatar.png";
import avatar2 from "../assets/Sumaiya_Profile.jpeg";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-4 lg:gap-8 pt-4 lg:pt-8 px-4 lg:px-0">
      <div className="h-24 w-24 lg:h-40 lg:w-40 rounded-full p-2 border border-gray-300 overflow-hidden">
        <img src={avatar2} className="object-center scale-[1.25]" />
      </div>

      <div className="w-full lg:pl-20 text-center lg:text-left">
        <h1 className="text-xl lg:text-2xl font-medium">{sidebar.name}</h1>
        <p className="leading-6 text-neutral-600 text-base lg:text-lg">{sidebar.description}</p>

        <div className="mt-4 lg:mt-6 space-y-2 lg:space-y-0">
          {sidebar.locations.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center lg:justify-start items-center gap-2 text-base lg:text-lg">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
                </svg>
                <span>{item}</span>
              </div>
            );
          })}
          <div className="flex justify-center lg:justify-start items-center gap-2 text-base lg:text-lg">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
              <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path>
            </svg>
            <a href={`mailto:${sidebar.email}`} target="_blank" rel="noopener noreferrer">{sidebar.email}</a>
          </div>

          {sidebar.phone ? (
            <div className="flex justify-center lg:justify-start items-center gap-2 text-base lg:text-lg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 91.69 260.94 64 211.43c-14.9-26.81-23.23-49.1-26.34-66.69-6.81-38.53 6.66-64.91 22-85.67a87 87 0 0 1 26.63-21.58c1.31-.81 2.65-1.55 4.03-2.22A45.54 45.54 0 0 1 123.5 32c20.29 0 41.71 10.7 62.23 32.1 18.25 19.05 32.54 43.83 42.33 73.09a4 4 0 0 1-1.47 5.16l-56.4 32.1a16 16 0 0 0-6.78 20.78c15.9 36.47 45.87 74.09 84.42 112.64s76.17 68.51 112.64 84.42a16 16 0 0 0 20.78-6.78l32.1-56.4a4 4 0 0 1 5.16-1.47c29.26 9.79 54.05 24.09 73.09 42.33C469.3 346.79 480 368.21 480 388.5a45.54 45.54 0 0 1-2.24 22.18c-.67 1.38-1.41 2.72-2.22 4.03a87 87 0 0 1-21.58 26.63c-20.76 15.34-47.14 28.81-85.67 22-17.59-3.11-39.88-11.44-66.69-26.34z"></path>
              </svg>
              <a href={`tel:${sidebar.phone}`}>{sidebar.phone}</a>
            </div>
          ) : null}

          {sidebar.linkedin ? (
            <div className="flex justify-center lg:justify-start items-center gap-2 text-base lg:text-lg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
              </svg>
              <a href={sidebar.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          ) : null}

          {sidebar.github ? (
            <div className="flex justify-center lg:justify-start items-center gap-2 text-base lg:text-lg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
              <a href={sidebar.github} target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          ) : null}

          {sidebar.kaggle ? (
            <div className="flex justify-center lg:justify-start items-center gap-2 text-base lg:text-lg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z"></path>
              </svg>
              <a href={sidebar.kaggle} target="_blank" rel="noopener noreferrer">Kaggle</a>
            </div>
          ) : null}

          {sidebar.googleScholar ? (
            <div className="flex justify-center lg:justify-start items-center gap-2 text-base lg:text-lg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M390.9 298.5c0 0 0 .1 .1 .1c9.2 19.4 14.4 41.1 14.4 64C405.3 445.1 338.5 512 256 512s-149.3-66.9-149.3-149.3c0-22.9 5.2-44.6 14.4-64h0c1.7-3.6 3.6-7.2 5.6-10.7c4.4-7.6 9.4-14.7 15-21.3c27.4-32.6 68.5-53.3 114.4-53.3c33.6 0 64.6 11.1 89.6 29.9c9.1 6.9 17.4 14.7 24.8 23.5c5.6 6.6 10.6 13.8 15 21.3c2 3.4 3.8 7 5.5 10.5zm26.4-18.8c-30.1-58.4-91-98.4-161.3-98.4s-131.2 40-161.3 98.4L0 202.7 256 0 512 202.7l-94.7 77.1z"></path>
              </svg>
              <a href={sidebar.googleScholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
