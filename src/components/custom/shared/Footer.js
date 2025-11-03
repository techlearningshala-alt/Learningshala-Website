import { Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import SocialShare from "./SocialShare";
import Link from "next/link";
import { globalStore } from "@/lib/store";
const Footer = () => {
  const {email,phone} = globalStore
  return (
    <footer className="container">
      <section className="py-5 md:py-10">
        <div className="container">
          <footer>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2 mb-4 md:mb-8 lg:mb-0">
                <div className="flex items-center gap-2 lg:justify-start">
                  <Logo />
                </div>
                <p className="my-4 font-bold">Transforming the way individuals learn and network for professional excellence!</p>
                <p className="mb-2"><Link href={`tel:${phone.get()}`} className="flex items-center gap-2 font-bold text-sm"><Phone className="w-4 h-4" />{phone.get()}</Link></p>
                <p><Link href={`mailto:${email.get()}`} className="flex items-center gap-2 font-bold text-sm"><Mail className="w-4 h-4" />{email.get()}</Link></p>
             
              </div>
              <div>
                <h3 className="mb-4 font-bold">About</h3>
                <ul className="text-muted-foreground space-y-4">
                  <li className="hover:text-primary font-medium">
                    <Link href="/about">Why LearningShala</Link>
                  </li>
                  
                  
                  <li className="hover:text-primary font-medium">
                    <Link href="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-bold">All Courses</h3>
                <ul className="text-muted-foreground space-y-4">
                  <li className="hover:text-primary font-medium">
                    <a href="link">UG Courses</a>
                  </li>
                  <li className="hover:text-primary font-medium">
                    <a href="link">PG Courses</a>
                  </li>
                  <li className="hover:text-primary font-medium">
                    <a href="link">Diploma Courses</a>
                  </li>
                  <li className="hover:text-primary font-medium">
                    <a href="link">Certificate Courses</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-bold">Resources</h3>
                <ul className="text-muted-foreground space-y-4">
                  <li className="hover:text-primary font-medium">
                    <a href="link">About Us</a>
                  </li>
                  <li className="hover:text-primary font-medium">
                    <a href="link">Job</a>
                  </li>
                  <li className="hover:text-primary font-medium">
                    <a href="link">Resume Builder</a>
                  </li>
                  <li className="hover:text-primary font-medium">
                    <a href="link">Skill for free</a>
                  </li>
                  <li className="hover:text-primary font-medium">
                    <a href="link">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-bold">More</h3>
                <ul className="text-muted-foreground space-y-4">
                  <li className="hover:text-primary font-medium">
                    <Link href="/terms">Terms</Link>
                  </li>
                  <li className="hover:text-primary font-medium">
                    <Link href="/privacy-policy">Privacy & Policy</Link>
                  </li>
                  <li className="hover:text-primary font-medium">
                    <Link href="/contact-us">Contact us</Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className="text-muted-foreground mt-12 md:mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
              <p>© 2025-2026 LearningShala. All rights reserved</p>
              <SocialShare />
            </div>
          </footer>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
