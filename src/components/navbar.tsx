import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
// import Logo from "@/assets/logo.png"
import logo from '@/assets/logo.svg'

export function Navbar() {
  return (
    <nav className="w-full flex justify-between fixed top-0 left-0 backdrop-blur-sm z-50 bg-white border-b-2 px-4 md:px-16 lg:px-44">
      <div className="flex w-full items-center justify-between py-4">
        <div>
          <Link href={'/'} className="flex gap-4 justify-center items-center scroll-m-20 text-xl font-semibold">
            <Image
              src={logo}
              alt={`${siteConfig.name} Logo`}
              width={80}
              className="w-6 md:w-8 logo rounded-full"
            />
            <span className="text-lg font-bold md:text-2xl">{siteConfig.name}</span>
          </Link>
        </div>
        <ul className="flex gap-20 ">
          {/* TODO: Add Effects */}
          {/* <li className="cursor-pointer hover:underline text-md-lg text-sm-sm">
            <Link href="/about">About</Link>
          </li> */}
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm">
            <Link href="/detect-disease">Disease Detection</Link>
          </li>
          <li className="cursor-pointer hover:underline text-md-lg text-sm-sm">
            <Link href="/sensor">Crop Monitoring</Link>
          </li>
          {/* <li className="cursor-pointer hover:underline text-md-lg text-sm-sm">
            <Link href="/models">3D Models</Link>
          </li> */}
        </ul>
      {/* <ThemeToggle /> */}
      </div>
    </nav>
  );
}
