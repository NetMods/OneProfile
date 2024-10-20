"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { OPTIONS } from "@/lib/constants";

const Home = () => {
  const [response, setResponse] = useState({});
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
      case OPTIONS.LEETCODE:
        API_URL = "/api/scrap/leetcode";
        break;
      case OPTIONS.GFG:
        API_URL = "/api/scrap/geeksforgeeks";
        break;
      case OPTIONS.STRIVER:
        API_URL = "/api/scrap/striver";
        break;
      case OPTIONS.CODEFORCES:
        API_URL = "/api/scrap/codeforces";
        break;
      default:
        console.error("Invalid type selected");
        return;
    }

    try {
      const { data } = await axios.post(API_URL, requestData);
      setResponse(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setResponse({})
    fetchData(data);
  };

  return (
    <div className="max-w-md mx-auto pt-4 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex bg-red-50">
          <div>
            <input
              type="text"
              {...register("name", { required: true })}
              className="border flex focus-within:outline-none border-gray-300 p-1 text-black"
              placeholder="Username"
            />
          </div>

          <div className="w-full bg-red-600">
            <select
              {...register("type", { required: true })}
              className="border w-full h-full border-gray-300 p-1 text-black"
            >
              <option value="">Select Type</option>
              <option value={OPTIONS.LEETCODE}>Leetcode</option>
              <option value={OPTIONS.GFG}>Geeks For Geeks</option>
              <option value={OPTIONS.STRIVER}>Striver</option>
              <option value={OPTIONS.CODEFORCES}>CodeForces</option>
            </select>
          </div>
          <button type="submit" className="text-black p-1 rounded-sm bg-white">
            Search
          </button>
        </div>
        {errors.type && <p className="text-destructive">Type is required</p>}
        {errors.name && <p className="text-red-500">Username is required</p>}
      </form>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default Home;
