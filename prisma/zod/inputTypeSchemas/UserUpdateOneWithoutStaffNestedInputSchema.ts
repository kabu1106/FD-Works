import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutStaffInputSchema } from './UserCreateWithoutStaffInputSchema';
import { UserUncheckedCreateWithoutStaffInputSchema } from './UserUncheckedCreateWithoutStaffInputSchema';
import { UserCreateOrConnectWithoutStaffInputSchema } from './UserCreateOrConnectWithoutStaffInputSchema';
import { UserUpsertWithoutStaffInputSchema } from './UserUpsertWithoutStaffInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutStaffInputSchema } from './UserUpdateToOneWithWhereWithoutStaffInputSchema';
import { UserUpdateWithoutStaffInputSchema } from './UserUpdateWithoutStaffInputSchema';
import { UserUncheckedUpdateWithoutStaffInputSchema } from './UserUncheckedUpdateWithoutStaffInputSchema';

export const UserUpdateOneWithoutStaffNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutStaffInputSchema), z.lazy(() => UserUncheckedCreateWithoutStaffInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStaffInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutStaffInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutStaffInputSchema), z.lazy(() => UserUpdateWithoutStaffInputSchema), z.lazy(() => UserUncheckedUpdateWithoutStaffInputSchema) ]).optional(),
});

export default UserUpdateOneWithoutStaffNestedInputSchema;
