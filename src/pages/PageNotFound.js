import { Link } from 'react-router-dom'
import pagenotfound from '../assets/pagenotfound.png'
import { Button } from '../components/button'

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops!</p>
          <div className='max-w-lg'>

          <img className="rounded"src={[pagenotfound]} alt="404 page not found" />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
