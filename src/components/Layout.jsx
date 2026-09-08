import Navbar from "./Navbar";
import Footer from "./Footer";

// O Layout é usado em todas as páginas
// Ele mostra o Navbar no topo, o Footer em baixo,
// e o conteúdo da página (children) fica no meio

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
