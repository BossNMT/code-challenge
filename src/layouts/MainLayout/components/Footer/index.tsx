import { ImageEnum } from "@/assets";
import { MailIcon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Home", path: "#" },
  { name: "About", path: "#" },
  { name: "Blog", path: "#" },
  { name: "Archived", path: "#" },
  { name: "Author", path: "#" },
  { name: "Contact", path: "#" },
];

const categories = [
  { name: "Lifestyle", path: "#" },
  { name: "Technology", path: "#" },
  { name: "Travel", path: "#" },
  { name: "Business", path: "#" },
  { name: "Economy", path: "#" },
  { name: "Sports", path: "#" },
];

const Footer = () => {
  return (
    <div className="w-full h-[500px] bg-input">
      <div className="container">
        <div className="flex flex-wrap justify-between py-16">
          <div className="w-full sm:w-[280px] mb-8 sm:mb-0">
            <h3 className="text-lg text-primary font-semibold">About</h3>
            <p className="mt-3 text-secondary text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-6">
              <span className="font-semibold">Email</span>: info@jstemplate.net
            </p>
            <p className="mt-1">
              <span className="font-semibold">Phone</span>: 880 123 456 789
            </p>
          </div>

          <div className="w-full sm:w-auto mb-8 sm:mb-0">
            <h3 className="text-lg text-primary font-semibold">Quick Links</h3>
            <div className="mt-6 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.name} className="text-text" href={link.path}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full sm:w-auto mb-8 sm:mb-0">
            <h3 className="text-lg text-primary font-semibold">Category</h3>
            <div className="mt-6 flex flex-col gap-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  className="text-text"
                  href={category.path}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full sm:w-[392px] bg-background rounded-lg px-9 py-8">
            <h3 className="text-xl text-primary font-semibold text-center">
              Weekly Newsletter
            </h3>
            <p className="text-secondary text-center mt-2">
              Get blog articles and offers via email
            </p>
            <form className="mt-8">
              <div className="border rounded-sm border-input flex items-center gap-2 px-4 py-3">
                <Input
                  type="email"
                  className="border-none outline-none p-0 h-6 focus:outline-none focus-visible:ring-0 shadow-none"
                  placeholder="Enter your email"
                  required
                />
                <MailIcon
                  className="cursor-pointer hover:text-blue-600"
                  aria-label="Subscribe"
                />
              </div>
              <Button className="mt-2 w-full h-12 bg-blue font-medium">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <Divider className="mb-4" />
        <div className="flex items-center justify-between my-9">
          <Image src={ImageEnum.logo} alt="Logo" width={158} height={30} />
          <div className="flex items-center gap-4">
            <Link href="#" className="text-text">
              Terms & Use
            </Link>
            <div className="w-[1px] h-4 bg-border" />
            <Link href="#" className="text-text">
              Privacy Policy
            </Link>
            <div className="w-[1px] h-4 bg-border" />
            <Link href="#" className="text-text">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
