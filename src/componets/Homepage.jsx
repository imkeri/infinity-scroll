import axios from 'axios';
import React, { useEffect, useState } from 'react'

const pno = 1;

const Homepage = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(pno)
    const [backcolor,setBackColor] = useState("")
    
    const getdata = async () => {
        try {
            const res = await axios.get(`https://catfact.ninja/facts?page=${page}&limit=10`)
            setData(data.concat(res.data.data))
        } catch (error) {
            console.log("error::::", error)
        }
    }

    useEffect(() => {
        getdata()
        setBackColor(Math.random().toString(16).substr(-6));
    }, [page])

    const scrollToEnd = () => {
        setPage(page + 1)
    }

    window.onscroll = () => {
        console.log(window.innerHeight+document.documentElement.scrollTop)
        console.log(document.documentElement.offsetHeight)
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            scrollToEnd()
        }
    }

    return (
        <div className='container-fluid'>

            <div className='title d-flex justify-content-center'>
            <h1 className=''> Random Quotes </h1>
            </div>
            {
               
               data.length > 0 && data.map((val) => {
                return <>
                 <div className='main-div' style={{backgroundColor:`#${backcolor}`, color:`white`}}>
                   <div className='my-2 ' >
                   <p>{val.fact}</p>
                   </div>
                 </div>
                </>
            })
                        
            }
        </div>
    )
}

export default Homepage