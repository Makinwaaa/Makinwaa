import Skeleton from "react-loading-skeleton";

const FullPageLoader = ({ height, borderRadius, marginBottom }: { height?: number | string, borderRadius?: number, marginBottom?: number }) => {
    return (<>
        <Skeleton highlightColor='#ebebeb' style={{ marginBottom: marginBottom }} height={height || 400} borderRadius={borderRadius} />
    </>);
}

export default FullPageLoader;