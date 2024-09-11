import "./index.css"
import React, { useState } from "react";

function Card({ title, authors, image, description }) {
  const [liked, setLiked] = useState(false);
  const [isPopping, setIsPopping] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    setIsPopping(true);

    setTimeout(() => {
      setIsPopping(false);
    }, 300);
  };

  return (
    <div className="bg-lime-100 rounded-lg shadow-lg p-6 m-4 max-w-xs">
    <img src={image} alt={title} className="w-full h-70 object-cover mb-4" />
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-gray-600">{authors.join(", ")}</p>
    <p className="text-sm text-gray-500 mt-2">{description}</p> 
  
    <button onClick={handleLikeClick} className="mt-4">
        <span
        className={`text-2xl transition-transform duration-200 ${
          liked ? "text-5xl text-red-500" : "text-2xl text-gray-500"
        } ${isPopping ? "animate-pop" : ""}`}
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "red" : "none"}
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            stroke={liked ? "red" : "black"}
            className="w-8 h-8 heart-icon"
        >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
        </svg>
        </span>
    </button>
    </div>

  );
}

export default Card;
