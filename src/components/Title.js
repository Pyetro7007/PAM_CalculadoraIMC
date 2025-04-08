import { Text, StyleSheet } from 'react-native'; // Importa módulos do react native

const Title = () => { // Componente para exibir o titulo
    return (
        <Text style={styles.title}>Calculadora de IMC</Text> // Exibição do titulo
    );
};

const styles = StyleSheet.create({ // Estilização do titulo
    title: {
        fontSize: 32, // Tamanho da fonte
        fontWeight: 'bold', // Negrito
        textAlign: 'center', // Centralização
        marginBottom: 24, // espaço abaixo do titulo
        backgroundColor: '#FF6347', // Fundo - vermelho 
    },
});

export default Title; // Exporta o componente