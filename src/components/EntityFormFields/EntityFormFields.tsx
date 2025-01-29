import type { Entity } from "@/models";
import type { EntityProps, Errors } from "@/lib/types";

import Input from "../Input";
import ErrorMessage from "../ErrorMessage";
import Choice from "../Choice";
import s from "./EntityFormFields.module.css";

interface EntityFormFieldsProps<EntityType extends Entity>
  extends EntityProps<EntityType> {
  errors: Errors;
  fieldsName: string;
  children: React.ReactNode;
  onMount?: (input: HTMLInputElement) => void;
}

const EntityFormFields = <EntityType extends Entity>({
  entity,
  errors,
  entityName,
  fieldsName,
  onMount,
  children,
}: Readonly<EntityFormFieldsProps<EntityType>>) => (
  <div className={s.fields__container}>
    <div className={s.fields}>
      <input type="hidden" name="id" defaultValue={entity.id} />
      {entityName === "todo" && (
        <Choice
          name="is_right"
          id={`${String(entityName)}_${fieldsName}__complete`}
          defaultChecked={"is_right" in entity && entity.is_right}
        >
          Complete
        </Choice>
      )}
      <Input
        id={`${String(entityName)}__${entity.id}__${fieldsName}__${
          entityName === "todo" ? "text" : "title"
        }`}
        name={entityName === "todo" ? "text" : "title"}
        defaultValue={"text" in entity ? entity.text : entity.title}
        onMount={onMount}
      />
    </div>
    <div className={s.fields__footer}>
      <label
        htmlFor={`${String(entityName)}__${entity.id}__${fieldsName}__${
          entityName === "todo" ? "text" : "title"
        }`}
        className={s.fields__error}
      >
        <span className="visually-hidden">
          {entityName === "todo" ? "text" : "title"}
        </span>
        <ErrorMessage
          id={`${String(entityName)}_${fieldsName}__${
            entityName === "todo" ? "text" : "title"
          }`}
          name={entityName === "todo" ? "text" : "title"}
          errors={errors}
        />
      </label>
      <fieldset className={s.fields__controls}>
        <legend className="visually-hidden">Controls</legend>
        {children}
      </fieldset>
    </div>
  </div>
);

export default EntityFormFields;
