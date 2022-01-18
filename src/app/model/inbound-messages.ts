// Inbound is relative to the client; these are IOutboundMessages relative to the server

export interface InboundMessage {
  type: string;
}

export class PingMessage implements InboundMessage {
  static readonly TYPE = 'PingMessage';
  readonly type = PingMessage.TYPE;

  constructor() {}
}

export class LeaderDetailsMessage implements InboundMessage {
  static readonly TYPE = 'LeaderDetailsMessage';
  readonly type = LeaderDetailsMessage.TYPE;

  constructor(
    readonly numQuestionsOptions: number[],
    readonly defaultNumQuestionsIndex: number
  ) {}
}

export class PleaseWaitMessage implements InboundMessage {
  static readonly TYPE = 'PleaseWaitMessage';
  readonly type = PleaseWaitMessage.TYPE;

  constructor(readonly waitText?: string) {}
}

export class QuestionDetailsMessage implements InboundMessage {
  static readonly TYPE = 'QuestionDetailsMessage';
  readonly type = QuestionDetailsMessage.TYPE;

  constructor(readonly questionText: string, readonly answerTexts: string[]) {}
}

export class PlayAgainPromptMessage implements InboundMessage {
  static readonly TYPE = 'PlayAgainPromptMessage';
  readonly type = PlayAgainPromptMessage.TYPE;

  constructor() {}
}
