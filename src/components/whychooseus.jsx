const features = [
    { icon: "⚡", title: "Instant Quotes", desc: "Know your value fast" },
    { icon: "🔒", title: "Secure Process", desc: "Encrypted transactions" },
    { icon: "📈", title: "Best Returns", desc: "Maximize your license value" },
    { icon: "🛠", title: "Expert Support", desc: "We help every step of the way" },
  ];
  
  const WhyChooseUs = () => (
    <section className="py-16 text-center px-6">
      <h3 className="text-3xl font-bold mb-8">Why Choose Us</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-700 p-6 rounded shadow">
            <div className="text-3xl mb-2">{f.icon}</div>
            <h4 className="font-semibold">{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default WhyChooseUs;
  