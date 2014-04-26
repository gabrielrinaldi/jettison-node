function insert(item, user, request) {
    var ps = new mssql.PreparedStatement();

    ps.input('message', mssql.NVarChar(mssql.MAX));
    ps.input('picture', mssql.NVarChar(mssql.MAX));
    ps.input('latitute', mssql.NVarChar(mssql.MAX));
    ps.input('longitude', mssql.NVarChar(mssql.MAX));
    ps.input('owner', mssql.NVarChar(mssql.MAX));

    ps.prepare("INSERT INTO drops (message, picture, location, owner) VALUES (@message, @picture, geography::STPointFromText('POINT(' + @latitute + ' ' + @longitude + ')', 4326), @owner)", function(err) {
        // ... error checks
        console.log("Prepare OK");

        ps.execute({
                message: item.message,
                picture: item.picture,
                latitute: item.latitute.toString(),
                longitude: item.longitude.toString(),
                owner: item.owner
            }, function(error, results) {
                // ... error checks
                
                console.log("Execute OK");

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
