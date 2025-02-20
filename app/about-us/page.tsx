import Image from "next/image"

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="max-w-4xl mx-auto">
        <Image src="https://th.bing.com/th/id/R.4bfe363e78762605827adc8df9c4ba27?rik=33WP1oEVbzLz6Q&riu=http%3a%2f%2fwww.xactsolutions.ca%2fwp-content%2fuploads%2f2015%2f11%2fAbout-Us-banner.png&ehk=UAqCdoBPFYMbV59tkc%2bkNJUR2%2fAOK%2bHgQqe1UWEa85o%3d&risl=&pid=ImgRaw&r=0" alt="About Us Hero" width={1200} height={600} className="rounded-lg mb-8" />
        <p className="text-xl mb-6">
          Better.com is revolutionizing the home financing industry with our digital-first approach. We're committed to
          making homeownership more accessible and affordable for everyone.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          Our mission is to change the way people buy and refinance their home by making it faster, simpler, and more
          affordable. We leverage technology to streamline the mortgage process, eliminate fees, and pass the savings on
          to you.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p className="text-lg mb-6">
          We're a team of experts from the worlds of technology, real estate, and finance. Together, we're building a
          company that will transform the future of homeownership.
        </p>
      </div>
    </main>
  )
}

