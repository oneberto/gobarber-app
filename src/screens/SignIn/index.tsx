import React, { useCallback, useRef } from 'react';
import Background from '~/components/background';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Form from '~/components/Form';
import { SignInContainer } from './styles';

import { Image, TextInput } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, AllRoutes } from '~/routes/paramsList';

interface IProps {
    navigation: StackNavigationProp<RootStackParamList>;
}

export default function SignIn({ navigation }: IProps) {
    const handleSubmit = useCallback(() => {
        console.log('handleSubmit');
    }, []);

    const passwordRef = useRef<TextInput>();

    return (
        <Background>
            <SignInContainer>
                <Image source={require('../../assets/logo.png')} />

                <Form top={15}>
                    <Input
                        icon="mail-outline"
                        keyboardType="email-address"
                        placeholder="email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            !!passwordRef.current && passwordRef.current.focus()
                        }
                    />

                    <Input
                        icon="lock-outline"
                        secureTextEntry={true}
                        placeholder="senha"
                        ref={passwordRef}
                        onSubmitEditing={handleSubmit}
                        returnKeyType="send"
                    />

                    <Button onPress={handleSubmit} top={5} variant="success">
                        Entrar
                    </Button>

                    <Button
                        top={10}
                        onPress={() => navigation.navigate(AllRoutes.SignUp)}>
                        Criar conta
                    </Button>
                </Form>
            </SignInContainer>
        </Background>
    );
}
