export const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return "Namaste! Welcome to Kusum Computer Centre. How can I help you today?";
    }

    if (lowerInput.includes('course') || lowerInput.includes('ccc') || lowerInput.includes('computer')) {
        return "We offer the government-certified CCC course (3 months). It covers basic computer concepts, MS Office, and internet usage. Very useful for govt jobs!";
    }

    if (lowerInput.includes('price') || lowerInput.includes('fee') || lowerInput.includes('cost')) {
        return "Our course fees are very affordable. For CCC, it's roughly ₹3,500 (including exam fees). Please visit the centre for the exact breakdown.";
    }

    if (lowerInput.includes('aadhaar') || lowerInput.includes('money') || lowerInput.includes('bank')) {
        return "Yes, we are a DigiPay point! You can withdraw cash using Aadhaar thumb impression and transfer money to any bank account.";
    }

    if (lowerInput.includes('pan') || lowerInput.includes('voter')) {
        return "We can help you apply for a new PAN card or Voter ID. Just bring your Aadhaar card and photos.";
    }

    if (lowerInput.includes('time') || lowerInput.includes('open')) {
        return "We are open Monday to Saturday, from 9:00 AM to 7:00 PM.";
    }

    if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('address')) {
        return "We are located at N.H.-2 G.T. Road, Rajatalab, Varanasi. Near the main market.";
    }

    return "I'm not sure about that. But you can select 'Talk to Human' to chat with Naveen Sir on WhatsApp!";
};
