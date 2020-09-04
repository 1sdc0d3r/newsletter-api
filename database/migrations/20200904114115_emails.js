exports.up = function (knex) {
    return knex.schema.createTable("Email", (tbl) => {
        tbl.increments("id").primary();
        tbl.string("email").notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Email")
};
