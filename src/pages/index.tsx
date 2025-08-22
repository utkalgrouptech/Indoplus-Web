import MainLayouts from "@/Layouts/MainLayout";
import Slider from "@/Components/Home/Slider";
import Cards from "@/Components/Home/Cards";
import Testimonial from "@/Components/Home/Testimonial";
import Section2 from "@/Components/Home/Section2";
import Corevalue from "@/Components/Home/Corevalue";

export default function Home() {
  return (
    <MainLayouts>
      <Slider />
      <Section2 />
      <Cards />
      <Testimonial />
      <Corevalue />
    </MainLayouts>
  );
}
