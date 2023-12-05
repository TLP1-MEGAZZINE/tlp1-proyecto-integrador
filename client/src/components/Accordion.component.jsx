
function Accordion({ title, itemList, orden, children }) {

    return (
        <>        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target={`#flush-collapse${orden}`}
                        aria-expanded="false" aria-controls={`flush-collapse${orden}`}>
                        {title}
                    </button>
                </h4>
                <div id={`flush-collapse${orden}`} className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <ul>
                            {itemList.map((item, num) => (
                                <li key={num}>{item}</li>
                            ))}
                            {children}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            <hr />
        </>
    )
}

export default Accordion;
