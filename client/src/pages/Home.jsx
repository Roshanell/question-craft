import HeaderSection from "../components/HeaderSection";
import QuestionForm from "../components/form";
import Response from "../components/Response";
import AskingQuestions from "../components/AskingQuestions";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <HeaderSection />
            <AskingQuestions />
            <QuestionForm />
            <Response />
            <Footer />
        </div>
    );
};

export default Home;
