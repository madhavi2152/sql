const mysql = require("mysql2");

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  //password: "99592",
  password: "Amma@234",
  database: "ipl",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

pool.execute(
  ` CREATE TABLE IF NOT EXISTS \`match\` (
        id INT PRIMARY KEY,
        season INT,
        city VARCHAR(255),
        date DATE,
        team1 VARCHAR(255),
        team2 VARCHAR(255),
        toss_winner VARCHAR(255),
        toss_decision VARCHAR(50),
        result VARCHAR(50),
        dl_applied INT,
        winner VARCHAR(255),
        win_by_runs INT,
        win_by_wickets INT,
        player_of_match VARCHAR(255),
        venue VARCHAR(255),
        umpire1 VARCHAR(255),
        umpire2 VARCHAR(255),
        umpire3 VARCHAR(255)
      );
    `,
  function (err, results, fields) {
    console.log(results);
    console.log(fields);
    console.log(err);
  }
);

/*const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Amma@234",
  database: "ipl",
});

async function createTables() {
  try {
    const createDeliveriesTable = `
      CREATE TABLE IF NOT EXISTS "deliveries" (
        id INT AUTO_INCREMENT PRIMARY KEY,
        match_id int,
        inning int,
        batting_team varchar(255),
        bowling_team varchar(255),
        over int,
        ball int,
        batsman varchar(255),
        non_striker varchar(255),
        bowler varchar(255),
        is_super_over int,
        wide_runs int,
        bye_runs int,
        legbye_runs int
        noball_runs int,
        penalty_runs int,
        batsman_runs int,
        extra_runs int,
        total_runs int,
        player_dismissal varchar(255)
      )
    `;

    const createMatchesTable = `
      CREATE TABLE IF NOT EXISTS "matches" (
        id INT AUTO_INCREMENT PRIMARY KEY,
        delivery_id INT,
        match_name VARCHAR(255),
        FOREIGN KEY (delivery_id) REFERENCES deliveries(id)
      )
    `;

    await connection.execute(createDeliveriesTable);
    await connection.execute(createMatchesTable);
  } catch (err) {
    console.error("Error creating tables:", err);
  } finally {
    // Close the connection
    await connection.end();
  }
}

createTables()
  .then(() => {
    console.log("Tables created successfully!");
  })
  .catch((err) => console.error("Error creating tables:", err));
*/
module.exports = pool;
