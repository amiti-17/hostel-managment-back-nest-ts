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
  phone: Scalars['String']['input'];
  role: Array<Scalars['String']['input']>;
};

export type DashboardPost = {
  __typename?: 'DashboardPost';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logoImage?: Maybe<DashboardPostImage>;
  logoImageId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DashboardPostImage = {
  __typename?: 'DashboardPostImage';
  createdAt: Scalars['DateTime']['output'];
  dashboardPost?: Maybe<DashboardPost>;
  id: Scalars['String']['output'];
  imageSrc: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Group = {
  __typename?: 'Group';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  identification: Scalars['String']['output'];
  isGroup: Scalars['Boolean']['output'];
  isPrivate: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  usersIdsList: Array<Scalars['String']['output']>;
  usersList: Array<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  login: StatusOutput;
  logout: StatusOutput;
  refreshToken: StatusOutput;
  removeUser: User;
  updateUsersPassword: StatusOutput;
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

export type MutationUpdateUsersPasswordArgs = {
  updateUsersPassword: UpdateUsersPasswordInput;
};

export type ProfileImage = {
  __typename?: 'ProfileImage';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  imageSrc: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  dashboard: DashboardPost;
  findById: User;
  getCurrentUser: User;
  user: UserWithPassword;
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

export type UpdateUsersPasswordInput = {
  id: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  groupList?: Maybe<Array<Group>>;
  groupListId?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  preferences?: Maybe<UserPreferences>;
  preferencesId?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<ProfileImage>;
  profileImageId?: Maybe<Scalars['String']['output']>;
  readDashboardPostIds: Array<Scalars['String']['output']>;
  roles: Array<Scalars['String']['output']>;
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

export type UserWithPassword = {
  __typename?: 'UserWithPassword';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  groupList?: Maybe<Array<Group>>;
  groupListId?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  preferences?: Maybe<UserPreferences>;
  preferencesId?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<ProfileImage>;
  profileImageId?: Maybe<Scalars['String']['output']>;
  readDashboardPostIds: Array<Scalars['String']['output']>;
  roles: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};
