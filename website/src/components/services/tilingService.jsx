import { CheckCircle, Phone, Calendar, ArrowRight } from "lucide-react";
import { ProjectCard } from "./card";
import { useNavigate } from "react-router-dom";

const TilingService = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Luxury Bathroom Renovation",
      description: "Custom marble tile installation with intricate patterns",
      image: "/bath1.jpeg",
      duration: "3 weeks",
      status: "Completed",
    },
    {
      title: "Modern Kitchen Backsplash",
      description: "Contemporary geometric tile design with LED lighting",
      image: "/kit1.jpeg",
      duration: "1 week",
      status: "Completed",
    },
    {
      title: "Modern Lounge Renovation",
      description:
        "Large-format porcelain tile installation with custom inlays",
      image: "/mordendining.jpeg",
      duration: "2 weeks",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative h-96">
        <img
          src="/tiling.webp"
          alt="Expert Painting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Expert Tiling Services
            </h1>
            <p className="text-xl max-w-2xl">
              Transform your space with our premium tiling services
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Our Tiling Excellence</h2>
            <p className="text-gray-600 mb-6">
              With over 5 years of experience, we specialize in delivering
              exceptional tiling services for both residential and commercial
              properties. Our team of expert tilers combines technical expertise
              with artistic vision to transform any space.
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Our Tiling Services Include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Bathroom wall tiling",
                "Kitchen backsplash installation",
                "Shower enclosure tiling",
                "Decorative feature walls",
                "Surface preparation",
                "Sealing and finishing",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-xl sticky top-6">
              <h3 className="text-xl font-bold mb-4">
                Schedule a Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to transform your space? Contact us for a free
                consultation and quote.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>+263 77 100 8329</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-red-600" />
                  <span>Available Mon-Sat, 8am-6pm</span>
                </div>
                <button
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  onClick={() => navigate("/contact")}
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilingService;
