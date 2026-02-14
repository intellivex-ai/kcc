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

    if (lowerInput.includes('scholarship') || lowerInput.includes('money') && lowerInput.includes('free')) {
        return "We can help you apply for UP Scholarship (Pre & Post Matric). Documents needed: Income/Caste Cert, Aadhaar, Bank Passbook, and Result.";
    }

    if (lowerInput.includes('admit') || lowerInput.includes('hall ticket')) {
        return "We can download Admit Cards for CCC, O-Level, SSC, UPSC, and other exams. Please visit the centre with your Application Number.";
    }

    if (lowerInput.includes('result') || lowerInput.includes('mark')) {
        return "Check your results here! We provide printouts for Board Results, CCC/O-Level results, and competitive exam scores.";
    }

    if (lowerInput.includes('vacancy') || lowerInput.includes('job') || lowerInput.includes('form')) {
        return "Stay updated with latest vacanies! We fill forms for SSC, UP Police, Railway, Banking, and more. Visit us to apply correctly.";
    }



    if (lowerInput.includes('document') || lowerInput.includes('xerox') || lowerInput.includes('print')) {
        return "We offer high-quality Color/B&W Printing, Xerox, Lamination, and Hindi/English Typing services.";
    }

    if (lowerInput.includes('tally') || lowerInput.includes('accounting') || lowerInput.includes('gst')) {
        return "We offer Tally Prime with GST course. It's perfect for accounting jobs. Duration: 3 months.";
    }

    if (lowerInput.includes('o-level') || lowerInput.includes('o level')) {
        return "O-Level is a 1-year diploma from NIELIT. It's equivalent to DCA/PGDCA and mandatory for high-level govt jobs.";
    }

    if (lowerInput.includes('passport') || lowerInput.includes('visa')) {
        return "Need a Passport? We can apply for Fresh/Re-issue Passports. Please bring Aadhar, Pan, and 10th Marksheet.";
    }

    if (lowerInput.includes('driving') || lowerInput.includes('license') || lowerInput.includes('dl')) {
        return "We assist with Learner's and Permanent Driving License applications. Visit us to book your slot.";
    }

    if (lowerInput.includes('pf') || lowerInput.includes('pension') || lowerInput.includes('jeevan')) {
        return "Withdraw your PF or submit your Jeevan Pramaan (Life Certificate) digitally at our centre using biometric authentication.";
    }

    if (lowerInput.includes('railway') || lowerInput.includes('ticket') || lowerInput.includes('train') || lowerInput.includes('irctc')) {
        return "We are an authorized IRCTC agent. Book confirmed Tatkal, Sleeper, and AC train tickets with us.";
    }

    return "I am still learning! For complex queries, please click the 'Talk to Human' button to chat with Naveen Sir directly.";
};
