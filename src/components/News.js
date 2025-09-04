import { useEffect, useState } from "react"
import { Badge } from "react-bootstrap"
import NewsList from "./NewsList";

const News = ({categories}) => {
    const[articles, setArticles] = useState([]);
    useEffect(()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categories}&apiKey=${process.env.REACT_APP_API_KEY}`;

        fetch(url) //JS to request url
        .then(response => response.json()) //To convert the data from url to json format
        .then(data => setArticles(data.articles)) 
        .then(err => console.error("Error in Fetching:", err))
    }, [categories])
  return (
    <div>
      <h3 className="text-center mt-3">Latest 
        <Badge bg="success">News</Badge>
      </h3>
      {/* Map function to pass all my data in an array */}
      {articles.map(
        (news,index)=> {
        return <NewsList key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
        />
      }
      )}
    </div>
  )
}

export default News
