declare function secondsSinceLastComment(userId: string): number;
declare function postComment(comment: string, userId: string): void;

function commentGateKeeper(comment: string, userId: string): boolean {
  if (secondsSinceLastComment(userId) < 10 || (comment = "")) return false;
  postComment(comment, userId);
  return true;
}

//inexpensive check
function commentGatekeeper(comment: string, userId: string): boolean {
  if (comment == "" || secondsSinceLastComment(userId) < 10) return false;
  postComment(comment, userId);
  return true;
}
