import { Appbar } from "../Components/Appbar";
import { BlogCard } from "../Components/BlogCard";
import { useBlogs } from "../hooks";
export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>LOADING...</div>;
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              id={blog.id}
              content={blog.content}
              publishedDate={"24 May 2024"}
            ></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};
