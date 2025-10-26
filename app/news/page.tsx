import NewsCard from "../_components/NewsCard";
import { getNews } from "../_lib/data-services";
export const revalidate = 0;

async function page() {
  const newsData = await getNews();

  return (
    <div className="flex flex-col gap-5 py-15">
      {newsData.map((item: any) => (
        <NewsCard
          category={item.category}
          image_url={item.image_url}
          title={item.title}
          key={item.article_id}
        />
      ))}
    </div>
  );
}

export default page;
