import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
    useEffect(() => {
        axios
            .delete('https://jsonplaceholder.typicode.com/posts/10')
            .then((response) => {
                console.log(response.status);
            })
            .catch((e) => console.log('something went wrong!', e));
    }, []);
    return <div>DELETE REQUEST</div>;
};
export default App;
