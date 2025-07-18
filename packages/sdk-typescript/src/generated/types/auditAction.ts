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

/** Types of auditable actions */
export enum AuditAction {
  AgentRegistered,
  AgentUpdated,
  AgentDeactivated,
  AgentVerified,
  PaymentProcessed,
  EscrowCreated,
  EscrowReleased,
  FundsWithdrawn,
  ProposalCreated,
  VoteCast,
  ProposalExecuted,
  GovernanceUpdated,
  AccessGranted,
  AccessRevoked,
  SecurityPolicyUpdated,
  SuspiciousActivity,
  ComplianceReportGenerated,
  RegulatorySubmission,
  AuditRequested,
  ViolationDetected,
  SystemConfigUpdated,
  EmergencyAction,
  MaintenancePerformed,
  WorkOrderCreated,
  WorkOrderCompleted,
  DisputeRaised,
  DisputeResolved,
  MultisigCreated,
  MultisigSigned,
  MultisigExecuted,
  RiskAssessmentPerformed,
  RiskThresholdExceeded,
  RiskMitigationApplied,
}

export type AuditActionArgs = AuditAction;

export function getAuditActionEncoder(): Encoder<AuditActionArgs> {
  return getEnumEncoder(AuditAction);
}

export function getAuditActionDecoder(): Decoder<AuditAction> {
  return getEnumDecoder(AuditAction);
}

export function getAuditActionCodec(): Codec<AuditActionArgs, AuditAction> {
  return combineCodec(getAuditActionEncoder(), getAuditActionDecoder());
}
