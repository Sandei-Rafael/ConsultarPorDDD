import { StyleSheet, Text, View } from 'react-native';

const CardCidade = ({nome,uf}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cidade}>{nome}</Text>
            <Text >-</Text>
            <Text style={styles.uf}>{uf}</Text>
        </View>
    );
}

export default CardCidade;

const styles = StyleSheet.create({
    card: {
        width: 'auto',
        padding: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#f1f1f1',
        borderBottomWidth: 0.3,
        borderBottomColor: '#018080'
    },

    cidade: {
        fontSize: 18,
        color: "#000",
        fontWeight: "600"
    },

    uf:{
        fontSize: 18,
        color: "#0206ff",
        fontWeight: "900"
    }
  });