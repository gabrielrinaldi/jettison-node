function insert(item, user, request) {
    console.log("About to insert:", item);
    
    item.owner = user.userId;
    request.execute();
}
