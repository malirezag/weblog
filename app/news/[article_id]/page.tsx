import { getNews } from "@/app/_lib/data-services";

async function page({ params }: { params: { article_id: string } }) {
  const id = params["article_id"];
  const news = await getNews();
  const newData = news.find(
    (item: { article_id: string }) => item.article_id === id
  );
  const { title, description } = newData;

  return (
    <div>
      <p className="text-zinc-50">{description}</p>
    </div>
  );
}

export default page;
