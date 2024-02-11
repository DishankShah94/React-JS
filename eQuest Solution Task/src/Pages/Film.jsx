import { useEffect, useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';
import './film.css';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Film = () => {
    const [film, setFilm] = useState([]);
    const [expandedFilm, setExpandedFilm] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const getAllfims = () => fetch("https://swapi.dev/api/films")
        .then((response) => response.json())
        .then((data) => {
            setFilm(data.results);
        })
    useEffect(() => {
        getAllfims();
    }, [])
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const filteredFilms = film.filter((film) =>
        film.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleToggleDetails = film => {
        setExpandedFilm(expandedFilm === film ? null : film);
    };
    const firstFiveFilms = filteredFilms.slice(0, 5);
    return (<>
        <MDBContainer>
            <input type="text" className="my-3 p-2 d-block mx-auto w-25 text-center square rounded-6 search" value={searchQuery} onChange={handleSearchChange} placeholder="Search by film title" />
            <MDBRow>
                {firstFiveFilms.map((film, index) => (
                    <MDBCol key={index} lg={4} className="py-3 my-2" >
                        <MDBCard className="card_color">
                            <MDBCardBody>
                                <MDBCardTitle className="text-center"><h3 className="my-3">{film.title}</h3></MDBCardTitle>
                                <MDBCardText>
                                    <span className="fw-bold">Episode:</span>   {film.episode_id}
                                </MDBCardText>
                                <MDBCardText>
                                    <span className="fw-bold">Director :</span> {film.director}
                                </MDBCardText>
                                <MDBCardText>
                                    <span className="fw-bold">Producer :</span> <span className="fs">{film.producer}</span>
                                </MDBCardText>
                                <MDBCardText>
                                    <span className="fw-bold">Release Date :</span> {film.release_date}
                                </MDBCardText>
                                {expandedFilm === film && (
                                    <>
                                        <MDBCardText>
                                            <span className="fw-bold">Description:</span> {film.opening_crawl}
                                        </MDBCardText>
                                        <MDBCardText>
                                            <span className="fw-bold">Created :</span> {film.created}
                                        </MDBCardText>
                                        <MDBCardText>
                                            <span className="fw-bold">Edited :</span> {film.edited}
                                        </MDBCardText>
                                    </>
                                )}
                                <button onClick={() => handleToggleDetails(film)} className="btn my-3">{expandedFilm === film ? "Hide Details" : "Show Details"}</button>
                                {/* <Link to={'/allFilmDetail/' + film.episode_id} className="btn" >Show All Film Details</Link> */}
                                {/* <Link to={`/allFilmDetail/${film.episode_id}`} className="btn">Show All Film Details based on Url in API</Link> */}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <Link to='/moreFilms' className="btn w-25">More Films</Link>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>);
}

export default Film;
