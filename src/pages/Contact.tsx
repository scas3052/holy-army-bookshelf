import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    toast({
      title: "Message Sent",
      description: "We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="font-serif text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-serif text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
                <Input 
                  id="name" 
                  {...register("name", { required: "Name is required" })}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                <Input 
                  id="email" 
                  type="email" 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone (Optional)</label>
                <Input 
                  id="phone" 
                  {...register("phone")}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
                <Textarea 
                  id="message" 
                  {...register("message", { required: "Message is required" })}
                  className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
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
                  <Mail className="text-primary h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:info@holyarmyebooks.com" className="text-gray-600 hover:text-primary">
                      info@holyarmyebooks.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+911234567890" className="text-gray-600 hover:text-primary">
                      +91 1234567890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">123 Faith Street<br />Spiritual City, SC 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-primary h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Working Hours</h3>
                    <p className="text-gray-600">Mon - Sat, 9 AM - 6 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-serif text-2xl font-semibold mb-4">Connect With Us</h2>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-serif text-2xl font-semibold mb-4">Location</h2>
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwMC4wIk4gNzPCsDU4JzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;