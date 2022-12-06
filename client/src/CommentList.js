export default function CommentList({ comments }) {
  const renderedComments = comments?.map((comment) => {
    const { status, id } = comment;
    let content;

    if (status === "approved") content = comment.content;

    if (status === "pending") content = "this comment is awaiting moderation";

    if (status === "rejected") content = "this comment has been rejected";
    return <li key={id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}
