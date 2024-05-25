import { Appbar } from "../Components/Appbar";
import { BlogCard } from "../Components/BlogCard";

export const Blogs = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogCard
            authorName={"hrishi"}
            title={"AI adoption by companies will hinge on safety standards"}
            content={`The adoption of artificial intelligence (AI) by enterprises will hinge on safety standards, Deepak Sharma, CXO advisor and independent director, Suryoday Small Finance Bank, said at Mint Digital Innovation Summit on Friday.
        Speaking about the implementation of AI and generative AI services responsibly in the all-important banking and financial services industry, Sharma said the adoption of standards for AI will define benchmarks for the quality of datasets, transparent audits of these datasets, referencing of data and, most importantly, building an understanding of AI models for the right implementation.`}
            publishedDate={"24 May 2024"}
          ></BlogCard>
          <BlogCard
            authorName={"hrishi"}
            title={"AI adoption by companies will hinge on safety standards"}
            content={`The adoption of artificial intelligence (AI) by enterprises will hinge on safety standards, Deepak Sharma, CXO advisor and independent director, Suryoday Small Finance Bank, said at Mint Digital Innovation Summit on Friday.
        Speaking about the implementation of AI and generative AI services responsibly in the all-important banking and financial services industry, Sharma said the adoption of standards for AI will define benchmarks for the quality of datasets, transparent audits of these datasets, referencing of data and, most importantly, building an understanding of AI models for the right implementation.`}
            publishedDate={"24 May 2024"}
          ></BlogCard>
        </div>
      </div>
    </div>
  );
};
