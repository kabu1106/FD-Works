// src/domain/incident/incidentEventSchema.ts
import { z } from "zod";

const IncidentId = z.string().uuid();

export const IncidentOccurredSchema = z.object({
  eventType: z.literal("IncidentOccurred"),
  payload: z.object({
    incidentId: IncidentId,
    dutyId: z.string().uuid(),
    locationId: z.number().int(),
    occurredAt: z.string(),
  }),
});

export const VehicleDispatchedSchema = z.object({
  eventType: z.literal("VehicleDispatched"),
  payload: z.object({
    incidentId: IncidentId,
    vehicleId: z.number().int(),
    dispatchedAt: z.string(),
  }),
});

export const StaffBoardedSchema = z.object({
  eventType: z.literal("StaffBoarded"),
  payload: z.object({
    incidentId: IncidentId,
    vehicleId: z.number().int(),
    staffId: z.number().int(),
    boardedAt: z.string(),
  }),
});

export const VehicleReturnedSchema = z.object({
  eventType: z.literal("VehicleReturned"),
  payload: z.object({
    incidentId: IncidentId,
    vehicleId: z.number().int(),
    returnedAt: z.string(),
  }),
});

export const IncidentClosedSchema = z.object({
  eventType: z.literal("IncidentClosed"),
  payload: z.object({
    incidentId: IncidentId,
    closedAt: z.string(),
  }),
});

export const IncidentEventSchema = z.discriminatedUnion("eventType", [
  IncidentOccurredSchema,
  VehicleDispatchedSchema,
  StaffBoardedSchema,
  VehicleReturnedSchema,
  IncidentClosedSchema,
]);

export type IncidentEventDTO = z.infer<typeof IncidentEventSchema>;
