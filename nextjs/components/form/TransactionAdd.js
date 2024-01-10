import React, { useState } from 'react';

const TransactionAdd = () => {
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [field3, setField3] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Field 1:', field1);
        console.log('Field 2:', field2);
        console.log('Field 3:', field3);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Field 1:</label>
                <input
                    type="text"
                    value={field1}
                    onChange={(e) => setField1(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Field 2:</label>
                <input
                    type="text"
                    value={field2}
                    onChange={(e) => setField2(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Field 3:</label>
                <input
                    type="text"
                    value={field3}
                    onChange={(e) => setField3(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TransactionAdd;