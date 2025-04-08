import { StyleSheet, View } from 'react-native'; // Importa módulos do react native
import Title from './src/components/Title'; // Importa o Titulo
import FormIMC from './src/components/FormIMC'; // Importa o formulario do IMC

export default function App() { // Componente principal que organiza a aplicação
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
    </View>
  );
}

const styles = StyleSheet.create({ // Estilos do container principal
  container: {
    flex: 1, // Ocupa toda a tela
    justifyContent: 'center', // Centraliza os itens na tela
    padding: 16, // Espaçamento interno
    backgroundColor: '#FF6347', // Cor do fundo
  },
});
