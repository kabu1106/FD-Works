import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveGroupUpdateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupUpdateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupUncheckedUpdateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupUncheckedUpdateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupWhereInputSchema } from './SpecialLeaveGroupWhereInputSchema';

export const SpecialLeaveGroupUpsertWithoutSpecialLeaveTypeInputSchema: z.ZodType<Prisma.SpecialLeaveGroupUpsertWithoutSpecialLeaveTypeInput> = z.strictObject({
  update: z.union([ z.lazy(() => SpecialLeaveGroupUpdateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveGroupUncheckedUpdateWithoutSpecialLeaveTypeInputSchema) ]),
  create: z.union([ z.lazy(() => SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema) ]),
  where: z.lazy(() => SpecialLeaveGroupWhereInputSchema).optional(),
});

export default SpecialLeaveGroupUpsertWithoutSpecialLeaveTypeInputSchema;
