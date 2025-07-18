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
  getI64Decoder,
  getI64Encoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/kit';

export interface WorkOrderCreatedEvent {
  workOrder: Address;
  client: Address;
  provider: Address;
  amount: bigint;
  timestamp: bigint;
}

export interface WorkOrderCreatedEventArgs {
  workOrder: Address;
  client: Address;
  provider: Address;
  amount: number | bigint;
  timestamp: number | bigint;
}

export function getWorkOrderCreatedEventEncoder(): Encoder<WorkOrderCreatedEventArgs> {
  return getStructEncoder([
    ['workOrder', getAddressEncoder()],
    ['client', getAddressEncoder()],
    ['provider', getAddressEncoder()],
    ['amount', getU64Encoder()],
    ['timestamp', getI64Encoder()],
  ]);
}

export function getWorkOrderCreatedEventDecoder(): Decoder<WorkOrderCreatedEvent> {
  return getStructDecoder([
    ['workOrder', getAddressDecoder()],
    ['client', getAddressDecoder()],
    ['provider', getAddressDecoder()],
    ['amount', getU64Decoder()],
    ['timestamp', getI64Decoder()],
  ]);
}

export function getWorkOrderCreatedEventCodec(): Codec<
  WorkOrderCreatedEventArgs,
  WorkOrderCreatedEvent
> {
  return combineCodec(
    getWorkOrderCreatedEventEncoder(),
    getWorkOrderCreatedEventDecoder()
  );
}
