export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div>
        <a href="/">BlogSphere</a>
      </div>
      <div>
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
