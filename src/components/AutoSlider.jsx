import Image from 'next/image'

const bestselling = [
    {src: '/assets/images/3.jpg'},
    {src: '/assets/images/7777.jpg'},
    {src: '/assets/images/jerziz.jpg '},
    {src: '/assets/images/666.jpg'},
    {src: '/assets/images/9999.jpg'},
    {src: '/assets/images/ch7.jpg'},
    {src: '/assets/images/b1.jpg'},
    
    
  ];
  

export const AutoSlider = () => {
  return (
   <>

<div className='slider h-72 mt-10 overflow-hidden flex'>
   <div className='flex gap-5 cursor-pointer animate-pulse'>

{
 bestselling.map(({ src, title, author}) =>(
    <div className='flex flex-col items-start flex-shrink-0'>
    <Image src={src} alt={'Nuclear War'} width={195} height={195}className='w-52 h-52 object-cover rounded-md' />
        
    </div>     
 )
)
}    
</div>
</div>   
    </>
  )
}
