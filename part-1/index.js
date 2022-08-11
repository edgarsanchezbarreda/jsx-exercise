const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Edgar" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
