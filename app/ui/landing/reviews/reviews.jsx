import { MdStar, MdStarOutline } from 'react-icons/md';

const Reviews = () => {
  const globalRatings = 1745;
  const ratingStats = [
    { stars: 5, percentage: 100 },
    { stars: 4, percentage: 70 },
    { stars: 3, percentage: 50 },
    { stars: 2, percentage: 20 },
    { stars: 1, percentage: 10 },
  ];

  const reviews = [
    {
      name: 'Maria Samantha',
      title: 'DevOps Engineer',
      review:
        'After taking the CI/CD course, I was able to automate our entire deployment pipeline using Jenkins and Docker. The hands-on labs were fantastic!',
      rating: 5,
      imgSrc: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg',
    },
    {
      name: 'John Doe',
      title: 'Cloud Architect',
      review:
        'The AWS course deepened my understanding of cloud infrastructure. Now I can easily deploy scalable solutions with confidence.',
      rating: 4,
      imgSrc: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg',
    },
    {
      name: 'Alice Johnson',
      title: 'SRE Specialist',
      review:
        'The Kubernetes workshop was a game-changer! I can now manage clusters effectively and deploy microservices with ease.',
      rating: 4,
      imgSrc: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(3).jpg',
    },
  ];

  return (
    <div className="p-5 bg-white">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold">What Our Learners Say</h3>

        {/* Global Ratings */}
        <div className="mb-6">
          <h4 className="text-2xl font-semibold">3 out of 5</h4>
          <p className="text-sm text-neutral-600">{globalRatings} global ratings</p>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                <MdStar className="text-yellow-500" />
              </span>
            ))}
          </div>
        </div>

{/* Rating breakdown */}
<div className="mb-6 text-left">
  {ratingStats.map((stat) => (
    <div key={stat.stars} className="flex items-center mb-2 pb-2 justify-center"> {/* Added justify-center */}
      <span className="mr-2">{stat.stars} star</span>
      <div className="relative w-1/2 "> {/* Keeping width as 1/2 */}
        <div className="absolute bg-yellow-500 h-full" style={{ width: `${stat.percentage}%` }} />
        <div className="bg-gray-300 h-1" />
      </div>
      <span className="ml-2">{stat.percentage}%</span>
    </div>
  ))}
</div>


        {/* Reviews */}
        <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="mb-12">
              <div className="mb-6 flex justify-center">
                <img
                  src={review.imgSrc}
                  className="w-32 rounded-full shadow-lg"
                  alt={review.name}
                />
              </div>
              <h5 className="mb-1 text-xl font-semibold">{review.name}</h5>
              <h6 className="mb-2 text-gray-500">{review.title}</h6>
              <p className="mb-4 text-neutral-600">{`"${review.review}"`}</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? (
                      <MdStar className="text-yellow-500" />
                    ) : (
                      <MdStarOutline className="text-yellow-500" />
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Reviews;
