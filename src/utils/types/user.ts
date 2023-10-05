export type UserSchema = {
  id: string;
  firstname: string;
  lastname: string;
  role: string;
  avatar: string;
  isApproved: boolean;
  phone?: string;
  updatedAt: string
};
