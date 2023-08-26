const { default: Footer } = require("../shared/Footer");
const { default: Navbar } = require("../shared/Navbar");

const MainLayout = ({ children }) => {
  return <>
  <Navbar/>
 <div className="pt-24">
 {children}
 </div>
  <Footer/>
  </>;
};
export default MainLayout;