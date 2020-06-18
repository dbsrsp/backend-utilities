const knex = require('knex');



module.exports = (knex) => {
  return knex({
    client: 'mysql',
    connection: {
      database: 'service_driver',
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      timezone: 'UTC',
    },
  });
};
