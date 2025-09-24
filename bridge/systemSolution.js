class MediaPlayer {
  constructor(media) {
    this.media = media;
  }

  play() {
    this.media.playMedia();
  }
}

class OperationalSystem {
  constructor(media) {
    this.media = media;
  }
}

class Windows extends OperationalSystem {
  play(media) {
    console.log(`Reproduzindo ${media} no Windows.`);
  }
}

class Linux extends OperationalSystem {
  play(media) {
    console.log(`Reproduzindo ${media} no Linux.`);
  }
}

// Cliente
const a1 = new Windows();
a1.play("vídeo");

const v1 = new Linux();
v1.play("áudio");
