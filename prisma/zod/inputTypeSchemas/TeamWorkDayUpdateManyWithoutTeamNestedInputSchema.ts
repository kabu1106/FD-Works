import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayCreateWithoutTeamInputSchema } from './TeamWorkDayCreateWithoutTeamInputSchema';
import { TeamWorkDayUncheckedCreateWithoutTeamInputSchema } from './TeamWorkDayUncheckedCreateWithoutTeamInputSchema';
import { TeamWorkDayCreateOrConnectWithoutTeamInputSchema } from './TeamWorkDayCreateOrConnectWithoutTeamInputSchema';
import { TeamWorkDayUpsertWithWhereUniqueWithoutTeamInputSchema } from './TeamWorkDayUpsertWithWhereUniqueWithoutTeamInputSchema';
import { TeamWorkDayCreateManyTeamInputEnvelopeSchema } from './TeamWorkDayCreateManyTeamInputEnvelopeSchema';
import { TeamWorkDayWhereUniqueInputSchema } from './TeamWorkDayWhereUniqueInputSchema';
import { TeamWorkDayUpdateWithWhereUniqueWithoutTeamInputSchema } from './TeamWorkDayUpdateWithWhereUniqueWithoutTeamInputSchema';
import { TeamWorkDayUpdateManyWithWhereWithoutTeamInputSchema } from './TeamWorkDayUpdateManyWithWhereWithoutTeamInputSchema';
import { TeamWorkDayScalarWhereInputSchema } from './TeamWorkDayScalarWhereInputSchema';

export const TeamWorkDayUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.TeamWorkDayUpdateManyWithoutTeamNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamWorkDayCreateWithoutTeamInputSchema), z.lazy(() => TeamWorkDayCreateWithoutTeamInputSchema).array(), z.lazy(() => TeamWorkDayUncheckedCreateWithoutTeamInputSchema), z.lazy(() => TeamWorkDayUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamWorkDayCreateOrConnectWithoutTeamInputSchema), z.lazy(() => TeamWorkDayCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamWorkDayUpsertWithWhereUniqueWithoutTeamInputSchema), z.lazy(() => TeamWorkDayUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamWorkDayCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWorkDayWhereUniqueInputSchema), z.lazy(() => TeamWorkDayWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWorkDayWhereUniqueInputSchema), z.lazy(() => TeamWorkDayWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWorkDayWhereUniqueInputSchema), z.lazy(() => TeamWorkDayWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWorkDayWhereUniqueInputSchema), z.lazy(() => TeamWorkDayWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamWorkDayUpdateWithWhereUniqueWithoutTeamInputSchema), z.lazy(() => TeamWorkDayUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamWorkDayUpdateManyWithWhereWithoutTeamInputSchema), z.lazy(() => TeamWorkDayUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamWorkDayScalarWhereInputSchema), z.lazy(() => TeamWorkDayScalarWhereInputSchema).array() ]).optional(),
});

export default TeamWorkDayUpdateManyWithoutTeamNestedInputSchema;
