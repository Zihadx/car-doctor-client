import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Services from "../Services/Services";
import TeamSection from "../TeamSection/TeamSection";
const Home = () => {
    return (
        <div className="space-y-20">
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Contact></Contact>
           <TeamSection></TeamSection>
           <Products></Products>
        </div>
    );
};

export default Home;