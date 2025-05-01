import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from 'react-icons/fa';
import { format } from 'date-fns';

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="bg-white shadow-md rounded-xl p-4 space-y-4">
      {/* Author Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{format(new Date(author.published_date), 'yyyy-MM-dd')}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      <h2 className="text-xl font-bold leading-tight">{title}</h2>
   
      <img src={thumbnail_url} alt="News Thumbnail" className="w-full h-64 object-cover rounded-lg" />

      <p className="text-gray-600 text-sm">
        {details.slice(0, 250)}...
        <span className="text-orange-600 font-semibold cursor-pointer"> Read More</span>
      </p>

      <div className="flex justify-between items-center pt-2 border-t mt-2">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`${i < rating.number ? 'text-orange-500' : 'text-gray-300'}`} />
          ))}
          <span className="text-gray-800 font-semibold ml-1">{rating.number}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
