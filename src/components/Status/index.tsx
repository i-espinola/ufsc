import React, { useState, useEffect } from 'react';
import { Anchor } from '@app/components';
import { PageStatus } from './Styled';
import { useRouter } from 'next/router';

export interface StatusProps {
  loading?: boolean;
  notFound?: boolean;
  error?: boolean;
  seconds?: number;
}

const Status = ({ loading, notFound, error, seconds = 10 }: StatusProps) => {
  const [timer, setTimer] = useState(seconds);
  const router = useRouter();
  const spinner = './load.gif';

  // useEffect(() => {
  //   if (notFound || error) setTimer(seconds);
  // }, []);

  useEffect(() => {
    if (timer > 0) setTimeout(() => setTimer(timer - 1), 1000);
    else {
      router.push('/');
    }
  }, [timer, router]);

  const BtnHome = (
    <Anchor block={true} href="/">
      Início
    </Anchor>
  );

  const setting = {
    notFound: {
      status: '404',
      message: 'Esta página não existe.',
      info: `você sera redirecionado em ${timer} segundos.`,
      button: BtnHome,
    },
    Loading: {
      // eslint-disable-next-line @next/next/no-img-element
      status: <img src={spinner} alt="loading" />,
      message: 'Carregando informações',
      info: false,
      button: false,
    },
    error: {
      status: ':(',
      message: 'Algo inesperado aconteceu, tente outra vez.',
      info: `você sera redirecionado em ${timer} segundos.`,
      button: BtnHome,
    },
  };

  const buildPage = (data: any) => (
    <PageStatus>
      <div>
        <div>
          <span>{data?.status || ''}</span>
          <div>
            <h1>{data?.message || ''}</h1>
          </div>
        </div>
        {data.info ? (
          <p>você sera redirecionado em {timer} segundos.</p>
        ) : (
          false
        )}
        {data.button ? BtnHome : false}
      </div>
    </PageStatus>
  );

  if (notFound) return buildPage(setting.notFound);
  if (loading) return buildPage(setting.Loading);
  if (error) return buildPage(setting.error);
  return <></>;
};

Status.defaultProps = {
  loader: false,
  notFound: false,
  error: false,
};

export default Status;
export { Status };
