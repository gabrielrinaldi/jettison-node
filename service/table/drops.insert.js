function insert(item, user, request) {
    console.log("SQL: " + mssql);
    
    var ps = new sql.PreparedStatement();

    ps.input('message', sql.NVarChar(sql.MAX));
    ps.input('picture', sql.NVarChar(sql.MAX));
    ps.input('latitute', sql.NVarChar(sql.MAX));
    ps.input('longitude', sql.NVarChar(sql.MAX));
    ps.input('owner', sql.NVarChar(sql.MAX));

    ps.prepare("INSERT INTO drops (message, picture, location, owner) VALUES (@message, @picture, geography::STPointFromText('POINT(' + @latitute + ' ' + @longitude + ')', 4326), @owner)", function(err) {
        // ... error checks

        ps.execute({
                message: item.message,
                picture: item.picture,
                latitute: item.latitute.toString(),
                longitude: item.longitude.toString(),
                owner: item.owner
            }, function(error, results) {
                // ... error checks

                if (error) {
                    console.log("Error in getgamesforuser : " + error)

                    request.respond(500, "Error in inserting drop: " + error);
                } else {
                    console.log(results[0].value);

                    request.respond(200, results);
                }
        });
    });
}
