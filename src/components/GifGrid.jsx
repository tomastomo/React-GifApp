import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);
    // Al ponerle :images le cambiamos el nombre para utilizar images en lugar de data
    return (
        <>
            <h3>{category}</h3>
            
            <div className="card-grid">
                {loading && <p>Loading...</p>}
                {
                    images.map( img => (
                        <GifGridItem key={img.id} img={img}/>
                    ))
                }
            </div>
        </>
    )
}
