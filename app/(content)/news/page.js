import NewsList from "@/components/NewsList/NewsList";
import { NEWS } from "@/news";

const NewsPage = () => {
  return (
    <>
      <h1>News page</h1>
      <NewsList news={NEWS} />
    </>
  );
};

export default NewsPage;
