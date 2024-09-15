import Image from 'next/image';

const Photos = () => {
  const images = [
    '/assets/images/3.jpg',
    '/assets/images/ch4.jpg',
    '/assets/images/3.jpg',
    '/assets/images/3.jpg',
    '/assets/images/b2.jpg',
    '/assets/images/7777.jpg',
    '/assets/images/b1.jpg',
    '/assets/images/9999.jpg',
    '/assets/images/3.jpg',
    '/assets/images/3.jpg',
    '/assets/images/ch2.jpg',
    '/assets/images/777.jpg'
  ];

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {images.map((src, index) => (
          <div key={index}>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={src}
              alt={`Gallery image ${index + 1}`}
              layout="responsive"
              width={300} // Reduced width for smaller images
              height={300} // Adjusted height to maintain aspect ratio
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
