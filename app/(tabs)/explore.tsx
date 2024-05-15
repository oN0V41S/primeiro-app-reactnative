import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>Esse app possui um exemplo sobre como começar.</ThemedText>
      <Collapsible title="Roteamento baseado em arquivos">
        <ThemedText>
          Esse app tem duas telas:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> e{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          O arquivo de layout é <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          configure a barra de navegação.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, e suporte web">
        <ThemedText>
          Você pode abrir esse projeto em Android, iOS, e na web. Para abrir a versão web, pressione{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> no terminal que está rodando esse projeto.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Imagens">
        <ThemedText>
          Para imagem staticas, você pode usar o <ThemedText type="defaultSemiBold">@2x</ThemedText> e{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> sufixos para fornecer atquivos para diferentes
          densidades de tela
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Fontes customizadas">
        <ThemedText>
          Abra <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> para ver como carregar{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            fontes customizadas como essa.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Componente com modo Tema Claro e Escuro">
        <ThemedText>
          Esse template tem suporte a modo claro e modo escuro. O{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook ( gancho ) permite inspecionar
          qual atual esquema de cor do usuário, então você pode ajustar as cores da UI ( Interface de Usuário ) de acordo com esquema do usuário.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animações">
        <ThemedText>
          Esse template possui um exemplo de componente animado. O{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> o componente usa o poderoso{' '}
          <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> biblioteca
          para criar a animação de mão balançando.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
