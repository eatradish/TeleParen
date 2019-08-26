export interface BotGetUpdates {
    ok: boolean;
    result: BotGetUpdatesResult[];
}

export interface BotSendMessage {
    ok: boolean;
    result: BotSendMessageResult;
}

export interface BotSendMessageResult {
    message_id: boolean;
    from: BotGetUpdatesResultMessageFrom;
    chat: BotGetUpdatesResultMessageChat;
    data: number;
    text: string;
}

export interface BotGetUpdatesResult {
    update_id: number;
    message?: BotGetUpdatesResultMessage;
    channel_post?: BotGetUpdatesResultChannelPost;
    edited_message?: {};
}

export interface BotGetUpdatesResultMessage {
    message_id: number;
    from: BotGetUpdatesResultMessageFrom;
    chat: BotGetUpdatesResultMessageChat;
    date: number;
    text: string;
}

export interface BotGetUpdatesResultMessageChat {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    type: string;
    title?: string;
}

export interface BotGetUpdatesResultMessageFrom {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name?: string;
    username: string;
    language_code?: string;
}

export interface BotGetUpdatesResultChannelPost {
    message_id: number;
    chat: BotGetUpdatesResultChannelPostChat;
    data: number;
    text: string;
}

export interface BotGetUpdatesResultChannelPostChat {
    id: number;
    title: string;
    username: string;
    type: string;
}