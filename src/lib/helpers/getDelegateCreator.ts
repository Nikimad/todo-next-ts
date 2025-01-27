import { CaseReducer, Draft, PayloadAction } from "@reduxjs/toolkit";

type DelegateActionToSaga<S, P> = CaseReducer<S, PayloadAction<P>>;

const getDelegateCreator = <InitialState>() => {
  const delegateCreator = <Payload>(
    preDelegate?: (
      state: Draft<InitialState>,
      { payload }: { payload: Payload }
    ) => void
  ) => {
    const delegateActionoSaga: DelegateActionToSaga<InitialState, Payload> = (
      state,
      { payload }
    ) => {
      if (preDelegate) preDelegate(state, { payload });
      return state;
    };

    return delegateActionoSaga;
  };

  return delegateCreator;
};

export default getDelegateCreator;
