import { View, TextInput, Button, StyleSheet } from 'react-native'; // Importa módulos do react native
import Result from './Result'; // Importa do componenete do resultado
import React, { useState } from 'react'; // Importa o react para para usar o useState

const FormIMC = () => { // Gerencia o formulário e o calculo de IMC
    const [peso, setPeso] = useState(''); // Armazena Peso
    const [altura, setAltura] = useState(''); // Armazena Altura
    const [imc, setIMC] = useState(null); // Armazena IMC

    const calcularIMC = () => { // Função para calcular o IMC
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100; // Converte altura para metros
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2); // Fórmula do IMC
            setIMC(imcCalculado); // Atualiza o valor do IMC já calculado
        }
    };

    return (
        <View style={styles.formContainer}>
            <TextInput // Campo para inserir Peso
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric" // Permite apenas números
                value={peso} // Estado do Peso
                onChangeText={setPeso} // Atualiza o valor do peso
            />
            <TextInput // Campo para inserir Altura
                style={styles.input}
                placeholder="Altura (cm)" 
                keyboardType="numeric" // Permite apenas números
                value={altura} // Estado da Altura
                onChangeText={setAltura} // Atualiza o valor da altura
            />
            <Button title="Calcular IMC" onPress={calcularIMC} /> 
            {imc && <Result imc={imc} altura={altura / 100}/>}
        </View> // ↑ Botão que inicializa a ação do calculo ↑
    );
};

const styles = StyleSheet.create({ // Estilo do formulário
    formContainer: {
        backgroundColor: '#F5F5F5', // Fundo
        padding: 16, // Espaçamento interno
        borderRadius: 10, // Borda arrendondada
    },
    input: {
        height: 40, // Altura dos campos de entrada
        borderColor: '#FF6347', // Cor da borda
        borderWidth: 1, // Espessura da borda
        marginBottom: 12, // Espaço inferior entre os campos
        paddingHorizontal: 8, // Espaçamento interno horizontal
        borderRadius: 5, // Bordas arrendondads
        color: '#333', // Cor do texto
    },
});

export default FormIMC; // Exporta o componente