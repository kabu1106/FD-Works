import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutLocationInputSchema } from './IncidentCreateWithoutLocationInputSchema';
import { IncidentUncheckedCreateWithoutLocationInputSchema } from './IncidentUncheckedCreateWithoutLocationInputSchema';
import { IncidentCreateOrConnectWithoutLocationInputSchema } from './IncidentCreateOrConnectWithoutLocationInputSchema';
import { IncidentUpsertWithWhereUniqueWithoutLocationInputSchema } from './IncidentUpsertWithWhereUniqueWithoutLocationInputSchema';
import { IncidentCreateManyLocationInputEnvelopeSchema } from './IncidentCreateManyLocationInputEnvelopeSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithWhereUniqueWithoutLocationInputSchema } from './IncidentUpdateWithWhereUniqueWithoutLocationInputSchema';
import { IncidentUpdateManyWithWhereWithoutLocationInputSchema } from './IncidentUpdateManyWithWhereWithoutLocationInputSchema';
import { IncidentScalarWhereInputSchema } from './IncidentScalarWhereInputSchema';

export const IncidentUpdateManyWithoutLocationNestedInputSchema: z.ZodType<Prisma.IncidentUpdateManyWithoutLocationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutLocationInputSchema), z.lazy(() => IncidentCreateWithoutLocationInputSchema).array(), z.lazy(() => IncidentUncheckedCreateWithoutLocationInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutLocationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentCreateOrConnectWithoutLocationInputSchema), z.lazy(() => IncidentCreateOrConnectWithoutLocationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentUpsertWithWhereUniqueWithoutLocationInputSchema), z.lazy(() => IncidentUpsertWithWhereUniqueWithoutLocationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentCreateManyLocationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentUpdateWithWhereUniqueWithoutLocationInputSchema), z.lazy(() => IncidentUpdateWithWhereUniqueWithoutLocationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentUpdateManyWithWhereWithoutLocationInputSchema), z.lazy(() => IncidentUpdateManyWithWhereWithoutLocationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentScalarWhereInputSchema), z.lazy(() => IncidentScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentUpdateManyWithoutLocationNestedInputSchema;
