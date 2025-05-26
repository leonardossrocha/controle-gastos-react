// Importa os hooks e componentes do React e React Native
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

// Componente principal exportado (tela inicial do app)
export default function HomeScreen() {
  // Hooks de estado para armazenar a descrição, valor e a lista de gastos
  const [descricao, setDescricao] = useState(''); // Armazena o texto da descrição do gasto
  const [valor, setValor] = useState('');         // Armazena o valor do gasto
  const [gastos, setGastos] = useState([]);       // Armazena a lista de gastos (como um array)

  // Função chamada ao pressionar o botão "Adicionar Gasto"
  const adicionarGasto = () => {
    // Verifica se os campos não estão vazios
    if (descricao && valor) {
      // Adiciona o novo gasto à lista com um ID único (baseado em timestamp)
      setGastos([...gastos, { id: Date.now().toString(), descricao, valor }]);

      // Limpa os campos após o cadastro
      setDescricao('');
      setValor('');
    }
  };

  // Função para remover um gasto da lista (clicando no item)
  const removerGasto = (id) => {
    // Filtra a lista e mantém apenas os itens cujo id é diferente do clicado
    setGastos(gastos.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Campo para digitar a descrição do gasto */}
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />

      {/* Campo para digitar o valor do gasto */}
      <TextInput
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
        style={styles.input}
      />

      {/* Botão que chama a função para adicionar o gasto */}
      <Button title="Adicionar Gasto" onPress={adicionarGasto} />

      {/* Lista os itens de gasto cadastrados */}
      <FlatList
        data={gastos} // Lista de dados a ser exibida
        keyExtractor={item => item.id} // Função que define o identificador único de cada item
        renderItem={({ item }) => (
          // Cada item da lista é um texto clicável (para remover o item)
          <Text onPress={() => removerGasto(item.id)} style={styles.item}>
            {item.descricao}: R$ {item.valor}
          </Text>
        )}
      />
    </View>
  );
}

// Estilos utilizados na interface do app
const styles = StyleSheet.create({
  container: { padding: 20 },                           // Margem interna do container principal
  input: { borderWidth: 1, padding: 10, marginVertical: 5 }, // Estilo para os campos de texto
  item: { marginTop: 10, fontSize: 16 },                // Estilo para os itens da lista
});
