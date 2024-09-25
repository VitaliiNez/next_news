import NewsList from "@/components/NewsList/NewsList";
import { getLatestNews } from "@/lib/helpers";

const LatestNewsPage = () => {
  const LATEST_NEWS = getLatestNews();

  return (
    <>
      <h1>Latest page</h1>
      <NewsList news={LATEST_NEWS} />
    </>
  );
};

export default LatestNewsPage;
