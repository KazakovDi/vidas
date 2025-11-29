import CallBackForm from "./components/CallBackForm/CallBackForm";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import CardSwiper from "./components/Swiper/Swiper";

export default function Home() {
  return (
    <div className="">
      <main className="px-11 py-15">
        <Hero />

        <CardSwiper />

        <FAQ />

        <CallBackForm />

        <Footer />
      </main>
    </div>
  );
}
