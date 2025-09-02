import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import PopularCourse from "@/components/PopularCourse";
import Testominal from "@/components/Testominal";

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
