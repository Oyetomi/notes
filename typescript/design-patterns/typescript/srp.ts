class User {
  constructor(name: string, email: string) {}
}

class UserAuthentication {
  constructor(user: User) {}

  authenticate(password: string) {}
}

class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  createPost() {}

  updatePost() {}

  deletePost() {}
}

class BlogPostDisplay {
  constructor(public blogPost: BlogPost) {}

  displayHTML() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
  }
}
