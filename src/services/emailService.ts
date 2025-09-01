import { UserSelection } from '../types';

export const sendCompletionEmail = async (data: UserSelection): Promise<boolean> => {
  try {
    // Format the email content
    const emailContent = formatEmailContent(data);
    
    // For demo purposes, we'll use EmailJS
    // In production, you would replace this with your preferred email service
    const emailData = {
      to_email: 'aasiyanaqvi6@gmail.com',
      subject: 'New Zanaya Service Request',
      message: emailContent,
      from_name: data.personalDetails.fullName,
      reply_to: data.personalDetails.phoneNumber
    };

    // Simulate email sending
    console.log('Email would be sent with the following data:', emailData);
    
    // Return true to simulate successful sending
    // In production, replace with actual email service call
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

const formatEmailContent = (data: UserSelection): string => {
  const selectedAddOns = data.addOns.map(addon => `- ${addon.name} (₹${addon.price})`).join('\n');
  const selectedServices = data.services.map(service => `- ${service.name} (₹${service.price})`).join('\n');
  
  const totalKitPrice = data.ritualKit.price;
  const totalAddOnsPrice = data.addOns.reduce((sum, addon) => sum + addon.price, 0);
  const totalServicesPrice = data.services.reduce((sum, service) => sum + service.price, 0);
  const totalPrice = totalKitPrice + totalAddOnsPrice + totalServicesPrice;

  return `
ZANAYA - NEW SERVICE REQUEST
=======================================

PERSONAL DETAILS:
- Full Name: ${data.personalDetails.fullName}
- Phone Number: ${data.personalDetails.phoneNumber}
- Address: ${data.personalDetails.address}
- Special Notes: ${data.personalDetails.specialNotes || 'None'}

RELIGIOUS DETAILS:
- Religion: ${data.religion}
- Sub-Community: ${data.subCommunity}
- Region: ${data.region}

RITUAL KIT SELECTED:
- ${data.ritualKit.name} (₹${data.ritualKit.price})
- Description: ${data.ritualKit.description}
- Items: ${data.ritualKit.items.join(', ')}

ADD-ONS SELECTED:
${selectedAddOns || 'None'}

SERVICES SELECTED:
${selectedServices || 'None'}

PRICING SUMMARY:
- Ritual Kit: ₹${totalKitPrice}
- Add-ons Total: ₹${totalAddOnsPrice}
- Services Total: ₹${totalServicesPrice}
- TOTAL AMOUNT: ₹${totalPrice}

=======================================
Request submitted at: ${new Date().toLocaleString('en-IN')}

Please contact the customer within 2 hours to confirm arrangements.
  `.trim();
};