
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [gastos, setGastos] = useState([]);

  const adicionarGasto = () => {
    if (descricao && valor) {
      setGastos([...gastos, { id: Date.now().toString(), descricao, valor }]);
      setDescricao('');
      setValor('');
    }
  };

  const removerGasto = (id) => {
    setGastos(gastos.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} style={styles.input} />
      <TextInput placeholder="Valor" value={valor} onChangeText={setValor} keyboardType="numeric" style={styles.input} />
      <Button title="Adicionar Gasto" onPress={adicionarGasto} />
      <FlatList
        data={gastos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text onPress={() => removerGasto(item.id)} style={styles.item}>
            {item.descricao}: R$ {item.valor}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5 },
  item: { marginTop: 10, fontSize: 16 },
});

