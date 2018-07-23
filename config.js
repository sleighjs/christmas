require('dotenv').config();

module.exports = {
    server: {
        port: process.env.SERVER_PORT || 8000
    },

    app: {
        name: 'Sleigh'
    }
};