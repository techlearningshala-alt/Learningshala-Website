import Cta from "@/components/custom/shared/Cta";
import Footer from "@/components/custom/shared/Footer";
import Header from "@/components/custom/shared/Header";
import TopHeader from "@/components/custom/shared/TopHeader";
import { Plus_Jakarta_Sans } from "next/font/google";
import MobileHeader from "@/components/custom/shared/MobileHeader";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import "@/styles/globals.css";
import useWindowSize from "@/lib/use-window-size";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], 
  display: "swap",
});
export default function App({ Component, pageProps }) {
  const size = useWindowSize();
  return <div className={`${plusJakartaSans.className}`}>
    <ScrollProgress className="z-50 h-0.5"/>
    <TopHeader />
    {size && size.width > 991 ? <Header /> : <MobileHeader />}
    {/* <div className="hidden lg:block">
    <Header />
  </div>


  <div className="block lg:hidden">
    <MobileHeader />
  </div> */}
    <main>
      <Component screenSize={size} {...pageProps} />
    </main>
    <Cta />
    <Footer />
  </div>;
}
