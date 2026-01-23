import { BiLoaderAlt } from "react-icons/bi";

const SpinnerComponent = () => {
    return (<div className="py-3">
        <BiLoaderAlt className="text-4xl font-bold text-primary text-center mx-auto animate-spin" />
    </div>);
}

export default SpinnerComponent;