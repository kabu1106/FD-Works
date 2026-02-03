import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumUserRoleFilterSchema } from './EnumUserRoleFilterSchema';
import { UserRoleSchema } from './UserRoleSchema';
import { StaffNullableRelationFilterSchema } from './StaffNullableRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { AccountListRelationFilterSchema } from './AccountListRelationFilterSchema';
import { SessionListRelationFilterSchema } from './SessionListRelationFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.cuid(),
    loginId: z.string(),
    email: z.string(),
    staffId: z.number().int(),
  }),
  z.object({
    id: z.cuid(),
    loginId: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.cuid(),
    loginId: z.string(),
    staffId: z.number().int(),
  }),
  z.object({
    id: z.cuid(),
    loginId: z.string(),
  }),
  z.object({
    id: z.cuid(),
    email: z.string(),
    staffId: z.number().int(),
  }),
  z.object({
    id: z.cuid(),
    email: z.string(),
  }),
  z.object({
    id: z.cuid(),
    staffId: z.number().int(),
  }),
  z.object({
    id: z.cuid(),
  }),
  z.object({
    loginId: z.string(),
    email: z.string(),
    staffId: z.number().int(),
  }),
  z.object({
    loginId: z.string(),
    email: z.string(),
  }),
  z.object({
    loginId: z.string(),
    staffId: z.number().int(),
  }),
  z.object({
    loginId: z.string(),
  }),
  z.object({
    email: z.string(),
    staffId: z.number().int(),
  }),
  z.object({
    email: z.string(),
  }),
  z.object({
    staffId: z.number().int(),
  }),
])
.and(z.strictObject({
  id: z.cuid().optional(),
  loginId: z.string().optional(),
  email: z.string().optional(),
  staffId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumUserRoleFilterSchema), z.lazy(() => UserRoleSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffNullableRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
}));

export default UserWhereUniqueInputSchema;
