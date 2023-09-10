import {
  Flex,
  Image,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useSetAtom } from "jotai";
import { aboutMeOpenAtom } from "../pages/Home/homeComponents/Hero";
import TextSlider from "./TextSlider";
import DesktopNavButtons from "./DesktopNavButtons";
import MobileNavDrawer from "./MobileNavDrawer";
import MailCheckModal from "./MailCheckModal";
import YardSignRequestModal from "./YardSignRequestModal";

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const {
    isOpen: mailModalIsOpen,
    onOpen: onMailModalOpen,
    onClose: onMailModalClose,
  } = useDisclosure();
  const {
    isOpen: yardSignRequestIsOpen,
    onOpen: onYardSignRequestOpen,
    onClose: onYardSignRequestClose,
  } = useDisclosure();
  const {
    isOpen: drawerIsOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const setAboutMeOpen = useSetAtom(aboutMeOpenAtom);

  return (
    <>
      <TextSlider
        items={[
          "Representative Stephanie Barnard, 8th District",
          "Terry Christensen, Richland Mayor",
          "Jerome Delvin, Benton County Commissioner",
          "Benton County Republican Party",
          "Bill McKay, Kennewick Mayor",
          "Phil Lemley, Former Richland City Councilman",
          "Home Builders Association of Tri-Cities & Walla Walla",
          "Tri-City Association of Realtors",
        ]}
        animationDuration={20}
      />
      <Flex
        bg="#001f71"
        color="white"
        justifyContent="space-between"
        alignItems="center"
        p="10px"
      >
        <Image
          src="images/sign-logo.png"
          alt="Kent Madsen for City Council Logo"
          maxH="50px"
        />
        {isMobile ? (
          <>
            <HamburgerIcon boxSize="35px" onClick={onDrawerOpen} />
            <MobileNavDrawer
              isOpen={drawerIsOpen}
              onClose={onDrawerClose}
              onMailModalOpen={onMailModalOpen}
              onYardSignRequestOpen={onYardSignRequestOpen}
            />
          </>
        ) : (
          <DesktopNavButtons
            setAboutMeOpen={setAboutMeOpen}
            onMailModalOpen={onMailModalOpen}
            onYardSignRequestOpen={onYardSignRequestOpen}
          />
        )}
      </Flex>
      <MailCheckModal isOpen={mailModalIsOpen} onClose={onMailModalClose} />
      <YardSignRequestModal
        isOpen={yardSignRequestIsOpen}
        onClose={onYardSignRequestClose}
      />
    </>
  );
};

export default Header;
