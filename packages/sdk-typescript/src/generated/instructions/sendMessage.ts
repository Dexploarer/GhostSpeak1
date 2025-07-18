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
  getBooleanDecoder,
  getBooleanEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
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
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';
import {
  getMessageTypeDecoder,
  getMessageTypeEncoder,
  type MessageType,
  type MessageTypeArgs,
} from '../types';

export const SEND_MESSAGE_DISCRIMINATOR = new Uint8Array([
  57, 40, 34, 178, 189, 10, 65, 26,
]);

export function getSendMessageDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(
    SEND_MESSAGE_DISCRIMINATOR
  );
}

export type SendMessageInstruction<
  TProgram extends string = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountMessage extends string | IAccountMeta<string> = string,
  TAccountChannel extends string | IAccountMeta<string> = string,
  TAccountSender extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMessage extends string
        ? WritableAccount<TAccountMessage>
        : TAccountMessage,
      TAccountChannel extends string
        ? WritableAccount<TAccountChannel>
        : TAccountChannel,
      TAccountSender extends string
        ? WritableSignerAccount<TAccountSender> &
            IAccountSignerMeta<TAccountSender>
        : TAccountSender,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export interface SendMessageInstructionData {
  discriminator: ReadonlyUint8Array;
  content: string;
  messageType: MessageType;
  isEncrypted: boolean;
}

export interface SendMessageInstructionDataArgs {
  content: string;
  messageType: MessageTypeArgs;
  isEncrypted: boolean;
}

export function getSendMessageInstructionDataEncoder(): Encoder<SendMessageInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['content', addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder())],
      ['messageType', getMessageTypeEncoder()],
      ['isEncrypted', getBooleanEncoder()],
    ]),
    (value) => ({ ...value, discriminator: SEND_MESSAGE_DISCRIMINATOR })
  );
}

export function getSendMessageInstructionDataDecoder(): Decoder<SendMessageInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['content', addDecoderSizePrefix(getUtf8Decoder(), getU32Decoder())],
    ['messageType', getMessageTypeDecoder()],
    ['isEncrypted', getBooleanDecoder()],
  ]);
}

export function getSendMessageInstructionDataCodec(): Codec<
  SendMessageInstructionDataArgs,
  SendMessageInstructionData
> {
  return combineCodec(
    getSendMessageInstructionDataEncoder(),
    getSendMessageInstructionDataDecoder()
  );
}

export interface SendMessageInput<
  TAccountMessage extends string = string,
  TAccountChannel extends string = string,
  TAccountSender extends string = string,
  TAccountSystemProgram extends string = string,
> {
  message: Address<TAccountMessage>;
  channel: Address<TAccountChannel>;
  sender: TransactionSigner<TAccountSender>;
  systemProgram?: Address<TAccountSystemProgram>;
  content: SendMessageInstructionDataArgs['content'];
  messageType: SendMessageInstructionDataArgs['messageType'];
  isEncrypted: SendMessageInstructionDataArgs['isEncrypted'];
}

export function getSendMessageInstruction<
  TAccountMessage extends string,
  TAccountChannel extends string,
  TAccountSender extends string,
  TAccountSystemProgram extends string,
  TProgramAddress extends
    Address = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
>(
  input: SendMessageInput<
    TAccountMessage,
    TAccountChannel,
    TAccountSender,
    TAccountSystemProgram
  >,
  config?: { programAddress?: TProgramAddress }
): SendMessageInstruction<
  TProgramAddress,
  TAccountMessage,
  TAccountChannel,
  TAccountSender,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    message: { value: input.message ?? null, isWritable: true },
    channel: { value: input.channel ?? null, isWritable: true },
    sender: { value: input.sender ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
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

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.message),
      getAccountMeta(accounts.channel),
      getAccountMeta(accounts.sender),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getSendMessageInstructionDataEncoder().encode(
      args as SendMessageInstructionDataArgs
    ),
  } as SendMessageInstruction<
    TProgramAddress,
    TAccountMessage,
    TAccountChannel,
    TAccountSender,
    TAccountSystemProgram
  >;

  return instruction;
}

export interface ParsedSendMessageInstruction<
  TProgram extends string = typeof GHOSTSPEAK_MARKETPLACE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> {
  programAddress: Address<TProgram>;
  accounts: {
    message: TAccountMetas[0];
    channel: TAccountMetas[1];
    sender: TAccountMetas[2];
    systemProgram: TAccountMetas[3];
  };
  data: SendMessageInstructionData;
}

export function parseSendMessageInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSendMessageInstruction<TProgram, TAccountMetas> {
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
      message: getNextAccount(),
      channel: getNextAccount(),
      sender: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getSendMessageInstructionDataDecoder().decode(instruction.data),
  };
}
