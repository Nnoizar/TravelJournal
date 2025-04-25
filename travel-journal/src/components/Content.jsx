export default function Content(props) {

    let { title, country, dates, googleMapsLink, img, text } = props
    return (
        <>
            <article className="entry">
                <div className="imgcontainer">
                    <img src={img.src} alt={img.alt} />
                </div>
                <div className="contentData">

                    <img className="marker" src="./src/assets/marker.png" alt="gps pin icon" />
                    <span className="country">{country}</span>
                    <a href={googleMapsLink} target="_blank">View on Google Maps</a>

                    <h2 className="title"> {title}</h2>
                    <p className="dates">{dates}</p>
                    <p className="text">{text}</p>

                </div>
            </article>
        </>
    )


}