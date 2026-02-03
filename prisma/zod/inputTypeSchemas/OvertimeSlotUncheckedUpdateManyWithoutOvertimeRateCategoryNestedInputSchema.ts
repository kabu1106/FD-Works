import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotCreateOrConnectWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotCreateOrConnectWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotUpsertWithWhereUniqueWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUpsertWithWhereUniqueWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotCreateManyOvertimeRateCategoryInputEnvelopeSchema } from './OvertimeSlotCreateManyOvertimeRateCategoryInputEnvelopeSchema';
import { OvertimeSlotWhereUniqueInputSchema } from './OvertimeSlotWhereUniqueInputSchema';
import { OvertimeSlotUpdateWithWhereUniqueWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUpdateWithWhereUniqueWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotUpdateManyWithWhereWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUpdateManyWithWhereWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotScalarWhereInputSchema } from './OvertimeSlotScalarWhereInputSchema';

export const OvertimeSlotUncheckedUpdateManyWithoutOvertimeRateCategoryNestedInputSchema: z.ZodType<Prisma.OvertimeSlotUncheckedUpdateManyWithoutOvertimeRateCategoryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema).array(), z.lazy(() => OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OvertimeSlotCreateOrConnectWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotCreateOrConnectWithoutOvertimeRateCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OvertimeSlotUpsertWithWhereUniqueWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotUpsertWithWhereUniqueWithoutOvertimeRateCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OvertimeSlotCreateManyOvertimeRateCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OvertimeSlotWhereUniqueInputSchema), z.lazy(() => OvertimeSlotWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OvertimeSlotWhereUniqueInputSchema), z.lazy(() => OvertimeSlotWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OvertimeSlotWhereUniqueInputSchema), z.lazy(() => OvertimeSlotWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OvertimeSlotWhereUniqueInputSchema), z.lazy(() => OvertimeSlotWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OvertimeSlotUpdateWithWhereUniqueWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotUpdateWithWhereUniqueWithoutOvertimeRateCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OvertimeSlotUpdateManyWithWhereWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotUpdateManyWithWhereWithoutOvertimeRateCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OvertimeSlotScalarWhereInputSchema), z.lazy(() => OvertimeSlotScalarWhereInputSchema).array() ]).optional(),
});

export default OvertimeSlotUncheckedUpdateManyWithoutOvertimeRateCategoryNestedInputSchema;
