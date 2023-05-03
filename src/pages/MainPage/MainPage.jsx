import React from "react";
import Header from "../../components/Header/Header";
import Solutions from "../../components/Solutions/Solutions";
import Services from "../../components/Services/Services";
import BigImage from "../../components/BigImage/BigImage";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Solutions />
      <Services />
      <BigImage />
      <Form />
      <Footer />
    </div>
  );
};

export default MainPage;
