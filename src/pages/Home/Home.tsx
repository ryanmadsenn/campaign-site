import { Box } from "@chakra-ui/react";
import Hero from "./homeComponents/Hero";
import Pledges from "./homeComponents/Pledges";
import Experience from "./homeComponents/Experience";
import Footer from "./homeComponents/Footer";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Pledges />
      <Experience />
      <Footer />
    </Box>
  );
};

export default Home;
