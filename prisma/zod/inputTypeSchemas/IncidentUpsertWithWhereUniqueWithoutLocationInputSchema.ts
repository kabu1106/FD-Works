import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithoutLocationInputSchema } from './IncidentUpdateWithoutLocationInputSchema';
import { IncidentUncheckedUpdateWithoutLocationInputSchema } from './IncidentUncheckedUpdateWithoutLocationInputSchema';
import { IncidentCreateWithoutLocationInputSchema } from './IncidentCreateWithoutLocationInputSchema';
import { IncidentUncheckedCreateWithoutLocationInputSchema } from './IncidentUncheckedCreateWithoutLocationInputSchema';

export const IncidentUpsertWithWhereUniqueWithoutLocationInputSchema: z.ZodType<Prisma.IncidentUpsertWithWhereUniqueWithoutLocationInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentUpdateWithoutLocationInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutLocationInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentCreateWithoutLocationInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutLocationInputSchema) ]),
});

export default IncidentUpsertWithWhereUniqueWithoutLocationInputSchema;
