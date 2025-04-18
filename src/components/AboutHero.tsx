
import { Button } from "./ui/button";

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#6351ce]/10 to-[#6351ce]/5 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#6351ce]">
              About iGenomics
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Leading the way in genomics research and innovation. Our commitment to excellence drives breakthrough discoveries in genetic science.
            </p>
            <Button 
              size="lg"
              className="bg-[#6351ce] hover:bg-[#6351ce]/90"
            >
              Contact Us
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#6351ce]/20 to-[#6351ce]/10 flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt="iGenomics Lab"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
