import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutStaffsInputSchema } from './TeamCreateWithoutStaffsInputSchema';
import { TeamUncheckedCreateWithoutStaffsInputSchema } from './TeamUncheckedCreateWithoutStaffsInputSchema';
import { TeamCreateOrConnectWithoutStaffsInputSchema } from './TeamCreateOrConnectWithoutStaffsInputSchema';
import { TeamUpsertWithoutStaffsInputSchema } from './TeamUpsertWithoutStaffsInputSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateToOneWithWhereWithoutStaffsInputSchema } from './TeamUpdateToOneWithWhereWithoutStaffsInputSchema';
import { TeamUpdateWithoutStaffsInputSchema } from './TeamUpdateWithoutStaffsInputSchema';
import { TeamUncheckedUpdateWithoutStaffsInputSchema } from './TeamUncheckedUpdateWithoutStaffsInputSchema';

export const TeamUpdateOneRequiredWithoutStaffsNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneRequiredWithoutStaffsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutStaffsInputSchema), z.lazy(() => TeamUncheckedCreateWithoutStaffsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutStaffsInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutStaffsInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutStaffsInputSchema), z.lazy(() => TeamUpdateWithoutStaffsInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutStaffsInputSchema) ]).optional(),
});

export default TeamUpdateOneRequiredWithoutStaffsNestedInputSchema;
