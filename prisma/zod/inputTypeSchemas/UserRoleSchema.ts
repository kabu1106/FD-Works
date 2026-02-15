import { z } from 'zod';

export const UserRoleSchema = z.enum(['ADMINISTRATOR','APPROVER','GENERAL','Department']);

export type UserRoleType = `${z.infer<typeof UserRoleSchema>}`

export default UserRoleSchema;
