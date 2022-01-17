// Inbound is relative to the client; these are IOutboundMessages relative to the server

export interface InboundMessage {
  type: string;
}

export class PingMessage implements InboundMessage {
  readonly type = 'PingMessage';

  constructor() {}
}

export class LeaderDetailsMessage implements InboundMessage {
  readonly type = 'LeaderDetailsMessage';

  constructor(
    readonly numQuestionsOptions: number[],
    readonly defaultNumQuestionsIndex: number
  ) {}
}

export class PleaseWaitMessage implements InboundMessage {
  readonly type = 'PleaseWaitMessage';

  constructor(readonly waitText?: string) {}
}

export class QuestionDetailsMessage implements InboundMessage {
  readonly type = 'QuestionDetailsMessage';

  constructor(readonly questionText: string, readonly answerTexts: string[]) {}
}

export class PlayAgainPromptMessage implements InboundMessage {
  readonly type = 'PlayAgainPromptMessage';

  constructor() {}
}
