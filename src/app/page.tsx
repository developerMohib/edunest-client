import Footer from "@/components/common/Footer";
import Navber from "@/components/common/Navber";
import Banner from "@/components/ui-section/Banner";
import Contact from "@/components/ui-section/Contact";
import PopularCourse from "@/components/ui-section/PopularCourse";
import Testominal from "@/components/ui-section/Testominal";

export default function Home() {
  return (

    <div>
      <Navber />
      <Banner />
      <PopularCourse />
      <Testominal />
      <Contact />
      <Footer />
    </div>

  );
}
