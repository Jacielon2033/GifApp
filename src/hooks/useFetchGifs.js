import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = (category) => {

    const [images, setimages] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category);
        setimages(newImages);

    }

    useEffect(() => {
        getImages();
    }, [])


    return {
        images: images,
        isLoading: true
    }
}
