export type Poll = {
  "poll_id": string;
  "poll_type": 0 | 1;
  "creator_id": string;
  "option_count": number;
  "channel_id": string;
  "message_id": string;
  "last_updated": number;
};

export type Vote = {
  "poll_id": string;
  "user_id": string;
  "chosen_option": number;
};
