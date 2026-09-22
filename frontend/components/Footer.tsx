import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      
      <aside>
        <h2 className="text-2xl font-bold text-primary">
          LinkedIn Analyzer
        </h2>

        <p className="max-w-md">
          Analyze your LinkedIn profile, receive personalized recommendations,
          and improve your professional presence with AI-powered insights.
        </p>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} LinkedIn Analyzer. All rights reserved.
        </p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-6">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link link-hover">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

    </footer>
  );
}
