import Skeleton from "react-loading-skeleton";

const TableLoader = () => {
    return (<>
        <Skeleton height={50} className="mb-5" />
        <Skeleton height={300} />
    </>);
}

export default TableLoader;