import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutDutyInputSchema } from './IncidentCreateWithoutDutyInputSchema';
import { IncidentUncheckedCreateWithoutDutyInputSchema } from './IncidentUncheckedCreateWithoutDutyInputSchema';
import { IncidentCreateOrConnectWithoutDutyInputSchema } from './IncidentCreateOrConnectWithoutDutyInputSchema';
import { IncidentCreateManyDutyInputEnvelopeSchema } from './IncidentCreateManyDutyInputEnvelopeSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';

export const IncidentCreateNestedManyWithoutDutyInputSchema: z.ZodType<Prisma.IncidentCreateNestedManyWithoutDutyInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutDutyInputSchema), z.lazy(() => IncidentCreateWithoutDutyInputSchema).array(), z.lazy(() => IncidentUncheckedCreateWithoutDutyInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutDutyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentCreateOrConnectWithoutDutyInputSchema), z.lazy(() => IncidentCreateOrConnectWithoutDutyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentCreateManyDutyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentCreateNestedManyWithoutDutyInputSchema;
