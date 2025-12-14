import { createContext,Provider, useContext, useState } from "react";
import api from '../config/axios'
//create contxt,provid contxt, use contxt

const NewsContext=createContext()


const NewsContextProvider=({children})=>{

    const [news,setNews]=useState([])
    const [loader,setLoader]=useState(false)

    
    const fetchNews = async (url="/top-headlines?category=general") => {
        setLoader(true)
        try{
            const response = await api.get(
                `${url}&apikey=${import.meta.env.VITE_API_KEY}`
            );

            console.log("NETLIFY GNEWS RESPONSE DATA:", response.data);

            setLoader(false)
            // console.log(response.data)
            return response.data;

        }catch(error){
            console.log(`"Error at newsContext when fetching data", ${error.message}`)
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