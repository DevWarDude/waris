import { FaArrowRight } from "react-icons/fa";

const Projects = (prop) => {
  return (
    <section
      className={`${prop.className} flex flex-col items-center justify-center my-[90px] `}
      id="projects"
    >
      <div className="w-[85%]">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-red-300 text-3xl to-orange-500 font-bold mb-10 sm:mb-20 sm:text-4xl sm:mt-10 text-center font-audiowide">
          PROJECTS
        </h1>
        <div className="flex gap-y-10 flex-col justify-between items-center sm:gap-x-10 :flex-row font-ubuntu sm:flex-row ">
          <div className="shadow-md sm:w-[70%] md:w-[50%] lg:w-[30%]">
            <img
              src="./Screenshot_31-12-2024_181815_vercel.com.jpeg"
              alt=""
              className=" rounded-t-2xl"
            />
            <a href="https://fox-hoobank.vercel.app/" target="blank">
              <div className="bg-zinc-800 flex justify-between items-center py-2 px-4 rounded-b-2xl">
                <div>
                  <small className="font-medium text-[10px]">
                    CLICK HERE TO VISIT
                  </small>
                  <p className="font-bold">HOOBANK</p>
                </div>
                <FaArrowRight />
              </div>
            </a>
          </div>
          <div className="shadow-md sm:w-[70%] md:w-[50%] lg:w-[30%]">
            <img
              src="./Screenshot_31-12-2024_181846_vercel.com.jpeg"
              alt=""
              className=" rounded-t-2xl"
            />
            <a href="https://fox-designo.vercel.app/" target="blank">
              <div className="bg-zinc-800 flex justify-between items-center py-2 px-4 rounded-b-2xl">
                <div>
                  <small className="font-medium text-[10px]">
                    CLICK HERE TO VISIT
                  </small>
                  <p className="font-bold">DESIGNO</p>
                </div>
                <FaArrowRight />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
