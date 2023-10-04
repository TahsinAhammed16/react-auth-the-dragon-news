/* eslint-disable react/prop-types */
import { BsBookmarks, BsShare, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ eachNews }) => {
  const { title, image_url, details, _id, author, total_view, rating } =
    eachNews;
  const { name, published_date, img } = author;
  const { number } = rating;

  return (
    <div className="mb-7 border-2 rounded-lg border-[#F3F3F3]">
      <div className="flex justify-between bg-[#F3F3F3] p-3 rounded-t-lg items-center">
        <div className="flex items-center gap-3">
          <img src={img} alt="avatar" className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm">{published_date}</p>
          </div>
        </div>
        <div className="flex gap-2 text-xl">
          <span>
            <BsBookmarks></BsBookmarks>
          </span>
          <span>
            <BsShare></BsShare>
          </span>
        </div>
      </div>

      <div className="px-5">
        <div>
          <h1 className="font-bold text-xl my-5">{title}</h1>
          <img src={image_url} alt="" className="mb-7" />

          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link
                to={`/eachNews/${_id}`}
                className="text-orange-400 font-semibold"
              >
                <span className="block mb-3 mt-1">Read More</span>
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}

          <hr />
        </div>

        <div className="flex justify-between items-center py-5">
          <div className="flex items-center gap-2">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <span className="font-medium">{number}</span>
          </div>
          <div className="flex gap-2 items-center font-medium">
            <BsEye className="text-xl"></BsEye>
            {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
