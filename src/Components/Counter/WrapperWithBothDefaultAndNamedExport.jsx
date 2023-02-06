import React from 'react';

export default function Wrapper({ children }) {
    return (
        <div>
            Wrapper
            {children}
        </div>
    );
}

function ExtraWrapper(props) {
    return (
        <div>
            <h3>This is extra wrapper!</h3>
        </div>
    );
}
export { ExtraWrapper };
