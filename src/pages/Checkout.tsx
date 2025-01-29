import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="font-serif text-4xl font-bold mb-8 text-center">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-serif text-2xl font-semibold mb-6">Payment Details</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium mb-1">Name on Card</label>
                  <Input id="cardName" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number</label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium mb-1">Expiry Date</label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium mb-1">CVV</label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-semibold mt-8 mb-4">Billing Address</h3>
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
                <Button type="submit" className="w-full">Complete Purchase</Button>
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="font-serif text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img src="/placeholder.svg" alt="Book cover" className="w-16 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-medium">The Power of Prayer</h3>
                  <p className="text-sm text-gray-600">Rev. John Smith</p>
                  <p className="text-primary font-bold">$9.99</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$9.99</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-primary">$9.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;