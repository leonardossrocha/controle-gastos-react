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
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [gastos, setGastos] = useState([]);
  const [editandoId, setEditandoId] = useState(null); // ID do item em edição

  const adicionarOuAtualizarGasto = () => {
    if (!descricao || !valor) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (isNaN(parseFloat(valor))) {
      Alert.alert('Erro', 'Digite um valor numérico!');
      return;
    }

    if (editandoId) {
      // Atualiza gasto existente
      const gastosAtualizados = gastos.map(item =>
        item.id === editandoId
          ? { ...item, descricao, valor: parseFloat(valor).toFixed(2) }
          : item
      );
      setGastos(gastosAtualizados);
      setEditandoId(null);
    } else {
      // Adiciona novo gasto
      const novoGasto = {
        id: Date.now().toString(),
        descricao,
        valor: parseFloat(valor).toFixed(2),
      };
      setGastos([...gastos, novoGasto]);
    }

    // Limpa os campos após adicionar ou atualizar
    setDescricao('');
    setValor('');
  };

  const removerGasto = (id) => {
    setGastos(gastos.filter(item => item.id !== id));
    if (editandoId === id) {
      // Cancela edição se o item for removido
      setEditandoId(null);
      setDescricao('');
      setValor('');
    }
  };

  const editarGasto = (item) => {
    setDescricao(item.descricao);
    setValor(item.valor);
    setEditandoId(item.id);
  };

  const totalGasto = gastos.reduce((acc, item) => acc + parseFloat(item.valor), 0).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Gastos Diários</Text>

      <TextInput
        style={styles.input}
        placeholder="Descrição do gasto"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor (ex: 25.00)"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <TouchableOpacity style={styles.button} onPress={adicionarOuAtualizarGasto}>
        <Text style={styles.buttonText}>
          {editandoId ? 'Atualizar Gasto' : 'Adicionar Gasto'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={gastos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>
              {item.descricao} - R$ {item.valor}
            </Text>

            <View style={styles.actions}>
              {/* Botão Editar */}
              <TouchableOpacity onPress={() => editarGasto(item)} style={styles.editButton}>
                <Text style={styles.actionText}>Editar</Text>
              </TouchableOpacity>

              {/* Botão Remover */}
              <TouchableOpacity onPress={() => removerGasto(item.id)} style={styles.deleteButton}>
                <Text style={styles.actionText}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Text style={styles.total}>Total: R$ {totalGasto}</Text>
    </View>
  );
}

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
  itemContainer: {
    backgroundColor: '#e0e7ff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  editButton: {
    marginRight: 10,
  },
  deleteButton: {},
  actionText: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
  total: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});