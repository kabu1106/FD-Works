import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutLocationInputSchema } from './IncidentCreateWithoutLocationInputSchema';
import { IncidentUncheckedCreateWithoutLocationInputSchema } from './IncidentUncheckedCreateWithoutLocationInputSchema';
import { IncidentCreateOrConnectWithoutLocationInputSchema } from './IncidentCreateOrConnectWithoutLocationInputSchema';
import { IncidentCreateManyLocationInputEnvelopeSchema } from './IncidentCreateManyLocationInputEnvelopeSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';

export const IncidentCreateNestedManyWithoutLocationInputSchema: z.ZodType<Prisma.IncidentCreateNestedManyWithoutLocationInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutLocationInputSchema), z.lazy(() => IncidentCreateWithoutLocationInputSchema).array(), z.lazy(() => IncidentUncheckedCreateWithoutLocationInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutLocationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentCreateOrConnectWithoutLocationInputSchema), z.lazy(() => IncidentCreateOrConnectWithoutLocationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentCreateManyLocationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentCreateNestedManyWithoutLocationInputSchema;
