import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

function App() {
    const { register, handleSubmit } = useForm();
    const { image, setImage } = useState();
    const { title, setTitle } = useState();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        var data={
            title: data.title,
            testImage: data.file[0]
        }
        console.log(data);

    await axios
      .post("https://qodeitblogs2.herokuapp.com/add-blogimg", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
        
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" {...register("file")} />
                <input type="text" {...register("title")} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default App;