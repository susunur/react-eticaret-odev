import { Link } from "react-router-dom";
import { FaBasketballBall } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#1e3a8a] text-white py-4 px-8 flex justify-between items-center shadow-md">
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
        <FaBasketballBall className="text-3xl" />
        <span>B&B</span>
      </Link>
      <div className="flex gap-6 font-medium">
        <Link to="/" className="hover:text-gray-300 transition-colors">
          Anasayfa
        </Link>
        <Link to="/cart" className="hover:text-gray-300 transition-colors">
          Sepetim
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
