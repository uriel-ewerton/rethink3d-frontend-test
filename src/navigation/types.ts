export type UserData = {
    name: string;
    email: string;
    imageUri: string;
    password?: string;
};

export type RootStackParamList = {
    SignUp: UserData | undefined;
    Profile: undefined;
};
