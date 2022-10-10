import { useEffect, useState } from "react"
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

import ClipLoader from "react-spinners/ClipLoader";


export const GifGrid = ({ category }) => {

    
    const {images, isLoading} = useFetchGifs( category )

    return (
        <>
            
            <h3>{category}</h3>
            { isLoading && (<ClipLoader size={50} />) }
            
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    )
}
