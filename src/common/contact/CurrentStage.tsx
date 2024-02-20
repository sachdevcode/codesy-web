const CurrentStage = ({ userChecks, handleChecksData }) => {
  //   const [userChecks, setUserChecks] = useState({
  //     Prototype: "",
  //     MVP: "",
  //     DesignSolution: "",
  //     MatureProduct: "",
  //   });
  //   const handleChecksData = (e) => {
  //     const { name, value } = e.target;
  //     setUserChecks({ ...userChecks, [name]: value });
  //   };
  return (
    <div className="border border-primary p-5 rounded-3xl">
      <div className=" mb-6">
        <p className="text-2xl font-semibold">
          3. CURRENT STAGE OF YOUR DEVELOPMENT PROCESS
        </p>
      </div>
      <div className="   p-6 rounded-md">
        <form className="grid grid-cols-2 max-[600px]:grid-cols-1">
          <label className="inline-flex items-center mt-3">
            <input
              name="Prototype"
              type="checkbox"
              value={userChecks.Prototype}
              onChange={handleChecksData}
              className="form-checkbox h-5 w-5 text-green-600 rounded border-gray-600  border "
            />
            <span className="ml-2 ">Prototype/Specification</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              name="MVP"
              value={userChecks.MVP}
              onChange={handleChecksData}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-green-600 rounded border-gray-600  border "
            />
            <span className="ml-2 ">MVP</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              name="DesignSolution"
              value={userChecks.DesignSolution}
              onChange={handleChecksData}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-green-600 rounded border-gray-600  border "
            />
            <span className="ml-2 ">Design solution</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              name="MatureProduct"
              value={userChecks.MatureProduct}
              onChange={handleChecksData}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-green-600 rounded border-gray-600  border "
            />
            <span className="ml-2 ">Mature product</span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default CurrentStage;
