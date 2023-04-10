import { useSearchParams } from 'react-router-dom'
import { useFetch } from "../hooks/useFetch"
import { Card } from "../components"
import { useTitle } from '../hooks/useTitle'

export const Search = ({apiPath}) => {
  
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get('q')

  const { data: movies } = useFetch(apiPath,queryTerm)
 //eslint-disabled-next-line
  const pageTitle = useTitle(`Search result for ${queryTerm}`)
 


  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No result found for : ${queryTerm}` : `Results for : "${queryTerm}"`}</p>
      </section>
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap">
        
      {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} ></Card>
        })}

      </div>
    </section>
  </main>
  )
}
