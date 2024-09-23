import springBootLogo from '../../../img/spring-boot.svg';
import springFrameworkLogo from '../../../img/spring-framework.svg';
import springDataLogo from '../../../img/spring-data.svg';
import springCloudLogo from '../../../img/spring-cloud.svg';
import springDataFlowLogo from '../../../img/spring-data-flow.svg';
import springSecurityLogo from '../../../img/spring-security.svg';

export const CARDS = [
    {
        id: 1,
        card: {
            cardClass: 'main__card',
            image: {
                imageClass: 'main__card-image',
                alt: 'Spring Boot Logo',
                src: springBootLogo
            },
            text: {
                heading: 'Spring Boot',
                description:
                    'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.'
            }
        }
    },
    {
        id: 2,
        card: {
            cardClass: 'main__card',
            image: {
                imageClass: 'main__card-image',
                alt: 'Spring Framework Logo',
                src: springFrameworkLogo
            },
            text: {
                heading: 'Spring Framework',
                description:
                    'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
            }
        }
    },
    {
        id: 3,
        card: {
            cardClass: 'main__card',
            image: {
                imageClass: 'main__card-image',
                alt: 'Spring Data Logo',
                src: springDataLogo
            },
            text: {
                heading: 'Spring Data',
                description:
                    'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.'
            }
        }
    },
    {
        id: 4,
        card: {
            cardClass: 'main__card',
            image: {
                imageClass: 'main__card-image',
                alt: 'Spring Cloud Logo',
                src: springCloudLogo
            },
            text: {
                heading: 'Spring Cloud',
                description:
                    'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'
            }
        }
    },
    {
        id: 5,
        card: {
            cardClass: 'main__card',
            image: {
                imageClass: 'main__card-image',
                alt: 'Spring Cloud Data Flow Logo',
                src: springDataFlowLogo
            },
            text: {
                heading: 'Spring Cloud Data Flow',
                description:
                    'Provides an orchestration service for composable data microservice applications on modern runtimes.'
            }
        }
    },
    {
        id: 6,
        card: {
            cardClass: 'main__card',
            image: {
                imageClass: 'main__card-image',
                alt: 'Spring Security Logo',
                src: springSecurityLogo
            },
            text: {
                heading: 'Spring Security',
                description:
                    'Protects your application with comprehensive and extensible authentication and authorization support.'
            }
        }
    }
];
