import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const Signup = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account Created!",
      description: "Welcome to OrigoAid. Start exploring campaigns!",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <img src={logo} alt="OrigoAid" className="h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground">Create Your Account</h1>
            <p className="text-muted-foreground mt-1">Join the OrigoAid community today</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-card p-6 sm:p-8 rounded-xl border border-border"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-base">
              Create Account
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
