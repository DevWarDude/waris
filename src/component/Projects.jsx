import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center my-[90px] ">
      <div className="w-[85%]">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-red-300 text-3xl to-orange-500 font-bold mb-7 text-center font-mono">
          PROJECTS
        </h1>
        <div className="flex gap-y-10 flex-col justify-between items-center md:gap-x-10 md:flex-row">
          <div className="shadow-md sm:w-[70%] md:w-[50%] lg:w-[30%]">
            <img
              src="src/assets/Screenshot 2024-12-03 215906.png"
              alt=""
              className=" rounded-t-2xl"
            />
            <a href="#" target="blank">
              <div className="bg-zinc-800 flex justify-between items-center py-2 px-4 rounded-b-2xl">
                <div>
                  <small className="font-medium text-[10px]">
                    CLICK HERE TO VISIT
                  </small>
                  <p className="font-bold">HTML TUTORIAL</p>
                </div>
                <FaArrowRight />
              </div>
            </a>
          </div>
          <div className="shadow-md sm:w-[70%] md:w-[50%] lg:w-[30%]">
            <img
              src="src/assets/Screenshot 2024-12-03 220010.png"
              alt=""
              className=" rounded-t-2xl"
            />
            <a href="#" target="blank">
              <div className="bg-zinc-800 flex justify-between items-center py-2 px-4 rounded-b-2xl">
                <div>
                  <small className="font-medium text-[10px]">
                    CLICK HERE TO VISIT
                  </small>
                  <p className="font-bold">HTML TUTORIAL</p>
                </div>
                <FaArrowRight />
              </div>
            </a>
          </div>
          <div className="shadow-md sm:w-[70%] md:w-[50%] lg:w-[30%]">
            <img
              src="src/assets/Screenshot 2024-12-03 215906.png"
              alt=""
              className=" rounded-t-2xl"
            />
            <a href="#" target="blank">
              <div className="bg-zinc-800 flex justify-between items-center py-2 px-4 rounded-b-2xl">
                <div>
                  <small className="font-medium text-[10px]">
                    CLICK HERE TO VISIT
                  </small>
                  <p className="font-bold">HTML TUTORIAL</p>
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
