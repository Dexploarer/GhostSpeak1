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

/** Report status */
export enum ReportStatus {
  Draft,
  Generated,
  Reviewed,
  Approved,
  Submitted,
  Acknowledged,
  Rejected,
}

export type ReportStatusArgs = ReportStatus;

export function getReportStatusEncoder(): Encoder<ReportStatusArgs> {
  return getEnumEncoder(ReportStatus);
}

export function getReportStatusDecoder(): Decoder<ReportStatus> {
  return getEnumDecoder(ReportStatus);
}

export function getReportStatusCodec(): Codec<ReportStatusArgs, ReportStatus> {
  return combineCodec(getReportStatusEncoder(), getReportStatusDecoder());
}
