import { NEWS } from "@/news";
import Image from "next/image";
import { notFound } from "next/navigation";

const NewsId = ({ params }) => {
  const NEWS_SLUG = params.slug;
  const NEWS_ITEM = NEWS.find((news) => news.slug === NEWS_SLUG);

  if (!NEWS_ITEM) {
    notFound();
  }
  return (
    <article>
      <header>
        <img src={`/images/news/${NEWS_ITEM.image}`} alt={NEWS_ITEM.title} />
        <h1>{NEWS_ITEM.title}</h1>
        <time dateTime={NEWS_ITEM.date}>{NEWS_ITEM.date}</time>
      </header>
      <p>{NEWS_ITEM.content}</p>
    </article>
  );
};

export default NewsId;
