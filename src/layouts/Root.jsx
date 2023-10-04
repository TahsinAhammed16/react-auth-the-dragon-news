import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container mx-auto font-poppins text-[#403F3F]">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
