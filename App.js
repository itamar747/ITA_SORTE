
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

// Array com 7 opções de sorteio
const opcoes = [
  {
    nome: 'Trevo da Sorte',
    imagem: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f340.png'
  },
  {
    nome: 'Dados da Sorte',
    imagem: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3b2.png'
  },
  {
    nome: 'Estrela da Sorte',
    imagem: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2b50.png'
  },
  {
    nome: 'Coração da Sorte',
    imagem: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2764-fe0f.png'
  },
  {
    nome: 'Lua da Sorte',
    imagem: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f319.png'
  },
  {
    nome: 'Fogo da Sorte',
    imagem: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f525.png'
  },
  {
    nome: 'Arco-íris da Sorte',
    imagem: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f308.png'
  }
];

// Classe principal do aplicativo
export default class App extends Component {

  // Inicialização do aplicativo
  constructor(props) {
    super(props);

    // Estado inicial da aplicação
    this.state = {
      resultado: 'Sua sorte está esperando!',
      imagem: opcoes[0].imagem
    };
  }

  // Função responsável por realizar o sorteio
  sortear = () => {

    // Escolhe uma posição aleatória do array
    const indice = Math.floor(Math.random() * opcoes.length);

    // Obtém a opção sorteada
    const escolhido = opcoes[indice];

    // Atualiza o resultado e a imagem na tela
    this.setState({
      resultado: escolhido.nome,
      imagem: escolhido.imagem
    });
  };

  // Renderização da interface
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>ITA SORTE</Text>

        <Text style={styles.subtitulo}>
          A sorte está em suas mãos!
        </Text>

        <View style={styles.card}>

          {/* Imagem correspondente ao sorteio */}
          <Image
            source={{ uri: this.state.imagem }}
            style={styles.imagem}
            resizeMode="contain"
          />

          {/* Resultado exibido na tela */}
          <Text style={styles.resultado}>
            {this.state.resultado}
          </Text>

        </View>

        {/* Botão que executa a função de sorteio */}
        <TouchableOpacity
          style={styles.botao}
          onPress={this.sortear}
        >
          <Text style={styles.textoBotao}>
            SORTEAR
          </Text>
        </TouchableOpacity>

        <Text style={styles.rodape}>
          Boa sorte! 🍀
        </Text>

      </View>
    );
  }
}

// Estilização dos componentes
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#17112B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10
  },

  subtitulo: {
    fontSize: 16,
    color: '#C4B5FD',
    marginBottom: 40
  },

  card: {
    width: '100%',
    backgroundColor: '#2A2045',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    marginBottom: 35
  },

  imagem: {
    width: 130,
    height: 130,
    marginBottom: 20
  },

  resultado: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center'
  },

  botao: {
    backgroundColor: '#F59E0B',
    paddingVertical: 18,
    paddingHorizontal: 55,
    borderRadius: 30
  },

  textoBotao: {
    color: '#17112B',
    fontSize: 18,
    fontWeight: 'bold'
  },

  rodape: {
    color: '#C4B5FD',
    marginTop: 35,
    fontSize: 16
  }

});
