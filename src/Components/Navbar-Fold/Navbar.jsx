import { IoSearch } from 'react-icons/io5';
import { FaRegCircleUser } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div>
      <nav className="my-12 flex justify-between items-center">
        <div id="logo" className="text-[#150B2B] font-bold text-3xl">
          <a href="#">Recipe Calories</a>
        </div>
        <div id="links">
          <ul className="font-medium text-base text-[#150b2bb3] flex gap-12">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
          </ul>
        </div>
        <div id="search-user" className="flex gap-4">
          <div
            id="search"
            className="bg-[#150b2b0d] w-64 py-3 flex items-center pl-6 gap-2"
          >
            <span className="text-[#150b2bb3]">
              <IoSearch />
            </span>
            <input
              type="search"
              placeholder="Search"
              className="bg-transparent outline-none placeholder-[#150b2bb3]"
            />
          </div>
          <div className="flex items-center w-12 h-12 text-2xl justify-center rounded-full bg-[#0BE58A] text-[#150B2B] cursor-pointer">
            <span>
              <FaRegCircleUser />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
