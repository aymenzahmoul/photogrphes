import { AutoSlider } from './AutoSlider';
import Link from 'next/link'; // Import Link from next/link

const title = (
  <>
    Each photo is a wordless poem,


    <br/>
    a unique work of art captured <br/> in a fraction of a second
  </>
);

const description = "";

const bestselling = [
  { src: '/assets/images/3.jpg' },
  { src: '/assets/images/99.jpg' },
  { src: '/assets/images/99.jpg' },
  { src: '/assets/images/jerziz.jpg' },
  { src: '/assets/images/99.jpg' },
  { src: '/assets/images/99.jpg' },
  { src: '/assets/images/ch7.jpg' },
  
];

export const Filter = () => {
  return (
    <section className='bg-center bg-no-repeat text-gray-900 dark:bg-gray-900 dark:text-white'>
      <div className="px-4 mx-auto text-center py-24 lg:pt-32">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">{description}</p>

        <div className="flex justify-center">
          <ul className="flex flex-col sm:flex-row rounded-xl sm:rounded-full justify-center align-middle gap-3 text-sm bg-gray-200 p-2">
            <li className="px-4 py-2 rounded-full cursor-pointer select-none bg-gray-900 text-white">
              <Link href="/videos">Videos</Link> 
            </li>
            <li className="px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white">
              <Link href="/photos">Images</Link> 
            </li>
          </ul>
        </div>

        <AutoSlider image={bestselling} />
      </div>
    </section>
  );
};
