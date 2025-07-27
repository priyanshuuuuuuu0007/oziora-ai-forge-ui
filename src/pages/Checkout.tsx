import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  Lock, 
  ArrowLeft, 
  Shield, 
  CheckCircle,
  Star,
  Download,
  Gift
} from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Mock cart item - in real app, this would come from cart state
  const cartItem = {
    id: "1",
    title: "Email Marketing Automator",
    creator: "Sarah Chen",
    platform: "Zapier",
    category: "Marketing",
    price: 29,
    originalPrice: 39,
    rating: 4.8,
    reviews: 142,
    thumbnail: "",
    description: "Automate your email campaigns with AI-powered personalization and scheduling.",
  };

  const orderSummary = {
    subtotal: cartItem.price,
    discount: cartItem.originalPrice - cartItem.price,
    processingFee: 1.50,
    total: cartItem.price + 1.50,
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
    }, 3000);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="glass-card p-12 rounded-xl max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              
              <h1 className="text-3xl font-bold mb-4">Payment Successful! 🎉</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your purchase. You now have access to <strong>{cartItem.title}</strong>.
              </p>

              <div className="space-y-4 mb-8">
                <div className="glass p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{cartItem.title}</span>
                    <Badge variant="default" className="bg-green-500/20 text-green-400">
                      Access Granted
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button variant="default">
                    <Download className="w-4 h-4 mr-2" />
                    Access Agent
                  </Button>
                </Link>
                <Link to="/marketplace">
                  <Button variant="outline">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  A confirmation email has been sent to your registered email address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/marketplace">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Marketplace
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Checkout</h1>
          <p className="text-xl text-muted-foreground">
            Complete your purchase securely
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Method */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card 
                    className={`cursor-pointer transition-smooth ${
                      paymentMethod === "card" ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <CardContent className="p-4 text-center">
                      <CreditCard className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">Credit Card</div>
                    </CardContent>
                  </Card>

                  <Card 
                    className={`cursor-pointer transition-smooth ${
                      paymentMethod === "paypal" ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-6 h-6 mx-auto mb-2 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
                      <div className="text-sm font-medium">PayPal</div>
                    </CardContent>
                  </Card>

                  <Card 
                    className={`cursor-pointer transition-smooth ${
                      paymentMethod === "apple" ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setPaymentMethod("apple")}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-6 h-6 mx-auto mb-2 bg-black rounded text-white text-xs flex items-center justify-center font-bold">🍎</div>
                      <div className="text-sm font-medium">Apple Pay</div>
                    </CardContent>
                  </Card>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input
                          id="cardName"
                          placeholder="John Smith"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Billing Address */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Billing Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" className="mt-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state">State/Province</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="glass p-4 rounded-lg border border-green-500/20">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-medium text-green-400">Secure Payment</div>
                  <div className="text-sm text-muted-foreground">
                    Your payment information is encrypted and secure. We never store your payment details.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Agent Details */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-2xl">🤖</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{cartItem.title}</h3>
                    <p className="text-sm text-muted-foreground">by {cartItem.creator}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{cartItem.platform}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-sm">{cartItem.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {cartItem.description}
                </p>
              </CardContent>
            </Card>

            {/* Pricing Breakdown */}
            <Card className="glass-card">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${orderSummary.subtotal}</span>
                </div>
                
                {orderSummary.discount > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Discount</span>
                    <span>-${orderSummary.discount}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Processing Fee</span>
                  <span>${orderSummary.processingFee.toFixed(2)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${orderSummary.total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            {/* Promo Code */}
            <Card className="glass-card">
              <CardContent className="p-4">
                <div className="flex gap-2">
                  <Input placeholder="Promo code" />
                  <Button variant="outline">
                    <Gift className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Complete Purchase */}
            <Button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full h-12 text-lg"
              variant="default"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Complete Purchase - ${orderSummary.total.toFixed(2)}
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By completing this purchase, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;