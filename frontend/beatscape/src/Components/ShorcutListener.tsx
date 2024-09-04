import React, { useEffect } from 'react';

interface ShortcutListenerProps {
    shortcutActions: { [key: string]: string | string[] };
    onAction: (actionName: string) => void;
}

const ShortcutListener: React.FC<ShortcutListenerProps> = ({ shortcutActions, onAction }) => {

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const keys: string[] = [];
            if (event.ctrlKey) keys.push('Ctrl');
            if (event.shiftKey) keys.push('Shift');
            if (event.altKey) keys.push('Alt');

            const keyName = event.key === ' ' ? 'Space' : event.key;
            if (keyName !== 'Control' && keyName !== 'Shift' && keyName !== 'Alt') {
                keys.push(keyName);
            }

            const combination = keys.join('+');
            const action = shortcutActions[combination];
            if (action) {
                if (Array.isArray(action)) {
                    action.forEach(act => onAction(act));
                } else {
                    onAction(action);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [shortcutActions, onAction]);

    return null; // This component does not render anything
};

export default ShortcutListener;
