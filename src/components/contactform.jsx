const ContactForm = () => (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h3 className="text-3xl font-bold mb-6 text-center">Get In Touch</h3>
      <form className="space-y-4">
        <input className="w-full p-3 rounded border" type="text" placeholder="Name" required />
        <input className="w-full p-3 rounded border" type="email" placeholder="Email" required />
        <input className="w-full p-3 rounded border" type="text" placeholder="Company" />
        <select className="w-full p-3 rounded border">
          <option>License Type</option>
          <option>Microsoft</option>
          <option>Adobe</option>
          <option>Other</option>
        </select>
        <textarea className="w-full p-3 rounded border" rows="4" placeholder="Message"></textarea>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">Submit</button>
      </form>
    </section>
  );
  
  export default ContactForm;
  