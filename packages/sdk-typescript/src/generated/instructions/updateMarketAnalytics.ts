/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type ReadonlySignerAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
} from '@solana/kit';
import { GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const UPDATE_MARKET_ANALYTICS_DISCRIMINATOR = new Uint8Array([
  156, 13, 81, 78, 11, 3, 54, 178,
]);

export function getUpdateMarketAnalyticsDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(
    UPDATE_MARKET_ANALYTICS_DISCRIMINATOR
  );
}

export type UpdateMarketAnalyticsInstruction<
  TProgram extends string = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountMarketAnalytics extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountClock extends
    | string
    | IAccountMeta<string> = 'SysvarC1ock11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMarketAnalytics extends string
        ? WritableAccount<TAccountMarketAnalytics>
        : TAccountMarketAnalytics,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountClock extends string
        ? ReadonlyAccount<TAccountClock>
        : TAccountClock,
      ...TRemainingAccounts,
    ]
  >;

export interface UpdateMarketAnalyticsInstructionData {
  discriminator: ReadonlyUint8Array;
  volume: bigint;
  price: bigint;
}

export interface UpdateMarketAnalyticsInstructionDataArgs {
  volume: number | bigint;
  price: number | bigint;
}

export function getUpdateMarketAnalyticsInstructionDataEncoder(): Encoder<UpdateMarketAnalyticsInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['volume', getU64Encoder()],
      ['price', getU64Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: UPDATE_MARKET_ANALYTICS_DISCRIMINATOR,
    })
  );
}

export function getUpdateMarketAnalyticsInstructionDataDecoder(): Decoder<UpdateMarketAnalyticsInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['volume', getU64Decoder()],
    ['price', getU64Decoder()],
  ]);
}

export function getUpdateMarketAnalyticsInstructionDataCodec(): Codec<
  UpdateMarketAnalyticsInstructionDataArgs,
  UpdateMarketAnalyticsInstructionData
> {
  return combineCodec(
    getUpdateMarketAnalyticsInstructionDataEncoder(),
    getUpdateMarketAnalyticsInstructionDataDecoder()
  );
}

export interface UpdateMarketAnalyticsInput<
  TAccountMarketAnalytics extends string = string,
  TAccountAuthority extends string = string,
  TAccountClock extends string = string,
> {
  /** Market analytics account with canonical bump validation */
  marketAnalytics: Address<TAccountMarketAnalytics>;
  /** Enhanced authority verification */
  authority: TransactionSigner<TAccountAuthority>;
  /** Clock sysvar for timestamp validation */
  clock?: Address<TAccountClock>;
  volume: UpdateMarketAnalyticsInstructionDataArgs['volume'];
  price: UpdateMarketAnalyticsInstructionDataArgs['price'];
}

export function getUpdateMarketAnalyticsInstruction<
  TAccountMarketAnalytics extends string,
  TAccountAuthority extends string,
  TAccountClock extends string,
  TProgramAddress extends
    Address = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
>(
  input: UpdateMarketAnalyticsInput<
    TAccountMarketAnalytics,
    TAccountAuthority,
    TAccountClock
  >,
  config?: { programAddress?: TProgramAddress }
): UpdateMarketAnalyticsInstruction<
  TProgramAddress,
  TAccountMarketAnalytics,
  TAccountAuthority,
  TAccountClock
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    marketAnalytics: { value: input.marketAnalytics ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    clock: { value: input.clock ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.clock.value) {
    accounts.clock.value =
      'SysvarC1ock11111111111111111111111111111111' as Address<'SysvarC1ock11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.marketAnalytics),
      getAccountMeta(accounts.authority),
      getAccountMeta(accounts.clock),
    ],
    programAddress,
    data: getUpdateMarketAnalyticsInstructionDataEncoder().encode(
      args as UpdateMarketAnalyticsInstructionDataArgs
    ),
  } as UpdateMarketAnalyticsInstruction<
    TProgramAddress,
    TAccountMarketAnalytics,
    TAccountAuthority,
    TAccountClock
  >;

  return instruction;
}

export interface ParsedUpdateMarketAnalyticsInstruction<
  TProgram extends string = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> {
  programAddress: Address<TProgram>;
  accounts: {
    /** Market analytics account with canonical bump validation */
    marketAnalytics: TAccountMetas[0];
    /** Enhanced authority verification */
    authority: TAccountMetas[1];
    /** Clock sysvar for timestamp validation */
    clock: TAccountMetas[2];
  };
  data: UpdateMarketAnalyticsInstructionData;
}

export function parseUpdateMarketAnalyticsInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedUpdateMarketAnalyticsInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 3) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      marketAnalytics: getNextAccount(),
      authority: getNextAccount(),
      clock: getNextAccount(),
    },
    data: getUpdateMarketAnalyticsInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
