const App = () => {
    return (
        <div>
            <Tweet
                username="edgarsanchez"
                name="Edgar"
                date="08/10/2022"
                message="I love React JS"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
