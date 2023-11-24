import { ReactNode } from 'react';
import Head from 'next/head';
import ErrorBoundary from './ErrorBoundary';


export interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>Anime</title>
        <meta
          name="keywords"
          content="next,javascript,nextjs,react,typescript"
        />
        <meta
          name="description"
          content="this application using https://api.jikan.moe/v4/anime"
        />
        <meta charSet="utf-8" />
        
        </Head>
        <ErrorBoundary>
      {children}
        </ErrorBoundary>
    </>
  );
}
