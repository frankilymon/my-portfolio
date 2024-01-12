import './index.scss'
import { Loader } from 'react-loaders'
import Animation from '../Animation'
import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_0rdvbf8',
        'template_i71y6yw',
        e.target,
        'P-Wg98_NSRjvfNcgK'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
    e.target.reset()
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="contact-h1">
            <Animation
              letterClass={letterClass}
              strArray={['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <p>
            As an enthusiastic IT hobbyist with a strong desire to pursue
            opportunities for freelancing and a shown ability to manage a
            variety of projects effectively. Always willing to answer questions
            and offer assistance as needed. Feel free to reach out for
            collaboration or consultation.
          </p>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Franklin Ukaegbu,
          <br />
          Canada,
          <br />
          Queen-Mary, Snowdon <br />
          Montreal <br />
          <span>frankukaegbu04@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[45.48564, -73.62827]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[45.48564, -73.62827]}>
              <Popup>Franklin lives here, come over for cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
