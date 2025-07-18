/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/kit';

export interface BiometricQuality {
  /** Minimum quality score */
  minimumQuality: number;
  /** Liveness detection required */
  livenessRequired: boolean;
  /** Anti-spoofing required */
  antiSpoofingRequired: boolean;
  /** Maximum false acceptance rate */
  maxFalseAcceptanceRate: number;
  /** Maximum false rejection rate */
  maxFalseRejectionRate: number;
}

export type BiometricQualityArgs = BiometricQuality;

export function getBiometricQualityEncoder(): Encoder<BiometricQualityArgs> {
  return getStructEncoder([
    ['minimumQuality', getU8Encoder()],
    ['livenessRequired', getBooleanEncoder()],
    ['antiSpoofingRequired', getBooleanEncoder()],
    ['maxFalseAcceptanceRate', getU8Encoder()],
    ['maxFalseRejectionRate', getU8Encoder()],
  ]);
}

export function getBiometricQualityDecoder(): Decoder<BiometricQuality> {
  return getStructDecoder([
    ['minimumQuality', getU8Decoder()],
    ['livenessRequired', getBooleanDecoder()],
    ['antiSpoofingRequired', getBooleanDecoder()],
    ['maxFalseAcceptanceRate', getU8Decoder()],
    ['maxFalseRejectionRate', getU8Decoder()],
  ]);
}

export function getBiometricQualityCodec(): Codec<BiometricQualityArgs, BiometricQuality> {
  return combineCodec(getBiometricQualityEncoder(), getBiometricQualityDecoder());
}