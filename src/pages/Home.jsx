import HeaderSection from "../components/HeaderSection";
import QuestionForm from "../components/form";
import Response from "../components/Response";
import AskingQuestions from "../components/AskingQuestions";
const Home = () => {
    return (
        <div>
            <HeaderSection />
            <AskingQuestions />
            <QuestionForm />
            <Response />
        </div>
    );
};

export default Home;
