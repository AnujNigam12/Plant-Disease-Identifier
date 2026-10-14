interface HeaderProps {
  heading: string
}

export default function Header({ heading }: HeaderProps) {
  return (
    <p className="flex gap-4 scroll-m-20 text-center text-xl md:text-2xl font-semibold tracking-tight transition-colors first:mt-0">
      <span className="w-2 bg-green-700"></span>{heading}
    </p>
  )
}
