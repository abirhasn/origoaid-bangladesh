import logo from "@/assets/logo.png";
import { Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <img src={logo} alt="OrigoAid" className="h-12 w-auto brightness-0 invert" />
            <p className="text-sm leading-relaxed opacity-70">
              Bangladesh's trusted crowdfunding platform empowering communities and changemakers since 2024.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Browse Campaigns", "Start a Campaign", "How It Works", "Success Stories"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {["Education", "Healthcare", "Community", "Startups", "Emergency Relief"].map((cat) => (
                <li key={cat}>
                  <a href="#" className="hover:text-primary transition-colors">{cat}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                +880 1XXX-XXXXXX
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                hello@origoaid.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center text-sm opacity-60">
          © 2024 OrigoAid. All rights reserved. Made with ❤️ in Bangladesh.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
