import React from "react"


const CompanyPage = () => {
    return(
        <div>
            <ul>
                { ["GS", "Morgan"].map((company, idx) => {
                    return <li key={idx}>{company}</li>
                }) }
            </ul>
        </div>
    );
}

export default CompanyPage;