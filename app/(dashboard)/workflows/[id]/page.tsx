import { auth } from "@clerk/nextjs/server"
import { notFound } from "next/navigation"

import { liveblocks } from "@/lib/liveblocks"
import { getWorkflow } from "@/features/workflows/data"
import { Room } from "@/features/workflows/components/room"
import { WorkflowShell } from "@/features/workflows/components/workflow-shell"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { orgId } = await auth()
  if (!orgId) notFound()

  const workflow = await getWorkflow(orgId, id)
  if (!workflow) notFound()

  await liveblocks.getOrCreateRoom(id, {
    organizationId: orgId,
    defaultAccesses: [],
    groupsAccesses: {
      [orgId]: ["room:write"],
    },
    metadata: {
      title: workflow.name,
    },
  })

  // Always update the room permissions to guarantee the current active organization
  // has write access, in case the room already exists but has outdated permissions.
  await liveblocks.updateRoom(id, {
    groupsAccesses: {
      [orgId]: ["room:write"],
    },
  })

  return (
    <Room roomId={id}>
      <WorkflowShell workflowId={id} />
    </Room>
  )
}