"use client";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import axios from 'axios'

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      type: "",
    },
  });


  const fetchdata = (data : FieldValues)=>{
    if(data.type==="Leetcode"){
      axios.get('/api/scrap/leetcode',data)
      .then(()=>{})
      .catch((error)=>{})
      .finally(()=>{})
    }else{
      console.log('working on it')
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    fetchdata(data)
  };

  return (
    <div className="max-w-80 pt-4 ml-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-1"
      >
        <div className="flex gap-1 text-black">
          <input
            type="text"
            {...register("name", { required: true })}
            className="text-black pl-2"
            placeholder="name"
          />

          <select
            {...register("type", { required: true })}
            className="text-black"
          >
            <option value="">Select Type</option>
            <option value="Leetcode">Leetcode</option>
            <option value="GeeksForGeeks">GeeksForGeeks</option>
            <option value="Striver">Striver</option>
            <option value="CodeForces">CodeForces</option>
          </select>
        </div>

        {/* Error message for name */}
        {errors.name && <p className="text-red-500">Username is required</p>}

        {/* Error message for type */}
        {errors.type && <p className="text-red-500">Type is required</p>}

        {/* Submit button */}
        <button type="submit" className="bg-white text-black w-2/3">
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
