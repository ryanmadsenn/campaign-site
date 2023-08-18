import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Pledges from "./components/Pledges";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const Home = () => {
  // bg="linear-gradient(135deg, #001f71, #9a1728)"
  return (
    <Box>
      <Header />
      <Hero />
      <Pledges />
      <Experience />
      <Footer />
    </Box>
  );
};

export default Home;
