import { Pool } from "pg";

const pool = new Pool({
    user: 'illan',
    host: 'localhost',
    database: 'tapago',
    password: 'bbteamo',
    port: 5432,
});

export default pool;