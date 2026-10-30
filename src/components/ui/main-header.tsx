import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type MainHeaderProps = {
    firstname: string;
};

export default function MainHeader({ firstname }: MainHeaderProps) {
    const theme = useTheme();

    return (
        <View>
            <View style={[styles.container, { backgroundColor: theme.background }]}>
                <Image
                    source={require('@/assets/images/logo.png')}
                    style={styles.logo}
                />
            </View>
            <View>
                <Text style={[styles.firstname, { color: theme.text }]}>Welcome back, {firstname}!</Text>
                <Text style={[styles.title, { color: theme.text }]}>Let's get started!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: Spacing.two,
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
    },
    firstname: {
        fontSize: 24,
        fontWeight: '700',
    },
    logo: {
        width: 50,
        height: 50,
    },
});