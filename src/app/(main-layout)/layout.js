const { default: Footer } = require("../shared/Footer");
const { default: Navbar } = require("../shared/Navbar");

const MainLayout = ({ children }) => {
  return <>
  <Navbar/>
  {children}
  <Footer/>
  </>;
};
export default MainLayout;