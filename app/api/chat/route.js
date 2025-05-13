// app/api/chat/route.js
export async function POST(req) {
   try {
     const body = await req.json();
     const { userInput, conversationId, contactId, token } = body;

     const headers = {
       "Authorization": `Bearer ${token}`,
       "Contact-Id": contactId,
       "Api-Key": process.env.TINYTALK_API_KEY,
       "Content-Type": "application/json",
       "Origin": process.env.ORIGIN
     };
 
     const payload = JSON.stringify({
       botId: process.env.NEXT_PUBLIC_TINYTALK_BOT_ID,
       messages: [{ role: "user", content: userInput }],
       temperature: 0.1,
       conversationId: conversationId,
     });
 
     const response = await fetch(process.env.NEXT_PUBLIC_TINYTALK_PATH+'/chat/completions', {
       method: "POST",
       headers,
       body: payload,
     });
 
     // Stream response back to frontend
     return new Response(response.body, {
       headers: {
         "Content-Type": "text/event-stream",
         "Cache-Control": "no-cache",
         "Connection": "keep-alive",
       },
     });
   } catch (error) {
     console.error("API error:", error);
     return new Response("Internal Server Error", { status: 500 });
   }
 }
 