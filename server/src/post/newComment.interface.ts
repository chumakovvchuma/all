export interface NewCommentPayload {
  postId: string;
  dateString: string; // limitation of Redis payload serialization
  content: string;
  nickname?: string;
}
