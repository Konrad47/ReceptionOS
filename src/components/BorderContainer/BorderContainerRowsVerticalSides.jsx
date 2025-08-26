import React from "react"

export const BorderContainerRowsVerticalSides = ({ children, className }) => {
    return (
        <>
            <div className={`border-container-rows-vertical-sides ${className}`}>
                <svg
                    className="left-top"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                >
                    <path d="M7 1L1 1L1 7" stroke="#877B72" stroke-linecap="round" />
                </svg>
                <svg
                    className="left-bottom"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                >
                    <path d="M7 7L1 7L1 1" stroke="#877B72" stroke-linecap="round" />
                </svg>
                <svg
                    className="right-top"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                >
                    <path d="M1 1L7 1L7 7" stroke="#877B72" stroke-linecap="round" />
                </svg>
                <svg
                    className="right-bottom"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                >
                    <path d="M1 7L7 7L7 1" stroke="#877B72" stroke-linecap="round" />
                </svg>
                <svg
                    className="top desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 303 8"
                    fill="none"
                >
                    <path
                        opacity="0.3"
                        d="M1 1H58.5L89.5 7V1H302"
                        stroke="#877B72"
                        stroke-linecap="round"
                    />
                </svg>
                <svg
                    className="bottom desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 303 8"
                    fill="none"
                >
                    <path
                        opacity="0.3"
                        d="M302 1H229L198 7V1H1"
                        stroke="#877B72"
                        stroke-linecap="round"
                    />
                </svg>
                {children}
                <style jsx>{`
          .border-container-rows-vertical-sides {
            display: flex;
            flex-direction: column;
            position: relative;
            border: 1px solid #302c29;
            border-top: none;
            border-bottom: none;

            .top {
              position: absolute;
              top: -1px;
            }
            .bottom {
              position: absolute;
              bottom: -8px;
            }

            .left-top {
              position: absolute;
              top: -1px;
              left: -1px;
              z-index: 3;
            }
            .left-bottom {
              position: absolute;
              bottom: -1px;
              left: -1px;
              z-index: 3;
            }
            .right-top {
              position: absolute;
              top: -1px;
              right: -1px;
              z-index: 3;
            }
            .right-bottom {
              position: absolute;
              bottom: -1px;
              right: -1px;
              z-index: 3;
            }
          }
        `}</style>
            </div>
        </>
    )
}
