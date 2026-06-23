import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeData } from "../redux/surveySlice";

function List() {
  const surveys = useSelector((state) => state.survey.surveys);
  const dispatch = useDispatch();

  return (
    <main className="min-h-screen bg-[#f0ebf8] py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border-t-8 border-violet-700 rounded-lg p-6">
          <h1 className="text-2xl font-bold">Survey Responses</h1>
        </div>

        {surveys.length === 0 ? (
          <div className="bg-white rounded-lg p-6 mt-5 text-center">
            <p className="mb-4">Belum ada data survey.</p>

            <Link to="/" className="text-violet-700 hover:underline">
              Kembali ke Survey
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg mt-5 overflow-x-auto">
            <table className="w-full text-center">
              <thead className="bg-violet-700 text-white">
                <tr>
                  <th className="p-3">No</th>
                  <th className="p-3">Nama</th>
                  <th className="p-3">Umur</th>
                  <th className="p-3">Gender</th>
                  <th className="p-3">Perokok</th>
                  <th className="p-3">Merk Rokok</th>
                  <th className="p-3">Options</th>
                </tr>
              </thead>

              <tbody>
                {surveys.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{index + 1}</td>

                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.age}</td>
                    <td className="p-3">{item.gender}</td>
                    <td className="p-3">{item.smoker}</td>
                    <td className="p-3">{item.cigarette?.join(", ") || "-"}</td>
                    <td className="p-3">
                      <button
                        onClick={() => dispatch(removeData(index))}
                        className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded hover:bg-red-600"
                      > hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-5">
          <Link to="/" className="text-violet-700 hover:underline">
            ← Back to Survey
          </Link>
        </div>
      </div>
    </main>
  );
}

export default List;
