import React from 'react';
import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <span className="text-lg font-bold text-primary">Vijay Nagarkar</span>
            <p className="mt-2 text-sm">
              Undergraduate student passionate about creative writing, chess, and nature photography.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <span className="text-sm font-semibold text-foreground">Contact</span>
            <div className="mt-3 space-y-2">
              <a
                href="mailto:vijay.nagarkar@example.com"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200"
              >
                <Mail size={16} />
                <span>vijay.nagarkar@example.com</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200"
              >
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <span className="text-sm font-semibold text-foreground">Connect</span>
            <div className="mt-3 flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 Vijay Nagarkar. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
