import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutStaffInputSchema } from './UserUpdateWithoutStaffInputSchema';
import { UserUncheckedUpdateWithoutStaffInputSchema } from './UserUncheckedUpdateWithoutStaffInputSchema';
import { UserCreateWithoutStaffInputSchema } from './UserCreateWithoutStaffInputSchema';
import { UserUncheckedCreateWithoutStaffInputSchema } from './UserUncheckedCreateWithoutStaffInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutStaffInputSchema: z.ZodType<Prisma.UserUpsertWithoutStaffInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserUpdateWithoutStaffInputSchema), z.lazy(() => UserUncheckedUpdateWithoutStaffInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutStaffInputSchema), z.lazy(() => UserUncheckedCreateWithoutStaffInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
});

export default UserUpsertWithoutStaffInputSchema;
