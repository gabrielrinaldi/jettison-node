function insert(item, user, request) {
    var queryString = "INSERT INTO drops (message, picture, location, owner) VALUES (?, ?, geography::STPointFromText('POINT(' + ? + ' ' + ? + ')', 4326), ?)";
    
    request.service.mssql.query(queryString, 
        [item.message, item.picture, item.longitude.toString(), item.latitude.toString(), user.userId], 
        {
            success: function (results) {
                request.respond(200, results);

                return;
            },

            error: function (error) {
                console.log("Error inserting drop: " + error)

                request.respond(500, "Error inserting drop: " + error);

                return;
            }
        }
    );
}