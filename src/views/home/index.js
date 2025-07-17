import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Menu from "../../components/Menu/Menu"
import Autopilot from "./components/Autopilot/Autopilot"
import OurPartners from "./components/OurPartners/OurPartners"
import AIWave from "./components/AIWave/AIWave"
import ClinicsProblems from "./components/ClinicsProblems/ClinicsProblems"

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <Seo title={t`home.seo.title`} description={t`home.seo.description`} />
      <div className="container">
        <Menu t={t} />
        <Autopilot t={t} />
        <OurPartners t={t} />
        <AIWave t={t} />
        <ClinicsProblems t={t} />
      </div>
    </>
  )
}
export default Home
