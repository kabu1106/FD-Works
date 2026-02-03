import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutStaffInputSchema } from './UserCreateWithoutStaffInputSchema';
import { UserUncheckedCreateWithoutStaffInputSchema } from './UserUncheckedCreateWithoutStaffInputSchema';

export const UserCreateOrConnectWithoutStaffInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutStaffInputSchema), z.lazy(() => UserUncheckedCreateWithoutStaffInputSchema) ]),
});

export default UserCreateOrConnectWithoutStaffInputSchema;
