import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithoutTypeInputSchema } from './IncidentUpdateWithoutTypeInputSchema';
import { IncidentUncheckedUpdateWithoutTypeInputSchema } from './IncidentUncheckedUpdateWithoutTypeInputSchema';
import { IncidentCreateWithoutTypeInputSchema } from './IncidentCreateWithoutTypeInputSchema';
import { IncidentUncheckedCreateWithoutTypeInputSchema } from './IncidentUncheckedCreateWithoutTypeInputSchema';

export const IncidentUpsertWithWhereUniqueWithoutTypeInputSchema: z.ZodType<Prisma.IncidentUpsertWithWhereUniqueWithoutTypeInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentUpdateWithoutTypeInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutTypeInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentCreateWithoutTypeInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutTypeInputSchema) ]),
});

export default IncidentUpsertWithWhereUniqueWithoutTypeInputSchema;
