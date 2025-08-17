import React from "react"
import { AnalysisComponent } from "./styled.components";
import { BorderContainerTopRowsSides } from "../../../../components/BorderContainer/BorderContainerTopRowsSides";

const Analysis = ({ t }) => {

  return (
    <>
      <div className="container">
        <AnalysisComponent>
          <BorderContainerTopRowsSides className="analysis-container">

          </BorderContainerTopRowsSides>
        </AnalysisComponent>
      </div>
    </>
  )
}
export default Analysis;
