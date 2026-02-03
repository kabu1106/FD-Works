import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutStaffInputSchema } from './UserUpdateWithoutStaffInputSchema';
import { UserUncheckedUpdateWithoutStaffInputSchema } from './UserUncheckedUpdateWithoutStaffInputSchema';

export const UserUpdateToOneWithWhereWithoutStaffInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutStaffInputSchema), z.lazy(() => UserUncheckedUpdateWithoutStaffInputSchema) ]),
});

export default UserUpdateToOneWithWhereWithoutStaffInputSchema;
