"use strict";
class MultiFunctionPrinter {
    print(document) {
        console.log("The Machine is printing");
    }
    scan(document) {
        console.log("The Machine is scanning");
    }
    fax(document) {
        console.log("The Machine is sending a fax");
    }
}
class SimplePrinter {
    print(document) {
        console.log("The Machine is printing");
    }
}
class Admin {
    createPost(post) {
        console.log("Post created");
    }
    createComment(comment) {
        console.log("commented on post");
    }
    sharePost(post) {
        console.log("post shared");
    }
}
class RegularUser {
    createComment(comment) {
        console.log("commented on post");
    }
    sharePost(post) {
        console.log("post shared");
    }
}
