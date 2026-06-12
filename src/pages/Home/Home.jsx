import Hero from "../../components/HomeHero/Hero"
import PopularServices from "../../components/Home/PopularServices";
import WhyChoose from "../../components/Home/WhyChoose";
import FeaturedPandits from "../../components/FeaturedPandits/FeaturedPandits";
import SacredHeritage from "../../components/SacredHeritage/SacredHeritage";
import BecomePanditCTA from "../../components/Home/BecomePanditCTA";

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularServices />
            <WhyChoose />
            <FeaturedPandits />
            <SacredHeritage />
            <BecomePanditCTA />
        </div>
    );
};

export default Home;