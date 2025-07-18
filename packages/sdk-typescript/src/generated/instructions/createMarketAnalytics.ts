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
  getI64Decoder,
  getI64Encoder,
  getProgramDerivedAddress,
  getStructDecoder,
  getStructEncoder,
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
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from '@solana/kit';
import { GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS } from '../programs';
import {
  expectSome,
  getAccountMetaFactory,
  type ResolvedAccount,
} from '../shared';

export const CREATE_MARKET_ANALYTICS_DISCRIMINATOR = new Uint8Array([
  72, 76, 122, 193, 232, 239, 106, 81,
]);

export function getCreateMarketAnalyticsDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(
    CREATE_MARKET_ANALYTICS_DISCRIMINATOR
  );
}

export type CreateMarketAnalyticsInstruction<
  TProgram extends string = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountMarketAnalytics extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
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
        ? WritableSignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountClock extends string
        ? ReadonlyAccount<TAccountClock>
        : TAccountClock,
      ...TRemainingAccounts,
    ]
  >;

export interface CreateMarketAnalyticsInstructionData {
  discriminator: ReadonlyUint8Array;
  periodStart: bigint;
  periodEnd: bigint;
}

export interface CreateMarketAnalyticsInstructionDataArgs {
  periodStart: number | bigint;
  periodEnd: number | bigint;
}

export function getCreateMarketAnalyticsInstructionDataEncoder(): Encoder<CreateMarketAnalyticsInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['periodStart', getI64Encoder()],
      ['periodEnd', getI64Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: CREATE_MARKET_ANALYTICS_DISCRIMINATOR,
    })
  );
}

export function getCreateMarketAnalyticsInstructionDataDecoder(): Decoder<CreateMarketAnalyticsInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['periodStart', getI64Decoder()],
    ['periodEnd', getI64Decoder()],
  ]);
}

export function getCreateMarketAnalyticsInstructionDataCodec(): Codec<
  CreateMarketAnalyticsInstructionDataArgs,
  CreateMarketAnalyticsInstructionData
> {
  return combineCodec(
    getCreateMarketAnalyticsInstructionDataEncoder(),
    getCreateMarketAnalyticsInstructionDataDecoder()
  );
}

export interface CreateMarketAnalyticsAsyncInput<
  TAccountMarketAnalytics extends string = string,
  TAccountAuthority extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountClock extends string = string,
> {
  /** Market analytics account with enhanced PDA security */
  marketAnalytics?: Address<TAccountMarketAnalytics>;
  /** Enhanced authority verification - must be protocol admin */
  authority: TransactionSigner<TAccountAuthority>;
  /** System program for account creation */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Clock sysvar for timestamp validation */
  clock?: Address<TAccountClock>;
  periodStart: CreateMarketAnalyticsInstructionDataArgs['periodStart'];
  periodEnd: CreateMarketAnalyticsInstructionDataArgs['periodEnd'];
}

export async function getCreateMarketAnalyticsInstructionAsync<
  TAccountMarketAnalytics extends string,
  TAccountAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountClock extends string,
  TProgramAddress extends
    Address = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
>(
  input: CreateMarketAnalyticsAsyncInput<
    TAccountMarketAnalytics,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountClock
  >,
  config?: { programAddress?: TProgramAddress }
): Promise<
  CreateMarketAnalyticsInstruction<
    TProgramAddress,
    TAccountMarketAnalytics,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountClock
  >
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    marketAnalytics: { value: input.marketAnalytics ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    clock: { value: input.clock ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.marketAnalytics.value) {
    accounts.marketAnalytics.value = await getProgramDerivedAddress({
      programAddress,
      seeds: [
        getBytesEncoder().encode(
          new Uint8Array([
            109, 97, 114, 107, 101, 116, 95, 97, 110, 97, 108, 121, 116, 105,
            99, 115,
          ])
        ),
        getI64Encoder().encode(expectSome(args.periodStart)),
        getI64Encoder().encode(expectSome(args.periodEnd)),
      ],
    });
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.clock.value) {
    accounts.clock.value =
      'SysvarC1ock11111111111111111111111111111111' as Address<'SysvarC1ock11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.marketAnalytics),
      getAccountMeta(accounts.authority),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.clock),
    ],
    programAddress,
    data: getCreateMarketAnalyticsInstructionDataEncoder().encode(
      args as CreateMarketAnalyticsInstructionDataArgs
    ),
  } as CreateMarketAnalyticsInstruction<
    TProgramAddress,
    TAccountMarketAnalytics,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountClock
  >;

  return instruction;
}

export interface CreateMarketAnalyticsInput<
  TAccountMarketAnalytics extends string = string,
  TAccountAuthority extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountClock extends string = string,
> {
  /** Market analytics account with enhanced PDA security */
  marketAnalytics: Address<TAccountMarketAnalytics>;
  /** Enhanced authority verification - must be protocol admin */
  authority: TransactionSigner<TAccountAuthority>;
  /** System program for account creation */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Clock sysvar for timestamp validation */
  clock?: Address<TAccountClock>;
  periodStart: CreateMarketAnalyticsInstructionDataArgs['periodStart'];
  periodEnd: CreateMarketAnalyticsInstructionDataArgs['periodEnd'];
}

export function getCreateMarketAnalyticsInstruction<
  TAccountMarketAnalytics extends string,
  TAccountAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountClock extends string,
  TProgramAddress extends
    Address = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
>(
  input: CreateMarketAnalyticsInput<
    TAccountMarketAnalytics,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountClock
  >,
  config?: { programAddress?: TProgramAddress }
): CreateMarketAnalyticsInstruction<
  TProgramAddress,
  TAccountMarketAnalytics,
  TAccountAuthority,
  TAccountSystemProgram,
  TAccountClock
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    marketAnalytics: { value: input.marketAnalytics ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    clock: { value: input.clock ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.clock.value) {
    accounts.clock.value =
      'SysvarC1ock11111111111111111111111111111111' as Address<'SysvarC1ock11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.marketAnalytics),
      getAccountMeta(accounts.authority),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.clock),
    ],
    programAddress,
    data: getCreateMarketAnalyticsInstructionDataEncoder().encode(
      args as CreateMarketAnalyticsInstructionDataArgs
    ),
  } as CreateMarketAnalyticsInstruction<
    TProgramAddress,
    TAccountMarketAnalytics,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountClock
  >;

  return instruction;
}

export interface ParsedCreateMarketAnalyticsInstruction<
  TProgram extends string = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> {
  programAddress: Address<TProgram>;
  accounts: {
    /** Market analytics account with enhanced PDA security */
    marketAnalytics: TAccountMetas[0];
    /** Enhanced authority verification - must be protocol admin */
    authority: TAccountMetas[1];
    /** System program for account creation */
    systemProgram: TAccountMetas[2];
    /** Clock sysvar for timestamp validation */
    clock: TAccountMetas[3];
  };
  data: CreateMarketAnalyticsInstructionData;
}

export function parseCreateMarketAnalyticsInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateMarketAnalyticsInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 4) {
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
      systemProgram: getNextAccount(),
      clock: getNextAccount(),
    },
    data: getCreateMarketAnalyticsInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
