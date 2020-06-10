import React from 'react';

export default function Layout({children}) {
    return (
        <div className="authentication-layout">
            <div className="authentication-page-container">{children}</div>
        </div>
    );
}
