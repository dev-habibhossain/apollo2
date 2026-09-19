
const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-orange-200 to-yellow-200 font-semibold text-gray-800 py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;