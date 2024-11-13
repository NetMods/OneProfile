import prisma from "db";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix"

export async function POST(request: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please the clerk webhook secret")
  }

  const header = headers();

  const svix_id = header.get('svix-id')
  const svix_timestamp = header.get('svix-timestamp')
  const svix_signature = header.get('svix-signature')

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error Occured -- no svix headers", { status: 400 })
  }

  const payload = await request.json()
  const body = JSON.stringify(payload)

  const wh = new Webhook(WEBHOOK_SECRET)
  let event: WebhookEvent

  try {
    event = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (error) {
    console.log("Error while verifying webhook", error)
    return new Response("Error occured", { status: 400 })
  }

  const { id } = event.data
  const eventType = event.type

  if (!id) {
    throw new Error("Id doesn't exists")
  }

  if (eventType === 'user.created') {
    await CreateProfile(id)
  }

  if (eventType === "user.deleted") {
    await DeleteProfile(id)
  }

  return new Response('Done', { status: 200 })
}


const CreateProfile = async (id: string) => {
  try {
    await prisma.profile.create({
      data: {
        userId: id
      }
    })
  } catch (error) {
    console.error("Error creating user in database:", error);

    if (error instanceof Error)
      return new Response(`Error creating user ${error.message}`, { status: 500 });

    return new Response(`Error creating user`, { status: 500 });
  }
}


const DeleteProfile = async (id: string) => {
  try {
    await prisma.profile.delete({
      where: {
        userId: id
      }
    })
  } catch (error) {
    console.error("Error deleting user in database:", error);

    if (error instanceof Error)
      return new Response(`Error deleting user ${error.message}`, { status: 500 });

    return new Response(`Error deleting user`, { status: 500 });
  }
}
