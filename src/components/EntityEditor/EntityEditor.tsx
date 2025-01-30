import type { EntityProps, Errors } from "@/lib/types";
import type { Entity } from "@/models/types/entities";
import type { FormProps } from "../Form";

import Form from "../Form";
import Button from "../Button";
import EntityFormFields from "../EntityFormFields";
import s from "./EntityEditor.module.css";

interface EntityEditorProps<EntityType extends Entity>
  extends FormProps,
    EntityProps<EntityType> {
  errors: Errors;
  isEdit: boolean;
  onEditStart: () => void;
  onDelete: () => void;
  onMount: (input: HTMLInputElement) => void;
}

const EntityEditor = <EntityType extends Entity>({
  entityName,
  entity,
  errors,
  isEdit,
  onEditStart,
  onSubmit,
  onReset,
  onDelete,
  onMount,
  children,
}: Readonly<EntityEditorProps<EntityType>>) => (
  <li className={s.entity__container}>
    {isEdit ? (
      <Form onSubmit={onSubmit} onReset={onReset}>
        <EntityFormFields<typeof entity>
          entity={entity}
          errors={errors}
          entityName={entityName}
          fieldsName="editor"
          onMount={onMount}
        >
          <Button type="submit">Done</Button>
          <Button type="reset">Cancel</Button>
        </EntityFormFields>
      </Form>
    ) : (
      <div className={`styled-wrapper ${s.entity}`}>
        <div className={s.entity__main}>{children}</div>
        <div className={s.entity__controls}>
          <Button onClick={onEditStart}>Edit</Button>
          <Button onClick={onDelete}>Delete</Button>
        </div>
      </div>
    )}
  </li>
);

export default EntityEditor;
