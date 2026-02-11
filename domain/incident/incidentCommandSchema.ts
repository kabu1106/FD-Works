// src/domain/incident/incidentCommandSchema.ts
import { z } from "zod";

const IncidentId = z.string().uuid();
const DutyId = z.string().uuid();

export const ReportIncidentCommandSchema = z.object({
  type: z.literal("ReportIncident"),
  incidentId: IncidentId,
  dutyId: DutyId,
  locationId: z.number().int(),
  occurredAt: z.string(),
});

export const DispatchVehicleCommandSchema = z.object({
  type: z.literal("DispatchVehicle"),
  incidentId: IncidentId,
  vehicleId: z.number().int(),
  dispatchedAt: z.string(),
});

export const BoardStaffCommandSchema = z.object({
  type: z.literal("BoardStaff"),
  incidentId: IncidentId,
  vehicleId: z.number().int(),
  staffId: z.number().int(),
  boardedAt: z.string(),
});

export const ReturnVehicleCommandSchema = z.object({
  type: z.literal("ReturnVehicle"),
  incidentId: IncidentId,
  vehicleId: z.number().int(),
  returnedAt: z.string(),
});

export const CloseIncidentCommandSchema = z.object({
  type: z.literal("CloseIncident"),
  incidentId: IncidentId,
  closedAt: z.string(),
});

export const IncidentCommandSchema = z.discriminatedUnion("type", [
  ReportIncidentCommandSchema,
  DispatchVehicleCommandSchema,
  BoardStaffCommandSchema,
  ReturnVehicleCommandSchema,
  CloseIncidentCommandSchema,
]);

export type IncidentCommandDTO = z.infer<typeof IncidentCommandSchema>;
