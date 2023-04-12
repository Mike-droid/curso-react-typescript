import { MouseEventHandler, useState } from "react";

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

type ImageItems = { id: string, url: string }

import { RandomFox } from "@/components/RandomFox"

export default function Home() {
  const [images, setImages] = useState<ImageItems[]>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {

    event.preventDefault();
    const target = event.target;
    console.log(target);

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
            <RandomFox image={url} />
          </div>
        ))
      }
    </main>
  )
}
