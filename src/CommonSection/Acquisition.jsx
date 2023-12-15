import { DiComposer } from "react-icons/di";

const Acquisition = ({ tittle, subTittle }) => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <DiComposer className="font-extrabold" />
      </div>
      <div>
        <div className="text-2xl font-semibold">{tittle}</div>
        <div className="text-base">{subTittle}</div>
      </div>
    </div>
  );
};

export default Acquisition;
