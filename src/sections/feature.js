/** @jsx jsx */
import {jsx} from "theme-ui";
import {Container, Grid} from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";

const data = [
  {
    id: 1,

    altText: "Fast Performance",
    title: "---Rápida salida",
    text: "Con una capacitación corta e intensiva, en el que se aboradaran todos los aspectos teoricos y prácticos del microblading",
  },
  {
    id: 2,

    altText: "Pro Subscription",
    title: "---Alta demanda",
    text: "El microblading es un tratamiento con muy alta demanda en la actualidad y se posiciona como el tratamiento de belleza más popular.",
  },
  {
    id: 3,

    altText: "Partnership deal",
    title: "---Equipo docente profesional",
    text: "Contarás con un equipo docente profesional en el área de la salud y de la salud estética. Con más de 5 años de experiencia en negocios de belleza femenina",
  },
  {
    id: 4,

    altText: "Customer Support",
    title: "---Capacitación personalizada",
    text: "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.",
  },
];

export default function Feature() {
  return (
    <section id="feature" sx={{variant: "section.feature"}}>
      <Container>
        <SectionHeader
          slogan={"capacítate en microblading"}
          title={"Adquiere las herramientas para transformarte en un verdadero especialista "}
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ["40px 0", null, "45px 30px", null, "60px 50px", "70px 50px", null, "80px 90px"],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
