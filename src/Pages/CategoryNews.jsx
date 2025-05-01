import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [categoriesNews, setCategoriesNews] = useState([]);

    useEffect(() => {
        if (parseInt(id) === 0) {
            setCategoriesNews(data)
            return
        } else if (parseInt(id) === 1) {
            const filterNews = data.filter(news =>news.others.is_today_pick === true )
            setCategoriesNews(filterNews)
            return
        } else {
            const filterNews = data.filter(news => news.category_id === parseInt(id))
            setCategoriesNews(filterNews);
        }
    }, [data, id])
    return (
        <div>
            <h1>Category News {categoriesNews.length} </h1>
            <div className="space-y-16">
                {
                    categoriesNews.map(news=><NewsCard key={news.id} news={news} ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;