export async function POST(req) {
  const data = await request.json();

  try {
    console.log("something", data);
  } catch (e) {
    console.log(e);
  }
}
