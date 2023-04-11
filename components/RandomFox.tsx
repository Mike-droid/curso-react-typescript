import Image from "next/image";

type Props = { image: string }

// Tipamos lo que regresa la función
export const RandomFox = ({ image }: Props): JSX.Element => {
  return <Image src={image} alt="fox" width='300' height='300' className="rounded" />
}
