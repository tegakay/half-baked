import React,{useState} from "react";

export default function Forms() {
  const [form,setForm] = useState("");

  function handleChange(event){
    const {topText,bottomText,name,value} = event.target
    console.log("ests",topText,bottomText)
    setForm(prevForm => ({
        ...prevForm,
        [name]: value
    }))

}

  return (
    <div>
      <form>
        <label>
         First Name:
          <input type="text"
           name="firstName"
           onChange={handleChange}
                    value={form.firstName} />
        </label>

        <label>
         Last Name:
          <input type="text" name="lastName" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
