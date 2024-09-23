import React from 'react';


export const HeaderAdBar = () => {
    return (
        <div className="header__ad-bar">
            <div className="header__ad-bar-wrapper">
                <a
                    className="header__ad-bar-link"
                    href="https://springone.io/?utm_source=spring-io-banner"
                >
                    SpringOne
                </a>
                2024 will be virtual and free to 
                <a
                    className="header__ad-bar-link"
                    href="https://go-vmware.broadcom.com/springone2024-reg/?utm_source=spring-io-banner"
                >
                    register! 
                </a>
                <a
                    className="header__ad-bar-link"
                    href="https://springone.io/schedule"
                >
                    View the schedule &gt;
                </a>
            </div>
        </div>
    );
};
