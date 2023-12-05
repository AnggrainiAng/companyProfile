import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title:
    "Men's Haircuts & Barber Shop Services | Uptown's: Do Yourself a Favor",
  description: "Uptown's is the grooming experience every man deserves -",
  openGraph: {
    title:
      "Men's Haircuts & Barber Shop Services | Uptown's: Do Yourself a Favor",
    description: "Uptown's is the grooming experience every man deserves -",
    images:
      "https://www.istockphoto.com/id/foto/tukang-cukur-muda-membuat-potongan-rambut-untuk-pria-berjanggut-menggunakan-sisir-gm1422731968-467932656",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
