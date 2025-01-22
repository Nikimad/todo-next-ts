"use client";

import { JSX, useCallback } from "react";
import { BoardEntity } from "@/models/features/boards";
import { TaskEntity } from "@/models/features/tasks";
import { TodoEntity } from "@/models/features/todos";
import { Errors } from "@/lib/types";
import handleForm from "@/lib/helpers/handleForm";
import Creator from "./Creator";

export type EntityName = "board" | "task" | "todo";

export type Entity = BoardEntity | TaskEntity | TodoEntity;

interface CreatorContainerProps<EntityType> {
  entityName: EntityName;
  errors: Errors;
  getEntity: (values: { [key: string]: string }) => EntityType;
  isValid: (ent: EntityType) => boolean
  sendEntity: (ent: EntityType) => void;
}

type CreatorContainerElement = <EntityType extends Entity>(
  props: CreatorContainerProps<EntityType>
) => JSX.Element;

const CreatorContainer: CreatorContainerElement = ({
  entityName,
  errors,
  getEntity,
  isValid,
  sendEntity,
}) => {
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const { form, values } = handleForm(e);

      const newEntity = getEntity(values);

      if (isValid(newEntity)) {
        sendEntity(newEntity);
        form.reset();
      }
    },
    [getEntity, isValid, sendEntity]
  );

  return <Creator entityName={entityName} errors={errors} onSubmit={handleSubmit} />;
};

export default CreatorContainer;
