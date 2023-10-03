import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/navbar";
import LeftSide from "../shared/leftSide/LeftSide";
import RightSide from "../shared/leftSide/LeftSide";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSide></LeftSide>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-4xl">News coming soon...</h2>
        </div>
        <div className="border">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
