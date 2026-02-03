import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeUpdateWithoutIncidentInputSchema } from './IncidentTypeUpdateWithoutIncidentInputSchema';
import { IncidentTypeUncheckedUpdateWithoutIncidentInputSchema } from './IncidentTypeUncheckedUpdateWithoutIncidentInputSchema';
import { IncidentTypeCreateWithoutIncidentInputSchema } from './IncidentTypeCreateWithoutIncidentInputSchema';
import { IncidentTypeUncheckedCreateWithoutIncidentInputSchema } from './IncidentTypeUncheckedCreateWithoutIncidentInputSchema';
import { IncidentTypeWhereInputSchema } from './IncidentTypeWhereInputSchema';

export const IncidentTypeUpsertWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentTypeUpsertWithoutIncidentInput> = z.strictObject({
  update: z.union([ z.lazy(() => IncidentTypeUpdateWithoutIncidentInputSchema), z.lazy(() => IncidentTypeUncheckedUpdateWithoutIncidentInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentTypeCreateWithoutIncidentInputSchema), z.lazy(() => IncidentTypeUncheckedCreateWithoutIncidentInputSchema) ]),
  where: z.lazy(() => IncidentTypeWhereInputSchema).optional(),
});

export default IncidentTypeUpsertWithoutIncidentInputSchema;
