import Contactus from "@/components/custom/about/Contactus";
import Logo from "@/components/custom/shared/Logo";
import MainHeading from "@/components/custom/shared/MainHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const ContactUs = () => {

  return (
    <section>
      <div className="container">
         <div className="bg-[#faf9f7] py-8 px-6 rounded-2xl mb-6 flex flex-col items-center justify-center"> <MainHeading className="!mb-4" title={<>Get in <span className="text-primary">Touch</span></>} />
        <p>Explore insights, tips, and articles written by experts in a range of professional domains.</p>
        
        </div>

        <Contactus/>
        <div className="grid grid-cols-12 gap-8 sec_mb">
          <div className="col-span-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.327584008386!2d77.28237027572018!3d28.638486975661504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1e3fa27021%3A0x132ccea9b8de6d68!2sLearningShala!5e1!3m2!1sen!2sin!4v1761630454822!5m2!1sen!2sin" width="100%" height="550" className="h-full rounded-3xl" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-span-6">
          <section className="bg-gray-100 rounded-3xl p-10">
      <div className="flex items-center justify-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-6 lg:justify-start w-full">
          <Logo />
          <div className="border-muted bg-background flex flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md w-full">
            <Input
              type="text" 
              placeholder="Name"
              className="text-sm h-12"
              required
            
            />
            <Input
              type="email"
              placeholder="Email"
              className="text-sm h-12"
              required
            />
            <Input
              type="phone"
              placeholder="Phone"
              className="text-sm h-12"
              required
            />
            <Textarea
              type="Message"
              placeholder="Message"
              className="text-sm h-30"
              required
            />
            <Button type="submit" className="w-full" size="xl">
              Submit
            </Button>
          </div>
         
        </div>
      </div>
    </section>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default ContactUs
