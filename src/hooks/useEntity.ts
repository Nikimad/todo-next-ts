import type { PayloadActionCreator } from "@reduxjs/toolkit";
import type { Errors } from "@/lib/types";
import type { Entity } from "@/models";

import { useState, useCallback } from "react";
import { useAction } from "@/models/hooks";
import validateIsEmpty from "@/lib/helpers/validateIsEmpty";

const useEntity = <Payload extends Entity>(
  sendAction: PayloadActionCreator<Payload>,
  deleteAction?: PayloadActionCreator<Payload>
): {
  errors: Errors;
  isValid: (payload: Payload) => boolean;
  sendEntity: (payload: Payload) => void;
  resetErrors: () => void;
  deleteEntity?: (payload: Payload) => void;
} => {
  const [errors, setErrors] = useState<Errors>(null);

  const sendEntity = useAction(sendAction);
  const deleteEntity = useAction(deleteAction);

  const validateEntity = useCallback((entity: Payload) => {
    const args: [key: string, value: string] =
      "title" in entity ? ["title", entity.title] : ["text", entity.text];
    const errors = validateIsEmpty(...args);
    setErrors(errors);
    return errors;
  }, []);

  const isValid = useCallback(
    (entity: Payload) => !Boolean(validateEntity(entity)),
    [validateEntity]
  );

  const resetErrors = useCallback(() => errors && setErrors(null), [errors]);

  return {
    errors,
    isValid,
    sendEntity,
    resetErrors,
    ...(deleteAction && { deleteEntity }),
  };
};

export default useEntity;
