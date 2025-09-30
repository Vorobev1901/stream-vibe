import MovieBanner from "@/components/MovieBanner/index.js";
import MovieDetails from "@/components/MovieDetails/index.js";

export const metadata = {
    title: 'Movie - El Camino'
}

export default function () {
    return (
        <>
            <MovieBanner />
            <MovieDetails />
        </>
    )
}
