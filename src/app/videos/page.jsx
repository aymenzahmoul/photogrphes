import React from 'react';

const Videos = () => {
  const videoList = [
    { id: 1, src: "/assets/images/nathour.mp4" },
    { id: 2, src: "/assets/images/soleil.mp4" },
    { id: 3,   src: "/assets/images/fleures.mp4" },
   
   
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <h1 className="text-4xl font-extrabold mb-12 text-center">Photography Videos</h1>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl w-full">
          {videoList.slice(0, 3).map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <video controls className="w-full h-[300px] object-cover">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {videoList.slice(3).map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <video controls className="w-full h-[400px] object-cover">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
