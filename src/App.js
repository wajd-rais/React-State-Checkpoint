import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Farhat Ben Abdessamad',
      bio: 'Je suis passionné par le développement web et mobile, avec une expertise particulière dans les technologies JavaScript',
      imgSrc: 'https://web.ua.es/en/dsoc1/imagenes/profesores-pdi/3-otras-personas/ben-abdessamad-farhat-biblioteca.jpg',
      profession: 'Développeur fullStack JavaScript'
    },
    show: false,
    timeInterval: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeInterval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? "Masquer le Profil" : "Voir le Profil"}
        </button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p style={{background:"red", color:"white"}}>
          Temps depuis le dernier montage : {timeInterval} secondes
        </p>
      </div>
    );
  }
}

export default App;
