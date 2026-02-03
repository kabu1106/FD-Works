import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutTeamInputSchema } from './StaffCreateWithoutTeamInputSchema';
import { StaffUncheckedCreateWithoutTeamInputSchema } from './StaffUncheckedCreateWithoutTeamInputSchema';
import { StaffCreateOrConnectWithoutTeamInputSchema } from './StaffCreateOrConnectWithoutTeamInputSchema';
import { StaffUpsertWithWhereUniqueWithoutTeamInputSchema } from './StaffUpsertWithWhereUniqueWithoutTeamInputSchema';
import { StaffCreateManyTeamInputEnvelopeSchema } from './StaffCreateManyTeamInputEnvelopeSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateWithWhereUniqueWithoutTeamInputSchema } from './StaffUpdateWithWhereUniqueWithoutTeamInputSchema';
import { StaffUpdateManyWithWhereWithoutTeamInputSchema } from './StaffUpdateManyWithWhereWithoutTeamInputSchema';
import { StaffScalarWhereInputSchema } from './StaffScalarWhereInputSchema';

export const StaffUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.StaffUpdateManyWithoutTeamNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutTeamInputSchema), z.lazy(() => StaffCreateWithoutTeamInputSchema).array(), z.lazy(() => StaffUncheckedCreateWithoutTeamInputSchema), z.lazy(() => StaffUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StaffCreateOrConnectWithoutTeamInputSchema), z.lazy(() => StaffCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StaffUpsertWithWhereUniqueWithoutTeamInputSchema), z.lazy(() => StaffUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StaffCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StaffWhereUniqueInputSchema), z.lazy(() => StaffWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StaffWhereUniqueInputSchema), z.lazy(() => StaffWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StaffWhereUniqueInputSchema), z.lazy(() => StaffWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StaffWhereUniqueInputSchema), z.lazy(() => StaffWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StaffUpdateWithWhereUniqueWithoutTeamInputSchema), z.lazy(() => StaffUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StaffUpdateManyWithWhereWithoutTeamInputSchema), z.lazy(() => StaffUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StaffScalarWhereInputSchema), z.lazy(() => StaffScalarWhereInputSchema).array() ]).optional(),
});

export default StaffUpdateManyWithoutTeamNestedInputSchema;
