import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryCreateOrConnectWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryCreateOrConnectWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryUpsertWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryUpsertWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryWhereInputSchema } from './OvertimeRateCategoryWhereInputSchema';
import { OvertimeRateCategoryWhereUniqueInputSchema } from './OvertimeRateCategoryWhereUniqueInputSchema';
import { OvertimeRateCategoryUpdateToOneWithWhereWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryUpdateToOneWithWhereWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryUpdateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryUpdateWithoutOvertimeSlotsInputSchema';
import { OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSlotsInputSchema';

export const OvertimeRateCategoryUpdateOneWithoutOvertimeSlotsNestedInputSchema: z.ZodType<Prisma.OvertimeRateCategoryUpdateOneWithoutOvertimeSlotsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeRateCategoryCreateWithoutOvertimeSlotsInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedCreateWithoutOvertimeSlotsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OvertimeRateCategoryCreateOrConnectWithoutOvertimeSlotsInputSchema).optional(),
  upsert: z.lazy(() => OvertimeRateCategoryUpsertWithoutOvertimeSlotsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OvertimeRateCategoryWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OvertimeRateCategoryWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OvertimeRateCategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OvertimeRateCategoryUpdateToOneWithWhereWithoutOvertimeSlotsInputSchema), z.lazy(() => OvertimeRateCategoryUpdateWithoutOvertimeSlotsInputSchema), z.lazy(() => OvertimeRateCategoryUncheckedUpdateWithoutOvertimeSlotsInputSchema) ]).optional(),
});

export default OvertimeRateCategoryUpdateOneWithoutOvertimeSlotsNestedInputSchema;
