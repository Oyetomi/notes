interface SignupFormState {
  email: string;
  name: string;
}

interface ActionPayload {
  key: keyof SignupFormState;
  value: string;
}

const update1: ActionPayload = {
  key: "email",
  value: "",
};

type actionPayloadkeys = keyof typeof update1;
