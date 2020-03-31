import React, { useCallback } from 'react';
import { Image } from 'react-native';
import Background from '~/components/background';
import { SignUpContainer } from './styles';
import Form from '~/components/Form';
import Input from '~/components/Input';
import { RootStackParamList } from '~/routes/paramsList';
import Button from '~/components/Button';
import { StackNavigationProp } from '@react-navigation/stack';

interface IProps {
    navigation: StackNavigationProp<RootStackParamList>;
}

export default function SignUp({ navigation }: IProps) {
    const handleSubmit = useCallback(() => {}, []);

    return (
        <Background>
            <SignUpContainer>
                <Image source={require('../../assets/logo.png')} />

                <Form top={15}>
                    <Input
                        icon="person-outline"
                        placeholder="nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />

                    <Input
                        icon="mail-outline"
                        keyboardType="email-address"
                        placeholder="email"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />

                    <Input
                        icon="lock-outline"
                        secureTextEntry={true}
                        placeholder="senha"
                    />

                    <Button onPress={handleSubmit} top={5} variant="success">
                        Cadastrar
                    </Button>

                    <Button
                        top={10}
                        variant="danger"
                        onPress={() => navigation.goBack()}>
                        Cancelar
                    </Button>
                </Form>
            </SignUpContainer>
        </Background>
    );
}
