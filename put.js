import { useEffect } from 'react';
import axios from 'axios';

const todo = {
    id: 10,
    title: 'go to gym',
    body: 'practicing sport is very important',
    userId: 2,
};

const App = () => {
    useEffect(() => {
        axios
            .put('https://jsonplaceholder.typicode.com/posts/10', todo)
            .then((response) => {
                console.log(response.status);
                console.log(response.data);
            })
            .catch((e) => console.log('something went wrong :(', e));
    }, []);
    return <div>PUT REQUEST</div>;
};
export default App;