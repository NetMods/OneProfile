"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios, { isAxiosError } from "axios";
import { useState } from "react";
import { OPTIONS } from "@/lib/constants";
import DropDown from "./components/dropDown/DropDown";

const Home = () => {
  const [response, setResponse] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      type: OPTIONS.LEETCODE,
    },
  });

  const type = watch('type');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const fetchData = async (data: FieldValues) => {
    const requestData = { username: data.name };
    let API_URL = "";

    switch (type) {
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
      case OPTIONS.CODECHEF:
        API_URL = "/api/scrap/codechef";
        break;
      default:
        console.error("Invalid type selected");
        return;
    }

    try {
      const response = await axios.post(API_URL, requestData);
      setResponse(response.data);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response && error.response.status === 404) {
          setResponse(error.response.data);
        }
      }
      console.error("Error fetching data:", error);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setResponse({});
    fetchData(data);
  };

  return (
    // add this to this class later max-w-md
    <div className="max-w-md mx-auto pt-4 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-1">
          <div>
            <input
              type="text"
              {...register("name", { required: true })}
              className="border flex focus-within:outline-none border-gray-300 p-1 text-black"
              placeholder="Username"
            />
          </div>
          <DropDown label="Select Type" setValue={setValue}/>
          <button
            type="submit"
            className="text-black p-1 h-8 rounded-sm bg-white"
          >
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