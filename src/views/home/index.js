import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Menu from "../../components/Menu/Menu"
import Autopilot from "./components/Autopilot/Autopilot"
import OurPartners from "./components/OurPartners/OurPartners"
import AIWave from "./components/AIWave/AIWave"
import ClinicsProblems from "./components/ClinicsProblems/ClinicsProblems"
import StepByStep from "./components/StepByStep/StepByStep"
import Solution from "./components/Solution/Solution"
import ReadyFor from "./components/ReadyFor/ReadyFor"
import Problems from "./components/Problems/Problems"
import Progress from "./components/Progress/Progress"
import FindOut from "./components/FindOut/FindOut"
import WriteUs from "./components/WriteUs/WriteUs"

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
        <StepByStep t={t} />
        <Solution t={t} />
        <ReadyFor t={t} />
        <Problems t={t} />
        <Progress t={t} />
        <FindOut t={t} />
        <WriteUs t={t} />
      </div>
    </>
  )
}
export default Home
