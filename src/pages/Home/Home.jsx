import Hero from "../../components/HomeHero/Hero"
import PopularServices from "../../components/Home/PopularServices";
import WhyChoose from "../../components/Home/WhyChoose";
import BecomePanditCTA from "../../components/Home/BecomePanditCTA";

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularServices />
            <WhyChoose />
            <BecomePanditCTA />
        </div>
    );
};

export default Home;