import React, { useState } from 'react';

const TextCompletion = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const completions = [
        "is a fascinating topic in the field of artificial intelligence.",
        "has revolutionized the way we interact with technology.",
        "presents both opportunities and challenges for society.",
        "requires careful consideration of ethical implications.",
        "continues to evolve rapidly, pushing the boundaries of what's possible."
    ];

    const generateCompletion = () => {
        if (input.trim() !== '') {
            const randomCompletion = completions[Math.floor(Math.random() * completions.length)];
            setOutput(input + " " + randomCompletion);
        } else {
            setOutput("Please enter a sentence starter.");
        }
    };

    return (
        <div className="card">
            <h2>Interactive Demo: Text Completion</h2>
            <p>Type a sentence starter, and see a simulated LLM completion:</p>
            <input
                type="text"
                className="input-field"
                placeholder="Enter a sentence starter..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={generateCompletion} className="action-button">
                Generate Completion
            </button>
            <div className="output-area">{output}</div>
        </div>
    );
};

export default TextCompletion;
