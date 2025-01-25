import type { JSX } from "react";
import type { EntityProps, Errors } from "@/lib/types";
import type { Entity } from "@/models";
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
  onMount: (input: HTMLInputElement) => void;
}

type EntityEditorElement = <EntityType extends Entity>(
  props: Readonly<EntityEditorProps<EntityType>>
) => JSX.Element;

const EntityEditor: EntityEditorElement = ({
  entityName,
  entity,
  errors,
  isEdit,
  onEditStart,
  onSubmit,
  onReset,
  onMount,
  children,
}) =>
  isEdit ? (
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
      <div className={s.entity__main}>

      {children}
      </div>
      <div className={s.entity__controls}>
      <Button onClick={onEditStart}>Edit</Button>
      </div>
    </div>
  );

export default EntityEditor;
