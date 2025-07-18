/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  addDecoderSizePrefix,
  addEncoderSizePrefix,
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getAddressEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getProgramDerivedAddress,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  getU8Decoder,
  getU8Encoder,
  getUtf8Decoder,
  getUtf8Encoder,
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
  expectAddress,
  expectSome,
  getAccountMetaFactory,
  type ResolvedAccount,
} from '../shared';

export const UPDATE_AGENT_DISCRIMINATOR = new Uint8Array([
  85, 2, 178, 9, 119, 139, 102, 164,
]);

export function getUpdateAgentDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(
    UPDATE_AGENT_DISCRIMINATOR
  );
}

export type UpdateAgentInstruction<
  TProgram extends string = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountAgentAccount extends string | IAccountMeta<string> = string,
  TAccountSigner extends string | IAccountMeta<string> = string,
  TAccountClock extends
    | string
    | IAccountMeta<string> = 'SysvarC1ock11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAgentAccount extends string
        ? WritableAccount<TAccountAgentAccount>
        : TAccountAgentAccount,
      TAccountSigner extends string
        ? WritableSignerAccount<TAccountSigner> &
            IAccountSignerMeta<TAccountSigner>
        : TAccountSigner,
      TAccountClock extends string
        ? ReadonlyAccount<TAccountClock>
        : TAccountClock,
      ...TRemainingAccounts,
    ]
  >;

export interface UpdateAgentInstructionData {
  discriminator: ReadonlyUint8Array;
  agentType: number;
  metadataUri: string;
  agentId: string;
}

export interface UpdateAgentInstructionDataArgs {
  agentType: number;
  metadataUri: string;
  agentId: string;
}

export function getUpdateAgentInstructionDataEncoder(): Encoder<UpdateAgentInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['agentType', getU8Encoder()],
      ['metadataUri', addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder())],
      ['agentId', addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder())],
    ]),
    (value) => ({ ...value, discriminator: UPDATE_AGENT_DISCRIMINATOR })
  );
}

export function getUpdateAgentInstructionDataDecoder(): Decoder<UpdateAgentInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['agentType', getU8Decoder()],
    ['metadataUri', addDecoderSizePrefix(getUtf8Decoder(), getU32Decoder())],
    ['agentId', addDecoderSizePrefix(getUtf8Decoder(), getU32Decoder())],
  ]);
}

export function getUpdateAgentInstructionDataCodec(): Codec<
  UpdateAgentInstructionDataArgs,
  UpdateAgentInstructionData
> {
  return combineCodec(
    getUpdateAgentInstructionDataEncoder(),
    getUpdateAgentInstructionDataDecoder()
  );
}

export interface UpdateAgentAsyncInput<
  TAccountAgentAccount extends string = string,
  TAccountSigner extends string = string,
  TAccountClock extends string = string,
> {
  /** Agent account with canonical PDA validation */
  agentAccount?: Address<TAccountAgentAccount>;
  /** Enhanced authority verification */
  signer: TransactionSigner<TAccountSigner>;
  /** Clock sysvar for rate limiting */
  clock?: Address<TAccountClock>;
  agentType: UpdateAgentInstructionDataArgs['agentType'];
  metadataUri: UpdateAgentInstructionDataArgs['metadataUri'];
  agentId: UpdateAgentInstructionDataArgs['agentId'];
}

export async function getUpdateAgentInstructionAsync<
  TAccountAgentAccount extends string,
  TAccountSigner extends string,
  TAccountClock extends string,
  TProgramAddress extends
    Address = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
>(
  input: UpdateAgentAsyncInput<
    TAccountAgentAccount,
    TAccountSigner,
    TAccountClock
  >,
  config?: { programAddress?: TProgramAddress }
): Promise<
  UpdateAgentInstruction<
    TProgramAddress,
    TAccountAgentAccount,
    TAccountSigner,
    TAccountClock
  >
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    agentAccount: { value: input.agentAccount ?? null, isWritable: true },
    signer: { value: input.signer ?? null, isWritable: true },
    clock: { value: input.clock ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.agentAccount.value) {
    accounts.agentAccount.value = await getProgramDerivedAddress({
      programAddress,
      seeds: [
        getBytesEncoder().encode(new Uint8Array([97, 103, 101, 110, 116])),
        getAddressEncoder().encode(expectAddress(accounts.signer.value)),
        addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder()).encode(
          expectSome(args.agentId)
        ),
      ],
    });
  }
  if (!accounts.clock.value) {
    accounts.clock.value =
      'SysvarC1ock11111111111111111111111111111111' as Address<'SysvarC1ock11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.agentAccount),
      getAccountMeta(accounts.signer),
      getAccountMeta(accounts.clock),
    ],
    programAddress,
    data: getUpdateAgentInstructionDataEncoder().encode(
      args as UpdateAgentInstructionDataArgs
    ),
  } as UpdateAgentInstruction<
    TProgramAddress,
    TAccountAgentAccount,
    TAccountSigner,
    TAccountClock
  >;

  return instruction;
}

export interface UpdateAgentInput<
  TAccountAgentAccount extends string = string,
  TAccountSigner extends string = string,
  TAccountClock extends string = string,
> {
  /** Agent account with canonical PDA validation */
  agentAccount: Address<TAccountAgentAccount>;
  /** Enhanced authority verification */
  signer: TransactionSigner<TAccountSigner>;
  /** Clock sysvar for rate limiting */
  clock?: Address<TAccountClock>;
  agentType: UpdateAgentInstructionDataArgs['agentType'];
  metadataUri: UpdateAgentInstructionDataArgs['metadataUri'];
  agentId: UpdateAgentInstructionDataArgs['agentId'];
}

export function getUpdateAgentInstruction<
  TAccountAgentAccount extends string,
  TAccountSigner extends string,
  TAccountClock extends string,
  TProgramAddress extends
    Address = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
>(
  input: UpdateAgentInput<TAccountAgentAccount, TAccountSigner, TAccountClock>,
  config?: { programAddress?: TProgramAddress }
): UpdateAgentInstruction<
  TProgramAddress,
  TAccountAgentAccount,
  TAccountSigner,
  TAccountClock
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    agentAccount: { value: input.agentAccount ?? null, isWritable: true },
    signer: { value: input.signer ?? null, isWritable: true },
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
      getAccountMeta(accounts.agentAccount),
      getAccountMeta(accounts.signer),
      getAccountMeta(accounts.clock),
    ],
    programAddress,
    data: getUpdateAgentInstructionDataEncoder().encode(
      args as UpdateAgentInstructionDataArgs
    ),
  } as UpdateAgentInstruction<
    TProgramAddress,
    TAccountAgentAccount,
    TAccountSigner,
    TAccountClock
  >;

  return instruction;
}

export interface ParsedUpdateAgentInstruction<
  TProgram extends string = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> {
  programAddress: Address<TProgram>;
  accounts: {
    /** Agent account with canonical PDA validation */
    agentAccount: TAccountMetas[0];
    /** Enhanced authority verification */
    signer: TAccountMetas[1];
    /** Clock sysvar for rate limiting */
    clock: TAccountMetas[2];
  };
  data: UpdateAgentInstructionData;
}

export function parseUpdateAgentInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedUpdateAgentInstruction<TProgram, TAccountMetas> {
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
      agentAccount: getNextAccount(),
      signer: getNextAccount(),
      clock: getNextAccount(),
    },
    data: getUpdateAgentInstructionDataDecoder().decode(instruction.data),
  };
}
