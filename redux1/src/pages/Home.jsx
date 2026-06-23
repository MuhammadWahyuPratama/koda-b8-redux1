import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaPaperPlane, FaRotateLeft } from "react-icons/fa6";

import { surveySchema } from "../validation/surveySchema";
import { useDispatch } from "react-redux";
import { addData } from "../redux/surveySlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(surveySchema),
    defaultValues: {
      cigarette: [],
    },
  });

  const smoker = watch("smoker");
  const cigarette = watch("cigarette");

  useEffect(() => {
    if (smoker === "Ya" && (!cigarette || cigarette.length === 0)) {
      setError("cigarette", {
        type: "manual",
        message: "Silahkan pilih minimal satu merk rokok.",
      });
    } else {
      clearErrors("cigarette");
    }
  }, [smoker, cigarette, setError, clearErrors]);

  const onSubmit = (data) => {
    dispatch(addData(data))

    reset();

    navigate("/list");
  };
  return (
    <main className="min-h-screen bg-[#f0ebf8] py-10 px-4">
      <section className="max-w-3xl mx-auto">
        <header className="bg-white rounded-xl border-t-8 border-violet-700 shadow-sm px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-800">Survey Perokok</h1>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
          <section className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-semibold text-lg">Nama</h2>
            </div>

            <input
              type="text"
              placeholder="Masukkan nama"
              {...register("name")}
              className="w-full border-b-2 border-gray-300 focus:border-violet-700 outline-none py-2"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-semibold text-lg">Umur</h2>
            </div>

            <input
              type="number"
              placeholder="Masukkan umur"
              {...register("age")}
              className="w-full border-b-2 border-gray-300 focus:border-violet-700 outline-none py-2"
            />

            {errors.age && (
              <p className="text-red-500 text-sm mt-2">{errors.age.message}</p>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-semibold text-lg">Jenis Kelamin</h2>
            </div>

            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" value="Laki-laki" {...register("gender")} />

                <span>Laki-laki</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" value="Perempuan" {...register("gender")} />

                <span>Perempuan</span>
              </label>
            </div>

            {errors.gender && (
              <p className="text-red-500 text-sm mt-4">
                {errors.gender.message}
              </p>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-semibold text-lg">Apakah Anda Perokok?</h2>
            </div>

            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" value="Ya" {...register("smoker")} />

                <span>Ya</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" value="Tidak" {...register("smoker")} />

                <span>Tidak</span>
              </label>
            </div>

            {errors.smoker && (
              <p className="text-red-500 text-sm mt-4">
                {errors.smoker.message}
              </p>
            )}
          </section>

          {smoker === "Ya" && (
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-semibold text-lg">
                  Jika Anda Perokok, rokok apa yang pernah Anda coba?
                </h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    value="Gudang Garam"
                    {...register("cigarette")}
                  />
                  Gudang Garam Filter
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    value="Lucky Strike"
                    {...register("cigarette")}
                  />
                  Lucky Strike
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    value="marlboro"
                    {...register("cigarette")}
                  />
                  Marlboro
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    value="Esse"
                    {...register("cigarette")}
                  />
                  Esse
                </label>
              </div>

              {errors.cigarette && (
                <p className="text-red-500 text-sm mt-4">
                  {errors.cigarette.message}
                </p>
              )}
            </section>
          )}

          <section className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-violet-700 hover:bg-violet-800 text-white px-6 py-3 rounded-lg transition duration-300 cursor-pointer"
            >
              <FaPaperPlane />
              Submit
            </button>

            <button
              type="button"
              onClick={() => reset()}
              className="flex items-center justify-center gap-2 border border-violet-700 text-violet-700 hover:bg-violet-50 px-6 py-3 rounded-lg transition duration-300 cursor-pointer"
            >
              <FaRotateLeft />
              Reset
            </button>
          </section>
          <section className="flex justify-center mt-8">
            <Link
              to="/list"
              className="flex items-center gap-2 text-violet-700 font-semibold hover:text-violet-900 transition"
            >
              Show Survey Responses
            </Link>
          </section>
          <footer className="text-center text-gray-500 text-sm mt-10">
            <p>Never submit passwords through Google Forms.</p>
          </footer>
        </form>
      </section>
    </main>
  );
}

export default Home;
