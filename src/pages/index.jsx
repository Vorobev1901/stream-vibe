import Hero from "@/components/Hero";
import Categories from "@/components/Categories";

export const metadata = {
    title: 'Home',
    isHeaderFixed: true,
}

export default function () {
    return (
        <>
            <Hero />
            <Categories />
        </>
    )
}
