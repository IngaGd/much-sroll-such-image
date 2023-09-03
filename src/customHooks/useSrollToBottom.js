import { useEffect, useState } from "react";

const useSrollToBottom = () => {

    const [page, setPage] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight
            ) {
                setPage(prevPage => {
                    const newPage = prevPage + 1;
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