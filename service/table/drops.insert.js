function insert(item, user, request) {
    var queryString = "INSERT INTO drops (message, picture, location, owner) VALUES (?, ?, geography::STPointFromText('POINT(' + ? + ' ' + ? + ')', 4326), ?)";
    mssql.query(queryString, [item.message, item.picture, item.longitude.toString(), item.latitude.toString(), user.userId], {
        success: function() {
            request.respond(statusCodes.OK, {});
        }
    });
}