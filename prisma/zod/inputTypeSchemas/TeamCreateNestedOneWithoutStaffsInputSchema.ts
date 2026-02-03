import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutStaffsInputSchema } from './TeamCreateWithoutStaffsInputSchema';
import { TeamUncheckedCreateWithoutStaffsInputSchema } from './TeamUncheckedCreateWithoutStaffsInputSchema';
import { TeamCreateOrConnectWithoutStaffsInputSchema } from './TeamCreateOrConnectWithoutStaffsInputSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';

export const TeamCreateNestedOneWithoutStaffsInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutStaffsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutStaffsInputSchema), z.lazy(() => TeamUncheckedCreateWithoutStaffsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutStaffsInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
});

export default TeamCreateNestedOneWithoutStaffsInputSchema;
