// Code generated by Prisma (prisma@1.23.4). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  contributor: (where?: ContributorWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  contributor: (where: ContributorWhereUniqueInput) => ContributorPromise;
  contributors: (
    args?: {
      where?: ContributorWhereInput;
      orderBy?: ContributorOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Contributor>;
  contributorsConnection: (
    args?: {
      where?: ContributorWhereInput;
      orderBy?: ContributorOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ContributorConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createContributor: (data: ContributorCreateInput) => ContributorPromise;
  updateContributor: (
    args: { data: ContributorUpdateInput; where: ContributorWhereUniqueInput }
  ) => ContributorPromise;
  updateManyContributors: (
    args: {
      data: ContributorUpdateManyMutationInput;
      where?: ContributorWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertContributor: (
    args: {
      where: ContributorWhereUniqueInput;
      create: ContributorCreateInput;
      update: ContributorUpdateInput;
    }
  ) => ContributorPromise;
  deleteContributor: (where: ContributorWhereUniqueInput) => ContributorPromise;
  deleteManyContributors: (
    where?: ContributorWhereInput
  ) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  contributor: (
    where?: ContributorSubscriptionWhereInput
  ) => ContributorSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ContributorOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "githubUsername_ASC"
  | "githubUsername_DESC"
  | "shopifyCustomerID_ASC"
  | "shopifyCustomerID_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ContributorWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
  githubUsername?: String;
  shopifyCustomerID?: String;
}>;

export interface ContributorWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  githubUsername?: String;
  githubUsername_not?: String;
  githubUsername_in?: String[] | String;
  githubUsername_not_in?: String[] | String;
  githubUsername_lt?: String;
  githubUsername_lte?: String;
  githubUsername_gt?: String;
  githubUsername_gte?: String;
  githubUsername_contains?: String;
  githubUsername_not_contains?: String;
  githubUsername_starts_with?: String;
  githubUsername_not_starts_with?: String;
  githubUsername_ends_with?: String;
  githubUsername_not_ends_with?: String;
  shopifyCustomerID?: String;
  shopifyCustomerID_not?: String;
  shopifyCustomerID_in?: String[] | String;
  shopifyCustomerID_not_in?: String[] | String;
  shopifyCustomerID_lt?: String;
  shopifyCustomerID_lte?: String;
  shopifyCustomerID_gt?: String;
  shopifyCustomerID_gte?: String;
  shopifyCustomerID_contains?: String;
  shopifyCustomerID_not_contains?: String;
  shopifyCustomerID_starts_with?: String;
  shopifyCustomerID_not_starts_with?: String;
  shopifyCustomerID_ends_with?: String;
  shopifyCustomerID_not_ends_with?: String;
  AND?: ContributorWhereInput[] | ContributorWhereInput;
  OR?: ContributorWhereInput[] | ContributorWhereInput;
  NOT?: ContributorWhereInput[] | ContributorWhereInput;
}

export interface ContributorCreateInput {
  email?: String;
  githubUsername: String;
  shopifyCustomerID?: String;
}

export interface ContributorUpdateInput {
  email?: String;
  githubUsername?: String;
  shopifyCustomerID?: String;
}

export interface ContributorUpdateManyMutationInput {
  email?: String;
  githubUsername?: String;
  shopifyCustomerID?: String;
}

export interface ContributorSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ContributorWhereInput;
  AND?: ContributorSubscriptionWhereInput[] | ContributorSubscriptionWhereInput;
  OR?: ContributorSubscriptionWhereInput[] | ContributorSubscriptionWhereInput;
  NOT?: ContributorSubscriptionWhereInput[] | ContributorSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Contributor {
  id: ID_Output;
  email?: String;
  githubUsername: String;
  shopifyCustomerID?: String;
}

export interface ContributorPromise extends Promise<Contributor>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  githubUsername: () => Promise<String>;
  shopifyCustomerID: () => Promise<String>;
}

export interface ContributorSubscription
  extends Promise<AsyncIterator<Contributor>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  githubUsername: () => Promise<AsyncIterator<String>>;
  shopifyCustomerID: () => Promise<AsyncIterator<String>>;
}

export interface ContributorConnection {
  pageInfo: PageInfo;
  edges: ContributorEdge[];
}

export interface ContributorConnectionPromise
  extends Promise<ContributorConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ContributorEdge>>() => T;
  aggregate: <T = AggregateContributorPromise>() => T;
}

export interface ContributorConnectionSubscription
  extends Promise<AsyncIterator<ContributorConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ContributorEdgeSubscription>>>() => T;
  aggregate: <T = AggregateContributorSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ContributorEdge {
  node: Contributor;
  cursor: String;
}

export interface ContributorEdgePromise
  extends Promise<ContributorEdge>,
    Fragmentable {
  node: <T = ContributorPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ContributorEdgeSubscription
  extends Promise<AsyncIterator<ContributorEdge>>,
    Fragmentable {
  node: <T = ContributorSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateContributor {
  count: Int;
}

export interface AggregateContributorPromise
  extends Promise<AggregateContributor>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateContributorSubscription
  extends Promise<AsyncIterator<AggregateContributor>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ContributorSubscriptionPayload {
  mutation: MutationType;
  node: Contributor;
  updatedFields: String[];
  previousValues: ContributorPreviousValues;
}

export interface ContributorSubscriptionPayloadPromise
  extends Promise<ContributorSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ContributorPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ContributorPreviousValuesPromise>() => T;
}

export interface ContributorSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ContributorSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ContributorSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ContributorPreviousValuesSubscription>() => T;
}

export interface ContributorPreviousValues {
  id: ID_Output;
  email?: String;
  githubUsername: String;
  shopifyCustomerID?: String;
}

export interface ContributorPreviousValuesPromise
  extends Promise<ContributorPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  githubUsername: () => Promise<String>;
  shopifyCustomerID: () => Promise<String>;
}

export interface ContributorPreviousValuesSubscription
  extends Promise<AsyncIterator<ContributorPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  githubUsername: () => Promise<AsyncIterator<String>>;
  shopifyCustomerID: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Contributor",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
