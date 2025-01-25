"use client";

import type { JSX } from "react";
import type { Entity } from "@/models";
import type { EntityProps, EntityFormContainerProps } from "@/lib/types";

import React, { useCallback, useState } from "react";
import handleForm from "@/lib/helpers/handleForm";
import EntityEditor from "./EntityEditor";
import useEntity from "@/hooks/useEntity";

interface EntityEditorContainerProps<EntityType extends Entity>
  extends EntityFormContainerProps<EntityType>,
    EntityProps<EntityType> {
  children: React.ReactNode;
}

type EntityEditorContainerElement = <EntityType extends Entity>(
  props: Readonly<EntityEditorContainerProps<EntityType>>
) => JSX.Element;

const EntityEditorContainer: EntityEditorContainerElement = ({
  entityName,
  entity,
  action,
  getEntity,
  children,
}) => {
  const { errors, isValid, sendEntity, resetErrors } = useEntity(action);

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

  const handleMountInput = useCallback((input: HTMLInputElement) => input?.focus(), []);

  return (
    <EntityEditor<typeof entity>
      isEdit={isEdit}
      entity={entity}
      errors={errors}
      entityName={entityName}
      onReset={handleEditEnd}
      onSubmit={handleSubmit}
      onEditStart={handleEditStart}
      onMount={handleMountInput}
    >
      {children}
    </EntityEditor>
  );
};

export default EntityEditorContainer;
