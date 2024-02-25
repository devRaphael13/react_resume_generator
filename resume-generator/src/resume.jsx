function Resume({ personalInfo, educationInfo, setEducationInfo, workInfo, setWorkInfo, setEditId, setForm }) {
    const edit = (e, form, id) => {
        const [data, type] =
            form === "educationForm"
                ? [document.getElementsByClassName("education"), document.getElementById("education")]
                : [document.getElementsByClassName("work"), document.getElementById("work")];

        for (let i of data) {
            if (i.dataset.id === id) {
                i.classList.add("selected");
                break;
            }
        }

        type.classList.add("selected-form");

        setEditId(id);
        setForm(form);
    };

    const del = (e, section, id) => {
        const setFunc = section === "education" ? setEducationInfo : setWorkInfo;
        const info = section === "education" ? educationInfo : workInfo;

        setFunc(info.filter((item) => item.id !== id));
    };

    return (
        <section className="resume-container">
            <div>
                {Object.keys(personalInfo).length >= 1 && (
                    <div className="about">
                        <h1>{personalInfo.firstName + " " + personalInfo.lastName}</h1>
                        <div>
                            <div>
                                <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.4 7.2a2.4 2.4 0 0 1 2.4-2.4h14.4a2.4 2.4 0 0 1 2.4 2.4v9.6a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V7.2ZM4.8 6a1.2 1.2 0 0 0-1.2 1.2v.26L12 12.5l8.4-5.04V7.2A1.2 1.2 0 0 0 19.2 6H4.8Zm15.6 2.86-5.65 3.39 5.65 3.476V8.859Zm-.04 8.25-6.768-4.165L12 13.9l-1.59-.954-6.77 4.164A1.2 1.2 0 0 0 4.8 18h14.4a1.2 1.2 0 0 0 1.159-.888ZM3.6 15.727l5.65-3.477L3.6 8.86v6.867Z"></path>
                                </svg>
                                <p>{personalInfo.email}</p>
                            </div>

                            <div>
                                <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.567 3.66a.848.848 0 0 0-1.269-.078L4.006 4.875c-.604.605-.826 1.462-.563 2.213a21.96 21.96 0 0 0 5.21 8.26 21.961 21.961 0 0 0 8.26 5.21c.752.264 1.608.041 2.213-.563l1.292-1.292a.85.85 0 0 0-.078-1.269l-2.884-2.242a.849.849 0 0 0-.725-.153l-2.738.684a2.181 2.181 0 0 1-2.07-.574l-3.07-3.071a2.181 2.181 0 0 1-.576-2.071l.685-2.738a.848.848 0 0 0-.152-.725L6.567 3.66ZM4.355 2.64a2.181 2.181 0 0 1 3.265.203l2.242 2.882a2.18 2.18 0 0 1 .394 1.868l-.684 2.737a.847.847 0 0 0 .223.804l3.07 3.071a.848.848 0 0 0 .806.223l2.736-.684a2.181 2.181 0 0 1 1.868.394l2.882 2.242a2.18 2.18 0 0 1 .204 3.264l-1.293 1.293c-.925.925-2.307 1.33-3.596.877A23.292 23.292 0 0 1 7.71 16.29a23.292 23.292 0 0 1-5.525-8.761c-.453-1.288-.047-2.671.878-3.596L4.356 2.64h-.001Z"></path>
                                </svg>
                                <p>{personalInfo.phone}</p>
                            </div>
                        </div>
                    </div>
                )}

                {(educationInfo.length || workInfo.length) && (
                    <div className="resume">
                        {educationInfo.length ? <h1>Education</h1> : ""}
                        <div>
                            {educationInfo.map((element) => (
                                <div key={element.id} data-id={element.id} className="education">
                                    <p>
                                        {element.start} / {element.end}
                                    </p>
                                    <h3>{element.university}</h3>
                                    <h3>Department of {element.department}</h3>
                                    <div>
                                        <button onClick={(e) => edit(e, "educationForm", element.id)}>
                                            <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.975 3.055a.6.6 0 0 1 .85 0l3.6 3.6a.6.6 0 0 1 0 .85l-12 12a.601.601 0 0 1-.202.132l-6 2.4a.6.6 0 0 1-.78-.78l2.4-6a.6.6 0 0 1 .132-.202l12-12ZM15.85 5.88l2.75 2.752 1.552-1.552L17.4 4.328 15.85 5.88Zm1.903 3.6L15 6.728l-7.8 7.8v.352h.6a.6.6 0 0 1 .6.6v.6H9a.6.6 0 0 1 .6.6v.6h.352l7.8-7.8ZM6.039 15.69l-.128.127-1.833 4.585 4.585-1.833.127-.127a.599.599 0 0 1-.39-.562v-.6h-.6a.6.6 0 0 1-.6-.6v-.6h-.6a.6.6 0 0 1-.561-.39Z"></path>
                                            </svg>
                                            Edit
                                        </button>
                                        <button onClick={(e) => del(e, "education", element.id)}>
                                            <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.96 3.6h3.6a.6.6 0 0 1 .6.6v1.2h-4.8V4.2a.6.6 0 0 1 .6-.6Zm5.4 1.8V4.2a1.8 1.8 0 0 0-1.8-1.8h-3.6a1.8 1.8 0 0 0-1.8 1.8v1.2H5.168a.6.6 0 0 0-.012 0H3.96a.6.6 0 0 0 0 1.2h.646L5.63 19.392A2.4 2.4 0 0 0 8.022 21.6h7.476a2.4 2.4 0 0 0 2.393-2.208L18.915 6.6h.645a.6.6 0 0 0 0-1.2h-1.194a.61.61 0 0 0-.012 0H15.36Zm2.35 1.2-1.015 12.696a1.2 1.2 0 0 1-1.197 1.104H8.022a1.2 1.2 0 0 1-1.196-1.104L5.811 6.6H17.71ZM8.726 7.8a.6.6 0 0 1 .633.564l.6 10.2a.6.6 0 0 1-1.197.072l-.602-10.2a.6.6 0 0 1 .564-.636h.002Zm6.07 0a.6.6 0 0 1 .563.636l-.6 10.2a.6.6 0 1 1-1.197-.072l.6-10.2a.6.6 0 0 1 .633-.564Zm-3.036 0a.6.6 0 0 1 .6.6v10.2a.6.6 0 1 1-1.2 0V8.4a.6.6 0 0 1 .6-.6Z"></path>
                                            </svg>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {workInfo.length ? <h1>Experience</h1> : ""}
                        <div>
                            {workInfo.map((element) => (
                                <div key={element.id} data-id={element.id} className="work">
                                    <p>
                                        {element.start} / {element.end}
                                    </p>
                                    <h3>{element.position}</h3>
                                    <h3>at {element.company}</h3>
                                    <div>
                                        <button onClick={(e) => edit(e, "workForm", element.id)}>
                                            <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.975 3.055a.6.6 0 0 1 .85 0l3.6 3.6a.6.6 0 0 1 0 .85l-12 12a.601.601 0 0 1-.202.132l-6 2.4a.6.6 0 0 1-.78-.78l2.4-6a.6.6 0 0 1 .132-.202l12-12ZM15.85 5.88l2.75 2.752 1.552-1.552L17.4 4.328 15.85 5.88Zm1.903 3.6L15 6.728l-7.8 7.8v.352h.6a.6.6 0 0 1 .6.6v.6H9a.6.6 0 0 1 .6.6v.6h.352l7.8-7.8ZM6.039 15.69l-.128.127-1.833 4.585 4.585-1.833.127-.127a.599.599 0 0 1-.39-.562v-.6h-.6a.6.6 0 0 1-.6-.6v-.6h-.6a.6.6 0 0 1-.561-.39Z"></path>
                                            </svg>
                                            Edit
                                        </button>
                                        <button onClick={(e) => del(e, "work", element.id)}>
                                            <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.96 3.6h3.6a.6.6 0 0 1 .6.6v1.2h-4.8V4.2a.6.6 0 0 1 .6-.6Zm5.4 1.8V4.2a1.8 1.8 0 0 0-1.8-1.8h-3.6a1.8 1.8 0 0 0-1.8 1.8v1.2H5.168a.6.6 0 0 0-.012 0H3.96a.6.6 0 0 0 0 1.2h.646L5.63 19.392A2.4 2.4 0 0 0 8.022 21.6h7.476a2.4 2.4 0 0 0 2.393-2.208L18.915 6.6h.645a.6.6 0 0 0 0-1.2h-1.194a.61.61 0 0 0-.012 0H15.36Zm2.35 1.2-1.015 12.696a1.2 1.2 0 0 1-1.197 1.104H8.022a1.2 1.2 0 0 1-1.196-1.104L5.811 6.6H17.71ZM8.726 7.8a.6.6 0 0 1 .633.564l.6 10.2a.6.6 0 0 1-1.197.072l-.602-10.2a.6.6 0 0 1 .564-.636h.002Zm6.07 0a.6.6 0 0 1 .563.636l-.6 10.2a.6.6 0 1 1-1.197-.072l.6-10.2a.6.6 0 0 1 .633-.564Zm-3.036 0a.6.6 0 0 1 .6.6v10.2a.6.6 0 1 1-1.2 0V8.4a.6.6 0 0 1 .6-.6Z"></path>
                                            </svg>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Resume;
