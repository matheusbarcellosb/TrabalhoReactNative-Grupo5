import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import * as yup from 'yup';
import { useFormik } from 'formik';
import api from '../Services/api'
import { ActivityIndicator } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export default function Editar({ route }) {
    const navigation = useNavigation()
    const { item } = route?.params;

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

    const initialValues = {
        nome: item.nome,
        descricao: item.descricao,
        imagem: item.imagem,
        valorUnitario: item.valorUnitario.toString(),
        quantidadeEstoque: item.quantidadeEstoque.toString(),
    };

    const {
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
    } = useFormik({
        initialValues,
        validationSchema: validacao,
        onSubmit: (values) => {
            values.valorUnitario = parseFloat(values.valorUnitario);
            values.quantidadeEstoque = parseInt(values.quantidadeEstoque, 10);
            putDados(values);
        },
    });

    const getDados = async () => {
        try {
            const response = await api.get(`/listadeprodutos/${item.id}`);
            const produto = response.data;

            handleChange('nome')(produto.nome);
            handleChange('descricao')(produto.descricao);
            handleChange('imagem')(produto.imagem);
            handleChange('valorUnitario')(produto.valorUnitario.toString());
            handleChange('quantidadeEstoque')(produto.quantidadeEstoque.toString());
        } catch (error) {
            console.error('Erro ao buscar dados do produto:', error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            getDados();
        }, [])
    );
    const confirmSubmit = () => {
        Alert.alert(
            'Confirmação',
            'Deseja realmente atualizar o produto?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Confirmar', onPress: handleSubmit },
            ],
            { cancelable: true }
        );
    }

    const [loading, setLoading] = useState(false);

    const putDados = async (dados) => {
        try {
            setLoading(true);

            const response = await api.put(`/listadeprodutos/${item.id}`, dados);
            console.log('Data to be updated:', response.data);

            setTimeout(() => {
                setLoading(false);
                Alert.alert('Aviso', "Produto Atualizado com Sucesso");
                navigation.navigate('Home');
            }, 2000);
        } catch (error) {
            Alert.alert('Error', 'Erro ao atualizar dados:', error)
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={-400} style={styles.containerAtualizar}>

                <View style={styles.containerTitulo}>
                    <Text style={styles.titulo}>Editar Produto</Text>
                </View>

                <View style={styles.containerInput}>
                    <Text style={{ color: '#fff', fontSize: 15, marginBottom: 5}}>Id: {item.id}</Text>
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
                <View style={styles.put}>
                    <TouchableOpacity onPress={confirmSubmit} style={[styles.botaoPut, !isValid && styles.botaoPutDesabilitado]}>
                        <Text style={styles.textoPut}>Atualizar Produto</Text>
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

