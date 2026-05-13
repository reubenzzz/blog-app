import { Header } from "@/components/Header";
import { CheckCircle2, Zap, Layout, Smartphone, Shield, Search } from "lucide-react";

const features = [
  {
    name: "Lightning Fast Performance",
    description: "Built on modern web architectures, our platform ensures your content is delivered with sub-second load times.",
    icon: Zap,
  },
  {
    name: "Responsive by Default",
    description: "Every interface automatically adapts to desktop, tablet, and mobile screens without writing extra code.",
    icon: Smartphone,
  },
  {
    name: "Intuitive Layout Engine",
    description: "Drag, drop, and align elements with a smart grid system that respects your design constraints.",
    icon: Layout,
  },
  {
    name: "Enterprise-grade Security",
    description: "Bank-level encryption and strict access controls keep your design assets safe from unauthorized access.",
    icon: Shield,
  },
  {
    name: "SEO Optimized",
    description: "Semantic HTML and automated meta tags ensure your pages rank high on Google and other search engines.",
    icon: Search,
  },
  {
    name: "1-Click Publishing",
    description: "Go from draft to production in seconds with our integrated edge deployment network.",
    icon: CheckCircle2,
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Everything you need to build faster</h1>
          <p className="text-xl text-gray-600">
            Discover the powerful tools and features designed to help your team create stunning, high-performance web applications without the usual friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.name}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
