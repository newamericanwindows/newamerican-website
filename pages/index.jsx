import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>New American Windows & Roofs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <Image src="/logo-placeholder.png" alt="Logo" width={180} height={50} />
        <div className="text-sm text-gray-700 space-x-4">
          <span>Licensed & Insured</span>
          <span>Google Reviews</span>
          <span>Financing Available</span>
          <span>10+ Years Experience</span>
        </div>
      </div>

      <div className="relative h-[500px] text-white">
        <Image
          src="/hero-placeholder.jpg"
          layout="fill"
          objectFit="cover"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl font-bold">Florida’s Trusted Experts in Roofing & Impact Protection</h1>
          <p className="mt-4 text-lg">10+ Years of Experience • Licensed & Insured • Financing Available</p>
          <div className="mt-6 space-x-4">
            <a href="#quote" className="bg-blue-800 px-6 py-3 rounded text-white font-semibold">Get a Free Quote</a>
            <a href="tel:7867750015" className="bg-white text-blue-800 px-6 py-3 rounded font-semibold">Call Now</a>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Roofing', image: 'icon-roof.png', text: 'Shingle, tile, and metal roofs with professional installation' },
            { title: 'Impact Windows', image: 'icon-window.png', text: 'Hurricane-resistant windows in a range of styles' },
            { title: 'Doors', image: 'icon-door.png', text: 'Strong and secure built doors with impact-resistant glass' },
          ].map(({ title, image, text }) => (
            <div key={title} className="bg-white p-6 rounded shadow text-center">
              <Image src={`/${image}`} alt={title} width={60} height={60} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Recent Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { image: 'project1.jpg', caption: 'Shingle Roof | Homestead, FL' },
            { image: 'project2.jpg', caption: 'Tile Roof | Miami, FL' },
            { image: 'project3.jpg', caption: 'Impact Windows | Fort Lauderdale, FL' },
          ].map(({ image, caption }) => (
            <div key={caption} className="bg-white rounded shadow overflow-hidden">
              <Image src={`/${image}`} alt={caption} width={400} height={250} layout="responsive" />
              <p className="p-4 text-sm text-center">{caption}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quote" className="py-16 px-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Request a Free Quote</h2>
        <form className="bg-white p-6 rounded shadow space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-3 rounded" />
          <input type="text" placeholder="Phone Number" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border p-3 rounded" />
          <textarea placeholder="Project Details" className="w-full border p-3 rounded h-32"></textarea>
          <button type="submit" className="w-full bg-blue-800 text-white font-semibold py-3 rounded">Submit</button>
        </form>
      </section>

      <footer className="bg-gray-200 py-6 text-center text-sm text-gray-700">
        © 2025 New American Windows & Roofs — All rights reserved.
      </footer>
    </>
  );
}
