import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutDutyInputSchema } from './IncidentCreateWithoutDutyInputSchema';
import { IncidentUncheckedCreateWithoutDutyInputSchema } from './IncidentUncheckedCreateWithoutDutyInputSchema';
import { IncidentCreateOrConnectWithoutDutyInputSchema } from './IncidentCreateOrConnectWithoutDutyInputSchema';
import { IncidentUpsertWithWhereUniqueWithoutDutyInputSchema } from './IncidentUpsertWithWhereUniqueWithoutDutyInputSchema';
import { IncidentCreateManyDutyInputEnvelopeSchema } from './IncidentCreateManyDutyInputEnvelopeSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithWhereUniqueWithoutDutyInputSchema } from './IncidentUpdateWithWhereUniqueWithoutDutyInputSchema';
import { IncidentUpdateManyWithWhereWithoutDutyInputSchema } from './IncidentUpdateManyWithWhereWithoutDutyInputSchema';
import { IncidentScalarWhereInputSchema } from './IncidentScalarWhereInputSchema';

export const IncidentUpdateManyWithoutDutyNestedInputSchema: z.ZodType<Prisma.IncidentUpdateManyWithoutDutyNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutDutyInputSchema), z.lazy(() => IncidentCreateWithoutDutyInputSchema).array(), z.lazy(() => IncidentUncheckedCreateWithoutDutyInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentCreateOrConnectWithoutDutyInputSchema), z.lazy(() => IncidentCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentUpsertWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => IncidentUpsertWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentCreateManyDutyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentUpdateWithWhereUniqueWithoutDutyInputSchema), z.lazy(() => IncidentUpdateWithWhereUniqueWithoutDutyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentUpdateManyWithWhereWithoutDutyInputSchema), z.lazy(() => IncidentUpdateManyWithWhereWithoutDutyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentScalarWhereInputSchema), z.lazy(() => IncidentScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentUpdateManyWithoutDutyNestedInputSchema;
