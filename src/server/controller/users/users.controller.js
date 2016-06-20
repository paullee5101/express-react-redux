'use strict';
import db from '../../database';

class Users {
    constructor() {
        
    }

    getUsersList(req, res) {
        db.query('select * from users' ,function(err, row){
            if(err) {
                throw err;
            }
            res.json(row);
        
        });
    }

    getUsersInfo(req, res) {
        db.query('select * from users where user_id = '+req.params.user_id, function (err, row){
            if(err){
                throw err;
            }
            res.json(row);
        });
    }

    createUser(req,res) {
        var param =  req.body;
        
        var sql  = 'INSERT INTO users SET ';
            sql += 'user_id = "'+param.user_id+'", '; 
            sql += 'full_name = "'+param.full_name+'", ';
            sql += 'dob = "'+param.dob+'", ';
            sql += 'gender = "'+param.gender+'" ';
            
            console.log(sql);
            
        db.query(sql, function (err, row){
            if(err) {
                return res.status(400).json(err);
            }
            res.json({
                message:"done"
            });
        });
    }
}

export default Users;