import React from "react";

import "./style.css";

function SoonPage ({ sectionName }) {
    return (
        <section className="soon">
            <div className="texts">
                <h3>🚧</h3>
                <h2>La section {sectionName} est en construction !</h2>
                <p>Revenez dans quelques temps pour voir ce qu'elle cache.</p>
            </div>
        </section>
    );
}

export default SoonPage;