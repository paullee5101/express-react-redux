'use strict';
export default function(app) {
    app.use('/users',require('./users.routes').default);
}   