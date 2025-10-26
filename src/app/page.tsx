import Banner from "@/components/ui/Banner";
import Contact from "@/components/ui/Contact";
import PopularCourse from "@/components/ui/PopularCourse";
import Testominal from "@/components/ui/Testominal";

export default function Home() {
  return (
    <div >
      <Banner />
      {/* Category Card */}
      <PopularCourse />
      <Testominal />
      <Contact />
    </div>
  );
}
