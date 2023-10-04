import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/navbar";
import LeftSide from "../shared/leftSide/LeftSide";
import RightSide from "../shared/rightSide/RightSide";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSide></LeftSide>
        </div>

        <div className="md:col-span-2">
          {news.map((eachNews) => (
            <NewsCard key={eachNews._id} eachNews={eachNews}></NewsCard>
          ))}
        </div>

        <div>
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
