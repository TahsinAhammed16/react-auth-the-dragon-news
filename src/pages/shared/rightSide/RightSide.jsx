import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSide = () => {
  return (
    <div>
      <div className="space-y-3 mb-6">
        <h2 className="text-xl">Login With</h2>
        <button className="btn btn-outline w-full normal-case">
          <FaGoogle className="text-xl"></FaGoogle>
          <span>Login With Google</span>
        </button>
        <button className="btn btn-outline w-full normal-case">
          <FaGithub className="text-xl"></FaGithub>{" "}
          <span>Login With Github</span>
        </button>
      </div>
      <div className="mb-6">
        <h2 className="text-xl mb-4">Find Us on</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3 text-xl"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="p-4 flex text-lg items-center border-x" href="">
          <FaTwitter className="mr-2 text-xl"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-2 text-xl"></FaInstagram>
          <span>Facebook</span>
        </a>
      </div>

      {/* q zone */}
      <div className="p-4 space-y-3 mb-6 bg-[#F3F3F3]">
        <h2 className="text-xl">Q Zone</h2>
        <div className="flex flex-col items-center">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
