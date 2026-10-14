import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import farmBg from "@/assets/farmBg.jpg";

export default function Introduction() {
  return (
    <section className="w-full relative py-xl-4 py-xxl-4 md:py-0 h-screen px-4 md:px-16 lg:px-44">
      <div className="flex flex-col gap-6 justify-center items-center h-full">
        <Image
          src={farmBg}
          alt="bg"
          className="w-full h-full absolute -z-10 top-0 left-0 object-cover"
        />
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-extrabold text-white leading-snug">
          Revolutionize your farm with <br />
          <span className="text-green-400">intelligent insights.</span>
        </h1>
        <p className="text-center text-white font-semibold md:font-bold text-lg md:text-xl mt-6">
          Identify plant diseases & monitor crop health - all in one place.
        </p>
        <div className="flex flex-col gap-4">
          <Button className="p-4 " asChild>
            <Link href="/detect-disease" className="flex gap-3">
              Test Your Plant{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M20.998 3V5C20.998 8.86599 17.864 12 13.998 12H12.998V13H17.998V20C17.998 21.1046 17.1026 22 15.998 22H7.99805C6.89348 22 5.99805 21.1046 5.99805 20V13H10.998V10C10.998 6.13401 14.1321 3 17.998 3H20.998ZM5.49805 2C8.02667 2 10.263 3.25136 11.6216 5.1686C10.6026 6.51084 9.99805 8.18482 9.99805 10V11H9.49805C5.35591 11 1.99805 7.64214 1.99805 3.5V2H5.49805Z"></path>
              </svg>
            </Link>
          </Button>
          <Button className="p-4 " asChild>
            <Link href="/sensor" className="flex gap-3">
              Monitor your crop{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M20.998 3V5C20.998 8.86599 17.864 12 13.998 12H12.998V13H17.998V20C17.998 21.1046 17.1026 22 15.998 22H7.99805C6.89348 22 5.99805 21.1046 5.99805 20V13H10.998V10C10.998 6.13401 14.1321 3 17.998 3H20.998ZM5.49805 2C8.02667 2 10.263 3.25136 11.6216 5.1686C10.6026 6.51084 9.99805 8.18482 9.99805 10V11H9.49805C5.35591 11 1.99805 7.64214 1.99805 3.5V2H5.49805Z"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="black"
        className="mx-auto animate-bounce"
      >
        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
      </svg>
    </section>
  );
}
