import React from 'react'; // Importa o react
import {View, Text, StyleSheet } from 'react-native';  // Importa módulos do react native

const Result = ({ imc, altura}) => { // Exibe os resultados do cálculo
    const classificação = () => { // Classificação dos resultados dos IMCs calculados
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc < 24.9) return 'Peso normal';
        if (imc < 19.9) return 'Sobrepeso';
        if (imc < 34.9) return 'Obesidade grau 1';
        if (imc < 39.9) return 'Obesidade grau 2';
        return 'Obesidade grau 3 (mórbida)';
    };

    // Calcula o PIm e o PIM
    const PIm = (18.5 * altura * altura).toFixed(2); // PIm = Peso Ideal Minimo
    const PIM = (24.95 * altura * altura).toFixed(2); // PIM = Peso Ideal Máximo

    return ( // Exibe as entradas e resultados para o usuário
        <View style={styles.resultContainer}>
            <Text style={styles.result}>Seu IMC é: {imc}</Text>
            <Text style={styles.classifica}>Sua classificação é: {classificação()}</Text>
            <Text style={styles.pesoIdeal}>Seu Peso Ideal Minímo é: {PIm}</Text>
            <Text style={styles.pesoIdeal}>Seu Peso Ideal Máximo é: {PIM}</Text>
        </View>
    );
};

const styles = StyleSheet.create({ // Estilos para os resultados
    result: {
        marginTop: 20, // Espaço superior
        fontSize: 24, // Tamanho da fonte
        textAlign: 'center', // Alinhamento do texto
        color: '#B22222', // Cor do texto
        
    },

    resultContainer: {
        marginTop: 20, // Espaço superior
        padding: 10, // Espaçamento interno
        backgroundColor: '#FA8072', // Cor do fundo
        borderRadius: 10, // Borda arrendondada
        alignItems: 'center', // Alinhamento dos itens
    },

    classifica: {
        fontSize: 20, // Tamanho da fonte
        color: '#B22222', // Cor da letra
        marginBottom: 10, // Espaço inferior
        fontWeight: '600', // Destacação da fonte
        textAlign: 'center', // Alinhamento do texto
    },

    pesoIdeal: {
        fontSize: 16, // Tamanho da fonte
        color: '#FFFFFF', // Cor do texto
    },
});

export default Result;