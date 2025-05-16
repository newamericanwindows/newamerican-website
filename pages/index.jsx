import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Head>
        <title>New American Windows & Roofs</title>
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-red-600">New American Windows & Roofs</h1>
          <div className="space-x-4 text-sm">
            <span>Licensed & Insured</span>
            <span>10+ Years Experience</span>
            <span>Financing Available</span>
          </div>
        </div>
      </header>

      <section className="bg-blue-800 text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Florida’s Trusted Experts in Roofing & Impact Protection</h2>
        <p className="text-lg mb-6">Serving Miami, Fort Lauderdale, West Palm & Homestead</p>
        <div className="space-x-4">
          <a href="#quote" className="bg-white text-blue-800 px-6 py-3 rounded font-semibold">Get a Free Quote</a>
          <a href="tel:7867750015" className="bg-gray-100 text-blue-800 px-6 py-3 rounded font-semibold">Call Now</a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-10">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">Roofing</h4>
            <p>Shingle, tile, and metal roof replacements with professional installation.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">Impact Windows</h4>
            <p>Hurricane-resistant windows in a variety of secure and efficient styles.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">Doors</h4>
            <p>Stylish and secure impact doors built to withstand Florida storms.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4 text-center" id="quote">
        <h3 className="text-2xl font-bold mb-6">Request a Free Quote</h3>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Full Name" className="p-3 rounded border" />
          <input type="tel" placeholder="Phone Number" className="p-3 rounded border" />
          <input type="email" placeholder="Email Address" className="p-3 rounded border" />
          <textarea placeholder="Project Details" className="p-3 rounded border rows-4"></textarea>
          <button type="submit" className="bg-blue-800 text-white py-3 rounded font-bold">Submit</button>
        </form>
      </section>

      <footer className="bg-white text-center text-sm py-6 border-t">
        © {new Date().getFullYear()} New American Windows & Roofs — All rights reserved.
      </footer>
    </div>
  );
}
