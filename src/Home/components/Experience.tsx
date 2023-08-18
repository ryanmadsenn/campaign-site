import { Heading, Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperContent from "./SwiperContent";
import "swiper/css";
import "swiper/css/navigation";

const Experience = () => {
  return (
    <Box py="100px" maxW="1200px" m="0 auto">
      <Swiper modules={[Navigation]} navigation slidesPerView={1}>
        <SwiperSlide>
          <SwiperContent
            title="In Government, Experience Matters, and I've Got It"
            body="With over 14 years of experience on the City Planning Commission,
              including 4 as chairman, I understand the importance of community
              input and the need to balance competing interests. I have a proven
              track record of working with community members, developers, and
              city staff to find solutions that work for everyone."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent
            title="Support Our Police, Protect Our Children"
            body="As a city council candidate, I prioritize neighborhood safety, children’s well-being, and traditional values. I’ll support strong law enforcement, effective safety measures, and ample resources for police and emergency services. Let’s create secure neighborhoods where children can thrive."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent
            title="Let's Maintain Our City Parks and Library"
            body="As your city councilor, I'll strive to maintain a balance between essential services and resource allocation for our city’s parks and library. Parks provide green spaces for community bonding, while the library promotes education and growth. My goal is to uphold these assets and spend taxpayer money wisely for long-term sustainability."
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Experience;
