import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight:['400', '500', '700' ,'900'] , subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next Hero",
    template:"%s | Next Hero"
  },
  description: "super powerful next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <h2 className=" text-center text-cyan-600 mt-28 text-5xl">Welcome Next Hero Website, This make for practise project</h2>
        {children}
        </body>
    </html>
  );
}
