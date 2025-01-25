import type { PayloadActionCreator } from "@reduxjs/toolkit";
import type { Errors } from "@/lib/types";
import type { Entity } from "@/models";

import { useState, useCallback } from "react";
import { useAction } from "@/models/hooks";
import validateIsEmpty from "@/lib/helpers/validateIsEmpty";

const useEntity = <Payload extends Entity>(
  action: PayloadActionCreator<Payload>
) => {
  const [errors, setErrors] = useState<Errors>(null);

  const sendEntity = useAction(action);

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
  };
};

export default useEntity;
