const App = () => {
    return (
        <div>
            <Person
                name="EdgarSanchez"
                age={27}
                hobbies={['Sleeping', 'Playing video games', 'Working out']}
            />
            <Person
                name="Benjamin"
                age={2}
                hobbies={['Playing with toys', 'Watching Disney+']}
            />
            <Person
                name="Jon Snow"
                age={25}
                hobbies={['Sword fighting', 'Flying on dragons']}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
