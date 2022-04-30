import React, {useState} from "react";
import {Box} from "theme-ui";
import {Scrollbars} from "react-custom-scrollbars";
import Drawer from "components/drawer";
import {IoMdClose, IoMdMenu} from "react-icons/io";
import {Link} from "react-scroll";
import {FaFacebookF, FaTwitter, FaGithubAlt, FaDribbble} from "react-icons/fa";

import menuItems from "./header.data";

const social = [
  {
    path: "/",
    icon: <FaFacebookF />,
  },
  {
    path: "/",
    icon: <FaTwitter />,
  },
  {
    path: "/",
    icon: <FaGithubAlt />,
  },
  {
    path: "/",
    icon: <FaDribbble />,
  },
];

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer
      closeBtnStyle={styles.close}
      closeButton={<IoMdClose color="#000000" size="24px" />}
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      drawerStyle={styles.drawer}
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen((prevState) => !prevState)}
      width="320px"
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {menuItems.map((menuItem, i) => (
              <Link
                key={i}
                activeClass="active"
                duration={500}
                offset={-70}
                smooth={true}
                spy={true}
                to={menuItem.path}
              >
                {menuItem.label}
              </Link>
            ))}
          </Box>
          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map((socialItem, i) => (
                <Box key={i} as="span" sx={styles.social.icon}>
                  <Link to={socialItem.path}>{socialItem.icon}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
}

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",

    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },

  drawer: {
    width: "100%",
    height: "100%",
    backgroundColor: "dark",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "100px",
    pb: "40px",
    px: "30px",
    background: "#000",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",

    a: {
      fontSize: "16px",
      fontWeight: "500",
      color: "text_white",
      py: "15px",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
      transition: "all 0.25s",
      "&:hover": {
        color: "secondary",
      },
      "&.active": {
        color: "secondary",
      },
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 14,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0",
      },
      "&:hover": {
        color: "secondary",
      },
    },
  },

  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
  },
};
