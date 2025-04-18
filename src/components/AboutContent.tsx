
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Clock, Lock, CheckCircle, Users } from "lucide-react";

const AboutContent = () => {
  return (
    <div className="bg-white">
      {/* Company Vision Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6351ce] mb-4">
              Choose Foresight, See the Future
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Have INSIGHT to have seeing into future.
            </p>
            <hr className="border-t border-gray-200 my-6" />
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {["Professional", "Precise", "High Quality", "Full-Service", "Opening a New Era of Personalized Medicine"].map((tag, index) => (
                <span key={index} className="bg-[#6351ce]/10 text-[#6351ce] px-4 py-2 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <hr className="border-t border-gray-200 my-6" />
          </div>
          
          {/* Company Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
            {[
              {
                year: "2020",
                bg: "bg-gradient-to-br from-[#6351ce]/20 to-[#6351ce]/10",
                text: "Dedicated to promoting foresight products, aiming to become an international laboratory platform and transnational technology cooperation company."
              },
              {
                year: "2019",
                bg: "bg-gradient-to-br from-[#6351ce]/30 to-[#6351ce]/20",
                text: "Actively expanding various locations and establishing long-term cooperation with hospitals to develop testing methods."
              },
              {
                year: "2018",
                bg: "bg-gradient-to-br from-[#6351ce]/20 to-[#6351ce]/10",
                text: "Prioritized the introduction of automated multi-gene test site chips to increase risk assessment accuracy, and selected chips suitable for Asians to reduce analysis errors and improve accuracy."
              },
              {
                year: "2017",
                bg: "bg-gradient-to-br from-[#6351ce]/30 to-[#6351ce]/20",
                text: "Received funding from Taiwan's Small Business Innovation Research (SBIR) program and was selected as an excellent manufacturer."
              },
              {
                year: "2014",
                bg: "bg-gradient-to-br from-[#6351ce]/20 to-[#6351ce]/10",
                text: "Started from academic research and cooperated with National Cheng Kung University. Committed to improving various sequencing platform technologies and big data analysis."
              }
            ].map((item, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md">
                <div className={`${item.bg} p-6 h-48 flex items-center justify-center`}>
                  <p className="text-gray-700 text-center">{item.text}</p>
                </div>
                <div className="bg-[#6351ce] text-white py-3 px-4 text-center">
                  <h3 className="text-xl font-bold">{item.year}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6351ce] mb-4">
            iGenomics Advantages
          </h2>
          <div className="w-24 h-1 bg-[#6351ce]/60 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-12 w-12 text-[#6351ce]" />,
                title: "High Precision",
                content: "Simultaneously testing over 750,000 points! The most comprehensive genetic testing."
              },
              {
                icon: <Users className="h-12 w-12 text-[#6351ce]" />,
                title: "Professional Reports",
                content: "Highly professional R&D team. All testing and AI data analysis conducted in Taiwan for reliable, reassuring, and committed service."
              },
              {
                icon: <Clock className="h-12 w-12 text-[#6351ce]" />,
                title: "Complete Service",
                content: "The most comprehensive after-sales service. Taiwan-based doctors, biologists, and medical technologists provide the most complete report consultation and health management information."
              },
              {
                icon: <Lock className="h-12 w-12 text-[#6351ce]" />,
                title: "Privacy Assurance",
                content: "Secure privacy protection you can trust. iGenomics data protection, absolutely dedicated to giving you peace of mind."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#6351ce] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6351ce] mb-4">
            Self-Testing Process
          </h2>
          <div className="w-24 h-1 bg-[#6351ce]/60 mx-auto mb-12"></div>
          
          <div className="hidden md:flex justify-between items-center max-w-4xl mx-auto">
            {[
              {
                step: 1,
                color: "bg-red-500",
                title: "Order Online, Delivery to Your Home",
                icon: "📦"
              },
              {
                step: 2,
                color: "bg-[#6351ce]",
                title: "Self-Testing, Safe and Worry-Free",
                icon: "🧪"
              },
              {
                step: 3,
                color: "bg-blue-500",
                title: "Refrigerated Shipping, Return to iGenomics",
                icon: "🚚"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="relative flex items-center">
                  <div className={`w-10 h-10 rounded-full ${item.color} text-white flex items-center justify-center font-bold`}>
                    {item.step}
                  </div>
                  <div className="ml-4">
                    <div className={`h-1 w-20 ${item.color}`}></div>
                  </div>
                </div>
                <p className="mt-3 text-center max-w-[200px]">{item.title}</p>
              </div>
            ))}
          </div>
          
          <div className="md:hidden">
            <Carousel>
              <CarouselContent>
                {[
                  {
                    step: 1,
                    color: "bg-red-500",
                    title: "Order Online, Delivery to Your Home",
                    icon: "📦"
                  },
                  {
                    step: 2,
                    color: "bg-[#6351ce]",
                    title: "Self-Testing, Safe and Worry-Free",
                    icon: "🧪"
                  },
                  {
                    step: 3,
                    color: "bg-blue-500",
                    title: "Refrigerated Shipping, Return to iGenomics",
                    icon: "🚚"
                  }
                ].map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col items-center p-4">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <div className={`w-10 h-10 rounded-full ${item.color} text-white flex items-center justify-center font-bold mb-3`}>
                        {item.step}
                      </div>
                      <p className="text-center">{item.title}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1" />
              <CarouselNext className="right-1" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6351ce] mb-4">
            Customer Testimonials
          </h2>
          <div className="w-24 h-1 bg-[#6351ce]/60 mx-auto mb-12"></div>
          
          <Carousel>
            <CarouselContent>
              {[
                {
                  name: "Yu Nian-You",
                  age: 29,
                  location: "Keelung City",
                  comment: "I never thought I could know about my body condition in advance! It's really amazing!"
                },
                {
                  name: "Dai Ting-Yi",
                  age: 30,
                  location: "Keelung City",
                  comment: "After seeing my grandmother get sick, I decided to try iGenomics' products, which allowed me to quickly understand the right medication for my grandmother. I'm really grateful."
                },
                {
                  name: "Fang Yan-Bo",
                  age: 41,
                  location: "Taipei City",
                  comment: "Since my injury, I've become more aware of the importance of prevention over treatment. Genetic testing has really helped me a lot."
                }
              ].map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-xl shadow-md m-2 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#6351ce]/20 rounded-full flex items-center justify-center text-[#6351ce] font-bold">
                        {item.name[0]}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.age} years old, {item.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{item.comment}"</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6351ce] mb-12">
            Our Partners
          </h2>
          
          <div className="flex justify-center items-center flex-wrap gap-8">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-gray-400">Partner Logo</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-[#6351ce] hover:bg-[#6351ce]/90">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
