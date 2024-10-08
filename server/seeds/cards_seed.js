export async function seed(knex) {
    await knex('cards').del();
    await knex('cards').insert([
        {
            id: 1,
            image_alt: 'Spring Boot Logo',
            image_src: 'http://localhost:5000/img/spring-boot.svg',
            heading: 'Spring Boot',
            description:
                'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.'
        },
        {
            id: 2,
            image_alt: 'Spring Framework Logo',
            image_src: 'http://localhost:5000/img/spring-framework.svg',
            heading: 'Spring Framework',
            description:
                'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
        },
        {
            id: 3,
            image_alt: 'Spring Data Logo',
            image_src: 'http://localhost:5000/img/spring-data.svg',
            heading: 'Spring Data',
            description:
                'Provides a consistent approach to data access - relational, non-relational, map-reduce, and beyond.'
        },
        {
            id: 4,
            image_alt: 'Spring Cloud Logo',
            image_src: 'http://localhost:5000/img/spring-cloud.svg',
            heading: 'Spring Cloud',
            description:
                'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'
        },
        {
            id: 5,
            image_alt: 'Spring Cloud Data Flow Logo',
            image_src: 'http://localhost:5000/img/spring-data-flow.svg',
            heading: 'Spring Cloud Data Flow',
            description:
                'Provides an orchestration service for composable data microservice applications on modern runtimes.'
        },
        {
            id: 6,
            image_alt: 'Spring Security Logo',
            image_src: 'http://localhost:5000/img/spring-security.svg',
            heading: 'Spring Security',
            description:
                'Protects your application with comprehensive and extensible authentication and authorization support.'
        }
    ]);
}
