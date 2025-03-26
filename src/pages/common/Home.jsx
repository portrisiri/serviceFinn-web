import React from "react";
import HomeSections from "../../components/common/HomeSections";
import Searchbar from "../../components/common/Searchbar";
import SidebarProvider from "../../components/provider/SidebarProvider";
import ProviderRegister from "../auth/ProviderRegister";


function Home() {
  return (
    <div style={{ backgroundImage: "url(/web-bg.jpg)" }} >
      <HomeSections/>
    </div>
  );
}

export default Home;
