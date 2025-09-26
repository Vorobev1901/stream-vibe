import MoviesBanner from '@/sections/MoviesBanner'
import Collection from "@/sections/Collection";

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
