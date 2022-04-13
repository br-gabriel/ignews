import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                        <time>13 de abril de 2022</time>
                        <strong>SSG vs. SSR in Next.js</strong>
                        <p>
                            Next.js is one of the most important and 
                            widely-used React frameworks. Today, it has 
                            become a consolidated framework for building 
                            amazing web applications.
                        </p>
                    </a>
                    <a href='#'>
                        <time>13 de abril de 2022</time>
                        <strong>SSG vs. SSR in Next.js</strong>
                        <p>
                            Next.js is one of the most important and 
                            widely-used React frameworks. Today, it has 
                            become a consolidated framework for building 
                            amazing web applications.
                        </p>
                    </a>
                    <a href='#'>
                        <time>13 de abril de 2022</time>
                        <strong>SSG vs. SSR in Next.js</strong>
                        <p>
                            Next.js is one of the most important and 
                            widely-used React frameworks. Today, it has 
                            become a consolidated framework for building 
                            amazing web applications.
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
}