import { EntityName } from "./CreatorContainer";
import Form, { FormProps } from "../Form";
import Input from "../Input";
import Button from "../Button";
import s from "./Creator.module.css";
import ErrorMessage from "@/components/ErrorMessage";
import { Errors } from "@/lib/types";

interface CreatorProps extends FormProps {
  entityName: EntityName;
  errors: Errors;
}

const Creator = ({ entityName, errors }: CreatorProps) => (
  <Form>
    <div className={s.creator}>
      <Input
        id={`${entityName}_creator`}
        name={entityName === "todo" ? "text" : "title"}
      />
      <Button>Add new {entityName}</Button>
    </div>
    <label htmlFor={`${entityName}_creator`}>
      <span className="visually-hidden">
        {entityName === "todo" ? "text" : "title"}
      </span>
      <ErrorMessage
        id={`${entityName}_creator`}
        name={entityName === "todo" ? "text" : "title"}
        errors={errors}
      />
    </label>
  </Form>
);

export default Creator;
