import React, { useEffect, useRef } from 'react'

export default function QualiItem({ quality }) {
    const qualiRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                qualiRef.current.classList.add("active-li")
            }
        })
        observer.observe(qualiRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <li className="add-li" ref={qualiRef}>{quality}</li>
    )
}
