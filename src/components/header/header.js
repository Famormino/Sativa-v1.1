/** @jsx jsx */
import {jsx, Container, Flex, Button} from "theme-ui";
import {keyframes} from "@emotion/core";
import {Link} from "react-scroll";
import Logo from "components/logo";
import LogoDark from "assets/logo.svg";

import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";

export default function Header({className}) {
  return (
    <header className={className} id="header" sx={styles.header}>
      <Container sx={styles.container}>
        <Logo src={LogoDark} sx={styles.logo} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              key={i}
              activeClass="active"
              duration={500}
              offset={50}
              smooth={true}
              spy={true}
              to={menuItem.path}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>
        <Button aria-label="Get Started" className="donate__btn" variant="secondary">
          <a
            href="https://wa.me/+34625941139?text=Hola Sativa, tengo la siguiente consulta para uds."
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Contáctanos{" "}
          </a>
        </Button>
        <MobileDrawer />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      "&:hover": {
        backgroundColor: "muted",
      },
      "&.active": {
        backgroundColor: "transparent",
      },
      a: {
        color: "primary",
        textDecoration: "none",
      },
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "primary",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: "50px",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 6,
      fontWeight: "body",
      px: 5,
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
};
