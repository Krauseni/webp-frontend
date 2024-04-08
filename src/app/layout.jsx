import { Inter } from "next/font/google";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: 'images/logo.png'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="content">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
