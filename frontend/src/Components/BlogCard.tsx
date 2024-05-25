interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="border-b border-slate-400 p-3 pb-4 w-screen max-w-screen-md cursor-pointer">
      <div className="flex">
        <div className="flex justify-center flex-col">
          <Avatar name={"hrishikesh"} />
        </div>

        <div className="pl-2 font-light">{authorName}</div>
        <div className="font-thin pl-2 text-slate-400"> {publishedDate} </div>
      </div>
      <div className="text-xl font-semibold pt-2">{title}</div>
      <div className="text-md font-thin pt-2">
        {content.slice(0, 400) + "..."}
      </div>
      <div className="text-sm text-slate-500 font-thin pt-4">{`${Math.ceil(
        content.length / 100
      )} minute(s) read`}</div>
    </div>
  );
};

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
