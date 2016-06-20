import client from "mariasql";
const mariaSQL = new client();
mariaSQL.connect ({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    db:'todo'
});

export default mariaSQL;
