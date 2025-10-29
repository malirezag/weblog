import NewsCard from "../_components/NewsCard";
import TodayTopNews from "../_components/TodayTopNew";
import { getNews } from "../_lib/data-services";
export const revalidate = 0;

async function page() {
  const data = await getNews();
  const newsData = data.slice(1);
  const firstNew = data[0];

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col gap-4 border-b border-zinc-700 px-5 py-10 justify-center ">
        <h1 className="text-3xl text-zinc-100">
          Today&apos;s Headlines: Stay Informed
        </h1>
        <p className="text-sm text-zinc-500">
          Explore the latest news from around the world. We bring you
          up-to-the-minute updates on the most significant events, trends, and
          stories. Discover the world through our news coverage.
        </p>
      </div>
      <div className="flex justify-center py-15 border-b border-zinc-700 w-full">
        <TodayTopNews
          description={firstNew.description}
          language={firstNew.language}
          pubDate={firstNew.pubDate}
          article_id={firstNew.article_id}
          category={firstNew.category}
          image_url={firstNew.image_url}
          title={firstNew.title}
          key={firstNew.article_id}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-350 mx-auto gap-5 py-15 ">
        {newsData.map(
          (item: {
            category: string;
            image_url: string;
            title: string;
            article_id: string;
          }) => (
            <NewsCard
              article_id={item.article_id}
              category={item.category}
              image_url={item.image_url}
              title={item.title}
              key={item.article_id}
            />
          )
        )}
      </div>
    </div>
  );
}

export default page;
