import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="https://mms.businesswire.com/media/20201111005103/en/837790/23/BettercomHorzLogo500px_MintPurpleRGB.jpg" alt="Better.com Logo" width={120} height={32} />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/mortgage" className="text-gray-600 hover:text-gray-900">
            Mortgage
          </Link>
          <Link href="/real-estate" className="text-gray-600 hover:text-gray-900">
            Real Estate
          </Link>
          <Link href="/insurance" className="text-gray-600 hover:text-gray-900">
            Insurance
          </Link>
          <Link href="/about-us" className="text-gray-600 hover:text-gray-900">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-blue-600 hover:text-blue-800">
            Log in
          </Link>
          <Link href="/start" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

