/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/kit';
import {
  getMultisigConfigDecoder,
  getMultisigConfigEncoder,
  type MultisigConfig,
  type MultisigConfigArgs,
} from '.';

export interface MultisigConfigExport { data: MultisigConfig }

export interface MultisigConfigExportArgs { data: MultisigConfigArgs }

export function getMultisigConfigExportEncoder(): Encoder<MultisigConfigExportArgs> {
  return getStructEncoder([['data', getMultisigConfigEncoder()]]);
}

export function getMultisigConfigExportDecoder(): Decoder<MultisigConfigExport> {
  return getStructDecoder([['data', getMultisigConfigDecoder()]]);
}

export function getMultisigConfigExportCodec(): Codec<
  MultisigConfigExportArgs,
  MultisigConfigExport
> {
  return combineCodec(
    getMultisigConfigExportEncoder(),
    getMultisigConfigExportDecoder()
  );
}
