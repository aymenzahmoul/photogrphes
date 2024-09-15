
import '../../styles/page1.css';

const About = () => {


  return (
    <div className='parent flex items-center justify-center h-screen bg-gradient-to-r'>
      <div className='bg-white bg-opacity-70 p-8 rounded-lg shadow-xl max-w-[900px] w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h1 className='text-4xl font-extrabold text-center mb-6 text-gray-800'>
            Let's Work Together
          </h1>
          <form className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <input
                className='border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow'
                type="text"
                placeholder='Name'
              />
              <input
                className='border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow'
                type="email"
                placeholder='Email'
              />
            </div>
            <input
              className='border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow'
              type='text'
              placeholder='Subject'
            />
            <textarea
              className='border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow'
              cols="30"
              rows="10"
              placeholder='Message'
            ></textarea>
            <button
              className='bg-indigo-600 text-white font-bold p-3 w-full rounded-lg hover:bg-indigo-700 transition-colors shadow-lg'
            >
              Submit
            </button>
          </form>
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='text-2xl font-bold mb-4 text-gray-800'>Contact Us</h2>
          <p className='text-gray-700 mb-2'>
            <strong>Phone:</strong> +216 23 351 739
          </p>
          <p className='text-gray-700 mb-2'>
            <strong>Email:</strong> khaoula.isims@gmail.com
          </p>
          <p className='text-gray-700 mb-2'>
          <p><strong>Address:</strong> Djerba Houmet Souk, <a href="https://www.google.com/maps/place/%D8%AD%D9%88%D9%85%D8%A9+%D8%A7%D9%84%D8%B3%D9%88%D9%82%E2%80%AD/@33.8729653,10.8520494,14z/data=!3m1!4b1!4m6!3m5!1s0x13aaa4e858b552ef:0xb3ee7cc8fa3692d7!8m2!3d33.8759693!4d10.8572832!16zL20vMGJubjRw?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D">View on Map</a></p>
          </p>
          <p className='text-gray-700'>
            <strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 5:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
