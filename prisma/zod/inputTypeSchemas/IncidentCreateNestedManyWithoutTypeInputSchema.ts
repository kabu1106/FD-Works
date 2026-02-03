import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutTypeInputSchema } from './IncidentCreateWithoutTypeInputSchema';
import { IncidentUncheckedCreateWithoutTypeInputSchema } from './IncidentUncheckedCreateWithoutTypeInputSchema';
import { IncidentCreateOrConnectWithoutTypeInputSchema } from './IncidentCreateOrConnectWithoutTypeInputSchema';
import { IncidentCreateManyTypeInputEnvelopeSchema } from './IncidentCreateManyTypeInputEnvelopeSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';

export const IncidentCreateNestedManyWithoutTypeInputSchema: z.ZodType<Prisma.IncidentCreateNestedManyWithoutTypeInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutTypeInputSchema), z.lazy(() => IncidentCreateWithoutTypeInputSchema).array(), z.lazy(() => IncidentUncheckedCreateWithoutTypeInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentCreateOrConnectWithoutTypeInputSchema), z.lazy(() => IncidentCreateOrConnectWithoutTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentCreateManyTypeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentCreateNestedManyWithoutTypeInputSchema;
