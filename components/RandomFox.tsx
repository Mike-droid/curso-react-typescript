import { useRef, useEffect,useState } from "react";

import Image from "next/image";

type Props = { image: string }

// Tipamos lo que regresa la función
export const RandomFox = ({ image }: Props): JSX.Element => {
  const node =  useRef<HTMLImageElement>(null)
  const [source, setSource] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=')

  useEffect(() => {
    // new observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // onIntersection -> console.log
        if (entry.isIntersecting) {
          setSource(image)
        }
      })
    })

    // observer node
    if (node.current) {
      observer.observe(node.current)
    }

    //deconect
    return () => {
      observer.disconnect()
    }
  }, [image])

  return <Image
    ref={node}
    src={source}
    alt="fox"
    width='320'
    height='320'
    className="rounded bg-gray-300"
  />
}
