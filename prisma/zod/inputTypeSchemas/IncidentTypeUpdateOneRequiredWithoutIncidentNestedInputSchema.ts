import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeCreateWithoutIncidentInputSchema } from './IncidentTypeCreateWithoutIncidentInputSchema';
import { IncidentTypeUncheckedCreateWithoutIncidentInputSchema } from './IncidentTypeUncheckedCreateWithoutIncidentInputSchema';
import { IncidentTypeCreateOrConnectWithoutIncidentInputSchema } from './IncidentTypeCreateOrConnectWithoutIncidentInputSchema';
import { IncidentTypeUpsertWithoutIncidentInputSchema } from './IncidentTypeUpsertWithoutIncidentInputSchema';
import { IncidentTypeWhereUniqueInputSchema } from './IncidentTypeWhereUniqueInputSchema';
import { IncidentTypeUpdateToOneWithWhereWithoutIncidentInputSchema } from './IncidentTypeUpdateToOneWithWhereWithoutIncidentInputSchema';
import { IncidentTypeUpdateWithoutIncidentInputSchema } from './IncidentTypeUpdateWithoutIncidentInputSchema';
import { IncidentTypeUncheckedUpdateWithoutIncidentInputSchema } from './IncidentTypeUncheckedUpdateWithoutIncidentInputSchema';

export const IncidentTypeUpdateOneRequiredWithoutIncidentNestedInputSchema: z.ZodType<Prisma.IncidentTypeUpdateOneRequiredWithoutIncidentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentTypeCreateWithoutIncidentInputSchema), z.lazy(() => IncidentTypeUncheckedCreateWithoutIncidentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentTypeCreateOrConnectWithoutIncidentInputSchema).optional(),
  upsert: z.lazy(() => IncidentTypeUpsertWithoutIncidentInputSchema).optional(),
  connect: z.lazy(() => IncidentTypeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IncidentTypeUpdateToOneWithWhereWithoutIncidentInputSchema), z.lazy(() => IncidentTypeUpdateWithoutIncidentInputSchema), z.lazy(() => IncidentTypeUncheckedUpdateWithoutIncidentInputSchema) ]).optional(),
});

export default IncidentTypeUpdateOneRequiredWithoutIncidentNestedInputSchema;
