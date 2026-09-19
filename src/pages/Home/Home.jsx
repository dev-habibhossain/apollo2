import { Link } from "react-router";

const Home = () => {
  return (
    <div class="relative bg-linear-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="odysseus.jpg"
          alt="Background Image"
          class="object-cover object-center w-full h-full"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 class="text-5xl font-bold leading-tight mb-4">
          Welcome to Our Awesome site.
        </h1>
        <p class="text-lg text-gray-300 mb-8">
          Discover 50,00,000+ movies, TV shows, and more.
        </p>
        <Link
          to="/movies"
          class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
        Let's Explore
        </Link>
      </div>
    </div>
  );
};

export default Home;
