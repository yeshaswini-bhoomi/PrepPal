import Container from "@/components/Container";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex flex-col relative min-h-screen">
      {/* handler to store the user data */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <img
          src="/assets/img/bg.png"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>
      <div className="relative z-50 flex flex-col flex-grow">
        <Header />
        <Container className="flex-grow">
          <main className="flex-grow">
            <Outlet />
          </main>
        </Container>

        <Footer />
      </div>
    </div>
  );
};
