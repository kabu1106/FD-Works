// types/commands/base.ts
export interface CommandBase {
  commandId: string
  executedAt: string
  executedBy: {
    userId: string
    name: string
  }

  // Undo/Redo用
  inverseOf?: string // 元のcommandId
}
