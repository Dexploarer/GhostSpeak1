/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getStructDecoder,
  getStructEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/kit';
import {
  getMessageTypeDecoder,
  getMessageTypeEncoder,
  type MessageType,
  type MessageTypeArgs,
} from '.';

export interface MessageSentEvent {
  message: Address;
  channel: Address;
  sender: Address;
  messageType: MessageType;
}

export interface MessageSentEventArgs {
  message: Address;
  channel: Address;
  sender: Address;
  messageType: MessageTypeArgs;
}

export function getMessageSentEventEncoder(): Encoder<MessageSentEventArgs> {
  return getStructEncoder([
    ['message', getAddressEncoder()],
    ['channel', getAddressEncoder()],
    ['sender', getAddressEncoder()],
    ['messageType', getMessageTypeEncoder()],
  ]);
}

export function getMessageSentEventDecoder(): Decoder<MessageSentEvent> {
  return getStructDecoder([
    ['message', getAddressDecoder()],
    ['channel', getAddressDecoder()],
    ['sender', getAddressDecoder()],
    ['messageType', getMessageTypeDecoder()],
  ]);
}

export function getMessageSentEventCodec(): Codec<
  MessageSentEventArgs,
  MessageSentEvent
> {
  return combineCodec(
    getMessageSentEventEncoder(),
    getMessageSentEventDecoder()
  );
}
