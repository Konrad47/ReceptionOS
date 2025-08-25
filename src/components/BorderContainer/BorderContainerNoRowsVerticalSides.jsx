import React from "react"

export const BorderContainerNoRowsVerticalSides = ({ children, className }) => {
    return (
        <>
            <div className={`border-container-no-rows-vertical-sides ${className}`}>
                <svg
                    className="top desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 343 8"
                    fill="none"
                >
                    <path
                        opacity="0.3"
                        d="M1 1.00244H58.5L89.5 7.00244V1.00244H341.985"
                        stroke="#877B72"
                        stroke-linecap="round"
                    />
                </svg>
                <svg
                    className="bottom desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 343 8"
                    fill="none"
                >
                    <path
                        opacity="0.3"
                        d="M1 0.536865H58.5L89.5 6.53687V0.536865H341.985"
                        stroke="#877B72"
                        stroke-linecap="round"
                    />
                </svg>
                {children}
                <style jsx>{`
          .border-container-no-rows-vertical-sides {
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
              bottom: -10px;
            }
          }
        `}</style>
            </div>
        </>
    )
}
