// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '70.32.23.16',
      user: 'bluesmok',
      password: process.env.DB_PASS,
      database: 'bluesmok_newsletter'
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/testing.sqlite3"
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      }
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: '70.32.23.16',
      user: 'bluesmok',
      password: process.env.DB_PASS,
      database: 'bluesmok_newsletter'
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    // client: 'sqlite3',
    // connection: {
    //   filename: './database.sqlite3'
    // },
    // migrations: {
    //   directory: "./database/migrations"
    // },
    // seeds: {
    //   directory: "./database/seeds"
    // },
  },
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
};
