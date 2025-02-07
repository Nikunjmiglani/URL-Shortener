import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body = await request.json ()
const client = await clientPromise
const db = client.db('shortlinks')
const collection = db.collection('url')
//check if shorturl already exists
const check = await collection.findOne({ shorturl: body.shorturl })
if (check) {
    return Response.json({ message: 'Short URL already exists', success: false, error : true })
}

const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl
})
    return Response.json({ message: 'Success', success: true, error : false })
  }