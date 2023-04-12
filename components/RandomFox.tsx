import { useRef } from "react";

import Image from "next/image";

type Props = { image: string }

// Tipamos lo que regresa la función
export const RandomFox = ({ image }: Props): JSX.Element => {
  const node =  useRef<HTMLImageElement>(null)

  return <Image
    ref={node}
    src={image}
    alt="fox"
    width='300'
    height='300'
    className="rounded"
  />
}
