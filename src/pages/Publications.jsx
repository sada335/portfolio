import TextFormatter from "../components/TextFormatter";
import { publications } from "../database/publications.json";

const Publications = () => {
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-bold border-b border-gray-200 mb-3">
        Publications
      </h1>

      <div className="mt-6">
        <ul className="space-y-8 lg:space-y-10">
          {publications.map((item, index) => {
            return (
              <li key={index} className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
                <div className="col-span-1 flex justify-center items-center">
                  <img src={item.image} className="w-20 h-20 lg:w-auto lg:h-auto" />
                </div>
                <div className="col-span-1 lg:col-span-4">
                  <a href={item.paper_url} className="text-[#00008b] leading-5 text-base lg:text-lg">
                    <TextFormatter text={item.title} />
                  </a>
                  <div className="flex flex-wrap gap-x-2 mt-3 text-sm lg:text-base">
                    {item.authors.map((_item, _index) => {
                      return (
                        <a
                          href={_item.profile}
                          className={_item.name === "Sumaiya Rahman" ? "font-medium" : ""}
                          key={_index}>
                          {_item.name}
                          {item.authors.length !== _index + 1 ? ", " : ""}
                        </a>
                      );
                    })}
                  </div>

                  {item.notes.length > 0 ? (
                    <div className="mt-3 lg:mt-2 space-y-2 lg:space-y-3">
                      {item.notes.map((_item, _index) => {
                        return (
                          <div className="text-[#008000] leading-6 text-sm lg:text-base">
                            <TextFormatter text={_item} />
                          </div>
                        );
                      })}
                    </div>
                  ) : null}

                  {item.description.length > 0 ? (
                    <div className="mt-3 leading-6 text-sm lg:text-sm">
                      <TextFormatter text={item.description} />
                    </div>
                  ) : null}

                  {item.supervisors.length > 0 ? (
                    <div className="flex flex-col lg:flex-row justify-start items-start gap-2 lg:gap-3 mt-4 text-sm lg:text-base">
                      <span className="text-[#00008b] font-medium">
                        Supervisor(s):{" "}
                      </span>
                      {item.supervisors.map((_item, _index) => {
                        return (
                          <a
                            href={_item.profile}
                            key={_index}
                            target="_blank"
                            className="text-blue-500">
                            {_item.name}
                            {item.supervisors.length !== _index + 1 ? "," : ""}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Publications;
