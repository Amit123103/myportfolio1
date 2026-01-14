import emailjs from '@emailjs/browser';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMicrophone } from 'react-icons/fa';
import './Chatbot.css';

const qaData = {
    "hello": "Hi there! How can I help you today?",
    "who are you": "I am an AI assistant for this portfolio. I can tell you about the developer and their projects.",
    "about": "The developer is a creative frontend engineer specializing in React and animations.",
    "projects": "You can view the Projects page to see the latest work. We have web apps, mobile UIs, and dashboards.",
    "contact": "You can reach out via the Contact page, or I can connect you right now! Type 'email' to start.",
    "default": "I'm not sure about that. Try asking about 'projects', 'about', or say 'hello'!"
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hello! Ask me anything about the portfolio.' }
    ]);
    const [inputStr, setInputStr] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [mode, setMode] = useState('chat'); // 'chat' or 'email'
    const [emailForm, setEmailForm] = useState({ name: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    const messagesEndRef = useRef(null);

    // Voice Recognition Setup
    const startListening = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Your browser doesn't support speech recognition.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setInputStr(transcript);
        };

        recognition.start();
    };

    // Initialize EmailJS
    useEffect(() => {
        // emailjs.init(PUBLIC_KEY); // Not strictly necessary if passed to send()
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputStr.trim()) return;

        const userMsg = inputStr.toLowerCase();
        setMessages(prev => [...prev, { type: 'user', text: inputStr }]);
        setInputStr('');

        // Simulate AI thinking
        setTimeout(() => {
            let botResponse = qaData['default'];

            // Simple keyword matching
            Object.keys(qaData).forEach(key => {
                if (userMsg.includes(key)) {
                    botResponse = qaData[key];
                }
            });

            if (userMsg.includes('email') || userMsg.includes('talk to human') || userMsg.includes('hire')) {
                botResponse = "Sure! Please provide your details below, and I'll send it directly to the developer's email.";
                setMode('email');
            }

            setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
        }, 600);
    };

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            await emailjs.send(
                'service_hgbss5n',
                'template_7el8g1s',
                {
                    from_name: emailForm.name,
                    message: emailForm.message,
                    to_name: 'Amit',
                },
                '0uaE9NgAzOusvs7Jp'
            );

            setMessages(prev => [...prev, { type: 'bot', text: `Message sent successfully! Thanks ${emailForm.name}.` }]);
            setMode('chat');
            setEmailForm({ name: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            const errMsg = error.text || error.message || 'Check keys';
            setMessages(prev => [...prev, { type: 'bot', text: `Oops! Error: ${errMsg}` }]);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <motion.button
                className="chatbot-toggle"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                💬
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-window"
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.8 }}
                    >
                        <div className="chatbot-header">
                            <h3>AI Assistant</h3>
                            <button onClick={() => setIsOpen(false)}>×</button>
                        </div>

                        <div className="chatbot-messages">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`message ${msg.type}`}>
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {mode === 'chat' ? (
                            <div className="chatbot-input">
                                <input
                                    type="text"
                                    value={inputStr}
                                    onChange={(e) => setInputStr(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask me something..."
                                />
                                <button type="button" onClick={startListening} className={`mic-btn ${isListening ? 'listening' : ''}`}>
                                    <FaMicrophone />
                                </button>
                                <button onClick={handleSend}>Send</button>
                            </div>
                        ) : (
                            <form className="chatbot-email-form" onSubmit={handleEmailSubmit}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    value={emailForm.name}
                                    onChange={e => setEmailForm({ ...emailForm, name: e.target.value })}
                                    disabled={isSending}
                                />
                                <textarea
                                    placeholder="Your Message"
                                    required
                                    value={emailForm.message}
                                    onChange={e => setEmailForm({ ...emailForm, message: e.target.value })}
                                    disabled={isSending}
                                ></textarea>
                                <div className="form-buttons">
                                    <button type="submit" disabled={isSending}>
                                        {isSending ? 'Sending...' : 'Send Email'}
                                    </button>
                                    <button type="button" onClick={() => setMode('chat')} className="cancel-btn" disabled={isSending}>Cancel</button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
