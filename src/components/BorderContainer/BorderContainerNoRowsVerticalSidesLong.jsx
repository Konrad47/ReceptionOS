import React from "react"

export const BorderContainerNoRowsVerticalSidesLong = ({
    children,
    className,
}) => {
    return (
        <>
            <div
                className={`border-container-no-rows-vertical-sides-long ${className}`}
            >
                <svg
                    className="long-top desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 962 8"
                    fill="none"
                >
                    <path
                        opacity="0.3"
                        d="M1 1H58.5L89.5 7V1H961"
                        stroke="#877B72"
                        stroke-linecap="round"
                    />
                </svg>
                <svg
                    className="long-bottom desktop"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 962 8"
                    fill="none"
                >
                    <path
                        opacity="0.3"
                        d="M961 1H229L198 7V1H1"
                        stroke="#877B72"
                        stroke-linecap="round"
                    />
                </svg>
                {children}
                <style jsx>{`
          .border-container-no-rows-vertical-sides-long {
            display: flex;
            flex-direction: column;
            position: relative;
            border: 1px solid #302c29;
            border-top: none;
            border-bottom: none;
            overflow: visible; 

            .long-top {
              position: absolute;
              top: -1px;
            }
            .long-bottom {
              position: absolute;
              bottom: -6px;
              z-index: 10
            }
          }
        `}</style>
            </div>
        </>
    )
}
