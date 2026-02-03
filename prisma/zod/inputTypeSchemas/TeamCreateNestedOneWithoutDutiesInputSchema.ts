import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutDutiesInputSchema } from './TeamCreateWithoutDutiesInputSchema';
import { TeamUncheckedCreateWithoutDutiesInputSchema } from './TeamUncheckedCreateWithoutDutiesInputSchema';
import { TeamCreateOrConnectWithoutDutiesInputSchema } from './TeamCreateOrConnectWithoutDutiesInputSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';

export const TeamCreateNestedOneWithoutDutiesInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutDutiesInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutDutiesInputSchema), z.lazy(() => TeamUncheckedCreateWithoutDutiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutDutiesInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
});

export default TeamCreateNestedOneWithoutDutiesInputSchema;
