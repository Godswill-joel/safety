import HeroSection from "../home/hero";
import WorkingProcess from "../home/Progress";

export default function ServiceSection() {
    return (
        <div>
            <HeroSection
                image="https://res.cloudinary.com/duhojv2px/image/upload/f_auto,q_auto/rnth8iahqpf7fwtdsfed"
                tag="Safety Bridge LTD"
                title="Let's"
                highlight="Talk"
                description="We're here to answer your questions and guide you toward the right course for your career."
                watermark="SERVICES"
            />
        <WorkingProcess />

        </div>
    )
};