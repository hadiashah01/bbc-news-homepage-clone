let headline = document.querySelectorAll(".title");
let description = document.querySelectorAll(".description");
let img = document.querySelectorAll(".news-img");

let fetchNews = async () => {
  let data = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=d9b390844e791a0e5f31195889a6b00f",
  );
  let newsData = await data.json();
  console.log(newsData);
  for (let i = 0; i < headline.length; i++) {
    headline[i].textContent = newsData.articles[i].title;
    description[i].textContent = newsData.articles[i].description;
    img[i].innerHTML = `<img
                src="${newsData.articles[i].image}"
                alt=""
              />`;
  }
};
fetchNews();

let button = document.querySelector(".languages__toggle");
let languages = document.querySelector(".languages");
function hideLanguages() {
  console.log("btn is clicked");
    languages.classList.toggle("hidden");
}

button.addEventListener("click", hideLanguages);
