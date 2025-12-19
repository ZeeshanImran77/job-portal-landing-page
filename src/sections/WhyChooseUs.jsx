import React from "react";
import { User, Briefcase, Building, Megaphone } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <User size={24} color="black" />,
      title: "Unstinskanacecitions",
      description: "Explore thousands of job listings tailored to your skills.",
    },
    {
      icon: <Briefcase size={24} color="black" />,
      title: "Job jobs adviancay",
      description: "We act un eaccomonents and mean-experience.",
    },
    {
      icon: <Building size={24} color="black" />,
      title: "Companiezquestions",
      description: "We are competed no help you for professional and teams.",
    },
    {
      icon: <Megaphone size={24} color="black" />,
      title: "Funature support",
      description:
        "Learn how we varnative to our unkinmincenflaws and fabrications.",
    },
  ];

  return (
    <section className="py-section">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
