import Hero from "../../components/Home/HomeHero/Hero"
import PopularServices from "../../components/Home/PopularServices";
import WhyChoose from "../../components/Home/WhyChoose";
import FeaturedPandits from "../../components/FeaturedPandits/FeaturedPandits";
import SacredHeritage from "../../components/Home/SacredHeritage/SacredHeritage";
import BecomePanditCTA from "../../components/Home/BecomePanditCTA";


const Home = () => {
    return (
        <div>
            <WhyChoose />
            
            <PopularServices />
            <Hero />
            <FeaturedPandits />
            <BecomePanditCTA />
        </div>
    );
};

export default Home;

