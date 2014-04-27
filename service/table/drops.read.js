function read(query, user, request) {
    query.where({
        owner: user.userId
    });
    request.execute();
}
