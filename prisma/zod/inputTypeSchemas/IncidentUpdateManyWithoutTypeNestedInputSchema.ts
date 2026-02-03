import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutTypeInputSchema } from './IncidentCreateWithoutTypeInputSchema';
import { IncidentUncheckedCreateWithoutTypeInputSchema } from './IncidentUncheckedCreateWithoutTypeInputSchema';
import { IncidentCreateOrConnectWithoutTypeInputSchema } from './IncidentCreateOrConnectWithoutTypeInputSchema';
import { IncidentUpsertWithWhereUniqueWithoutTypeInputSchema } from './IncidentUpsertWithWhereUniqueWithoutTypeInputSchema';
import { IncidentCreateManyTypeInputEnvelopeSchema } from './IncidentCreateManyTypeInputEnvelopeSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithWhereUniqueWithoutTypeInputSchema } from './IncidentUpdateWithWhereUniqueWithoutTypeInputSchema';
import { IncidentUpdateManyWithWhereWithoutTypeInputSchema } from './IncidentUpdateManyWithWhereWithoutTypeInputSchema';
import { IncidentScalarWhereInputSchema } from './IncidentScalarWhereInputSchema';

export const IncidentUpdateManyWithoutTypeNestedInputSchema: z.ZodType<Prisma.IncidentUpdateManyWithoutTypeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutTypeInputSchema), z.lazy(() => IncidentCreateWithoutTypeInputSchema).array(), z.lazy(() => IncidentUncheckedCreateWithoutTypeInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentCreateOrConnectWithoutTypeInputSchema), z.lazy(() => IncidentCreateOrConnectWithoutTypeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentUpsertWithWhereUniqueWithoutTypeInputSchema), z.lazy(() => IncidentUpsertWithWhereUniqueWithoutTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentCreateManyTypeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentUpdateWithWhereUniqueWithoutTypeInputSchema), z.lazy(() => IncidentUpdateWithWhereUniqueWithoutTypeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentUpdateManyWithWhereWithoutTypeInputSchema), z.lazy(() => IncidentUpdateManyWithWhereWithoutTypeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentScalarWhereInputSchema), z.lazy(() => IncidentScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentUpdateManyWithoutTypeNestedInputSchema;
