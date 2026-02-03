import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithoutDutyInputSchema } from './IncidentUpdateWithoutDutyInputSchema';
import { IncidentUncheckedUpdateWithoutDutyInputSchema } from './IncidentUncheckedUpdateWithoutDutyInputSchema';
import { IncidentCreateWithoutDutyInputSchema } from './IncidentCreateWithoutDutyInputSchema';
import { IncidentUncheckedCreateWithoutDutyInputSchema } from './IncidentUncheckedCreateWithoutDutyInputSchema';

export const IncidentUpsertWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.IncidentUpsertWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentUpdateWithoutDutyInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutDutyInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentCreateWithoutDutyInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutDutyInputSchema) ]),
});

export default IncidentUpsertWithWhereUniqueWithoutDutyInputSchema;
