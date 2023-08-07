import Navbar from '@/components/navbar';

const Edit = () => {
  return (
    <div className="bg-slate-600">
      <Navbar />
      <div className="min-h-screen mx-auto max-w-6xl pt-24">
        <h1 className="text-xl font-bold mb-5">Edit</h1>
        <div className="w-1/2">
          <form>
            <label htmlFor="title" className="block mb-5">
              <span className="block mb-3">Title</span>
              <input
                type="text"
                className="bg-white p-3 w-full outline-none rounded-lg text-slate-700"
                name="title"
                id="title"
              />
            </label>
            <label htmlFor="price" className="block mb-5">
              <span className="block mb-3">Price</span>
              <input
                type="text"
                className="bg-white p-3 w-full outline-none rounded-lg text-slate-700"
                name="price"
                id="price"
              />
            </label>
            <button
              type="submit"
              className="block bg-white px-4 py-2 hover:bg-slate-100 text-sm rounded-lg text-slate-600"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
