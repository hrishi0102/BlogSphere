import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between items-center px-10 py-4">
      <Link to={"/blogs"} className="flex items-center cursor-pointer">
        BlogSphere
      </Link>
      <div className="flex items-center">
        <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-4"
          >
            Publish
          </button>
        </Link>
        <Avatar />
      </div>
    </div>
  );
};

function Avatar() {
  return (
    <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <svg
        className="absolute w-7 h-7 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
