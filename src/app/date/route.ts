// eslint-disable-next-line @typescript-eslint/require-await
export async function GET(): Promise<Response> {
  return Response.json({ date: new Date().getTime() });
}
