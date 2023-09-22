const {Sequelize} = require('sequelize');
const {HOST,USER,PASSWORD,DB,dialect} = require('../configs/databaseConfig');
const { CreateStudentModel } = require('../Model/studentsModel');


const sequelize = new Sequelize(DB, USER,PASSWORD, 
    {
        host: HOST,
        dialect: dialect
    }
    )

    // Taọ model Student 
    const Student = CreateStudentModel(sequelize)



    module.exports = {
        sequelize,
        Student
    }