// Importa o React e o hook useState para gerenciamento de estado
import React, { useState } from 'react';

// Importa componentes do React Native utilizados na interface
import {
  View,              // Container de layout
  TextInput,         // Campo de entrada de texto
  Text,              // Componente para exibir textos
  TouchableOpacity,  // Botão personalizável sensível ao toque
  FlatList,          // Lista otimizada para exibir coleções de dados
  StyleSheet,        // Estilo dos componentes
  Alert              // Caixa de diálogo para exibir mensagens
} from 'react-native';

// Componente principal da tela inicial
export default function HomeScreen() {
  // Cria estados para armazenar os dados digitados e a lista de gastos
  const [descricao, setDescricao] = useState('');  // Estado da descrição do gasto
  const [valor, setValor] = useState('');          // Estado do valor do gasto
  const [gastos, setGastos] = useState([]);        // Estado da lista de gastos

  // Função para adicionar um novo gasto à lista
  const adicionarGasto = () => {
    // Verifica se os campos foram preenchidos
    if (!descricao || !valor) {
      Alert.alert('Erro', 'Preencha todos os campos!'); // Alerta caso esteja vazio
      return; // Sai da função sem adicionar
    }

    // Verifica se o valor digitado é numérico
    if (isNaN(parseFloat(valor))) {
      Alert.alert('Erro', 'Digite um valor numérico!'); // Alerta se não for número
      return;
    }

    // Cria um objeto representando o novo gasto
    const novoGasto = {
      id: Date.now().toString(),          // Gera um ID único com o timestamp atual
      descricao,                          // Usa o valor atual de descrição
      valor: parseFloat(valor).toFixed(2) // Formata o valor para 2 casas decimais
    };

    // Atualiza o estado da lista de gastos com o novo item
    setGastos([...gastos, novoGasto]);

    // Limpa os campos de entrada
    setDescricao('');
    setValor('');
  };

  // Função para remover um gasto com base no ID
  const removerGasto = (id) => {
    // Filtra a lista, mantendo apenas os itens cujo ID seja diferente do selecionado
    setGastos(gastos.filter(item => item.id !== id));
  };

  // Função para calcular o total gasto
  const totalGasto = gastos
    .reduce((acc, item) => acc + parseFloat(item.valor), 0) // Soma todos os valores
    .toFixed(2); // Formata com 2 casas decimais

  // Renderiza os elementos da interface
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Gastos Diários</Text>

      {/* Campo de entrada para a descrição do gasto */}
      <TextInput
        style={styles.input}
        placeholder="Descrição do gasto"
        value={descricao}
        onChangeText={setDescricao}
      />

      {/* Campo de entrada para o valor do gasto */}
      <TextInput
        style={styles.input}
        placeholder="Valor (ex: 25.00)"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      {/* Botão que chama a função de adicionar gasto */}
      <TouchableOpacity style={styles.button} onPress={adicionarGasto}>
        <Text style={styles.buttonText}>Adicionar Gasto</Text>
      </TouchableOpacity>

      {/* Lista de itens gastos exibida com FlatList */}
      <FlatList
        data={gastos}                      // Fonte de dados
        keyExtractor={item => item.id}    // Chave única por item
        renderItem={({ item }) => (       // Renderização de cada item
          <TouchableOpacity onLongPress={() => removerGasto(item.id)}>
            <Text style={styles.item}>
              {item.descricao} - R$ {item.valor}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Exibição do valor total gasto */}
      <Text style={styles.total}>Total: R$ {totalGasto}</Text>
    </View>
  );
}

// Estilos aplicados aos componentes visuais da aplicação
const styles = StyleSheet.create({
  container: {
    flex: 1,                      // Ocupa todo o espaço disponível
    padding: 20,                 // Espaçamento interno padrão
    paddingTop: 60,              // Espaço extra no topo
    backgroundColor: '#f5f5f5',  // Cor de fundo clara
  },
  title: {
    fontSize: 22,           // Tamanho da fonte
    fontWeight: 'bold',     // Texto em negrito
    marginBottom: 20,       // Espaço abaixo do título
    textAlign: 'center',    // Centraliza o texto
  },
  input: {
    backgroundColor: '#fff',   // Fundo branco
    padding: 12,               // Espaçamento interno
    borderRadius: 8,           // Cantos arredondados
    marginBottom: 10,          // Espaço entre os inputs
    borderWidth: 1,            // Borda visível
    borderColor: '#ccc',       // Cor da borda cinza clara
  },
  button: {
    backgroundColor: '#3b82f6',  // Cor azul
    padding: 12,                 // Espaçamento interno
    borderRadius: 8,             // Cantos arredondados
    alignItems: 'center',        // Centraliza o texto
    marginBottom: 20,            // Espaço abaixo do botão
  },
  buttonText: {
    color: '#fff',           // Cor branca
    fontWeight: 'bold',      // Negrito
  },
  item: {
    backgroundColor: '#e0e7ff',  // Cor de fundo azul claro
    padding: 10,                 // Espaçamento interno
    borderRadius: 8,             // Cantos arredondados
    marginBottom: 10,            // Espaço entre itens
    fontSize: 16,                // Tamanho da fonte
  },
  total: {
    marginTop: 20,          // Espaço acima do total
    fontSize: 18,           // Tamanho da fonte
    fontWeight: 'bold',     // Negrito
    textAlign: 'center',    // Centralizado
  },
});
