import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Navbar from "./../components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import Footer from "./../components/Footer";

function MyApp({ Component, pageProps : {session, ...pageProps}}) {
  useEffect(() => {
    import("../node_modules/bootstrap/dist/js/bootstrap.min.js");
  },
 []);
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
