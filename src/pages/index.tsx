import * as S from './styles';

export default function Home() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>Won - Games!</S.Title>
      <S.Description>Typescript, NextJS e Styled Components</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela de código"
      />
    </S.Wrapper>
  );
}
