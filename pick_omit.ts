type User = { id: number; name: string; email: string;};

type UserName = Pick<UserActivation, "name" | "id";
type UserWithoutEmail = Omit<User, "email">;
type n = Omit<User, "id">