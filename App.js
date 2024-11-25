import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import * as obj_DDD from './services/ddd';
import CardCidade from './components/card_cidade';

export default function App() {
  const [ddd, setDDD] = useState('');
  const [uf, setUf] = useState('');
  const [cities, setCities] = useState([]);
  const [emFoco, setEmfoco] = useState(false);

  useEffect(() => {
    if (ddd.length === 2) {
      obj_DDD.buscarDDDCallBack(ddd, (dados) => {
        console.log(dados);
        setUf(dados.state);
        setCities(dados.cities || []); // Garante que o valor seja um array.
      });
    }
  }, [ddd]);

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          { borderColor: emFoco ? '#B6861E' : '#B6861E', color: "#fff", },
        ]}
        placeholder="Enter DDD"
        keyboardType="numeric" // Define o teclado como numérico
        maxLength={2} // Define o máximo de caracteres no input
        onChangeText={(text) => setDDD(text.replace(/[^0-9]/g, ''))} // Remove caracteres não numéricos
        onFocus={() => setEmfoco(true)} // Altera o estado ao ganhar foco
        onBlur={() => setEmfoco(false)} // Altera o estado ao perder foco
      />

      <View style={styles.viewLista}>
        <FlashList
          data={cities}
          renderItem={({ item, index }) => (
            <CardCidade nome={item} uf={uf} key={index} />
          )}
          estimatedItemSize={200}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171613',  // Cor neutra e suave para o fundo
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Adiciona padding horizontal para mais espaçamento
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 20,
    fontSize: 16,
  },
  viewLista: {
    flex: 1,
    width: '100%',
  },
});
