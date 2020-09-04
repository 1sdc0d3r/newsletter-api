const db = require("../database-config");

module.exports = {
    checkExistingEmails,
    insert,
    getEmails,
    remove
}

function insert(email) {
    return db("Email").insert({
        email
    })
}

function getEmails() {
    return db("Email").select("*")
}

function checkExistingEmails(email) {
    return db('Email').select('email').where({
        email
    })
}

function remove(email) {
    return db("Email").where({
        email
    }).del();
}
