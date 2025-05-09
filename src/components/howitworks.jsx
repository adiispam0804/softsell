const steps = [
    { icon: "⬆️", title: "Upload License", desc: "Submit license info securely" },
    { icon: "📊", title: "Get Valuation", desc: "We analyze its resale value" },
    { icon: "💸", title: "Get Paid", desc: "Receive payment within 24 hours" }
  ];
  
  const HowItWorks = () => (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
      <h3 className="text-3xl font-bold mb-8">How It Works</h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {steps.map((step, i) => (
          <div key={i} className="w-60 bg-white dark:bg-gray-700 p-6 rounded shadow">
            <div className="text-3xl mb-2">{step.icon}</div>
            <h4 className="font-semibold">{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default HowItWorks;
  