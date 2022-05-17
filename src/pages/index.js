import React from "react";
import {ThemeProvider} from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";

import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";

export default function IndexPage() {
  return (
    <ThemeProvider
      href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@1,300&display=swap"
      rel="stylesheet"
      theme={theme}
    >
      <Layout>
        <SEO title="Sativa BCN" />
        <Banner />
        <CoreFeature />
        <ServiceSection />
        <TeamSection />
        <Feature />
        <Package />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
