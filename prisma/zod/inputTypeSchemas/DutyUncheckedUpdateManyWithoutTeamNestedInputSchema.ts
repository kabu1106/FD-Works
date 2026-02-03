import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutTeamInputSchema } from './DutyCreateWithoutTeamInputSchema';
import { DutyUncheckedCreateWithoutTeamInputSchema } from './DutyUncheckedCreateWithoutTeamInputSchema';
import { DutyCreateOrConnectWithoutTeamInputSchema } from './DutyCreateOrConnectWithoutTeamInputSchema';
import { DutyUpsertWithWhereUniqueWithoutTeamInputSchema } from './DutyUpsertWithWhereUniqueWithoutTeamInputSchema';
import { DutyCreateManyTeamInputEnvelopeSchema } from './DutyCreateManyTeamInputEnvelopeSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyUpdateWithWhereUniqueWithoutTeamInputSchema } from './DutyUpdateWithWhereUniqueWithoutTeamInputSchema';
import { DutyUpdateManyWithWhereWithoutTeamInputSchema } from './DutyUpdateManyWithWhereWithoutTeamInputSchema';
import { DutyScalarWhereInputSchema } from './DutyScalarWhereInputSchema';

export const DutyUncheckedUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.DutyUncheckedUpdateManyWithoutTeamNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutTeamInputSchema), z.lazy(() => DutyCreateWithoutTeamInputSchema).array(), z.lazy(() => DutyUncheckedCreateWithoutTeamInputSchema), z.lazy(() => DutyUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DutyCreateOrConnectWithoutTeamInputSchema), z.lazy(() => DutyCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DutyUpsertWithWhereUniqueWithoutTeamInputSchema), z.lazy(() => DutyUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DutyCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DutyWhereUniqueInputSchema), z.lazy(() => DutyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DutyWhereUniqueInputSchema), z.lazy(() => DutyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DutyWhereUniqueInputSchema), z.lazy(() => DutyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DutyWhereUniqueInputSchema), z.lazy(() => DutyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DutyUpdateWithWhereUniqueWithoutTeamInputSchema), z.lazy(() => DutyUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DutyUpdateManyWithWhereWithoutTeamInputSchema), z.lazy(() => DutyUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DutyScalarWhereInputSchema), z.lazy(() => DutyScalarWhereInputSchema).array() ]).optional(),
});

export default DutyUncheckedUpdateManyWithoutTeamNestedInputSchema;
