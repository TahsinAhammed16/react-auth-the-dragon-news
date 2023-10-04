import { useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import RightSide from "../shared/rightSide/RightSide";

const NewsDesc = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="col-span-3">
          <h2 className="text-xl font-semibold">Dragon News</h2>
          <div className=" w-full h-96 border-2">
            <p className="text-red-500 text-2xl">coming soon...</p>
            <p>{id}</p>
          </div>
        </div>
        <div>
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default NewsDesc;
