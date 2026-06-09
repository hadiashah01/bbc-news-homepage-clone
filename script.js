let headline = document.querySelectorAll(".title");
let fetchNews= async () => {
  let data = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=d9b390844e791a0e5f31195889a6b00f",
  );
  let newsData = await data.json();
  console.log(newsData);
  for (let i = 0; i < headline.length; i++) {
    console.log(ntextContentewsData);
    headline[i]. = newsData.articles[i].title;
  }
};
fetchNews();

