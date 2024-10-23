import "./Global.css";

import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import AuthWrapper from "@/Components/AuthWrapper/AuthWrapper";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthWrapper>
          <Header />
          {children}
          <Footer />
        </AuthWrapper>
      </body>
    </html>
  );
}
