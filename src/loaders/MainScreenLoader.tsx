const MainScreenLoader = () => {
  return (<div
    className="h-screen w-screen bg-white flex items-center justify-center"
  >
    <img src={'Logo'} className="animate-fade w-[200px]" alt="Loading..." />
  </div>);
}

export default MainScreenLoader;