import React from "react";
import { Outlet } from "react-router";
import Header from "components/Header";
import Footer from "components/Footer";
import { useAppState } from "appState";

function Dashboard() {
  const { HeaderReady, OutletReady, FooterReady } = useAppState();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {HeaderReady && OutletReady && FooterReady ? <div id="WELCOME" /> : null}
    </>
  );
}

export default Dashboard;
