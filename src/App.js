import "./App.css";

function App() {
  return (
    <main>
      <div className="container w-[375px] mx-auto font-poppins">
        <h1 className=" pt-20 font-[200] text-3xl text-GrayishBlue leading-10  ">
          Reliable,efficient delivery{" "}
          <span className=" font-[600] text-VeryDarkBlue   ">
            {" "}
            Powered by technology
          </span>{" "}
        </h1>
        <p className=" text-[18px] mt-4 text-GrayishBlue ">
          {" "}
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
        {/* the grid container */}
        <div className="grid"></div>
        {/*  */}
      </div>
    </main>
  );
}

export default App;
