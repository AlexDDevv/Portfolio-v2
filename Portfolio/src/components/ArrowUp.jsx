import React, { useRef, useEffect } from 'react'

export default function ArrowUp() {
    const arrowRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                arrowRef.current.classList.add("active-arrow")
            }
        })
        observer.observe(arrowRef.current)

        return () => observer.disconnect()
    }, [])

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

  return (
    <div className="arrow" ref={arrowRef} onClick={scrollTop}>
        <i className="fa-solid fa-circle-chevron-up"></i>
    </div>
  )
}
