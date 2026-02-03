import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutDepartmentsInputSchema } from './TeamCreateWithoutDepartmentsInputSchema';
import { TeamUncheckedCreateWithoutDepartmentsInputSchema } from './TeamUncheckedCreateWithoutDepartmentsInputSchema';
import { TeamCreateOrConnectWithoutDepartmentsInputSchema } from './TeamCreateOrConnectWithoutDepartmentsInputSchema';
import { TeamUpsertWithWhereUniqueWithoutDepartmentsInputSchema } from './TeamUpsertWithWhereUniqueWithoutDepartmentsInputSchema';
import { TeamCreateManyDepartmentsInputEnvelopeSchema } from './TeamCreateManyDepartmentsInputEnvelopeSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateWithWhereUniqueWithoutDepartmentsInputSchema } from './TeamUpdateWithWhereUniqueWithoutDepartmentsInputSchema';
import { TeamUpdateManyWithWhereWithoutDepartmentsInputSchema } from './TeamUpdateManyWithWhereWithoutDepartmentsInputSchema';
import { TeamScalarWhereInputSchema } from './TeamScalarWhereInputSchema';

export const TeamUncheckedUpdateManyWithoutDepartmentsNestedInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutDepartmentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutDepartmentsInputSchema), z.lazy(() => TeamCreateWithoutDepartmentsInputSchema).array(), z.lazy(() => TeamUncheckedCreateWithoutDepartmentsInputSchema), z.lazy(() => TeamUncheckedCreateWithoutDepartmentsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutDepartmentsInputSchema), z.lazy(() => TeamCreateOrConnectWithoutDepartmentsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamUpsertWithWhereUniqueWithoutDepartmentsInputSchema), z.lazy(() => TeamUpsertWithWhereUniqueWithoutDepartmentsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyDepartmentsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamUpdateWithWhereUniqueWithoutDepartmentsInputSchema), z.lazy(() => TeamUpdateWithWhereUniqueWithoutDepartmentsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamUpdateManyWithWhereWithoutDepartmentsInputSchema), z.lazy(() => TeamUpdateManyWithWhereWithoutDepartmentsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamScalarWhereInputSchema), z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
});

export default TeamUncheckedUpdateManyWithoutDepartmentsNestedInputSchema;
