"use client";

import type { JSX } from "react";
import { EntityFormContainerProps, EntityProps } from "@/lib/types";
import { Entity } from "@/models/types/entities";

import { useCallback } from "react";
import handleForm from "@/lib/helpers/handleForm";
import EntityCreator from "./EntityCreator";
import useEntity from "@/hooks/useEntity";

interface EntityCreatorContainerProps<EntityType extends Entity>
  extends EntityProps<EntityType>,
    EntityFormContainerProps<EntityType> {}

type EntityCreatorContainerElement = <EntityType extends Entity>(
  props: EntityCreatorContainerProps<EntityType>
) => JSX.Element;

const EntityCreatorContainer: EntityCreatorContainerElement = ({
  entity,
  entityName,
  sendAction,
  getEntity,
}) => {
  const { errors, isValid, sendEntity } = useEntity(sendAction);

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

  return (
    <EntityCreator<typeof entity>
      entity={entity}
      entityName={entityName}
      errors={errors}
      onSubmit={handleSubmit}
    />
  );
};

export default EntityCreatorContainer;
