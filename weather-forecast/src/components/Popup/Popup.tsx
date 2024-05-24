import React from 'react';
import './popup.css';

interface PopupProps {
    header: string;
    content: string;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ header, content, onClose }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <header className="popup-header">
                    <h2>{header}</h2>
                    <button onClick={onClose} className="close-button">&times;</button>
                </header>
                <main className="popup-main">
                    <p>{content}</p>
                </main>
            </div>
        </div>
    );
};

export default Popup;
