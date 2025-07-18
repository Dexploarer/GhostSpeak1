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
  getU64Decoder,
  getU64Encoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/kit';
import {
  getAuctionTypeDecoder,
  getAuctionTypeEncoder,
  type AuctionType,
  type AuctionTypeArgs,
} from '.';

export interface ServiceAuctionCreatedEvent {
  auction: Address;
  agent: Address;
  creator: Address;
  startingPrice: bigint;
  auctionType: AuctionType;
}

export interface ServiceAuctionCreatedEventArgs {
  auction: Address;
  agent: Address;
  creator: Address;
  startingPrice: number | bigint;
  auctionType: AuctionTypeArgs;
}

export function getServiceAuctionCreatedEventEncoder(): Encoder<ServiceAuctionCreatedEventArgs> {
  return getStructEncoder([
    ['auction', getAddressEncoder()],
    ['agent', getAddressEncoder()],
    ['creator', getAddressEncoder()],
    ['startingPrice', getU64Encoder()],
    ['auctionType', getAuctionTypeEncoder()],
  ]);
}

export function getServiceAuctionCreatedEventDecoder(): Decoder<ServiceAuctionCreatedEvent> {
  return getStructDecoder([
    ['auction', getAddressDecoder()],
    ['agent', getAddressDecoder()],
    ['creator', getAddressDecoder()],
    ['startingPrice', getU64Decoder()],
    ['auctionType', getAuctionTypeDecoder()],
  ]);
}

export function getServiceAuctionCreatedEventCodec(): Codec<
  ServiceAuctionCreatedEventArgs,
  ServiceAuctionCreatedEvent
> {
  return combineCodec(
    getServiceAuctionCreatedEventEncoder(),
    getServiceAuctionCreatedEventDecoder()
  );
}
