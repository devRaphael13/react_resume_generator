function PersonalForm({ personalInfo, setPersonalInfo }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const error = document.getElementById("personal_error");

        const newData = {};
        for (const element of e.target) {
            if (element.value) {
                newData[element.name] = element.value;
                element.value = "";
            }
        }

        if (!Object.keys(personalInfo).length && Object.keys(newData).length < 4) {
            error.textContent = "All fields are required";
            return;
        }

        error.textContent = "";
        setPersonalInfo({ ...personalInfo, ...newData });
    };

    return (
        <form onSubmit={handleSubmit} action=".">
            <div className="form-title">
                <h3>Personal Details</h3>
                <button type="submit">
                    <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7a.625.625 0 0 1 .625.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 12 7Z"></path>
                    </svg>
                </button>
            </div>

            <p className="error" id="personal_error"></p>
            <div>
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
            </div>

            <div>
                <input type="email" name="email" placeholder="Email" />
                <input type="tel" name="phone" placeholder="Phone Number" />
            </div>
        </form>
    );
}

function EducationForm({ educationInfo, setEducationInfo, editId, setEditId, form, setForm }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const error = document.getElementById("education_error");
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

        if (Object.keys(newData).length < 4) {
            error.textContent = "All fields are required";
            return;
        }

        error.textContent = "";
        newData["id"] = crypto.randomUUID();
        setEducationInfo([...educationInfo, newData]);
    };

    return (
        <form onSubmit={handleSubmit} action=".">
            <div className="form-title">
                <h3>Education</h3>
                <button type="submit">
                    <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7a.625.625 0 0 1 .625.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 12 7Z"></path>
                    </svg>
                </button>
            </div>

            <p className="error" id="education_error"></p>
            <div>
                <input name="university" type="text" placeholder="University" />
                <input name="department" type="text" placeholder="Department" />
            </div>

            <div>
                <input name="start" type="date" placeholder="Start year" />
                <input name="end" type="date" placeholder="End year" />
            </div>
        </form>
    );
}

function ExperienceForm({ workInfo, setWorkInfo, editId, setEditId, form, setForm }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const error = document.getElementById("work_error");
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

        if (Object.keys(newData).length < 4) {
            error.textContent = "All fields are required";
            return;
        }

        error.textContent = "";

        newData["id"] = crypto.randomUUID();
        setWorkInfo([...workInfo, newData]);
    };

    return (
        <form onSubmit={handleSubmit} action=".">
            <div className="form-title">
                <h3>Work Experience</h3>
                <button type="submit">
                    <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7a.625.625 0 0 1 .625.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 12 7Z"></path>
                    </svg>
                </button>
            </div>

            <p className="error" id="work_error"></p>
            <div>
                <input name="company" type="text" placeholder="Company" />
                <input name="position" type="text" placeholder="Position Title" />
            </div>

            <div>
                <input name="start" type="date" placeholder="Start date" />
                <input name="end" type="date" placeholder="End date" />
            </div>
        </form>
    );
}

function Form(props) {
    const { personalInfo, setPersonalInfo, educationInfo, setEducationInfo, editId, setEditId, form, setForm, workInfo, setWorkInfo } = props;

    return (
        <section className="form-container">
            <PersonalForm {...{ personalInfo, setPersonalInfo }} />
            <EducationForm {...{ educationInfo, setEducationInfo, editId, setEditId, form, setForm }} />
            <ExperienceForm {...{ workInfo, setWorkInfo, editId, setEditId, form, setForm }} />
        </section>
    );
}

export default Form;
