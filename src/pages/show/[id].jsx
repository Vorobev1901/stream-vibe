import ShowBanner from "@/components/ShowBanner/index.js";
import MovieDetails from "@/components/MovieDetails/index.js";
import Seasons from "@/components/Seasons/index.js";

export const metadata = {
    title: 'Show - Stranger Things'
}

export default function () {
    return (
        <>
            <ShowBanner />
            <MovieDetails
                seasons={<Seasons />}
            />
        </>
    )
}
