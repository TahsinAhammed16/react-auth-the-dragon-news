import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/navbar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <p className="font-poppins">this is home</p>
        </div>
    );
};

export default Home;