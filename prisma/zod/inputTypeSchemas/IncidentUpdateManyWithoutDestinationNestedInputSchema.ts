import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutDestinationInputSchema } from './IncidentCreateWithoutDestinationInputSchema';
import { IncidentUncheckedCreateWithoutDestinationInputSchema } from './IncidentUncheckedCreateWithoutDestinationInputSchema';
import { IncidentCreateOrConnectWithoutDestinationInputSchema } from './IncidentCreateOrConnectWithoutDestinationInputSchema';
import { IncidentUpsertWithWhereUniqueWithoutDestinationInputSchema } from './IncidentUpsertWithWhereUniqueWithoutDestinationInputSchema';
import { IncidentCreateManyDestinationInputEnvelopeSchema } from './IncidentCreateManyDestinationInputEnvelopeSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithWhereUniqueWithoutDestinationInputSchema } from './IncidentUpdateWithWhereUniqueWithoutDestinationInputSchema';
import { IncidentUpdateManyWithWhereWithoutDestinationInputSchema } from './IncidentUpdateManyWithWhereWithoutDestinationInputSchema';
import { IncidentScalarWhereInputSchema } from './IncidentScalarWhereInputSchema';

export const IncidentUpdateManyWithoutDestinationNestedInputSchema: z.ZodType<Prisma.IncidentUpdateManyWithoutDestinationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutDestinationInputSchema), z.lazy(() => IncidentCreateWithoutDestinationInputSchema).array(), z.lazy(() => IncidentUncheckedCreateWithoutDestinationInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutDestinationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentCreateOrConnectWithoutDestinationInputSchema), z.lazy(() => IncidentCreateOrConnectWithoutDestinationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentUpsertWithWhereUniqueWithoutDestinationInputSchema), z.lazy(() => IncidentUpsertWithWhereUniqueWithoutDestinationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentCreateManyDestinationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentUpdateWithWhereUniqueWithoutDestinationInputSchema), z.lazy(() => IncidentUpdateWithWhereUniqueWithoutDestinationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentUpdateManyWithWhereWithoutDestinationInputSchema), z.lazy(() => IncidentUpdateManyWithWhereWithoutDestinationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentScalarWhereInputSchema), z.lazy(() => IncidentScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentUpdateManyWithoutDestinationNestedInputSchema;
