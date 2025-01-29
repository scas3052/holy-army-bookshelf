import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="font-serif text-3xl font-bold mb-6 text-center">Create Account</h1>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
              <Input id="confirmPassword" type="password" placeholder="••••••••" />
            </div>
            
            <div className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
              <label className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </label>
            </div>
            
            <Button type="submit" className="w-full">Create Account</Button>
          </form>
          
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;