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
                <label htmlFor="first_name">First Name</label>
                <input id="first_name" type="text" name="firstName" placeholder="Your First Name" />

                <label htmlFor="last_name">Last Name</label>
                <input id="last_name" type="text" name="lastName" placeholder="Your Last Name" />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="Your Email" />

                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" name="phone" placeholder="Your Phone Number" />
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
            const formElem = document.getElementById("education");
            setEducationInfo(educationInfo.map((info) => (info.id === editId ? { ...info, ...newData } : info)));
            setForm("");
            setEditId("");
            formElem.classList.remove("selected-form");

            for (let info of document.getElementsByClassName("education")) {
                if (info.dataset.id === editId) {
                    info.classList.remove("selected");
                    break;
                }
            }
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
        <form id="education" onSubmit={handleSubmit} action=".">
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
                <label htmlFor="university">University</label>
                <input id="university" name="university" type="text" placeholder="University" />

                <label htmlFor="department">Department</label>
                <input id="department" name="department" type="text" placeholder="Department" />
            </div>

            <div>
                <label htmlFor="start">Start Date</label>
                <input id="start" name="start" type="date" placeholder="Start date" />

                <label htmlFor="end">End Date</label>
                <input id="end" name="end" type="date" placeholder="End date" />
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
            const formElem = document.getElementById("work");
            setWorkInfo(workInfo.map((info) => (info.id === editId ? { ...info, ...newData } : info)));
            setForm("");
            setEditId("");

            formElem.classList.remove("selected-form");
            for (let info of document.getElementsByClassName("work")) {
                if (info.dataset.id === editId) {
                    info.classList.remove("selected");
                    break;
                }
            }

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
        <form id="work" onSubmit={handleSubmit} action=".">
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
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" placeholder="Where did you work.." />

                <label htmlFor="position">Position Title</label>
                <input id="position" name="position" type="text" placeholder="What was your role" />
            </div>

            <div>
                <label htmlFor="sDate">Start Date</label>
                <input id="sDate" name="start" type="date" placeholder="Start date" />

                <label htmlFor="eDate">End Date</label>
                <input id="eDate" name="end" type="date" placeholder="End date" />
            </div>
        </form>
    );
}

function Form(props) {
    const { personalInfo, setPersonalInfo, educationInfo, setEducationInfo, editId, setEditId, form, setForm, workInfo, setWorkInfo } = props;

    return (
        <section className="form-container">
            <h2>Portfolio Details</h2>
            <PersonalForm {...{ personalInfo, setPersonalInfo }} />
            <EducationForm {...{ educationInfo, setEducationInfo, editId, setEditId, form, setForm }} />
            <ExperienceForm {...{ workInfo, setWorkInfo, editId, setEditId, form, setForm }} />
        </section>
    );
}

export default Form;
