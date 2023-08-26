import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Laroja",
  description: "Easy Shop is an e-commerce web application",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Creepster&family=Exo+2&family=Lobster&family=Oswald&family=Poppins&family=Roboto:ital@0;1&family=Rubik+Moonrocks&family=Signika+Negative&family=Sofia&family=Space+Grotesk&family=Tilt+Prism&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "Space Grotesk" }}>
        {children}
        </body>
    </html>
  );
};
export default RootLayout;
