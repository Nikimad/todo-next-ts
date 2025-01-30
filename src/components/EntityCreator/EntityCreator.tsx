import { EntityProps, Errors } from "@/lib/types";
import { Entity } from "@/models/types/entities";
import type { FormProps } from "../Form";

import Form from "../Form";
import Button from "../Button";
import EntityFormFields from "../EntityFormFields";

interface EntityCreatorProps<EntityType extends Entity>
  extends EntityProps<EntityType>,
    FormProps {
  errors: Errors;
}

const EntityCreator = <EntityType extends Entity>({
  entity,
  entityName,
  errors,
  onSubmit,
}: Readonly<EntityCreatorProps<EntityType>>) => (
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
