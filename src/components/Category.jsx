import React from 'react'
import Wrapper from './Wrapper'
import { useMycontext } from '../context/NewsContext';

const Category = ({className}) => {

    const {news,fetchNews,setNews}=useMycontext()

    let categories=["technology","sports","science","health","general","entertainment","business"];

    let handleClick=async(category)=>{
      const data=await fetchNews(`/everything?q=${category}`)
      setNews(data.articles)
    }



  return (
    <div className={`${className} bg-base-100`}>
    <Wrapper>

    <div className={`scroll-hidden w-fit max-w-full m-auto flex  overflow-x-auto overflow-hidden px-4 space-x-2.5 `}>
        {categories.map( (category,index) => {
            return(
                <button onClick={()=>handleClick(category)} key={index} className="btn btn-active btn-primary hover:bg-blue-700 hover:scale-105 transition-all linear text-black ">{category}</button>
            )
        })}
      
    
    </div>

    </Wrapper>
    </div>
  )
}

export default Category
