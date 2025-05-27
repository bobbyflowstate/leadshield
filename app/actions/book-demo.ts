'use server'

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/ZvoYMA1Xfb4iARo7U5u5/webhook-trigger/068808a7-4a10-4586-be1b-486ee886120e'

type FormData = {
  name: string
  phone: string
}

export async function submitBookingForm(formData: FormData) {
  try {
    // Validate phone number format
    if (!formData.phone.match(/^\+1\d{10}$/)) {
      return { error: 'Invalid phone number format' }
    }

    // Validate name
    if (!formData.name || formData.name.length < 2 || formData.name.length > 100) {
      return { error: 'Name must be between 2 and 100 characters' }
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error('Webhook call failed')
    }

    return { success: true }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { error: 'Failed to submit form' }
  }
} 