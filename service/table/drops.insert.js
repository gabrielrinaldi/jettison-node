function insert(item, user, request) {
    var queryString = "INSERT INTO drops (message, location, owner) VALUES (?, ?, geography::STPointFromText('POINT(' + ? + ' ' + ? + ')', 4326), ?)";
    mssql.query(queryString, [item.message, item.longitude, item.latitude, user.userId], {
        success: function() {
            request.respond(statusCodes.OK, {});
        }
    });
}