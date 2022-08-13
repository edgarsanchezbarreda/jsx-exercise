const Person = ({ name, age, hobbies }) => {
    let message;
    if (age > 18) {
        message = 'Please go vote!';
    } else {
        message = 'You must be 18.';
    }
    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{message}</h3>
            <p>Name: {name.length > 8 ? name.slice(0, 6) : name}</p>
            <ul>
                {hobbies.map((h) => (
                    <li>{h}</li>
                ))}
            </ul>
        </div>
    );
};
