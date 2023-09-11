"use strict";
class User {
    constructor(name, email) { }
}
class UserAuthentication {
    constructor(user) { }
    authenticate(password) { }
}
class BlogPost {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    createPost() { }
    updatePost() { }
    deletePost() { }
}
class BlogPostDisplay {
    constructor(blogPost) {
        this.blogPost = blogPost;
    }
    displayHTML() {
        return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
    }
}
