import { ImageBox } from "@/components/image-box"
import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 px-4 md:px-16 lg:px-44 overflow-x-hidden ">
      <div className="text-center mb-auto mt-8">
        <h1 className="scroll-m-20 mb-4 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          Diagnose Plant Problems Quickly and Easily
        </h1>
        <h2 className="text-green-700 scroll-m-20 border-b pb-2 text-xl md:text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        Upload a Leaf Image - Get Accurate Disease Identification & Treatment Solutions
        </h2>
      </div>
      <div className="mb-auto">
        <ImageBox />
      </div>
    </main>
  )
}
