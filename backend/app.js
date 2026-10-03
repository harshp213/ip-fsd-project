// MySQL Connection Configuration
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306, // Default MySQL port
    user: 'root', // Replace with your MySQL username
    password: 'password', // Replace with your MySQL password
    database: 'company'
});