// ===== Embassy Directory =====
const embassies = {
    usa: {
        name: "U.S. Embassy Phnom Penh",
        address: "No. 1, Street 96, Phnom Penh, Cambodia",
        phone: "+855 23 728 000",
        map: "https://goo.gl/maps/B4E1D8VzR5y7a5MXA"
    },
    uk: {
        name: "British Embassy Phnom Penh",
        address: "No. 27-29 Street 75, Phnom Penh, Cambodia",
        phone: "+855 23 427 124",
        map: "https://goo.gl/maps/3yQ6jF5m1G62"
    },
    malaysia: {
        name: "Embassy of Malaysia Phnom Penh",
        address: "No. 220-222, Preah Norodom Blvd, Phnom Penh, Cambodia",
        phone: "+855 23 216 233",
        map: "https://goo.gl/maps/hJ3X2e9kQbK2"
    }
};

// ===== Chatbot Responses =====
const chatbotResponses = {
    en: {
        greeting: [
            "Hello! How can I help you today?",
            "Hi there! Need any assistance?",
            "Hey! How’s your trip going?"
        ],
        default: [
            "Sorry, I didn’t understand that. Could you try again?",
            "Hmm, can you rephrase that?",
            "I’m not sure about that. Try asking in a different way."
        ],
        tours: [
            "You can visit Angkor Wat in Siem Reap – it’s world famous!",
            "Phnom Penh Royal Palace is a must-see attraction.",
            "Try a Mekong River sunset cruise for something relaxing."
        ],
        hotels: [
            "Try Raffles Hotel Le Royal in Phnom Penh.",
            "Sofitel Phnom Penh Phokeethra is a top choice.",
            "Budget-friendly? Try Okay Boutique Hotel."
        ],
        transport: [
            "You can use the Grab app for tuk tuks and cars.",
            "Local buses are available but tuk tuks are faster.",
            "Taxi services are reliable but more expensive."
        ],
        restaurants: [
            "Romdeng Restaurant is very popular!",
            "Try Khmer Surin for Cambodian dishes.",
            "Friends the Restaurant is great for social dining."
        ],
        guides: [
            "You can hire licensed local guides at Angkor Wat.",
            "Local guides can be booked through hotels.",
            "Some guides also offer walking food tours in Phnom Penh."
        ],
        halal: [
            "🍴 Try **Al-Serkal Halal Restaurant** near Central Market.",
            "🍴 **Kuching Halal Restaurant** on Street 19 is popular with locals.",
            "🍴 For Indian halal food, visit **Dosa Corner Phnom Penh**.",
            "🍴 **Hummus House** serves Middle Eastern halal dishes."
        ]
    }
};

// ===== Chatbot Response Function =====
function generateResponse(message) {
    const responses = chatbotResponses["en"]; // default to English
    message = message.toLowerCase(); // normalize input

    // ===== Passport lost case =====
    if (message.includes('passport') || message.includes('lost passport')) {
        return "I’m sorry to hear that you lost your passport. Could you please tell me which country you are from? I can guide you to the nearest embassy.";
    }

    // ===== Embassy lookup =====
    const embassyKeywords = {
        usa: ["usa", "united states", "american"],
        uk: ["uk", "england", "britain", "british"],
        malaysia: ["malaysia", "malaysian"]
    };

    for (const country in embassyKeywords) {
        if (embassyKeywords[country].some(keyword => message.includes(keyword))) {
            const e = embassies[country];
            return `Here’s the nearest embassy for you:<br><br>
            📍 <b>${e.name}</b><br>
            ${e.address}<br>
            ☎️ ${e.phone}<br>
            👉 <a href="${e.map}" target="_blank">View on Google Maps</a>`;
        }
    }

    // ===== Weak signal case =====
    if (message.includes('weak signal') || message.includes('no internet') || message.includes('bad connection')) {
        return "It looks like your signal is weak. You can switch to offline mode to keep accessing maps, phrases, and embassy contacts without internet.";
    }

    // ===== Tours =====
    if (message.includes('tour') || message.includes('visit') || message.includes('angkor') || message.includes('siem reap')) {
        return responses.tours[Math.floor(Math.random() * responses.tours.length)];
    }

    // ===== Hotels =====
    if (message.includes('hotel') || message.includes('accommodation') || message.includes('stay')) {
        return responses.hotels[Math.floor(Math.random() * responses.hotels.length)];
    }

    // ===== Transport =====
    if (message.includes('transport') || message.includes('car') || message.includes('tuk tuk')) {
        return responses.transport[Math.floor(Math.random() * responses.transport.length)];
    }

    // ===== Restaurants =====
    if (message.includes('food') || message.includes('restaurant') || message.includes('eat')) {
        return responses.restaurants[Math.floor(Math.random() * responses.restaurants.length)];
    }

    // ===== Halal food =====
    if (message.includes('halal') || message.includes('muslim food') || message.includes('islamic food')) {
        return responses.halal[Math.floor(Math.random() * responses.halal.length)];
    }

    // ===== Guides =====
    if (message.includes('guide') || message.includes('local')) {
        return responses.guides[Math.floor(Math.random() * responses.guides.length)];
    }

    // ===== Greeting =====
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    }

    // ===== Default =====
    return responses.default[Math.floor(Math.random() * responses.default.length)];
}
