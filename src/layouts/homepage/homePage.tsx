import Header from "../../components/header/header";
import Salutation from "../../components/salutation/salutation";
import ScrollWatecher from "../../components/scrollWatcher/scrollWatcher";


const HomePage = () => {
  return (
    <>
      <ScrollWatecher />
      <Header />
      <Salutation />
    </>
  );
};

export default HomePage;
