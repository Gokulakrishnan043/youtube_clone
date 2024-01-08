import Topbar from "../Components/topbar1/topbar";
import Sidebar from "../Components/sidebar1/sidebar";
import Content from "../Components/Content1/Content";

const Page = () => {
  return (
    <>
      <Topbar />
      <div className='d-flex'>
       <Sidebar />
       <Content />
        </div>  
      
    </>
  );
};

export default Page;
