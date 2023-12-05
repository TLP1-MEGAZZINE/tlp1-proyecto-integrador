const Slide = ({ title, subtitle, listItems, children, active }) => {
    return (
        <div className={`carousel-item ${active} px-5 py-2`}>
            <section>
                <div>
                    <h1 className="text-center">{title}</h1>
                    <h4 className="text-center">{subtitle}</h4>
                    <ul>

                        {listItems.map((item, num) => (
                            <li key={num}>{item}</li>
                        ))}

                    </ul>
                </div>

                {children} 
            </section>
        </div>
    );
};

export default Slide;
