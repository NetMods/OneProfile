'use client'
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";


const Home = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-80 pt-4 ml-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-1"
      >
        <input type="text" {...register("name", { required: true })} className="text-black pl-2" placeholder="name"/>
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}
        <button type="submit" className="bg-white text-black w-2/3">
          Search
        </button>
      </form>
    </div>
  );
}

export default Home;
