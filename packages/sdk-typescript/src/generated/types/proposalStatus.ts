/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getEnumDecoder,
  getEnumEncoder,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/kit';

/** Proposal execution status */
export enum ProposalStatus {
  Draft,
  Active,
  Passed,
  Failed,
  Executed,
  Cancelled,
  Expired,
}

export type ProposalStatusArgs = ProposalStatus;

export function getProposalStatusEncoder(): Encoder<ProposalStatusArgs> {
  return getEnumEncoder(ProposalStatus);
}

export function getProposalStatusDecoder(): Decoder<ProposalStatus> {
  return getEnumDecoder(ProposalStatus);
}

export function getProposalStatusCodec(): Codec<
  ProposalStatusArgs,
  ProposalStatus
> {
  return combineCodec(getProposalStatusEncoder(), getProposalStatusDecoder());
}
