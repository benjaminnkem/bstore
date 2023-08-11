"use client";

const HeartReaction = () => {
  const handleHeartReaction = (e) => {
    e.preventDefault();

    console.log('i got clicked');
  };

  return (
    <i
      className="absolute text-lg font-bold duration-300 cursor-pointer bottom-2 right-2 md:text-3xl sm:text-2xl product-text ri-heart-2-line"
      onClick={(e) => handleHeartReaction(e)}
    ></i>
  );
};

export default HeartReaction;
