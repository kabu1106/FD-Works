import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutStaffInputSchema } from './UserCreateWithoutStaffInputSchema';
import { UserUncheckedCreateWithoutStaffInputSchema } from './UserUncheckedCreateWithoutStaffInputSchema';
import { UserCreateOrConnectWithoutStaffInputSchema } from './UserCreateOrConnectWithoutStaffInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserUncheckedCreateNestedOneWithoutStaffInputSchema: z.ZodType<Prisma.UserUncheckedCreateNestedOneWithoutStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutStaffInputSchema), z.lazy(() => UserUncheckedCreateWithoutStaffInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStaffInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
});

export default UserUncheckedCreateNestedOneWithoutStaffInputSchema;
