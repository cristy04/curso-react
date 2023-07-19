import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {
  // const [counter, setCounter] = useState(10);
  // const gifs = [1, 2, 3, 4, 5]

  const { images, isLoading } = useFetchGifs(category);
  console.log({ images, isLoading });

  return (
    <>
      <h3>{category}</h3> 
      {
        // isLoading
        // ? ( <h2>Cargando...</h2>)
        // :null
        isLoading && ( <h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              // title={image.title}
              // url={image.url}
              {...image}
            />
          ))
        }
      </div>

      {/* <h5>Counter</h5>
        <button onClick={()=>setCounter(counter+1)}>+1</button> */}
      {/* {
            gifs.map(gif=>(
                <p>{gif}</p>
            ))
        } */}
    </>
  )
}
