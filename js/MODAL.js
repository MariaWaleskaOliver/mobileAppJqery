/*Here is where I handle the client actions and the states*/

var Clients = {
    insert: function (objEvent) {
        db.transaction(function (tx) {
            var sql = "INSERT INTO review(restaurantName, restaurantId, stateId,reviewerEmail,reviewerComments, hasRating,rating1, rating2,rating3) VALUES(?,?,?,?,?,?,?,?,?);";

            var options = [objEvent.restaurantName,objEvent.restaurantId,objEvent.stateId, objEvent.reviewerEmail, objEvent.reviewerComments, objEvent.hasRating,objEvent.rating1,objEvent.rating2,objEvent.rating3];

            function successTransaction() {
                console.info("Success: Insert transaction successfully");
            }

            tx.executeSql(sql, options, successTransaction, errorHandler);

        });
    },
    selectAll: function(options,callback){
        db.transaction(function (tx) {
            var sql  = "SELECT * FROM review;";
            tx.executeSql(sql, options, callback, errorHandler);
        });
    },
    select: function(options, callback){

        db.transaction(function (tx) {
            var sql  = "SELECT * from review WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        });
    },
    update: function (objEvent, id) {
        db.transaction(function (tx) {
            var sql = "UPDATE review SET restaurantName=?, restaurantId=? ,stateId=?, reviewerEmail=? ,reviewerComments=?, hasRating=?, rating1=?, rating2=?, rating3=? WHERE id=?;";
            var options = [objEvent.restaurantName, objEvent.restaurantId, objEvent.stateId, objEvent.reviewerEmail, objEvent.reviewerComments, objEvent.hasRating, objEvent.rating1, objEvent.rating2, objEvent.rating3, id];

            tx.executeSql(sql, options)
        });
    },
    delete: function (options) {
        var options = options;
        db.transaction(function (tx) {
            var sql  = "Delete from review WHERE id=?;";

            function successTransaction() {
                console.info("Success: Delete successfully");
            }
            tx.executeSql(sql, options, successTransaction, errorHandler);
        });
    }
};

var states = {
    selectAll: function (options, callback) {
        db.transaction(function (tx){
            var sql = "SELECT * FROM state;"
            tx.executeSql(sql, options,callback,errorHandler)
        });
    }
};

