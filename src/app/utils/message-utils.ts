import {
  InboundMessage,
  LeaderDetailsMessage,
  PingMessage,
  PlayAgainPromptMessage,
  PleaseWaitMessage,
  QuestionDetailsMessage,
} from '../model/inbound-messages';

// *************************************
// * Message Creation Functions
// *************************************

export function createClientConnectionRequestString(name: string): string {
  return JSON.stringify({
    '@type': 'ClientConnectionRequestMessage',
    clientId: name,
  });
}

export function createPongMessageString(): string {
  return JSON.stringify({
    '@type': 'PongMessage',
  });
}

export function createStartGameMessage(numQuestionsArg: number): string {
  return JSON.stringify({
    '@type': 'StartGameMessage',
    numQuestions: numQuestionsArg,
  });
}

export function createChooseAnswerMessage(answerIndexArg: number): string {
  return JSON.stringify({
    '@type': 'ChooseAnswerMessage',
    answerIndex: answerIndexArg,
  });
}

export function createPlayAgainMessage(withSameSettingsArg: boolean): string {
  return JSON.stringify({
    '@type': 'PlayAgainMessage',
    withSameSettings: withSameSettingsArg,
  });
}

// *************************************
// * Message Deserialization Functions
// *************************************

export function deserializeMessage(message: string): InboundMessage {
  let obj = JSON.parse(message);
  let type: string = obj['@type'];

  if (!type) {
    throw `Message from server has no type. Raw message: ${message}`;
  }

  // The values for the switch statement must match the name of the message class on the server
  switch (type) {
    case 'LeaderDetailsMessage':
      return new LeaderDetailsMessage(
        obj.numQuestionsOptions,
        obj.defaultNumQuestionsIndex
      );
    case 'PingMessage':
      return new PingMessage();
    case 'PleaseWaitMessage':
      return new PleaseWaitMessage(obj.waitText);
    case 'ClientQuestionDetailsMessage':
      return new QuestionDetailsMessage(obj.questionText, obj.answerTexts);
    case 'PlayAgainPromptMessage':
      return new PlayAgainPromptMessage();
    default:
      throw `Message from server has unrecognized type: ${type}`;
  }
}
