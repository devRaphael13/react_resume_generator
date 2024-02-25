import { useState } from "react";
import Form from "./Form";
import Resume from "./resume";

function App() {
    const [personalInfo, setPersonalInfo] = useState({});
    const [educationInfo, setEducationInfo] = useState([]);
    const [workInfo, setWorkInfo] = useState([]);
    const [editId, setEditId] = useState("");
    const [form, setForm] = useState("");

    const props = {
        personalInfo,
        setPersonalInfo,
        educationInfo,
        setEducationInfo,
        workInfo,
        setWorkInfo,
        editId,
        setEditId,
        form,
        setForm,
    };

    return (
        <div className="container">
            <Form {...props} />
            <Resume {...props} />
        </div>
    );
}

//TODO: Make sure the right form is selected and other forms disabled when clicked on a particular section item. The Id and form to use will be generated automatically

export default App;
