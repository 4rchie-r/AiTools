import React, { useState } from 'react';

const SentimentAnalysis = () => {
    const [sentimentInput, setSentimentInput] = useState('');
    const [sentimentOutput, setSentimentOutput] = useState('');

    const analyzeSentiment = () => {
        if (sentimentInput.trim() !== '') {
            setSentimentOutput('');
            setTimeout(() => {
                const words = sentimentInput.toLowerCase().split(' ');
                const positiveWords = ['good', 'great', 'excellent', 'happy', 'love', 'like', 'best'];
                const negativeWords = ['bad', 'awful', 'terrible', 'sad', 'hate', 'worst', 'dislike'];
                let score = 0;

                words.forEach(word => {
                    if (positiveWords.includes(word)) score++;
                    if (negativeWords.includes(word)) score--;
                });

                let sentiment;
                if (score > 0) sentiment = 'Positive 😊';
                else if (score < 0) sentiment = 'Negative 😞';
                else sentiment = 'Neutral 😐';

                setSentimentOutput(`Sentiment: ${sentiment}`);
            }, 300);
        } else {
            setSentimentOutput('Please enter a sentence for analysis.');
        }
    };

    return (
        <div className="card">
            <h2>Interactive Demo: Sentiment Analysis</h2>
            <p>Enter a sentence, and see a simulated sentiment analysis:</p>
            <input
                type="text"
                className="input-field"
                placeholder="Enter a sentence for sentiment analysis..."
                value={sentimentInput}
                onChange={(e) => setSentimentInput(e.target.value)}
            />
            <button onClick={analyzeSentiment} className="action-button">
                Analyze Sentiment
            </button>
            <div className="output-area">{sentimentOutput}</div>
        </div>
    );
};

export default SentimentAnalysis;
