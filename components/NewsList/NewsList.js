import Link from "next/link";

const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((article) => (
        <li key={article.id}>
          <Link href={`/news/${article.slug}`}>
            <img src={`/images/news/${article.image}`} alt={article.title} />
            <span>{article.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
