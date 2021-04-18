import { Howl, Howler } from 'howler';


export default {

  soudPlay(src) {
    this.setState({
      sound: src
    });
    const sound = new Howl({
      src,
      html5: true
    })

    if (this.state.escuchando) {
      this.setState({
        escuchando: false
      });
      Howler.stop();
      sound.play();

    } else {
      this.setState({
        escuchando: true
      });
      Howler.stop();
      sound.play();
    }
  }

};

