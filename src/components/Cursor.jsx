import { useEffect } from "react";

function Cursor() {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        if (!cursor) return;

        const editCursor = e => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        };

        window.addEventListener("mousemove", editCursor);
        return () => window.removeEventListener("mousemove", editCursor);
    }, []);

    return <div className="cursor"></div>;
}

export default Cursor;
