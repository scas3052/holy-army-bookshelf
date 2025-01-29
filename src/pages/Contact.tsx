import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="font-serif text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-serif text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-serif text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">info@holyarmyfellowship.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">123 Faith Street<br />Spiritual City, SC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-serif text-2xl font-semibold mb-4">Office Hours</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 5:00 PM</p>
                <p><span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;