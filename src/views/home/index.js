import React from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <Seo title={t`home.seo.title`} description={t`home.seo.description`} />
      <div className="container">
        <h1>aa</h1>
        <h1>aa</h1>
        <h1>aa</h1>
        <h1>aa</h1>
      </div>
    </>
  )
}
export default Home
