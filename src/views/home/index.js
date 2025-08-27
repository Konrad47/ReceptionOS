import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Menu from "../../components/Menu/Menu"
import Autopilot from "./components/Autopilot/Autopilot"
import AIWave from "./components/AIWave/AIWave"
import WriteUs from "./components/WriteUs/WriteUs"
import Footer from "../../components/Footer/Footer"
import PriceList from "./components/PriceList/PriceList"
import AboutUs from "./components/AboutUs/AboutUs"
import CaseStudy from "./components/CaseStudy/CaseStudy"
import Analysis from "./components/Analysis/Analysis"
import PartnersAboutUs from "./components/PartnersAboutUs/PartnersAboutUs"
import Compare from "./components/Compare/Compare"
import EliminateProblems from "./components/EliminateProblems/EliminateProblems"
import HowItWorks from "./components/HowItWorks/HowItWorks"
import OurPartners from "./components/OurPartners/OurPartners"

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <Seo title={t`home.seo.title`} description={t`home.seo.description`} />
      {document && (
        <>
          <Menu t={t} />
          <Autopilot t={t} />
          <OurPartners t={t} />
          <AIWave t={t} />
          {/* <HowItWorks t={t} /> */}
          <EliminateProblems t={t} />
          <Compare t={t} />
          <PartnersAboutUs t={t} />
          <Analysis t={t} />
          <CaseStudy t={t} />
          <AboutUs t={t} />
          <PriceList t={t} />
          <WriteUs t={t} />
          <Footer t={t} />
        </>
      )}
    </>
  )
}
export default Home
