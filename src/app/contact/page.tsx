import { Header } from "@/components/Header";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Let's build something together</h1>
          <p className="text-xl text-gray-600">
            Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-gray-900 text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Chat with sales</h3>
                <p className="text-gray-600 mb-2">Speak to our friendly team.</p>
                <a href="#" className="text-gray-900 font-semibold hover:underline">sales@beyondui.com</a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit us</h3>
                <p className="text-gray-600 mb-2">Visit our office HQ.</p>
                <p className="text-gray-900 font-semibold">100 Smith Street<br/>Collingwood VIC 3066 AU</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call us</h3>
                <p className="text-gray-600 mb-2">Mon-Fri from 8am to 5pm.</p>
                <a href="#" className="text-gray-900 font-semibold hover:underline">+1 (555) 000-0000</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
