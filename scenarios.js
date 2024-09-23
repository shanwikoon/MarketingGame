
// Array of scenarios
const scenarios = [
    {
        question: "You are launching a new product. What approach do you take?",
        choices: [
            {
                text: "Launch a premium, high-quality product.",
                profitChange: -10,
                brandReputationChange: 15,
                customerSatisfactionChange: 10,
                marketShareChange: 5,
                scoreChange: 20
            },
            {
                text: "Launch a budget-friendly product.",
                profitChange: 10,
                brandReputationChange: -5,
                customerSatisfactionChange: -10,
                marketShareChange: 15,
                scoreChange: 10
            }
        ]
    },
    {
        question: "How do you set the pricing strategy?",
        choices: [
            {
                text: "Set a high price to maximize short-term profits.",
                profitChange: 15,
                brandReputationChange: -10,
                customerSatisfactionChange: -5,
                marketShareChange: -5,
                scoreChange: -5
            },
            {
                text: "Set a competitive price to gain market share.",
                profitChange: -5,
                brandReputationChange: 5,
                customerSatisfactionChange: 10,
                marketShareChange: 10,
                scoreChange: 20
            }
        ]
    },
    {
        question: "What promotion strategy do you choose?",
        choices: [
            {
                text: "Invest heavily in a social media campaign.",
                profitChange: -10,
                brandReputationChange: 15,
                customerSatisfactionChange: 5,
                marketShareChange: 10,
                scoreChange: 20
            },
            {
                text: "Rely on word-of-mouth marketing.",
                profitChange: 5,
                brandReputationChange: 5,
                customerSatisfactionChange: 0,
                marketShareChange: -5,
                scoreChange: 5
            }
        ]
    },
    {
        question: "Which distribution channel do you prioritize?",
        choices: [
            {
                text: "Sell exclusively through online channels.",
                profitChange: 10,
                brandReputationChange: -5,
                customerSatisfactionChange: 5,
                marketShareChange: -5,
                scoreChange: 5
            },
            {
                text: "Sell through both online and physical stores.",
                profitChange: -5,
                brandReputationChange: 10,
                customerSatisfactionChange: 10,
                marketShareChange: 10,
                scoreChange: 25
            }
        ]
    },
    {
        question: "Do you invest in product innovation?",
        choices: [
            {
                text: "Invest in R&D to launch a unique feature.",
                profitChange: -15,
                brandReputationChange: 20,
                customerSatisfactionChange: 10,
                marketShareChange: 10,
                scoreChange: 25
            },
            {
                text: "Keep the product as-is and save costs.",
                profitChange: 10,
                brandReputationChange: -10,
                customerSatisfactionChange: -5,
                marketShareChange: -5,
                scoreChange: -10
            }
        ]
    },
    {
        question: "Do you offer seasonal pricing promotions?",
        choices: [
            {
                text: "Offer deep discounts during holiday sales.",
                profitChange: -20,
                brandReputationChange: 5,
                customerSatisfactionChange: 20,
                marketShareChange: 15,
                scoreChange: 20
            },
            {
                text: "Maintain regular pricing.",
                profitChange: 15,
                brandReputationChange: -5,
                customerSatisfactionChange: -10,
                marketShareChange: -10,
                scoreChange: -10
            }
        ]
    },
    {
        question: "Should you shift to eco-friendly materials?",
        choices: [
            {
                text: "Shift to eco-friendly materials.",
                profitChange: -15,
                brandReputationChange: 20,
                customerSatisfactionChange: 15,
                marketShareChange: 5,
                scoreChange: 25
            },
            {
                text: "Stick with traditional materials to reduce costs.",
                profitChange: 10,
                brandReputationChange: -10,
                customerSatisfactionChange: -5,
                marketShareChange: -10,
                scoreChange: -15
            }
        ]
    },
    {
        question: "Do you expand distribution to international markets?",
        choices: [
            {
                text: "Expand distribution to international markets.",
                profitChange: -20,
                brandReputationChange: 10,
                customerSatisfactionChange: 5,
                marketShareChange: 20,
                scoreChange: 15
            },
            {
                text: "Focus on local markets.",
                profitChange: 5,
                brandReputationChange: 0,
                customerSatisfactionChange: 5,
                marketShareChange: -5,
                scoreChange: 5
            }
        ]
    }
];

// Start game
let currentScenario = 0;

function displayScenario(index) {
    let scenario = scenarios[index];
    document.getElementById('question').textContent = scenario.question;
    
    let choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    // Randomize the choices order
    let shuffledChoices = scenario.choices.sort(() => Math.random() - 0.5);
    
    shuffledChoices.forEach((choice, i) => {
        let button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = function() { makeChoice(i); };
        choicesDiv.appendChild(button);
    });
}

// Display the first scenario when the page loads
window.onload = function() {
    displayScenario(currentScenario);
};
