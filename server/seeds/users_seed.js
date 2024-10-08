import bcrypt from 'bcrypt';

export async function seed(knex) {
    await knex('users').del();
    const hashedPassword1 = await bcrypt.hash('QZ386547qz', 10);
    const hashedPassword2 =
        '$2b$10$pwwX596jd8r6yqc66OpCk.mI1vR4RTkvV/ATjMxIcbD33J5DmoHgC';

    await knex('users').insert([
        {
            id: 1,
            username: 'admin',
            password: hashedPassword1,
            first_name: 'Yaroslav',
            last_name: 'Yankevich',
            age: 19
        },
        {
            id: 2,
            username: 'admin2',
            password: hashedPassword2,
            first_name: 'Yaroslav',
            last_name: 'Yankevich',
            age: 29
        }
    ]);
}
