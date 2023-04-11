import Image from "next/image";

// generate a random number between 1 and 123
const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tipamos lo que regresa la función
export const RandomFox = (): JSX.Element => {
  const image = `https://randomfox.ca/images/${randomInt(1,123)}.jpg`

  return <Image src={image} alt="fox" width='300' height='300' className="rounded" />
}
