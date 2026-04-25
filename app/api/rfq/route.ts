import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const data = {
      name: String(formData.get('name') || ''),
      company: String(formData.get('company') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      country: String(formData.get('country') || ''),
      product: String(formData.get('product') || ''),
      quantity: String(formData.get('quantity') || ''),
      message: String(formData.get('message') || ''),
    };

    if (!data.name || !data.email || !data.phone || !data.country || !data.message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill all required fields.',
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully.',
      data,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}
