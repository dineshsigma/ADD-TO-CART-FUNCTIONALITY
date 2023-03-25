import React from 'react';
import Card from 'react-bootstrap/Card';


function Home() {
    console.log("aM, NVBHJSFBDVJKS")
    return (
        <div className='hero'>
            <Card className="bg-dark text-white border-0">
                <Card.Img src="https://media.istockphoto.com/id/111885949/photo/women-boutique-dress-shopping-in-paris-france.jpg?s=612x612&w=0&k=20&c=elwmT9Ha_lasak1fdcWf_dTqt3Xzm1P3ersXjgwTbpE=" alt="Card image" height="550px" />
                <Card.ImgOverlay>
                    <div className='card-img-overlay d-flex flex-column justify-content-center'>
                    <div className='container'>
                        <Card.Title className='card-title display-3 fw-bolder mb-0 '>NEW SEASON ARRIVALS</Card.Title>
                        <Card.Text classname="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </Card.Text>
                        </div>

                    </div>
                </Card.ImgOverlay>
            </Card>

        </div>

    )
}

export default Home