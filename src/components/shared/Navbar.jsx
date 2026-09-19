import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-linear-to-r from-yellow-200 to-orange-200 font-semibold text-gray-800 py-4">
        <div className="container  mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold">MovieHub</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="/movies" className="hover:text-gray-700">
                Movies
              </a>
            </li>
          </ul>
          <Link
            to="/movies"
            class=" text-gray-900 bg-yellow-300 py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Let's Explore
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
