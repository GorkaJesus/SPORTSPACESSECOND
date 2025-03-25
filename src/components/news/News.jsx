import NewsItem from './../news-item/NewsItem';
import news from './../../services/news';
import './News.css';
import rssIcon from '/src/assets/img/rss.jpg'; 

function News() {
    return (
        <div className="news-container">
            <a href="/news.xml" className="rss-link">
                <img src={rssIcon} alt="RSS Feed" className="rss-icon rss-icon-small" />
            </a>

            <div className="news-list">
                {news.map((item) => (
                    <NewsItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        className="news-item"
                    />
                ))}
            </div>
        </div>
    );
}

export default News;
