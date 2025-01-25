import { Entity, EntityName } from "@/models";
import { PayloadActionCreator } from "@reduxjs/toolkit";

export type SetCookies = string[];
export type ScopeKey = string;

export type Error = string | string[];
export type Errors = {
  [key: string]: Error;
} | null;

export type Payload<Type = undefined, Optional = undefined> = [
  errors: Errors,
  narrowData?: Type,
  context?: Optional
];

export type UnknownPayload = Payload<{ [key: string]: unknown }, SetCookies>;

export type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

export interface EntityFormContainerProps<EntityType extends Entity> {
  action: PayloadActionCreator<EntityType>;
  getEntity: (values: { [key: string]: string }) => EntityType;
}

export interface EntityProps<EntityType extends Entity> {
  entity: EntityType;
  entityName: EntityName<EntityType>;
}
