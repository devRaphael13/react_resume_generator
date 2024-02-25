function Resume({ personalInfo, educationInfo, setEducationInfo, workInfo, setWorkInfo, setEditId, setForm }) {
    const edit = (e, form, id) => {
        setEditId(id);
        setForm(form);
        //TODO: Indicate the item being edited by applying styles
    };

    const del = (e, section, id) => {
        const setFunc = section === "education" ? setEducationInfo : setWorkInfo;
        const info = section === "education" ? educationInfo : workInfo;

        setFunc(info.filter((item) => item.id !== id));
    };

    return (
        <section>
            {Object.keys(personalInfo).length >= 1 && (
                <div className="about">
                    <h1>{personalInfo.firstName + " " + personalInfo.lastName}</h1>
                    <div>
                        <p>{personalInfo.email}</p>
                        <p>{personalInfo.phone}</p>
                    </div>
                </div>
            )}

            <div className="resume-container">
                {educationInfo.length ? <h1>Education</h1> : ""}
                {educationInfo.map((element) => (
                    <div key={element.id} className="education">
                        <p>{element.university}</p>
                        <p>Department of {element.department}</p>
                        <p>
                            {element.start} - {element.end}
                        </p>
                        <div>
                            <button onClick={(e) => edit(e, "educationForm", element.id)}>Edit</button>
                            <button onClick={(e) => del(e, "education", element.id)}>Delete</button>
                        </div>
                    </div>
                ))}

                {workInfo.length ? <h1>Experience</h1> : ""}
                {workInfo.map((element) => (
                    <div key={element.id} className="work">
                        <p>{element.position}</p>
                        <p>at {element.company}</p>
                        <p>
                            {element.start} - {element.end}
                        </p>
                        <div>
                            <button onClick={(e) => edit(e, "workForm", element.id)}>Edit</button>
                            <button onClick={(e) => del(e, "work", element.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Resume;
