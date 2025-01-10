

export default function Contact() {
    return (
      <section className="bg-gray-100 text-gray-900 p-8">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <form action="/api/contact" method="POST" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  