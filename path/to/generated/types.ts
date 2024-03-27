export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
};

export type AuthLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Array<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  login: StatusOutput;
  logout: StatusOutput;
  refreshToken: StatusOutput;
  removeUser: User;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationLoginArgs = {
  authLoginInput: AuthLoginInput;
};

export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  findById: User;
  getCurrentUser: User;
  user: User;
  users: Array<User>;
};

export type QueryFindByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryUserArgs = {
  email: Scalars['String']['input'];
};

export type StatusOutput = {
  __typename?: 'StatusOutput';
  status: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  preferences?: Maybe<UserPreferences>;
  preferencesId?: Maybe<Scalars['String']['output']>;
  role: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  preferredTheme: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};
