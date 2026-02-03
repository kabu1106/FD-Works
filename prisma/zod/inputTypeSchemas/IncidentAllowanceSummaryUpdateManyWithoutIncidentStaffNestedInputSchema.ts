import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryCreateOrConnectWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryCreateOrConnectWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryCreateManyIncidentStaffInputEnvelopeSchema } from './IncidentAllowanceSummaryCreateManyIncidentStaffInputEnvelopeSchema';
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from './IncidentAllowanceSummaryWhereUniqueInputSchema';
import { IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryUpdateManyWithWhereWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUpdateManyWithWhereWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryScalarWhereInputSchema } from './IncidentAllowanceSummaryScalarWhereInputSchema';

export const IncidentAllowanceSummaryUpdateManyWithoutIncidentStaffNestedInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUpdateManyWithoutIncidentStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema).array(), z.lazy(() => IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateOrConnectWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryCreateOrConnectWithoutIncidentStaffInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutIncidentStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentAllowanceSummaryCreateManyIncidentStaffInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutIncidentStaffInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentAllowanceSummaryUpdateManyWithWhereWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryUpdateManyWithWhereWithoutIncidentStaffInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentAllowanceSummaryScalarWhereInputSchema), z.lazy(() => IncidentAllowanceSummaryScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentAllowanceSummaryUpdateManyWithoutIncidentStaffNestedInputSchema;
