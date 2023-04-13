import { LazyImage } from "@/components/LazyImage"
import { MouseEventHandler, useState } from "react";
type ImageItems = { id: string, url: string }

// generate a random number between 1 and 123
const randomInt = (): number => {
  return Math.floor(Math.random() * 123) + 1;
}

// generate random id as string with TypeScript
export const idGenerator = (length: number) => {
  const allowedCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let response: string = ""

  for (let i = 0; i < length; i++) {
    const {length: charLength} = allowedCharacters
    response += allowedCharacters.charAt(Math.floor(Math.random() * charLength))
  }

  return response
}



export default function Home() {
  const [images, setImages] = useState<ImageItems[]>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: ImageItems = {
      id: idGenerator(5),
      url: `https://randomfox.ca/images/${randomInt()}.jpg`,
    }

    setImages([
      ...images,
      newImageItem
    ])
  }

  return (
    <main>
      <h1 className="text-3xl underline">Hello world</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {
        images.map(({id, url}) => (
          <div className="p-4" key={id}>
            <LazyImage
              src={url}
              title="Random fox"
              className="rounded bg-gray-300"
              width={320}
            />
          </div>
        ))
      }
    </main>
  )
}
