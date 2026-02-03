import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryCreateOrConnectWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryCreateOrConnectWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryCreateManyAllowanceTypeInputEnvelopeSchema } from './IncidentAllowanceSummaryCreateManyAllowanceTypeInputEnvelopeSchema';
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from './IncidentAllowanceSummaryWhereUniqueInputSchema';
import { IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryUpdateManyWithWhereWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUpdateManyWithWhereWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryScalarWhereInputSchema } from './IncidentAllowanceSummaryScalarWhereInputSchema';

export const IncidentAllowanceSummaryUncheckedUpdateManyWithoutAllowanceTypeNestedInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUncheckedUpdateManyWithoutAllowanceTypeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema).array(), z.lazy(() => IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateOrConnectWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryCreateOrConnectWithoutAllowanceTypeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutAllowanceTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentAllowanceSummaryCreateManyAllowanceTypeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutAllowanceTypeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentAllowanceSummaryUpdateManyWithWhereWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryUpdateManyWithWhereWithoutAllowanceTypeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentAllowanceSummaryScalarWhereInputSchema), z.lazy(() => IncidentAllowanceSummaryScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentAllowanceSummaryUncheckedUpdateManyWithoutAllowanceTypeNestedInputSchema;
