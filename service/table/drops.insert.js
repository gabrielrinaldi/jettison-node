function insert(item, user, request) {
    var queryString = "INSERT INTO drops (message, picture, location, owner) VALUES (" + item.message + ", " + item.picture + ", geography::STPointFromText('POINT(' + " + item.longitude.toString() + " + ' ' + " + item.latitude.toString() + " + ')', 4326), " + user.userId + ")";
    
    mssql.query(queryString, {
        success: function (results) {
            request.respond(200, results);

            return;
        },

        error: function (error) {
            console.log("Error inserting drop: " + error)

            request.respond(500, "Error inserting drop: " + error);

            return;
        }
    });
}