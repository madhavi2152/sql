const mysql = require("mysql2");
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
  `create table if not exists deliveries (
    match_id varchar(254),
    inning varchar(254),
    batting_team varchar(254),
    bowling_team varchar(254),
    \`over\` varchar(254),
    ball varchar(254),
    batsman varchar(254),
    non_striker varchar(254),
    bowler varchar(254),
    is_super_over varchar(254),
    wide_runs varchar(254),
    bye_runs varchar(254),
    legbye_runs varchar(254),
    noball_runs varchar(254),
    penalty_runs varchar(254),
    batsman_runs int,
    extra_runs varchar(254),
    total_runs varchar(254),
    player_disamisses varchar(254),
    dismissal_kind varchar(254),
    fielder varchar(254),
    key(match_id)
); `,
  function (err, results, fields) {
    console.log(results);
    console.log(fields);
    console.log(err);
  }
);
module.exports = pool;
