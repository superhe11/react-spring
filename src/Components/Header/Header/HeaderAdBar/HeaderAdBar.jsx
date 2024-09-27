import React from 'react';
import styles from './headeradbar.module.css';

export const HeaderAdBar = () => {
    return (
        <div className={styles.header__ad_bar}>
            <div className={styles.header__ad_bar_wrapper}>
                <a
                    className={styles.header__ad_bar_link}
                    href="https://springone.io/?utm_source=spring-io-banner"
                >
                    SpringOne
                </a>
                2024 will be virtual and free to
                <a
                    className={styles.header__ad_bar_link}
                    href="https://go-vmware.broadcom.com/springone2024-reg/?utm_source=spring-io-banner"
                >
                    register!
                </a>
                <a
                    className={styles.header__ad_bar_link}
                    href="https://springone.io/schedule"
                >
                    View the schedule &gt;
                </a>
            </div>
        </div>
    );
};
