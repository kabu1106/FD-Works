import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutDestinationInputSchema } from './IncidentCreateWithoutDestinationInputSchema';
import { IncidentUncheckedCreateWithoutDestinationInputSchema } from './IncidentUncheckedCreateWithoutDestinationInputSchema';
import { IncidentCreateOrConnectWithoutDestinationInputSchema } from './IncidentCreateOrConnectWithoutDestinationInputSchema';
import { IncidentCreateManyDestinationInputEnvelopeSchema } from './IncidentCreateManyDestinationInputEnvelopeSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';

export const IncidentCreateNestedManyWithoutDestinationInputSchema: z.ZodType<Prisma.IncidentCreateNestedManyWithoutDestinationInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutDestinationInputSchema), z.lazy(() => IncidentCreateWithoutDestinationInputSchema).array(), z.lazy(() => IncidentUncheckedCreateWithoutDestinationInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutDestinationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentCreateOrConnectWithoutDestinationInputSchema), z.lazy(() => IncidentCreateOrConnectWithoutDestinationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentCreateManyDestinationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentCreateNestedManyWithoutDestinationInputSchema;
