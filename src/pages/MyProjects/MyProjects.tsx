import Transition from "../../Transition.tsx";


export const MyProjects = () => {
    return (
        <div>
            Projects
        </div>
    );
};

const WrappedMyProjects = Transition(MyProjects)
export default WrappedMyProjects;
