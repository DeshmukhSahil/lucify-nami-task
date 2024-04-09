import { FunctionComponent } from "react";
import Property1InternalTaskDevi from "./Property1InternalTaskDevi";
import TaskHistory from "./TaskHistory";
import Property1NoComplaintAndFe from "./Property1NoComplaintAndFe";

const CardContainer: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[24px] text-left text-xs text-text-text-dark font-button-button-text-secondary">
      <Property1InternalTaskDevi
        quantity
        showCheckBox
        showRectangleDiv={false}
        instruction2={false}
        showSpan={false}
      />
      <TaskHistory
        quantity
        showCheckBox
        showRectangleDiv={false}
        instruction2={false}
        showSpan={false}
      />
      <TaskHistory
        quantity
        showCheckBox
        showRectangleDiv={false}
        instruction2={false}
        showSpan={false}
      />
      <Property1NoComplaintAndFe />
      <Property1InternalTaskDevi
        quantity
        showCheckBox
        showRectangleDiv={false}
        instruction2={false}
        showSpan={false}
      />
    </div>
  );
};

export default CardContainer;
