import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const shorturl = params.shorturl;

  console.log("Short URL parameter:", shorturl);

  try {
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    console.log("Connected to MongoDB successfully");

    const doc = await collection.findOne({ shorturl });

    console.log("Document found:", doc);

    if (doc && doc.url) {
      console.log("Redirecting to:", doc.url);
      redirect(doc.url);
    } else {
      console.log("No matching document found, redirecting to fallback URL");
      redirect(`${process.env.NEXT_PUBLIC_HOST}`);
    }
  } catch (error) {
    console.error("Error in Page function:", error);
    redirect(`${process.env.NEXT_PUBLIC_HOST}`); // Fallback in case of an error
  }

  return null; // Nothing to render
}


  
