import type { Entity, EntityName } from "@/models/types/entities";
import s from "./EntitiesList.module.css";

interface EntitiesListProps<EntityType extends Entity> {
  name: EntityName<EntityType>;
  isQuery?: boolean;
  isEmpty: boolean;
  children: React.ReactNode;
}

const EntitiesList = <EntityType extends Entity>({
  name,
  isQuery,
  isEmpty,
  children,
}: Readonly<EntitiesListProps<EntityType>>) => (
  <div
    className={` ${s.list__container} ${
      isEmpty ? s.list__container_empty : ""
    }`}
  >
    {isEmpty ? (
      <p>
        There are no {String(name)}
        {"s "}
        {isQuery ? "with this search params" : "yet"}
      </p>
    ) : (
      <ul className={s.list}>{children}</ul>
    )}
  </div>
);

export default EntitiesList;
