import React from "react"


const PlacementofficePage = () => {
    return(
        <div>
            <ul>
                { ["sir", "madam"].map((placementoffice, idx) => {
                    return <li key={idx}>{placementoffice}</li>
                }) }
            </ul>
        </div>
    );
}

export default PlacementofficePage;