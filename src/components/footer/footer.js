/** @jsx jsx */
import {jsx, Box, Container, Image, Text, Flex} from "theme-ui";
import {Link} from "react-scroll";
import FooterLogo from "assets/sativalogo.png";

import data from "./../header/header.data";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link to="home">
            <Image alt="Logo" src={FooterLogo} />
          </Link>
          <Flex as="nav" sx={styles.footer.menus}>
            {data.map((item, i) => (
              <Link
                key={i}
                activeClass="active"
                duration={500}
                offset={50}
                smooth={true}
                spy={true}
                to={item.path}
              >
                {item.label}
              </Link>
            ))}
          </Flex>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} Startplace
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column",
    },
    src: {
      width: "10%",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
};
