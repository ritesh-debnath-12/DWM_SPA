function CardWithImgAndTitleAsHeader(props){
    return(
        <div className="card" style={props.style}>
            <div className="card-title" style={{display: "flex"}}>
                <img src={props.img} style={{display:"inline-block", width: "86px"}}/>
                <p>{props.title}</p>
            </div>
            <div className="card-content">
                <p>{props.content_1}</p>
                <p>{props.content_2}</p>
                <p>{props.content_3}</p>
                <p>{props.content_4}</p>
            </div>
        </div>
    )
}

export {CardWithImgAndTitleAsHeader}