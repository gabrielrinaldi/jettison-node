exports.get = function(request, response) {
    var queryString = "DECLARE @g geography = geography::STPointFromText('POINT(' + ? + ' ' + ? + ')', 4326); SELECT id, message, location.Lat latitude, location.Long longitude FROM drops WHERE location.STDistance(@g) <= ? ORDER BY SpatialLocation.STDistance(@g);"
    
    request.service.mssql.query(queryString, [request.query.longitude.toString(), request.query.latitude.toString(), 1000], { 
          success: function(results) { 
                 request.respond(statusCodes.OK, results); 
          } 
     });
};
