import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/global.scss";

export const metadata = {
  title: "Tunahan Tezcan - Software Engineer",
  description: "Tunahan Tezcan - Software Engineer personal website",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body suppressHydrationWarning={true}>
      <Nav />
      <main className="app">{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
