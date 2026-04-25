import { NextResponse } from 'next/server';import { rfqSchema } from '@/lib/rfq';
export async function POST(req:Request){const body=await req.json();const parsed=rfqSchema.safeParse(body);if(!parsed.success)return NextResponse.json({error:'Invalid form data'}, {status:400});
// Production: save to Prisma Lead and send email via SMTP/Nodemailer. Kept safe for first deployment without DB credentials.
console.log('RFQ lead', parsed.data);return NextResponse.json({ok:true});}
