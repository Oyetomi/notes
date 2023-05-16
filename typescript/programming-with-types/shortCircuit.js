"use strict";
function commentGateKeeper(comment, userId) {
    if (secondsSinceLastComment(userId) < 10 || (comment = ""))
        return false;
    postComment(comment, userId);
    return true;
}
//inexpensive check
function commentGatekeeper(comment, userId) {
    if (comment == "" || secondsSinceLastComment(userId) < 10)
        return false;
    postComment(comment, userId);
    return true;
}
