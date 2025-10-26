export async function getNews() {
  const URL =
    "https://newsdata.io/api/1/latest?apikey=pub_6f45bc8cba554b57967a7c6904c25d44&q=tech";

  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("coldnt fetch");
    const news = await response.json();
    console.log(news);

    return news.results;
  } catch (error) {
    console.log(error);
  }
}
