function insert(item, user, request) {
    var queryString =   "INSERT INTO drops (message, picture, location, owner) " +
                        "VALUES ('" + item.message + "', " +
                        "'" + item.picture + "', " +
                        "geography::STPointFromText('POINT('" + item.latitute.toString() + "' '" + item.longitude.toString() + "')', 4326), " +
                        "'" + user.userId + "');"

    mssql.query(queryString, {
        success: function (results) {
            request.respond(200, results);

            return;
        },

        error: function (err) {
            console.log("Error in getgamesforuser : " + err)

            request.respond(500, "Error in getgamesforuser: " + err);

            return;
        }
    });
}
