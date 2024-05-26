import { Blog } from "../hooks";
import { Appbar } from "./Appbar";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-12">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl">
          <div className="col-span-8 pr-4">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="pt-2 text-slate-500">
              Published on 8th February 2024
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            Author
            <div className="text-xl font-bold pt-2">
              {blog.author.name || "Anonymous"}
            </div>
            <div className="pt-3 text-slate-400">
              Random catchprahse about the author
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
