/** @jsx jsx */
import {jsx, Container, Box, Image} from "theme-ui";
import TextFeature from "components/text-feature";
import FeatureThumb from "assets/core-feature.gif";

const data = {
  subTitle: "microblading",
  title: "Potencia tu belleza natural por sólo $249.",
  description:
    "Con una técnica hiperrealista pelo a pelo aplicada por profesionales del tratamiento de la estética. Asombrosos resultados y larga duración. Obtén una mirada única.",
  btnName: "¡Anímate!",
  btnURL: "#",
};

export default function CoreFeature() {
  return (
    <section id="coreFeature" sx={{variant: "section.coreFeature"}}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            btnName={data.btnName}
            btnURL={data.btnURL}
            description={data.description}
            subTitle={data.subTitle}
            title={data.title}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image alt="Thumbnail" src={FeatureThumb} />
          <Box sx={styles.shapeBox} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
