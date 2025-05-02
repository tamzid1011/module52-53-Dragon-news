import { useLoaderData, useNavigate, useParams } from 'react-router';
import Header from './Header';
import RightAside from './HomeLayout/RightAside';
import { useEffect, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { format } from 'date-fns';


const NewsDetails = () => {
    const [news, setNews] = useState({});
    const data = useLoaderData()
    const { id } = useParams();

    const navigate = useNavigate()

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id === id);
        setNews(newsDetails);
    },[data,id])
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <div className="grid grid-cols-3 py-10 gap-5">
                <div className="col-span-2">

                <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-600">Dragon News</h2>
      <div className="rounded-xl shadow-md overflow-hidden bg-base-100 border border-base-300">
        <img
          src={news.image_url}
          alt="News"
          className="w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            {news.title}
          </h3>
          <div className="text-sm text-gray-500 mb-3">
            
            <p className='text-accent font-semibold mt-2 flex items-center'> <FaCalendarAlt className="mr-2" /> {format(new Date(),"EEEE , MMMM dd, yyyy")}</p>
          </div>
          <p className="text-sm text-gray-700 mb-4">
           {news.details}
          </p>
            <button onClick={()=>navigate(-1)} className="btn bg-pink-600 hover:bg-pink-700 text-white">
              ← All news in this category
            </button>
        </div>
      </div>
    </div>
              </div>
                <aside className='col-span-1'>
                    <RightAside></RightAside>
                </aside>
            </div>
        </div>
    );
};

export default NewsDetails;