import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <main className="page">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;