import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import * as yup from 'yup';
import { useFormik } from 'formik';
import api from '../Services/api'
import { ActivityIndicator } from 'react-native-paper';

export default function Cadastro({ navigation }) {

    const validacao = yup.object().shape({
        nome: yup
            .string()
            .required('Campo obrigatório'),
        descricao: yup
            .string()
            .required('Campo obrigatório'),
        imagem: yup
            .string()
            .url('Insira uma URL válida')
            .required('Campo obrigatório'),
        valorUnitario: yup
            .number().
            typeError('Preço deve ser um número')
            .required('Campo obrigatório'),
        quantidadeEstoque: yup
            .number()
            .typeError('Estoque deve ser um número')
            .required('Campo obrigatório'),
    });


    const {
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
    } = useFormik({
        initialValues: {
            nome: '',
            descricao: '',
            imagem: '',
            valorUnitario: '',
            quantidadeEstoque: '',
        },
        validationSchema: validacao,
        onSubmit: (values) => {
            values.valorUnitario = parseFloat(values.valorUnitario);
            values.quantidadeEstoque = parseInt(values.quantidadeEstoque, 10);
            postDados(values);
        },
    });
    const confirmSubmit = () => {
        Alert.alert(
            'Confirmação',
            'Deseja realmente cadastrar o produto?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Confirmar', onPress: handleSubmit },
            ],
            { cancelable: true }
        );
    }

    const [loading, setLoading] = useState(false);

    const postDados = async (dados) => {
        try {
            setLoading(true);

            const response = await api.post('/listadeprodutos', dados)
            console.log('Data to be submitted:', response.data);

            setTimeout(() => {
                setLoading(false);
                Alert.alert('Aviso', "Produto Cadastrado com Sucesso");
                navigation.navigate('Home');
            }, 2000);
        } catch (error) {
            Alert.alert('Error', 'Erro ao deletar dados :', error)
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={-400} style={styles.containerCadastro}>

                <View style={styles.containerTitulo}>
                    <Text style={styles.titulo}>CADASTRO DE PRODUTOS</Text>
                </View>

                <View style={styles.containerInput}>
                    {touched.nome && errors.nome && (
                        <Text style={styles.errorText}>{errors.nome}</Text>
                    )}
                    <TextInput
                        style={styles.input}
                        value={values.nome}
                        onChangeText={handleChange('nome')}
                        placeholder='Digite o nome do produto'
                        placeholderTextColor='#fff'
                    />

                    {touched.descricao && errors.descricao && (
                        <Text style={styles.errorText}>{errors.descricao}</Text>
                    )}
                    <TextInput
                        style={styles.input}
                        value={values.descricao}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={handleChange('descricao')}
                        placeholder='Digite a descricao do produto'
                        placeholderTextColor='#fff'
                    />

                    {touched.valorUnitario && errors.valorUnitario && (
                        <Text style={styles.errorText}>{errors.valorUnitario}</Text>
                    )}
                    <TextInput
                        style={styles.input}
                        value={values.valorUnitario.toString()}
                        onChangeText={(text) => handleChange('valorUnitario')(text.replace(/[^0-9.]/g, ''))}
                        placeholder='Digite o preço do produto'
                        placeholderTextColor='#fff'
                        keyboardType='numeric'
                    />

                    {touched.quantidadeEstoque && errors.quantidadeEstoque && (
                        <Text style={styles.errorText}>{errors.quantidadeEstoque}</Text>
                    )}
                    <TextInput
                        style={styles.input}
                        value={values.quantidadeEstoque.toString()}
                        onChangeText={(text) => handleChange('quantidadeEstoque')(text.replace(/[^0-9]/g, ''))}
                        placeholder='Digite a quantidade do produto em estoque'
                        placeholderTextColor='#fff'
                        keyboardType='numeric'
                    />

                    {touched.imagem && errors.imagem && (
                        <Text style={styles.errorText}>{errors.imagem}</Text>
                    )}
                    <TextInput
                        style={styles.input}
                        value={values.imagem}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={handleChange('imagem')}
                        placeholder='Insira URL da imagem do produto'
                        placeholderTextColor='#fff'
                    />
                </View>
                <View style={styles.post}>
                    <TouchableOpacity onPress={confirmSubmit} style={[styles.botaoPost, !isValid && styles.botaoPostDesabilitado]}>
                        <Text style={styles.textoPost}>Cadastrar Novo Produto</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            {loading && (
                <View style={styles.overlay}>
                    <ActivityIndicator
                        style={{ flex: 1 }}
                        size="large"
                        color="#fff"
                    />
                </View>
            )}
        </SafeAreaView>
    );
};

