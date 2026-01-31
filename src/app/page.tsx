import Banner from "@/components/ui-section/Banner";
import Contact from "@/components/ui-section/Contact";
import PopularCourse from "@/components/ui-section/PopularCourse";
import Testominal from "@/components/ui-section/Testominal";

export default function Home() {
  return (
    <>
      <Banner />
      <PopularCourse />
      <Testominal />
      <Contact />
    </>
  );
}
