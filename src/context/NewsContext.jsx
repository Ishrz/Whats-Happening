import { createContext,Provider, useContext, useState } from "react";
import api from '../config/axios'
//create contxt,provid contxt, use contxt

const NewsContext=createContext()


const NewsContextProvider=({children})=>{

    const [news,setNews]=useState([])
    const [loader,setLoader]=useState(false)

    
    const fetchNews = async (url="/everything?q=bitcoin") => {
        setLoader(true)
        try{
            const response = await api.get(
                `${url}&apiKey=${import.meta.env.VITE_API_KEY}`
            );
            setLoader(false)
            return response.data;

        }catch(error){
            console.log(error)
            setLoader(false)
        }
    };

    let value={
        news,
        setNews,
        fetchNews,
        setLoader,
        loader
    }

    return(
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

const useMycontext=()=>{
    return useContext(NewsContext)
}

export{
    NewsContextProvider,
    useMycontext
}