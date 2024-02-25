function PersonalForm({ personalInfo, setPersonalInfo }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = {};
        for (const element of e.target) {
            if (element.value) {
                newData[element.name] = element.value;
                element.value = "";
            }
        }
        setPersonalInfo({ ...personalInfo, ...newData });
    };

    return (
        <form onSubmit={handleSubmit} action=".">
            <h3>Personal Details</h3>
            <div>
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
            </div>

            <div>
                <input type="email" name="email" placeholder="Email" />
                <input type="tel" name="phone" placeholder="Phone Number" />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

function EducationForm({ educationInfo, setEducationInfo, editId, setEditId, form, setForm }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {};
        for (const element of e.target) {
            if (element.value) {
                newData[element.name] = element.value;
                element.value = "";
            }
        }

        if (editId && form && form === "educationForm") {
            setEducationInfo(educationInfo.map((info) => (info.id === editId ? { ...info, ...newData } : info)));
            setForm("");
            setEditId("");
            return;
        }

        newData["id"] = crypto.randomUUID();
        setEducationInfo([...educationInfo, newData]);
    };

    return (
        <form onSubmit={handleSubmit} action=".">
            <h3>Education</h3>
            <div>
                <input name="university" type="text" placeholder="University" />
                <input name="department" type="text" placeholder="Department" />
            </div>

            <div>
                <input name="start" type="date" placeholder="Start year" />
                <input name="end" type="date" placeholder="End year" />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

function ExperienceForm({ workInfo, setWorkInfo, editId, setEditId, form, setForm }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {};
        for (const element of e.target) {
            if (element.value) {
                newData[element.name] = element.value;
                element.value = "";
            }
        }

        if (editId && form && form === "workForm") {
            setWorkInfo(workInfo.map((info) => (info.id === editId ? { ...info, ...newData } : info)));
            setForm("");
            setEditId("");
            return;
        }

        newData["id"] = crypto.randomUUID();
        setWorkInfo([...workInfo, newData]);
    };

    return (
        <form onSubmit={handleSubmit} action=".">
            <h3>Work Experience</h3>
            <div>
                <input name="company" type="text" placeholder="Company" />
                <input name="position" type="text" placeholder="Position Title" />
            </div>

            <div>
                <input name="start" type="date" placeholder="Start date" />
                <input name="end" type="date" placeholder="End date" />
            </div>

            <button>Submit</button>
        </form>
    );
}

function Form(props) {
    const { personalInfo, setPersonalInfo, educationInfo, setEducationInfo, editId, setEditId, form, setForm, workInfo, setWorkInfo } = props;

    return (
        <section className="form-container">
            <PersonalForm {...{ personalInfo, setPersonalInfo }} />
            <EducationForm {...{ educationInfo, setEducationInfo, editId, setEditId, form, setForm }} />
            <ExperienceForm {...{ workInfo, setWorkInfo,editId, setEditId, form, setForm }} />
        </section>
    );
}

export default Form;
