
import { Clock, Users, Trophy, Microscope } from "lucide-react";

const AboutContent = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#6351ce]">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At iGenomics, we're dedicated to advancing genomic research and providing cutting-edge solutions for scientific discovery. Our team of experts works tirelessly to develop innovative technologies that accelerate breakthroughs in genetic research.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#6351ce]">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where genomic science transforms healthcare and improves lives globally. Through continuous innovation and collaboration, we strive to make this vision a reality.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Clock, title: "20+ Years", description: "Of Experience" },
            { icon: Users, title: "500+", description: "Global Clients" },
            { icon: Trophy, title: "100+", description: "Awards" },
            { icon: Microscope, title: "1000+", description: "Research Projects" },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <item.icon className="w-12 h-12 mx-auto mb-4 text-[#6351ce]" />
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
