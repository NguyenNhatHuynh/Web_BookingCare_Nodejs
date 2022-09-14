const { Sequelize } = require('sequelize');

//Option 2: Passing parameters seprately (other dialects)
const sequelize = new Sequelize('nicky_project_bookingcare', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});


let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connect has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to the database: ', error);
    }
}

module.exports = connectDB;