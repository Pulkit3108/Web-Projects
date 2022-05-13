import React,{useEffect,useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    const response = await fetch(url);
    props.setProgress(40);
    const data = await response.json();
    props.setProgress(70);
    setNews(data.articles);
    settotalResults(data.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} News`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    const response = await fetch(url);
    const data = await response.json();
    setNews(news.concat(data.articles));
    settotalResults(data.totalResults);
  };
    return (
      <>
        <h1 className="text-center" style={{ margin: "90px 35px 0px 0px"}}>
          News Hunter - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={news.length}
          next={fetchMoreData}
          hasMore={news.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {news.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      key={element.id}
                      title={!element.title ? "No Title" : element.title}
                      description={
                        !element.description
                          ? "No Description"
                          : element.description
                      }
                      url={
                        !element.url
                          ? `https://www.google.com/search?q=${element.title}`
                          : element.url
                      }
                      urlToImage={
                        !element.urlToImage
                          ? "https://via.placeholder.com/150"
                          : element.urlToImage
                      }
                      publishedAt={
                        !element.publishedAt
                          ? "Unknown"
                          : new Date(element.publishedAt).toGMTString()
                      }
                      author={!element.author ? "Unknown" : element.author}
                      source={!element.source ? "Unknown" : element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
}
export default News;
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};