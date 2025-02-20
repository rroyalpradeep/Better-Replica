import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">A better way to buy a home</h1>
          <p className="text-xl mb-8">
            Save thousands with a tech-driven real estate agent and the Better Price Guarantee.
          </p>
          <Link
            href="/start"
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why choose Better?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image src="https://icon-library.com/images/money-bag-icon-png/money-bag-icon-png-23.jpg" alt="Savings Icon" width={64} height={64} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Save thousands</h3>
              <p className="text-gray-600">Our tech-driven approach saves you money on your home purchase.</p>
            </div>
            <div className="text-center">
              <Image src="https://png.pngtree.com/png-clipart/20230817/original/pngtree-fast-icon-vector-design-templates-white-on-background-picture-image_7996242.png" alt="Speed Icon" width={74} height={69} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast and efficient</h3>
              <p className="text-gray-600">Close on your home faster with our streamlined process.</p>
            </div>
            <div className="text-center">
              <Image src="https://ivyoverseas.com/newimg/operator.png" alt="Support Icon" width={64} height={64} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert support</h3>
              <p className="text-gray-600">Get help from our team of experienced professionals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Mortgage</h3>
              <p className="text-gray-600 mb-4">
                Find the right mortgage for your new home with our easy online process.
              </p>
              <Link href="/mortgage" className="text-blue-600 hover:underline">
                Learn more
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Real Estate</h3>
              <p className="text-gray-600 mb-4">Work with our tech-driven agents to find and buy your perfect home.</p>
              <Link href="/real-estate" className="text-blue-600 hover:underline">
                Learn more
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Insurance</h3>
              <p className="text-gray-600 mb-4">Protect your investment with our tailored insurance options.</p>
              <Link href="/insurance" className="text-blue-600 hover:underline">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

