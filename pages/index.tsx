import { useState } from "react";

// generate a random number between 1 and 123
const randomInt = (): number => {
  return Math.floor(Math.random() * 123) + 1;
}

import { RandomFox } from "@/components/RandomFox"

export default function Home() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${randomInt()}.jpg`,
    `https://randomfox.ca/images/${randomInt()}.jpg`,
    `https://randomfox.ca/images/${randomInt()}.jpg`,
    `https://randomfox.ca/images/${randomInt()}.jpg`,
  ])

  return (
    <main>
      <h1 className="text-3xl underline">Hello world</h1>
      {
        images.map((image, index) => (
          <div className="p-4" key={index}>
            <RandomFox image={image} />
          </div>
        ))
      }
    </main>
  )
}
