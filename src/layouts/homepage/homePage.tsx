import FrontEndDev from "../../components/frontEnddDev/frontEndDev";
import Header from "../../components/header/header";
import Salutation from "../../components/salutation/salutation";
import ScrollWatecher from "../../components/scrollWatcher/scrollWatcher";
import styles from "./homePage.module.css";

const HomePage = () => {
  return (
    <>
      <ScrollWatecher />
      <Header />
      <Salutation />
      <FrontEndDev />
    </>
  );
};

export default HomePage;
