"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from "react";

const Home = () => {
  const [response, setResponse] = useState({})
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      type: "",
    },
  });

  const fetchData = async (data: FieldValues) => {
    const requestData = { username: data.name };
    let API_URL = "";

    switch (data.type) {
      case "Leetcode":
        API_URL = "/api/scrap/leetcode";
        break;
      case "GeeksForGeeks":
        API_URL = "/api/scrap/geeksforgeeks";
        break;
      case "Striver":
        API_URL = "/api/scrap/striver";
        break;
      case "CodeForces":
        API_URL = "/api/scrap/codeforces";
        break;
      default:
        console.error("Invalid type selected");
        return;
    }

    try {
      const { data } = await axios.post(API_URL, requestData);
      setResponse(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    fetchData(data);
  };

  return (
    <div className="max-w-md mx-auto pt-4 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex bg-red-50">
          <div>
            <input
              type="text"
              {...register("name", { required: true })}
              className="border flex focus-within:outline-none border-gray-300 p-1 text-black"
              placeholder="Username"
            />
            {errors.name && <p className="text-red-500">Username is required</p>}
          </div>

          <div className="w-full bg-red-600">
            <select
              {...register("type", { required: true })}
              className="border w-full h-full border-gray-300 p-1 text-black"
            >
              <option value="">Select Type</option>
              <option value="Leetcode">Leetcode</option>
              <option value="GeeksForGeeks">GeeksForGeeks</option>
              <option value="Striver">Striver</option>
              <option value="CodeForces">CodeForces</option>
            </select>
          </div>
          <button type="submit" className="text-black p-1 rounded-sm bg-white">
            Search
          </button>
        </div>
        {errors.type && <p className="text-destructive">Type is required</p>}

      </form>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default Home;
