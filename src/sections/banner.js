/** @jsx jsx */
import {jsx} from "theme-ui";
import {Container, Box, Heading, Text, Image, Button} from "theme-ui";
import BannerImg from "assets/banner-thumb.gif";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";
import LogoSativa from "assets/sativalogo.png";
import LogoFacebook from "assets/socialmedia/facebook.svg";
import LogoInstagram from "assets/socialmedia/instagram.svg";
import LogoTwitter from "assets/socialmedia/twitter.svg";
import LogoYoutube from "assets/socialmedia/youtube.svg";

export default function Banner() {
  return (
    <section id="home" sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            <Image alt="logo" src={LogoSativa} />
          </Heading>
          <Text as="p" variant="heroSecondary">
            Descubre unas cejas de impacto. Consigue unas cejas voluminosas y definidas. Es hora de
            brillar. Ven por tus #SativaBrows.
          </Text>
          <Button varian="primary">Comencemos juntos</Button>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image alt="banner" src={BannerImg} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        width: "80%",
        position: "relative",
        height: [2, "auto"],
      },
    },
  },
};
