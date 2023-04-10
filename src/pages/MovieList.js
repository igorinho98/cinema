import { useEffect } from "react"
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({apiPath,title}) => {

  
  const { data: movies } = useFetch(apiPath)

  useEffect(() => {
    document.title = `${title}`
  })
 
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          
        {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} ></Card>
          })}

        </div>
      </section>
    </main>
  )
}
