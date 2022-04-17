import { useEffect } from "react";
import axios from "axios";
const App = () => {
  useEffect(() => {
    const postTodo = async () => {
      const data = {
        title: "drink water",
        body: "I should drink water",
        userId: 3
      };
      const headers = { "header-name": "value" };
      const config = { headers, };
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          data,
          config
        );
        console.log(response.status);
        console.log(response.data);
      } catch (e) {
        console.log("something went wrong!",e);
      }
    };
    postTodo();
  }, []);
  return <div>POST REQUEST</div>;
};
export default App;