import Aboutfiles from "./aboutfile";
import WhyChooseUs from "./Choose";
import ExpertiseSection from "./Expertise";
import HeroSection from "./hero";
import ShopByCategories from "./Shop";

export default function Home() {
    return (
        <div>
            <HeroSection
                image="https://res.cloudinary.com/duhojv2px/image/upload/f_auto,q_auto/rnth8iahqpf7fwtdsfed"
                tag="Safety Bridge LTD"
                title="Where "
                highlight="Talk"
                description="We're here to answer your questions and guide you toward the right course for your career."
                watermark="HOME"
            />
            <Aboutfiles />
            <ExpertiseSection />
            <WhyChooseUs />
            <ShopByCategories />
        </div>
    )
}