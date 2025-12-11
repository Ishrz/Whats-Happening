import { useEffect } from 'react'
import Wrapper from '../components/Wrapper'
import { useMycontext } from '../context/NewsContext'
import Loader from '../components/Loader'
useMycontext
const News = ({className}) => {

  const {fetchNews, news,setNews,loader}=useMycontext()

  //starting fetch on initail render
  useEffect( ()=>{
    
    ;(async()=>{
      const data=await fetchNews()
      setNews(data.articles)
    })()
    
    
  },
  [])

  if(loader) return <Loader className=" w-fit h-90 m-auto p-25 "/>

  return (
    <Wrapper>

    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  ${className}`}>
    {news.map( (newsDetails,index)=> {
      if(!newsDetails.urlToImage) return null;
      return(
        <NewsCard key={index} detail={newsDetails} />
      )
    })}

    </div>

    </Wrapper>
  )
}


const NewsCard=({detail})=>{
    return(
        <div className="card bg-base-200  shadow-sm m-2">
  <figure>
    <img
      className='w-full aspect-video object-contain'
      src={detail?.urlToImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-2">{detail?.title}</h2>
    <p className='line-clamp-3 text-neutral-400'>{detail?.description}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>window.open(detail.url)} className="btn badge-outline mt-4 hover:scale-105 active:scale-105 hover:bg-neutral-800 active:bg-neutral-800">Read More</button>
    </div>
  </div>
</div>
    )
}

export default News
