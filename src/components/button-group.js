/** @jsx jsx */
import {jsx, Box, Container, Flex} from "theme-ui";
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from "react-icons/io";

export default function ButtonGroup({next, previous}) {
  return (
    <Flex sx={{width: "100%"}}>
      <Container>
        <Box className="button__group" sx={styles.buttonGroup}>
          <button aria-label="Previous" onClick={previous}>
            <IoIosArrowRoundBack />
          </button>
          <button aria-label="Next" onClick={next}>
            <IoIosArrowRoundForward />
          </button>
        </Box>
      </Container>
    </Flex>
  );
}

const styles = {
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    mb: -4,
    button: {
      bg: "transparent",
      border: "0px solid",
      fontSize: 40,
      cursor: "pointer",
      px: "2px",
      color: "#BBC7D7",
      transition: "all 0.25s",
      "&:hover": {
        color: "text",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};
