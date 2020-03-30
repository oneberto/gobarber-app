import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import Background from '~/components/background';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Form from '~/components/Form';

export default function SignIn() {
    const handleSubmit = useCallback(() => {}, []);

    return (
        <Background>
            <SafeAreaView>
                <Form>
                    <Input
                        icon="mail-outline"
                        keyboardType="email-address"
                        placeholder="email"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />

                    <Input />

                    <Button onPress={handleSubmit}>Entrar</Button>
                </Form>
            </SafeAreaView>
        </Background>
    );
}
