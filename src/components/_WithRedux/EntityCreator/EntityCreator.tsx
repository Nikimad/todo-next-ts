import type { JSX } from "react";
import { EntityProps, Errors } from "@/lib/types";
import { Entity } from "@/models";
import type { FormProps } from "../Form";

import Form from "../Form";
import Button from "../Button";
import EntityFormFields from "../EntityFormFields";

interface EntityCreatorProps<EntityType extends Entity>
  extends EntityProps<EntityType>,
    FormProps {
  errors: Errors;
}

type EntityCreatorElement = <EntityType extends Entity>(
  props: EntityCreatorProps<EntityType>
) => JSX.Element;

const EntityCreator: EntityCreatorElement = ({
  entity,
  entityName,
  errors,
  onSubmit,
}) => (
  <Form onSubmit={onSubmit}>
    <EntityFormFields<typeof entity>
      entity={entity}
      entityName={entityName}
      fieldsName="creator"
      errors={errors}
    >
      <Button>Add new {String(entityName)}</Button>
    </EntityFormFields>
  </Form>
);

export default EntityCreator;
