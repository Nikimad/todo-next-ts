"use client";

import type { JSX } from "react";
import type { Entity } from "@/models/types/entities";
import type { EntityProps, EntityFormContainerProps } from "@/lib/types";

import React, { useCallback, useState } from "react";
import handleForm from "@/lib/helpers/handleForm";
import EntityEditor from "./EntityEditor";
import useEntity from "@/hooks/useEntity";

interface EntityEditorContainerProps<EntityType extends Entity>
  extends Required<EntityFormContainerProps<EntityType>>,
    EntityProps<EntityType> {
  children: React.ReactNode;
}

type EntityEditorContainerElement = <EntityType extends Entity>(
  props: Readonly<EntityEditorContainerProps<EntityType>>
) => JSX.Element;

const EntityEditorContainer: EntityEditorContainerElement = ({
  entityName,
  entity,
  sendAction,
  deleteAction,
  getEntity,
  children,
}) => {
  const { errors, isValid, sendEntity, deleteEntity, resetErrors } = useEntity(
    sendAction,
    deleteAction
  );

  const [isEdit, setIsEdit] = useState(false);

  const handleEditStart = useCallback(
    () => isEdit || setIsEdit(true),
    [isEdit]
  );
  const handleEditEnd = useCallback(() => {
    if (isEdit) setIsEdit(false);
    if (resetErrors) resetErrors();
  }, [isEdit, resetErrors]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const { values } = handleForm(e);

      const editedEntity = getEntity(values);

      if (isValid(editedEntity)) {
        sendEntity(editedEntity);
        handleEditEnd();
      }
    },
    [getEntity, isValid, sendEntity, handleEditEnd]
  );

  const handleDelete = useCallback(
    () => deleteEntity && deleteEntity(entity),
    [entity, deleteEntity]
  );

  const handleMountInput = useCallback(
    (input: HTMLInputElement) => input?.focus(),
    []
  );

  return (
    <EntityEditor<typeof entity>
      isEdit={isEdit}
      entity={entity}
      errors={errors}
      entityName={entityName}
      onReset={handleEditEnd}
      onSubmit={handleSubmit}
      onEditStart={handleEditStart}
      onDelete={handleDelete}
      onMount={handleMountInput}
    >
      {children}
    </EntityEditor>
  );
};

export default EntityEditorContainer;
