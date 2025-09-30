import MoviesBanner from '@/sections/MoviesBanner/index.js'
import Collection from "@/sections/Collection/index.js";

export const metadata = {
    title: 'Movies & Shows'
}

export default function () {
    return (
        <>
            <MoviesBanner />
            <Collection />
        </>
    )
}
