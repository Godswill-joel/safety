import Aboutfiles from "./aboutfile";
import WhyChooseUs from "./Choose";
import ExpertiseSection from "./Expertise";
import HeroSection from "./hero";
import ShopByCategories from "./Shop";

export default function Home() {
    return (
        <div>
            <HeroSection
                image="https://res.cloudinary.com/dzhpdvoqd/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/menu_shop_njltem.jpg"
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