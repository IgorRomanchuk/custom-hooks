import useInput from "../../hooks/useInput.ts";

const Inputs = () => {
  const name = useInput("", { isEmpty: true, minLength: 7 });
  const password = useInput("", { isEmpty: false, minLength: 5 });

  return (
    <form>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {name.isDirty && name.isEmpty && <div>field is require</div>}
          {name.isDirty && name.minLengthError && <div>value must be more than 6 symbols</div>}
          <input onBlur={name.onBlur} value={name.value} onChange={(e) => name.onChange(e)} name="name" type="text" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {password.isDirty && password.isEmpty && <div>field is require</div>}
          {password.isDirty && password.minLengthError && <div>value must be more than 6 symbols</div>}
          <input onBlur={password.onBlur} value={password.value} onChange={password.onChange} name="password" type="text" />
        </div>
      </div>
    </form>
  );
};

export default Inputs;
