import { useEffect } from 'react';
import axios from 'axios';
const App = () => {
    useEffect(() => {
        const getTodo = () => {
            axios
                .get('https://jsonplaceholder.typicode.com/todos/1')
                .then((response) => {
                    console.log(response.status);
                    console.log(response.data);
                })
                .catch((e) => console.log('something went wrong :(', e));
        };
        getTodo();
    }, []);
    return <div>GET REQUEST</div>;
};
export default App;
