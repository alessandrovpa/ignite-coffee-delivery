import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ContentContainer } from './styles';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  );
}
