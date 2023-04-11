// generate a random number between 1 and 123
const randomInt = (): number => {
  return Math.floor(Math.random() * 123) + 1;
}


import { RandomFox } from "@/components/RandomFox"

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl underline">Hello world</h1>
      <RandomFox image={`https://randomfox.ca/images/${randomInt()}.jpg`}></RandomFox>
    </main>
  )
}
