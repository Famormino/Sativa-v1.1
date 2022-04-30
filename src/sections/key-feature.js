/** @jsx jsx */
import {jsx} from "theme-ui";
import {Container, Grid} from "theme-ui";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

import SectionHeader from "../components/section-header";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Microblading",
    title: "Microblading",
    text: "Potencia tus cejas. Potencia tu belleza.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Formacion",
    title: "Formación",
    text: "Te depilamos hasta la cola.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Microblading",
    title: "Microblading",
    text: "Te hacemo la ceja guacho.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "no se",
    title: "Se me termino la inspiración",
    text: "Sarasa y más sarasa",
  },
];

export default function KeyFeature() {
  return (
    <section id="feature" sx={{variant: "section.keyFeature"}}>
      <Container>
        <SectionHeader
          slogan="alcanza la distinción con nuestra formación"
          title="Capacitaciones hechas a tu medida"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              alt={item.altText}
              src={item.imgSrc}
              text={item.text}
              title={item.title}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: ["35px 0", null, "40px 40px", "50px 60px", "30px", "50px 40px", "55px 90px"],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)", null, "repeat(4,1fr)"],
  },
};
