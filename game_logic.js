
// Game state
let gameState = {
    profit: 50,
    brandReputation: 50,
    customerSatisfaction: 50,
    marketShare: 50,
    score: 0
};

// Function to update game metrics and display
function makeDecision(profitChange = 0, brandReputationChange = 0, customerSatisfactionChange = 0, marketShareChange = 0, scoreChange = 0) {
    gameState.profit += profitChange;
    gameState.brandReputation += brandReputationChange;
    gameState.customerSatisfaction += customerSatisfactionChange;
    gameState.marketShare += marketShareChange;
    gameState.score += scoreChange;

    // Ensure all metrics stay within bounds (0 - 100)
    gameState.profit = Math.max(0, Math.min(100, gameState.profit));
    gameState.brandReputation = Math.max(0, Math.min(100, gameState.brandReputation));
    gameState.customerSatisfaction = Math.max(0, Math.min(100, gameState.customerSatisfaction));
    gameState.marketShare = Math.max(0, Math.min(100, gameState.marketShare));

    updateDisplay();
}

// Function to display the game metrics on the page
function updateDisplay() {
    document.getElementById('profit').textContent = gameState.profit;
    document.getElementById('brandReputation').textContent = gameState.brandReputation;
    document.getElementById('customerSatisfaction').textContent = gameState.customerSatisfaction;
    document.getElementById('marketShare').textContent = gameState.marketShare;
    document.getElementById('score').textContent = gameState.score;
}

// Function to display feedback after each decision
function provideFeedback(profitChange, brandReputationChange, customerSatisfactionChange, marketShareChange) {
    let feedback = 'Previous Decision Outcome: ';
    if (profitChange !== 0) feedback += `Profit changed by ${profitChange}. `;
    if (brandReputationChange !== 0) feedback += `Brand Reputation changed by ${brandReputationChange}. `;
    if (customerSatisfactionChange !== 0) feedback += `Customer Satisfaction changed by ${customerSatisfactionChange}. `;
    if (marketShareChange !== 0) feedback += `Market Share changed by ${marketShareChange}.`;

    document.getElementById('feedback').textContent = feedback;
}

// Function to handle player's decision
function makeChoice(choiceIndex) {
    let choice = scenarios[currentScenario].choices[choiceIndex];
    makeDecision(
        choice.profitChange,
        choice.brandReputationChange,
        choice.customerSatisfactionChange,
        choice.marketShareChange || 0,
        choice.scoreChange
    );
    provideFeedback(
        choice.profitChange,
        choice.brandReputationChange,
        choice.customerSatisfactionChange,
        choice.marketShareChange || 0
    );

    currentScenario++;
    if (currentScenario < scenarios.length) {
        displayScenario(currentScenario);
    } else {
        endGame();
    }
}

// End the game and show final results with detailed feedback and feedforward
function endGame() {
    document.getElementById('question').textContent = "Game Over!";
    document.getElementById('choices').innerHTML = '';

    let finalFeedback = `<strong>Final Score: ${gameState.score}</strong><br><br>`;
    finalFeedback += `<strong>Performance Breakdown:</strong><br>`;
    finalFeedback += `Final Profit: ${gameState.profit}<br>`;
    finalFeedback += `Final Brand Reputation: ${gameState.brandReputation}<br>`;
    finalFeedback += `Final Customer Satisfaction: ${gameState.customerSatisfaction}<br>`;
    finalFeedback += `Final Market Share: ${gameState.marketShare}<br><br>`;

    // Adjust score thresholds for better feedback control
    if (gameState.score >= 80) {
        finalFeedback += "You demonstrated excellent marketing strategy, balancing all aspects exceptionally well.<br><br>";
        finalFeedback += "<strong>Feedforward:</strong> Keep up the great work! Focus on maintaining this balance as the company grows.";
    } else if (gameState.score >= 60) {
        finalFeedback += "You showed strong marketing skills, with room to improve in a few areas.<br><br>";
        finalFeedback += "<strong>Feedforward:</strong> Focus on improving areas like pricing strategy or brand reputation, and continue building on your strengths.";
    } else if (gameState.score >= 40) {
        finalFeedback += "You demonstrated decent decision-making, but there's significant room for improvement in balancing the 4Ps.<br><br>";
        finalFeedback += "<strong>Feedforward:</strong> Focus on improving your long-term strategy, especially around product and pricing.";
    } else {
        finalFeedback += "You struggled to manage many aspects of marketing, leading to unbalanced outcomes.<br><br>";
        finalFeedback += "<strong>Feedforward:</strong> Focus on balancing all elements of the 4Ps, and avoid prioritizing short-term profit at the expense of customer satisfaction or market share.";
    }

    document.getElementById('feedback').innerHTML = finalFeedback;
}

// Start the game
window.onload = function() {
    displayScenario(currentScenario);
};
