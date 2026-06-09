
let  variable= async () => {
    let data = await fetch("https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=27e2b5eb77871edbb524e632963bb0ca")
    let newsData = await data.json()
    console.log(newsData )
}
variable();
