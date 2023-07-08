import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            Sky Movie™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com/shihabrafio" className="mr-4 hover:underline md:mr-6 ">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/shihab-uddin-khan-45620a16a/" className="mr-4 hover:underline md:mr-6">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://wellfound.com/u/a-i-m-shihab-uddin-khan" className="mr-4 hover:underline md:mr-6">
              Wellfound
            </a>
          </li>
          <li>
            <a href="aimshihabuddinkhan@gmail.com" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
