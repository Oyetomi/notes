interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
  print(document: Document) {
    console.log("The Machine is printing");
  }

  scan(document: Document) {
    console.log("The Machine is scanning");
  }

  fax(document: Document) {
    console.log("The Machine is sending a fax");
  }
}

class SimplePrinter implements Printer {
  print(document: Document) {
    console.log("The Machine is printing");
  }
}

interface Post {
  title: string;
  content: string;
}

interface Comment {
  title: string;
  content: string;
}

interface PostCreator {
  createPost(post: Post): void;
}

interface CommentCreator {
  createComment(comment: Comment): void;
}

interface PostSharer {
  sharePost(post: Post): void;
}

class Admin implements PostCreator, CommentCreator, PostSharer {
  createPost(post: Post) {
    console.log("Post created");
  }

  createComment(comment: Comment) {
    console.log("commented on post");
  }

  sharePost(post: Post) {
    console.log("post shared");
  }
}

class RegularUser implements CommentCreator, PostSharer {
  createComment(comment: Comment) {
    console.log("commented on post");
  }

  sharePost(post: Post) {
    console.log("post shared");
  }
}
