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

/** Violation severity levels */
export enum ViolationSeverity {
  Low,
  Medium,
  High,
  Critical,
}

export type ViolationSeverityArgs = ViolationSeverity;

export function getViolationSeverityEncoder(): Encoder<ViolationSeverityArgs> {
  return getEnumEncoder(ViolationSeverity);
}

export function getViolationSeverityDecoder(): Decoder<ViolationSeverity> {
  return getEnumDecoder(ViolationSeverity);
}

export function getViolationSeverityCodec(): Codec<
  ViolationSeverityArgs,
  ViolationSeverity
> {
  return combineCodec(
    getViolationSeverityEncoder(),
    getViolationSeverityDecoder()
  );
}
