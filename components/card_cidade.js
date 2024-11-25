import { StyleSheet, Text, View } from 'react-native';

const CardCidade = ({ nome, uf }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cidade}>{nome}</Text>
            <Text style={styles.linha}>-</Text>
            <Text style={styles.uf}>{uf}</Text>
        </View>
    );
}

export default CardCidade;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#26221A',  // Fundo branco para o card
        borderBottomWidth: 0.5,
        borderBottomColor: '#B6861E',  // Linha sutil e neutra entre os cards
        marginBottom: 12,  // Espaçamento entre os cards
        borderRadius: 8,  // Bordas arredondadas para um visual mais suave
    },

    cidade: {
        fontSize: 16,
        color: "#fff", // Cor de texto mais escura e neutra
        fontWeight: "500",  // Peso de fonte mais suave para uma leitura mais confortável
    },

    uf: {
        fontSize: 16,
        color: "#B6861E",  // Tom de verde-azulado para destacar a UF
        fontWeight: "600",  // Destaca a UF com um peso de fonte mais forte
    },
    linha: {
        color: "#B6861E",
    }
});
