import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [button, setButton] = useState(true);

    return (
        <UserContext.Provider value={{ user, setUser, button, setButton }}>
            {children}
        </UserContext.Provider>
    );
};
