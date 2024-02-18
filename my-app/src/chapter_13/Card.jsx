function Card(props) {
    const { title, backgroundColor, children } = props;

    // Composition을 이용한 구현
    // 1. Containment : children
    // 2. Specialization : title, backgroundColor

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white"
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    )
}

export default Card;