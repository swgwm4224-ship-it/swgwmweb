export const CONTACT_INFO = {
  phone: '8822470469',
  phoneFormatted: '+91 88224 70469',
  phoneTel: '+918822470469',
  email: 'swgwm4224@gmail.com',
  whatsappNumber: '918822470469',
  getWhatsAppUrl: (message?: string) => {
    const text = message ? `?text=${encodeURIComponent(message)}` : '';
    return `https://wa.me/918822470469${text}`;
  },
  getMailtoUrl: (subject?: string, body?: string) => {
    const params = new URLSearchParams();
    if (subject) params.set('subject', subject);
    if (body) params.set('body', body);
    const queryString = params.toString();
    return `mailto:swgwm4224@gmail.com${queryString ? `?${queryString}` : ''}`;
  },
};
