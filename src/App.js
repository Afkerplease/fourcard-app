import "./App.css";
import loupe from "./images/icon-supervisor.svg";
import Builder from "./images/icon-team-builder.svg";
import karma from "./images/icon-karma.svg";
import calculator from "./images/icon-calculator.svg";

function App() {
  return (
    <main className="  h-[100vh]">
      <div className="container w-[375px] mx-auto font-poppins md:w-[1440px] ">
        <h1 className=" pt-20  font-[200] text-3xl text-GrayishBlue leading-10 md:text-center md:text-[3.5rem] md:leading-[4rem] ">
          Reliable,efficient delivery <br className="hidden md:block" />
          <span className=" font-[600] text-VeryDarkBlue   ">
            {" "}
            Powered by technology
          </span>{" "}
        </h1>
        <p className=" text-[18px] mt-4 text-GrayishBlue md:text-center md:text-[22px] md:w-[55%] mx-auto ">
          {" "}
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
        {/* the grid container */}
        <div className="grid mt-10 md:mt-0 gap-8 pb-10 md:h-[900px] md:grid-cols-3 md:grid-rows-3 md:place-content-center ">
          {/* supervisorcard */}
          <div className="bg-white md:px-10 md:pb-0 px-10 py-8 border-t-4 border-Cyan flex flex-col shadow-2xl rounded-[6px] overflow-hidden md:row-start-2 md:row-end-3  ">
            <h2 className=" text-[1.5rem] text-VeryDarkBlue font-[600] ">
              Supervisor
            </h2>
            <p className="text-[15px] mt-1 text-GrayishBlue ">
              Monitors activity to identify project roadblocks
            </p>
            <img src={loupe} className="w-[70px] mt-8  self-end  " alt="" />
          </div>
          {/* ENd supervisor card */}
          <div className=" grid gap-8 md:gap-20 md:h-[70%] md:col-start-2 md:row-span-full  md:mt-[35%] ">
            {/* Team Builder card */}
            <div className="bg-white px-10 py-8 border-t-4 border-Red flex flex-col shadow-2xl rounded-[6px] overflow-hidden ">
              <h2 className=" text-[1.5rem] text-VeryDarkBlue font-[600] ">
                Team Builder
              </h2>
              <p className="text-[15px] mt-1 text-GrayishBlue ">
                Scans our talent network to create the optimal team for your
                project
              </p>
              <img src={Builder} className="w-[70px] mt-8  self-end  " alt="" />
            </div>
            {/* ENd Team Builder  card */}
            {/* Karma card */}
            <div className="bg-white px-10 py-8 border-t-4 border-Orange flex flex-col shadow-2xl rounded-[6px] overflow-hidden ">
              <h2 className=" text-[1.5rem] text-VeryDarkBlue font-[600] ">
                Karma
              </h2>
              <p className="text-[15px] mt-1 text-GrayishBlue ">
                Regularly evaluates our talent to ensure quality
              </p>
              <img src={karma} className="w-[70px] mt-8  self-end  " alt="" />
            </div>
            {/* ENd Karma  card */}
          </div>
          {/* Calculator card */}
          <div className="bg-white px-10 py-8 border-t-4 border-Blue flex flex-col shadow-2xl rounded-[6px] md:col-start-3 overflow-hidden md:row-start-2 md:row-end-3 ">
            <h2 className=" text-[1.5rem] text-VeryDarkBlue font-[600] ">
              Calculator
            </h2>
            <p className="text-[15px] mt-1 text-GrayishBlue ">
              Uses data from past projects to provide better delivery estimates
            </p>
            <img
              src={calculator}
              className="w-[70px] mt-8  self-end  "
              alt=""
            />
          </div>
          {/* ENd Calculator  card */}
        </div>
        {/*  */}
      </div>
    </main>
  );
}

export default App;
