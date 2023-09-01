import { useEffect, useState } from "react";

const useSrollToBottom = () => {

    const [page, setPage] = useState(1);

    useEffect(() => {
        console.log("useScrollToBottom initialized");
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight
            ) {
                console.log("You're at the bottom of the page!");
                setPage(prevPage => {
                    const newPage = prevPage + 1;
                    console.log('scrolltobottom', newPage);
                    return newPage;
                });
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return page;
}

export default useSrollToBottom;