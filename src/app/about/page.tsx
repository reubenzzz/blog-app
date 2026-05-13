import { Header } from "@/components/Header";

const team = [
  {
    name: "Jennifer Taylor",
    role: "Head of Design",
    image: "https://i.pravatar.cc/300?u=jennifer",
  },
  {
    name: "Ryan Adams",
    role: "Lead Engineer",
    image: "https://i.pravatar.cc/300?u=ryan",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager",
    image: "https://i.pravatar.cc/300?u=sarah",
  },
  {
    name: "Marcus Chen",
    role: "UX Researcher",
    image: "https://i.pravatar.cc/300?u=marcus",
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">We're building the future of UI design</h1>
          <p className="text-xl text-gray-600">
            Our mission is to empower teams everywhere to create beautiful, accessible, and high-performance digital experiences without the technical overhead.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-24 relative">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
            alt="Our team working" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're a small, passionate team of designers, engineers, and dreamers dedicated to making the web a more beautiful place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person) => (
              <div key={person.name} className="flex flex-col items-center group">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 relative">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                <p className="text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
