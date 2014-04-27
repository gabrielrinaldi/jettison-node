exports.get = function(request, response) {
    var queryString = "SELECT id, message, location.Lat latitude, location.Long longitude FROM drops WHERE location.STDistance(geography::STPointFromText('POINT(' + ? + ' ' + ? + ')', 4326)) <= ?"
    
    request.service.mssql.query(queryString, [request.query.longitude.toString(), request.query.latitude.toString(), 100], { 
          success: function(results) { 
                 request.respond(statusCodes.OK, results); 
          } 
     });
};
