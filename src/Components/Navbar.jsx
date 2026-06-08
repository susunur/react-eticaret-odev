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

// export const Navbar = () => {
//   return (
//     <nav className='w-full bg-[#1e3a8a] text-white px-8 py-3 flex items-center justify-between shadow-md'>
//         <div className="flex items-center gap-3 cursor-pointer">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="32"
//           height="32"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <circle cx="12" cy="12" r="10"></circle>
//           <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
//           <path d="M2 12h20"></path>
//         </svg>
//         <span className="text-2xl font-bold tracking-wide">D&D</span>
//         </div>
//         <div className="flex items-center gap-8 text-base font-medium">
//       </div>

//       <nav>
//         <link to="/">Ana Sayfa</link>
//         <link to="/sepetim">Sepetim</link>
//       </nav>

//     </nav>
//   )
// }
