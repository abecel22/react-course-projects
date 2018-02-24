const appRoot = document.getElementById('app');

let visibility = false;
const toggleDiv = () => {
    visibility = !visibility;
    render();
};

//line 17- if visibility is true , then the div appears...
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDiv}>
                {visibility === true ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey! These are some details you can now see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
