import React from "react";

export default function App({children}) {
    return (
        <div className="root-app">
            <div className="page-container">{children}</div>
        </div>
    );
}
