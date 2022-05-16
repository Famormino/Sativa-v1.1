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
          <Link sx={styles.logo} to="home">
            <Image alt="Logo" src={FooterLogo} />
          </Link>
          <Flex as="nav" sx={styles.nav}>
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
      pb: ["40px", null, "40px"],
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

    copyright: {
      fontSize: [1, "13px"],
      width: "100%",
    },
  },
  nav: {
    mx: "auto",
    mb: "50px",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 3,
      fontWeight: "body",
      px: 2,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "text",
      },
    },
  },
  logo: {
    cursor: "pointer",
  },
};
