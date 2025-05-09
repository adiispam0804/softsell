const reviews = [
    {
      name: "Aman Khanna",
      role: "IT Manager",
      company: "TechNova",
      comment: "Smooth experience and instant payout. Highly recommend!"
    },
    {
      name: "Riya Malhotra",
      role: "Founder",
      company: "AppBox",
      comment: "SoftSell made it super easy to resell unused licenses."
    }
  ];
  
  const Testimonials = () => (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 text-center">
      <h3 className="text-3xl font-bold mb-8">What Our Customers Say</h3>
      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded shadow w-80">
            <p className="mb-4 italic">"{r.comment}"</p>
            <p className="font-semibold">{r.name}</p>
            <p className="text-sm">{r.role}, {r.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Testimonials;
  