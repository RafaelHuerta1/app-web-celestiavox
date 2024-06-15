
const OracionesDiairas = () => {
    const sentences = [
        'Sentence 1',
        'Sentence 2',
        'Sentence 3',
        // Add more sentences here
    ];

    return (
        <div>
            <h1>Title</h1>
            {sentences.map((sentence, index) => (
                <div key={index} className="card">
                    <p>{sentence}</p>
                </div>
            ))}
        </div>
    );
};

export default OracionesDiairas;