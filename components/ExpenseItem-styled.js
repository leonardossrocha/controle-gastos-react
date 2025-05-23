import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert
} from 'react-native';

export default function HomeScreen() {
  // Estados para armazenar a descrição, valor e a lista de gastos
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [gastos, setGastos] = useState([]);

  // Função para adicionar um novo gasto
  const adicionarGasto = () => {
    if (!descricao || !valor) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (isNaN(parseFloat(valor))) {
      Alert.alert('Erro', 'Digite um valor numérico!');
      return;
    }

    const novoGasto = {
      id: Date.now().toString(),
      descricao,
      valor: parseFloat(valor).toFixed(2),
    };

    setGastos([...gastos, novoGasto]);
    setDescricao('');
    setValor('');
  };

  // Função para remover um gasto da lista
  const removerGasto = (id) => {
    setGastos(gastos.filter(item => item.id !== id));
  };

  // Função para calcular o total gasto
  const totalGasto = gastos.reduce((acc, item) => acc + parseFloat(item.valor), 0).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Gastos Diários</Text>

      {/* Campo para inserir a descrição do gasto */}
      <TextInput
        style={styles.input}
        placeholder="Descrição do gasto"
        value={descricao}
        onChangeText={setDescricao}
      />

      {/* Campo para inserir o valor do gasto */}
      <TextInput
        style={styles.input}
        placeholder="Valor (ex: 25.00)"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      {/* Botão para adicionar o gasto */}
      <TouchableOpacity style={styles.button} onPress={adicionarGasto}>
        <Text style={styles.buttonText}>Adicionar Gasto</Text>
      </TouchableOpacity>

      {/* Lista de gastos adicionados */}
      <FlatList
        data={gastos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onLongPress={() => removerGasto(item.id)}>
            <Text style={styles.item}>
              {item.descricao} - R$ {item.valor}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Exibe o total gasto no rodapé */}
      <Text style={styles.total}>Total: R$ {totalGasto}</Text>
    </View>
  );
}

// Estilização da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#e0e7ff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  total: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});