'use client'
import {useRouter} from 'next/navigation';

// export const metadata = {
//   title: 'Acerca de nosotros'
// };

const About = () => {

  const router = useRouter()
  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id ullam molestias mollitia ipsam eligendi hic quae incidunt at quis velit quidem consequuntur necessitatibus repudiandae, animi corporis sequi modi voluptas!        
      </p>
      <button 
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => { 
          alert('Executing code!')
          router.push('/')
         }}>
        Click
      </button>
    </section>
  )
}

export default About